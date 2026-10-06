const RESULTS_KEY = "smartseva.matchingSchemeIds";
const PROFILE_KEY = "smartseva.searchProfile";
const SELECTED_SCHEME_KEY = "smartseva.selectedSchemeId";

const resultsCount = document.getElementById("resultsCount");
const profileSummary = document.getElementById("profileSummary");
const matchedResults = document.getElementById("matchedResults");
const noMatches = document.getElementById("noMatches");
const sessionExpired = document.getElementById("sessionExpired");
const schemeGrid = document.getElementById("schemeGrid");
const filterEmpty = document.getElementById("filterEmpty");
const searchInput = document.getElementById("schemeSearch");
const categoryFilter = document.getElementById("categoryFilter");
const filterCount = document.getElementById("filterCount");

let matchedSchemes = [];

function readSessionJson(key) {
  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function titleCase(value) {
  if (!value) return "Not provided";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function appendTextElement(parent, tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function makeSchemeCard(scheme) {
  const card = document.createElement("a");
  card.className = "scheme-card";
  card.href = "scheme-details.html";
  card.dataset.schemeId = String(scheme.id);
  card.setAttribute("aria-label", `View scheme details for ${scheme.name}`);

  // Card Header: Category tag
  appendTextElement(card, "span", "scheme-category", scheme.category.toUpperCase());

  // Scheme Title
  appendTextElement(card, "h3", "scheme-card-title", scheme.name);

  // Short Description
  appendTextElement(card, "p", "scheme-card-description", scheme.shortDescription || scheme.description);

  // Benefit Box
  const benefitBox = document.createElement("div");
  benefitBox.className = "scheme-card-benefit";
  appendTextElement(benefitBox, "span", "benefit-label", "BENEFIT");
  appendTextElement(benefitBox, "strong", "benefit-amount", scheme.benefit || scheme.benefitText);
  card.append(benefitBox);

  // Card Footer: Match Badge + Action Button
  const cardFooter = document.createElement("div");
  cardFooter.className = "scheme-card-footer";
  
  const matchBadge = document.createElement("span");
  matchBadge.className = "match-badge";
  matchBadge.innerHTML = `<span aria-hidden="true">✓</span> Potential Match`;
  cardFooter.append(matchBadge);

  const actionLink = document.createElement("span");
  actionLink.className = "card-action";
  actionLink.innerHTML = `View Scheme Details <span aria-hidden="true">→</span>`;
  cardFooter.append(actionLink);

  card.append(cardFooter);

  card.addEventListener("click", () => {
    sessionStorage.setItem(SELECTED_SCHEME_KEY, String(scheme.id));
  });

  return card;
}

function renderMatches() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const visibleSchemes = matchedSchemes.filter((scheme) => {
    const searchable = `${scheme.name} ${scheme.category} ${scheme.shortDescription || scheme.description}`.toLowerCase();
    const matchesQuery = !query || searchable.includes(query);
    const matchesCategory = !category || scheme.category === category;
    return matchesQuery && matchesCategory;
  });

  schemeGrid.replaceChildren(...visibleSchemes.map(makeSchemeCard));
  filterEmpty.hidden = visibleSchemes.length > 0;
  
  if (filterCount) {
    if (visibleSchemes.length === matchedSchemes.length) {
      filterCount.textContent = `Showing all ${visibleSchemes.length} matching ${visibleSchemes.length === 1 ? "scheme" : "schemes"}`;
    } else {
      filterCount.textContent = `Showing ${visibleSchemes.length} of ${matchedSchemes.length} schemes`;
    }
  }
}

// Initialise page from sessionStorage
const rawMatchIds = sessionStorage.getItem(RESULTS_KEY);
const searchProfile = readSessionJson(PROFILE_KEY);
const parsedMatchIds = readSessionJson(RESULTS_KEY);

if (rawMatchIds === null || !searchProfile || !Array.isArray(parsedMatchIds)) {
  sessionExpired.hidden = false;
  resultsCount.textContent = "Your search details were not found in this browser session.";
} else {
  const matchIdSet = new Set(parsedMatchIds.map(Number));
  matchedSchemes = schemes.filter((scheme) => matchIdSet.has(scheme.id));

  profileSummary.hidden = false;
  document.getElementById("summaryAge").textContent = `${searchProfile.age} years`;
  document.getElementById("summaryGender").textContent = titleCase(searchProfile.gender);
  document.getElementById("summaryIncome").textContent = `₹${Number(searchProfile.annualIncome).toLocaleString("en-IN")}`;
  document.getElementById("summaryArea").textContent = titleCase(searchProfile.ruralUrban);

  if (!matchedSchemes.length) {
    noMatches.hidden = false;
    resultsCount.textContent = "Based on the information you provided, we couldn't find any potentially matching schemes.";
  } else {
    matchedResults.hidden = false;
    resultsCount.textContent = `Based on the information you provided, we found ${matchedSchemes.length} potentially matching ${matchedSchemes.length === 1 ? "scheme" : "schemes"}.`;

    const categories = [...new Set(matchedSchemes.map((scheme) => scheme.category))].sort((a, b) => a.localeCompare(b));
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryFilter.append(option);
    });

    const filterBar = document.getElementById("filterBar");
    if (filterBar) {
      filterBar.hidden = matchedSchemes.length < 2;
    }

    searchInput.addEventListener("input", renderMatches);
    categoryFilter.addEventListener("change", renderMatches);

    const clearBtn = document.getElementById("clearFilters");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        categoryFilter.value = "";
        renderMatches();
        searchInput.focus();
      });
    }

    renderMatches();
  }
}

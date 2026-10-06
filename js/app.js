const eligibilityForm = document.getElementById("eligibilityForm");
const submitButton = document.getElementById("checkEligibility");
const formStatus = document.getElementById("formStatus");

function updateSubmitState() {
  if (!eligibilityForm || !submitButton) return;
  submitButton.disabled = !eligibilityForm.checkValidity();
}

// Pre-fill form if user clicked "Edit Details" from results or details page
try {
  const savedProfileStr = sessionStorage.getItem("smartseva.searchProfile");
  if (savedProfileStr && eligibilityForm) {
    const saved = JSON.parse(savedProfileStr);
    if (eligibilityForm.elements.name && saved.name) {
      eligibilityForm.elements.name.value = saved.name;
    }
    if (eligibilityForm.elements.age && saved.age) {
      eligibilityForm.elements.age.value = saved.age;
    }
    if (eligibilityForm.elements.gender && saved.gender) {
      eligibilityForm.elements.gender.value = saved.gender;
    }
    if (eligibilityForm.elements.annualIncome && (saved.annualIncome !== undefined && saved.annualIncome !== "")) {
      eligibilityForm.elements.annualIncome.value = saved.annualIncome;
    }
    if (eligibilityForm.elements.ruralUrban && saved.ruralUrban) {
      eligibilityForm.elements.ruralUrban.value = saved.ruralUrban;
    }
  }
} catch {
  // Gracefully fallback if session storage is disabled or profile is invalid
}

if (eligibilityForm) {
  eligibilityForm.addEventListener("input", updateSubmitState);
  eligibilityForm.addEventListener("change", updateSubmitState);

  eligibilityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!eligibilityForm.reportValidity()) return;

    const profile = {
      name: eligibilityForm.elements.name ? eligibilityForm.elements.name.value.trim() : "",
      age: Number(eligibilityForm.elements.age.value),
      gender: eligibilityForm.elements.gender.value,
      annualIncome: Number(eligibilityForm.elements.annualIncome.value),
      ruralUrban: eligibilityForm.elements.ruralUrban.value
    };

    const matchingSchemeIds = computeEligibility(profile).map((scheme) => scheme.id);

    if (formStatus) {
      formStatus.hidden = false;
      formStatus.textContent = "Checking schemes...";
    }
    submitButton.disabled = true;
    submitButton.innerHTML = `<span class="button-spinner" aria-hidden="true"></span> Checking schemes...`;

    try {
      sessionStorage.setItem("smartseva.matchingSchemeIds", JSON.stringify(matchingSchemeIds));
      sessionStorage.setItem("smartseva.searchProfile", JSON.stringify(profile));
      sessionStorage.removeItem("smartseva.selectedSchemeId");

      // Brief transition for smooth UX (300ms)
      setTimeout(() => {
        window.location.assign("results.html");
      }, 300);
    } catch {
      if (formStatus) {
        formStatus.textContent = "Your browser could not save this search. Please enable session storage and try again.";
      }
      submitButton.innerHTML = `Check Eligibility <span aria-hidden="true">→</span>`;
      updateSubmitState();
    }
  });

  updateSubmitState();
}

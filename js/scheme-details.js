const PROFILE_KEY = "smartseva.searchProfile";
const SELECTED_SCHEME_KEY = "smartseva.selectedSchemeId";

function appendTextElement(parent, tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function addDefinitionRow(list, label, value) {
  const row = document.createElement("div");
  row.className = "eligibility-item";
  appendTextElement(row, "dt", "item-label", label);
  appendTextElement(row, "dd", "item-value", value);
  list.append(row);
}

function formatIncome(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

function showList(list, values) {
  list.replaceChildren(...values.map((value) => {
    const item = document.createElement("li");
    item.textContent = value;
    return item;
  }));
}

// Helper to extract clean metadata for any document string or object
function getDocumentMetadata(docItem) {
  if (typeof docItem === "object" && docItem.name) {
    return {
      name: docItem.name,
      description: docItem.description || "Official supporting verification document",
      requiredFields: docItem.requiredFields || ["Applicant Name", "Document ID / Number", "Issuing Authority"]
    };
  }

  const name = String(docItem);
  let description = "Official supporting verification document";
  let requiredFields = ["Applicant Name", "Document ID / Number", "Issuing Authority"];

  const lower = name.toLowerCase();
  if (lower.includes("aadhaar")) {
    description = "Identity document with unique 12-digit identification number";
    requiredFields = ["Applicant Name", "Aadhaar Number (12 digits)", "Date of Birth / Year", "Address / Domicile"];
  } else if (lower.includes("income") || lower.includes("salary") || lower.includes("tahsildar")) {
    description = "Proof of annual household income issued by revenue authority";
    requiredFields = ["Applicant Name", "Annual Income Amount", "Issue Date", "Issuing Authority (Tahsildar/MRO)", "Certificate Number"];
  } else if (lower.includes("ration") || lower.includes("rice")) {
    description = "Household food security and family member identity proof";
    requiredFields = ["Family Head Name", "Member Names", "Rice Card Number", "Fair Price Shop Details"];
  } else if (lower.includes("bank") || lower.includes("passbook")) {
    description = "Bank account passbook for Direct Benefit Transfer (DBT)";
    requiredFields = ["Account Holder Name", "Account Number", "IFSC Code", "Bank Branch Name"];
  } else if (lower.includes("caste") || lower.includes("community")) {
    description = "Community / Caste certificate issued by MeeSeva / Revenue department";
    requiredFields = ["Applicant Name", "Caste / Sub-caste Category", "Issuing Authority", "Certificate Number", "Issue Date"];
  } else if (lower.includes("age") || lower.includes("birth")) {
    description = "Proof of age and date of birth verification";
    requiredFields = ["Applicant Name", "Date of Birth", "Issuing Authority"];
  } else if (lower.includes("land") || lower.includes("pattadar") || lower.includes("ror") || lower.includes("ccrc")) {
    description = "Agricultural land title deed or tenant cultivator agreement";
    requiredFields = ["Farmer Name", "Survey Number / Khata Number", "Extent of Land", "Village / Mandal Name"];
  } else if (lower.includes("death")) {
    description = "Official death certificate of deceased spouse/family head";
    requiredFields = ["Deceased Person Name", "Date of Death", "Place of Death", "Registration Number"];
  } else if (lower.includes("driving") || lower.includes("license")) {
    description = "Valid transport driving license issued by RTA";
    requiredFields = ["Driver Name", "License Number", "Vehicle Class (Auto/LMV)", "Validity Period"];
  } else if (lower.includes("registration") || lower.includes("rc")) {
    description = "Commercial vehicle registration certificate";
    requiredFields = ["Owner Name", "Registration Number", "Chassis/Engine Number", "Vehicle Class"];
  } else if (lower.includes("study") || lower.includes("bonafide") || lower.includes("marks") || lower.includes("hall ticket") || lower.includes("admission") || lower.includes("college") || lower.includes("degree")) {
    description = "Academic enrollment or marks verification document";
    requiredFields = ["Student Name", "Institution / College Name", "Course / Class", "Hall Ticket / Roll Number"];
  } else if (lower.includes("shg") || lower.includes("serp") || lower.includes("loan")) {
    description = "Self-Help Group registration or loan clearance ledger";
    requiredFields = ["Group Name", "Member Names", "Bank Loan Account Number", "Repayment Status"];
  } else if (lower.includes("vending") || lower.includes("vendor")) {
    description = "Street vending identity card / certificate issued by municipality";
    requiredFields = ["Vendor Name", "Vending Certificate Number", "Designated Vending Zone"];
  } else if (lower.includes("handloom") || lower.includes("geo-tag")) {
    description = "Handloom Department geo-tagging and weaver ID card";
    requiredFields = ["Weaver Name", "Weaver ID / Geo-tag ID", "Loom Type and Location"];
  } else if (lower.includes("fish") || lower.includes("boat")) {
    description = "Marine fishermen biometric ID or boat registration";
    requiredFields = ["Fisherman Name", "Biometric Card ID", "Boat Registration Number"];
  } else if (lower.includes("disability") || lower.includes("sadarem") || lower.includes("udid")) {
    description = "Disability assessment certificate / UDID smart card showing disability percentage";
    requiredFields = ["Applicant Name", "UDID / Certificate Number", "Disability Type & Percentage", "Medical Board Authority"];
  } else if (lower.includes("job card") || lower.includes("mgnregs")) {
    description = "MGNREGS Rural Employment Job Card issued by Gram Panchayat";
    requiredFields = ["Household Head Name", "Job Card Number", "Registered Member Names", "Gram Panchayat Name"];
  } else if (lower.includes("patta") || lower.includes("house site") || lower.includes("allotment")) {
    description = "Residential plot allotment deed / Patta issued by Revenue Department";
    requiredFields = ["Allottee Name", "Survey / Plot Number", "Layout Location", "Tahsildar / RDO Signature"];
  } else if (lower.includes("electricity") || lower.includes("power bill") || lower.includes("consumer")) {
    description = "Domestic electricity bill showing service connection consumer number";
    requiredFields = ["Consumer Name", "Service Connection Number (SC No)", "Billing Address", "DISCOM Name"];
  } else if (lower.includes("marriage") || lower.includes("wedding") || lower.includes("shaadi")) {
    description = "Marriage registration certificate or wedding invitation card";
    requiredFields = ["Bride & Groom Names", "Date of Marriage", "Registration Authority / Certificate No", "Place of Marriage"];
  } else if (lower.includes("mcp") || lower.includes("immunization") || lower.includes("rch") || lower.includes("discharge")) {
    description = "Mother & Child Protection Card or hospital clinical treatment record";
    requiredFields = ["Mother / Child Name", "RCH / MCTS ID", "Hospital Name", "Registration Date"];
  } else if (lower.includes("udyam") || lower.includes("msme") || lower.includes("gst")) {
    description = "Udyam MSME Registration Certificate or GSTIN proof";
    requiredFields = ["Enterprise Name", "Udyam Registration Number", "Enterprise Category (Micro/Small)", "Major Activity"];
  } else if (lower.includes("passport") || lower.includes("visa")) {
    description = "Valid Indian Passport and overseas student visa credentials";
    requiredFields = ["Passport Holder Name", "Passport Number", "Date of Expiry", "Visa Category"];
  } else if (lower.includes("pan card") || lower.includes("pan ")) {
    description = "Permanent Account Number (PAN) Card issued by Income Tax Department";
    requiredFields = ["Cardholder Name", "PAN (10 alphanumeric digits)", "Date of Birth"];
  } else if (lower.includes("photo")) {
    description = "Recent passport-size color photographs of applicant";
    requiredFields = ["Clear Facial Photo", "White/Light Background"];
  }

  return {
    name,
    description,
    requiredFields
  };
}

const selectedSchemeId = Number(sessionStorage.getItem(SELECTED_SCHEME_KEY));
const scheme = schemes.find((item) => item.id === selectedSchemeId);

const detailsNotFound = document.getElementById("detailsNotFound");
const schemeDetails = document.getElementById("schemeDetails");

let searchProfile = null;
try {
  const profileStr = sessionStorage.getItem(PROFILE_KEY);
  if (profileStr) searchProfile = JSON.parse(profileStr);
} catch {
  searchProfile = null;
}

if (!scheme) {
  if (detailsNotFound) detailsNotFound.hidden = false;
  if (schemeDetails) schemeDetails.hidden = true;
} else {
  if (detailsNotFound) detailsNotFound.hidden = true;
  if (schemeDetails) schemeDetails.hidden = false;

  document.title = `${scheme.name} | SmartSeva AP`;
  
  // Hero section
  document.getElementById("detailCategory").textContent = scheme.category.toUpperCase();
  document.getElementById("detailName").textContent = scheme.name;
  document.getElementById("detailShortDescription").textContent = scheme.shortDescription || scheme.description;
  
  // About This Scheme
  document.getElementById("detailDescription").textContent = scheme.description;
  
  // Benefits List
  const benefitsList = document.getElementById("benefitsList");
  if (benefitsList) {
    const benefitsArray = Array.isArray(scheme.benefits) && scheme.benefits.length > 0 
      ? scheme.benefits 
      : [scheme.benefit || scheme.benefitText];
    showList(benefitsList, benefitsArray);
  }

  // Eligibility Criteria
  const eligibilityList = document.getElementById("eligibilityList");
  if (eligibilityList) {
    eligibilityList.innerHTML = "";
    
    if (scheme.eligibility) {
      if (scheme.eligibility.minAge !== null && scheme.eligibility.maxAge !== null) {
        addDefinitionRow(eligibilityList, "Age", `${scheme.eligibility.minAge} – ${scheme.eligibility.maxAge} years`);
      } else if (scheme.eligibility.minAge !== null && scheme.eligibility.minAge > 0) {
        addDefinitionRow(eligibilityList, "Age", `${scheme.eligibility.minAge}+ years`);
      } else if (scheme.eligibility.maxAge !== null) {
        addDefinitionRow(eligibilityList, "Age", `Up to ${scheme.eligibility.maxAge} years`);
      } else {
        addDefinitionRow(eligibilityList, "Age", "No age restriction");
      }

      if (scheme.eligibility.maxIncome !== null) {
        addDefinitionRow(eligibilityList, "Annual Income", `Household income below ${formatIncome(scheme.eligibility.maxIncome)}`);
      } else {
        addDefinitionRow(eligibilityList, "Annual Income", "No specific income limit");
      }

      addDefinitionRow(eligibilityList, "Gender", scheme.eligibility.gender || (scheme.femaleOnly ? "Female only" : "All"));
      addDefinitionRow(eligibilityList, "Area", scheme.eligibility.area || (scheme.ruralOnly ? "Rural only" : "Rural / Urban"));
    } else {
      addDefinitionRow(eligibilityList, "Age", scheme.minAge ? `${scheme.minAge}+ years` : "All ages");
      addDefinitionRow(eligibilityList, "Income", scheme.maxIncome ? `Below ${formatIncome(scheme.maxIncome)}` : "No limit");
      addDefinitionRow(eligibilityList, "Gender", scheme.femaleOnly ? "Female only" : "All");
      addDefinitionRow(eligibilityList, "Area", scheme.ruralOnly ? "Rural only" : "Rural / Urban");
    }
  }

  // ==========================================================================
  // AI DOCUMENT CHECK: SECTION SETUP & STATE
  // ==========================================================================
  const docStorageKey = `smartseva.docChecks_${scheme.id}`;
  let documentCheckResults = {};
  try {
    const savedChecks = sessionStorage.getItem(docStorageKey);
    if (savedChecks) documentCheckResults = JSON.parse(savedChecks);
  } catch {
    documentCheckResults = {};
  }

  const documentsListContainer = document.getElementById("documentsList");
  const documentsMessage = document.getElementById("documentsMessage");
  const docProgressContainer = document.getElementById("docProgressContainer");
  const docProgressText = document.getElementById("docProgressText");
  const docProgressFill = document.getElementById("docProgressFill");
  const docProgressPercent = document.getElementById("docProgressPercent");

  // Normalized document items
  const docItems = (Array.isArray(scheme.documents) ? scheme.documents : []).map(getDocumentMetadata);

  function updateDocumentProgress() {
    if (!docProgressContainer || docItems.length === 0) return;
    docProgressContainer.hidden = false;

    const total = docItems.length;
    const checked = docItems.filter((d) => documentCheckResults[d.name]).length;
    const pct = Math.round((checked / total) * 100);

    docProgressText.textContent = `${checked} of ${total} documents checked`;
    docProgressPercent.textContent = `${pct}%`;
    docProgressFill.style.width = `${pct}%`;
  }

  function renderDocumentCards() {
    if (!docItems.length) {
      documentsListContainer.hidden = true;
      if (documentsMessage) {
        documentsMessage.hidden = false;
        documentsMessage.textContent = "Document requirements may vary. Please verify the latest requirements with the official scheme authority before applying.";
      }
      if (docProgressContainer) docProgressContainer.hidden = true;
      return;
    }

    documentsListContainer.hidden = false;
    if (documentsMessage) documentsMessage.hidden = true;
    documentsListContainer.innerHTML = "";

    docItems.forEach((doc) => {
      const card = document.createElement("div");
      card.className = "doc-card";

      const check = documentCheckResults[doc.name];
      const resultType = check ? check.result : null;

      // Status class
      if (resultType === "appears_valid") {
        card.classList.add("status-valid");
      } else if (resultType === "needs_review") {
        card.classList.add("status-review");
      } else if (resultType === "does_not_match") {
        card.classList.add("status-mismatch");
      }

      // Left info block
      const infoDiv = document.createElement("div");
      infoDiv.className = "doc-card-info";

      const title = document.createElement("h3");
      title.className = "doc-card-title";
      
      let icon = "📄";
      if (resultType === "appears_valid") icon = "✓";
      else if (resultType === "needs_review") icon = "⚠";
      else if (resultType === "does_not_match") icon = "✕";

      title.innerHTML = `<span aria-hidden="true">${icon}</span> ${doc.name}`;
      infoDiv.appendChild(title);

      const desc = document.createElement("p");
      desc.className = "doc-card-desc";
      desc.textContent = doc.description;
      infoDiv.appendChild(desc);

      // Status text badge
      if (resultType) {
        const badge = document.createElement("span");
        if (resultType === "appears_valid") {
          badge.className = "doc-status-badge badge-valid";
          badge.textContent = "✓ Document appears valid";
        } else if (resultType === "needs_review") {
          badge.className = "doc-status-badge badge-review";
          badge.textContent = "⚠ Needs manual review";
        } else if (resultType === "does_not_match") {
          badge.className = "doc-status-badge badge-mismatch";
          badge.textContent = "✕ Document does not appear to match";
        }
        infoDiv.appendChild(badge);
      }

      card.appendChild(infoDiv);

      // Right action buttons
      const actionsDiv = document.createElement("div");
      actionsDiv.className = "doc-card-actions";

      if (!resultType) {
        // Initial state: Check Document
        const checkBtn = document.createElement("button");
        checkBtn.className = "btn-check-doc";
        checkBtn.type = "button";
        checkBtn.innerHTML = `<span>Check Document</span> <span aria-hidden="true">&rarr;</span>`;
        checkBtn.addEventListener("click", () => openUploadModal(doc));
        actionsDiv.appendChild(checkBtn);
      } else if (resultType === "appears_valid" || resultType === "needs_review") {
        // Checked: View Analysis
        const viewBtn = document.createElement("button");
        viewBtn.className = "btn-view-analysis";
        viewBtn.type = "button";
        viewBtn.textContent = "View Analysis";
        viewBtn.addEventListener("click", () => openAnalysisModal(doc));
        actionsDiv.appendChild(viewBtn);

        const checkAgainBtn = document.createElement("button");
        checkAgainBtn.className = "btn-check-doc";
        checkAgainBtn.type = "button";
        checkAgainBtn.style.height = "38px";
        checkAgainBtn.style.padding = "0 12px";
        checkAgainBtn.style.fontSize = "12px";
        checkAgainBtn.textContent = "Re-upload";
        checkAgainBtn.addEventListener("click", () => openUploadModal(doc));
        actionsDiv.appendChild(checkAgainBtn);
      } else if (resultType === "does_not_match") {
        // Mismatch: Check Again
        const recheckBtn = document.createElement("button");
        recheckBtn.className = "btn-check-again";
        recheckBtn.type = "button";
        recheckBtn.textContent = "Check Again";
        recheckBtn.addEventListener("click", () => openUploadModal(doc));
        actionsDiv.appendChild(recheckBtn);

        const viewBtn = document.createElement("button");
        viewBtn.className = "btn-view-analysis";
        viewBtn.type = "button";
        viewBtn.textContent = "View Details";
        viewBtn.addEventListener("click", () => openAnalysisModal(doc));
        actionsDiv.appendChild(viewBtn);
      }

      card.appendChild(actionsDiv);
      documentsListContainer.appendChild(card);
    });

    updateDocumentProgress();
  }

  // ==========================================================================
  // MODAL CONTROLS: UPLOAD & PREVIEW
  // ==========================================================================
  const docUploadModal = document.getElementById("docUploadModal");
  const uploadModalTitle = document.getElementById("uploadModalTitle");
  const uploadModalSubtitle = document.getElementById("uploadModalSubtitle");
  const closeUploadModal = document.getElementById("closeUploadModal");
  const cancelUploadBtn = document.getElementById("cancelUploadBtn");
  const dropzoneArea = document.getElementById("dropzoneArea");
  const fileInput = document.getElementById("fileInput");
  const dropzoneView = document.getElementById("dropzoneView");
  const previewView = document.getElementById("previewView");
  const previewImage = document.getElementById("previewImage");
  const changeImageBtn = document.getElementById("changeImageBtn");
  const analyzeDocBtn = document.getElementById("analyzeDocBtn");
  const uploadStatusMessage = document.getElementById("uploadStatusMessage");

  let activeDoc = null;
  let selectedFile = null;
  let selectedFileDataUrl = null;

  function openUploadModal(doc) {
    activeDoc = doc;
    selectedFile = null;
    selectedFileDataUrl = null;

    uploadModalTitle.textContent = `Check ${doc.name}`;
    uploadModalSubtitle.textContent = `Upload a clear image of your ${doc.name}.`;
    
    // Reset views
    dropzoneView.hidden = false;
    previewView.hidden = true;
    previewImage.src = "";
    uploadStatusMessage.hidden = true;
    uploadStatusMessage.textContent = "";
    analyzeDocBtn.disabled = true;
    analyzeDocBtn.innerHTML = "Analyze Document";
    if (fileInput) fileInput.value = "";

    docUploadModal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function hideUploadModal() {
    docUploadModal.hidden = true;
    document.body.style.overflow = "";
    selectedFile = null;
    selectedFileDataUrl = null;
  }

  if (closeUploadModal) closeUploadModal.addEventListener("click", hideUploadModal);
  if (cancelUploadBtn) cancelUploadBtn.addEventListener("click", hideUploadModal);

  // Drag & drop handlers
  if (dropzoneArea && fileInput) {
    dropzoneArea.addEventListener("click", () => fileInput.click());

    dropzoneArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzoneArea.classList.add("dragover");
    });

    dropzoneArea.addEventListener("dragleave", () => {
      dropzoneArea.classList.remove("dragover");
    });

    dropzoneArea.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzoneArea.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileSelection(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", () => {
      if (fileInput.files && fileInput.files.length > 0) {
        handleFileSelection(fileInput.files[0]);
      }
    });
  }

  function handleFileSelection(file) {
    uploadStatusMessage.hidden = true;

    // Validate type (JPG, JPEG, PNG only)
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(file.type.toLowerCase())) {
      uploadStatusMessage.hidden = false;
      uploadStatusMessage.style.color = "#D92D20";
      uploadStatusMessage.textContent = "Unsupported format. Please upload a JPG, JPEG, or PNG image.";
      return;
    }

    // Validate size (max 5 MB)
    if (file.size > 5 * 1024 * 1024) {
      uploadStatusMessage.hidden = false;
      uploadStatusMessage.style.color = "#D92D20";
      uploadStatusMessage.textContent = "File is too large. Maximum file size allowed is 5 MB.";
      return;
    }

    selectedFile = file;

    const reader = new FileReader();
    reader.onload = (e) => {
      selectedFileDataUrl = e.target.result;
      previewImage.src = selectedFileDataUrl;
      dropzoneView.hidden = true;
      previewView.hidden = false;
      analyzeDocBtn.disabled = false;
    };
    reader.onerror = () => {
      uploadStatusMessage.hidden = false;
      uploadStatusMessage.style.color = "#D92D20";
      uploadStatusMessage.textContent = "Could not read the selected image. Please try again.";
    };
    reader.readAsDataURL(file);
  }

  if (changeImageBtn) {
    changeImageBtn.addEventListener("click", () => {
      selectedFile = null;
      selectedFileDataUrl = null;
      previewImage.src = "";
      dropzoneView.hidden = false;
      previewView.hidden = true;
      analyzeDocBtn.disabled = true;
      if (fileInput) fileInput.value = "";
    });
  }

  // Analyze Document click
  if (analyzeDocBtn) {
    analyzeDocBtn.addEventListener("click", async () => {
      if (!activeDoc || !selectedFileDataUrl) return;

      analyzeDocBtn.disabled = true;
      analyzeDocBtn.innerHTML = `<span class="button-spinner" aria-hidden="true"></span> Analyzing document...`;
      uploadStatusMessage.hidden = false;
      uploadStatusMessage.style.color = "var(--primary-blue)";
      uploadStatusMessage.textContent = "Running preliminary AI document check...";

      const payload = {
        image: selectedFileDataUrl,
        documentName: activeDoc.name,
        documentDescription: activeDoc.description,
        requiredFields: activeDoc.requiredFields,
        userProfile: searchProfile || {},
        scheme: {
          id: scheme.id,
          name: scheme.name,
          maxIncome: scheme.eligibility?.maxIncome || scheme.maxIncome || null
        },
        fileName: selectedFile ? selectedFile.name : ""
      };

      try {
        const response = await fetch("/api/check-document", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `Server returned HTTP ${response.status}`);
        }

        const analysisResult = await response.json();

        // Save result
        documentCheckResults[activeDoc.name] = analysisResult;
        try {
          sessionStorage.setItem(docStorageKey, JSON.stringify(documentCheckResults));
        } catch {
          // ignore session quota warning
        }

        hideUploadModal();
        renderDocumentCards();
        openAnalysisModal(activeDoc);
      } catch (err) {
        uploadStatusMessage.hidden = false;
        uploadStatusMessage.style.color = "#D92D20";
        uploadStatusMessage.textContent = `Analysis failed: ${err.message}. Please check connection or retry.`;
        analyzeDocBtn.disabled = false;
        analyzeDocBtn.innerHTML = "Analyze Document";
      }
    });
  }

  // ==========================================================================
  // MODAL CONTROLS: VIEW ANALYSIS BREAKDOWN
  // ==========================================================================
  const docAnalysisModal = document.getElementById("docAnalysisModal");
  const analysisModalTitle = document.getElementById("analysisModalTitle");
  const analysisModalContent = document.getElementById("analysisModalContent");
  const closeAnalysisModal = document.getElementById("closeAnalysisModal");
  const closeAnalysisBtn = document.getElementById("closeAnalysisBtn");
  const recheckDocBtn = document.getElementById("recheckDocBtn");

  let inspectingDoc = null;

  function openAnalysisModal(doc) {
    inspectingDoc = doc;
    const check = documentCheckResults[doc.name];
    if (!check) return;

    analysisModalTitle.textContent = `Preliminary Analysis: ${doc.name}`;
    analysisModalContent.innerHTML = "";

    // 1. Status Banner
    const banner = document.createElement("div");
    if (check.result === "appears_valid") {
      banner.className = "analysis-status-banner banner-valid";
      banner.innerHTML = `
        <span class="status-head">&#10003; Document Appears Valid</span>
        <span class="status-desc">The uploaded image appears to be the required document and readable information is consistent with provided details.</span>
      `;
    } else if (check.result === "needs_review") {
      banner.className = "analysis-status-banner banner-review";
      banner.innerHTML = `
        <span class="status-head">&#9888; Needs Manual Review</span>
        <span class="status-desc">${check.issues && check.issues.length ? check.issues[0] : "The document image could not be reliably verified. Please check clarity and completeness."}</span>
      `;
    } else {
      banner.className = "analysis-status-banner banner-mismatch";
      const detectedInfo = check.detectedDocumentType 
        ? `<br><span style="margin-top: 4px; display: inline-block;">Detected: <strong>${check.detectedDocumentType}</strong></span>` 
        : "";
      banner.innerHTML = `
        <span class="status-head">&#10005; Document Does Not Appear to Match</span>
        <span class="status-desc">Expected: <strong>${doc.name}</strong>.${detectedInfo}<br>Please upload the required document.</span>
      `;
    }
    analysisModalContent.appendChild(banner);

    // 2. Structured Key Checks Grid
    const grid = document.createElement("dl");
    grid.className = "analysis-grid";

    // Document Type & Detected Type
    const typeDiv = document.createElement("div");
    typeDiv.className = "analysis-item";
    const detectedLabel = check.detectedDocumentType ? ` (${check.detectedDocumentType})` : "";
    typeDiv.innerHTML = `
      <dt>Document Type</dt>
      <dd>${check.documentTypeMatch ? "&#10003; Matched" : "&#10005; Mismatch" + detectedLabel}</dd>
    `;
    grid.appendChild(typeDiv);

    // Image Quality
    const qualityDiv = document.createElement("div");
    qualityDiv.className = "analysis-item";
    const qualityGood = check.readability && check.readability.status === "good";
    qualityDiv.innerHTML = `
      <dt>Image Quality</dt>
      <dd>${qualityGood ? "&#10003; Good" : "&#9888; Needs Review"}</dd>
    `;
    grid.appendChild(qualityDiv);

    // Required Fields
    const fieldsDiv = document.createElement("div");
    fieldsDiv.className = "analysis-item";
    const reqStatus = check.requiredFields && check.requiredFields.status === "complete";
    fieldsDiv.innerHTML = `
      <dt>Required Fields</dt>
      <dd>${reqStatus ? "&#10003; Detected" : "&#9888; Incomplete"}</dd>
    `;
    grid.appendChild(fieldsDiv);

    // Name Match
    const nameDiv = document.createElement("div");
    nameDiv.className = "analysis-item";
    const nameObj = check.fields && check.fields.name;
    let nameStatus = "Not extracted";
    if (nameObj) {
      if (nameObj.matchesUser === true) nameStatus = "&#10003; Matched";
      else if (nameObj.matchesUser === false) nameStatus = "&#9888; Name Mismatch";
      else if (nameObj.detected) nameStatus = nameObj.detected;
    }
    nameDiv.innerHTML = `
      <dt>Applicant Name</dt>
      <dd>${nameStatus}</dd>
    `;
    grid.appendChild(nameDiv);

    // Income Match (if present)
    if (check.fields && check.fields.income && check.fields.income.detected !== null) {
      const incDiv = document.createElement("div");
      incDiv.className = "analysis-item";
      const incVal = check.fields.income.detected;
      const incMatch = check.fields.income.matchesProvidedIncome;
      incDiv.innerHTML = `
        <dt>Income Verification</dt>
        <dd>₹${Number(incVal).toLocaleString("en-IN")} ${incMatch === true ? "(&#10003; Consistent)" : ""}</dd>
      `;
      grid.appendChild(incDiv);
    }

    // Issue Date (if present)
    if (check.fields && check.fields.issueDate) {
      const dateDiv = document.createElement("div");
      dateDiv.className = "analysis-item";
      dateDiv.innerHTML = `
        <dt>Document Date</dt>
        <dd>${check.fields.issueDate}</dd>
      `;
      grid.appendChild(dateDiv);
    }

    analysisModalContent.appendChild(grid);

    // 3. Issues list if any
    if (Array.isArray(check.issues) && check.issues.length > 0) {
      const issuesBox = document.createElement("div");
      issuesBox.className = "analysis-issues-box";
      let issuesHtml = `<strong>Observations:</strong><ul>`;
      check.issues.forEach((iss) => {
        issuesHtml += `<li>${iss}</li>`;
      });
      issuesHtml += `</ul>`;
      issuesBox.innerHTML = issuesHtml;
      analysisModalContent.appendChild(issuesBox);
    }

    // 4. Recommendation
    if (check.recommendation) {
      const rec = document.createElement("div");
      rec.className = "analysis-recommendation";
      rec.innerHTML = `<strong>Recommendation:</strong> ${check.recommendation}`;
      analysisModalContent.appendChild(rec);
    }

    // 5. Mandatory Limitation Disclaimer
    const legalNotice = document.createElement("p");
    legalNotice.className = "analysis-legal-disclaimer";
    legalNotice.innerHTML = `<strong>Disclaimer:</strong> AI document checking is a preliminary assessment. Final document verification and scheme eligibility are determined by the relevant government authority.`;
    analysisModalContent.appendChild(legalNotice);

    docAnalysisModal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function hideAnalysisModal() {
    docAnalysisModal.hidden = true;
    document.body.style.overflow = "";
    inspectingDoc = null;
  }

  if (closeAnalysisModal) closeAnalysisModal.addEventListener("click", hideAnalysisModal);
  if (closeAnalysisBtn) closeAnalysisBtn.addEventListener("click", hideAnalysisModal);
  if (recheckDocBtn) {
    recheckDocBtn.addEventListener("click", () => {
      const docToRecheck = inspectingDoc;
      hideAnalysisModal();
      if (docToRecheck) openUploadModal(docToRecheck);
    });
  }

  // Initial render of document cards
  renderDocumentCards();

  // ==========================================================================
  // HOW TO APPLY SECTION
  // ==========================================================================
  const applicationSteps = document.getElementById("applicationSteps");
  const applicationMessage = document.getElementById("applicationMessage");
  if (Array.isArray(scheme.applicationProcess) && scheme.applicationProcess.length > 0) {
    applicationSteps.hidden = false;
    applicationMessage.hidden = true;
    showList(applicationSteps, scheme.applicationProcess);
  } else {
    applicationSteps.hidden = true;
    applicationMessage.hidden = false;
    applicationMessage.textContent = "Scheme-specific application steps are not verified in this prototype. Check the official provider's website for current instructions.";
  }

  // Quick Information Sidebar
  document.getElementById("quickCategory").textContent = scheme.category;
  document.getElementById("quickBenefit").textContent = scheme.benefit || scheme.benefitText;
  document.getElementById("quickState").textContent = scheme.state || "Andhra Pradesh";
  const quickMode = document.getElementById("quickMode");
  if (quickMode) {
    quickMode.textContent = "Online / Gram & Ward Sachivalayam";
  }

  // Official Link
  const officialLink = document.getElementById("officialLink");
  if (officialLink) {
    officialLink.href = scheme.providerUrl || scheme.applyUrl || "#";
  }
}

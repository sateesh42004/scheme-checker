# SmartSeva AP 🇮🇳
### Intelligent Government Scheme Eligibility & AI Document Verification Portal

> **A modern, citizen-first web application designed for Andhra Pradesh citizens to easily discover government welfare schemes they are eligible for, understand exact application steps, and verify their supporting documents using AI before applying.**

---

## 🌟 Table of Contents
1. [About The Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [The 3-Stage User Experience](#-the-3-stage-user-experience)
4. [AI Document Verification (How It Works)](#-ai-document-verification-how-it-works)
5. [Project File Structure](#-project-file-structure)
6. [Detailed File-by-File Explanation](#-detailed-file-by-file-explanation)
7. [Scheme Catalog (142 Government Schemes)](#-scheme-catalog-142-government-schemes)
8. [How To Run The Project Locally](#-how-to-run-the-project-locally)
9. [College Presentation & Viva Guide](#-college-presentation--viva-guide)

---

## 📖 About The Project

Many eligible citizens in India, especially in rural and semi-urban areas, miss out on valuable government welfare schemes because:
1. They don't know which schemes they qualify for.
2. Eligibility criteria (age, income, location, gender) are scattered across dozens of different websites.
3. Applications get rejected due to incorrect, mismatched, or unreadable documents.

**SmartSeva AP** solves this in under 2 minutes:
- Users enter basic details (**Age**, **Gender**, **Annual Income**, **Rural/Urban Area**).
- The system instantly filters a database of **142 authentic Andhra Pradesh & Central Government schemes**.
- Citizens can view exact benefits, required documents, and official portals.
- An **AI Document Check** allows citizens to upload photos of their certificates (Aadhaar, Rice Card, Income Certificate, etc.) and get instant feedback on whether the document matches requirements or needs correction.

---

## 🚀 Key Features

- **⚡ Zero Heavy Frameworks**: Built purely with standard **HTML5**, **Vanilla CSS**, **Modern JavaScript**, and a built-in **Python HTTP server**. No complex dependencies like React, Node.js, or Mongo needed.
- **🏛️ Modern Government Portal UI**: Clean, accessible design inspired by official government digital services (deep navy blues, government gold accents, crisp typography, responsive layout).
- **📋 142 Verified Government Schemes**: Covers Education, Health, Women Welfare, Agriculture, Social Security Pensions, MSME Business Loans, Housing, and Skills Training.
- **🔍 Real-Time Search & Filtering**: Instant keyword search and category dropdown filtering.
- **🤖 Built-in AI Document Verification**: Uses Google Gemini 2.5 Flash Vision AI to inspect uploaded certificates for document type matching, name clarity, blurriness, and mandatory fields.
- **🔒 Privacy-Focused**: Search profile and session state are kept in browser `sessionStorage`; no personal data is saved to a permanent database.

---

## 🗺️ The 3-Stage User Experience

The application follows three clear, focused full-page stages:

```
[ Stage 1: Eligibility Form ]
          │  (User enters Age, Gender, Income, Area)
          ▼
[ Stage 2: Matching Schemes ]
          │  (Displays only schemes matching user's profile with search & category filters)
          ▼
[ Stage 3: Scheme Details & AI Verification ]
             (Full benefits, step-by-step procedure & AI Document Check)
```

1. **Stage 1: Eligibility Form (`index.html`)**
   - Clean, accessible citizen intake form.
   - Collects optional Name, mandatory Age, Gender, Annual Income, and Rural/Urban area.
   - Performs client-side validation and computes matching scheme IDs via `logic.js`.

2. **Stage 2: Matching Schemes (`results.html`)**
   - Displays a summary card of the user's search profile with an "Edit Details" link.
   - Shows matching scheme cards highlighting category, scheme name, description, benefit amount, and a "Potential Match" badge.
   - Includes real-time search input and a category filter dropdown.

3. **Stage 3: Scheme Details (`scheme-details.html`)**
   - Full description and key highlights.
   - Official government portal buttons (`.gov.in` / `.ap.gov.in`).
   - Tabbed layout: **Key Benefits**, **Eligibility Checklist**, **Required Documents**, and **Application Process**.
   - **AI Document Check modal** on every required document card.

---

## 🤖 AI Document Verification (How It Works)

On the **Scheme Details** page, each required document card features a **"Check Document"** button.

### Verification Flow:
1. Citizen clicks **"Check Document"** on a required document (e.g. *Aadhaar Card* or *Income Certificate*).
2. A verification modal opens, showing the document requirements and allowed file formats (JPG, PNG, PDF up to 10 MB).
3. The citizen uploads a photo or scan of their document.
4. The frontend sends the image to `POST /api/check-document` on the local Python server.
5. `server.py` communicates with **Google Gemini 2.5 Flash Vision AI** using the API key in `.env`.
6. Gemini Vision analyzes the image and returns one of three structured statuses:
   - **✅ Appears Valid**: The uploaded image is clearly the correct document, text is readable, and key fields are present.
   - **⚠️ Needs Review**: The image is blurry, cropped, low-resolution, or missing crucial stamps/numbers.
   - **❌ Does Not Match**: The uploaded image is completely different (e.g., uploading a landscape photo or a driving license when an Aadhaar Card was requested).
7. The UI displays clear, friendly guidance on what to fix.

---

## 📁 Project File Structure

```text
SmartSeva AP/
│
├── index.html              # Stage 1: Citizen Eligibility Form (Home Page)
├── results.html            # Stage 2: Matching Schemes Catalog & Filters
├── scheme-details.html     # Stage 3: Detailed Scheme View & AI Document Modal
│
├── css/
│   └── styles.css          # Unified CSS stylesheet for all pages, modals & cards
│
├── js/
│   ├── app.js              # Logic for Stage 1 form validation & submission
│   ├── data.js             # Master dataset of 142 government schemes
│   ├── logic.js            # Eligibility evaluation engine (computeEligibility)
│   ├── results.js          # Logic for Stage 2 card rendering, search & filters
│   └── scheme-details.js   # Logic for Stage 3 tabs, details & AI document check
│
├── dataset_generators/     # Python modular generation suite for the 142 schemes
│   ├── assemble_data_js.py
│   ├── build_schemes.py
│   ├── generate_all_schemes.py
│   ├── schemes_education.py
│   ├── schemes_health.py
│   ├── schemes_housing.py
│   ├── schemes_msme_livelihood.py
│   ├── schemes_skills_welfare.py
│   ├── schemes_social_pension.py
│   └── schemes_women.py
│
├── logo.png                # Official SmartSeva AP brand crest logo
├── server.py               # Python HTTP server + POST /api/check-document AI backend
├── .env                    # Stores GEMINI_API_KEY for vision AI verification
└── README.md               # Project documentation (this file)
```

---

## 🔍 Detailed File-by-File Explanation

### 1. Web Pages (HTML)
- **`index.html`**: The entry point of the app. Contains the hero section, the 4-question eligibility form, and an "About This Service" explanatory section.
- **`results.html`**: The second page. Retrieves matched scheme IDs from `sessionStorage` and renders cards. Contains live search and category filter.
- **`scheme-details.html`**: The third page. Reads the selected scheme from `sessionStorage`, renders benefit tags, eligibility criteria, document cards, step-by-step procedures, and the interactive document check modal.

### 2. Styling (CSS)
- **`css/styles.css`**: Complete styling system. Includes government color palette variables (Navy `#123B6D`, Gold `#DDA83A`, Green `#1B7340`), responsive CSS grid, card designs, accessibility focus rings, and animated upload modals.

### 3. JavaScript Logic (JS)
- **`js/data.js`**: Contains the complete JavaScript array `const schemes = [...]` with **142 schemes**. Each scheme object includes ID, name, state, category, age limits, income caps, benefits array, required documents list, application steps, and official portal URLs.
- **`js/logic.js`**: The pure function `computeEligibility(formData)` that filters schemes based on user criteria:
  - Minimum and maximum age rules (`minAge`, `maxAge`)
  - Annual income threshold (`maxIncome`)
  - Gender rules (`femaleOnly`)
  - Area rules (`ruralOnly`)
- **`js/app.js`**: Binds to `#eligibilityForm`, validates inputs, executes `computeEligibility()`, saves profile and match IDs to `sessionStorage`, and transitions to `results.html`.
- **`js/results.js`**: Populates user search summary, builds scheme cards dynamically, and handles real-time keyword search and category dropdown filters.
- **`js/scheme-details.js`**: Populates scheme details, renders document cards, manages the document upload drag-and-drop modal, and sends verification requests to `server.py`.

### 4. Backend & AI (Python)
- **`server.py`**: A lightweight Python HTTP server based on `http.server.ThreadingHTTPServer`. It serves all static HTML/CSS/JS files and exposes the `POST /api/check-document` endpoint. It uses `urllib.request` to communicate with Google Gemini Vision API without needing heavy external Python libraries.
- **`.env`**: Stores the Google Gemini API key:
  ```env
  GEMINI_API_KEY=your_gemini_api_key_here
  ```

### 5. Data Generation Suite (`dataset_generators/`)
- A modular set of Python scripts that assemble and validate the 142 government schemes by sector (Education, Health, Housing, Women, Agriculture, Pensions, MSME, Skills) to ensure no duplicate IDs, correct data structures, and verified government portal links.

---

## 📊 Scheme Catalog (142 Government Schemes)

The catalog covers **142 official schemes** from the Andhra Pradesh State Government and the Government of India:

| Category | Schemes | Example Schemes |
| :--- | :---: | :--- |
| **Education & Scholarships** | **24** | *Jagananna Amma Vodi, Vidya Deevena, Vasathi Deevena, NMMSS, Pre/Post-Matric SC/ST/BC, AICTE Pragati & Saksham, PM YASASVI, PMRF, INSPIRE-SHE, Overseas Study Scholarships* |
| **Health & Nutrition** | **19** | *Dr. YSR Aarogyasri, Ayushman Bharat PM-JAY, Aarogya Aasara, Kanti Velugu, JSSK, PMSMA, Nikshay Poshan (TB), Dialysis & CKDU Pension, Tele-MANAS, Cochlear Implant, Sampoorna Poshana* |
| **Women Empowerment & Child Welfare** | **20** | *YSR Cheyutha, YSR Kapu Nestham, EBC Nestham, YSR Aasara, Sunna Vaddi (Zero Interest Loans), Sukanya Samriddhi, PMMVY 2.0, PM Ujjwala 2.0, Mahila Samman Savings, Kalyanamasthu* |
| **Agriculture & Allied Services** | **16** | *YSR Rythu Bharosa, PM-KISAN, PM Fasal Bima Yojana, Kisan Credit Card (KCC), PM Krishi Sinchayee, Soil Health Card, PKVY Organic Farming, PM Kusum Solar, PM Matsya Sampada* |
| **Social Security & Pensions** | **19** | *NTR Bharosa Pension, Atal Pension Yojana (APY), PM Shram Yogi Maandhan, PMLVMY, IGNOAPS Old Age, Widows Pension, Disability Pension, NFBS, Special Occupational Pensions, UDID* |
| **Small Business, MSME & Livelihood** | **15** | *PM MUDRA (Shishu, Kishore, Tarun), PM SVANidhi Street Vendors, PM Vishwakarma Crafts, PMEGP, CGTMSE, Startup India Seed Fund, ZED Certification, Weaver MUDRA, SFURTI, PMFME* |
| **Housing, Sanitation & Amenities** | **13** | *PMAY-Gramin, PMAY-Urban, YSR Pedalandariki Illu, AP TIDCO Housing Flats, Jal Jeevan Mission, Swachh Bharat IHHL Latrines, PM Surya Ghar (Rooftop Solar), DAY-NULM Shelters* |
| **Employment, Skills & Minorities** | **12** | *MGNREGS 100-Day Wage Employment, PMKVY 4.0, National Apprenticeship (NAPS-2), DDU-GKY, APSSDC Technical Training, PM Van Dhan Tribal Livelihoods, Nai Roshni, Seekho Aur Kamao* |
| **Handlooms, Fisheries & Transport** | **4** | *YSR Nethanna Nestham, YSR Matsyakara Bharosa, YSR Vahana Mitra, PMJJBY/PMSBY Insurance* |

---

## 💻 How To Run The Project Locally

### Prerequisites
- Python 3.8 or higher installed on your computer.
- A modern web browser (Chrome, Edge, Firefox, Brave, Safari).
- A free Google Gemini API key from [Google AI Studio](https://aistudio.google.com/).

### Step 1: Open Terminal / Command Prompt
Open your terminal in the project folder:
```bash
cd "path/to/SmartSeva AP"
```

### Step 2: Configure Your API Key
Open `.env` in any text editor and paste your Gemini API key:
```env
GEMINI_API_KEY=AIzaSy...
```

### Step 3: Start the Local Server
Run:
```bash
python server.py 8000
```
You will see:
```text
SmartSeva AP server running on http://localhost:8000
Serving directory: ...
Gemini API configured: YES
```

### Step 4: Open in Your Browser
Visit:
👉 **[http://localhost:8000](http://localhost:8000)**

---

## 🎓 College Presentation & Viva Guide

If you are demonstrating this project in a college presentation, hackathon, or viva, keep these points in mind:

### 1. Problem Statement
*"Citizens struggle to know what welfare benefits they are entitled to because government schemes are fragmented across multiple portals with complex eligibility rules. Furthermore, manual document rejections waste citizen and administrative time."*

### 2. Our Solution
*"SmartSeva AP provides a single, unified 3-stage platform that matches citizen demographics against 142 authentic state and central schemes in milliseconds, while leveraging Multimodal Generative AI (Gemini Vision) to pre-screen citizen documents for validity and readability."*

### 3. Architecture Highlights
- **No Heavy Framework Overhead**: Demonstrates strong foundational engineering skills using clean Semantic HTML5, Vanilla JavaScript, and standard Python networking.
- **Multimodal AI Integration**: Uses Gemini 2.5 Flash Vision to interpret text, document layouts, and image quality directly from uploaded photos.
- **Stateless & Scalable**: Session-based client state ensures zero database bottlenecks and maximum citizen privacy.

---

### Developed for Citizen Welfare & Public Good 🇮🇳
*SmartSeva AP — Empowering Every Citizen with Instant Access to Government Welfare.*

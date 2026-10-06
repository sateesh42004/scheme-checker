# schemes_education.py
# Education & Scholarships Schemes (IDs 36 to 55)

education_schemes = [
  {
    "id": 36,
    "name": "Jagananna Vasathi Deevena",
    "state": "Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 28,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Financial assistance for food and hostel expenses (up to ₹20,000/year) for students pursuing ITI, Polytechnic, and Degree courses.",
    "description": "Jagananna Vasathi Deevena provides direct financial assistance to students from economically disadvantaged families to cover boarding and hostel accommodation expenses. Under this scheme, ITI students receive ₹10,000, Polytechnic students receive ₹15,000, and Degree/Post-Graduate/Professional course students receive ₹20,000 per year credited directly to their mother's bank account in two bi-annual installments.",
    "benefit": "Up to ₹20,000 per year for hostel & mess expenses",
    "benefitText": "₹10,000 to ₹20,000/yr for boarding expenses",
    "benefits": [
      "Direct benefit transfer of up to ₹20,000 annually credited to the student's mother's account",
      "Coverage for ITI (₹10,000), Polytechnic (₹15,000), and Degree/Engineering (₹20,000)",
      "Eliminates out-of-pocket boarding and lodging expenses for rural students"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 28,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student and mother",
      "College Admission Allotment Order and Bonafide Certificate",
      "Integrated Caste & Income Certificate issued by Tahsildar",
      "White Ration Card / Rice Card",
      "Mother's Aadhaar-linked Bank Passbook"
    ],
    "applicationProcess": [
      "Secure admission in an eligible college through state convenor quota counseling",
      "Submit college admission registration and biometric attendance confirmation",
      "Verification conducted by Village/Ward Welfare and Education Assistant (WEA)",
      "Biometric e-KYC authentication by student and mother at Sachivalayam",
      "Direct deposit of sanctioned allowance into mother's bank account"
    ],
    "providerUrl": "https://jnanabhumi.ap.gov.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 37,
    "name": "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 13,
    "maxAge": 17,
    "maxIncome": 350000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "₹12,000 per year scholarship for meritorious students from economically weaker sections to arrest dropout rates at Class 8.",
    "description": "NMMSS is a central sector scheme implemented by the Ministry of Education to award scholarships to meritorious students of economically weaker sections. Selection is conducted via a state-level competitive examination (Mental Ability Test & Scholastic Aptitude Test) at Class 8, and selected students receive ₹12,000 per annum throughout Classes 9 to 12.",
    "benefit": "₹12,000 per year (Classes 9 to 12)",
    "benefitText": "₹12,000 annually via National Scholarship Portal",
    "benefits": [
      "Financial assistance of ₹12,000 per annum directly credited via DBT",
      "Prevents secondary school dropout among high-performing poor students",
      "Valid for 4 consecutive academic years (Classes 9, 10, 11, and 12)"
    ],
    "eligibility": {
      "minAge": 13,
      "maxAge": 17,
      "gender": "All",
      "maxIncome": 350000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student",
      "Class 7 Marks Memo (minimum 55% marks, 50% for SC/ST)",
      "Income Certificate issued by Tahsildar (household income below ₹3.5 Lakh)",
      "Caste Certificate (for SC/ST/OBC students)",
      "Aadhaar-seeded Bank Passbook in student's name"
    ],
    "applicationProcess": [
      "Appear for the state-level NMMSS examination conducted by Directorate of Government Examinations AP",
      "Upon qualifying, register on the National Scholarship Portal (scholarships.gov.in)",
      "Submit school verification and institutional head attestation",
      "District Nodal Officer approves scholarship sanction",
      "Scholarship amount credited directly through Public Financial Management System (PFMS)"
    ],
    "providerUrl": "https://scholarships.gov.in",
    "applyUrl": "https://scholarships.gov.in"
  },
  {
    "id": 38,
    "name": "Pre-Matric Scholarship for SC Students",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 13,
    "maxAge": 17,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Financial assistance for Scheduled Caste students studying in classes 9 and 10 to support books, uniform, and school supplies.",
    "description": "This centrally sponsored scheme provides academic allowances and ad-hoc grants to Scheduled Caste students enrolled in government and recognized private schools for classes 9 and 10. The scheme ensures that SC children continue their secondary schooling without financial constraints.",
    "benefit": "₹3,500 to ₹7,000 per year maintenance grant",
    "benefitText": "Up to ₹7,000/yr academic allowance",
    "benefits": [
      "Day scholars receive ₹3,500 per annum and hostellers receive ₹7,000 per annum",
      "Direct DBT transfer into student's Aadhaar-linked savings account",
      "Reduces financial stress on marginalized Scheduled Caste households"
    ],
    "eligibility": {
      "minAge": 13,
      "maxAge": 17,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student",
      "Integrated SC Caste Certificate issued by MeeSeva",
      "Income Certificate from Tahsildar (under ₹2.5 Lakhs)",
      "Bonafide School Study Certificate for Class 9 or 10",
      "Student Bank Passbook with IFSC code"
    ],
    "applicationProcess": [
      "Register on JnanaBhumi AP portal or National Scholarship Portal",
      "Upload study certificate, caste certificate, and bank details",
      "School Headmaster verifies enrollment and student attendance",
      "District Social Welfare Officer sanctions scholarship batch",
      "Funds transferred via PFMS DBT to student account"
    ],
    "providerUrl": "https://jnanabhumi.ap.gov.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 39,
    "name": "Post-Matric Scholarship for SC Students",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 30,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Full tuition fee reimbursement and monthly maintenance allowance for SC students pursuing post-matriculation degrees.",
    "description": "The Post-Matric Scholarship for Scheduled Caste students is a comprehensive welfare measure covering non-refundable tuition fees, exam fees, and monthly maintenance allowances for students enrolled in Intermediate, Undergraduate, Engineering, Medical, and Postgraduate degree courses.",
    "benefit": "100% tuition fees + maintenance allowance up to ₹13,500/yr",
    "benefitText": "Full tuition + monthly maintenance allowance",
    "benefits": [
      "100% reimbursement of non-refundable college tuition and examination fees",
      "Maintenance allowance ranging from ₹4,000 to ₹13,500 per year based on course level",
      "Covers all accredited universities and professional colleges in AP and India"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 30,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of student",
      "Permanent SC Caste Certificate",
      "Current Income Certificate issued by Tahsildar",
      "SSC & Intermediate Marks Memos",
      "College Admission Allotment Order and Fee Receipt",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Apply through JnanaBhumi AP scholarship portal (jnanabhumi.ap.gov.in)",
      "Provide admission confirmation and biometric enrollment at college",
      "College Principal verifies fee structure and regular biometric attendance",
      "District Social Welfare Officer audits and approves release of funds",
      "Tuition fees credited to college; maintenance allowance credited to student account"
    ],
    "providerUrl": "https://jnanabhumi.ap.gov.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 40,
    "name": "Pre-Matric Scholarship for ST Students",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 13,
    "maxAge": 17,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Annual educational grant for Scheduled Tribe (ST) students in Classes 9 and 10 in ITDA and non-ITDA areas.",
    "description": "Implemented by the Tribal Welfare Department, this scholarship provides financial aid to Scheduled Tribe students studying in secondary classes to lower the dropout rate and encourage tribal children to complete high school education.",
    "benefit": "₹3,500 (Day Scholar) to ₹7,000 (Hosteller) per year",
    "benefitText": "Up to ₹7,000/yr scholarship for ST students",
    "benefits": [
      "Cash assistance to purchase supplementary books, stationery, and school uniforms",
      "Direct DBT credit into student bank accounts",
      "Priority assistance for primitive vulnerable tribal groups (PVTGs)"
    ],
    "eligibility": {
      "minAge": 13,
      "maxAge": 17,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student",
      "Integrated ST Community Certificate issued by Revenue Authority",
      "Income Certificate from Tahsildar",
      "School Bonafide Certificate",
      "Bank Passbook linked with Aadhaar"
    ],
    "applicationProcess": [
      "Enroll through the school headmaster on the JnanaBhumi AP portal",
      "Submit community and family income certificates",
      "Headmaster verifies regular school attendance (minimum 75%)",
      "ITDA / District Tribal Welfare Officer sanctions scholarship batch",
      "Direct disbursement through electronic fund transfer"
    ],
    "providerUrl": "https://tribal.nic.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 41,
    "name": "Post-Matric Scholarship for ST Students",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 30,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Full financial coverage of college tuition fees and maintenance stipends for Scheduled Tribe students in higher education.",
    "description": "The Post-Matric Scholarship for ST students covers tuition, examination, and laboratory fees, along with monthly maintenance allowances for tribal students pursuing polytechnic, undergraduate, engineering, medical, and postgraduate qualifications.",
    "benefit": "100% fee reimbursement + monthly maintenance allowance",
    "benefitText": "Full fee waiver + up to ₹13,500/yr stipend",
    "benefits": [
      "Complete tuition fee waiver for accredited degree and professional courses",
      "Maintenance allowance up to ₹13,500 per academic session",
      "Empowers tribal youth to enter professional employment sectors"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 30,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of applicant",
      "ST Tribe Certificate issued by competent revenue official",
      "Income Certificate from Tahsildar",
      "Class 10 & 12 Academic Transcripts",
      "College Admission Allotment Order",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Submit fresh or renewal application on JnanaBhumi portal",
      "College authorities verify course registration and biometric attendance",
      "District Tribal Welfare Officer conducts scrutiny",
      "State government releases DBT payment directly into Aadhaar-linked accounts"
    ],
    "providerUrl": "https://jnanabhumi.ap.gov.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 42,
    "name": "Post-Matric Scholarship for BC / EBC Students",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 30,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Financial assistance for Backward Classes and Economically Backward Classes students enrolled in recognized higher educational institutions.",
    "description": "This scheme provides financial support to students belonging to Backward Classes (BC-A, B, C, D, E) and Economically Backward Classes (EBC) in Andhra Pradesh. It ensures equal access to professional, technical, and general undergraduate and postgraduate degrees.",
    "benefit": "Full tuition fee support and maintenance allowance",
    "benefitText": "Tuition fee reimbursement + maintenance",
    "benefits": [
      "Covers non-refundable college tuition and examination fees",
      "Maintenance allowance directly credited via DBT",
      "Enables socio-economic mobility for backward communities"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 30,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of student",
      "BC Community Certificate issued by MeeSeva",
      "Annual Income Certificate issued by Tahsildar",
      "Previous Qualifying Exam Marks Memo",
      "College Admission Bonafide & Fee Structure Receipt",
      "Bank Passbook linked to Aadhaar"
    ],
    "applicationProcess": [
      "Register online through JnanaBhumi AP portal",
      "Provide academic details and upload certificates",
      "Institutional verification completed by College Nodal Officer",
      "District BC Welfare Officer approves sanction list",
      "DBT payment processed through state treasury"
    ],
    "providerUrl": "https://jnanabhumi.ap.gov.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 43,
    "name": "Central Sector Scheme of Scholarship for College and University Students (PM-USP)",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 25,
    "maxIncome": 450000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Merit scholarship of ₹12,000 to ₹20,000 per year for top 20th percentile scorers in Class 12 board examinations pursuing higher education.",
    "description": "Awarded by the Department of Higher Education, Ministry of Education, this scheme supports meritorious students from poor households who score above the 80th percentile in their Class 12 Intermediate Board Examinations. Students receive ₹12,000 per year for graduation and ₹20,000 per year for post-graduation.",
    "benefit": "₹12,000/yr for Graduation, ₹20,000/yr for Post-Graduation",
    "benefitText": "₹12,000 to ₹20,000 per year merit award",
    "benefits": [
      "₹12,000 per annum for the first 3 years of undergraduate study",
      "₹20,000 per annum for postgraduate courses (or 4th/5th year of 5-year integrated degrees)",
      "Prestigious central merit scholarship renewable across degree duration"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 25,
      "gender": "All",
      "maxIncome": 450000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Class 12 / Intermediate Marks Memo (80th percentile confirmation)",
      "Income Certificate issued by Tahsildar (under ₹4.5 Lakhs)",
      "Current College Admission Fee Receipt and Bonafide Certificate",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Check eligibility roll number on the Board of Intermediate Education AP merit cutoff list",
      "Apply online on National Scholarship Portal (scholarships.gov.in)",
      "Institute verification by College Principal / Registrar",
      "State Nodal Officer scrutiny and selection",
      "DBT disbursement directly through PFMS to student's bank account"
    ],
    "providerUrl": "https://scholarships.gov.in",
    "applyUrl": "https://scholarships.gov.in"
  },
  {
    "id": 44,
    "name": "AICTE Pragati Scholarship Scheme for Girl Students",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 25,
    "maxIncome": 800000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "₹50,000 per year financial scholarship for meritorious female students enrolled in AICTE-approved technical degree and diploma colleges.",
    "description": "Implemented by the All India Council for Technical Education (AICTE), the Pragati scheme empowers young women pursuing technical education. Up to two girl children per family are eligible to receive ₹50,000 per annum towards college tuition, laptop purchase, books, and software subscriptions.",
    "benefit": "₹50,000 per annum for maximum 4 years of study",
    "benefitText": "₹50,000 per year technical scholarship",
    "benefits": [
      "₹50,000 lump sum per annum credited directly into student's bank account",
      "Covers degree (4 years) or diploma (3 years) engineering & technical programmes",
      "Encourages women participation in STEM and engineering fields"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 25,
      "gender": "Female only",
      "maxIncome": 800000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student",
      "Class 10 and 12 Marks Memos",
      "AICTE-approved College Admission Allotment Order",
      "Family Income Certificate issued by Tahsildar (under ₹8 Lakhs)",
      "Tuition Fee Receipt and Bonafide Certificate",
      "Aadhaar-seeded Bank Passbook in student's name"
    ],
    "applicationProcess": [
      "Secure first-year admission in an AICTE-approved technical institute",
      "Apply through the National Scholarship Portal under AICTE Pragati Scheme",
      "Institute Nodal Officer verifies admission credentials",
      "AICTE performs central merit-based sanctioning",
      "Scholarship amount credited via Direct Benefit Transfer"
    ],
    "providerUrl": "https://www.aicte-india.org",
    "applyUrl": "https://scholarships.gov.in"
  },
  {
    "id": 45,
    "name": "AICTE Saksham Scholarship Scheme for Specially-Abled Students",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 30,
    "maxIncome": 800000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "₹50,000 per year scholarship for students with disabilities (≥ 40%) pursuing technical degrees and diplomas in AICTE institutions.",
    "description": "The AICTE Saksham Scholarship is dedicated to encouraging differently-abled youth to pursue professional and technical education. Eligible students receive ₹50,000 per year towards tuition fees, assistive technologies, books, and educational devices.",
    "benefit": "₹50,000 per annum across degree duration",
    "benefitText": "₹50,000 per year for disabled technical students",
    "benefits": [
      "Direct financial grant of ₹50,000 annually",
      "Covers assistive learning devices, laptops, software, and college fees",
      "Universal coverage for all eligible disabled candidates meeting admission criteria"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 30,
      "gender": "All",
      "maxIncome": 800000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Disability Certificate / UDID Card showing minimum 40% disability",
      "Class 10 and Class 12 Marks Memos",
      "Admission letter for AICTE approved degree/diploma course",
      "Income Certificate from Tahsildar (under ₹8 Lakhs)",
      "Bank Passbook in student's name"
    ],
    "applicationProcess": [
      "Enroll in first year of AICTE-approved technical degree/diploma program",
      "Register online on National Scholarship Portal (scholarships.gov.in)",
      "Upload UDID disability certificate and admission documents",
      "Institute verification followed by AICTE approval",
      "Direct DBT disbursement to student account"
    ],
    "providerUrl": "https://www.aicte-india.org",
    "applyUrl": "https://scholarships.gov.in"
  },
  {
    "id": 46,
    "name": "AICTE Swanath Scholarship Scheme",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 28,
    "maxIncome": 800000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "₹50,000 per year scholarship for orphans, wards of parents lost to COVID-19, or wards of Armed Forces martyrs pursuing technical degrees.",
    "description": "AICTE Swanath Scholarship provides comprehensive financial support of ₹50,000 per year to vulnerable students who are orphans, have lost both parents during the COVID-19 pandemic, or are children of Armed Forces and Central Paramilitary personnel martyred in action.",
    "benefit": "₹50,000 per year for technical degree / diploma",
    "benefitText": "₹50,000/yr for orphans & martyr wards",
    "benefits": [
      "Annual grant of ₹50,000 for tuition and living expenses",
      "Continued support throughout the entire duration of technical study",
      "Priority assistance for vulnerable youth without family financial support"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 28,
      "gender": "All",
      "maxIncome": 800000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student",
      "Death certificates of both parents / Armed forces martyr certificate / Orphan certificate",
      "Bonafide student certificate from AICTE-approved institution",
      "Class 10 and 12 Marks Sheets",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Apply through the National Scholarship Portal under AICTE Swanath Scheme",
      "Submit valid supporting certificates verifying orphan or martyr ward status",
      "College authorities authenticate admission records",
      "AICTE sanctions scholarship and credits funds directly via DBT"
    ],
    "providerUrl": "https://www.aicte-india.org",
    "applyUrl": "https://scholarships.gov.in"
  },
  {
    "id": 47,
    "name": "PM YASASVI Scholarship Scheme for OBC, EBC & DNT",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 13,
    "maxAge": 18,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Scholarships of ₹75,000 (Class 9-10) and ₹1,25,000 (Class 11-12) for Other Backward Classes, EBC, and Nomadic Tribes.",
    "description": "PM Young Achievers Scholarship Award Scheme for Vibrant India (PM-YASASVI) is a flagship initiative of the Ministry of Social Justice and Empowerment for OBC, EBC, and Nomadic/Semi-Nomadic tribes studying in designated top schools across the country.",
    "benefit": "₹75,000/yr (Class 9-10) and ₹1,25,000/yr (Class 11-12)",
    "benefitText": "₹75,000 to ₹1,25,000 per year scholarship",
    "benefits": [
      "High-value financial aid covering entire tuition, hostel, and academic costs",
      "Award of ₹75,000/yr for Class 9 & 10 students",
      "Award of ₹1,25,000/yr for Class 11 & 12 students",
      "Direct DBT disbursement through PFMS"
    ],
    "eligibility": {
      "minAge": 13,
      "maxAge": 18,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student",
      "OBC / EBC / DNT Community Certificate",
      "Income Certificate issued by Tahsildar (household income ≤ ₹2.5 Lakh)",
      "Bonafide Enrollment Certificate from an empanelled top school",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Apply on National Scholarship Portal (scholarships.gov.in) under PM-YASASVI scheme",
      "Upload caste, income, and admission certificates",
      "School verification of academic enrollment",
      "State Nodal Officer verification and central approval",
      "Direct benefit credit into student's bank account"
    ],
    "providerUrl": "https://socialjustice.gov.in",
    "applyUrl": "https://scholarships.gov.in"
  },
  {
    "id": 48,
    "name": "Begum Hazrat Mahal National Scholarship",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 13,
    "maxAge": 18,
    "maxIncome": 200000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Financial scholarship for meritorious minority girl students (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) in Classes 9 to 12.",
    "description": "Implemented by Maulana Azad Education Foundation, Ministry of Minority Affairs, this scholarship provides financial support to meritorious girl students belonging to notified national minority communities studying in Classes 9, 10, 11, and 12.",
    "benefit": "₹5,000/yr (Class 9-10) and ₹6,000/yr (Class 11-12)",
    "benefitText": "₹5,000 to ₹6,000 per year for minority girls",
    "benefits": [
      "Direct financial support to reduce secondary school dropout rates among minority girls",
      "₹5,000 per year for Class 9 and Class 10",
      "₹6,000 per year for Class 11 and Class 12",
      "Direct credit to student's bank account"
    ],
    "eligibility": {
      "minAge": 13,
      "maxAge": 18,
      "gender": "Female only",
      "maxIncome": 200000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student",
      "Minority Community Certificate / Self-declaration",
      "Income Certificate issued by competent revenue authority (under ₹2 Lakhs)",
      "Previous Class Marks Memo (minimum 50% marks)",
      "School Verification Form signed by Principal",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Apply through the National Scholarship Portal (NSP)",
      "Upload school verification form and minority declaration",
      "School Headmaster conducts online verification on NSP portal",
      "District Minority Welfare Officer scrutinizes applications",
      "DBT transfer into student's Aadhaar-linked savings account"
    ],
    "providerUrl": "https://www.minorityaffairs.gov.in",
    "applyUrl": "https://scholarships.gov.in"
  },
  {
    "id": 49,
    "name": "Jagananna Vidya Kanuka",
    "state": "Andhra Pradesh",
    "category": "Education",
    "minAge": 5,
    "maxAge": 16,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free student educational kit comprising bilingual textbooks, notebooks, workbooks, 3 sets of uniforms, shoes, socks, and a school bag.",
    "description": "Jagananna Vidya Kanuka is a universal school education welfare scheme in Andhra Pradesh. At the reopening of every academic year, all students in Classes 1 to 10 enrolled in government, Mandal Parishad, Zilla Parishad, and municipal schools receive a comprehensive customized student kit completely free of charge.",
    "benefit": "Complete annual student kit worth over ₹2,500 per child",
    "benefitText": "Free 3 uniform sets, books, bag, shoes & socks",
    "benefits": [
      "3 pairs of uniform cloth with stitching charges deposited into mother's account",
      "Bilingual textbooks, workbooks, and quality notebooks",
      "One durable school bag, one pair of shoes, two pairs of socks, and belt",
      "Ensures zero financial burden on parents for essential schooling equipment"
    ],
    "eligibility": {
      "minAge": 5,
      "maxAge": 16,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the child and parent",
      "School Child Info ID / U-DISE Student Enrollment",
      "White Ration Card / Rice Card",
      "Mother's Aadhaar-linked Bank Passbook (for stitching charges)"
    ],
    "applicationProcess": [
      "Enroll child in any Government, MP, ZP, or Municipal School in AP",
      "Child's details automatically entered in Child Info Portal by school teachers",
      "Biometric measurement for uniform and shoe sizes conducted at school",
      "Student kits distributed directly on the school reopening day",
      "Uniform stitching allowance credited via DBT to mother's account"
    ],
    "providerUrl": "https://cse.ap.gov.in",
    "applyUrl": "https://cse.ap.gov.in"
  },
  {
    "id": 50,
    "name": "Jagananna Gorumudha (PM POSHAN Mid-Day Meal AP)",
    "state": "Andhra Pradesh",
    "category": "Education",
    "minAge": 5,
    "maxAge": 16,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free daily nutritious hot cooked lunch featuring specialized daily menu, boiled eggs, and peanut-jaggery chikki for school students.",
    "description": "Jagananna Gorumudha provides hot, hygienic, and nutritious mid-day meals to all students studying in classes 1 to 10 in government schools across Andhra Pradesh. The enhanced menu includes boiled eggs five days a week, peanut-jaggery chikki three days a week, and diverse wholesome rice dishes to eliminate malnutrition.",
    "benefit": "Free daily balanced hot cooked meal + 5 eggs/week",
    "benefitText": "Daily nutritious hot meal & eggs in schools",
    "benefits": [
      "Nutritious hot cooked meals provided every school working day",
      "Boiled eggs 5 days a week and nutritious chikki 3 days a week",
      "Improves student attendance, cognitive alertness, and physical health",
      "Stringent quality checks conducted through IMMS mobile application"
    ],
    "eligibility": {
      "minAge": 5,
      "maxAge": 16,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "School enrollment record / Child Info ID (No separate documentation needed)"
    ],
    "applicationProcess": [
      "Universal entitlement for every student enrolled in Government and Aided schools",
      "No formal application required — served daily at lunch hour in school premises",
      "Quality monitored daily by Parents Committees and Gram/Ward Sachivalayams"
    ],
    "providerUrl": "https://cse.ap.gov.in",
    "applyUrl": "https://cse.ap.gov.in"
  },
  {
    "id": 51,
    "name": "YSR Videshi Vidya Deevena",
    "state": "Andhra Pradesh",
    "category": "Education",
    "minAge": 20,
    "maxAge": 35,
    "maxIncome": 800000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Financial assistance of up to ₹1.25 Crore for students securing admissions in top 200 QS/Times World Ranked overseas universities.",
    "description": "YSR Videshi Vidya Deevena enables meritorious students from SC, ST, BC, Minority, and EBC communities of Andhra Pradesh to pursue postgraduate and doctoral studies in the world's top-ranked universities (Rank 1-200 in QS/Times Higher Education). The government covers 100% of tuition fees up to ₹1.25 Crore for top 100 universities and up to ₹50 Lakhs for ranks 101-200.",
    "benefit": "Up to ₹1.25 Crore overseas tuition fee assistance",
    "benefitText": "Up to ₹1.25 Cr grant for top world universities",
    "benefits": [
      "100% tuition fee reimbursement (up to ₹1.25 Cr) for top 100 QS-ranked universities",
      "Reimbursement up to ₹50 Lakhs for universities ranked 101 to 200",
      "Disbursement in 4 installments tied to visa, course registration, and semester credits",
      "Includes one-way airfare and visa fee reimbursement"
    ],
    "eligibility": {
      "minAge": 20,
      "maxAge": 35,
      "gender": "All",
      "maxIncome": 800000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Valid Indian Passport and Foreign Student Visa",
      "Unconditional Admission Letter (I-20 / CAS) from Top 200 QS University",
      "GRE / GMAT / TOEFL / IELTS Scorecard",
      "Integrated Caste & Income Certificate issued by Tahsildar (under ₹8 Lakhs)",
      "Degree Consolidated Marks Memo and Provisional Certificate"
    ],
    "applicationProcess": [
      "Apply online on the JnanaBhumi AP Videshi Vidya Deevena portal",
      "Upload passport, admission letter, university ranking proof, and certificates",
      "State Level Committee headed by Principal Secretary conducts scrutiny",
      "Issuance of provisional sanction order",
      "Disbursement released in milestone-based electronic transfers"
    ],
    "providerUrl": "https://jnanabhumi.ap.gov.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 52,
    "name": "PM eVIDYA & National Digital Library Initiative",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 6,
    "maxAge": 30,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free digital education ecosystem providing e-textbooks, SWAYAM online courses, and DTH educational TV telecasts in regional languages.",
    "description": "PM eVIDYA is a comprehensive national digital education program providing multi-modal access to education. It offers DIKSHA (One Nation, One Digital Platform) with QR-coded textbooks in Telugu and English, SWAYAM credit courses for college students, and 200 dedicated DTH TV channels for school education.",
    "benefit": "Free universal access to verified digital textbooks & courses",
    "benefitText": "Free digital textbooks, SWAYAM & TV lessons",
    "benefits": [
      "Access to NCERT and SCERT AP curriculum in high-definition digital format",
      "Free university certification courses on SWAYAM with college credit transfer",
      "Specialized content for visually and hearing-impaired learners (DAISY/ISL)"
    ],
    "eligibility": {
      "minAge": 6,
      "maxAge": 30,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card (Optional for SWAYAM exam registration)",
      "Mobile number and email ID for online profile creation"
    ],
    "applicationProcess": [
      "Download DIKSHA app or visit portal (diksha.gov.in)",
      "Scan QR codes on Andhra Pradesh textbooks to access animated concepts and lessons",
      "For higher education, enroll in free SWAYAM courses at swayam.gov.in",
      "Access DD Sapthagiri / PM eVIDYA TV channels on television"
    ],
    "providerUrl": "https://diksha.gov.in",
    "applyUrl": "https://swayam.gov.in"
  },
  {
    "id": 53,
    "name": "Prime Minister's Research Fellowship (PMRF)",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 21,
    "maxAge": 32,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Prestigious doctoral fellowship of ₹70,000 to ₹80,000 per month plus ₹2 Lakhs annual research grant for PhD scholars in IITs, IISc, and NITs.",
    "description": "The PMRF scheme attracts top talent to doctoral research in cutting-edge science and technology. Fellows receive ₹70,000/month for the first two years, ₹75,000/month in the third year, and ₹80,000/month in the fourth and fifth years, along with an annual research contingency grant of ₹2 Lakhs per year.",
    "benefit": "₹70,000 - ₹80,000/month stipend + ₹2 Lakh/year research grant",
    "benefitText": "₹70,000 to ₹80,000/month PhD research stipend",
    "benefits": [
      "Monthly fellowship: ₹70,000 (Years 1-2), ₹75,000 (Year 3), ₹80,000 (Years 4-5)",
      "Annual contingency grant of ₹2,00,000 for conference travel and experimental materials",
      "Recognition as premier national research fellow"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 32,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Qualifying Degree Marksheets (B.Tech/M.Tech/M.Sc with high CGPA/GATE score)",
      "PhD Admission Letter from IIT/IISER/NIT/Central University",
      "Comprehensive Research Proposal Abstract",
      "Recommendation of Doctoral Advisory Committee"
    ],
    "applicationProcess": [
      "Gain admission to PhD programme at an eligible PMRF-granting institution (e.g. IIT Tirupati)",
      "Apply through institutional nomination channel on PMRF portal (pmrf.in)",
      "National Selection Committee evaluates research proposal and academic credentials",
      "Sanction letter issued with monthly stipend disbursed via institute"
    ],
    "providerUrl": "https://pmrf.in",
    "applyUrl": "https://pmrf.in"
  },
  {
    "id": 54,
    "name": "INSPIRE Scholarship for Higher Education (SHE)",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 22,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "₹80,000 per year scholarship for students ranking in top 1% of Class 12 board exams pursuing B.Sc / M.Sc in Natural and Basic Sciences.",
    "description": "Implemented by Department of Science and Technology (DST), INSPIRE-SHE offers ₹80,000 per annum (₹60,000 cash stipend + ₹20,000 summer mentorship project attachment) to students who rank in the top 1% of their Class 12 board examinations and enroll in basic science degree programs (Physics, Chemistry, Mathematics, Biology, etc.).",
    "benefit": "₹80,000 per year for 5 years (B.Sc & M.Sc)",
    "benefitText": "₹80,000 per year basic science fellowship",
    "benefits": [
      "Annual scholarship of ₹60,000 credited directly into student's SBI account",
      "Summer project mentorship grant of ₹20,000 per annum",
      "Encourages brilliant minds to pursue careers in fundamental scientific research"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 22,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Class 12 Intermediate Marks Sheet with Top 1% INSPIRE cutoff advisory note",
      "Endorsement Certificate signed by Head of University / College",
      "State Bank of India (SBI) Savings Account Passbook",
      "Class 10 Certificate for date of birth verification"
    ],
    "applicationProcess": [
      "Verify top 1% advisory note from Andhra Pradesh Board of Intermediate Education",
      "Register on INSPIRE web portal (online-inspire.gov.in)",
      "Upload endorsement letter from college Principal and marksheets",
      "DST scrutinizes applications and issues conditional scholarship sanction",
      "Annual performance renewal based on minimum 60% marks in degree examinations"
    ],
    "providerUrl": "https://online-inspire.gov.in",
    "applyUrl": "https://online-inspire.gov.in"
  },
  {
    "id": 55,
    "name": "National Overseas Scholarship for SC / ST Candidates",
    "state": "Central / Andhra Pradesh",
    "category": "Education",
    "minAge": 21,
    "maxAge": 35,
    "maxIncome": 800000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Full overseas scholarship covering complete tuition, maintenance allowance, and airfare for SC/ST students pursuing Master's and PhD abroad.",
    "description": "Administered by the Ministry of Social Justice and Empowerment, the National Overseas Scholarship facilitates low-income students belonging to SC, de-notified nomadic tribes, and traditional artisan families to obtain Master's degrees or PhDs in premier overseas universities across Engineering, Management, Pure Sciences, and Agriculture.",
    "benefit": "Full foreign tuition fee + USD 15,400/yr living allowance",
    "benefitText": "Full tuition + international living allowance",
    "benefits": [
      "Full reimbursement of international university tuition fees",
      "Annual living maintenance allowance: USD 15,400 (USA) / GBP 9,900 (UK)",
      "Economy airfare, visa fees, medical insurance, and book allowance covered",
      "125 slots awarded every academic year"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 35,
      "gender": "All",
      "maxIncome": 800000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student",
      "Valid Indian Passport",
      "SC/ST Community Certificate from competent authority",
      "Income Certificate from Tahsildar (family income under ₹8 Lakhs)",
      "Unconditional Offer Letter from Top 500 QS-ranked overseas university",
      "Bachelor's / Master's Degree Certificates (minimum 60% marks)"
    ],
    "applicationProcess": [
      "Register on the NOS portal (nosmsje.gov.in)",
      "Submit application with university offer letter and academic transcripts",
      "Screening committee assesses candidate eligibility and rankings",
      "Selection letter issued and guarantee bond executed",
      "Direct tuition fee remittance to overseas university and stipend to scholar's account"
    ],
    "providerUrl": "https://nosmsje.gov.in",
    "applyUrl": "https://nosmsje.gov.in"
  }
]

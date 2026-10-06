# schemes_health.py
# Health, Nutrition & Medical Welfare Schemes (IDs 56 to 73)

health_schemes = [
  {
    "id": 56,
    "name": "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": None,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Cashless health insurance coverage of ₹5,00,000 per family per year for secondary and tertiary care hospitalization.",
    "description": "Ayushman Bharat PM-JAY is the world's largest government-funded health assurance scheme. Integrated with Dr. YSR Aarogyasri in Andhra Pradesh, it provides cashless and paperless access to over 1,949 medical procedures, surgeries, and critical care therapies across empanelled public and private hospitals nationwide.",
    "benefit": "₹5,00,000 cashless health insurance per family per year",
    "benefitText": "₹5,00,000/yr cashless hospital cover",
    "benefits": [
      "Cashless treatment up to ₹5,00,000 per family per annum",
      "Covers 3 days of pre-hospitalization and 15 days of post-hospitalization expenses",
      "No cap on family size, age, or gender; pre-existing diseases covered from day one",
      "Cashless portability across all empanelled network hospitals in India"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of all family members",
      "Rice Card / White Ration Card",
      "Ayushman Bharat Card / Aarogyasri Card",
      "Active Mobile Number linked to Aadhaar"
    ],
    "applicationProcess": [
      "Verify eligibility on beneficiary portal (beneficiary.nha.gov.in) using Ration Card or Aadhaar",
      "Visit any Ayushman Mitra kiosk at network government or private hospital",
      "Complete instant e-KYC via biometric or iris authentication",
      "Download laminated Ayushman PVC Card or print digital card",
      "Present card at hospital help desk for immediate cashless treatment"
    ],
    "providerUrl": "https://pmjay.gov.in",
    "applyUrl": "https://beneficiary.nha.gov.in"
  },
  {
    "id": 57,
    "name": "YSR Aarogya Aasara",
    "state": "Andhra Pradesh",
    "category": "Health",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Post-operative sustenance allowance of ₹225 per day (up to ₹5,000/month) for patients recovering from Aarogyasri surgeries.",
    "description": "YSR Aarogya Aasara provides financial compensation to patients who undergo surgery or treatment under Dr. YSR Aarogyasri during their post-operative recuperation period. The scheme compensates for lost daily wage income, paying ₹225 per day up to ₹5,000 per month directly into the patient's bank account upon discharge.",
    "benefit": "₹225 per day post-operative allowance (up to ₹5,000/month)",
    "benefitText": "₹225/day post-surgery wage compensation",
    "benefits": [
      "Direct monetary compensation of ₹225 per day during the doctor-advised rest period",
      "Maximum allowance of ₹5,000 per month depending on surgery package protocol",
      "Eliminates economic distress during surgical convalescence",
      "Disbursed directly into patient's bank account at time of hospital discharge"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the patient",
      "Dr. YSR Aarogyasri Health Card / Rice Card",
      "Hospital Discharge Summary with rest period recommendation",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Undergo surgery under Aarogyasri package at an empanelled network hospital",
      "Aarogya Mithra at hospital records discharge details and calculates rest period",
      "Hospital medical superintendent approves Aarogya Aasara claim",
      "Direct Benefit Transfer triggered electronically to patient's bank account"
    ],
    "providerUrl": "https://aarogyasri.ap.gov.in",
    "applyUrl": "https://aarogyasri.ap.gov.in"
  },
  {
    "id": 58,
    "name": "YSR Kanti Velugu",
    "state": "Andhra Pradesh",
    "category": "Health",
    "minAge": None,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Universal free comprehensive eye screening, prescription spectacles distribution, and cataract surgeries across Andhra Pradesh.",
    "description": "YSR Kanti Velugu is a phased universal eye-care initiative delivering comprehensive vision screening to all 5 Crore citizens of Andhra Pradesh. The scheme provides free eyesight examinations, custom prescription glasses, and tertiary surgical interventions including cataract surgeries with intraocular lens implants.",
    "benefit": "100% free eye exams, prescription spectacles & cataract surgeries",
    "benefitText": "Free spectacles & cataract surgeries",
    "benefits": [
      "Universal door-to-door visual acuity screening by trained ophthalmic staff",
      "Custom power glasses manufactured and delivered free to home address",
      "Advanced sutureless cataract surgeries conducted in district hospitals with free transport"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the citizen",
      "Health ID / ABHA number (created on-spot if unavailable)"
    ],
    "applicationProcess": [
      "Attend community eye screening camp at Gram/Ward Sachivalayam or Primary Health Centre",
      "Undergo computerised refraction and vision assessment by optometrist",
      "Spectacles delivered within 15 days if refractive error is detected",
      "Surgical cases referred with free transportation to government hospital"
    ],
    "providerUrl": "https://dhs.ap.gov.in",
    "applyUrl": "https://dhs.ap.gov.in"
  },
  {
    "id": 59,
    "name": "Janani Shishu Suraksha Karyakram (JSSK)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": 18,
    "maxAge": 49,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Completely free delivery, C-sections, drugs, diagnostics, blood, food, and transport for pregnant women and sick neonates.",
    "description": "JSSK guarantees zero out-of-pocket expenses for all pregnant women delivering in government health facilities. It entitles every mother to completely free normal and caesarean deliveries, free medicines, diagnostic lab tests, blood transfusions, food during hospital stay, and free drop-back transport via 102/108 ambulance.",
    "benefit": "Zero out-of-pocket expenditure for delivery & neonatal care",
    "benefitText": "100% free hospital delivery, medicines & food",
    "benefits": [
      "Completely free institutional delivery including caesarean section",
      "Free medicines, consumables, and blood transfusion without any fee",
      "Free diet during hospital stay (up to 3 days for normal, 7 days for C-section)",
      "Free transport from home to facility and drop-back after discharge via 102/108"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 49,
      "gender": "Female only",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Mother and Child Tracking System (MCTS) / RCH ID",
      "Aadhaar Card of mother",
      "Maternal and Child Health (MCP) Green Card"
    ],
    "applicationProcess": [
      "Register pregnancy with local ANM / ASHA worker at Village Health Clinic",
      "Admit for delivery at any Government Hospital, CHC, or Area Hospital",
      "All services, medications, and meals provided automatically without charges",
      "Avail free 102 drop-back vehicle to reach home safely after discharge"
    ],
    "providerUrl": "https://nhm.gov.in",
    "applyUrl": "https://hmis.mohfw.gov.in"
  },
  {
    "id": 60,
    "name": "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": 18,
    "maxAge": 45,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Free assured, comprehensive, and quality antenatal checkups with specialist OB/GYN doctors on the 9th of every month.",
    "description": "PMSMA guarantees universal comprehensive antenatal care (ANC) services to all pregnant women in their 2nd and 3rd trimesters on the 9th day of every month across designated government health facilities. Specialist obstetricians and gynecologists screen mothers for high-risk pregnancies.",
    "benefit": "Free specialist antenatal checkup, ultrasound & blood diagnostics",
    "benefitText": "Free specialist ANC clinic on 9th of every month",
    "benefits": [
      "Specialist clinical examination by Obstetricians / Gynecologists",
      "Free blood tests, hemoglobin screening, urine examination, and ultrasound scans",
      "Early identification of high-risk pregnancies (gestational diabetes, hypertension, anemia)",
      "Free distribution of iron-folic acid and calcium supplements"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 45,
      "gender": "Female only",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the pregnant woman",
      "Mother & Child Protection (MCP) Card"
    ],
    "applicationProcess": [
      "Visit nearest Community Health Centre (CHC), Area Hospital, or District Hospital on the 9th of any month",
      "Register at the PMSMA desk with MCP card",
      "Undergo free diagnostic tests, doctor consultation, and sonography",
      "Receive color-coded high-risk pregnancy sticker and follow-up clinical guidance"
    ],
    "providerUrl": "https://pmsma.mohfw.gov.in",
    "applyUrl": "https://pmsma.mohfw.gov.in"
  },
  {
    "id": 61,
    "name": "Nikshay Poshan Yojana (TB Nutritional Support)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": None,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Direct benefit transfer of ₹500 to ₹1,000 per month for nutritional support to all notified tuberculosis (TB) patients.",
    "description": "Nikshay Poshan Yojana is a direct financial incentive scheme under the National Tuberculosis Elimination Program (NTEP). Every notified TB patient undergoing treatment receives monthly DBT financial support into their bank account for the entire duration of anti-TB treatment to fulfill high-protein dietary requirements.",
    "benefit": "₹500 to ₹1,000 per month nutritional DBT during treatment",
    "benefitText": "Monthly DBT for high-protein nutrition during TB care",
    "benefits": [
      "Monthly DBT financial support directly credited to patient's Aadhaar-linked account",
      "Covers entire duration of treatment (6 months to 24 months for drug-resistant TB)",
      "Improves treatment adherence and accelerates sputum conversion"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the patient",
      "Nikshay Patient ID generated by NTEP treatment centre",
      "TB Diagnostic confirmation report from Designated Microscopy Centre (DMC)",
      "Bank Passbook linked to Aadhaar (NPCI enabled)"
    ],
    "applicationProcess": [
      "Diagnosed and notified at any government hospital or private TB clinic",
      "Health worker records patient details in the Ni-kshay web portal (nikshay.in)",
      "Bank account details verified by District TB Officer",
      "Monthly DBT payment disbursed through PFMS directly into patient bank account"
    ],
    "providerUrl": "https://nikshay.in",
    "applyUrl": "https://nikshay.in"
  },
  {
    "id": 62,
    "name": "Rashtriya Bal Swasthya Karyakram (RBSK)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": 0,
    "maxAge": 18,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free universal screening and tertiary hospital treatment for children (0-18 years) covering 30 health conditions & defects.",
    "description": "RBSK is an ambitious child health screening and early intervention initiative. Mobile health teams systematically screen children aged 0-18 years across Anganwadi centres and government schools for the '4 Ds': Defects at birth, Deficiencies, Diseases, and Development delays including disabilities, providing 100% free surgery and treatment.",
    "benefit": "100% free surgical correction and rehabilitation for 30 conditions",
    "benefitText": "Free surgical correction for birth defects & diseases",
    "benefits": [
      "Early screening for congenital heart disease, cleft lip/palate, clubfoot, and neural tube defects",
      "Free surgical repair at empanelled tertiary hospitals with all expenses covered",
      "Free speech therapy, physiotherapy, and psychological support at District Early Intervention Centres (DEIC)"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 18,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Child Birth Certificate / Aadhaar Card",
      "Anganwadi or School Enrollment ID",
      "Parent's Aadhaar Card"
    ],
    "applicationProcess": [
      "RBSK Mobile Health Team visits local Anganwadi Centre or School for screening",
      "Identified children are referred to the District Early Intervention Centre (DEIC)",
      "Specialist pediatric team confirms clinical diagnosis",
      "Patient scheduled for cashless surgery under Aarogyasri / NHM package"
    ],
    "providerUrl": "https://rbsk.gov.in",
    "applyUrl": "https://rbsk.gov.in"
  },
  {
    "id": 63,
    "name": "YSR Financial Assistance for Dialysis & CKDU Patients",
    "state": "Andhra Pradesh",
    "category": "Health",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly pension of ₹10,000 for Chronic Kidney Disease (CKDU) patients undergoing regular hemodialysis in Andhra Pradesh.",
    "description": "Under this dedicated welfare scheme, patients diagnosed with Chronic Kidney Disease (CKDU stages 3, 4, 5) undergoing regular hemodialysis or peritoneal dialysis receive a monthly pension of ₹10,000. Non-dialysis CKDU patients in Uddanam and notified areas receive ₹5,000 per month.",
    "benefit": "₹10,000 per month pension for dialysis patients",
    "benefitText": "₹10,000/month direct pension for CKDU patients",
    "benefits": [
      "Direct monthly pension of ₹10,000 credited on the 1st of every month",
      "Free hemodialysis sessions in government hospital dialysis units",
      "Free supply of supportive medications like Erythropoietin and Iron sucrose injections"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the patient",
      "Dialysis Case Sheet and Nephrologist Certificate from recognized hospital",
      "Rice Card / White Ration Card",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Obtain medical certificate and dialysis record from government or Aarogyasri network dialysis unit",
      "Submit application at Gram/Ward Sachivalayam to the Welfare & Education Assistant",
      "District Medical & Health Officer (DMHO) verifies clinical documents",
      "Sanctioned pension disbursed directly to bank account on the 1st of every month"
    ],
    "providerUrl": "https://sspensions.ap.gov.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 64,
    "name": "Tele-MANAS Mental Health Assistance Scheme",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": None,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "24/7 toll-free tele-mental health counseling and clinical psychological assistance across Andhra Pradesh in Telugu.",
    "description": "Tele Mental Health Assistance and Networking Across States (Tele-MANAS) is a flagship national digital mental health service. Operating via toll-free number 14416 or 1800-891-4416, it connects citizens directly to trained mental health counselors, clinical psychologists, and psychiatrists 24x7 in their native language.",
    "benefit": "24/7 free toll-free professional psychological counseling & therapy",
    "benefitText": "Free 24x7 toll-free mental healthcare via 14416",
    "benefits": [
      "Immediate confidential psychological counseling for stress, anxiety, depression, and grief",
      "Specialist psychiatrist consultation via video conference when needed",
      "Seamless physical linkage to District Mental Health Programme (DMHP) clinics"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "No documents required — 100% free and confidential service"
    ],
    "applicationProcess": [
      "Dial toll-free helpline 14416 or 1800-891-4416 from any mobile or landline phone",
      "Select Telugu language option",
      "Speak directly with a certified psychological counselor",
      "Receive prescription or referral to government hospital psychiatry department if required"
    ],
    "providerUrl": "https://telemanas.mohfw.gov.in",
    "applyUrl": "https://telemanas.mohfw.gov.in"
  },
  {
    "id": 65,
    "name": "National Cochlear Implant Scheme (ADIP Health)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": 0,
    "maxAge": 5,
    "maxIncome": 240000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Full financial coverage up to ₹6,00,000 for cochlear implant surgery and 2 years of auditory-verbal therapy for deaf children.",
    "description": "Under the ADIP scheme of the Ministry of Social Justice and Empowerment, congenitally deaf children aged up to 5 years receive free state-of-the-art cochlear implant devices and surgical implantation costing up to ₹6 Lakhs at empanelled super-specialty ENT hospitals.",
    "benefit": "Free cochlear implant surgery worth ₹6,00,000 + 2 yrs rehab",
    "benefitText": "Free ₹6 Lakh cochlear surgery & speech therapy",
    "benefits": [
      "100% cost of imported cochlear implant device and surgical procedure borne by government",
      "Pre-operative auditory brainstem response (ABR) and high-resolution CT scans covered",
      "2 years of intensive post-operative Auditory-Verbal Therapy (AVT) included"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 5,
      "gender": "All",
      "maxIncome": 240000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the child and parents",
      "Audiological Evaluation Report showing profound bilateral sensorineural hearing loss",
      "Income Certificate from Tahsildar (household income below ₹20,000/month)",
      "Birth Certificate of child"
    ],
    "applicationProcess": [
      "Get child evaluated by an ENT specialist at an empanelled government medical college",
      "Submit clinical audiogram and radiological scan reports to the ENT department",
      "Hospital board submits nomination to the ADIP Cochlear Implant Committee",
      "Sanction accorded and surgery scheduled with zero cost to family"
    ],
    "providerUrl": "https://adip.disabilityaffairs.gov.in",
    "applyUrl": "https://adip.disabilityaffairs.gov.in"
  },
  {
    "id": 66,
    "name": "YSR Sampoorna Poshana Plus (ITDA Tribal Areas)",
    "state": "Andhra Pradesh",
    "category": "Health",
    "minAge": 18,
    "maxAge": 45,
    "maxIncome": 250000,
    "ruralOnly": True,
    "femaleOnly": True,
    "shortDescription": "Enhanced specialized hot meals, take-home rations, milk, and eggs for pregnant and lactating tribal mothers in ITDA mandals.",
    "description": "YSR Sampoorna Poshana Plus addresses chronic anemia and malnutrition among pregnant women, lactating mothers, and infants residing in 77 Scheduled and ITDA tribal mandals of Andhra Pradesh. Beneficiaries receive hot cooked meals, 30 eggs per month, 6 liters of milk, peanut chikki, and multivitamin fortified foods.",
    "benefit": "Comprehensive monthly high-nutrition food kit worth ₹1,100/month",
    "benefitText": "Monthly fortified rations, milk & eggs for tribal mothers",
    "benefits": [
      "Daily hot cooked meal with rice, dal, and green leafy vegetables at Anganwadi centre",
      "Monthly supply of 30 eggs, 6 litres of milk, 1 kg multigrain sattu, and 250g peanut chikki",
      "Eradicates maternal anemia and low birth weight in tribal communities"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 45,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the mother",
      "MCP Card / Anganwadi Registration Card",
      "Rice Card / ST Community Certificate"
    ],
    "applicationProcess": [
      "Register pregnancy at nearest tribal Anganwadi Centre",
      "Details entered into YSR Poshan mobile application by Anganwadi Worker",
      "Collect take-home rations or attend daily hot meal sessions at the centre",
      "Growth tracking of child monitored every month"
    ],
    "providerUrl": "https://wdcw.ap.gov.in",
    "applyUrl": "https://wdcw.ap.gov.in"
  },
  {
    "id": 67,
    "name": "YSR Sampoorna Poshana (Plain Areas)",
    "state": "Andhra Pradesh",
    "category": "Health",
    "minAge": 18,
    "maxAge": 45,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Monthly nutritious food kits, eggs, and milk for pregnant women, lactating mothers, and toddlers across rural and urban plains.",
    "description": "Implemented across all non-tribal plain mandals in Andhra Pradesh, YSR Sampoorna Poshana delivers high-protein nutritious hot meals, 25 eggs per month, and fortified foods to pregnant women and children aged 6 to 72 months to prevent stunting and wasting.",
    "benefit": "Monthly nutritional rations worth ₹850/beneficiary/month",
    "benefitText": "25 eggs/month, milk & hot cooked nutritious meals",
    "benefits": [
      "Daily wholesome lunch at Anganwadi centre for pregnant and nursing mothers",
      "25 eggs and milk distributed every month",
      "Fortified Balamrutham powder for infants aged 6 to 36 months"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 45,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of mother",
      "RCH Portal ID / Mother-Child Protection Card",
      "White Ration Card"
    ],
    "applicationProcess": [
      "Enroll with local Anganwadi Worker in rural or urban ward",
      "Details updated on Poshan Tracker app",
      "Receive food supplies and participate in monthly Village Health Nutrition Day (VHND)"
    ],
    "providerUrl": "https://wdcw.ap.gov.in",
    "applyUrl": "https://wdcw.ap.gov.in"
  },
  {
    "id": 68,
    "name": "Pradhan Mantri National Dialysis Programme (PMNDP)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": None,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "100% free hemodialysis and peritoneal dialysis services at all District and Area Government Hospitals.",
    "description": "PMNDP provides free, high-quality dialysis services to below-poverty-line (BPL) renal failure patients across all 26 district hospitals and major area hospitals in Andhra Pradesh in public-private partnership mode, eliminating devastating out-of-pocket medical expenditure.",
    "benefit": "Free cashless hemodialysis sessions & dialyzer kits",
    "benefitText": "100% free lifelong dialysis sessions in govt hospitals",
    "benefits": [
      "Completely free hemodialysis sessions 2 to 3 times per week",
      "Single-use or high-flux dialyzer filters provided without patient co-payment",
      "Eliminates out-of-pocket costs of ₹2,000-₹3,000 per session incurred in private hospitals"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the patient",
      "White Ration Card / Rice Card",
      "Medical prescription and referral from a qualified Nephrologist"
    ],
    "applicationProcess": [
      "Visit the PMNDP Dialysis Unit at the District Hospital or Government General Hospital",
      "Present Aarogyasri / Rice Card for patient registration",
      "Get treatment schedule slot allocated for recurring weekly sessions"
    ],
    "providerUrl": "https://nhm.gov.in",
    "applyUrl": "https://aarogyasri.ap.gov.in"
  },
  {
    "id": 69,
    "name": "Intensified Mission Indradhanush (IMI 5.0)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": 0,
    "maxAge": 5,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free universal vaccination against 12 life-threatening preventable diseases for infants, young children, and pregnant women.",
    "description": "Mission Indradhanush ensures full immunization coverage for all children under 5 years of age and pregnant women who have missed routine vaccine doses. Vaccines provide protection against 12 deadly diseases including Polio, Measles-Rubella, Hepatitis B, Tetanus, Diphtheria, Pertussis, and Tuberculosis.",
    "benefit": "Universal free vaccines protecting against 12 deadly diseases",
    "benefitText": "Free childhood vaccinations & U-WIN digital certificate",
    "benefits": [
      "Free administration of BCG, OPV, Rotavirus, Pentavalent, PCV, and MR vaccines",
      "U-WIN digital immunization tracking ensuring zero missed doses",
      "Doorstep tracking by ANMs and ASHAs in high-risk rural and tribal pockets"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 5,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of Parent",
      "MCP Card / Child Immunization Card"
    ],
    "applicationProcess": [
      "Visit any Primary Health Centre (PHC) or Village Health Clinic on immunization day",
      "Vaccines administered free of cost by ANM staff",
      "Immediate digital certificate generated on U-WIN portal (uwin.mohfw.gov.in)"
    ],
    "providerUrl": "https://uwin.mohfw.gov.in",
    "applyUrl": "https://uwin.mohfw.gov.in"
  },
  {
    "id": 70,
    "name": "Rashtriya Arogya Nidhi (RAN)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": None,
    "maxAge": None,
    "maxIncome": 150000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "One-time financial grant of up to ₹15 Lakhs for BPL patients suffering from life-threatening major illnesses receiving tertiary care.",
    "description": "Rashtriya Arogya Nidhi provides one-time financial assistance to poor patients living below the poverty line who suffer from major life-threatening diseases of the heart, liver, kidney, or brain, receiving treatment at central government super-specialty hospitals like AIIMS Mangalagiri.",
    "benefit": "Up to ₹15 Lakhs financial grant for super-specialty surgery",
    "benefitText": "Up to ₹15 Lakhs grant for life-threatening diseases",
    "benefits": [
      "Direct grant of up to ₹15,00,000 remitted directly to the treating government super-specialty hospital",
      "Covers organ transplants, heart surgeries, complex neurosurgeries, and rare procedures",
      "Saves poor families from catastrophic medical impoverishment"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 150000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the patient",
      "BPL Card / White Ration Card",
      "Income Certificate from Tahsildar (under ₹1.5 Lakhs)",
      "Detailed Treatment Estimate signed by Head of Department and Medical Superintendent of AIIMS/Govt Institute"
    ],
    "applicationProcess": [
      "Get treatment estimate form filled by treating doctor at AIIMS Mangalagiri or designated institute",
      "Submit completed RAN application through hospital Medical Superintendent to Ministry of Health & Family Welfare",
      "Screening committee sanctions funds directly to the hospital account",
      "Hospital performs procedure with zero charges to the patient"
    ],
    "providerUrl": "https://mohfw.gov.in",
    "applyUrl": "https://mohfw.gov.in"
  },
  {
    "id": 71,
    "name": "Health Minister's Cancer Patient Fund (HMCPF)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": None,
    "maxAge": None,
    "maxIncome": 150000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Financial assistance of up to ₹5,00,000 for poor cancer patients receiving chemotherapy, radiation, or oncology surgery.",
    "description": "Under the Health Minister's Cancer Patient Fund, financial assistance up to ₹5 Lakhs is provided to poor patients suffering from cancer to undergo comprehensive oncology treatment including surgery, radiotherapy, chemotherapy, and immunotherapy at 27 Regional Cancer Centres across India.",
    "benefit": "Up to ₹5,00,000 financial support for cancer treatments",
    "benefitText": "Up to ₹5 Lakhs grant for chemotherapy & cancer surgery",
    "benefits": [
      "Direct financial grant up to ₹5,00,000 disbursed directly to the Regional Cancer Centre",
      "Covers expensive targeted chemotherapy medicines and advanced radiation therapy",
      "Reduces financial abandonment of cancer treatment"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 150000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of patient",
      "BPL / Rice Card",
      "Income Certificate from Tahsildar",
      "Histopathology / Biopsy Cancer Diagnostic Confirmation Report",
      "Hospital Treatment Estimate Proforma"
    ],
    "applicationProcess": [
      "Apply through the Medical Superintendent of an empanelled Regional Cancer Centre (e.g. Kidwai / Tata / MNJ / AIIMS)",
      "Hospital forwards proposal to Ministry of Health & Family Welfare",
      "Funds transferred directly to hospital revolving fund for patient's care"
    ],
    "providerUrl": "https://mohfw.gov.in",
    "applyUrl": "https://mohfw.gov.in"
  },
  {
    "id": 72,
    "name": "Free 108 Emergency Ambulance & 104 Mobile Medical Units",
    "state": "Andhra Pradesh",
    "category": "Health",
    "minAge": None,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "24/7 free emergency medical transport (108) and monthly doorstep village clinical diagnosis and medicine distribution (104).",
    "description": "The Government of Andhra Pradesh operates a modern fleet of over 1,000 Advanced Life Support (ALS) and Basic Life Support (BLS) 108 ambulances reachable toll-free 24/7. Complementing this, 104 Mobile Medical Units visit every rural village once every month providing free doctor consultations, blood tests, and 2-month chronic disease medicines.",
    "benefit": "100% free 24/7 emergency ambulance transport & monthly village clinics",
    "benefitText": "Free 24x7 108 ambulance & doorstep 104 village clinics",
    "benefits": [
      "Zero cost 24/7 emergency response with average rural arrival time under 15 minutes",
      "Free doorstep chronic medicine refills (BP, Diabetes) delivered every month by 104 vans",
      "Advanced onboard equipment including oxygen, defibrillator, and ECG"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "No documents required for emergency 108 service",
      "Aadhaar Card for 104 doorstep chronic medicine distribution"
    ],
    "applicationProcess": [
      "For emergency medical situations, dial 108 toll-free from any phone",
      "For monthly doorstep village checkup, attend scheduled 104 van visit at Gram Sachivalayam",
      "Collect prescribed medicines free of charge"
    ],
    "providerUrl": "https://dhs.ap.gov.in",
    "applyUrl": "https://dhs.ap.gov.in"
  },
  {
    "id": 73,
    "name": "National Sickle Cell Anemia Elimination Mission",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": 0,
    "maxAge": 40,
    "maxIncome": None,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Free universal genetic screening, pre-marital counseling, and lifetime hydroxyurea treatment for tribal populations.",
    "description": "Launched to eliminate sickle cell disease by 2047, this mission provides universal screening for all tribal and rural youth aged 0-40 years in Alluri Sitharama Raju, Parvathipuram Manyam, and tribal agency tracts. Beneficiaries receive a color-coded Sickle Cell Status Card, counseling, and free hydroxyurea medications.",
    "benefit": "Free screening, genetic counseling & free monthly medications",
    "benefitText": "Free genetic screening & lifetime sickle cell medicines",
    "benefits": [
      "Point-of-care solubility and HPLC blood testing in tribal villages",
      "Color-coded genetic status card issued to prevent trait transmission",
      "Free regular supply of Hydroxyurea, Folic Acid, and pneumococcal vaccines"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 40,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card",
      "Tribal Area Domicile / Community Certificate"
    ],
    "applicationProcess": [
      "Screening camp organized at local tribal school, ashram pathasala, or Village Health Clinic",
      "Rapid point-of-care blood test performed",
      "Receive Sickle Cell Status Card with counseling",
      "Patients diagnosed with disease enrolled for free regular medicine supply at PHC"
    ],
    "providerUrl": "https://sickle.nhm.gov.in",
    "applyUrl": "https://sickle.nhm.gov.in"
  }
]

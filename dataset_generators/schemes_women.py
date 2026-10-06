# schemes_women.py
# Women Empowerment & Child Protection Schemes (IDs 86 to 101)

women_schemes = [
  {
    "id": 86,
    "name": "YSR Aasara",
    "state": "Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": 65,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Full reimbursement of outstanding bank loan amounts of DWCRA Self Help Groups in 4 installments directly into women's accounts.",
    "description": "YSR Aasara provides comprehensive debt relief to rural and urban women members of Self-Help Groups (DWCRA/SERP/MEPMA). The Andhra Pradesh government reimburses the entire outstanding loan balance as of 11th April 2019 in four equal annual installments directly credited to each SHG woman member's personal bank savings account to foster entrepreneurship and economic self-reliance.",
    "benefit": "Full repayment of SHG bank debt directly to each woman's account",
    "benefitText": "Direct DBT reimbursement of SHG bank debt in 4 installments",
    "benefits": [
      "Direct bank credit of outstanding loan share directly into individual personal bank account",
      "Clears crippling indebtedness and restores access to institutional bank credit",
      "Funds can be used for livestock, micro-retail, agriculture, or children's education"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the SHG woman member",
      "SHG Member Loan Passbook and Savings Account Number",
      "Rice Card / White Ration Card",
      "SERP / MEPMA SHG Group ID and Resolution Book",
      "Aadhaar-linked Personal Bank Passbook"
    ],
    "applicationProcess": [
      "Verification of member records conducted by Village Organization (VO) / SLF",
      "Welfare and Education Assistant validates loan balance against bank ledger",
      "Biometric e-KYC authentication conducted at Gram/Ward Sachivalayam",
      "Annual installment released directly via Direct Benefit Transfer"
    ],
    "providerUrl": "https://aasara.ap.gov.in",
    "applyUrl": "https://aasara.ap.gov.in"
  },
  {
    "id": 87,
    "name": "YSR Sunna Vaddi (Zero Interest Loans for SHGs)",
    "state": "Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": 60,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "100% interest reimbursement on bank linkage loans up to ₹5,00,000 for DWCRA women Self Help Groups upon timely repayment.",
    "description": "Under YSR Sunna Vaddi (Zero Interest Scheme), the Andhra Pradesh government bears the entire interest burden on bank linkage loans taken by rural (SERP) and urban (MEPMA) women Self-Help Groups up to ₹5 Lakhs. When the SHG repays its monthly EMI on time, the interest portion is credited back directly to the group's bank account by the government.",
    "benefit": "100% interest refund on bank loans up to ₹5 Lakhs",
    "benefitText": "Complete interest reimbursement on SHG bank loans",
    "benefits": [
      "Zero effective interest on bank loans up to ₹5,00,000",
      "Encourages high repayment discipline and improves credit rating of SHGs",
      "Frees capital for expanding micro-enterprises and cottage industries"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 60,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the SHG Group President and Secretary",
      "SHG Bank Loan Account Number and Ledger Statement",
      "Prompt Repayment Certificate from the financing commercial/Grameena bank",
      "Rice Card"
    ],
    "applicationProcess": [
      "Ensure prompt and regular monthly loan EMI payment to the financing bank",
      "Financing bank shares repayment data automatically with SERP/MEPMA portal",
      "System verifies prompt repayment status without defaults",
      "State government transfers the calculated interest refund directly into SHG bank account"
    ],
    "providerUrl": "https://sunnavaddi.ap.gov.in",
    "applyUrl": "https://sunnavaddi.ap.gov.in"
  },
  {
    "id": 88,
    "name": "Sukanya Samriddhi Yojana (SSY)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 0,
    "maxAge": 10,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "High-interest government savings scheme (8.2% p.a.) with full tax exemption under EEE status for girl children below 10 years.",
    "description": "Sukanya Samriddhi Yojana is a government-backed small savings scheme designed to secure the financial future of girls for higher education and marriage. Opened by parents for girls under 10 years of age, it offers an attractive 8.2% annual compounded interest rate, 100% sovereign guarantee, and triple tax exemptions (EEE) under Section 80C.",
    "benefit": "8.2% compounded interest rate + 100% tax exemption",
    "benefitText": "8.2% sovereign tax-free interest for girl child",
    "benefits": [
      "Highest interest rate among small saving schemes (currently 8.2% p.a. compounded annually)",
      "Triple tax exemption: principal, interest accrued, and maturity withdrawal are 100% tax-free",
      "Account matures in 21 years with 50% partial withdrawal allowed at age 18 for higher education"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 10,
      "gender": "Female only",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Birth Certificate of the girl child",
      "Aadhaar Card and PAN Card of the parent / legal guardian",
      "Proof of residence (Electricity bill / Ration card / Passport)",
      "Initial minimum deposit of ₹250"
    ],
    "applicationProcess": [
      "Visit any Post Office or authorized commercial bank branch (SBI, Andhra Bank/Union Bank, etc.)",
      "Fill out the Sukanya Samriddhi Yojana account opening form",
      "Submit child's birth certificate and guardian KYC documents",
      "Deposit initial amount (minimum ₹250, maximum ₹1,50,000 per financial year)",
      "Receive passbook with account number"
    ],
    "providerUrl": "https://www.indiapost.gov.in",
    "applyUrl": "https://www.indiapost.gov.in"
  },
  {
    "id": 89,
    "name": "Pradhan Mantri Matru Vandana Yojana (PMMVY 2.0)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 19,
    "maxAge": 45,
    "maxIncome": 800000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Maternity cash incentive of ₹5,000 for the first child and ₹6,000 for the birth of a second girl child credited via DBT.",
    "description": "PMMVY is a direct benefit transfer maternity benefit scheme implemented by the Ministry of Women and Child Development. It compensates for wage loss during pregnancy, ensures adequate maternal nutrition, and incentivizes institutional deliveries. Under PMMVY 2.0, mothers receive ₹5,000 for their first living child and an enhanced ₹6,000 upon the birth of a second girl child.",
    "benefit": "₹5,000 for first child & ₹6,000 for second girl child",
    "benefitText": "₹5,000 to ₹6,000 direct cash maternity benefit",
    "benefits": [
      "Direct Benefit Transfer directly into mother's Aadhaar-seeded bank account",
      "₹5,000 disbursed in two installments for first child upon early registration and institutional birth",
      "₹6,000 lump sum for second child if the child is a girl, promoting positive gender ratio",
      "Encourages timely ante-natal checkups and complete childhood immunization"
    ],
    "eligibility": {
      "minAge": 19,
      "maxAge": 45,
      "gender": "Female only",
      "maxIncome": 800000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the mother and husband",
      "Mother and Child Protection (MCP) Card",
      "Child Birth Certificate (for second installment)",
      "Aadhaar-seeded Bank Passbook in mother's name",
      "Proof of belonging to qualifying category (EWS / SC / ST / BPL Rice Card / Disability)"
    ],
    "applicationProcess": [
      "Register pregnancy within 570 days of Last Menstrual Period (LMP) at Anganwadi Centre",
      "Anganwadi Worker / ASHA enters details into PMMVY-CAS online portal (pmmvy.wcd.gov.in)",
      "Undergo mandatory ANC checkups and complete institutional delivery",
      "Installments credited directly through PFMS to mother's account"
    ],
    "providerUrl": "https://pmmvy.wcd.gov.in",
    "applyUrl": "https://pmmvy.wcd.gov.in"
  },
  {
    "id": 90,
    "name": "Pradhan Mantri Ujjwala Yojana 2.0 (PMUY)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Free LPG gas connection with zero security deposit, free safety hose, gas regulator, hotplate stove, and first cylinder refill.",
    "description": "PMUY 2.0 provides clean cooking fuel (LPG) to adult women from poor households, eliminating health hazards caused by smoke from firewood and cow dung cakes. Beneficiaries receive a completely free deposit-free LPG connection, a free LPG stove, and the first 14.2 kg LPG cylinder refill entirely free of charge, along with ₹300 per cylinder ongoing targeted subsidy.",
    "benefit": "Free deposit-free LPG connection + free first cylinder & stove",
    "benefitText": "Free LPG connection, stove & ₹300/refill subsidy",
    "benefits": [
      "Completely free deposit-free LPG connection issued in the woman's name",
      "Free domestic LPG gas stove (hotplate) and Suraksha safety hose pipe",
      "First 14.2 kg LPG cylinder refill provided 100% free of charge",
      "Direct Benefit Transfer subsidy of ₹300 per refill (up to 12 refills/year)"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the female applicant and adult family members",
      "White Ration Card / Rice Card (or 14-point declaration for migrants)",
      "Aadhaar-seeded Bank Passbook",
      "Passport size photograph"
    ],
    "applicationProcess": [
      "Apply online on the PMUY portal (pmuy.gov.in) or visit nearest LPG distributor (Indane, HP, Bharat Gas)",
      "Submit application form with KYC documents and Ration Card",
      "Oil Marketing Company (OMC) verifies that no previous LPG connection exists in household",
      "LPG connection kit delivered and installed at the beneficiary's home"
    ],
    "providerUrl": "https://www.pmuy.gov.in",
    "applyUrl": "https://www.pmuy.gov.in"
  },
  {
    "id": 91,
    "name": "Mahila Samman Savings Certificate (MSSC)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 0,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Two-year fixed deposit scheme offering a high guaranteed 7.5% interest rate compounded quarterly for women and girl children.",
    "description": "Mahila Samman Savings Certificate is a dedicated government savings instrument for women and girls. It offers an attractive fixed interest rate of 7.5% per annum compounded quarterly on deposits from ₹1,000 up to ₹2,00,000 for a tenure of 2 years, with flexible partial withdrawal of up to 40% allowed after one year.",
    "benefit": "7.5% p.a. guaranteed interest rate compounded quarterly",
    "benefitText": "7.5% guaranteed interest for 2-year tenure",
    "benefits": [
      "Attractive sovereign-backed guaranteed interest of 7.5% per annum",
      "Flexible deposit amount from ₹1,000 up to ₹2,00,000",
      "Partial withdrawal of up to 40% of balance permitted after the first year",
      "Available across all Post Offices and public sector bank branches"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the woman (or girl child and guardian)",
      "PAN Card of applicant/guardian",
      "Passport size photographs",
      "Deposit cheque / cash (minimum ₹1,000)"
    ],
    "applicationProcess": [
      "Visit any Post Office or nationalised bank branch",
      "Fill out the Mahila Samman Savings Certificate application form (Form 1)",
      "Submit KYC documents and deposit amount",
      "Receive passbook certificate confirming deposit and maturity value"
    ],
    "providerUrl": "https://www.indiapost.gov.in",
    "applyUrl": "https://www.indiapost.gov.in"
  },
  {
    "id": 92,
    "name": "Stand-Up India Scheme for Women Entrepreneurs",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Bank loans between ₹10 Lakhs and ₹1 Crore to facilitate greenfield enterprises in manufacturing, services, or trading by women.",
    "description": "Stand-Up India facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one woman entrepreneur and one SC/ST borrower per commercial bank branch for setting up a greenfield enterprise in manufacturing, services, agri-allied, or trading sectors.",
    "benefit": "Bank loans from ₹10 Lakhs to ₹1 Crore with credit guarantee",
    "benefitText": "₹10 Lakh to ₹1 Crore enterprise loan for women",
    "benefits": [
      "Substantial enterprise financing from ₹10,00,000 up to ₹1,00,00,000",
      "Covered under Credit Guarantee Scheme for Stand-Up India (CGFSI)",
      "Repayable in up to 7 years with a moratorium period of up to 18 months",
      "Handholding support through SIDBI Stand-Up Mitra portal"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and PAN Card of the woman entrepreneur",
      "Detailed Project Report (DPR) with business viability metrics",
      "Proof of enterprise premises (lease deed/ownership)",
      "Udyam MSME Registration Certificate",
      "Last 6 months Bank Statements"
    ],
    "applicationProcess": [
      "Register on the Stand-Up Mitra portal (standupmitra.in)",
      "Select loan requirement and locate partner commercial bank branch",
      "Submit detailed project report and business profile",
      "Bank evaluates proposal and sanctions loan under Stand-Up India guidelines"
    ],
    "providerUrl": "https://www.standupmitra.in",
    "applyUrl": "https://www.standupmitra.in"
  },
  {
    "id": 93,
    "name": "Balika Samriddhi Yojana (BSY)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 0,
    "maxAge": 18,
    "maxIncome": 150000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Post-birth grant of ₹500 and annual scholarships from ₹300 to ₹1,000 for girl children born in BPL families.",
    "description": "Balika Samriddhi Yojana provides financial support to girl children born in below-poverty-line families. A one-time post-birth grant of ₹500 is deposited into an interest-bearing account in the child's name, followed by annual scholarships for each successfully completed class from Class 1 to Class 10.",
    "benefit": "₹500 birth grant + annual educational scholarships up to ₹1,000/yr",
    "benefitText": "Birth grant + annual scholarships through Class 10",
    "benefits": [
      "₹500 lump-sum post-delivery grant deposited into an interest-accruing account",
      "Progressive annual scholarships from ₹300 (Class 1) up to ₹1,000 (Class 10)",
      "Total accumulated amount with interest disbursed to the girl upon attaining 18 years"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 18,
      "gender": "Female only",
      "maxIncome": 150000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Birth Certificate of the girl child",
      "BPL / Rice Card of the parents",
      "Aadhaar Card of mother/father",
      "Bonafide School Certificate for scholarship claim"
    ],
    "applicationProcess": [
      "Obtain application form from Anganwadi Worker or Gram Sachivalayam",
      "Submit birth certificate and BPL card copy",
      "Child Development Project Officer (CDPO) sanctions birth grant into postal account",
      "School Headmaster certifies yearly academic pass for annual scholarship credit"
    ],
    "providerUrl": "https://wcd.nic.in",
    "applyUrl": "https://wdcw.ap.gov.in"
  },
  {
    "id": 94,
    "name": "Working Women Hostel Scheme (Sakhi Niwas)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": 60,
    "maxIncome": 600000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Safe, subsidized, and secure accommodation with daycare facilities for working women in urban cities.",
    "description": "Sakhi Niwas provides clean, secure, and affordable hostel accommodation to working women away from their families in industrial areas and urban corporations like Visakhapatnam, Vijayawada, and Tirupati. Hostels feature CCTV security, biometric access, nutritious mess meals, and integrated daycare for children.",
    "benefit": "Subsidized secure accommodation & daycare for working women",
    "benefitText": "Subsidized urban hostel & daycare facilities",
    "benefits": [
      "Affordable rental charges capped significantly below private market rates",
      "24/7 security with female wardens, biometric entry, and CCTV surveillance",
      "Integrated crèche / daycare facility for resident mothers with young children",
      "Access to Wi-Fi, recreation rooms, and hygienic dining services"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 60,
      "gender": "Female only",
      "maxIncome": 600000,
      "area": "Urban only"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Employment Letter / Salary Slip / Training Enrollment Proof",
      "Permanent Address Proof",
      "Passport size photographs"
    ],
    "applicationProcess": [
      "Apply through the Women Development & Child Welfare Department portal or visit Sakhi Niwas hostel",
      "Submit employment credentials and identity proof",
      "Hostel management committee verifies documents and allocates room",
      "Pay nominal monthly maintenance fee"
    ],
    "providerUrl": "https://wcd.nic.in",
    "applyUrl": "https://wdcw.ap.gov.in"
  },
  {
    "id": 95,
    "name": "One Stop Centre Scheme (Sakhi Centres AP)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 0,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "24/7 integrated medical, legal, psychological, police, and emergency shelter assistance under one roof for women facing violence.",
    "description": "Sakhi One Stop Centres (OSC) operate in all 26 district headquarters of Andhra Pradesh to support women affected by violence, harassment, or abuse. The centres provide emergency medical aid, psycho-social counseling, police facilitation, free legal aid, and temporary emergency shelter for up to 5 days under one roof.",
    "benefit": "100% free 24/7 emergency medical, legal & shelter support",
    "benefitText": "Free 24x7 emergency medical, legal & shelter care",
    "benefits": [
      "Immediate emergency medical examination and treatment",
      "Police facilitation for registering FIR/Zero FIR without harassment",
      "Professional psycho-social counseling and trauma management",
      "Free legal aid through District Legal Services Authority (DLSA)",
      "Free temporary safe shelter, food, and clothing for up to 5 days"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "No documents required — immediate humanitarian assistance provided"
    ],
    "applicationProcess": [
      "Call Women Helpline 181, Disha SOS, or 112, or walk into the District Sakhi Centre",
      "Duty caseworker registers case and immediately coordinates required medical/legal aid",
      "Safe stay and follow-up rehabilitation arranged with zero charges"
    ],
    "providerUrl": "https://wcd.nic.in",
    "applyUrl": "https://wdcw.ap.gov.in"
  },
  {
    "id": 96,
    "name": "Beti Bachao Beti Padhao (BBBP AP)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 0,
    "maxAge": 18,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Comprehensive protection, education advancement, and prevention of female foeticide across districts in Andhra Pradesh.",
    "description": "Beti Bachao Beti Padhao is a joint initiative of the Ministries of Women & Child Development, Health, and Education. It focuses on improving the Child Sex Ratio (CSR), enforcing the PC-PNDT Act, ensuring 100% girl child school enrollment, and eliminating gender-biased sex selection through community campaigns.",
    "benefit": "Educational retention, birth rights protection & community awards",
    "benefitText": "Girl child education support & institutional protection",
    "benefits": [
      "Stringent enforcement against sex determination to protect unborn girl children",
      "Special school enrollment and retention drives preventing female student dropouts",
      "Facilitation for Sukanya Samriddhi account opening and insurance coverage"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 18,
      "gender": "Female only",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Birth Certificate of girl child",
      "Aadhaar Card of child and parents"
    ],
    "applicationProcess": [
      "Community initiative implemented through District Task Force and Anganwadi network",
      "Enroll newborn girls at Anganwadi to link with education and health benefits"
    ],
    "providerUrl": "https://wcd.nic.in/bbbp-schemes",
    "applyUrl": "https://wcd.nic.in/bbbp-schemes"
  },
  {
    "id": 97,
    "name": "Mahila Coir Yojana",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": 55,
    "maxIncome": 250000,
    "ruralOnly": True,
    "femaleOnly": True,
    "shortDescription": "Subsidized motorized coir spinning ratts (up to 75% subsidy) and monthly training stipend for rural women in coconut growing coastal areas.",
    "description": "Mahila Coir Yojana is a women-oriented self-employment scheme of the Coir Board in coastal Andhra Pradesh (Konaseema, East Godavari, West Godavari, Srikakulam). Rural women receive two months of comprehensive training with a stipend, followed by a 75% capital subsidy to purchase motorized coir spinning ratts or yarn machinery.",
    "benefit": "75% subsidy on motorized coir spinning machinery + training stipend",
    "benefitText": "75% machinery subsidy & coir spinning training stipend",
    "benefits": [
      "Two months intensive technical training in coir spinning with ₹3,000 monthly stipend",
      "75% capital subsidy on purchase of motorized ratts and motorized yarn rewinding machines",
      "Enables rural women to earn ₹400-₹600 daily working from home"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 55,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the woman applicant",
      "Rural Domicile Certificate from Tahsildar",
      "Bank Account Passbook",
      "Training Completion Certificate from Coir Board Centre"
    ],
    "applicationProcess": [
      "Apply through the Regional Coir Board Office in Andhra Pradesh or at District Industries Centre (DIC)",
      "Undergo 2-month training program at designated coir training centre",
      "Submit subsidy claim with equipment quotation",
      "Subsidy credited directly to equipment supplier / bank loan account"
    ],
    "providerUrl": "https://coirboard.gov.in",
    "applyUrl": "https://coirboard.gov.in"
  },
  {
    "id": 98,
    "name": "YSR Kalyanamasthu & Shaadi Tohfa",
    "state": "Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": 40,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Financial marriage assistance from ₹40,000 up to ₹1,00,000 for brides from SC, ST, BC, Minorities, and Divyangjan communities.",
    "description": "YSR Kalyanamasthu and Shaadi Tohfa incentivize girl child education and prevent child marriage by providing substantial financial assistance for weddings. To qualify, both bride (18+) and groom (21+) must have passed Class 10 (SSC). Financial assistance ranges from ₹40,000 to ₹1,00,000 directly credited into the bride's mother's account.",
    "benefit": "Financial grant of ₹40,000 to ₹1,00,000 for daughter's marriage",
    "benefitText": "₹40,000 to ₹1,00,000 marriage assistance grant",
    "benefits": [
      "Financial assistance: SC/ST (₹1,00,000), BC (₹50,000), Minorities (₹1,00,000), Divyangjan (₹1,50,000)",
      "Inter-caste marriages receive enhanced incentives up to ₹1,20,000",
      "Mandatory SSC pass condition eliminates child marriages and encourages female schooling",
      "Disbursed in transparent quarterly cycles directly via DBT"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 40,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of Bride and Groom",
      "SSC / Class 10 Passing Marks Memos for both bride and groom",
      "Integrated Caste & Income Certificates issued by Tahsildar",
      "Wedding Invitation Card & Marriage Registration Certificate",
      "Aadhaar-seeded Bank Passbook of the Bride's Mother"
    ],
    "applicationProcess": [
      "Apply within 60 days of solemnising marriage at Gram/Ward Sachivalayam or online (gsws.ap.gov.in)",
      "Upload SSC certificates, wedding photos, and marriage registration certificate",
      "Field verification conducted by Village Welfare and Education Assistant (WEA)",
      "Biometric authentication by bride and bride's mother",
      "Funds transferred directly via DBT to bride's mother's account"
    ],
    "providerUrl": "https://navasakam.ap.gov.in",
    "applyUrl": "https://gramawardsachivalayam.ap.gov.in"
  },
  {
    "id": 99,
    "name": "Udyam Sakhi Portal Livelihood Scheme",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": 60,
    "maxIncome": 400000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Mentorship, business planning, technical training, and credit facilitation for aspiring women micro-entrepreneurs.",
    "description": "Launched by the Ministry of Micro, Small and Medium Enterprises (MSME), Udyam Sakhi is an integrated digital platform that nurtures entrepreneurship among Indian women. The scheme provides free access to financial schemes, business model templates, market linkage fairs, and credit facilitation through public sector banks.",
    "benefit": "Free business project guidance, incubation & subsidized credit linkages",
    "benefitText": "Free business project templates & credit facilitation",
    "benefits": [
      "Detailed project profiles and business plans for over 100 micro-enterprises",
      "Direct linkage with MUDRA and PMEGP loan sanctioning officers",
      "Exhibition opportunities in national trade expos (IITF, SARAS Mela) with travel subsidies"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 60,
      "gender": "Female only",
      "maxIncome": 400000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and PAN Card",
      "Udyam MSME Registration Certificate (free on udyamregistration.gov.in)",
      "Bank Account Passbook",
      "Proposed Business Plan description"
    ],
    "applicationProcess": [
      "Register profile on Udyam Sakhi portal (udyamsakhi.msme.gov.in)",
      "Select desired business sector and download DPR model template",
      "Apply for credit facilitation linked with MSME development institutes in AP"
    ],
    "providerUrl": "https://udyamsakhi.msme.gov.in",
    "applyUrl": "https://udyamsakhi.msme.gov.in"
  },
  {
    "id": 100,
    "name": "Rashtriya Mahila Kosh (Micro-Credit for Women)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": 60,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Collateral-free micro-credit loans up to ₹50,000 for poor women in unorganized sectors through intermediary micro-finance channels.",
    "description": "Rashtriya Mahila Kosh (National Credit Fund for Women) extends quasi-formal collateral-free micro-credit to poor women in the informal economy through NGOs, women development federations, and cooperative societies to establish micro-livelihoods such as tailoring, dairy farming, vegetable vending, and handicrafts.",
    "benefit": "Collateral-free micro-credit loans up to ₹50,000 at concessional interest",
    "benefitText": "Collateral-free microcredit for women petty traders",
    "benefits": [
      "No physical collateral or asset hypothecation required",
      "Concessional interest rate with flexible weekly or monthly repayment cycles",
      "Builds financial independence and credit discipline among marginalized women"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 60,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the woman applicant",
      "Ration Card / Rice Card",
      "Bank Account Passbook",
      "Membership certificate of registered SHG / Cooperative Society"
    ],
    "applicationProcess": [
      "Apply through the local SERP/MEPMA registered federation or designated intermediary NGO",
      "Federation reviews loan proposal and disburses micro-credit amount",
      "Repay loan through scheduled small weekly/monthly installments"
    ],
    "providerUrl": "https://wcd.nic.in",
    "applyUrl": "https://wdcw.ap.gov.in"
  },
  {
    "id": 101,
    "name": "Mission Vatsalya (Child Protection Foster Care AP)",
    "state": "Central / Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 0,
    "maxAge": 18,
    "maxIncome": 150000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly financial assistance of ₹4,000 per child for foster care and non-institutional support to orphaned and destitute children.",
    "description": "Mission Vatsalya provides child protection and welfare services across Andhra Pradesh. Under its Sponsorship and Foster Care component, orphaned, abandoned, single-parent, or HIV-affected children receive ₹4,000 per month financial assistance directly to their guardian's bank account to ensure they remain in family environments and continue schooling.",
    "benefit": "₹4,000 per month child sponsorship assistance for orphaned youth",
    "benefitText": "₹4,000/month foster care support for vulnerable children",
    "benefits": [
      "Direct DBT financial grant of ₹4,000 per month per child until the age of 18",
      "Enables children to stay with extended family/guardians instead of institutional care",
      "Covers education, nutritional diet, clothing, and healthcare needs"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 18,
      "gender": "All",
      "maxIncome": 150000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Birth Certificate / Aadhaar Card of the child",
      "Death Certificate of parent(s) / Medical Certificate in case of terminal illness",
      "Aadhaar Card and Bank Passbook of the Guardian",
      "Income Certificate from Tahsildar (under ₹72,000/yr rural, ₹96,000/yr urban)",
      "Bonafide School Enrollment Certificate"
    ],
    "applicationProcess": [
      "Submit application to District Child Protection Officer (DCPO) or Child Welfare Committee (CWC)",
      "District Child Protection Unit conducts social investigation and home visit",
      "Child Welfare Committee approves sponsorship and issues order",
      "Monthly DBT of ₹4,000 credited to joint bank account of child and guardian"
    ],
    "providerUrl": "https://wcd.nic.in",
    "applyUrl": "https://wdcw.ap.gov.in"
  }
]

# schemes_social_pension.py
# Social Security, Pensions & Vulnerable Groups Schemes (IDs 102 to 118)

social_pension_schemes = [
  {
    "id": 102,
    "name": "Atal Pension Yojana (APY)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 18,
    "maxAge": 40,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Guaranteed lifetime monthly pension of ₹1,000 to ₹5,000 after 60 years of age for unorganized sector workers.",
    "description": "Atal Pension Yojana is a flagship pension scheme administered by PFRDA focused on unorganized sector workers. Based on small monthly contributions from ages 18 to 40, subscribers receive a guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 starting from the age of 60 for lifetime, followed by pension to the spouse and full return of corpus to the nominee.",
    "benefit": "Guaranteed lifetime monthly pension of ₹1,000 to ₹5,000",
    "benefitText": "₹1,000 to ₹5,000/month guaranteed lifelong pension",
    "benefits": [
      "Government guaranteed defined minimum pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000",
      "Lifelong pension to subscriber, and thereafter the exact same pension to surviving spouse",
      "Full accumulated pension wealth (up to ₹8.5 Lakhs) returned to nominee after spouse's demise",
      "Income tax deduction benefits available under Section 80CCD(1B)"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 40,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Active Savings Bank Account Passbook",
      "Mobile number linked to bank account",
      "Nominee details (Aadhaar & relationship)"
    ],
    "applicationProcess": [
      "Visit your commercial or Grameena bank branch or Post Office where you maintain a savings account",
      "Fill the APY subscriber registration form and select desired pension slab (₹1,000 to ₹5,000)",
      "Enable auto-debit facility on your savings account",
      "Receive Permanent Retirement Account Number (PRAN) card and SMS acknowledgment"
    ],
    "providerUrl": "https://www.npscra.nsdl.co.in",
    "applyUrl": "https://www.npscra.nsdl.co.in"
  },
  {
    "id": 103,
    "name": "Pradhan Mantri Shram Yogi Maandhan (PM-SYM)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 18,
    "maxAge": 40,
    "maxIncome": 180000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Assured monthly pension of ₹3,000 after attaining 60 years of age for unorganized workers earning up to ₹15,000/month.",
    "description": "PM-SYM is a voluntary and contributory pension scheme for unorganized workers (street vendors, agricultural laborers, rickshaw pullers, domestic workers, construction laborers) earning ₹15,000 or less per month. The subscriber and the Central Government make matching 50:50 monthly contributions (₹55 to ₹200) until age 60, after which a guaranteed ₹3,000 monthly pension is paid.",
    "benefit": "Assured ₹3,000 monthly pension after age 60 with 50% govt co-contribution",
    "benefitText": "₹3,000/month old age pension + 50% govt contribution",
    "benefits": [
      "Guaranteed monthly pension of ₹3,000 credited directly into bank account upon reaching 60 years",
      "50% equal matching monthly contribution deposited by the Central Government",
      "50% family pension (₹1,500/month) to surviving spouse in case of subscriber death"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 40,
      "gender": "All",
      "maxIncome": 180000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the worker",
      "Savings Bank Account Passbook / Jan Dhan Account with IFSC",
      "Mobile phone number",
      "e-Shram Card (if available)"
    ],
    "applicationProcess": [
      "Visit any Common Service Centre (CSC) or register on maandhan.in",
      "Provide Aadhaar and bank details for biometric e-KYC authentication",
      "Pay first contribution in cash at CSC; subsequent amounts deducted via auto-debit",
      "Instant generation of PM-SYM Shramik Pension Card with unique Pension Number"
    ],
    "providerUrl": "https://maandhan.in",
    "applyUrl": "https://maandhan.in"
  },
  {
    "id": 104,
    "name": "Pradhan Mantri Laghu Vyapari Maandhan Yojana (PMLVMY)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 18,
    "maxAge": 40,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly pension of ₹3,000 after age 60 for small shopkeepers, retail traders, and self-employed micro-merchants.",
    "description": "PMLVMY is a national pension scheme for small shopkeepers, retail traders, kirana store owners, and self-employed commission agents whose annual turnover does not exceed ₹1.5 Crore. The Central Government matches 50% of the small monthly subscription, guaranteeing a dignified ₹3,000 monthly pension from age 60.",
    "benefit": "Guaranteed ₹3,000 per month pension after age 60",
    "benefitText": "₹3,000/month old-age pension for small shopkeepers",
    "benefits": [
      "Monthly pension of ₹3,000 for small retail merchants and self-employed traders",
      "Equal 50% matching financial contribution funded by the Union Government",
      "Ensures old-age social security for micro-merchants outside formal PF/pension setups"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 40,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the trader",
      "Bank Account Passbook / IFSC code",
      "GSTIN number (only if turnover exceeds GST threshold; otherwise self-declaration)",
      "Mobile number"
    ],
    "applicationProcess": [
      "Visit nearest CSC centre or access maandhan.in/vyapari portal",
      "Submit Aadhaar, bank details, and business self-declaration (annual turnover ≤ ₹1.5 Cr)",
      "Complete biometric fingerprint verification",
      "Obtain Vyapari Pension Card"
    ],
    "providerUrl": "https://maandhan.in",
    "applyUrl": "https://maandhan.in"
  },
  {
    "id": 105,
    "name": "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 60,
    "maxAge": None,
    "maxIncome": 100000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly social security pension for BPL senior citizens aged 60 years and above under the National Social Assistance Programme.",
    "description": "IGNOAPS is a core component of the National Social Assistance Programme (NSAP). In Andhra Pradesh, this pension is integrated with the state welfare system to provide dignified monthly financial support (₹3,000/month) directly to senior citizens living below the poverty line.",
    "benefit": "Monthly direct social security pension of ₹3,000",
    "benefitText": "₹3,000/month dignified senior citizen pension",
    "benefits": [
      "Regular direct monthly income support ensuring dignified elderly living",
      "Delivered directly to bank accounts or at doorstep for frail/bedridden elders",
      "Automatic linkage with Aarogyasri free healthcare and free public transport concessions"
    ],
    "eligibility": {
      "minAge": 60,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 100000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of senior citizen",
      "Age proof certificate (Birth Certificate / Voter ID / School memo)",
      "White Ration Card / Rice Card (BPL proof)",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Apply at Gram/Ward Sachivalayam through Welfare & Education Assistant",
      "Volunteer conducts doorstep inquiry and age verification",
      "Tahsildar / Municipal Commissioner approves eligible applications",
      "Pension sanctioned and disbursed on 1st of every month"
    ],
    "providerUrl": "https://nsap.nic.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 106,
    "name": "Indira Gandhi National Widow Pension Scheme (IGNWPS)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 40,
    "maxAge": None,
    "maxIncome": 100000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Monthly financial pension of ₹3,000 for widowed women living below the poverty line.",
    "description": "IGNWPS provides monthly financial assistance to widowed women aged 40 years and above belonging to BPL households. In Andhra Pradesh, the state enhances this pension to ₹3,000 per month, preventing destitution and helping widowed women maintain economic self-reliance for their families.",
    "benefit": "Monthly financial pension of ₹3,000 credited via DBT",
    "benefitText": "₹3,000/month dignity pension for widowed women",
    "benefits": [
      "Monthly pension of ₹3,000 disbursed on the 1st of every month",
      "Protects widowed mothers from extreme poverty and destitution",
      "Doorstep delivery by village volunteers for senior widows"
    ],
    "eligibility": {
      "minAge": 40,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": 100000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Death Certificate of the husband issued by Municipal/Panchayat registrar",
      "White Ration Card / Rice Card",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Submit application with husband's death certificate at Gram/Ward Sachivalayam",
      "Welfare and Education Assistant (WEA) verifies household status",
      "Tahsildar issues pension sanction proceedings",
      "Monthly pension disbursed on the 1st of every month"
    ],
    "providerUrl": "https://nsap.nic.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 107,
    "name": "Indira Gandhi National Disability Pension Scheme (IGNDPS)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 100000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly disability pension of ₹3,000 to ₹6,000 for individuals with severe disabilities (≥80% or multiple disabilities).",
    "description": "IGNDPS supports persons with severe or multiple disabilities belonging to BPL families. In Andhra Pradesh, beneficiaries with 40% to 79% disability receive ₹3,000/month, while those with severe disabilities (80%+ or total paralysis) receive ₹6,000 to ₹15,000 per month to assist with specialized care and therapy.",
    "benefit": "Monthly pension of ₹3,000 to ₹6,000 (up to ₹15,000 for severe paralysis)",
    "benefitText": "₹3,000 to ₹6,000/month disability pension",
    "benefits": [
      "Direct monthly pension of ₹3,000 to ₹6,000 based on disability severity",
      "Bedridden and fully dependent citizens receive up to ₹15,000/month",
      "Doorstep cash disbursement service directly to patient's home"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 100000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the disabled person",
      "SADAREM Disability Certificate / UDID Card showing ≥40% disability",
      "White Ration Card / Rice Card",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Obtain SADAREM disability assessment at District Medical Board / GGH",
      "Submit pension application at Gram/Ward Sachivalayam",
      "Medical board certificate validation through online SADAREM database",
      "Sanctioned pension delivered on the 1st of every month"
    ],
    "providerUrl": "https://nsap.nic.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 108,
    "name": "National Family Benefit Scheme (NFBS)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 18,
    "maxAge": 59,
    "maxIncome": 100000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "One-time lump sum financial grant of ₹20,000 upon the sudden death of the primary household breadwinner.",
    "description": "NFBS provides immediate lump sum financial relief to below-poverty-line families upon the demise of the primary earning member of the family (male or female aged between 18 and 59 years). The one-time assistance of ₹20,000 helps the bereaved household manage immediate survival crises.",
    "benefit": "One-time lump sum financial grant of ₹20,000",
    "benefitText": "₹20,000 lump sum emergency relief on breadwinner demise",
    "benefits": [
      "Immediate financial assistance of ₹20,000 credited directly to surviving family head",
      "Emergency financial buffer preventing sudden impoverishment",
      "Fast-track processing within 30 days of death registration"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 59,
      "gender": "All",
      "maxIncome": 100000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Death Certificate of the deceased breadwinner",
      "Proof of Age of the deceased (Aadhaar / Voter ID showing age 18-59)",
      "Aadhaar Card of the surviving spouse / claimant",
      "White Ration Card proving deceased was primary breadwinner",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Submit NFBS claim at Gram/Ward Sachivalayam within 3 months of breadwinner's death",
      "Welfare and Education Assistant inspects household and confirms breadwinner role",
      "Revenue Divisional Officer (RDO) approves grant",
      "₹20,000 credited via PFMS directly to surviving claimant's bank account"
    ],
    "providerUrl": "https://nsap.nic.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 109,
    "name": "YSR Pension Kanuka - Transgender Persons Pension",
    "state": "Andhra Pradesh",
    "category": "Social Security",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 150000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly dignity pension of ₹3,000 for recognized transgender citizens in Andhra Pradesh.",
    "description": "The Government of Andhra Pradesh provides a monthly dignity pension of ₹3,000 to transgender citizens to counter social exclusion, systemic employment discrimination, and economic vulnerability, promoting dignity and social inclusion.",
    "benefit": "Monthly direct social security pension of ₹3,000",
    "benefitText": "₹3,000/month dignity pension for transgender citizens",
    "benefits": [
      "Direct monthly pension of ₹3,000 credited to bank account",
      "Ensures basic sustenance and reduces dependency on begging or unorganized work",
      "Free medical care and gender-affirming healthcare under Aarogyasri"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 150000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card (with updated gender identity)",
      "Transgender Identity Card issued by District Magistrate / Transgender Portal",
      "White Ration Card / Rice Card",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Register on the National Portal for Transgender Persons (transgender.dosje.gov.in) to obtain TG Certificate",
      "Submit pension application at local Gram/Ward Sachivalayam",
      "Welfare Assistant verifies certificate and residence",
      "Sanctioned pension disbursed directly on the 1st of every month"
    ],
    "providerUrl": "https://sspensions.ap.gov.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 110,
    "name": "YSR Pension Kanuka - Traditional Toddy Tappers Pension",
    "state": "Andhra Pradesh",
    "category": "Social Security",
    "minAge": 50,
    "maxAge": None,
    "maxIncome": 150000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly pension of ₹3,000 for traditional toddy tappers (Goud / Settibalija) aged 50 years and above.",
    "description": "Recognizing the severe physical occupational hazards of palm-tree climbing, this scheme grants a monthly pension of ₹3,000 to traditional toddy tappers aged 50 years and above who are registered members of Toddy Tappers Cooperative Societies (TTCS) or holding individual tapper licenses.",
    "benefit": "Monthly pension of ₹3,000 for traditional toddy tappers",
    "benefitText": "₹3,000/month pension for registered toddy tappers",
    "benefits": [
      "Monthly pension of ₹3,000 credited on the 1st of every month",
      "Lowers retirement age from 60 to 50 years acknowledging severe physical hazards",
      "Financial security during old age when climbing tall palm trees is no longer possible"
    ],
    "eligibility": {
      "minAge": 50,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 150000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Toddy Tappers Cooperative Society (TTCS) Membership Card / Excise Department License",
      "Age proof document (minimum 50 years)",
      "Rice Card / White Ration Card",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Obtain verification certificate from Prohibition & Excise Inspector or TTCS President",
      "Submit application at Gram/Ward Sachivalayam",
      "Welfare and Education Assistant verifies age and occupational records",
      "Pension sanctioned and released monthly"
    ],
    "providerUrl": "https://sspensions.ap.gov.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 111,
    "name": "YSR Pension Kanuka - Traditional Fishermen Pension",
    "state": "Andhra Pradesh",
    "category": "Social Security",
    "minAge": 50,
    "maxAge": None,
    "maxIncome": 150000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly sustenance pension of ₹3,000 for marine and inland traditional fishermen aged 50 years and above.",
    "description": "This welfare pension provides monthly social security of ₹3,000 to traditional marine and inland artisanal fishermen aged 50 years and above in Andhra Pradesh who can no longer brave rough seas or rigorous inland fishing nets due to aging and health deterioration.",
    "benefit": "Monthly pension of ₹3,000 for traditional fishermen",
    "benefitText": "₹3,000/month pension for aging artisanal fishermen",
    "benefits": [
      "Direct monthly pension of ₹3,000 credited to bank account",
      "Concessional retirement age of 50 years honoring strenuous marine labor",
      "Comprehensive coverage across all 9 coastal districts of Andhra Pradesh"
    ],
    "eligibility": {
      "minAge": 50,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 150000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Fishermen Cooperative Society Membership Card / Fisheries Department Biometric ID",
      "Age proof certificate (minimum 50 years)",
      "Rice Card",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Fisheries Development Officer (FDO) certifies active artisanal fishing history",
      "Apply through Gram/Ward Sachivalayam with biometric authentication",
      "Welfare Assistant verifies household income and age criteria",
      "Sanctioned pension disbursed on the 1st of every month"
    ],
    "providerUrl": "https://fisheries.ap.gov.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 112,
    "name": "YSR Pension Kanuka - Traditional Cobblers & Leather Workers",
    "state": "Andhra Pradesh",
    "category": "Social Security",
    "minAge": 50,
    "maxAge": None,
    "maxIncome": 150000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly dignity pension of ₹3,000 for roadside cobblers and traditional leather artisans aged 50 years and above.",
    "description": "Roadside cobblers and traditional leather craftsmen who endure severe occupational strain, exposure to dust, and declining eyesight receive a monthly dignity pension of ₹3,000 starting from the age of 50 in Andhra Pradesh.",
    "benefit": "Monthly pension of ₹3,000 for traditional cobblers",
    "benefitText": "₹3,000/month pension for traditional shoe artisans",
    "benefits": [
      "Direct monthly pension of ₹3,000 credited to bank account",
      "Early eligibility age of 50 years for marginalized leather artisans",
      "Supports elderly artisans unable to perform manual roadside shoe repairs"
    ],
    "eligibility": {
      "minAge": 50,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 150000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the artisan",
      "LIDCAP (Leather Industries Development Corporation AP) Registration / MRO Certificate",
      "Age proof (minimum 50 years)",
      "Rice Card / White Ration Card",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Get occupational certification from Village Revenue Officer (VRO) or LIDCAP field officer",
      "Apply at local Gram/Ward Sachivalayam",
      "Welfare Assistant processes application through Navasakam portal",
      "Pension disbursed on 1st of every month"
    ],
    "providerUrl": "https://sspensions.ap.gov.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 113,
    "name": "YSR Pension Kanuka - Single Destitute Women Pension",
    "state": "Andhra Pradesh",
    "category": "Social Security",
    "minAge": 30,
    "maxAge": None,
    "maxIncome": 120000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Monthly financial pension of ₹3,000 for unmarried or abandoned destitute women aged 30+ (rural) or 35+ (urban).",
    "description": "This welfare pension assists abandoned, deserted, separated, or unmarried destitute women who have no family support system. Eligible unmarried women aged 30+ in rural areas (or 35+ in urban areas), and deserted women separated from husbands for over 1 year receive ₹3,000 per month.",
    "benefit": "Monthly direct social security pension of ₹3,000",
    "benefitText": "₹3,000/month financial security for single women",
    "benefits": [
      "Direct monthly pension of ₹3,000 credited to personal bank account",
      "Prevents destitution and social vulnerability for single women",
      "Doorstep delivery by village volunteers"
    ],
    "eligibility": {
      "minAge": 30,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": 120000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Certificate of Separation issued by Tahsildar / Legal Divorce Decree / Unmarried status certificate",
      "Rice Card / White Ration Card",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Obtain Single Woman / Desertion Inquiry Certificate from Tahsildar",
      "Submit application at Gram/Ward Sachivalayam",
      "Welfare and Education Assistant verifies living conditions",
      "Pension sanctioned and disbursed on 1st of each month"
    ],
    "providerUrl": "https://sspensions.ap.gov.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 114,
    "name": "YSR Pension Kanuka - Traditional Folk Artists & Kalakarulu",
    "state": "Andhra Pradesh",
    "category": "Social Security",
    "minAge": 50,
    "maxAge": None,
    "maxIncome": 150000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly artist honorarium pension of ₹3,000 for registered traditional folk artists, puppeteers, and drama performers aged 50+.",
    "description": "To preserve Andhra Pradesh's rich cultural heritage and support aging folk artists (Harikatha, Burrakatha, Tholu Bommalata shadow puppetry, Kuchipudi, Yakshagana, Tappeta Gullu, drama), the state provides a monthly honorarium pension of ₹3,000 to registered artists aged 50 and above in financial distress.",
    "benefit": "Monthly artist pension of ₹3,000",
    "benefitText": "₹3,000/month cultural honorarium for traditional artists",
    "benefits": [
      "Monthly pension of ₹3,000 directly credited on the 1st of every month",
      "Honors lifelong preservation of indigenous Telugu performing arts",
      "Protects veteran cultural artists from old-age destitution"
    ],
    "eligibility": {
      "minAge": 50,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 150000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the artist",
      "Folk Artist Registration Card issued by Department of Culture AP / District Cultural Council",
      "Press clippings / Certificates of traditional artistic performances",
      "Age proof certificate (minimum 50 years)",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Register with District Cultural Association / Department of Language and Culture AP",
      "Submit artist pension proposal at Gram/Ward Sachivalayam",
      "District Cultural Committee approves artist credentials",
      "Sanctioned pension disbursed directly via DBT"
    ],
    "providerUrl": "https://culture.ap.gov.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 115,
    "name": "Assistance to Disabled Persons for Purchase/Fitting of Aids (ADIP)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": None,
    "maxAge": None,
    "maxIncome": 240000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "100% free distribution of motorized tricycles, smart canes, digital hearing aids, braille kits, and artificial prosthetics.",
    "description": "Under the ADIP scheme of the Ministry of Social Justice and Empowerment, persons with disabilities (Divyangjan) receive free modern, durable, and sophisticated assistive aids and appliances. High-end equipment like motorized tricycles and smart mobility devices are provided completely free to beneficiaries earning up to ₹20,000/month.",
    "benefit": "Free motorized tricycles, braille kits, prosthetics & hearing aids",
    "benefitText": "Free motorized tricycles, hearing aids & prosthetics",
    "benefits": [
      "100% free high-end assistive devices (motorized tricycles, smart canes, digital hearing aids)",
      "Free fitting and alignment of modular artificial limbs and calipers",
      "Promotes physical, social, and psychological independence of Divyangjan"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 240000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of applicant",
      "Disability Certificate / UDID Card showing ≥40% disability",
      "Income Certificate from Tahsildar (monthly income below ₹20,000 for 100% subsidy)",
      "Passport size photograph showing disability"
    ],
    "applicationProcess": [
      "Apply online on the ADIP portal (adip.disabilityaffairs.gov.in) or attend ALIMCO camp",
      "Medical assessment by rehabilitation engineers to record measurements",
      "Assistive equipment fitted and distributed at public distribution camp"
    ],
    "providerUrl": "https://adip.disabilityaffairs.gov.in",
    "applyUrl": "https://adip.disabilityaffairs.gov.in"
  },
  {
    "id": 116,
    "name": "Unique Disability ID (UDID) Card Scheme",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": None,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Single pan-India contactless smart card unlocking travel concessions, welfare pensions, and healthcare for disabled citizens.",
    "description": "The UDID card project creates a national unified database for Persons with Disabilities (PwDs). The tamper-proof smart card with integrated QR code is universally accepted across India for railway concessions, bus passes, school admissions, job reservations, pensions, and financial welfare without repeatedly carrying bulky medical paper files.",
    "benefit": "Pan-India single smart identity card with concessions & benefits",
    "benefitText": "Single pan-India digital disability card for all benefits",
    "benefits": [
      "Nationwide recognition across all states and central departments",
      "Instant access to 75% rail concessions and free state RTC bus transport",
      "Paperless tracking and automatic linkage with scholarship and pension schemes"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Passport size photograph",
      "SADAREM certificate / Medical assessment report",
      "Signature or thumb impression"
    ],
    "applicationProcess": [
      "Apply online on the Swavlamban portal (swavlambancard.gov.in)",
      "District Medical Authority evaluates disability percentage at designated hospital",
      "UDID card generated digitally and laminated PVC smart card dispatched by post"
    ],
    "providerUrl": "https://www.swavlambancard.gov.in",
    "applyUrl": "https://www.swavlambancard.gov.in"
  },
  {
    "id": 117,
    "name": "Rashtriya Vayoshri Yojana (Senior Living Assistive Devices)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 60,
    "maxAge": None,
    "maxIncome": 180000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free assistive physical devices (walkers, hearing aids, wheelchairs, spectacles, dentures) for BPL senior citizens.",
    "description": "Rashtriya Vayoshri Yojana provides physical assistive living devices for senior citizens belonging to BPL families suffering from age-related infirmities or disabilities (low vision, hearing impairment, tooth loss, locomotor disability). Devices include walking sticks, elbow crutches, walkers, hearing aids, wheelchairs, artificial dentures, and spectacles.",
    "benefit": "100% free physical assistive devices & dentures for senior citizens",
    "benefitText": "Free wheelchairs, walkers, dentures & spectacles for elders",
    "benefits": [
      "Free high-quality assistive aids manufactured by ALIMCO",
      "Custom dentures and prescription spectacles fitted free of charge",
      "Restores mobility and independence for elderly impoverished citizens"
    ],
    "eligibility": {
      "minAge": 60,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 180000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the senior citizen",
      "Age proof confirming age 60 or above",
      "BPL Card / Rice Card / Income Certificate from Tahsildar",
      "Medical Certificate showing age-related physical impairment"
    ],
    "applicationProcess": [
      "Attend the RVY identification and assessment camp organized by ALIMCO and District Administration",
      "Doctors assess required assistive equipment (walking stick, denture, hearing aid)",
      "Devices fitted and handed over at distribution camp free of charge"
    ],
    "providerUrl": "https://socialjustice.gov.in",
    "applyUrl": "https://alimco.in"
  },
  {
    "id": 118,
    "name": "National Action Plan for Drug Demand Reduction (NAPDDR AP)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 14,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free de-addiction medical treatment, psychological rehabilitation, and skill reintegration for substance-dependent persons.",
    "description": "Administered by the Ministry of Social Justice and Empowerment, NAPDDR provides free inpatient and outpatient de-addiction treatment, detoxification, medical rehabilitation, and psychological counseling through Integrated Rehabilitation Centres for Addicts (IRCAs) and government psychiatry units across Andhra Pradesh.",
    "benefit": "100% free medical detoxification, psychiatric counseling & rehab",
    "benefitText": "Free de-addiction treatment, counseling & rehab stay",
    "benefits": [
      "Free inpatient residential stay (up to 30 days) with meals, medical care, and medicines",
      "Individual and family psycho-social therapy",
      "Vocational skill training to rebuild independent livelihood after recovery"
    ],
    "eligibility": {
      "minAge": 14,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the patient and guardian",
      "No income proof required — 100% free welfare service"
    ],
    "applicationProcess": [
      "Call the National Toll-Free De-addiction Helpline 14446",
      "Walk into any recognized IRCA / District De-addiction Centre in Andhra Pradesh",
      "Admission and clinical detoxification under medical supervision"
    ],
    "providerUrl": "https://socialjustice.gov.in",
    "applyUrl": "https://socialjustice.gov.in"
  }
]

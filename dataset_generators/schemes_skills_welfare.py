# schemes_skills_welfare.py
# Skill Development, Employment & Tribal/Minority Welfare Schemes (IDs 133 to 142)

skills_welfare_schemes = [
  {
    "id": 133,
    "name": "Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS)",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Guaranteed 100 days of wage employment per financial year for adult members of rural households volunteering for unskilled manual labor.",
    "description": "MGNREGS is a statutory legal entitlement guaranteeing at least 100 days of wage employment per financial year to every rural household whose adult members volunteer to do unskilled manual work. Daily notified statutory wages (currently ₹300 per day in AP) are credited directly into Aadhaar-based bank accounts within 15 days.",
    "benefit": "Statutory 100 days guaranteed wage work (₹300/day in AP)",
    "benefitText": "100 days guaranteed rural employment & daily wages",
    "benefits": [
      "Guaranteed 100 days of unskilled employment on public works (ponds, roads, bunds, tree planting)",
      "Daily wage rate of ₹300 per day credited directly via Aadhaar-Based Payment System (ABPS)",
      "Unemployment allowance legally payable if work is not allocated within 15 days of demand",
      "Worksite facilities: safe drinking water, crèche for children, first aid, and shade"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of all adult household members",
      "Passport size photographs",
      "Aadhaar-seeded Bank Passbook (NPCI enabled)",
      "MGNREGS Job Card (issued free upon registration)"
    ],
    "applicationProcess": [
      "Submit application for Job Card at Gram Sachivalayam or to the Village Field Assistant",
      "Gram Panchayat verifies local residence and issues photo Job Card within 15 days",
      "Submit formal written demand for work (Form 1)",
      "Field Assistant allots work muster at village worksite",
      "Biometric attendance recorded via NMMS mobile app and wages paid directly via DBT"
    ],
    "providerUrl": "https://nrega.nic.in",
    "applyUrl": "https://nrega.nic.in"
  },
  {
    "id": 134,
    "name": "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 15,
    "maxAge": 45,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "100% free industry-aligned skill training, assessment, NSQF certification, and direct placement support for unemployed youth.",
    "description": "PMKVY 4.0 is the flagship outcome-based skill training scheme of the Ministry of Skill Development and Entrepreneurship (MSDE). It provides free short-term skill training, upskilling, and Recognition of Prior Learning (RPL) across high-demand sectors like coding, AI, drone technology, mechatronics, healthcare, and green energy, with NSQF-aligned certification and direct placement drives.",
    "benefit": "100% free certified skill training + ₹8,000 monetary award & placement",
    "benefitText": "Free industry-recognized skill course & job placement",
    "benefits": [
      "100% free tuition and course materials at accredited Pradhan Mantri Kaushal Kendras (PMKK)",
      "National Skills Qualification Framework (NSQF) recognized digital certification",
      "Direct placement linkages with leading corporate and MSME employers",
      "Accidental insurance coverage of ₹2 Lakhs during the training tenure"
    ],
    "eligibility": {
      "minAge": 15,
      "maxAge": 45,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the candidate",
      "Educational qualification certificates (Class 10/12/ITI/Diploma/Degree)",
      "Aadhaar-seeded Bank Passbook",
      "Passport size photographs"
    ],
    "applicationProcess": [
      "Register on Skill India Digital portal (skillindiadigital.gov.in)",
      "Select desired skill course sector and locate nearest PMKK / training center in AP",
      "Attend counseling and enroll in training batch",
      "Complete theoretical and practical classes followed by third-party assessment",
      "Receive NSQF certificate and participate in Rojgar Mela job fairs"
    ],
    "providerUrl": "https://www.pmkvyofficial.org",
    "applyUrl": "https://www.skillindiadigital.gov.in"
  },
  {
    "id": 135,
    "name": "National Apprenticeship Promotion Scheme (NAPS-2)",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 16,
    "maxAge": 35,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Direct stipend support of 25% (up to ₹1,500/month) for on-the-job industrial apprenticeship training with corporate employers.",
    "description": "NAPS-2 promotes formal industrial apprenticeship training to bridge the gap between academic education and industry shop-floor requirements. The Government of India transfers 25% of the prescribed monthly stipend directly to the apprentice's bank account (up to ₹1,500 per month) while the host industry pays the remaining stipend.",
    "benefit": "Monthly stipend + certified on-the-job industrial work experience",
    "benefitText": "Monthly stipend & recognized industrial apprenticeship",
    "benefits": [
      "Direct Benefit Transfer of 25% of stipend (up to ₹1,500/month) credited to apprentice's bank account",
      "Hands-on shop-floor work experience in registered industrial units and MNCs",
      "National Apprenticeship Certificate (NAC) awarded upon clearing All India Trade Test (AITT)",
      "Significantly boosts long-term employability and regular industry hiring"
    ],
    "eligibility": {
      "minAge": 16,
      "maxAge": 35,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the apprentice",
      "ITI / Polytechnic / Engineering / Graduate Marks Memo",
      "Aadhaar-seeded Bank Passbook (NPCI active)",
      "Passport size photograph"
    ],
    "applicationProcess": [
      "Register on the Apprenticeship India portal (apprenticeshipindia.gov.in)",
      "Search and apply for active apprenticeship vacancies across industries in Andhra Pradesh",
      "Company conducts interview and issues apprenticeship contract",
      "Execute digital contract and commence training; stipend disbursed monthly via DBT"
    ],
    "providerUrl": "https://www.apprenticeshipindia.gov.in",
    "applyUrl": "https://www.apprenticeshipindia.gov.in"
  },
  {
    "id": 136,
    "name": "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 15,
    "maxAge": 35,
    "maxIncome": 250000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "100% free residential skill training with guaranteed minimum 70% job placement for rural poor youth (15-35 years).",
    "description": "DDU-GKY is a demand-driven placement-linked skill initiative under the National Rural Livelihoods Mission (NRLM). It caters exclusively to rural poor youth from MGNREGS or SHG families. The scheme provides completely free residential boarding, food, uniforms, study materials, tablet computers, and guaranteed formal job placement with at least minimum wage.",
    "benefit": "100% free residential skill course + guaranteed job placement",
    "benefitText": "Free boarding, skill training & guaranteed formal job placement",
    "benefits": [
      "Completely free lodging, boarding, uniforms, and educational materials",
      "Guaranteed minimum 70% formal sector placement of trained batches",
      "Post-placement financial support of ₹1,000 to ₹3,000 per month for the first few months of employment",
      "Upper age limit relaxed up to 45 years for women, SC, ST, and disabled youth"
    ],
    "eligibility": {
      "minAge": 15,
      "maxAge": 35,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the candidate",
      "MGNREGS Job Card / Rice Card (proving rural BPL status)",
      "Educational qualification certificates (Class 10 or 12 pass)",
      "Caste Certificate (for SC/ST/BC candidates)",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Apply through the local Gram Sachivalayam or register on kaushalpanjee.nic.in",
      "Attend mobilization counseling camp organized by Project Implementing Agency (PIA)",
      "Join residential training center for 3 to 12 months course",
      "Complete assessments and attend campus recruitment interviews for guaranteed placement"
    ],
    "providerUrl": "https://ddugky.gov.in",
    "applyUrl": "https://kaushalpanjee.nic.in"
  },
  {
    "id": 137,
    "name": "APSSDC Employability Skills Training Programme",
    "state": "Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 18,
    "maxAge": 30,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Industry-partnered training in software development, CNC machining, electric vehicles, and logistics with regular Mega Job Melas.",
    "description": "Andhra Pradesh State Skill Development Corporation (APSSDC) partners with global industry leaders (Siemens, Dassault Systèmes, Google, AWS, L&T) to provide high-end technical training across 26 district skill centers. Programs cover IT/software, IoT, electric vehicles, healthcare, and retail, coupled with statewide Mega Job Melas.",
    "benefit": "Subsidized industry-certified technical training & placement drives",
    "benefitText": "Industry-partnered technical training & job melas",
    "benefits": [
      "Hands-on training in state-of-the-art Siemens Centers of Excellence across AP engineering colleges",
      "Certifications recognized globally by technology companies",
      "Direct entry to monthly district-level Mega Job Melas with top recruiters"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 30,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the candidate",
      "College Degree / Diploma / ITI / Engineering Marks Memos",
      "Resume / Curriculum Vitae",
      "Passport size photographs"
    ],
    "applicationProcess": [
      "Register on the APSSDC official web portal (apssdc.in)",
      "Choose desired technical skill course or register for upcoming Job Mela",
      "Attend batch classes online or at nearest District Skill Development Center",
      "Participate in direct recruitment interviews"
    ],
    "providerUrl": "https://www.apssdc.in",
    "applyUrl": "https://jobmela.apsdc.in"
  },
  {
    "id": 138,
    "name": "Pradhan Mantri Van Dhan Yojana (PMVDY)",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Livelihood generation for tribal forest gatherers through value addition, processing, and branding of Minor Forest Produce (MFP).",
    "description": "Implemented by TRIFED and the Girijan Cooperative Corporation (GCC) in Andhra Pradesh, the Van Dhan scheme organizes tribal forest gatherers into Van Dhan Vikas Kendras (VDVKs). Each Kendra (around 300 tribal members) receives a ₹15 Lakh grant to establish processing and packaging units for products like honey, tamarind, amla, gum karaya, and coffee, ensuring fair remuneration.",
    "benefit": "₹15 Lakhs capital grant per tribal cluster for value addition & marketing",
    "benefitText": "Grant & machinery for tribal forest produce processing",
    "benefits": [
      "100% grant to procure processing equipment, solar dryers, packaging, and tools",
      "Triples income of tribal gatherers through value-added packaged retail sales",
      "Eliminates exploitation by private middlemen through GCC procurement at Minimum Support Price"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the tribal gatherer",
      "Scheduled Tribe (ST) Community Certificate",
      "Forest Rights Act (FRA) Patta / Tribal Domicile Certificate",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Enroll with local Van Dhan Self Help Group through Girijan Cooperative Corporation (GCC)",
      "GCC forms Van Dhan Vikas Kendra cluster and submits proposal to TRIFED",
      "Grant released to cluster account for machinery procurement and training",
      "Tribal members process forest produce and receive distributed profit margins"
    ],
    "providerUrl": "https://trifed.tribal.gov.in",
    "applyUrl": "https://trifed.tribal.gov.in"
  },
  {
    "id": 139,
    "name": "Nai Roshni - Leadership Development Scheme for Minority Women",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 18,
    "maxAge": 65,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "6-day leadership, civic rights, financial literacy, and digital governance training for women belonging to minority communities.",
    "description": "Administered by the Ministry of Minority Affairs, Nai Roshni empowers women belonging to minority communities (Muslims, Christians, Sikhs, Buddhists, Jains, Parsis) through non-residential and residential leadership training. Modules cover government schemes, digital banking, health, hygiene, legal rights, and self-advocacy.",
    "benefit": "Free leadership training, daily stipend, and legal rights kits",
    "benefitText": "Free leadership & financial literacy training for minority women",
    "benefits": [
      "Intensive 6-day curriculum on civic governance, microfinance, and legal protection",
      "Free learning materials, bag, stationery, and daily travel allowance/stipend",
      "Builds self-confidence to interact with government offices and financial institutions"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the woman applicant",
      "Minority Community Certificate / Self-Declaration",
      "Income Certificate from Tahsildar (under ₹2.5 Lakhs)",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Contact empanelled training organization or District Minority Welfare Officer",
      "Enroll for upcoming training batch in your mandal or municipality",
      "Attend the 6-day training workshop and collect certificate and stipend"
    ],
    "providerUrl": "https://nairoshni-moma.gov.in",
    "applyUrl": "https://nairoshni-moma.gov.in"
  },
  {
    "id": 140,
    "name": "Seekho Aur Kamao (Learn & Earn - Minority Youth)",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 14,
    "maxAge": 35,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free modern and traditional modular skill training with monthly stipend and minimum 75% employment placement guarantee for minority youth.",
    "description": "Seekho Aur Kamao is a placement-linked skill development scheme for minority youth aged 14 to 35 years. The scheme covers both modern industrial trades and traditional crafts, offering free training, boarding allowances, a monthly stipend of ₹1,500, and a mandatory 75% placement placement guarantee (with at least 50% in the organized sector).",
    "benefit": "100% free skill training + ₹1,500/month stipend & 75% job guarantee",
    "benefitText": "Free modular skill course, stipend & job placement",
    "benefits": [
      "Completely free NSQF-aligned training with certified course material",
      "Monthly stipend of ₹1,500 credited via DBT during the training period",
      "Mandatory 75% placement commitment by the training provider",
      "Post-placement monthly support of ₹2,000 for the first 2 months of job"
    ],
    "eligibility": {
      "minAge": 14,
      "maxAge": 35,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the candidate",
      "Minority Community Certificate (Muslim, Christian, Sikh, Buddhist, Jain, Parsi)",
      "School Leaving Certificate / Class 8, 10, or 12 marks memo",
      "Income Certificate from Tahsildar (under ₹2.5 Lakhs)",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Apply through the portal (seekhoaurkamao-moma.gov.in) or visit empanelled training center in AP",
      "Submit KYC and minority proof documents",
      "Undergo 3 to 6 months of classroom and practical training",
      "Appear for recruitment drives for placement in partner corporate units"
    ],
    "providerUrl": "https://seekhoaurkamao-moma.gov.in",
    "applyUrl": "https://seekhoaurkamao-moma.gov.in"
  },
  {
    "id": 141,
    "name": "Padho Pardesh - Interest Subsidy for Minorities",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 18,
    "maxAge": 35,
    "maxIncome": 600000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "100% interest subsidy on educational loans for overseas Masters, M.Phil, and PhD studies for students of minority communities.",
    "description": "Padho Pardesh provides full interest subsidy during the moratorium period (course period plus one year or six months after securing a job) on education loans availed from scheduled banks by students belonging to notified minority communities pursuing Master's, M.Phil, or Ph.D. degrees abroad.",
    "benefit": "100% interest subvention during entire overseas study moratorium",
    "benefitText": "100% interest waiver on overseas education bank loans",
    "benefits": [
      "Complete interest subsidy borne by Ministry of Minority Affairs during moratorium period",
      "Saves lakhs of rupees in accrued interest on foreign study education loans",
      "Covers accredited universities across USA, UK, Canada, Australia, and Europe"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 35,
      "gender": "All",
      "maxIncome": 600000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and Passport of the student",
      "Minority Community Certificate / Self-Declaration",
      "Income Certificate from Tahsildar (household income below ₹6 Lakhs)",
      "Education Loan Sanction Letter from an IBA member bank",
      "Unconditional Admission Letter from foreign university"
    ],
    "applicationProcess": [
      "Secure an education loan from any scheduled commercial bank for overseas studies",
      "Request the lending bank branch to claim interest subsidy on the Canara Bank nodal portal",
      "Bank uploads loan account and admission documents",
      "Ministry reimburses accrued interest directly to the loan account"
    ],
    "providerUrl": "https://www.minorityaffairs.gov.in",
    "applyUrl": "https://www.minorityaffairs.gov.in"
  },
  {
    "id": 142,
    "name": "National Safai Karamcharis Livelihood Micro-Finance Scheme",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 18,
    "maxAge": 60,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Concessional loans up to ₹15 Lakhs at low interest (4% to 6%) with capital subsidy for manual scavengers and sanitation workers.",
    "description": "Administered by the National Safai Karamcharis Finance & Development Corporation (NSKFDC) and the AP State Scheduled Castes Co-operative Finance Corporation, this scheme provides concessional micro-credit and capital subsidies to sanitation workers, ragpickers, and their dependents to adopt alternative dignified livelihoods.",
    "benefit": "Loans up to ₹15 Lakhs at 4-6% interest + up to ₹5 Lakh capital subsidy",
    "benefitText": "Subsidized loan & capital subsidy for sanitation worker families",
    "benefits": [
      "Concessional interest rate between 4% and 6% per annum",
      "Capital subsidy up to ₹5,00,000 for identified manual scavengers under SRMS",
      "Funds mechanized cleaning vehicles, commercial passenger autos, dairy units, and retail shops",
      "Zero collateral required for loans up to ₹5 Lakhs"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 60,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and PAN Card",
      "Sanitation Worker Identity Certificate / Urban Local Body Sanitary Supervisor certification",
      "Aadhaar-seeded Bank Passbook",
      "Quotation for equipment / vehicle / commercial enterprise assets"
    ],
    "applicationProcess": [
      "Apply through the District SC Corporation Office or Municipal Corporation Welfare Section",
      "Submit sanitation worker credentials and chosen business project profile",
      "Screening committee sanctions loan linked with State Channelising Agency (SCA)",
      "Subsidy credited and assets delivered to beneficiary"
    ],
    "providerUrl": "https://nskfdc.nic.in",
    "applyUrl": "https://nskfdc.nic.in"
  }
]

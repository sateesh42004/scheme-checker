# schemes_housing.py
# Housing, Sanitation & Basic Amenities Schemes (IDs 74 to 85)

housing_schemes = [
  {
    "id": 74,
    "name": "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Financial assistance of ₹1.30 Lakhs plus 90 days MGNREGS wages for constructing a pucca house with basic amenities in rural areas.",
    "description": "PMAY-G aims to provide a pucca house with basic amenities to all houseless rural households and those living in kutcha or dilapidated houses. The scheme provides ₹1,30,000 unit assistance directly credited into the beneficiary's bank account in 4 construction milestones, supplemented by 90 person-days of unskilled labor wages under MGNREGS and ₹12,000 for toilet construction.",
    "benefit": "₹1.30 Lakhs grant + ₹24,000 MGNREGS wages & toilet subsidy",
    "benefitText": "₹1.30 Lakh direct grant + MGNREGS wages for rural house",
    "benefits": [
      "Direct grant of ₹1,30,000 deposited in 4 construction progress stages",
      "Additional ₹24,000 unskilled labor wage assistance under MGNREGS",
      "Additional ₹12,000 financial support for toilet construction under Swachh Bharat",
      "LPG connection, piped drinking water, and electricity provided at doorstep"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of applicant and spouse",
      "Job Card / MGNREGS ID",
      "Aadhaar-seeded Bank Passbook",
      "Land possession / House site allotment deed (Patta)",
      "SECC-2011 / Awaas+ verification proof"
    ],
    "applicationProcess": [
      "Verify household presence on Awaas+ Gram Sabha priority list",
      "Geo-tagging of existing kutcha house by Village Housing Assistant",
      "Sanction order issued by Project Director, DWMA",
      "Geo-tagged inspection at plinth, lintel, and roof levels triggers milestone DBT payments"
    ],
    "providerUrl": "https://pmayg.nic.in",
    "applyUrl": "https://awaassoft.nic.in"
  },
  {
    "id": 75,
    "name": "Pradhan Mantri Awas Yojana - Urban (PMAY-U / Housing for All)",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Interest subsidy up to ₹2.67 Lakhs or direct financial grant of ₹1.5 Lakhs for constructing or buying an affordable urban pucca house.",
    "description": "PMAY-U addresses urban housing shortage among Economically Weaker Sections (EWS) and Lower Income Groups (LIG). The scheme offers Credit Linked Subsidy (CLSS) on home loans up to ₹2.67 Lakhs, or Beneficiary Led Construction (BLC) direct central grant of ₹1.5 Lakhs combined with state assistance for constructing pucca houses.",
    "benefit": "Up to ₹2.67 Lakhs loan interest subsidy or ₹1.5 Lakh cash grant",
    "benefitText": "Up to ₹2.67 Lakh subsidy for urban pucca home",
    "benefits": [
      "Direct central financial subsidy of ₹1,50,000 under Beneficiary Led Construction",
      "Up to ₹2,67,000 upfront interest subsidy credited to home loan principal",
      "Mandatory house registration in the name of the female head of household",
      "Water, sewerage, drainage, and electricity connections integrated"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Urban only"
    },
    "documents": [
      "Aadhaar Card of all family members",
      "Income Certificate from Tahsildar (household income below ₹3 Lakh for EWS)",
      "Proof of land ownership / House site possession certificate",
      "Municipal building plan approval",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Apply online on PMAY-Urban portal (pmaymis.gov.in) or through Citizen Service Centre",
      "Municipal Town Planning Officer conducts on-site field verification",
      "State Level Sanctioning and Monitoring Committee (SLSMC) approves project DPR",
      "Subsidies disbursed directly to bank account or home loan lending bank"
    ],
    "providerUrl": "https://pmaymis.gov.in",
    "applyUrl": "https://pmaymis.gov.in"
  },
  {
    "id": 76,
    "name": "YSR Pedalandariki Illu (Navaratnalu Housing AP)",
    "state": "Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Free registered house site title deed (patta) and financial assistance of ₹1.80 Lakhs for constructing individual pucca houses for poor women.",
    "description": "YSR Pedalandariki Illu is one of the largest housing programs in India, having distributed over 30 Lakh free house-site pattas exclusively registered in the names of female family heads across Andhra Pradesh. The government provides ₹1,80,000 financial assistance alongside free cement, sand, and steel at subsidized government rates to build modern YSR Jagananna Colonies.",
    "benefit": "Free residential plot patta + ₹1.80 Lakhs construction grant",
    "benefitText": "Free registered house patta + ₹1.80 Lakhs cash grant",
    "benefits": [
      "Free residential site (1.5 cents in rural, 1 cent in urban areas) registered in the woman's name",
      "Direct construction assistance of ₹1,80,000 disbursed milestone-wise",
      "Supply of cement and sand at heavily subsidized government-controlled rates",
      "Free water connection, internal CC roads, and electricity in all new housing layouts"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the female applicant and spouse",
      "Rice Card / White Ration Card",
      "House Site Allotment D-Form Patta issued by Revenue Department",
      "Aadhaar-linked Bank Passbook",
      "Passport size photographs"
    ],
    "applicationProcess": [
      "Submit housing application at Gram/Ward Sachivalayam to Ward Amenities Secretary",
      "Field verification conducted by Revenue Inspector and Tahsildar",
      "Collection of house site patta during state distribution drive",
      "Stage-by-stage construction photographed by Village Housing Assistant",
      "Milestone payments credited directly via DBT at Basement, Lintel, and Roof levels"
    ],
    "providerUrl": "https://housing.ap.gov.in",
    "applyUrl": "https://housing.ap.gov.in"
  },
  {
    "id": 77,
    "name": "AP TIDCO Affordable Housing Scheme",
    "state": "Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Subsidized multi-storied G+3 gated community housing flats (300, 365, and 430 sq.ft) with registered ownership for urban poor families.",
    "description": "Andhra Pradesh Township and Infrastructure Development Corporation (AP TIDCO) provides modern, earthquake-resistant G+3 apartment complexes with underground drainage, parks, water treatment plants, and community centers. Eligible BPL families receive 300 sq.ft flats for just ₹1 token cost, while 365 sq.ft and 430 sq.ft flats receive up to ₹1.5 Lakh state subsidy.",
    "benefit": "G+3 pucca flat registered at nominal cost (₹1 for 300 sq.ft units)",
    "benefitText": "Finished gated-community flat with all civic amenities",
    "benefits": [
      "300 sq.ft flats handed over for a nominal token registration fee of just ₹1",
      "Modern gated community amenities: CC roads, parks, streetlights, STP, and water supply",
      "Immediate clear freehold title registered in the name of the female beneficiary",
      "Bank loan facilitation at subsidized interest rates for larger flat categories"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Urban only"
    },
    "documents": [
      "Aadhaar Card of applicant and spouse",
      "White Ration Card / Rice Card",
      "Urban Domicile Proof (residing in municipality for minimum 3 years)",
      "Bank Account Passbook",
      "Income Certificate from Tahsildar"
    ],
    "applicationProcess": [
      "Register application at Municipal Corporation / Municipality or Ward Sachivalayam",
      "Town Planning Department scrutinizes applicant records and income criteria",
      "Flats allocated through transparent computerised lottery draw",
      "Execution of conveyance deed and flat key handover ceremony"
    ],
    "providerUrl": "https://aptidco.com",
    "applyUrl": "https://aptidco.com"
  },
  {
    "id": 78,
    "name": "Jal Jeevan Mission - Har Ghar Jal",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": None,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Functional household tap connection providing 55 liters per capita per day of potable drinking water to every rural household.",
    "description": "Jal Jeevan Mission is a transformative national program executed in partnership with the Rural Water Supply & Sanitation (RWS&S) department in Andhra Pradesh to provide individual tap water connections with potable drinking water of prescribed quality (BIS:10500 standard) on a regular and long-term basis to every rural home.",
    "benefit": "Free functional household tap connection providing 55 LPCD potable water",
    "benefitText": "Piped potable tap water connection to every rural house",
    "benefits": [
      "Assured daily supply of 55 liters per person per day clean potable water",
      "Eliminates drudgery for rural women having to fetch water from distant wells",
      "Regular automated water quality testing using Field Test Kits (FTKs)"
    ],
    "eligibility": {
      "minAge": None,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of household head",
      "Property Tax / Gram Panchayat House Number"
    ],
    "applicationProcess": [
      "Village Water & Sanitation Committee (VWSC) drafts Village Action Plan",
      "Pipeline network laid by RWS&S department to unserved habitations",
      "Free tap connection fitted directly at household premises",
      "Water quality data uploaded publicly onto JJM Dashboard (ejalshakti.gov.in)"
    ],
    "providerUrl": "https://jaljeevanmission.gov.in",
    "applyUrl": "https://ejalshakti.gov.in"
  },
  {
    "id": 79,
    "name": "Swachh Bharat Mission - Gramin (Individual Latrines IHHL)",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Financial incentive of ₹12,000 for constructing individual household sanitary flush latrines in rural villages.",
    "description": "Under Swachh Bharat Mission (Gramin), eligible rural households without a sanitary toilet receive a cash incentive of ₹12,000 to construct a twin-pit pour-flush toilet. The scheme ensures 100% open defecation free (ODF Plus) status, dignity, privacy, and hygiene for rural families, particularly women and adolescent girls.",
    "benefit": "₹12,000 direct financial incentive for constructing toilet",
    "benefitText": "₹12,000 cash subsidy for household toilet construction",
    "benefits": [
      "Direct benefit transfer of ₹12,000 into beneficiary bank account",
      "Technical guidance for eco-friendly twin-pit toilet construction",
      "Protects health, dignity, and personal safety of women and children"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of applicant",
      "Bank Passbook linked to Aadhaar",
      "Job Card / Ration Card",
      "Photograph of applicant alongside constructed toilet"
    ],
    "applicationProcess": [
      "Apply online at sbm.gov.in or submit form at Gram Sachivalayam",
      "Construct toilet as per technical design parameters",
      "Panchayat Secretary or Swachhagrahi conducts geo-tagged photographic inspection",
      "Incentive of ₹12,000 credited directly to applicant's bank account"
    ],
    "providerUrl": "https://swachhbharatmission.ddws.gov.in",
    "applyUrl": "https://sbm.gov.in"
  },
  {
    "id": 80,
    "name": "Swachh Bharat Mission - Urban (IHHL Sanitation)",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Financial subsidy of ₹10,000 to ₹12,000 for constructing individual household flush latrines in urban municipal areas.",
    "description": "SBM-Urban provides financial assistance to urban households living in slums or unauthorized colonies lacking individual toilet facilities. The combined central and state incentive funds the construction of hygienic pour-flush toilets connected to municipal sewers or septic tanks.",
    "benefit": "Financial grant of up to ₹12,000 for urban household toilet",
    "benefitText": "Up to ₹12,000 grant for individual urban toilet",
    "benefits": [
      "Direct DBT credit in two construction stages (commencement and completion)",
      "Eliminates reliance on distant community toilets",
      "Improves urban hygiene and municipal public health"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Urban only"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Bank Account Passbook",
      "Municipal residential proof / electricity bill",
      "Photograph of under-construction/completed toilet"
    ],
    "applicationProcess": [
      "Register on the Swachh Bharat Urban portal (swachhbharaturban.gov.in)",
      "Ward Sanitary Inspector inspects house site and validates unserved status",
      "First installment released upon foundation completion",
      "Final installment disbursed after geo-tagged photographic verification"
    ],
    "providerUrl": "https://swachhbharaturban.gov.in",
    "applyUrl": "https://swachhbharaturban.gov.in"
  },
  {
    "id": 81,
    "name": "Pradhan Mantri Surya Ghar: Muft Bijli Yojana",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Direct subsidy up to ₹78,000 for installing residential rooftop solar panels to provide up to 300 units of free electricity every month.",
    "description": "PM Surya Ghar: Muft Bijli Yojana provides direct subsidies for installing rooftop solar panels on residential homes. Beneficiaries receive ₹30,000 for 1 kW systems, ₹60,000 for 2 kW systems, and ₹78,000 for systems of 3 kW or higher, allowing families to generate up to 300 units of free clean solar electricity each month and sell surplus power back to the grid.",
    "benefit": "Direct central subsidy up to ₹78,000 + 300 units free power/month",
    "benefitText": "Up to ₹78,000 solar subsidy + 300 units free monthly power",
    "benefits": [
      "Direct DBT capital subsidy: ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW+",
      "Guaranteed zero electricity bill for households consuming under 300 units monthly",
      "Net metering allows earning income by exporting excess solar power to DISCOM (APCPDCL/APEPDCL/APSPDCL)",
      "Collateral-free low-interest bank loans available at around 7% interest"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the homeowner",
      "Latest Electricity Bill showing Service Connection Number (Consumer ID)",
      "Proof of roof ownership / House tax receipt",
      "Canceled Cheque or Bank Passbook copy"
    ],
    "applicationProcess": [
      "Register on national portal (pmsuryaghar.gov.in) with DISCOM consumer number",
      "Select an empanelled solar vendor for site feasibility survey and installation",
      "Vendor installs solar panels and net-meter is commissioned by DISCOM engineers",
      "Submit commissioning certificate and bank details on the portal",
      "Central subsidy of up to ₹78,000 credited directly into bank account within 30 days"
    ],
    "providerUrl": "https://pmsuryaghar.gov.in",
    "applyUrl": "https://pmsuryaghar.gov.in"
  },
  {
    "id": 82,
    "name": "Deendayal Antyodaya Yojana - NULM Shelter for Urban Homeless (SUH)",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 100000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "24/7 permanent shelter with clean beds, drinking water, sanitation, lockers, and medical care for homeless persons in cities.",
    "description": "DAY-NULM operates permanent 24/7 shelters for urban homeless individuals across all municipal corporations in Andhra Pradesh (Visakhapatnam, Vijayawada, Guntur, Tirupati, etc.). Shelters provide secure sleeping quarters, drinking water, bathing facilities, lockers, first aid, and linkage to social security pensions and voter cards.",
    "benefit": "Free 24/7 dignified shelter, bedding, hygiene, lockers & security",
    "benefitText": "Free 24x7 permanent shelter for urban homeless",
    "benefits": [
      "Clean bed, blanket, locker, and 24-hour security completely free of cost",
      "Sanitation, clean drinking water, and bathing facilities provided",
      "Free medical checkups and facilitation for Aadhaar and welfare card enrollments"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 100000,
      "area": "Urban only"
    },
    "documents": [
      "No mandatory documents required — on-spot biometric or identity recording"
    ],
    "applicationProcess": [
      "Walk in directly to any DAY-NULM Urban Homeless Shelter in any municipal town",
      "Shelter manager records entry details in shelter register",
      "Allotted dedicated bed space and personal locker immediately"
    ],
    "providerUrl": "https://nulm.gov.in",
    "applyUrl": "https://nulm.gov.in"
  },
  {
    "id": 83,
    "name": "Saubhagya - Pradhan Mantri Sahaj Bijli Har Ghar Yojana",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free electricity connection to all willing un-electrified rural and poor urban households.",
    "description": "The Saubhagya scheme ensures universal household electrification by providing free last-mile electricity connections to all willing poor households. It includes free service cables, smart prepaid/electronic meters, LED lamps, and safety wiring kits.",
    "benefit": "100% free domestic electricity connection with service wire & meter",
    "benefitText": "Free electricity connection & meter installation",
    "benefits": [
      "Zero connection fee for BPL households",
      "Includes free energy meter, service cable, and one LED point wiring kit",
      "Immediate power activation without procedural red tape"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of household head",
      "Rice Card / Proof of address / House ownership slip"
    ],
    "applicationProcess": [
      "Apply through local DISCOM sub-station (APEPDCL/APSPDCL/APCPDCL) or Gram Sachivalayam",
      "Lineman conducts line inspection and installs service wire",
      "Electricity meter sealed and service energised"
    ],
    "providerUrl": "https://saubhagya.gov.in",
    "applyUrl": "https://saubhagya.gov.in"
  },
  {
    "id": 84,
    "name": "Revamped Distribution Sector Scheme (RDSS - AP Domestic Quality)",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Modernized smart prepaid electricity metering and 24x7 uninterrupted quality domestic power supply across Andhra Pradesh.",
    "description": "Under the RDSS scheme, DISCOMs in Andhra Pradesh upgrade rural and urban power distribution infrastructure, installing smart meters, high-capacity transformers, and dedicated agricultural and domestic feeders to guarantee uninterrupted 24/7 power supply without voltage fluctuations.",
    "benefit": "Uninterrupted 24x7 reliable power supply & free smart meter installation",
    "benefitText": "24x7 power stability & smart digital metering",
    "benefits": [
      "Replaces outdated electromechanical meters with accurate smart meters at zero consumer expense",
      "Eliminates frequent low-voltage problems and transformer burnouts in rural pockets",
      "Real-time mobile app tracking of daily power usage"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural / Urban"
    },
    "documents": [
      "Electricity Consumer Service Number",
      "Aadhaar Card linked to consumer profile"
    ],
    "applicationProcess": [
      "Implemented systematically feeder-wise by DISCOM engineering teams",
      "DISCOM technicians replace existing meter with smart meter at premises",
      "Consumer receives SMS confirmation with credentials to monitor power usage"
    ],
    "providerUrl": "https://powermin.gov.in",
    "applyUrl": "https://powermin.gov.in"
  },
  {
    "id": 85,
    "name": "Rajiv Awas Yojana - Slum In-Situ Rehabilitation Support",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "In-situ pucca housing redevelopment and basic civic services for notified slum dwellers in urban municipalities.",
    "description": "This urban development scheme transforms notified slum settlements into formal urban neighborhoods. Beneficiaries receive newly constructed pucca housing units with individual legal tenure, piped water, underground sewerage, paved concrete roads, and solid waste collection facilities.",
    "benefit": "Free in-situ reconstructed pucca home with legal ownership tenure",
    "benefitText": "In-situ pucca flat with registered municipal tenure",
    "benefits": [
      "Permanent pucca home in the same locality, preserving existing livelihood linkages",
      "Clear legal title deed (patta) issued to slum dweller families",
      "Comprehensive infrastructure: roads, street lighting, drainage, and water supply"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Urban only"
    },
    "documents": [
      "Aadhaar Card",
      "Municipal Slum Household Survey Biometric Slip",
      "Voter ID / Ration Card proving slum residence prior to cutoff date"
    ],
    "applicationProcess": [
      "Municipal Corporation conducts total station biometric survey of slum settlement",
      "Beneficiary list ratified at Ward Committee meeting",
      "In-situ redevelopment undertaken in phases",
      "Allotment certificate and keys handed over upon completion"
    ],
    "providerUrl": "https://mohua.gov.in",
    "applyUrl": "https://mohua.gov.in"
  }
]

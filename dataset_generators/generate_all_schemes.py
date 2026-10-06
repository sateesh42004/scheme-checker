# generate_all_schemes.py
# Assembles 135 verified government schemes for SmartSeva AP

import json

# Read existing 20
with open("build_schemes.py", "r", encoding="utf-8") as f:
    text = f.read()

# Extract existing 20
start = text.find("existing_20 = [")
end = text.find("\nprint(\"Base 20 loaded.\")")
base_20_code = text[start + len("existing_20 = "):end].strip()
schemes = eval(base_20_code)

new_schemes = [
  # AGRICULTURE (21-35)
  {
    "id": 21,
    "name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 400000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Direct income support of ₹6,000 per year in three installments for landholding farmer families across India.",
    "description": "PM-KISAN is a central sector scheme providing direct financial support of ₹6,000 per annum to all landholding eligible farmer families across the country. The amount is directly credited in three equal installments of ₹2,000 every four months into Aadhaar-seeded bank accounts to supplement farm expenses and domestic needs.",
    "benefit": "₹6,000 per year (3 installments of ₹2,000)",
    "benefitText": "₹6,000 per year in 3 installments",
    "benefits": [
      "Direct benefit transfer of ₹6,000 per year credited in three installments",
      "Supplementary financial support for purchasing seeds, fertilizer, and agricultural inputs",
      "Seamless Aadhaar-based Direct Benefit Transfer without middlemen"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 400000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the landholder",
      "Pattadar Passbook / Land RoR 1B document",
      "Aadhaar-seeded Bank Passbook (NPCI mapped)",
      "Active Mobile Number linked with Aadhaar",
      "White Ration Card / Rice Card"
    ],
    "applicationProcess": [
      "Self-register on PM-KISAN portal (pmkisan.gov.in) or visit nearest Rythu Bharosa Kendra / CSC",
      "Enter Aadhaar number and verify rural land record details",
      "Upload Pattadar passbook document and bank credentials",
      "Complete mandatory e-KYC via OTP or biometric authentication",
      "State Agriculture Department verifies landholding and initiates DBT payments"
    ],
    "providerUrl": "https://pmkisan.gov.in",
    "applyUrl": "https://pmkisan.gov.in"
  },
  {
    "id": 22,
    "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 500000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Comprehensive crop insurance shield against yield losses due to non-preventable natural risks, drought, and floods.",
    "description": "PMFBY provides comprehensive insurance coverage and financial support to farmers suffering crop loss or damage arising from unforeseen weather events, pests, and natural calamities. The premium rates payable by farmers are nominal (2% for Kharif, 1.5% for Rabi, 5% for commercial/horticultural crops), with state and central subsidies covering the balance.",
    "benefit": "Full sum insured claim for crop loss",
    "benefitText": "Comprehensive crop loss compensation",
    "benefits": [
      "Low actuarial premium with 100% government subsidy on balance premium",
      "Covers pre-sowing losses, mid-season adversity, and post-harvest cyclone damage",
      "Remote sensing and satellite crop loss assessment for swift claim settlement"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 500000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the farmer",
      "Pattadar Passbook or CCRC Tenant Cultivator Card",
      "e-Crop Booking Sowing Certificate issued by RBK / Village Agricultural Assistant",
      "Bank Account Passbook",
      "Crop Sowing Declaration form"
    ],
    "applicationProcess": [
      "Ensure crop enrollment on AP e-Crop portal during sowing period",
      "Apply through Rythu Bharosa Kendra, bank branch, or pmfby.gov.in",
      "Verify crop survey number and insured acreage",
      "Pay nominal farmer premium share or verify automatic free coverage under state scheme",
      "In case of localized disaster, report loss within 72 hours via Crop Insurance App"
    ],
    "providerUrl": "https://pmfby.gov.in",
    "applyUrl": "https://pmfby.gov.in"
  },
  {
    "id": 23,
    "name": "Sub-Mission on Agricultural Mechanization (SMAM)",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 400000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "40% to 50% capital subsidy on tractors, power tillers, rotavators, and custom hiring center farm machinery.",
    "description": "SMAM promotes modern farm mechanization among small and marginal farmers across Andhra Pradesh. The scheme offers capital subsidies ranging from 40% to 50% (up to ₹10 Lakhs for Custom Hiring Centers) to purchase tractors, power tillers, harvesters, drone sprayers, and laser levelers.",
    "benefit": "40%–50% subsidy on farm implements",
    "benefitText": "Up to 50% subsidy on tractors and machinery",
    "benefits": [
      "Substantial capital subsidy on tractors, power weeders, and sprayers",
      "Grants for establishing Village Level Custom Hiring Centers (CHCs)",
      "Reduces manual labor drudgery and significantly cuts crop harvesting turnaround"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 400000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the farmer",
      "Land Record (Pattadar Passbook / RoR 1B)",
      "Caste Certificate (for higher SC/ST/Women subsidy quota)",
      "Quotation / Proforma Invoice from authorized farm equipment dealer",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Register on the DBT in Agriculture Mechanization portal (agrimachinery.nic.in)",
      "Select desired machinery category and authorized manufacturer/dealer",
      "Upload landholding proofs, Aadhaar, and dealer quotation",
      "District Agriculture Engineering officer approves pre-sanction letter",
      "Take delivery from dealer and receive subsidy credited directly to bank account"
    ],
    "providerUrl": "https://agrimachinery.nic.in",
    "applyUrl": "https://agrimachinery.nic.in"
  },
  {
    "id": 24,
    "name": "Andhra Pradesh Micro Irrigation Project (APMIP)",
    "state": "Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 350000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Up to 90% subsidy for small/marginal farmers to install modern drip and sprinkler micro-irrigation systems.",
    "description": "APMIP encourages efficient water usage, fertilizer savings, and higher agricultural productivity by providing 90% subsidy for SC/ST small & marginal farmers, 70% for BC farmers, and 50% for general farmers installing drip and sprinkler systems on up to 5 acres of land.",
    "benefit": "50% to 90% subsidy on Drip/Sprinkler systems",
    "benefitText": "Up to 90% subsidy for micro-irrigation",
    "benefits": [
      "Saves up to 45% irrigation water while boosting crop yields by 30%-40%",
      "Substantial subsidy up to 90% for SC/ST farmers and small landholders",
      "Includes 3 to 5 years free annual maintenance and supplier warranty"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 350000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the farmer",
      "Pattadar Passbook / Land Ownership Record",
      "Borewell / Water Source proof and electricity connection record",
      "Soil and water testing report",
      "Caste and Income Certificates"
    ],
    "applicationProcess": [
      "Submit application through local Rythu Bharosa Kendra or apmip.ap.gov.in",
      "Micro-irrigation engineer conducts GPS farm survey and prepares layout design",
      "Farmer deposits matching beneficiary contribution share through MeeSeva",
      "Empanelled micro-irrigation company installs drip pipeline and emitters",
      "Third-party physical verification followed by formal commissioning"
    ],
    "providerUrl": "https://apmip.ap.gov.in",
    "applyUrl": "https://apmip.ap.gov.in"
  },
  {
    "id": 25,
    "name": "PM KUSUM Solar Agriculture Pump Scheme",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 400000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "60% combined subsidy to install standalone solar water pumps and solarize agricultural pump sets.",
    "description": "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) enables farmers to replace diesel pumps with clean, reliable solar-powered agricultural pumps. Central and state governments together contribute 60% subsidy, bank finance covers 30%, and the farmer pays only 10% upfront.",
    "benefit": "60% government subsidy on solar pumps",
    "benefitText": "Up to 60% subsidy on solar water pumps",
    "benefits": [
      "Daytime uninterrupted solar irrigation free from grid power cuts",
      "Substantial savings on recurring diesel and electricity expenses",
      "Opportunity to sell surplus solar power back to DISCOM grid under Component C"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 400000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the farmer",
      "Pattadar Passbook / Land Ownership Document",
      "Water source verification (Borewell / Open well certificate)",
      "Bank Account Passbook",
      "Passport-size photo"
    ],
    "applicationProcess": [
      "Apply through AP NREDCAP portal (nredcap.ap.gov.in) or pmkusum.mnre.gov.in",
      "Select pump capacity (3 HP, 5 HP, or 7.5 HP) and solar panel array type",
      "NREDCAP conducts field feasibility inspection of groundwater depth",
      "Pay 10% farmer share after sanction order issuance",
      "Empanelled solar agency completes installation with remote monitoring"
    ],
    "providerUrl": "https://pmkusum.mnre.gov.in",
    "applyUrl": "https://nredcap.ap.gov.in"
  },
  {
    "id": 26,
    "name": "Soil Health Card Scheme",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Free testing of farm soil and customized nutrient recommendation cards for 12 key soil parameters.",
    "description": "The Soil Health Card scheme assesses nutrient status (N, P, K, micronutrients, pH, and organic carbon) of agricultural land every two years. Farmers receive personalized dosage recommendations for chemical fertilizers, bio-fertilizers, and organic manure to restore soil fertility and cut input costs.",
    "benefit": "Free Soil Health Card & customized fertilizer advice",
    "benefitText": "Free soil test and nutrient advice",
    "benefits": [
      "Scientific testing across 12 macro and micro soil nutrient parameters",
      "Helps avoid excessive fertilizer application and cuts cultivation expenditure",
      "Improves crop yield quality and long-term soil health"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of farmer",
      "Survey Number / Khata details of the farm plot",
      "Mobile number for SMS alerts"
    ],
    "applicationProcess": [
      "Village Agriculture Assistant collects GPS-tagged soil samples from field",
      "Samples sent to regional Soil Testing Laboratory (STL)",
      "Laboratory completes chemical nutrient test analysis",
      "Soil Health Card printed and distributed through local Rythu Bharosa Kendra",
      "Farmer can view digital card anytime on soilhealth.dac.gov.in"
    ],
    "providerUrl": "https://soilhealth.dac.gov.in",
    "applyUrl": "https://soilhealth.dac.gov.in"
  },
  {
    "id": 27,
    "name": "Paramparagat Krishi Vikas Yojana (PKVY)",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 350000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Financial assistance of ₹50,000 per hectare over 3 years to adopt organic farming and zero-budget natural farming.",
    "description": "PKVY encourages chemical-free organic farming through cluster-based mobilization and Participatory Guarantee System (PGS) certification. Farmers receive financial support for organic inputs, vermicompost, bio-pesticides, certification fees, and premium marketing linkages.",
    "benefit": "₹50,000 per hectare over 3 years",
    "benefitText": "₹50,000/ha for organic & natural farming",
    "benefits": [
      "₹31,000 direct assistance for organic inputs, bio-fertilizers, and neem seed extract",
      "Free group organic PGS certification for farmer clusters",
      "Premium marketing support for certified chemical-free produce"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 350000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the farmer",
      "Pattadar Passbook / Land Ownership Document",
      "Membership declaration in village organic farmer cluster",
      "Bank Account Passbook"
    ],
    "applicationProcess": [
      "Join or form a 20-hectare farmer cluster with Rythu Sadhikara Samstha (RySS)",
      "Enroll through local Rythu Bharosa Kendra on Jaivik Kheti portal",
      "Undergo natural farming training and adopt zero-budget practices",
      "Receive input financial assistance directly into bank account in milestone phases",
      "Receive official PGS-India Green and Organic certification logo"
    ],
    "providerUrl": "https://pgsindia-ncof.gov.in",
    "applyUrl": "https://jaivikkheti.in"
  },
  {
    "id": 28,
    "name": "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    "state": "Central / Andhra Pradesh",
    "category": "Fisheries",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 400000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "40% to 60% capital subsidy for aquaculture ponds, biofloc, fish feeds, and refrigerated transport vehicles.",
    "description": "PMMSY addresses critical gaps in fish production, post-harvest infrastructure, and modern aquaculture. Women and SC/ST beneficiaries receive up to 60% governmental capital subsidy, while general categories receive 40% subsidy for setting up biofloc fish farming, freshwater prawn ponds, hatcheries, and cold chain vehicles.",
    "benefit": "40% to 60% subsidy for fisheries projects",
    "benefitText": "Up to 60% subsidy on aquaculture and cold chain",
    "benefits": [
      "Financial assistance for constructing new fish ponds and biofloc culture tanks",
      "Subsidies on insulated trucks, motorized three-wheelers, and solar kiosks",
      "Livelihood support and safety kits for traditional marine fishermen"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 400000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Fisheries Department Registration ID or Marine Fishermen Card",
      "Land Ownership or Lease Agreement for aquaculture pond site",
      "Bank Account Passbook",
      "Detailed Project Report (DPR) prepared with fisheries officer"
    ],
    "applicationProcess": [
      "Submit project proposal through the PMMSY portal (pmmsy.dof.gov.in)",
      "District Fisheries Development Officer examines technical feasibility",
      "District Level Committee (DLC) recommends and sanctions project",
      "Beneficiary constructs pond/facility with technical guidance",
      "Subsidy released in DBT stages after physical verification"
    ],
    "providerUrl": "https://pmmsy.dof.gov.in",
    "applyUrl": "https://fisheries.ap.gov.in"
  },
  {
    "id": 29,
    "name": "Kisan Credit Card (KCC) for Crop Cultivation",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": 75,
    "maxIncome": 500000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Flexible revolving crop loan credit card up to ₹3 Lakhs at 4% effective interest rate with timely repayment.",
    "description": "The Kisan Credit Card scheme guarantees timely and hassle-free institutional short-term credit to farmers for crop cultivation, post-harvest maintenance, and farm asset repairs. With the central 2% interest subvention and 3% prompt repayment incentive, the net interest rate is just 4% per year.",
    "benefit": "Revolving credit line up to ₹3 Lakhs at 4% interest",
    "benefitText": "Short-term crop credit at 4% effective interest",
    "benefits": [
      "Collateral-free crop loan limit up to ₹1,60,000 (extended to ₹3 Lakhs with land record)",
      "Revolving cash credit facility valid for 5 years with annual review",
      "Atm-enabled RuPay Kisan Card for easy withdrawals at rural ATMs"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "gender": "All",
      "maxIncome": 500000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card and Voter ID of the farmer",
      "Pattadar Passbook / Land 1B Record or CCRC Tenant Cultivator Card",
      "No-Dues Certificate / Declaration from other banks",
      "Passport size photographs",
      "Crop sowing certificate"
    ],
    "applicationProcess": [
      "Obtain simple 1-page KCC application form from bank branch or RBK",
      "Attach land title documents and Aadhaar copy",
      "Bank processes and sanctions credit limit within 14 working days",
      "Receive RuPay Kisan Card linked to the sanctioned crop credit account",
      "Withdraw funds as needed and repay within 12 months to get interest subvention"
    ],
    "providerUrl": "https://www.myscheme.gov.in/schemes/kcc",
    "applyUrl": "https://ysrrythubharosa.ap.gov.in"
  },
  {
    "id": 30,
    "name": "Kisan Credit Card (KCC) for Animal Husbandry & Dairying",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": 75,
    "maxIncome": 400000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Concessional working capital loans up to ₹2 Lakhs at 4% effective interest for dairy, sheep, and goat farmers.",
    "description": "This extension of the KCC facility provides working capital credit to livestock farmers, dairy owners, and poultry rearers to meet day-to-day feeding, veterinary medicine, water, and management expenses without pledging agricultural land.",
    "benefit": "Working capital loan up to ₹2 Lakhs at 4% interest",
    "benefitText": "Up to ₹2 Lakhs livestock credit at 4% interest",
    "benefits": [
      "Collateral-free credit limit up to ₹1.6 Lakhs for milch animals, sheep, or goats",
      "Helps meet recurring animal feed, green fodder, and veterinary healthcare costs",
      "Prompt repayment entitles farmer to 3% interest discount"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "gender": "All",
      "maxIncome": 400000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the farmer",
      "Animal Ear Tagging Certificate / Veterinary Health Card",
      "Proof of Cattle Shed or local residency verification",
      "Bank Account Passbook",
      "Passport size photos"
    ],
    "applicationProcess": [
      "Visit nearest Commercial Bank, DCCB branch, or Animal Husbandry Assistant at RBK",
      "Fill out simplified KCC Animal Husbandry loan form",
      "Veterinary Assistant verifies tagged milch animals or flock strength",
      "Bank sanctions working capital credit limit within two weeks",
      "Access funds via RuPay debit card for feed and maintenance purchases"
    ],
    "providerUrl": "https://dahd.nic.in",
    "applyUrl": "https://ahd.ap.gov.in"
  },
  {
    "id": 31,
    "name": "National Livestock Mission (NLM) Entrepreneurship Scheme",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 500000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "50% capital subsidy up to ₹50 Lakhs to set up commercial sheep, goat, poultry, or pig breeding farms.",
    "description": "The NLM Entrepreneurship scheme supports individuals, SHGs, and Farmer Producer Organizations to establish parent breeding farms and fodder production units. The government provides 50% back-ended capital subsidy up to ₹50 Lakhs for sheep/goat breeding farms (500 females + 25 males) and poultry hatcheries.",
    "benefit": "50% capital subsidy (up to ₹50 Lakhs)",
    "benefitText": "50% capital subsidy for livestock enterprises",
    "benefits": [
      "Up to ₹50 Lakhs direct capital grant for sheep and goat breeding units",
      "Promotes rural youth and women livestock entrepreneurship",
      "Includes technical training from National Institute of Animal Nutrition"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 500000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card and PAN Card of the applicant",
      "Land Ownership or 15-year registered lease deed for the farm unit",
      "Detailed Project Report (DPR) approved by bank",
      "Bank In-principle Loan Sanction Letter",
      "Training Certificate in animal management (if available)"
    ],
    "applicationProcess": [
      "Apply online on NLM portal (nlm.udyamimitra.in)",
      "Upload DPR, land documents, and bank loan sanction letter",
      "State Level Executive Committee (SLEC) screens and recommends project",
      "Department of Animal Husbandry & Dairying (GoI) sanctions subsidy",
      "Subsidy released in two installments into loan account via SIDBI"
    ],
    "providerUrl": "https://nlm.udyamimitra.in",
    "applyUrl": "https://nlm.udyamimitra.in"
  },
  {
    "id": 32,
    "name": "Dr. YSR Pashu Bima (Livestock Insurance Scheme)",
    "state": "Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Subsidized livestock insurance policy covering accidental and disease-related death of cows and buffaloes.",
    "description": "YSR Pashu Bima protects small livestock owners from the catastrophic economic loss of valuable milch cattle due to disease, snake bite, lightning, or road accidents. The state government provides 80% premium subsidy for BPL/SC/ST farmers and 50% for other farmers.",
    "benefit": "Up to ₹30,000–₹50,000 insurance claim per cattle",
    "benefitText": "Insurance coverage for cattle with 80% premium subsidy",
    "benefits": [
      "80% premium borne by government for small and marginal livestock farmers",
      "Covers indigenous and cross-bred milch cattle, buffaloes, and breeding bulls",
      "Swift claim settlement on verification of microchip or RFID ear tag"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the cattle owner",
      "White Ration Card / Rice Card",
      "Veterinary Health Certificate with animal ear tag ID",
      "Bank Account Passbook",
      "Photograph of owner with the tagged animal"
    ],
    "applicationProcess": [
      "Contact Animal Husbandry Assistant at village Rythu Bharosa Kendra",
      "Veterinary Assistant inspects cattle, inserts RFID ear tag, and certifies value",
      "Farmer pays subsidized premium share (approx 20%)",
      "Insurance policy document issued on the spot",
      "In event of death, submit death certificate issued by veterinary doctor for instant claim"
    ],
    "providerUrl": "https://ahd.ap.gov.in",
    "applyUrl": "https://ahd.ap.gov.in"
  },
  {
    "id": 33,
    "name": "Dr. YSR Sanchara Pashu Seva (Mobile Veterinary Clinics)",
    "state": "Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": None,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Toll-free 1962 doorstep emergency ambulance and specialized veterinary medical care for rural livestock.",
    "description": "This service operates customized veterinary ambulances equipped with hydraulic lifts, diagnostic equipment, and surgical instruments across every assembly constituency in AP. Farmers can call toll-free 1962 to receive prompt doorstep treatment, artificial insemination, and disease containment for their farm animals.",
    "benefit": "Free doorstep veterinary emergency care via 1962",
    "benefitText": "Free 1962 mobile veterinary medical service",
    "benefits": [
      "24/7 dedicated toll-free helpline (1962) for cattle medical emergencies",
      "Doorstep ultrasound, minor surgeries, and emergency life support for animals",
      "Zero service charge for rural farmers and dairy owners"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": None,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the animal owner",
      "Active telephone/mobile connection to dial 1962"
    ],
    "applicationProcess": [
      "Dial toll-free helpline number 1962 from any phone",
      "Explain the animal's symptoms and provide your exact village location",
      "Central dispatch assigns the nearest Mobile Veterinary Ambulance",
      "Veterinary doctor and para-veterinarian arrive at your doorstep and administer care",
      "Medicines provided on the spot with digital prescription"
    ],
    "providerUrl": "https://ahd.ap.gov.in",
    "applyUrl": "https://ahd.ap.gov.in"
  },
  {
    "id": 34,
    "name": "AP Jagananna Pala Velluva (Amul Dairy Procurement Project)",
    "state": "Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Transparent electronic milk testing and premium fair prices paid directly to women dairy farmers via Amul.",
    "description": "In partnership with Amul, the Government of Andhra Pradesh established village-level Automatic Milk Collection Centers (AMCU). Farmers receive real-time SMS receipts with fat/SNF quality readings and fair market prices directly into their bank accounts every 10 days, breaking local middleman exploitation.",
    "benefit": "Transparent milk testing + ₹4 to ₹7 higher price per liter",
    "benefitText": "Fair milk price + timely 10-day direct payment",
    "benefits": [
      "Transparent automated milk testing for Fat and SNF content in presence of farmer",
      "Direct bank credit every 10 days without middlemen deductions",
      "Annual bonus distributed from dairy cooperative profits"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the dairy farmer",
      "White Ration Card / Rice Card",
      "Bank Account Passbook (NPCI linked)",
      "Animal ownership details"
    ],
    "applicationProcess": [
      "Enroll as a member at your village Amul / APDDCF Milk Collection Center",
      "Register biometric profile and link bank account details",
      "Pour morning and evening milk at the automated collection unit",
      "Receive printed computerized slip showing quantity, fat, SNF, and rate",
      "Payment credited directly into bank account every 10 days"
    ],
    "providerUrl": "https://ahd.ap.gov.in",
    "applyUrl": "https://ahd.ap.gov.in"
  },
  {
    "id": 35,
    "name": "Dr. YSR Free Crop Insurance Scheme",
    "state": "Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 400000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "100% free universal crop insurance with the entire premium borne by the Andhra Pradesh government.",
    "description": "Under this scheme, farmers in Andhra Pradesh pay a nominal token registration fee of just ₹1, with the entire insurance premium for notified crops fully paid by the state government. Every farmer who enrolls their cultivated plot on the e-Crop portal is automatically covered against natural disaster losses.",
    "benefit": "100% premium borne by AP government",
    "benefitText": "Free crop insurance coverage via e-Crop",
    "benefits": [
      "Zero premium burden on farmers — state government pays entire premium",
      "Automatic universal coverage for all e-Crop verified cultivated acres",
      "Compensation deposited directly into farmer bank accounts via DBT"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 400000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the farmer",
      "Pattadar Passbook / CCRC Tenant Card",
      "e-Crop booking acknowledgment from Rythu Bharosa Kendra",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Ensure mandatory e-Crop booking by Village Agricultural Assistant at your field",
      "Verify your name and crop details on the social audit list displayed at RBK",
      "Complete biometric e-KYC authentication",
      "Crop loss is scientifically evaluated through Crop Cutting Experiments (CCEs)",
      "Insurance claim sanctioned and credited directly to bank account"
    ],
    "providerUrl": "https://ysrrythubharosa.ap.gov.in",
    "applyUrl": "https://ysrrythubharosa.ap.gov.in"
  }
]

print("Added Agriculture schemes. Total:", len(schemes) + len(new_schemes))

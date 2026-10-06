# build_schemes.py
# Generates comprehensive dataset of 130 government schemes for SmartSeva AP

import json

existing_20 = [
  {
    "id": 1,
    "name": "NTR Bharosa Pension Scheme",
    "state": "Andhra Pradesh",
    "category": "Social Security",
    "minAge": 60,
    "maxAge": None,
    "maxIncome": 100000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly financial pension providing social security for elderly citizens and vulnerable groups in Andhra Pradesh.",
    "description": "The NTR Bharosa Pension Scheme provides dignified financial security to vulnerable sections of society, including senior citizens, disabled individuals, and traditional artisans. The scheme delivers monthly direct income support into beneficiaries' bank accounts, ensuring basic livelihood security and reducing economic vulnerability.",
    "benefit": "₹3,000 per month pension",
    "benefitText": "₹3,000 per month pension",
    "benefits": [
      "Direct monthly pension of ₹3,000 credited to bank account",
      "Doorstep pension disbursement support for bedridden or elderly recipients",
      "Comprehensive coverage across all 26 districts of Andhra Pradesh"
    ],
    "eligibility": {
      "minAge": 60,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 100000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "White Ration Card / Rice Card (Household income proof)",
      "Proof of Age (Birth Certificate, Voter ID, or School Leaving Certificate)",
      "Bank Passbook linked to Aadhaar (NPCI active)",
      "Recent passport-size photographs"
    ],
    "applicationProcess": [
      "Obtain pension application form from your nearest Gram or Ward Sachivalayam",
      "Attach copies of Aadhaar card, age proof, and bank passbook",
      "Submit the application to the Welfare and Education Assistant (WEA)",
      "Complete biometric verification conducted by the Village/Ward Volunteer",
      "Receive sanctioned Pension ID and track monthly disbursement on SSPensions portal"
    ],
    "providerUrl": "https://sspensions.ap.gov.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 2,
    "name": "Jagananna Vidya Deevena",
    "state": "Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 30,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Complete tuition fee reimbursement for students pursuing higher education courses like ITI, Polytechnic, Degree, and Engineering.",
    "description": "Jagananna Vidya Deevena is a landmark higher education financial assistance scheme by the Government of Andhra Pradesh. It reimburses 100% of college tuition fees directly to the bank accounts of students' mothers in quarterly installments, ensuring no eligible youth is deprived of higher education due to financial hardship.",
    "benefit": "100% Tuition fee reimbursement",
    "benefitText": "100% Tuition fee reimbursement",
    "benefits": [
      "Full college tuition fee reimbursement for post-intermediate professional courses",
      "Funds deposited directly into mother's Aadhaar-linked bank account",
      "Covers Polytechnic, ITI, Degree, Engineering, Medicine, and Post-Graduate degrees"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 30,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student and mother",
      "White Ration Card / Rice Card for family income verification",
      "College Admission Allotment Order and Fee Structure Receipt",
      "SSC & Intermediate Marks Memos / Hall Tickets",
      "Mother's active Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Submit admission credentials and certificates to college principal upon enrollment",
      "College authorities verify and register the student on Jnanabhumi portal",
      "Gram or Ward Sachivalayam validates family income, landholding, and attendance",
      "Welfare department issues fee sanction verification order",
      "Quarterly tuition fee is credited directly into mother's bank account"
    ],
    "providerUrl": "https://jnanabhumi.ap.gov.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 3,
    "name": "Women Free Bus Travel",
    "state": "Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Fare-free bus transit for women and girls across Andhra Pradesh State Road Transport Corporation (APSRTC) ordinary services.",
    "description": "This public mobility scheme enables girls, working women, and elderly females to travel free of cost on designated Andhra Pradesh State Road Transport Corporation (APSRTC) bus routes throughout the state. It enhances female labor force participation, access to education, and healthcare by eliminating daily transit costs.",
    "benefit": "Zero fare on APSRTC bus services",
    "benefitText": "Zero fare on APSRTC bus services",
    "benefits": [
      "100% free travel across designated APSRTC Palle Velugu and City Ordinary services",
      "Substantial monthly savings for female students and working professionals",
      "Simple verification using official state resident identification"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card verifying Andhra Pradesh domicile/address",
      "APSRTC Concessional Bus Pass or Commuter Smart Card (if registered)",
      "White Ration Card / Rice Card (for scheme records)"
    ],
    "applicationProcess": [
      "Board any eligible APSRTC Palle Velugu, Ultra Palle Velugu, or City Ordinary bus",
      "Present a valid Andhra Pradesh Aadhaar Card or resident identity card to conductor",
      "Receive a zero-value commuter ticket printed from the Electronic Ticket Machine (ETM)",
      "Keep the zero-value ticket with you until the end of the journey"
    ],
    "providerUrl": "https://apsrtc.ap.gov.in",
    "applyUrl": "https://apsrtc.ap.gov.in"
  },
  {
    "id": 4,
    "name": "YSR Rythu Bharosa",
    "state": "Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Annual input financial assistance for small, marginal, and tenant farmers in rural Andhra Pradesh.",
    "description": "YSR Rythu Bharosa provides direct financial assistance to farmer families across rural Andhra Pradesh to meet agricultural investment costs ahead of Kharif and Rabi cropping seasons. The assistance covers land-owning farmers as well as tenant cultivators belonging to SC, ST, BC, and Minority communities.",
    "benefit": "₹13,500 per year per farmer family",
    "benefitText": "₹13,500 per year per farmer family",
    "benefits": [
      "₹13,500 per year direct financial support disbursed in three timely installments",
      "Free crop insurance coverage under Dr. YSR Free Crop Insurance scheme",
      "Support extended to eligible tenant farmers holding Cultivator Rights (CCRC)"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the farmer",
      "Pattadar Passbook / Land Ownership Document (RoR 1B)",
      "Cultivator Rights Card (CCRC) if applying as a tenant farmer",
      "Aadhaar-seeded Bank Passbook (NPCI mapped)",
      "Rice Card for household identification"
    ],
    "applicationProcess": [
      "Visit the local Rythu Bharosa Kendra (RBK) in your village",
      "Submit land ownership documents or tenant agreement to Agriculture Extension Officer",
      "Field verification and social audit list displayed publicly at the RBK",
      "Biometric e-KYC authentication completed by the farmer",
      "Installments transferred directly to the farmer's bank account via DBT"
    ],
    "providerUrl": "https://ysrrythubharosa.ap.gov.in",
    "applyUrl": "https://ysrrythubharosa.ap.gov.in"
  },
  {
    "id": 5,
    "name": "YSR Aarogyasri",
    "state": "Andhra Pradesh",
    "category": "Health",
    "minAge": 0,
    "maxAge": None,
    "maxIncome": 500000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Comprehensive cashless medical treatment coverage up to ₹25 Lakhs for critical illnesses in empanelled hospitals.",
    "description": "The Dr. YSR Aarogyasri Health Care Scheme provides cashless hospitalization and specialized medical and surgical treatments to low and middle-income families across Andhra Pradesh and premier network hospitals in Hyderabad, Chennai, and Bengaluru. It protects families from catastrophic healthcare expenditures.",
    "benefit": "Cashless coverage up to ₹25 Lakhs",
    "benefitText": "Cashless coverage up to ₹25 Lakhs",
    "benefits": [
      "Cashless medical coverage up to ₹25,00,000 per family per year",
      "Covers over 3,250 listed medical and surgical procedures",
      "Includes free post-operative medicines and Aarogya Aasara financial allowance"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 500000,
      "area": "Rural / Urban"
    },
    "documents": [
      "YSR Aarogyasri Health Card or White Ration Card / Rice Card",
      "Aadhaar Card of the patient and family members",
      "Primary clinical diagnosis report or physician referral letter",
      "Valid Government Photo ID proof"
    ],
    "applicationProcess": [
      "Visit any empanelled government or private network hospital",
      "Report to the Aarogya Mithra assistance desk at the hospital entrance",
      "Aarogya Mithra validates eligibility with your Aarogyasri/Rice Card and Aadhaar",
      "Hospital submits electronic pre-authorization request to Aarogyasri Trust",
      "Receive cashless treatment, surgery, and discharge medicine without out-of-pocket costs"
    ],
    "providerUrl": "https://www.ysraarogyasri.ap.gov.in",
    "applyUrl": "https://www.ysraarogyasri.ap.gov.in"
  },
  {
    "id": 6,
    "name": "YSR Housing Scheme",
    "state": "Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Free residential house site patta and pucca house construction subsidy for rural homeless families.",
    "description": "The YSR Housing Scheme (Pedalandariki Illu) grants registered house site pattas in the name of women of homeless families and provides financial subsidies, concessional materials (cement, sand, steel), and infrastructure support to build durable pucca houses in newly developed YSR Jagananna colonies.",
    "benefit": "Free house site & construction assistance",
    "benefitText": "Free house site & construction assistance",
    "benefits": [
      "House site title deed (patta) registered directly in the name of woman head of household",
      "Direct financial subsidy released in construction milestone stages",
      "Free sand, discounted cement, and steel provided by the Housing Corporation"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of applicant and spouse",
      "White Ration Card / Rice Card",
      "Income Certificate issued by Tahsildar / Revenue Department",
      "Self-declaration / Affidavit of homeless or kutcha house status",
      "Aadhaar-linked Bank Passbook for DBT subsidy release"
    ],
    "applicationProcess": [
      "Apply through the housing counter at your Gram Sachivalayam",
      "Village Volunteer conducts physical inspection of family dwelling status",
      "Geotagging of eligible house plot by AP Housing Corporation field engineer",
      "House site patta issued and construction sanction order generated",
      "Subsidy funds released stage-wise upon geotagged photo verification of construction"
    ],
    "providerUrl": "https://housing.ap.gov.in",
    "applyUrl": "https://housing.ap.gov.in"
  },
  {
    "id": 7,
    "name": "Jagananna Amma Vodi",
    "state": "Andhra Pradesh",
    "category": "Education",
    "minAge": 25,
    "maxAge": None,
    "maxIncome": 200000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Annual financial incentive of ₹15,000 for mothers who send their children to school from Class 1 to 12.",
    "description": "Jagananna Amma Vodi is a flagship initiative aimed at eradicating child labor and boosting school enrollment and retention across Andhra Pradesh. Under this scheme, ₹15,000 per year is deposited directly into the bank accounts of needy mothers sending their children to recognized schools or junior colleges, provided the student maintains at least 75% attendance.",
    "benefit": "₹15,000 per academic year",
    "benefitText": "₹15,000 per academic year",
    "benefits": [
      "Direct financial support of ₹15,000 deposited every academic year",
      "Encourages uninterrupted school education from Class 1 through Intermediate (Class 12)",
      "Funds credited directly into mother's verified bank account"
    ],
    "eligibility": {
      "minAge": 25,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": 200000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the mother (or guardian) and child",
      "White Ration Card / Rice Card",
      "School / College Bonafide Study Certificate with 75% attendance record",
      "Mother's active Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "School Headmaster uploads student data and attendance records on Childinfo portal",
      "Gram or Ward Sachivalayam Welfare Assistant verifies household criteria",
      "Draft list of eligible mothers published at Sachivalayam for social scrutiny",
      "Redressal of any data mismatch or attendance grievances",
      "State-level DBT transfer directly to the mother's bank account"
    ],
    "providerUrl": "https://gsws.ap.gov.in",
    "applyUrl": "https://gsws.ap.gov.in"
  },
  {
    "id": 8,
    "name": "YSR Cheyutha",
    "state": "Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 45,
    "maxAge": 60,
    "maxIncome": 250000,
    "ruralOnly": True,
    "femaleOnly": True,
    "shortDescription": "Financial assistance of ₹75,000 over four years for women aged 45-60 from SC, ST, BC, and Minority communities.",
    "description": "YSR Cheyutha empowers middle-aged rural women belonging to marginalized communities (SC, ST, BC, and Minorities) by providing ₹18,750 per year for four years (totaling ₹75,000). The scheme assists beneficiaries in establishing sustainable micro-enterprises such as dairy farming, grocery shops, and sheep rearing in partnership with top corporate brands.",
    "benefit": "₹75,000 over 4 years (₹18,750/year)",
    "benefitText": "₹75,000 over 4 years (₹18,750/year)",
    "benefits": [
      "₹18,750 per year direct grant credited over four consecutive years",
      "Livelihood support, enterprise training, and bank tie-ups through SERP",
      "Assistance for establishing dairy, goat farming, or retail micro-enterprises"
    ],
    "eligibility": {
      "minAge": 45,
      "maxAge": 60,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the woman applicant",
      "Caste Certificate (SC/ST/BC/Minority issued via MeeSeva)",
      "White Ration Card / Rice Card",
      "Proof of Age (Voter ID, School Record, or Birth Certificate)",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Apply through the local Gram Sachivalayam or SERP village organization",
      "Village Volunteer conducts door-to-door verification of age and community data",
      "Draft list is displayed at Sachivalayam for public social audit",
      "Mandal Parishad Development Officer (MPDO) verifies and approves eligible beneficiaries",
      "Financial assistance credited into the beneficiary's individual savings account"
    ],
    "providerUrl": "https://navasakam.ap.gov.in",
    "applyUrl": "https://navasakam.ap.gov.in"
  },
  {
    "id": 9,
    "name": "Skill Development Training Scheme",
    "state": "Andhra Pradesh",
    "category": "Employment",
    "minAge": 18,
    "maxAge": 35,
    "maxIncome": 300000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free technical and professional vocational training with placement assistance for unemployed youth.",
    "description": "Operated by the Andhra Pradesh State Skill Development Corporation (APSSDC), this program offers industry-aligned job training courses in IT, automotive, healthcare, electronics, retail, and manufacturing sectors. Trainees receive free training materials, hands-on lab sessions, recognized certifications, and job placement drives.",
    "benefit": "Free certified training & job placement",
    "benefitText": "Free certified training & job placement",
    "benefits": [
      "100% free certified vocational and tech training across high-demand sectors",
      "Industry-recognized certification upon course completion",
      "Campus placement drives and interviews with top private employers"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 35,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card",
      "Educational qualification certificates (10th / 12th / ITI / Diploma / Degree)",
      "Resume / Curriculum Vitae",
      "Recent passport-size photographs",
      "Bank Account details"
    ],
    "applicationProcess": [
      "Visit the official APSSDC portal and create a student profile",
      "Browse available technical or non-technical courses and training centers",
      "Enroll in the batch and attend offline or hybrid training sessions",
      "Complete the hands-on curriculum, projects, and final assessment",
      "Receive industry certificate and attend scheduled APSSDC job placement drives"
    ],
    "providerUrl": "https://apsdc.ap.gov.in",
    "applyUrl": "https://apsdc.ap.gov.in"
  },
  {
    "id": 10,
    "name": "YSR Pension Kanuka (Widow)",
    "state": "Andhra Pradesh",
    "category": "Social Security",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 100000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Monthly financial pension support of ₹3,000 for destitute and widowed women in Andhra Pradesh.",
    "description": "Under the YSR Pension Kanuka widow pension program, financial sustenance is provided to widowed women who have lost their family's primary earning partner. The scheme guarantees a monthly livelihood pension delivered at the beginning of each calendar month.",
    "benefit": "₹3,000 per month pension",
    "benefitText": "₹3,000 per month pension",
    "benefits": [
      "Guaranteed monthly income support of ₹3,000",
      "Doorstep delivery or direct electronic bank transfer",
      "Social protection and financial self-reliance for vulnerable women"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "Female only",
      "maxIncome": 100000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the applicant",
      "Official Death Certificate of the deceased husband",
      "White Ration Card / Rice Card",
      "Age proof document (Voter ID, School record, or Aadhaar)",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Submit pension application at your Gram or Ward Sachivalayam",
      "Enclose copies of husband's death certificate, Aadhaar, and income proof",
      "Field inspection and biometric verification by the designated volunteer",
      "Sanction approval by the MPDO / Municipal Commissioner",
      "Monthly pension delivered directly to your doorstep or bank account"
    ],
    "providerUrl": "https://sspensions.ap.gov.in",
    "applyUrl": "https://sspensions.ap.gov.in"
  },
  {
    "id": 11,
    "name": "YSR Kapu Nestham",
    "state": "Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": 60,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": True,
    "shortDescription": "Financial assistance of ₹60,000 over four years (₹15,000/year) for women belonging to the Kapu community.",
    "description": "YSR Kapu Nestham provides dedicated financial empowerment to women aged 18 to 60 years belonging to Kapu, Balija, Telaga, and Ontari sub-castes in Andhra Pradesh. Each eligible woman receives ₹15,000 per year for four years (total ₹60,000) to support small family businesses, livelihoods, and household wellbeing.",
    "benefit": "₹60,000 over 4 years (₹15,000/year)",
    "benefitText": "₹60,000 over 4 years (₹15,000/year)",
    "benefits": [
      "Direct assistance of ₹15,000 per year credited for up to 4 years",
      "Encourages sustainable livelihood initiatives and women entrepreneurship",
      "Direct DBT transfer without intermediaries"
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
      "Integrated Caste Certificate (Kapu / Balija / Telaga / Ontari from MeeSeva)",
      "White Ration Card / Rice Card",
      "Proof of Age (Voter ID or Birth Certificate)",
      "Aadhaar-linked Bank Account Passbook"
    ],
    "applicationProcess": [
      "Apply through the Gram / Ward Sachivalayam Navasakam desk",
      "Submit community verification certificate and family income credentials",
      "Field survey and biometric identification by Sachivalayam staff",
      "Social audit list displayed publicly for community confirmation",
      "Annual payment transferred directly to unencumbered bank account"
    ],
    "providerUrl": "https://navasakam.ap.gov.in",
    "applyUrl": "https://navasakam.ap.gov.in"
  },
  {
    "id": 12,
    "name": "YSR Netanna Nestham",
    "state": "Andhra Pradesh",
    "category": "Handloom",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 250000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Annual financial grant of ₹24,000 for rural handloom weaver families owning an active loom.",
    "description": "YSR Netanna Nestham provides direct financial aid of ₹24,000 every year to every handloom weaver household in rural Andhra Pradesh that owns and operates an active handloom. The assistance helps weavers upgrade equipment, procure raw materials (yarn and dyes), and maintain competitive production.",
    "benefit": "₹24,000 per year per weaver family",
    "benefitText": "₹24,000 per year per weaver family",
    "benefits": [
      "Annual direct assistance of ₹24,000 credited ahead of festival production",
      "Assistance for purchasing modern loom accessories, yarn, and natural dyes",
      "Helps preserve traditional handloom craftsmanship and rural livelihood"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the weaver",
      "Handloom Weaver Registration Card / Weaver Co-operative ID",
      "Handloom Geo-tagging Certificate issued by Handlooms & Textiles Dept",
      "White Ration Card / Rice Card",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Handloom Department inspects and geotags the applicant's working loom",
      "Enroll through Gram Sachivalayam with geotagging registration number",
      "Physical verification by Assistant Director of Handlooms & Textiles",
      "Draft beneficiary list displayed at Sachivalayam for social scrutiny",
      "Grant of ₹24,000 credited directly into the weaver's bank account"
    ],
    "providerUrl": "https://gsws.ap.gov.in",
    "applyUrl": "https://gsws.ap.gov.in"
  },
  {
    "id": 13,
    "name": "YSR Matsyakara Bharosa",
    "state": "Andhra Pradesh",
    "category": "Fisheries",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "Annual subsistence relief of ₹10,000 during the marine fishing ban period plus fuel subsidies for coastal fishermen.",
    "description": "YSR Matsyakara Bharosa safeguards traditional coastal and inland marine fishermen families during the mandatory 61-day annual fishing conservation ban on the eastern seaboard. In addition to ₹10,000 cash relief, eligible mechanized and motorized boat owners receive subsidized diesel fuel.",
    "benefit": "₹10,000 annual relief + diesel subsidy",
    "benefitText": "₹10,000 annual relief + diesel subsidy",
    "benefits": [
      "₹10,000 direct subsistence payment during the annual marine fishing ban period",
      "Subsidized diesel fuel allowance for registered motorized and mechanized boats",
      "Increased ex-gratia coverage for accidental loss of life at sea"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the fisherman",
      "Biometric Marine Fishermen ID Card issued by Fisheries Department",
      "Boat Registration Certificate (MFRA compliant) if boat owner",
      "Rice Card / White Ration Card",
      "Aadhaar-seeded Bank Account Passbook"
    ],
    "applicationProcess": [
      "Register details with the Village Fisheries Assistant at the coastal Sachivalayam",
      "Department of Fisheries verifies active vessel registration and crew rosters",
      "Biometric e-KYC conducted for each crew member before the ban commencement",
      "Beneficiary list approved by District Fisheries Officer",
      "Financial assistance of ₹10,000 credited directly during the ban window"
    ],
    "providerUrl": "https://fisheries.ap.gov.in",
    "applyUrl": "https://fisheries.ap.gov.in"
  },
  {
    "id": 14,
    "name": "YSR Vahana Mitra",
    "state": "Andhra Pradesh",
    "category": "Employment",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Annual maintenance allowance of ₹10,000 for self-employed auto, taxi, and maxi-cab driver-cum-owners.",
    "description": "YSR Vahana Mitra provides ₹10,000 per year to self-employed individuals who own and drive auto-rickshaws, light commercial taxis, and maxi-cabs. This financial relief covers mandatory expenses including vehicle fitness certification, comprehensive insurance premiums, permit renewal fees, and routine vehicle maintenance.",
    "benefit": "₹10,000 per year maintenance allowance",
    "benefitText": "₹10,000 per year maintenance allowance",
    "benefits": [
      "₹10,000 annual financial assistance paid directly to driver-cum-owner",
      "Helps meet vehicle fitness inspection, insurance, and road permit expenses",
      "Encourages road safety compliance and formal vehicle documentation"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the driver-cum-owner",
      "Valid Driving License (Auto Rickshaw / Light Motor Vehicle Transport)",
      "Vehicle Registration Certificate (RC) registered in the applicant's name",
      "Vehicle Insurance Certificate and Fitness Certificate",
      "White Ration Card / Rice Card and Bank Passbook"
    ],
    "applicationProcess": [
      "Submit application through the Navasakam portal or Gram/Ward Sachivalayam",
      "Transport Department verifies driving license, RC, and fitness records digitally",
      "Motor Vehicle Inspector completes physical verification of the transport vehicle",
      "Approval by District Collector and publication of eligible drivers list",
      "Direct electronic credit of ₹10,000 into the owner's bank account"
    ],
    "providerUrl": "https://navasakam.ap.gov.in",
    "applyUrl": "https://navasakam.ap.gov.in"
  },
  {
    "id": 15,
    "name": "YSR Zero Interest Loan Scheme",
    "state": "Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 21,
    "maxAge": 60,
    "maxIncome": 250000,
    "ruralOnly": True,
    "femaleOnly": True,
    "shortDescription": "100% bank loan interest reimbursement (Sunna Vaddi) for rural Self-Help Group (SHG) women.",
    "description": "The YSR Sunna Vaddi scheme reimburses the entire interest burden on bank linkage loans availed by rural Self-Help Group (SHG) women members who repay their loan EMIs promptly. By subsidizing loan interest to 0%, the scheme eases debt burdens and spurs micro-enterprise expansion.",
    "benefit": "Zero interest on SHG bank loans",
    "benefitText": "Zero interest on SHG bank loans",
    "benefits": [
      "Full reimbursement of bank interest paid on SHG bank linkage loans",
      "Reduces debt servicing stress and enhances women creditworthiness",
      "Fosters financial discipline and access to formal microfinance credit"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 60,
      "gender": "Female only",
      "maxIncome": 250000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Cards of Self-Help Group members",
      "SHG Group Savings & Bank Loan Account Passbooks",
      "Rice Card of the member families",
      "SERP Group Registration Certificate",
      "Bank Loan Repayment Ledger showing prompt monthly EMI clearance"
    ],
    "applicationProcess": [
      "SHG repays monthly bank loan installments promptly to the commercial bank",
      "Bank branches upload prompt repayment ledger to the SERP portal",
      "SERP calculates the eligible interest amount paid by the SHG group",
      "Government deposits total interest subsidy directly into group bank account",
      "Group credits individual interest share to qualifying members"
    ],
    "providerUrl": "https://serp.ap.gov.in",
    "applyUrl": "https://serp.ap.gov.in"
  },
  {
    "id": 16,
    "name": "Jagananna Thodu",
    "state": "Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Collateral-free, zero-interest working capital loan of ₹10,000 for street vendors and roadside artisans.",
    "description": "Jagananna Thodu shields street vendors, push-cart merchants, and traditional footpath artisans from informal high-interest moneylenders. Eligible micro-vendors receive ₹10,000 collateral-free working capital loans from nationalized banks, with the state government reimbursing the entire loan interest directly upon punctual repayment.",
    "benefit": "₹10,000 interest-free working capital loan",
    "benefitText": "₹10,000 interest-free working capital loan",
    "benefits": [
      "₹10,000 collateral-free institutional bank loan for micro-enterprises",
      "100% interest reimbursement by the state government upon regular repayment",
      "Enhanced credit limit eligibility upon successful loan cycle completion"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the street vendor",
      "Street Vending Identity Card / Certificate of Vending issued by ULB/Panchayat",
      "White Ration Card / Rice Card",
      "Bank Account Passbook",
      "Photograph of vendor at the vending cart or market stall"
    ],
    "applicationProcess": [
      "Survey and enumeration conducted by Town Planning or Sachivalayam volunteer",
      "Apply through Gram or Ward Sachivalayam with vending proof",
      "Designated bank branch sanctions and disburses ₹10,000 working capital loan",
      "Vendor repays monthly loan installments to the bank account",
      "Government credits full quarterly interest reimbursement directly via DBT"
    ],
    "providerUrl": "https://gsws.ap.gov.in",
    "applyUrl": "https://gsws.ap.gov.in"
  },
  {
    "id": 17,
    "name": "YSR Law Nestham",
    "state": "Andhra Pradesh",
    "category": "Education",
    "minAge": 18,
    "maxAge": 35,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Monthly stipend of ₹5,000 (total ₹15,000 to ₹60,000) for junior advocate law graduates during initial practice years.",
    "description": "YSR Law Nestham provides financial support to junior advocates who have graduated in law and enrolled with the Bar Council of Andhra Pradesh. To assist young legal professionals during their initial struggle period of practice under senior advocates, the state grants a regular stipend to sustain their legal career.",
    "benefit": "Financial stipend for junior advocates",
    "benefitText": "Financial stipend for junior advocates",
    "benefits": [
      "Monthly financial assistance of ₹5,000 deposited in bi-annual installments",
      "Supports law graduates during their first three critical years of active practice",
      "Encourages young advocates from economically modest backgrounds"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 35,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card",
      "Degree Certificate in Law (LL.B / B.L)",
      "Bar Council of Andhra Pradesh Enrollment Certificate and Identity Card",
      "Active Practice Certificate signed by Senior Advocate with 15+ years experience",
      "Aadhaar-seeded Bank Passbook"
    ],
    "applicationProcess": [
      "Register online through the Jnanabhumi Law Nestham portal",
      "Upload Bar Council enrollment certificate and senior advocate confirmation letter",
      "AP Bar Council validates enrollment and practice credentials",
      "Verification by Law Department and Gram/Ward Sachivalayam",
      "Direct benefit transfer credited bi-annually into advocate's savings account"
    ],
    "providerUrl": "https://jnanabhumi.ap.gov.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 18,
    "name": "Post-Matric Scholarship (AP)",
    "state": "Andhra Pradesh",
    "category": "Education",
    "minAge": 15,
    "maxAge": 35,
    "maxIncome": 250000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "State scholarship covering full tuition and maintenance allowance for SC, ST, BC, and Minority students.",
    "description": "The Andhra Pradesh Post-Matric Scholarship program provides financial assistance to students belonging to Scheduled Castes, Scheduled Tribes, Backward Classes, EBC, and minority communities to pursue studies beyond Class 10 up to post-graduate and doctoral levels.",
    "benefit": "Tuition fee waiver & maintenance allowance",
    "benefitText": "Tuition fee waiver & maintenance allowance",
    "benefits": [
      "Full waiver or reimbursement of non-refundable college tuition and exam fees",
      "Annual maintenance allowance for hostel and day-scholar students",
      "Merit-cum-means coverage for diverse professional and general degree programs"
    ],
    "eligibility": {
      "minAge": 15,
      "maxAge": 35,
      "gender": "All",
      "maxIncome": 250000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the student",
      "Integrated Caste and Income Certificate issued through MeeSeva",
      "Previous Academic Marksheets (SSC / Intermediate / Degree)",
      "College Admission Allotment Order and Fee Receipt",
      "Student's active Aadhaar-linked Bank Account Passbook"
    ],
    "applicationProcess": [
      "Register online on the Jnanabhumi Post-Matric Scholarship portal",
      "Upload admission allotment order, caste, and income certificates",
      "College authorities verify course registration and biometric attendance",
      "District Welfare Officer reviews and approves scholarship sanction",
      "Scholarship amount credited electronically via state e-Payment system"
    ],
    "providerUrl": "https://jnanabhumi.ap.gov.in",
    "applyUrl": "https://jnanabhumi.ap.gov.in"
  },
  {
    "id": 19,
    "name": "YSR Sunna Vaddi Panta Runaalu",
    "state": "Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": None,
    "maxIncome": 300000,
    "ruralOnly": True,
    "femaleOnly": False,
    "shortDescription": "100% interest subsidy on crop loans up to ₹1,00,000 for rural farmers who repay within one year.",
    "description": "Under YSR Sunna Vaddi Panta Runaalu (Zero Interest Crop Loan Scheme), the state government pays 100% of the interest on crop loans of up to ₹1,00,000 taken by farmers from commercial banks and cooperative societies, provided the loan principal is repaid on time within the 12-month loan tenure.",
    "benefit": "100% interest subsidy on crop loans",
    "benefitText": "100% interest subsidy on crop loans",
    "benefits": [
      "Complete interest refund on crop loans up to ₹1,00,000",
      "Zero effective borrowing cost for disciplined farmer borrowers",
      "Encourages formal bank credit and timely agricultural loan repayment"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": None,
      "gender": "All",
      "maxIncome": 300000,
      "area": "Rural only"
    },
    "documents": [
      "Aadhaar Card of the farmer",
      "Kisan Credit Card (KCC) or Crop Loan Account Passbook",
      "Pattadar Passbook / RoR 1B / CCRC tenant card",
      "Bank Clearance Certificate showing full loan repayment within 1 year",
      "e-Crop booking receipt for the corresponding cropping season"
    ],
    "applicationProcess": [
      "Obtain crop loan from your commercial bank, DCCB, or primary agricultural society",
      "Ensure mandatory e-Crop registration through your local Rythu Bharosa Kendra",
      "Repay the principal loan amount in full within the stipulated one-year period",
      "Lending bank uploads eligible borrower records to Agriculture Department portal",
      "Government deposits 100% interest subsidy directly into farmer's bank account"
    ],
    "providerUrl": "https://ysrrythubharosa.ap.gov.in",
    "applyUrl": "https://ysrrythubharosa.ap.gov.in"
  },
  {
    "id": 20,
    "name": "YSR Bima",
    "state": "Andhra Pradesh",
    "category": "Insurance",
    "minAge": 18,
    "maxAge": 70,
    "maxIncome": 500000,
    "ruralOnly": False,
    "femaleOnly": False,
    "shortDescription": "Free accidental death and permanent disability insurance coverage up to ₹5,00,000 for unorganized workers.",
    "description": "YSR Bima provides universal social insurance security to primary breadwinners of unorganized and poor households across Andhra Pradesh. In the tragic event of accidental death or permanent disability, the state government provides insurance coverage up to ₹5,00,000 to protect surviving family members from extreme poverty.",
    "benefit": "Insurance cover up to ₹5 Lakhs",
    "benefitText": "Insurance cover up to ₹5 Lakhs",
    "benefits": [
      "₹5,00,000 accidental death and total permanent disability cover for age 18-50",
      "₹3,00,000 cover for age group 51-70",
      "Immediate ₹10,000 funeral assistance paid upon death of breadwinner"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 70,
      "gender": "All",
      "maxIncome": 500000,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card of the primary breadwinner",
      "White Ration Card / Rice Card (Household identification)",
      "Nominee's Aadhaar Card and relationship declaration",
      "Nominee's Aadhaar-seeded Bank Passbook",
      "In case of claim: Police FIR copy, Post-Mortem Report, and Death Certificate"
    ],
    "applicationProcess": [
      "Household breadwinner enrolled automatically through Rice Card data",
      "Village or Ward Volunteer verifies nominee details during door-to-door survey",
      "Annual insurance premium paid completely by the Government of Andhra Pradesh",
      "In case of incident, nominee submits claim to Gram/Ward Sachivalayam",
      "Immediate interim relief followed by complete claim settlement within 21 days"
    ],
    "providerUrl": "https://labour.ap.gov.in",
    "applyUrl": "https://labour.ap.gov.in"
  }
]

print("Base 20 loaded.")

const schemes = [
  {
    "id": 1,
    "name": "NTR Bharosa Pension Scheme",
    "state": "Andhra Pradesh",
    "category": "Social Security",
    "minAge": 60,
    "maxAge": null,
    "maxIncome": 100000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 500000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 200000,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
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
    "ruralOnly": true,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "maxAge": null,
    "maxIncome": 100000,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "ruralOnly": true,
    "femaleOnly": true,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
  },
  {
    "id": 21,
    "name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    "state": "Central / Andhra Pradesh",
    "category": "Agriculture",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": 400000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 500000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 400000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 350000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 400000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": 350000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 400000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "ruralOnly": true,
    "femaleOnly": false,
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
    "ruralOnly": true,
    "femaleOnly": false,
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
    "maxAge": null,
    "maxIncome": 500000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 400000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
  },
  {
    "id": 36,
    "name": "Jagananna Vasathi Deevena",
    "state": "Andhra Pradesh",
    "category": "Education",
    "minAge": 17,
    "maxAge": 28,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
  },
  {
    "id": 56,
    "name": "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    "state": "Central / Andhra Pradesh",
    "category": "Health",
    "minAge": null,
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxIncome": null,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxIncome": null,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": true,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": 150000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": 150000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxIncome": null,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxIncome": null,
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
  },
  {
    "id": 74,
    "name": "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    "state": "Central / Andhra Pradesh",
    "category": "Housing",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 300000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": 100000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
  },
  {
    "id": 86,
    "name": "YSR Aasara",
    "state": "Andhra Pradesh",
    "category": "Women Empowerment",
    "minAge": 18,
    "maxAge": 65,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxIncome": null,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "maxAge": null,
    "maxIncome": 250000,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
      "gender": "Female only",
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
      "gender": "Female only",
      "maxIncome": null,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
      "gender": "Female only",
      "maxIncome": null,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxIncome": null,
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
    "ruralOnly": true,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
  },
  {
    "id": 102,
    "name": "Atal Pension Yojana (APY)",
    "state": "Central / Andhra Pradesh",
    "category": "Social Security",
    "minAge": 18,
    "maxAge": 40,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": 100000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 100000,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 100000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "maxAge": null,
    "maxIncome": 150000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 150000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 150000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 150000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 120000,
    "ruralOnly": false,
    "femaleOnly": true,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": 150000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": 240000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
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
    "minAge": null,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "minAge": null,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": 180000,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
  },
  {
    "id": 119,
    "name": "Pradhan Mantri MUDRA Yojana - Shishu Loan",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": 65,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Collateral-free business loans up to ₹50,000 at low interest rates for starting or running micro enterprises and small vendors.",
    "description": "MUDRA Shishu loans cater to micro-entrepreneurs, street vendors, vegetable sellers, small artisans, and home-based service providers needing seed capital. Commercial, regional rural, and cooperative banks offer collateral-free loans up to ₹50,000 with low processing charges and repayment tenures of up to 5 years.",
    "benefit": "Collateral-free loan up to ₹50,000 at concessional interest",
    "benefitText": "Up to ₹50,000 collateral-free micro loan for small business",
    "benefits": [
      "Zero physical collateral or third-party guarantee required",
      "Low processing fees and concessional interest rates linked to MCLR",
      "MUDRA debit card issued for flexible working capital withdrawals",
      "Flexible repayment period of 3 to 5 years"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and PAN Card of the applicant",
      "Passport size photographs",
      "Proof of business address (Electricity bill / Rental agreement)",
      "Quotation / Machinery price slip for items to be purchased",
      "Bank Account Statement for the last 6 months"
    ],
    "applicationProcess": [
      "Apply through the Udyamimitra portal (udyamimitra.in) or visit any commercial/Gramin bank branch",
      "Submit Shishu Loan application form with equipment quotation and KYC documents",
      "Bank branch verifies business activity and credit history (CIBIL check)",
      "Loan disbursed directly into savings/current account with MUDRA card"
    ],
    "providerUrl": "https://www.mudra.org.in",
    "applyUrl": "https://www.udyamimitra.in"
  },
  {
    "id": 120,
    "name": "Pradhan Mantri MUDRA Yojana - Kishore Loan",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": 65,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Collateral-free enterprise expansion loans from ₹50,001 to ₹5,00,000 for established small businesses and workshops.",
    "description": "MUDRA Kishore loan covers established small business units, retail shops, repair workshops, and service units seeking capital to purchase modern machinery, increase inventory, or expand operations. Loans between ₹50,001 and ₹5,00,000 are provided without collateral backing.",
    "benefit": "Collateral-free business expansion loan from ₹50,001 to ₹5,00,000",
    "benefitText": "₹50,000 to ₹5 Lakh collateral-free expansion loan",
    "benefits": [
      "No third-party guarantee or collateral security required",
      "Competitive interest rates with flexible repayment terms up to 5 years",
      "Funds term loans for equipment and working capital limits",
      "Backed by Credit Guarantee Fund for Micro Units (CGFMU)"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and PAN Card",
      "Udyam MSME Registration Certificate",
      "Proof of business existence for past 1-2 years",
      "Last 12 months Bank Account Statements",
      "Estimated balance sheet / Projected sales statement",
      "Equipment quotation from certified vendor"
    ],
    "applicationProcess": [
      "Submit application on JanSamarth portal (jansamarth.in) or at bank branch",
      "Upload business turnover proof and project expansion estimate",
      "Bank evaluates repayment capacity and conducts unit inspection",
      "Sanction letter issued and funds disbursed"
    ],
    "providerUrl": "https://www.mudra.org.in",
    "applyUrl": "https://www.jansamarth.in"
  },
  {
    "id": 121,
    "name": "Pradhan Mantri MUDRA Yojana - Tarun Loan",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": 65,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Enterprise growth loans from ₹5,00,001 to ₹10,00,000 (up to ₹20 Lakhs for proven borrowers) for mature micro units.",
    "description": "The Tarun category of MUDRA financing supports mature small business enterprises looking to scale up operations, acquire industrial equipment, or set up modern production lines. Loans range from ₹5,00,001 to ₹10,00,000 (extended up to ₹20 Lakhs for successful past borrowers), covered under central credit guarantees.",
    "benefit": "Enterprise growth loan from ₹5,00,001 to ₹10,00,000",
    "benefitText": "₹5 Lakh to ₹10 Lakh business growth loan",
    "benefits": [
      "Substantial capital infusion up to ₹10,00,000 without mortgaging immovable property",
      "Supports purchase of heavy machinery, commercial delivery vehicles, or plant setup",
      "Repayment tenure up to 5-7 years with convenient EMI options"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card, PAN Card, and Voter ID",
      "Udyam Registration Certificate and GST Registration (if applicable)",
      "Last 2 years Income Tax Returns (ITR) and Audited Financial Statements",
      "Last 12 months Bank Statements",
      "Detailed project report with projected revenue and cash flows"
    ],
    "applicationProcess": [
      "Apply through the JanSamarth digital lending portal (jansamarth.in)",
      "Choose preferred commercial or private bank lender",
      "Bank conducts technical and financial appraisal of enterprise",
      "Loan agreement executed and funds credited directly to supplier / borrower account"
    ],
    "providerUrl": "https://www.mudra.org.in",
    "applyUrl": "https://www.jansamarth.in"
  },
  {
    "id": 122,
    "name": "PM SVANidhi (PM Street Vendor's AtmaNirbhar Nidhi)",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Collateral-free working capital micro-loans of ₹10,000, ₹20,000, and ₹50,000 with 7% interest subsidy and cashback for street vendors.",
    "description": "PM SVANidhi empowers street vendors to resume and expand their livelihoods post-pandemic. Vendors receive an initial collateral-free working capital loan of ₹10,000. On timely repayment, they become eligible for enhanced loans of ₹20,000 and ₹50,000, along with a 7% annual interest subsidy and up to ₹1,200 annual cashback on digital QR transactions.",
    "benefit": "Collateral-free loans up to ₹50,000 + 7% interest subsidy & cashback",
    "benefitText": "₹10,000 to ₹50,000 micro-credit with 7% interest subsidy",
    "benefits": [
      "Tiered working capital loans: 1st tranche ₹10,000; 2nd tranche ₹20,000; 3rd tranche ₹50,000",
      "7% interest subsidy credited quarterly directly into beneficiary's bank account",
      "Up to ₹100 per month cashback (₹1,200/year) on conducting digital UPI sales",
      "No processing fee or collateral required"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Urban only"
    },
    "documents": [
      "Aadhaar Card of the street vendor",
      "Vending Certificate / Urban Local Body (ULB) Identity Card / Letter of Recommendation (LoR)",
      "Aadhaar-seeded Bank Passbook",
      "Mobile number linked with Aadhaar"
    ],
    "applicationProcess": [
      "Check name on the Street Vendor survey list at your Municipal Corporation / Municipality or pmsvanidhi.mohua.gov.in",
      "If not surveyed, obtain Letter of Recommendation (LoR) from Town Vending Committee / Ward Sachivalayam",
      "Apply online on PM SVANidhi portal or through Common Service Centre",
      "Bank sanctions and disburses loan directly to vendor's account within 7 days"
    ],
    "providerUrl": "https://pmsvanidhi.mohua.gov.in",
    "applyUrl": "https://pmsvanidhi.mohua.gov.in"
  },
  {
    "id": 123,
    "name": "PM Vishwakarma Scheme",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Skill training, ₹15,000 toolkit voucher, and collateral-free enterprise loan up to ₹3,00,000 at 5% interest for 18 traditional crafts.",
    "description": "PM Vishwakarma provides holistic end-to-end support to traditional artisans and craftspeople across 18 trades (carpenter, blacksmith, goldsmith, potter, sculptor, cobbler, mason, basket maker, tailor, etc.). Benefits include Vishwakarma Certificate & ID card, basic/advanced skill training with ₹500/day stipend, ₹15,000 modern toolkit incentive, and collateral-free enterprise credit up to ₹3 Lakhs at a highly subsidized 5% interest rate.",
    "benefit": "₹15,000 toolkit grant + ₹3 Lakh enterprise loan at 5% interest",
    "benefitText": "₹15,000 toolkit voucher & ₹3 Lakh loan at 5% interest",
    "benefits": [
      "Official PM Vishwakarma Certificate and Digital ID Card",
      "5 to 7 days Basic Skill Training + Advanced Training with ₹500/day stipend",
      "₹15,000 e-voucher grant for purchasing modern professional toolkit equipment",
      "Collateral-free credit: ₹1,00,000 (1st tranche) and ₹2,00,000 (2nd tranche) at just 5% interest",
      "Quality certification, branding, and marketing support on government e-Marketplace (GeM)"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and Active Mobile Number",
      "Bank Account Passbook (Aadhaar linked)",
      "Ration Card / Rice Card (Family verification)",
      "Traditional trade self-declaration"
    ],
    "applicationProcess": [
      "Register at nearest Common Service Centre (CSC) or Gram/Ward Sachivalayam with biometric authentication",
      "Three-tier verification: Gram Panchayat / ULB Head -> District Screening Committee -> Executive Committee",
      "Undergo skill training and receive ₹15,000 toolkit digital voucher",
      "Apply for loan tranches through JanSamarth portal"
    ],
    "providerUrl": "https://pmvishwakarma.gov.in",
    "applyUrl": "https://pmvishwakarma.gov.in"
  },
  {
    "id": 124,
    "name": "Prime Minister’s Employment Generation Programme (PMEGP)",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Margin money capital subsidy of 15% to 35% on micro-enterprise projects up to ₹50 Lakhs (manufacturing) and ₹20 Lakhs (services).",
    "description": "PMEGP is a flagship credit-linked subsidy program administered by KVIC and District Industries Centres (DIC). It assists unemployed youth and entrepreneurs in establishing new micro-enterprises. The government provides 15% to 35% margin money capital subsidy (higher for rural areas, women, SC/ST/OBC), requiring the promoter to invest only 5% to 10% own contribution.",
    "benefit": "Capital subsidy of 15% to 35% (up to ₹17.5 Lakhs grant)",
    "benefitText": "15% to 35% capital subsidy on projects up to ₹50 Lakhs",
    "benefits": [
      "Project limit up to ₹50,00,000 for manufacturing and ₹20,00,000 for service units",
      "Subsidy rate: 25% (Urban) and 35% (Rural) for special category (Women, SC, ST, OBC, Minorities, Ex-servicemen)",
      "Promoter contribution only 5% for special categories and 10% for general categories",
      "Mandatory Entrepreneurship Development Programme (EDP) training included"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and PAN Card",
      "Educational Qualification Certificate (minimum Class 8 pass for projects > ₹10 Lakh mfg / > ₹5 Lakh service)",
      "Caste / Category Certificate (for special category claim)",
      "Detailed Project Report (DPR) detailing capital expenditure and working capital",
      "Rural Area Certificate from Tahsildar (for 35% rural subsidy)"
    ],
    "applicationProcess": [
      "Apply online on KVIC PMEGP e-portal (kviconline.gov.in/pmegpeportal)",
      "Upload DPR, KYC, educational, and caste certificates",
      "District Level Task Force Committee (DLTFC) scrutinizes and forwards project to chosen financing bank",
      "Bank conducts technical feasibility and sanctions credit",
      "Margin money subsidy locked in a 3-year term deposit and adjusted towards principal upon successful verification"
    ],
    "providerUrl": "https://www.kviconline.gov.in",
    "applyUrl": "https://www.kviconline.gov.in/pmegpeportal"
  },
  {
    "id": 125,
    "name": "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Collateral-free bank credit facility up to ₹5 Crores with 75% to 85% sovereign guarantee coverage for MSMEs.",
    "description": "CGTMSE enables first-generation entrepreneurs and MSMEs to access term loans and working capital facilities up to ₹5 Crores from formal banks without offering third-party guarantees or mortgaging immovable property. CGTMSE provides credit guarantee coverage of 75% to 85% to the lending institution against default.",
    "benefit": "Collateral-free bank loans up to ₹5 Crores with credit guarantee",
    "benefitText": "Up to ₹5 Crore collateral-free loan backing for MSMEs",
    "benefits": [
      "Access institutional bank credit up to ₹5,00,00,000 without collateral or property hypothecation",
      "Guarantee coverage up to 85% for women entrepreneurs, micro enterprises, and ZED-certified units",
      "Annual guarantee fee subsidized for micro enterprises",
      "Empowers innovative startups and technical manufacturing units"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and PAN Card of promoters",
      "Udyam MSME Registration Certificate",
      "Comprehensive Business Project Report and Financial Feasibility",
      "Last 3 years Audited Financial Statements / ITR (for existing enterprises)",
      "Provisional financial projections and cash flow estimates"
    ],
    "applicationProcess": [
      "Prepare detailed project report and business model",
      "Approach any member lending institution (MLI) including SBI, Union Bank, Canara Bank, or private banks",
      "Apply for credit facility requesting coverage under CGTMSE scheme",
      "Lending bank assesses credit viability and applies directly to CGTMSE for guarantee cover"
    ],
    "providerUrl": "https://www.cgtmse.in",
    "applyUrl": "https://www.cgtmse.in"
  },
  {
    "id": 126,
    "name": "Startup India Seed Fund Scheme (SISFS)",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Financial assistance up to ₹20 Lakhs as grant and up to ₹50 Lakhs as debt/convertible debentures for early-stage DPIIT startups.",
    "description": "SISFS provides early-stage financial assistance to innovative startups for proof of concept, prototype development, product trials, market entry, and commercialization through approved incubators across India (including incubators at IIT Tirupati, Andhra University, and IIIT Sri City).",
    "benefit": "Up to ₹20 Lakhs grant & up to ₹50 Lakhs convertible seed debt",
    "benefitText": "Up to ₹70 Lakhs seed funding for tech & social startups",
    "benefits": [
      "Grant of up to ₹20,00,000 for validation of Proof of Concept and prototype creation",
      "Investment of up to ₹50,00,000 through debt or convertible debentures for market launch",
      "Mentorship, lab access, and pilot deployment support through partner incubators"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "DPIIT Startup Recognition Certificate",
      "Certificate of Incorporation / Partnership Deed",
      "Pitch deck and business plan with technical architecture",
      "Founders' Aadhaar and PAN credentials"
    ],
    "applicationProcess": [
      "Obtain DPIIT recognition on startupindia.gov.in portal",
      "Apply on the Seed Fund portal (seedfund.startupindia.gov.in) and select up to 3 preferred incubators",
      "Incubator Seed Management Committee evaluates presentation and pitch",
      "Disbursement released in milestone-based tranches directly to startup account"
    ],
    "providerUrl": "https://seedfund.startupindia.gov.in",
    "applyUrl": "https://seedfund.startupindia.gov.in"
  },
  {
    "id": 127,
    "name": "MSME Champions Scheme (ZED Sustainable Certification)",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Up to 80% government subsidy on Zero Defect Zero Effect (ZED) quality certification and green technology modernization.",
    "description": "The ZED scheme motivates MSMEs to manufacture defect-free goods with zero negative environmental impact. The Ministry of MSME provides up to 80% financial subsidy on Bronze, Silver, and Gold ZED certifications, along with ₹5 Lakh handholding consultancy support and up to ₹3 Lakh financial assistance for clean technology adoption.",
    "benefit": "Up to 80% subsidy on international quality & green certifications",
    "benefitText": "Up to 80% subsidy on quality certification & clean tech",
    "benefits": [
      "Subsidy of 80% (Micro), 60% (Small), and 50% (Medium) on certification fees",
      "Additional 10% subsidy for women-owned or SC/ST-owned enterprises",
      "Concessional interest rates (0.5% reduction) on bank loans for ZED-certified units",
      "Exemption or concession in state processing fees and procurement preferences"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Udyam MSME Registration Certificate",
      "Enterprise PAN Card and Aadhaar Card of promoter",
      "Factory / Unit operating electricity bill and layout plan",
      "Production machinery details"
    ],
    "applicationProcess": [
      "Register on the ZED portal (zed.msme.gov.in)",
      "Take free online ZED pledge and complete self-assessment",
      "Schedule desktop and on-site audit by accredited certification body (QCI)",
      "Receive ZED certificate and immediate financial reimbursement"
    ],
    "providerUrl": "https://zed.msme.gov.in",
    "applyUrl": "https://zed.msme.gov.in"
  },
  {
    "id": 128,
    "name": "SFURTI (Scheme of Fund for Regeneration of Traditional Industries)",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": true,
    "femaleOnly": false,
    "shortDescription": "Financial grants up to ₹5 Crores for traditional khadi, coir, kalamkari, and handicraft artisan clusters in rural areas.",
    "description": "SFURTI organizes traditional artisans and craftspersons into sustainable industrial clusters to enhance competitiveness, market linkages, and design innovation. The Ministry of MSME provides grants up to ₹2.5 Crores for regular clusters (500 artisans) and up to ₹5 Crores for major clusters, funding Common Facility Centres (CFCs), raw material banks, and modern packaging.",
    "benefit": "Government grant up to ₹5 Crores for rural artisan clusters",
    "benefitText": "Up to ₹5 Crore grant for artisan Common Facility Centres",
    "benefits": [
      "Full capital funding for advanced Common Facility Centres (CFC) and shared modern machinery",
      "Design development, brand building, packaging, and direct e-commerce onboarding",
      "Directly elevates wages and working conditions of traditional handloom and handicraft clusters"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural only"
    },
    "documents": [
      "Artisan Group / Producer Company / SHG Federation registration",
      "Artisan members' Aadhaar Cards and Pehchan / Artisan IDs",
      "Detailed Project Report (DPR) prepared by Technical Agency (TA)",
      "Land lease/ownership deed for Common Facility Centre"
    ],
    "applicationProcess": [
      "Implementing Agency (NGO/Federation) prepares cluster concept proposal",
      "Submit proposal through Nodal Agencies (KVIC, Coir Board, NIMSME) to Ministry of MSME",
      "Project Sanctioning Committee (PSC) accords approval",
      "Grant released in tranches to execute cluster infrastructure"
    ],
    "providerUrl": "https://sfurti.msme.gov.in",
    "applyUrl": "https://sfurti.msme.gov.in"
  },
  {
    "id": 129,
    "name": "Weaver MUDRA Scheme (Concessional Credit for Handlooms)",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": 65,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Concessional loans up to ₹2,00,000 at 6% interest with 20% margin money subsidy (up to ₹25,000) for handloom weavers.",
    "description": "The Weaver MUDRA Scheme meets the credit requirements of individual handloom weavers and master weavers across famous handloom clusters like Mangalagiri, Dharmavaram, Uppada, and Madhavaram. The scheme provides working capital loans up to ₹2 Lakhs at an effective 6% interest rate (with 7% interest subvention for 3 years) and a direct margin money grant of 20% (up to ₹25,000).",
    "benefit": "Loans up to ₹2 Lakhs at 6% interest + up to ₹25,000 margin grant",
    "benefitText": "6% concessional loan + ₹25,000 margin money grant for weavers",
    "benefits": [
      "20% margin money capital subsidy (maximum ₹25,000) credited directly to loan account",
      "7% interest subvention borne by government, reducing borrower interest to approximately 6%",
      "Credit guarantee cover under CGTMSE borne entirely by the Government of India",
      "MUDRA Weaver RuPay card issued for convenient raw material purchase"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and PAN Card of the weaver",
      "Weaver Pehchan Card / Handloom Department Registration ID",
      "Bank Account Passbook",
      "Quotation for yarn, dye, or loom accessories"
    ],
    "applicationProcess": [
      "Submit application to Assistant Director of Handlooms & Textiles or Weavers Service Centre",
      "Handlooms Department validates active weaver status and forwards to bank branch",
      "Bank issues loan sanction and claims margin money subsidy through the portal",
      "Subsidy credited and Weaver RuPay card activated"
    ],
    "providerUrl": "https://handlooms.nic.in",
    "applyUrl": "https://handlooms.nic.in"
  },
  {
    "id": 130,
    "name": "YSR Navodayam (MSME One-Time Restructuring AP)",
    "state": "Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "Comprehensive financial restructuring and audit fee reimbursement for stressed MSME units in Andhra Pradesh.",
    "description": "YSR Navodayam is a unique state initiative to revive stressed micro, small, and medium enterprises facing insolvency or liquidity strain. The state government coordinates with commercial banks and RBI for One-Time Restructuring (OTR) of stressed MSME accounts without classifying them as NPAs, reimbursing 50% of the techno-economic viability (TEV) audit fee up to ₹2 Lakhs.",
    "benefit": "Debt restructuring without NPA downgrade + 50% TEV audit subsidy",
    "benefitText": "Bank loan restructuring & audit fee reimbursement for MSMEs",
    "benefits": [
      "Protects viable MSME units from bankruptcy and debt recovery proceedings",
      "Restructures loan repayment schedules with extended moratoriums",
      "Reimburses 50% of the cost of preparing Techno-Economic Feasibility reports (up to ₹2 Lakhs)"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Udyam MSME Registration Certificate",
      "Bank loan account statements showing stressed / SMA status",
      "Audited financial statements and provisional balance sheets",
      "Aadhaar and PAN of enterprise promoters"
    ],
    "applicationProcess": [
      "Apply through the Single Desk Portal (apindustries.gov.in) under YSR Navodayam",
      "District Industries Centre (DIC) coordinates with the lending bank branch",
      "Bank processes restructuring package under RBI OTR guidelines",
      "Government releases audit assistance upon restructuring approval"
    ],
    "providerUrl": "https://apindustries.gov.in",
    "applyUrl": "https://apindustries.gov.in"
  },
  {
    "id": 131,
    "name": "ASPIRE Scheme (Promotion of Innovation & Rural Industry)",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": true,
    "femaleOnly": false,
    "shortDescription": "Grants up to ₹1 Crore for establishing Livelihood Business Incubators (LBI) in agro-rural industries and rural manufacturing.",
    "description": "ASPIRE sets up a network of technology centers and Livelihood Business Incubators (LBIs) across rural districts to accelerate entrepreneurship and generate employment in agro-rural industries. The scheme provides up to ₹1 Crore financial assistance to government agencies and ₹75 Lakhs to private institutions to procure modern plant and machinery for training rural entrepreneurs.",
    "benefit": "Capital grant up to ₹1 Crore for rural business incubation centers",
    "benefitText": "Up to ₹1 Crore grant for rural livelihood incubators",
    "benefits": [
      "State-of-the-art incubation facilities for food processing, herbal products, and rural crafts",
      "Provides hands-on business incubation and machine operation training to rural youth",
      "Direct linkage with seed capital and commercial bank financing"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural only"
    },
    "documents": [
      "Registration documents of the host institution / university / society",
      "Detailed project report proposing specific rural business sectors",
      "Proof of required physical built-up infrastructure (minimum 3,000 sq.ft)",
      "Audited accounts of last 3 years"
    ],
    "applicationProcess": [
      "Submit application on the ASPIRE portal (aspire.msme.gov.in)",
      "Project evaluated by Screening Committee at Ministry of MSME",
      "Funds released to host institution for procurement of incubation machinery and batch training"
    ],
    "providerUrl": "https://aspire.msme.gov.in",
    "applyUrl": "https://aspire.msme.gov.in"
  },
  {
    "id": 132,
    "name": "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    "state": "Central / Andhra Pradesh",
    "category": "Small Business",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
    "shortDescription": "35% credit-linked capital subsidy up to ₹10 Lakhs for individual food processing units and ₹40,000 seed capital for SHG members.",
    "description": "Under the PMFME scheme (Ministry of Food Processing Industries), unorganized micro food processing units (mango jelly, spices, pickles, millet flour, dairy, aqua processing) receive 35% credit-linked capital subsidy up to ₹10 Lakhs for modernizing machinery and packaging. Self-Help Group members engaged in food processing also receive ₹40,000 seed capital per member for working capital and small tools.",
    "benefit": "35% credit-linked capital subsidy up to ₹10 Lakhs + ₹40,000 seed capital",
    "benefitText": "35% subsidy up to ₹10 Lakhs for food processing units",
    "benefits": [
      "35% capital subsidy on eligible project cost up to a maximum of ₹10,00,000",
      "Seed capital assistance of ₹40,000 per SHG member for working capital and minor tools",
      "Support for FSSAI registration, ISO quality certification, nutritional testing, and brand packaging",
      "Alignment with One District One Product (ODOP) focus commodities"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
      "area": "Rural / Urban"
    },
    "documents": [
      "Aadhaar Card and PAN Card of applicant",
      "Udyam MSME Registration Certificate",
      "Detailed Project Report (DPR) prepared by District Resource Person (DRP)",
      "Bank Account Statement for past 6 months",
      "FSSAI license or registration slip"
    ],
    "applicationProcess": [
      "Contact District Resource Person (DRP) at District Industries Centre (DIC)",
      "Apply online on PMFME portal (pmfme.mofpi.gov.in)",
      "DRP assists in preparing DPR and bank loan documentation",
      "Bank sanctions loan and subsidy is credited to beneficiary loan account as back-ended subsidy"
    ],
    "providerUrl": "https://pmfme.mofpi.gov.in",
    "applyUrl": "https://pmfme.mofpi.gov.in"
  },
  {
    "id": 133,
    "name": "Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS)",
    "state": "Central / Andhra Pradesh",
    "category": "Employment & Skills",
    "minAge": 18,
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "ruralOnly": true,
    "femaleOnly": false,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
    "maxAge": null,
    "maxIncome": null,
    "ruralOnly": true,
    "femaleOnly": false,
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
      "maxAge": null,
      "gender": "All",
      "maxIncome": null,
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
    "ruralOnly": false,
    "femaleOnly": true,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "ruralOnly": false,
    "femaleOnly": false,
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
    "maxIncome": null,
    "ruralOnly": false,
    "femaleOnly": false,
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
      "maxIncome": null,
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
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { schemes };
}

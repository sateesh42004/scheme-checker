# assemble_data_js.py
# Combines all scheme modules and writes js/data.js

import json
import generate_all_schemes
import schemes_education
import schemes_health
import schemes_housing
import schemes_women
import schemes_social_pension
import schemes_msme_livelihood
import schemes_skills_welfare

all_schemes = []

# Base 1 to 20
all_schemes.extend(generate_all_schemes.schemes)
print(f"Base schemes: {len(all_schemes)}")

# Agriculture 21 to 35
all_schemes.extend(generate_all_schemes.new_schemes)
print(f"After Agriculture: {len(all_schemes)}")

# Education 36 to 55
all_schemes.extend(schemes_education.education_schemes)
print(f"After Education: {len(all_schemes)}")

# Health 56 to 73
all_schemes.extend(schemes_health.health_schemes)
print(f"After Health: {len(all_schemes)}")

# Housing 74 to 85
all_schemes.extend(schemes_housing.housing_schemes)
print(f"After Housing: {len(all_schemes)}")

# Women 86 to 101
all_schemes.extend(schemes_women.women_schemes)
print(f"After Women: {len(all_schemes)}")

# Social Pension 102 to 118
all_schemes.extend(schemes_social_pension.social_pension_schemes)
print(f"After Social Pensions: {len(all_schemes)}")

# MSME 119 to 132
all_schemes.extend(schemes_msme_livelihood.msme_schemes)
print(f"After MSME: {len(all_schemes)}")

# Skills & Welfare 133 to 142
all_schemes.extend(schemes_skills_welfare.skills_welfare_schemes)
print(f"Total schemes collected: {len(all_schemes)}")

# Validation checks
seen_ids = set()
errors = []

for idx, s in enumerate(all_schemes):
    expected_id = idx + 1
    actual_id = s.get("id")
    if actual_id != expected_id:
        errors.append(f"Scheme at index {idx} has ID {actual_id}, expected {expected_id} ({s.get('name')})")
    if actual_id in seen_ids:
        errors.append(f"Duplicate ID {actual_id} found in {s.get('name')}")
    seen_ids.add(actual_id)

    # Required fields
    for field in ["id", "name", "state", "category", "shortDescription", "description", "benefit", "benefitText", "benefits", "eligibility", "documents", "applicationProcess", "providerUrl", "applyUrl"]:
        if field not in s or s[field] is None:
            errors.append(f"Missing field {field} in scheme {actual_id} ({s.get('name')})")

    # Arrays
    if not isinstance(s.get("benefits"), list) or len(s.get("benefits", [])) < 2:
        errors.append(f"Benefits list too short in scheme {actual_id}")
    if not isinstance(s.get("documents"), list) or len(s.get("documents", [])) < 1:
        errors.append(f"Documents list empty in scheme {actual_id}")
    if not isinstance(s.get("applicationProcess"), list) or len(s.get("applicationProcess", [])) < 2:
        errors.append(f"ApplicationProcess list too short in scheme {actual_id}")

    # Eligibility dict
    elig = s.get("eligibility", {})
    for e_field in ["minAge", "maxAge", "gender", "maxIncome", "area"]:
        if e_field not in elig:
            errors.append(f"Missing eligibility field {e_field} in scheme {actual_id}")

if errors:
    print(f"VALIDATION FAILED with {len(errors)} errors:")
    for err in errors[:20]:
        print(" -", err)
    exit(1)
else:
    print("ALL VALIDATION CHECKS PASSED PERFECTLY!")

# Build JavaScript output
json_content = json.dumps(all_schemes, indent=2, ensure_ascii=False)
js_content = f"""const schemes = {json_content};

if (typeof module !== "undefined" && module.exports) {{
  module.exports = {{ schemes }};
}}
"""

with open("js/data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully wrote {len(all_schemes)} schemes to js/data.js!")

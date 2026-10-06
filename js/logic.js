function computeEligibility(formData) {
  const age = Number(formData.age);
  const income = Number(formData.annualIncome);
  const isRural = formData.ruralUrban === "rural";

  return schemes.filter(s => {
    if (s.minAge && age < s.minAge) return false;
    if (s.maxAge && age > s.maxAge) return false;
    if (s.maxIncome && income > s.maxIncome) return false;
    if (s.femaleOnly && formData.gender !== "female") return false;
    if (s.ruralOnly && !isRural) return false;
    return true;
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { computeEligibility };
}
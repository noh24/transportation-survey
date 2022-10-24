function submitCheckBox (e) {
  e.preventDefault();
  const resultHeading = document.createElement("h2");
  resultHeading.append("You used these modes of tranportation:");
  document.body.append(resultHeading);

  const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
  const userSelectionsArray = Array.from(userSelections);
  userSelectionsArray.forEach(function(input) {
    const para = document.createElement("p");
    para.append(input.value);
    document.body.append(para);
  });
}
const checkboxForm = document.querySelector("form#transportation-survey");
checkboxForm.addEventListener("submit", submitCheckBox);


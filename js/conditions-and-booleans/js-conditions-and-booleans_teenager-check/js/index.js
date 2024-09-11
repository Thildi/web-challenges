const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Check if the age is between 13 and 19
  const isTeen = age >= 13 && age <= 19;

  // Use the ternary operator to set the appropriate message
  output.textContent = isTeen ? "You are a teen." : "You are not a teen.";
});

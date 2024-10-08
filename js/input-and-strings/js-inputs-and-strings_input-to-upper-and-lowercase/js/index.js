console.clear();

/*

Convert the input value to lowercase when clicking a second button

– [x] Add a second button to the index.html . It should have a down arrow (&darr;) as text content.
– [x] Assign the second button to a variable.
– [x] Add an event listener to the second button and have the input value converted to lowercase when it is clicked.

Hint: Access the value by using `.value` on the input element

*/

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowerCaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", () => {
  input.value = input.value.toLowerCase();
});

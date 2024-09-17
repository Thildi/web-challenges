console.clear();

// DOM-Elemente auswählen
const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

// Mathematische Operationen definieren
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Formulardaten erfassen und in ein Objekt umwandeln
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Eingabewerte in Zahlen umwandeln
  const a = Number(data.numberA);
  const b = Number(data.numberB);

  let result;

  switch (data.operator) {
    case "addition":
      result = add(a, b);
      break;
    case "subtraction":
      result = subtract(a, b);
      break;
    case "multiplication":
      result = multiply(a, b);
      break;
    case "division":
      // Sicherstellen, dass Division durch 0 nicht durchgeführt wird:
      result = b === 0 ? "Error: Division by zero" : divide(a, b);
      break;
    default:
      result = "Invalid operator";
  }

  // Ergebnis anzeigen
  resultOutput.textContent = result;
});

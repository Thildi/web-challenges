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
  const operator = data.operator;

  let result;

  // Berechnung basierend auf dem ausgewählten Operator durchführen
  if (operator === "addition") {
    result = add(a, b);
  } else if (operator === "subtraction") {
    result = subtract(a, b);
  } else if (operator === "multiplication") {
    result = multiply(a, b);
  } else if (operator === "division") {
    // Überprüfung auf Division durch Null hinzugefügt
    result = b === 0 ? "Fehler: Division durch Null" : divide(a, b);
  } else {
    result = "Ungültiger Operator";
  }

  // Ergebnis anzeigen
  resultOutput.textContent = result;
});

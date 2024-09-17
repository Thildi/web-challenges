console.clear();

//Selektiere wichtige DOM-Elemente:

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numA = document.querySelector('[data-js="number-a"]');
const numB = document.querySelector('[data-js="number-b"]');

//Definitionen der mathematischen Funktionen:

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

//Füge einen Event-Listener zum Formular hinzu:
form.addEventListener("submit", (event) => {
  //Verhindere Standardverhalten des Formulars (Neuladen der Seite):
  event.preventDefault();

  // Deklariere eine Variable für das Ergebnis:
  let result;

  //Werte aus den Eingaben in Floats umwandeln, um auch mit Dezimalzahlen rechnen zu können:
  const a = parseFloat(numA.value);
  const b = parseFloat(numB.value);

  /*Der ausgewählte Operator wird durch die Radio-Buttons im Formular bestimmt. 
  mit diesem code finde ich heraus, welcher operator ausgewählt (checked) wurde:*/
  const selectedOperator = document.querySelector(
    'input[name="operator"]:checked'
  );

  //Überprüfe OB ein Operator überhaupt ausgewählt wurde, ansonsten Fehlermeldung:

  if (!selectedOperator) {
    resultOutput.textContent = "Please select an operator";
    return; //Beendet Funktion in diesem Fall vorzeitig
  }

  //Verwende eine "switch-Anweisung", um die richtige Operation basierend auf ausgewähltem Operator auszuführen:

  switch (selectedOperator.value) {
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

  //Zeige das Ergebnis im HTML-Element "resultOutput" an:
  resultOutput.textContent = result;
});

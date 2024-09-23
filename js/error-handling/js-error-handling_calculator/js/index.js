console.clear(); // Konsole leeren

const form = document.querySelector("form"); // Das Formular auswählen
const output = form.querySelector("output"); // Das Ausgabeelement auswählen

// Objekt mit den verfügbaren Rechenoperationen
const operations = {
  add: (a, b) => a + b, // Addition
  subtract: (a, b) => a - b, // Subtraktion
  multiply: (a, b) => a * b, // Multiplikation
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!"); // Fehler auslösen, wenn durch 0 geteilt wird
    }
    return a / b; // Division
  },
};

// Ereignislistener für das Formular, um bei der Einreichung zu reagieren
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Standardverhalten des Formulars verhindern
  const firstNumber = Number(event.target.firstNumber.value); // Ersten Zahlenwert abrufen
  const secondNumber = Number(event.target.secondNumber.value); // Zweiten Zahlenwert abrufen
  const operation = event.target.operation.value; // Die gewählte Operation abrufen

  try {
    // Berechnung ausführen und das Ergebnis anzeigen
    output.innerHTML = operations[operation](firstNumber, secondNumber);
    document.querySelector(".error").innerText = ""; // Vorherige Fehlermeldungen löschen
  } catch (error) {
    // Wenn ein Fehler auftritt (z.B. Teilen durch Null), wird eine Fehlerbehandlung ausgeführt
    output.innerHTML = "😫"; // Emoji anzeigen, wenn ein Fehler auftritt
    document.querySelector(".error").innerHTML = error.message; // Fehlermeldung anzeigen
  }
});

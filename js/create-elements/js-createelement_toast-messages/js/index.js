console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

// Event Listener für den "Add toast message"-Button
addButton.addEventListener("click", () => {
  // Ein neues <li>-Element erstellen, das eine Toast-Nachricht darstellen wird
  const newToast = document.createElement("li");

  // Füge der neuen Toast-Nachricht die CSS-Klasse hinzu, um sie korrekt zu formatieren
  newToast.classList.add("toast-container__message");

  // Setze den Textinhalt der neuen Toast-Nachricht
  newToast.textContent = "I'm a new toast message";

  // Füge die neue Toast-Nachricht als letztes Kind zum Toast-Container hinzu
  toastContainer.appendChild(newToast);
  // Erklärung: appendChild() fügt das neue <li>-Element am Ende des Containers hinzu
});

// Event Listener für den "Clear all toast messages"-Button
clearButton.addEventListener("click", () => {
  // Setzt den innerHTML-Inhalt des Containers auf einen leeren String
  // Dies entfernt alle Toast-Nachrichten, indem der gesamte Inhalt gelöscht wird
  toastContainer.innerHTML = "";
  // Erklärung: innerHTML = "" entfernt alle Kinder des Containers
});

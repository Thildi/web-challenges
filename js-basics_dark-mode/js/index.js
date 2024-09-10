// Löscht alle bisherigen Konsolenausgaben, um eine saubere Ausgabe zu gewährleisten
console.clear();

// Selektiert das body-Element basierend auf dem data-js-Attribut
// Hier wird davon ausgegangen, dass das Body-Element das Attribut 'data-js="body"' hat
const bodyElement = document.querySelector('[data-js="body"]');

// Selektiert den Button für den Dunkelmodus, der das data-js-Attribut 'dark-mode-button' hat
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

// Selektiert den Button für den Lichtmodus, der das data-js-Attribut 'light-mode-button' hat
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');

// Selektiert den Umschalt-Button, der das data-js-Attribut 'toggle-button' hat
const toggleButton = document.querySelector('[data-js="toggle-button"]');

// Fügt einen Event-Listener hinzu, der auf das "click"-Ereignis des Dunkelmodus-Buttons reagiert
darkModeButton.addEventListener("click", () => {
  // Fügt die Klasse "dark" zum bodyElement hinzu
  // Diese Klasse könnte CSS-Stile aktivieren, die den Dunkelmodus darstellen
  bodyElement.classList.add("dark");

  // Gibt eine Nachricht in der Konsole aus, um anzuzeigen, dass der Dunkelmodus aktiviert wurde
  console.log("Switched to dark mode");
});

// Fügt einen Event-Listener hinzu, der auf das "click"-Ereignis des Lichtmodus-Buttons reagiert
lightModeButton.addEventListener("click", () => {
  // Entfernt die Klasse "dark" vom bodyElement
  // Diese Aktion könnte die Rückkehr zu einem hellen Modus bewirken, wenn die Klasse "dark" CSS-Stile für den Dunkelmodus definiert
  bodyElement.classList.remove("dark");

  // Gibt eine Nachricht in der Konsole aus, um anzuzeigen, dass der Lichtmodus aktiviert wurde
  console.log("Switched to light mode");
});

// Fügt einen Event-Listener hinzu, der auf das "click"-Ereignis des Umschalt-Buttons reagiert
toggleButton.addEventListener("click", () => {
  // Wechselt die Klasse "dark" am bodyElement ein oder aus
  // Wenn die Klasse "dark" vorhanden ist, wird sie entfernt; wenn sie nicht vorhanden ist, wird sie hinzugefügt
  // Dies ermöglicht das Umschalten zwischen Dunkelmodus und Lichtmodus
  bodyElement.classList.toggle("dark");

  // Gibt eine Nachricht in der Konsole aus, um anzuzeigen, dass der Modus umgeschaltet wurde
  console.log("Toggled mode");
});

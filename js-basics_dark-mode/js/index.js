console.clear();

// Selektiert das body-Element mit dem Attribut 'data-js="body"'.

const bodyElement = document.querySelector('[data-js="body"]');

// Selektiert alle Buttons mit ihren jeweiligen 'data-js' Attributen
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

// Event-Listener für den Dark Mode Button
darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark"); // Fügt die Klasse "dark" hinzu
  console.log("Switched to dark mode");
});

// Event-Listener für den Light Mode Button
lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark"); // Entfernt die Klasse "dark"
  console.log("Switched to light mode");
});

// Event-Listener für den Toggle Button
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark"); // Wechselt zwischen "dark" und "light" Modus
  console.log("Toggled mode");
});

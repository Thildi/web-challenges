import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "😁" : "😩"}</h1>;
}

/* Es ist zwar schön, das so direkt im JSX zu schrieben, bei komplexeren Anwendungen sollte
man aber Variablen deklarieren für bessere Lesbarkeit, Wiederverwendbarkeit, bessere Fehlerbehandlung
Trennung von Logik und Darstellung und zu Debugging-Zwecken mit concole.log() 

Hier der alte Code, bei dem Logik und Darstellung getrennt waren:
function Smiley({ isHappy }) {
  const displayedSmiley = isHappy === true ? "😁" : "😩";
  return <h1>{displayedSmiley}</h1>;
}
*/

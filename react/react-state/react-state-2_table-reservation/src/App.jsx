import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0); //State variable aus counter in app verschoben

  //Zwei Hilfsfunktionen um anzahl anzupassen bei onClick auf + oder -:

  const handleAdding = () => {
    setPeople(people + 1);
  };

  const handleSubtracting = () => {
    // Sicherstellen, dass die Personenanzahl nicht negativ wird
    if (people > 0) {
      setPeople(people - 1);
    }
  };
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      {/* Funktionen als Props an die Counter-Komponente übergeben: */}
      <Counter onAdd={handleAdding} onSubstract={handleSubtracting} />
      {/* Dynamische Anzeige der Personenanzahl: */}
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}

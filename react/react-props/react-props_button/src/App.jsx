import React from "react";
import "./styles.css";

export default function App() {
  // Eine einzige handleClick-Funktion
  function handleClick(buttonName) {
    console.log(`You clicked the ${buttonName} button!`);
  }

  return (
    <>
      <Button
        text="Click me!"
        backgroundColor="lightgreen"
        color="blue"
        disabled={false}
        onClick={() => handleClick("green")}
      />
      <Button
        text="Click me too!"
        backgroundColor="hotpink"
        color="black"
        disabled={false}
        onClick={() => handleClick("pink")}
      />
    </>
  );
}

function Button({ color, backgroundColor, disabled, text, onClick }) {
  return (
    <button
      style={{ color: color, backgroundColor: backgroundColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

/* Mehrere Buttons in Fragment  (<>...</>) definiert. "disabled" bleibt derzeit explizit mit Boolean-Wert-Zuweisung, 
Parameter zur handleClick-function hinzugefügt um je nach Button eine andere message zu loggen */

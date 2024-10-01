import React from "react";
import "./styles.css";

export default function App() {
  function handleClick1() {
    console.log("You clicked the green button!");
  }
  function handleClick2() {
    console.log("You cklicked the pink button!");
  }
  return (
    <>
      <Button
        text="Click me!"
        backgroundColor="lightgreen"
        color="blue"
        disabled={false}
        onClick={handleClick1}
      />
      <Button
        text="Click me too!"
        backgroundColor="hotpink"
        color="black"
        disabled={false}
        onClick={handleClick2}
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

/* Mehrere Buttons in Fragment  (<>...</>) definiert. "disabled" bleibt derzeit explizit mit Boolean-Wert-Zuweisung, zweite handleClick-Funktion definiert  */

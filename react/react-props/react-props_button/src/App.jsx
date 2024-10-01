import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked the button!");
  }
  return (
    <Button
      text="Click me"
      backgroundColor="lightgreen"
      color="blue"
      disabled={false}
      onClick={handleClick}
    />
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

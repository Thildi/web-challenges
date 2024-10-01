import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  const displayedSmiley = isHappy === true ? "😁" : "😩";
  return <span>{displayedSmiley}</span>;
}

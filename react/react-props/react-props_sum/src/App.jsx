import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={10} valueB={2} />;
}

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return (
    <p>
      {valueA} + {valueB} = {result}
    </p>
  );
}

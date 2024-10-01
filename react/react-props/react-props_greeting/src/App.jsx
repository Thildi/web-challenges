import "./styles.css";

export default function App() {
  return <Greeting name="Thildi" />;
}

function Greeting({ name }) {
  const greetingMessage = name === "Coach" ? "Hello, Coach" : `Hello, ${name}!`;

  return <p>{greetingMessage}</p>;
}

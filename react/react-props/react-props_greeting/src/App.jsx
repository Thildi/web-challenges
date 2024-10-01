import "./styles.css";

export default function App() {
  return <Greeting name="Thildi" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Coach" ? "Coach" : name}!</h1>;
}

import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 1339,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1331,
      name: "🍍 Pineapple",
      color: "yellow",
    },
    {
      id: 1332,
      name: "🍏 Apple",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}

import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "lightblue",
    },
    {
      id: 1338,
      name: "🍒 Cherry",
      color: "lightgreen",
    },
    {
      id: 1339,
      name: "🍓 Strawberry",
      color: "lightpink",
    },
    {
      id: 1331,
      name: "🍍 Pineapple",
      color: "hotpink",
    },
    {
      id: 1332,
      name: "🍏 Apple",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}

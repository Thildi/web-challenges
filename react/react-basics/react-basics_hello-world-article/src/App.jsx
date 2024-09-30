import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>Hier ein kleiner Beispieltext in React</p>
      <p>Hier ein zweiter!</p>
      <ul>
        <li>Erstes Listenelement</li>
        <li>Zweites Listenelement</li>
        <li>Drittes Listenelement</li>
      </ul>
      <p>Hier noch ein Beispielfoto</p>
      <img src="https://picsum.photos/200" />
    </article>
  );
}

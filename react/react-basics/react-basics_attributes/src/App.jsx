import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hello and Welcome!</h2>
      <label htmlFor="nameInput">Your Name:</label>
      <input id="nameInput" type="text" className="article__input"></input>
      <a
        href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
        className="article__link"
        target="blank"
      >
        Learn more about React on Wikipedia!
      </a>
    </article>
  );
}

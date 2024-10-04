export default function Counter({ onAdd, onSubstract }) {
  //Props, (hier: Hilfsfunktionen) aus App erhalten
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAdd} //Funktion zum Erhöhen aufrufen
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onSubstract} //Funktion zum Verringern aufrufen
        >
          -
        </button>
      </div>
    </>
  );
}

console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset starContainer vor rendering:
  starContainer.innerHTML = "";

  /*for (initialisierung; bedingung; inkrement) {auszuführender codeblock}
   */

  for (let i = 1; i <= 5; i++) {
    //Erstelle 5 img elemente, die später die Bild src erhalten im if-Else-Block:
    const star = document.createElement("img");

    /* SOLANGE "i" bei jeder Iteration kleiner als die Anzahl von filledStars ist: 
    Füge zu den bereits iterierten Sternen das Bild hinzu, dass den stern ausgefüllt zeigt:
    Der if-else-Block verwendet den Schleifenindex i, um zu entscheiden, ob der aktuelle Stern ausgefüllt oder leer sein soll. 
    Die Anzahl der ausgefüllten Sterne wird durch den filledStars-Wert bestimmt, und die Schleife sorgt dafür, dass diese Entscheidung für 
    jeden einzelnen Stern getroffen wird.
    filledStars = 3:
    Für i = 1: 1 <= 3 ist true, also wird der erste Stern ausgefüllt (star-filled.svg).
    Für i = 2: 2 <= 3 ist true, also wird der zweite Stern ausgefüllt (star-filled.svg).
    Für i = 3: 3 <= 3 ist true, also wird der dritte Stern ausgefüllt (star-filled.svg).
    Für i = 4: 4 <= 3 ist false, also wird der vierte Stern leer (star-empty.svg).
    Für i = 5: 5 <= 3 ist false, also wird der fünfte Stern leer (star-empty.svg).
    Hier die Umsetzung:*/
    if (i <= filledStars) {
      star.src = "assets/star-filled.svg";
    } else {
      star.src = "assets/star-empty.svg";
    }

    star.addEventListener("click", () => {
      /*i, der Wert des Sterns, auf den geklickt wurde, wird an renderStars übergeben als "filledStars-Wert", 
      und die Funktion rendert die Anzahl der gefüllten Sterne basierend auf diesem Wert. */
      renderStars(i);
    });

    starContainer.append(star);
  }
}

renderStars(0);

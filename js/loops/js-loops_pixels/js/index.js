const pixelValues = [
  // Zeile 1
  [
    "#abcccc",
    "#9bb9b7",
    "#b8c7c9",
    "#a5c5c5",
    "#a8c9c9",
    "#99b9c2",
    "#9bb9b7",
    "#9bb9b7",
    "#92afb9",
    "#9bb9b7",
  ],
  // Zeile 2
  [
    "#9bb9b7",
    "#91a8b9",
    "#9bb9b7",
    "#9bb9b7",
    "#91b9b4",
    "#8eb99b",
    "#9bb9b7",
    "#9bb9b7",
    "#89b9a9",
    "#9bb9b7",
  ],
  // Zeile 3
  [
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b6",
    "#9bb9b7",
    "#9bb9b7",
    "#ec7f5a",
    "#9bb9b7",
    "#9bb9b7",
  ],
  // Zeile 4
  [
    "#9bb9b7",
    "#9bb9b7",
    "#ec4811",
    "#ec4811",
    "#ec6a3e",
    "#9bb9b7",
    "#e05334",
    "#ec4811",
    "#9bb9b7",
    "#9bb9b7",
  ],
  // Zeile 5
  [
    "#9bb9b7",
    "#ed4913",
    "#160601",
    "#ec4811",
    "#fe4d13",
    "#ec4811",
    "#ec4811",
    "#ec7e53",
    "#9bb9b7",
    "#94abb9",
  ],
  // Zeile 6
  [
    "#9bb9b7",
    "#ec590b",
    "#ec4812",
    "#d34010",
    "#ec4811",
    "#ec4811",
    "#ec4811",
    "#ec815b",
    "#9bb9b7",
    "#9bb9b7",
  ],
  // Zeile 7
  [
    "#9bb9b7",
    "#9bb9b7",
    "#ec4811",
    "#ec4811",
    "#b8370d",
    "#9bb9b7",
    "#f7723e",
    "#ec4811",
    "#9bb4c0",
    "#9bb9b7",
  ],
  // Zeile 8
  [
    "#96a8b9",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#98b9a1",
    "#9bb9b7",
    "#ec7745",
    "#9bb9b7",
    "#9bb9b7",
  ],
  // Zeile 9
  [
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#91b99c",
    "#9bb9b7",
    "#95b2b2",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9aacb9",
  ],
  // Zeile 10
  [
    "#9bb9b7",
    "#87b0b6",
    "#9bb9b7",
    "#9bb9b7",
    "#92afaf",
    "#8aa5a5",
    "#859f9f",
    "#8eaaaa",
    "#a2b9a7",
    "#9bb9b7",
  ],
];
const canvas = document.querySelector('[data-js="canvas"]');

/*
Use the color values in the array `pixelValues` to create "pixel" elements and append them to the `canvas` element.

- use `for` loops to generate the pixel elements
- pixels should be a `div` element with the class `pixel` and the background color set to respective color from the `pixelValues` array.
- You can append all pixels directly to the canvas, no need for extra row grouping etc.
- Hint: The colors are stored in Arrays inside another Array. How can you access these values with for loops?

Switch to the `./js/index.js` file and make something great happen! */

// Rufe die Funktion auf, um die Pixel zu erstellen
createPixels();

function createPixels() {
  // Schleife über jede Zeile im pixelValues Array:
  for (let row = 0; row < pixelValues.length; row++) {
    // Schleife über jede Spalte in der aktuellen Zeile des Arrays:
    for (let column = 0; column < pixelValues[row].length; column++) {
      const pixelColor = pixelValues[row][column];
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      pixel.style.backgroundColor = pixelColor;
      canvas.appendChild(pixel);
    }
  }
}

/*Open the [index.js](./index.js). You find 3 elements that are generated: A circle, a square and a pentagon. If one of the elements is clicked the color changes to gray. Let's use the `getRandomColor` function to make the elements more colorful!

- import the function `getRandomColor` from the [utils/randomColor.js](./utils/randomColor.js) file.
- use the function inside all three event listeners and apply the returned color to the backgroundColor.

> 💡 Hint: if it doesn't work you might need to change something inside the `index.html` regarding the script tag ;)*/

import getRandomColor from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  const randomColor = getRandomColor();
  circle.style.backgroundColor = randomColor;
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  const randomColor = getRandomColor();
  square.style.backgroundColor = randomColor;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  const randomColor = getRandomColor();
  pentagon.style.backgroundColor = randomColor;
});

root.append(circle, square, pentagon);

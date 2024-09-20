import getRandomColor from "../../utils/randomColor.js";

export default function Square() {
  const root = document.getElementById("root");
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
  });
  return square;
}

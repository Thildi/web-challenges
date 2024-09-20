import getRandomColor from "../../utils/randomColor.js";

export default function Circle() {
  const root = document.getElementById("root");

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    const randomColor = getRandomColor();
    circle.style.backgroundColor = randomColor;
  });

  return circle;
}

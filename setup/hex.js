const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const theColor = ["#f1f5f8", "Rgba(133,122,200)", "Red", "#F15025", "Green"];

const mainElement = document.querySelector("main");
const btnElement = document.querySelector(".btn");
const backgroundColorTitle = document.querySelector(".color");
// console.log();
btnElement.addEventListener("click", (e) => {
  const aRandomlenght = Math.floor(Math.random() * theColor.length);
  const theRandomColor = theColor[aRandomlenght];
  console.log(e);
  console.log(aRandomlenght);
  mainElement.setAttribute("style", `background:${theRandomColor}`);
  backgroundColorTitle.textContent = theRandomColor;
});

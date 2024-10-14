let gridDimension = 100;

let squareSize = (900 / gridDimension / 900) * 100;

for (let y = 0; y < gridDimension; y++) {
  const container = document.querySelector(".container");
  const columns = document.createElement("div");
  columns.classList.add("column");
  columns.style.cssText = `display: flex; flex: 1; `;
  container.appendChild(columns);
}

const row = document.querySelectorAll(".column");
row.forEach((row) => {
  for (let x = 0; x < gridDimension; x++) {
    const square = document.createElement("div");
    square.classList.add("pixel");
    square.style.cssText = `box-sizing: border-box; width: ${squareSize}%; border: 1px solid lightgrey;`;
    row.appendChild(square);
  }
});

const pixel = document.querySelectorAll(".pixel");
pixel.forEach((pixel) => {
  pixel.addEventListener("mouseenter", () => {
    let bgColor = randomRgbColor();
    pixel.style.backgroundColor = bgColor;
  });
});

function randomRgbColor() {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return "rgb(" + r + "," + g + "," + b + ")";
}

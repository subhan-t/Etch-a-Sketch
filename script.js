let gridDimension = 5;

let squareSize = (960 / gridDimension / 960) * 100;

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

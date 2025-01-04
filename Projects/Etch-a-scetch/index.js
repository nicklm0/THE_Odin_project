// Select DOM elements
const body = document.body;
const container = document.querySelector(".grid-container");
const gridSizeSlider = document.getElementById("grid-size");
const sizeLabel = document.getElementById("size-label");
const buttons = document.querySelectorAll("button");
const gridLineToggle = document.getElementById("toggle-grid-lines"); // The new checkbox to toggle grid lines

// Function to create the grid
function createGrid(size) {
  container.innerHTML = ""; // Clear the grid before creating a new one

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.style.backgroundColor = "white";
      square.classList.add("square");
      row.appendChild(square);
    }

    container.appendChild(row);
  }

  toggleGridLines(gridLineToggle.checked); // Toggle grid lines after creating the grid
}

// Initial grid size
createGrid(50);

// Function to set the color mode
function setColorMode(mode) {
  container.addEventListener("mouseover", function (e) {
    if (e.target && e.target.classList.contains("square")) {
      if (mode === "black") {
        e.target.style.backgroundColor = "black";
      } else if (mode === "rainbow") {
        const randomColor = getRandomColor();
        e.target.style.backgroundColor = randomColor;
      } else if (mode === "eraser") {
        e.target.style.backgroundColor = "white";
      }
    }
  });
}

// Function to get a random color
function getRandomColor() {
  let r, g, b;
  // Ensure that we don't get white (rgb(255, 255, 255))
  do {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  } while (r === 255 && g === 255 && b === 255); // If it's white, generate a new color

  return `rgb(${r}, ${g}, ${b})`;
}

// Function to clear the canvas
function clearCanvas() {
  const squares = container.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

// Function to update the grid size
function updateGridSize() {
  const gridSize = gridSizeSlider.value;
  sizeLabel.textContent = gridSize; // Update the label with the current grid size
  createGrid(gridSize); // Create a new grid with the updated size
}

// Function to toggle grid lines
function toggleGridLines(shouldShow) {
  const squares = container.querySelectorAll(".square");
  squares.forEach((square) => {
    if (shouldShow) {
      square.style.border = "0.5px solid #444"; // Show grid lines (light border)
    } else {
      square.style.border = "none"; // Hide grid lines
    }
  });
}

// Event listeners for buttons and slider
document
  .getElementById("btn-black")
  .addEventListener("click", () => setColorMode("black"));

document
  .getElementById("btn-rainbow")
  .addEventListener("click", () => setColorMode("rainbow"));

document
  .getElementById("btn-eraser")
  .addEventListener("click", () => setColorMode("eraser"));

document.getElementById("clear-canvas").addEventListener("click", clearCanvas);

gridSizeSlider.addEventListener("input", updateGridSize); // Update grid size when slider value changes

gridLineToggle.addEventListener("change", () => {
  toggleGridLines(gridLineToggle.checked); // Toggle grid lines based on checkbox status
});
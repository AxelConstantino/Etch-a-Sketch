let isMouseDown = false;

function createGrid(numRows, numCols) {
  const gridDiv = document.getElementById("grid");
  const totalCuadros = numRows * numCols;
  const cuadroSize = Math.min(gridDiv.clientWidth / numCols, gridDiv.clientHeight / numRows);
  gridDiv.innerHTML = "";

  for (let i = 0; i < totalCuadros; i++) {
    const cuadro = document.createElement("div");
    cuadro.className = "cuadro";
    cuadro.style.width = cuadroSize + "px";
    cuadro.style.height = cuadroSize + "px";
    cuadro.addEventListener("mousedown", () => {
      isMouseDown = true;
      changeColor(cuadro);
    });
    cuadro.addEventListener("mouseup", () => (isMouseDown = false));
    cuadro.addEventListener("mousemove", () => {
      if (isMouseDown) {
        changeColor(cuadro);
      }
    });
    gridDiv.appendChild(cuadro);
  }
}

function updateGrid() {
  const gridSize = parseInt(document.getElementById("gridSize").value);
  document.getElementById("gridSizeValue").textContent = gridSize;
  createGrid(gridSize, gridSize);
}

function changeColor(cuadro) {
  if (isMouseDown) {
    const selectedColor = document.getElementById("colorPicker").value;
    cuadro.style.backgroundColor = selectedColor;
  }
}

// Añadir evento input a la barra deslizante para actualizar el número en tiempo real
const gridSizeInput = document.getElementById("gridSize");
gridSizeInput.addEventListener("input", () => {
  document.getElementById("gridSizeValue").textContent = gridSizeInput.value;
});

// Inicializar la cuadrícula
const initialSize = 16;
createGrid(initialSize, initialSize);
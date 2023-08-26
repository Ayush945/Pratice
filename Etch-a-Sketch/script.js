const gridContainer = document.getElementById('grid')
const clearButton = document.getElementById("clear-button");
const colorButton = document.getElementById("color-button");
const eraserButton = document.getElementById("eraser");
const changeButton = document.getElementById("change-color");

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        gridContainer.appendChild(pixel);
    }

};

function clearGrid() {

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "#fff";
        pixel.removeEventListener("mouseover", colorGrid);
    })

}

function colorGrid() {

    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        })

    })


}
function eraser() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "white";
        })
    })
}
function changeGrid() {
    const pixels = document.querySelectorAll(".pixel");
    const randomColor = getRandomRainbowColor();
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = randomColor;
        })
    })
}

function getRandomRainbowColor() {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    return randomColor;
}

changeButton.addEventListener("click", changeGrid);
clearButton.addEventListener("click", clearGrid);
colorButton.addEventListener("click", colorGrid);
eraserButton.addEventListener("click", eraser);
createGrid(16)
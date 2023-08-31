const container = document.getElementById('game-container');

function initializeGame() {
    const cells = [];
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener("click", () => playerMove(cell));
        container.append(cell);
        cells.push(cell);
    }
    return cells;
}

function playerMove(cell) {
    if (cell.textContent === "") {
        cell.textContent = "X";
        setTimeout(() => computerMove(), 600);
    }
}

function computerMove() {
    const emptyCells = cells.filter(cell => cell.textContent === '');
    if (emptyCells.length === 0) {
        return;
    }
    const randomEmptyCell = randomChoice(emptyCells);
    randomEmptyCell.textContent = 'O';
}
function randomChoice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function findWinner() {

}

const cells = initializeGame();
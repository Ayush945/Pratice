let userScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')

function computerPlay() {

    let options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * 3)];
}
console.log(computerPlay())

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');

rockButton.addEventListener('click', function () {
    playRound('rock');
});

paperButton.addEventListener('click', function () {
    playRound('paper');
});

scissorButton.addEventListener('click', function () {
    playRound('scissor');
});

function playRound(userChoice) {
    if (userScore === 5 || computerScore === 5) {
        const outputElement = document.querySelector('.results');
        outputElement.textContent = "Game Over!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        return;
    }
    const computerChoice = computerPlay();
    const outputElement = document.querySelector('.results');
    const userElement = document.getElementById('user-score')
    const computerElement = document.getElementById('computer-score')



    if (userChoice === computerChoice) {

        outputElement.textContent = "Computer chooses: " + computerChoice + ", Draw"
    }
    else if ((userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'scissor' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        userScore = userScore + 1;
        outputElement.textContent = "Computer chooses: " + computerChoice + ", You Win"
        userElement.textContent = userScore;
    }
    else {
        computerScore = computerScore + 1;
        outputElement.textContent = "Computer chooses: " + computerChoice + ", Computer Wins"
        computerElement.textContent = computerScore;
    }
    if (userScore === 5 || computerScore === 5) {
        outputElement.textContent = (userScore === 5) ? "You Win the Game!" : "Computer Wins the Game!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }
}
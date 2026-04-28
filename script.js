let wins = 0;
let losses = 0;
let ties = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
        ties++;
    } 
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You Win!";
        wins++;
    } 
    else {
        result = "You Lose!";
        losses++;
    }

    document.getElementById("result").textContent =
        `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;

    document.getElementById("score").textContent =
        `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
}
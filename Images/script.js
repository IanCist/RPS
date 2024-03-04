let roundsPlayed = 0; 
let playerWins = 0;
let computerWins = 0; 
// saves the players name after they input it into the box 
function savePlayerName() {
    var playerName = document.getElementById("playerNameInput").value;
    localStorage.setItem("playerName", playerName);
    document.getElementById("playerName").innerText = "Player Name: " + playerName;
    alert("Player name saved successfully!")
}
// resets different parts of the game 
function resetGame() {
    document.getElementById("playerNameInput").value = "";
    document.getElementById("gameResult").innerText = "";
    document.getElementById("playerChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("roundsPlayed").innerText = "";
    document.getElementById("playerWins").innerText = "";
    document.getElementById("computerWins").innerText = "";
    roundsPlayed = 0; // Reset roundsPlayed to 0
    playerWins = 0; // Reset playerWins to 0
    computerWins = 0; // Reset computerWins to 0
}

var savedPlayerName = localStorage.getItem("playerName")
if (savedPlayerName) {
    document.getElementById("playerName").innerText = "Player Name: " + savedPlayerName;
    alert("Welcome back, " + savedPlayerName + "!");
}
// randoms choices for the computer to pick 
function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function displayComputerChoice(computerMove) {
    const computerChoiceElement = document.getElementById("computerChoice");
    computerChoiceElement.innerText = "Computer's Choice: " + computerMove;

    // Set the computer's name to "Computer"
    const computerNameElement = document.getElementById("computerName");
    computerNameElement.innerText = "Computer";
}

function playGame(playerMove) {
    // limits the amount of rounds played to 5 
    if (roundsPlayed >= 5) {
        alert ("Maximum rounds played!");
        return;
    }
    roundsPlayed++;
    document.getElementById("roundsPlayed").innerText = "Rounds Played: " + roundsPlayed;
    const computerMove = computerChoice();
    console.log("Computer's move:" + computerMove);
    console.log("Player's move: " + playerMove);

    displayComputerChoice(computerMove);


    if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
    ) { // after three rounds of the plaer winning an alert shows up that says player is champion!
        console.log("Player wins!");
        playerWins++;
        document.getElementById("playerWins").innerText = "Player Wins: " + playerWins;
        if (playerWins === 3) {
            alert("Player is champion!");
        }
        return "Player wins!";
    }
// after three rounds of the computer winning an alert shows up that says computer is champion!
    console.log("Computer wins!");
    computerWins++;
    document.getElementById("computerWins").innerText = "Computer Wins: " + computerWins;
    if (computerWins === 3) {
        alert("Computer is champion!");
    }
    return "Computer wins!";
}

// allows for user to choose between rock paper or scissor 
const rockButtons = document.querySelectorAll('.rock');
const paperButtons = document.querySelectorAll('.paper');
const scissorButtons = document.querySelectorAll('.scissor');

rockButtons.forEach(button => {
    button.addEventListener('click', () => {
        savePlayerChoice('rock');
    });
});

paperButtons.forEach(button => {
    button.addEventListener('click', () => {
        savePlayerChoice('paper');
    });
});

scissorButtons.forEach(button => {
    button.addEventListener('click', () => {
        savePlayerChoice('scissors');
    });
});
// Saves the players choice 
function savePlayerChoice(choice) {
    document.getElementById("playerChoice").innerHTML = "Players choice: " + choice;
    displayResult(playGame(choice));
}
// displays the end game results 
function displayResult(result) {
    const gameResultElement = document.getElementById("gameResult");
    gameResultElement.innerText = result;
}

function savePlayerName() {
    var playerName = document.getElementById("playerNameInput").value;
    localStorage.setItem("playerName", playerName);
    document.getElementById("playerName").innerText = "Player Name: " + playerName;
    alert("Player name saved successfully!")
}
function resetGame() {
    document.getElementById("playerNameInput").value = "";
    document.getElementById("playerName").innerText = "";
    document.getElementById("gameResult").innerText = "";
}
var savedPlayerName = localStorage.getItem("playerName")
if (savedPlayerName) {
    document.getElementById("playerName").innerText = "Player Name: " + savedPlayerName;
    alert("Welcome back, " + savedPlayerName + "!");
}

function computerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playGame(playerMove) {
    const computerMove = computerChoice();
    console.log("Computer's move:" + computerMove);
    console.log("Player's move: " + playerMove)
}

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

function savePlayerChoice(choice) {
    document.getElementById("playerChoice").innerHTML = "Players choice: " + choice;
}
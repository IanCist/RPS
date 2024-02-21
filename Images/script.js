function savePlayerName() {
    var playerName = document.getElementById("playerNameInput").value;
    localStorage.setItem("playerName", playerName);
    document.getElementById("playerName").innerText = "Player Name: " + playerName;
    alert("Player name saved successfully!")
}

var savedPlayerName = localStorage.getItem("playerName")
if(savedPlayerName) {
    document.getElementById("playerName").innerText = "Player Name: " + savedPlayerName;
    alert ("Welcome back, " + savedPlayerName + "!");
}

function computerChoice () {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const computerMove = computerChoice();
console.log ("Computer's move:" computerMove);

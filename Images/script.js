function savePlayerName() {
    var playerName = document.getElementById("playerNameInput").value;
    localStorage.setItem("playerName", playerName);
    alert("Player name saved successfully!")
}

var savedPlayerName = localStorage.getItem("playerName")
if(savedPlayerName) {
    alert ("Welcome back, " + savedPlayerName + "!");
}

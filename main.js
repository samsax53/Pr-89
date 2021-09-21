function getNames() {
    name1 = localStorage.getItem("player1");
    name2 = localStorage.getItem("player2");
    document.getElementById("playerDisplay1").innerHTML = "<h3>" + name1 + ": 0"; 
    document.getElementById("playerDisplay2").innerHTML = "<h3>" + name2 + ": 0"; 
}
// high score
function printscores() {
    // getting scores from local storage or set to an empty array
    // var playerScores - JSON.parse(window.localStorage.getItem("highscores"))
    var playerScores = [];

    // sorting the different scores in descending order
    playerScores.sort(function(a, b) {
        return b.scores - a.scores;

    });
    playerScores.forEach(function(scores){
        var liEl = document.createElement("li");
        liEl.textContent = scores.initials + "-" + scores.scores;

        var olEl = document.getElementById("highscore");
        olEl.appendChild(liEl);
    })
};

function deleteScores() {
    // will remove items from local stg
    windows.localStorage.removeItem("highscores");
    // reloads the page
    windows.localStorage.reload();
}

// event listener/click
document.getElementById("delete-scores").onclick = deleteScores;
// callback function to run the page on load
printscores();


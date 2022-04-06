// Variables to keep track of time
var questionsIndex = 0;
// indexed at 0
var time = questions.length * 15;
// Allows you to keep a timer and score for your quiz
var timerID;

// variables to help Travese the DOM
var quesionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedBackEl = document.getElementById("feedback");
// var imgEl = document.getElementById(".img");
// questions for the quiz

var questions = [
    {
        title: "This is a question?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    }
]

// Start quiz function
function beginQuiz() {
    // hide the start screen during the quiz
    var startQuizEl = document.getElementById("start");
    startScreenEl.setAttribute("class", "hide");
    // make the questions appear on the page
    questionsEl.removeAttribute("class");
    // start the time
    // show starting time on the page
    getQuestions;
}

// Get quiz questions
function getQuestions() {
    // create a variable to get the current questions array
    var currentQuestions = questions[questionsIndex];
    // update the code question title with current code
    // clear out old question choices
    // we can loop over the choices using forEach
    // attach click event to listener
    // display the choice on the page
}

// question button clicks
function clickQuestions() {
    // error handling needed for incorrect answer to question
    // and add the time deduction
    // display the new time once deducted
    // flash the wrong/right feedback on the page under the questions
    // move to the next question
    // check if we're finished asking all the questions
}

// end the quiz
function endTheQuiz() {
    // stop the timer
    clearInterval(timerId);
    // show the final screen
    // show final score
    // hide screen
}

// Timer function
function clockCountDown() {
    // update the time
    time--;
    timerEl.textContent = time;
    // check if the user is out of time
    if (time <=0) {
        endTheQuiz();
    }

}

// save the score
function saveHighScores() {
    // get value from your input box
    // make sure the user wrote their initials in the box
    // local storage
    // redirect to the next page (highscore.html)
}

// key event functions
function enterBtnEvent() {
    // give enter key ability to save your high score when keydown
}

// user clicks button to submit their initials
submitBtn.onclick = saveHighScores;
// user clicks to begin the quiz
startBtn.onclick = beginQuiz;
// this checks if the user hit enter for their initials
initialsEl.onkeyup = enterBtnEvent;
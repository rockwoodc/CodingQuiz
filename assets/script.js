var questionIndex = 0
var timerEl = document.getElementById("timer");
var timeLeft = 60;
var questionsEl = document.getElementById("questions");
var startBtn = document.getElementById("start-button");
var choices = document.getElementById("choices")
// WHEN I click the start button the timer starts
// startEl.addEventListener('click', function() {  
// });

function startQuiz() {
    var startEl = document.querySelector("#start-screen");
    //hide the start screen
    startEl.setAttribute("class","hide");
    //show questions
    questionsEl.removeAttribute("class");
    //start timer
    // function startTimer
    //show question & answers (see ReadME)-- loop for continuing to ask questions?

    //correct answer-earn points

    //wrong answer- lose time

    //end quiz when time is up
displayQuestions();
    
}

function displayQuestions () {
    var currentQuestion = questions[questionIndex];
    currentQuestion.choices.forEach(function(i, choice){
    var choiceAnswers = document.createElement("button")
    choiceAnswers.setAttribute("class", "choice")
    choiceAnswers.setAttribute("value", choice)
    choiceAnswers.textContent = i + 1 + choice
    choices.appendChild(choiceAnswers)
});
}



// //allow user to enter initials and save score
// function saveScore() {

// }

// localStorage.setItem('saveScore', JSON.stringify(winnerObj));

// //play again needed?

startBtn.onclick = startQuiz
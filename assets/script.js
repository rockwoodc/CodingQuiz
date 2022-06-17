var timerEl = document.getElementById("timer");
var timeLeft = 60;
var questionsEl = document.getElementById("questions");
// WHEN I click the start button the timer starts
startEl.addEventListener('click', function() {  
});

function startQuiz() {
    var startEl = document.querySelector("#start-button");
    //start timer

    //show question & answers (see ReadME)-- loop for continuing to ask questions?

    //correct answer-earn points

    //wrong answer- lose time

    //end quiz when time is up

    
}

//allow user to enter initials and save score
function saveScore() {

}

localStorage.setItem('saveScore', JSON.stringify(winnerObj));

//play again needed?
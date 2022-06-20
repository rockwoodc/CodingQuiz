var questionIndex = 0
var time = questions.length * 10;
var timerId;
var questionsEl = document.getElementById("questions");
var startBtn = document.getElementById("start-button");
var choices = document.getElementById("choices");




function startQuiz() {
    var startEl = document.querySelector("#start-screen");
    //hide the start screen
    startEl.setAttribute("class","hide");
    //show questions
    questionsEl.removeAttribute("class");
    //start timer
    var sec = 60;
    var time = setInterval(myTimer, 1000);
    function myTimer() {
    document.getElementById('timer').innerHTML = sec + " seconds left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
    }
}

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
    //allows questions to start at 1 instead of 0
    choiceAnswers.textContent = i + 1 + choice
    //allows question to appear
    var messageEl = document.getElementById("message");
    messageEl.textContent = currentQuestion.message
    choices.appendChild(choiceAnswers);
    });
} 


function answerClick() {
    //check if answer is wrong
    if (this.value !== questions[questionIndex].answer) {
        //lose time
        time -= 15;
        
    //gain points if answer is correct

    //go to next question
    questionIndex++;  
    }
}


// //allow user to enter initials and save score
// function saveScore() {


// }

// localStorage.setItem('saveScore', JSON.stringify(winnerObj));

//once start button is clicked, the quiz & timer begins
startBtn.onclick = startQuiz
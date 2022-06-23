var questionIndex = 0
//time is the number of questions  x6
var time = questions.length * 6;
var timerId;
var questionsEl = document.getElementById("questions");
var startBtn = document.getElementById("start-button");
var choices = document.getElementById("choices");
var endQuizPage = document.getElementById("end-quiz");
var saveScore = document.getElementById("saveScore");

function startQuiz() {
    var startEl = document.querySelector("#start-screen");
    //hide the start screen
    startEl.setAttribute("class","hide");
    //show questions
    questionsEl.removeAttribute("class");
    //start timer
    timerId = setInterval(myTimer, 1000);
    function myTimer() {
    document.getElementById('timer').innerHTML = time + " seconds left";
    time--;
    if (time <= 0) {
        endQuiz();
    }
}

displayQuestions();   
}

function displayQuestions () {
    var currentQuestion = questions[questionIndex];
    var messageEl = document.getElementById("message");
    messageEl.textContent = currentQuestion.message
    choices.innerHTML ="";
    currentQuestion.choices.forEach(function(choice, i){
    var choiceAnswers = document.createElement("button")
    choiceAnswers.setAttribute("class", "choice")
    choiceAnswers.setAttribute("value", choice)
    //allows questions to start at 1 instead of 0
    choiceAnswers.textContent = choice

    //allows question to appear
    
    choiceAnswers.onclick = answerClick;
    choices.appendChild(choiceAnswers);
    });
} 


function answerClick() {
    //check if answer is wrong
    if (this.value !== questions[questionIndex].answer) {
        //lose time
        time -= 15;

    //go to next question
    
    };
    questionIndex++;
    if (questionIndex === questions.length) {
        endQuiz();
    }
    else{
        displayQuestions();
    }
}

//end quiz when time is up
function endQuiz(){
    var finalScore = document.getElementById("finalScore");
    clearInterval(timerId);
    //clear out timer and display message once 0 is reached
    document.getElementById('timer').innerHTML = "Times up!";
    questionsEl.setAttribute("class","hide");
    //show end screen
    endQuizPage.removeAttribute("class");
    finalScore.textContent = time
} 

// //allow user to enter initials and save score
function saveUserScore() {
    //get elementbyid for initals
    var initials = getElementById("initials");
    //create a new object for final score with 2 key value pairs time:initials = score:user initals
    var saveInitials = {
        score: time, 
        initials: initials
    }
    //added variable to try and pull from local storage
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.push(saveInitials);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    //save to local storage
    localStorage.setItem('saveScore', JSON.stringify(saveInitials));

}
//once start button is clicked, the quiz & timer begins
startBtn.onclick = startQuiz
// //on click event to save the score once initials are inputted 
saveScore.onclick = saveUserScore

var startQuiz = document.getElementById("startButton");
var infoDiv = document.getElementById("callDisplayButton");
var quitQuiz = document.getElementById("quitAssessment");
var keepQuiz = document.getElementById("continueQuiz");
var timeEl = document.getElementById("timerBox")


var secondsLeft = 60;

// This is the function that makes my information box appear when the start button is clicked
function displayInfoBox(){
    infoDiv.setAttribute("style", "display: block");
    startQuiz.setAttribute("style", "display: none");
    console.log("isWorking?");
}

// When the continue button is clicked the start button and the rules box should disappear
function firstQuestion(){
infoDiv.setAttribute("style", "display: none");
startQuiz.setAttribute("style", "display: none");
}

// setting my timer

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}


// All event Listeners

startQuiz.addEventListener("click", displayInfoBox)
keepQuiz.addEventListener("click", firstQuestion,)

setTime()


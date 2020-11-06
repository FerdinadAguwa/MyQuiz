// firt page/commands variable elements
var startQuiz = document.getElementById("startButton");
var infoDiv = document.getElementById("callDisplayButton");
var quitQuiz = document.getElementById("quitAssessment");
var keepQuiz = document.getElementById("continueQuiz");
var timeEl = document.getElementById("timerBox")
var displayQuestion= document.getElementById("hide");
var secondsLeft = 61;

// questions & choices variable elements
var questions = document.querySelector("#quizQuestion");
var choices = document.querySelectorAll(".choiceText");
var progressText = document.querySelector("progressText")
var scoreText = document.querySelector("#score")

// variables to make sure my questions work

var currentQuestion ={}
var acceptingAnswers =true
var score = 0
var questionCounter = 0
var availableQuestions = []

// Array of objects Questions
let questions =[
  {
    questions: 'What year was Ferinad Aguwa born?',
    choice1: '1978',
    choice1: '1997',
    choice1: '1994',
    choice1: '1992',
    answer: '1992',
  },
  {
    questions: 'How many siblings does Ferdinad Aguwa have?',
    choice1: '19',
    choice1: '1',
    choice1: '11',
    choice1: '12',
    answer: '11',
  },
  {
    questions: 'What year was Ferinad Aguwa born?',
    choice1: '1978',
    choice1: '1997',
    choice1: '1994',
    choice1: '1992',
    answer: '1992',
  },
  {
    questions: 'What year was Ferinad Aguwa born?',
    choice1: '1978',
    choice1: '1997',
    choice1: '1994',
    choice1: '1992',
    answer: '1992',
  }
]

var MAX_QUESTIONS = 4

 

// This is the function that makes my information box appear when the start button is clicked
function displayInfoBox(){
    infoDiv.setAttribute("style", "display: block");
    startQuiz.setAttribute("style", "display: none");
  
    
    console.log("isWorking?");
}

// When the continue button is clicked the start button and the rules box should disappear
// timer will also start on click
function firstQuestion(){

infoDiv.setAttribute("style", "display: none");
displayQuestion.setAttribute("style", "display: block");
document.body.setAttribute("style","background-color:#c9e2d8e0");
setTime()
};

// Created a function that will start my quiz
startQuiz = ()=> {
  questionCounter=0
  score=0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () =>{
  if (availableQuestions )
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
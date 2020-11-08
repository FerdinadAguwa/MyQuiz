// firt page/commands variable elements
var startQuizBtn = document.getElementById("startButton");
var infoDiv = document.getElementById("callDisplayButton");
var quitQuiz = document.getElementById("quitAssessment");
var displayQuestion= document.getElementById("hide");

// This is the function that makes my information box appear when the start button is clicked
function displayInfoBox(){
    infoDiv.setAttribute("style", "display: block");
    startQuizBtn.setAttribute("style", "display: none");
  
    
    console.log("isWorking?");
}

// When the continue button is clicked the start button and the rules box should disappear
// timer will also start on click
function firstQuestion(){

infoDiv.setAttribute("style", "display: none");
displayQuestion.setAttribute("style", "display: block");
document.body.setAttribute("style","background-color:#c9e2d8e0");
};

// Created a function that will start my quiz

// All event Listeners

startQuizBtn.addEventListener("click", displayInfoBox)

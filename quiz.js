  var timer;
  var timerInterval;
  var display;
  var questionText = document.querySelector('questionText');
  var answerText = document.querySelector('answerText');
  var ul = document.querySelector('#choices');
  var currentQuestionIndex = 0;

  var startButton = document
  .querySelector('#startButton')
  .addEventListener('click', startButtonClicked);


// all my questions for the assignment

  var allQuestions = [
    {
      prompt: "What is Ferdinads favorite color?",
      choices: ["Red", "Blue","Green","Carolina Blue"],
      answer: "Green"
    },
    {
      prompt: "What is Ferdinads favorite sport?",
      choices: ["Basketball", "Football","Tennis","Soccer"],
      answer: "Football"
    },
    {
        prompt: "What year was Ferdinad born",
      choices: ["1879", "1998","1992","yesterday"],
      answer: "1992"
    },
    {
        prompt: "How tall is Ferdinad Aguwa",
      choices: ["7'5", "6'1","5'5","6'0"],
      answer: "6'0"
    },
  ]

//timer//
function startTimer(duration, display) {
    timer = duration;
    var minutes;
    var seconds;
    timerInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      display.textContent = minutes + ':' + seconds;
  
      if (--timer < 0) {
        
      }
    }, 1000)
  }



//start the time of event
  function startButtonClicked(i) {
    var fiveMinutes = 60,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    displayQuestion();
    
  }

  function answerButtonClicked(i) {
  //checks for correct buttons or buttons

  //deducts 10 seconds 
  if (this.value !== allQuestions[currentQuestionIndex].answer) {
    alert('Try again');
    timer -= 10;

  } else {
    alert('You are Correct');
  }

  currentQuestionIndex++;
  displayQuestion();
}


  function endGame() {
    clearInterval(timerInterval);
    console.log('game over');
    //display final div
    document.querySelector('#finalDiv').style.display = 'block';
    //hide choices div
    document.querySelector('.quizSection').style.display = 'none';
    //add score final
    document.querySelector('#score').textContent = timer;
    document.querySelector('#time').textContent = timer;
  }

//
  function displayQuestion(i) {
    var currentQuestion = allQuestions[currentQuestionIndex];
    if (!currentQuestion) {
      return endGame();
    }
  //changing question titley
  document.querySelector('#questionText').textContent = currentQuestion.prompt;
  document.querySelector('#answerText').innerHTML = '';
  ul.innerHTML = '';

// trvel through your array of questons 
for (var i = 0; i< currentQuestion.choices.length; i++) {
  var li = document.createElement('li');
  var choiceButton = document.createElement('button');
  choiceButton = document.createElement('button');
  choiceButton.setAttribute('value', currentQuestion.choices[i]);
  choiceButton.textContent = currentQuestion.choices[i];
  choiceButton.onclick = answerButtonClicked;
  choiceButton.classList.add('answerChoice');
  li.append(choiceButton);
  ul.append(li);

  }
}

// var time = document.getElementById('timer');
// time.addEventListener('click, startButtonClicked');



document.querySelector('#submit').addEventListener('submit', function(event) {
  event.preventDefault();
  var initials = document.querySelector('#initials').value;
  localStorage.setItem(initials, timer);
  displayscores();

});


document.querySelector('#finalDiv').style.display = 'none';
document.querySelector('#scoresDiv').style.display = 'none';

document.querySelector('#seeHighScore').addEventListener('click', displayScores)
function displayScores() {
  document.querySelector('#scoresDiv').style.display = 'block';
  Object.keys(localStorage).forEach(function (key) {
    console.log(localStorage.getItem(key));
  

var li = document.createElement('li');
li.textContent = key + '-' + localStorage.getItem(key);
document.querySelector('#scoreslist').appendChild(li);
  });

  document.querySelector('.container').style.display = 'none';
  document.querySelector('#resultsDIV').style.display = 'none';
}






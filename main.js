// VARIABLES BEGIN
var question = document.querySelector('.question');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var warningQuestion = document.querySelector('.warning-question');
var warningMinutes = document.querySelector('.warning-minutes');
var warningSeconds = document.querySelector('.warning-seconds');
var startButton = document.querySelector('.start-btn');
var study = document.getElementById('study');
var meditate = document.getElementById('meditate');
var exercise = document.getElementById('exercise');
var changeStudyBtn = document.querySelector('.study-btn');
var changeMeditateBtn = document.querySelector('.meditate-btn');
var changeExerciseBtn = document.querySelector('.exercise-btn');
var studyImg = document.getElementById('study-img');
var meditateImg = document.getElementById('meditate-img');
var exerciseImg = document.getElementById('exercise-img');
var h5Study = document.getElementById('h5-study');
var h5Meditate = document.getElementById('h5-meditate');
var h5Exercise = document.getElementById('h5-exercise');
var wrapper = document.querySelector('.wrapper');
var wrapper2 = document.querySelector('.wrapper2');
var activityTitle = document.querySelector('.activity-title');
var timer = document.querySelector('.timer')

//ACTIVITY BUTTONS
changeStudyBtn.addEventListener('click', function () {
  study.style.border = '2px solid #B3FD78';
  h5Study.style.color = '#B3FD78';
  studyImg.src = 'images/study-active.svg';
});

changeMeditateBtn.addEventListener('click', function () {
  meditate.style.border = '2px solid #C278FD';
  h5Meditate.style.color = '#C278FD';
  meditateImg.src = 'images/meditate-active.svg';
});

changeExerciseBtn.addEventListener('click', function () {
  exercise.style.border = '2px solid #FD8078';
  h5Exercise.style.color = '#FD8078';
  exerciseImg.src = 'images/exercise-active.svg';
});

//CHECKS FOR CORRECT TYPE OF INPUT IN MINUTES AND SECONDS FIELD.
minutes.addEventListener('keyup', checkInputMinutes);
seconds.addEventListener('keyup', checkInputSeconds);

//Checks if the minutes input field contains the letter e.
function checkInputMinutes() {
  if (event.keyCode === 69) {
    alert('Minutes must contain a number between 0 and 60.');
  }
}
//Checks if the seconds input field contains the letter e.
function checkInputSeconds() {
  if (event.keyCode === 69) {
    alert('Seconds must contain a number between 0 and 60.');
  }
}

//START ACTIVITY BUTTON
startButton.addEventListener('click', function() {
  if (question.value === '') {
    warningQuestion.classList.toggle('warning-question');
  }
  if (minutes.value === '') {
    warningMinutes.classList.toggle('warning-minutes');
  }
  if (seconds.value === '') {
    warningSeconds.classList.toggle('warning-seconds');
  }
  if ((question.value !== '') && (minutes.value !== '') && (seconds.value !== '')) {
    wrapper.classList.add('display-content');
    wrapper2.classList.remove('display-content');
    activityTitle.innerText = question.value;
  }
});


var startTimeBtn = document.querySelector('.start-time');
var timer = document.querySelector('.timer');



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

 startTimeBtn.addEventListener('click', function () {
    var fiveMinutes = (parseInt(`${minutes.value}`) * 60) + (parseInt(`${seconds.value}`)),
        display = document.querySelector('.timer');
    startTimer(fiveMinutes, display);
});

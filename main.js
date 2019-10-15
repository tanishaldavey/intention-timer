var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var startButton = document.querySelector('.start-btn');
var warning = document.querySelector('.warning');
var question = document.querySelector('.question');
var warningQuestion = document.querySelector('.warning-question')
console.log(warningQuestion);
console.log(warningMinutes);
console.log(warningSeconds);
var warningMinutes = document.querySelector('.warning-minutes')
var warningSeconds = document.querySelector('.warning-seconds')

minutes.addEventListener('keyup', checkInputMinutes);
seconds.addEventListener('keyup', checkInputSeconds);
startButton.addEventListener('click', checkInput);


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
//Checks if inputs are empty before proceeding to next screen.
function checkInput(event) {
  if (question.value === '') {
    warningQuestion.classList.toggle('warning-question');
  }
  if (minutes.value === '') {
    warningMinutes.classList.toggle('warning-minutes');
  }
  if (seconds.value === '') {
    warningSeconds.classList.toggle('warning-seconds');
  }
}

var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var startButton = document.querySelector('.start-btn');

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
// VARIABLES BEGIN
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
// VARIABLES END
// BUTTONS
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
// Buttons
minutes.addEventListener('keyup', checkInputMinutes);
seconds.addEventListener('keyup', checkInputSeconds);
startButton.addEventListener('click', function);




//create a classList.add
//classList.add.toggle() for minutes and seconds
// In HTML add <img><p>A description is required.</p> Visibility will be hidden by default, and activated upon click of start activity button.
// In HTML add <p>A number is required.</p>Visibility will be hidden by default, and activated upon click of start activity button.
//Create a common class to target all fields
//insert innerHTML
//If start button is completed

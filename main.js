var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var startButton = document.querySelector('.start-btn');


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

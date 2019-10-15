var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var startButton = document.querySelector('.start-btn');


minutes.addEventListener('keyup', checkInputMinutes);
seconds.addEventListener('keyup', checkInputSeconds);
startButton.addEventListener('click', function);


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

//create a classList.add
//classList.add.toggle() for minutes and seconds
// In HTML add <img><p>A description is required.</p> Visibility will be hidden by default, and activated upon click of start activity button.
// In HTML add <p>A number is required.</p>Visibility will be hidden by default, and activated upon click of start activity button.
//Create a common class to target all fields
//insert innerHTML
//If start button is completed



//Random number generated by a device
var ranNum = Math.floor(Math.random() * 99) + 1;


//Turns the guess from a string into a number
function guessNum() {
  var number = parseInt(document.getElementById('user-input').value);
  return number;
}


//Display last guess and response
function updateGuess() {
  event.preventDefault();
  document.getElementById('last-guess').innerHTML = guessNum();
  document.getElementById('display-response').innerHTML = numCheck();
}
var el = document.getElementById('guess-button');
el.addEventListener("click", updateGuess, false);

//Reponse based on user guess
function numCheck() {
  if (guessNum() > ranNum) {
    response = 'Thats too high';
  } else if (guessNum() < ranNum) {
    response = 'Your number is too low';
  } else if (guessNum() === ranNum) {
    response = 'BOOM!';
  }
  return response;
}

// Error message appears depending on user input if it's outside range
function guessWrong(){
  if (guessNum() < 1 || guessNum() > 100) {
  document.getElementById('error-text').innerHTML = 'please guess a number in the boundaries';
  } else if (guessNum() >= 1 || guessNum() <= 100) {
    document.getElementById('error-text').innerHTML = '';
  } 
}

var guessClick = document.getElementById('user-input');
  guessClick.addEventListener("input", guessWrong, false);


//Submit button actions
function enableGuess() {
  event.preventDefault();
  console.log('2345')
  if (guessNum() >= 1 && guessNum() <= 100) {
    document.getElementById("guess-button").disabled = false;
  } else if  (guessNum() < 1 || guessNum() > 100) {
    document.getElementById("guess-button").disabled = true;
  } else if (document.querySelector('#user-input').value === '') {
    document.getElementById("guess-button").disabled = true;
  }
}
document.getElementById("user-input").addEventListener('input', enableGuess, false);

//activate and deactivate clear button
function enableClear() {
  event.preventDefault();
  var userInput = document.getElementById("user-input");
  if (userInput.value !== '') {
    document.getElementById("clear-button").disabled = false;
  } else if (userInput.value === '') {
    document.getElementById("clear-button").disabled = true;
  }
}
document.getElementById("user-input").addEventListener('input', enableClear, false);

//enable reset button
function enableReset() {
  var resetButton = document.querySelector('#reset-button');
  var userInput = document.getElementById("user-input");
  if (userInput.value > '') {
    resetButton.disabled = false;
  }
}
document.getElementById("user-input").addEventListener('input', enableReset, false);

//show text
function displayText() {
  if (document.querySelector('#user-input').value !== '') {
  var textDisplay = document.querySelectorAll('p');
  for (var i=0; i < textDisplay.length; i++) {
    textDisplay[i].classList.add ('text');
    textDisplay[i].classList.remove ('text--hidden');
  }
}
}
document.getElementById("user-input").addEventListener('input', displayText, false);

//hide text from load
function hideLoadText () {
  var loadText = document.querySelector('.text-load');
  if (document.querySelector('#user-input').value !== '') {
    loadText.classList.add ('text--hidden');
  }
}
document.getElementById("user-input").addEventListener('input', hideLoadText, false);



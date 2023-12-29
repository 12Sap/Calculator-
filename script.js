let display = document.getElementById('display');
let scientific = false;
let radiansMode = true; // true for radians, false for degrees

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function toggleScientific() {
  scientific = !scientific;
  updateScientificButtonsVisibility();
}

function updateScientificButtonsVisibility() {
  let scientificButtons = document.querySelectorAll('.scientific');
  for (let button of scientificButtons) {
    button.style.display = scientific ? 'inline-block' : 'none';
  }
}

function toggleAngleMode() {
  radiansMode = !radiansMode;
}
function displayLetter(letter) {
  document.getElementById('display').value = letter;
}
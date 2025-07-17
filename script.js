let display = document.getElementById('display');

// Add character to display
function appendValue(value) {
  display.value += value;
}

// Clear the screen
function clearDisplay() {
  display.value = '';
}

// Evaluate and show result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

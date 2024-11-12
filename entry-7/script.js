// Get references to the body and buttons
let body = document.body;
let startButton = document.getElementById('start-btn');
let stopButton = document.getElementById('stop-btn');

// Function to start the flashing background
function startFlashing() {
  body.classList.add('flashing'); // Start flashing effect
}

// Function to stop the flashing background
function stopFlashing() {
  body.classList.remove('flashing'); // Stop flashing effect
}

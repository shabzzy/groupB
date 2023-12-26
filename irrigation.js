var isIrrigationOn = false;
var stopwatchInterval; // Variable to store the interval ID for the stopwatch
var stopSound = new Audio("./sound/MV27TES-alarm.mp3"); // Replace with the actual path to your sound file

function setIrrigationSchedule() {
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;

    // Show the stopwatch container and start the stopwatch
    showStopwatch(startTime, endTime);
}

function toggleIrrigation() {
    // You can implement logic to toggle the irrigation system
    isIrrigationOn = !isIrrigationOn;

    var statusText = document.getElementById('statusText');
    statusText.innerHTML = isIrrigationOn ? "Irrigation is currently ON." : "Irrigation is currently OFF.";

    // You can also send commands to the irrigation system based on the toggle state
    console.log("Irrigation toggled: " + isIrrigationOn);
}

function showStopwatch(startTime, endTime) {
    var stopwatchContainer = document.getElementById('stopwatch-container');
    var stopwatchText = document.getElementById('stopwatch-text');

    // Display the stopwatch container
    stopwatchContainer.style.display = 'flex';

    // Calculate the remaining time based on the start and end times
    var startTimestamp = Date.parse(new Date().toDateString() + ' ' + startTime);
    var endTimestamp = Date.parse(new Date().toDateString() + ' ' + endTime);

    // Update the stopwatch every second
    stopwatchInterval = setInterval(function () {
        var currentTime = new Date().getTime();
        var remainingTime = endTimestamp - currentTime;

        // Check if the scheduled time has passed
        if (remainingTime <= 0) {
            clearInterval(stopwatchInterval); // Stop the stopwatch
            stopwatchText.innerHTML = "Schedule completed!";

            // Automatically toggle off irrigation
            if (isIrrigationOn) {
                toggleIrrigation();
            }

            // Play the stop sound
            playStopSound();
        } else {
            // Format the remaining time in HH:mm:ss
            var hours = Math.floor(remainingTime / (1000 * 60 * 60));
            var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            stopwatchText.innerHTML = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
        }
    }, 1000);
}

function stopStopwatch() {
    // Hide the stopwatch container and stop the interval
    var stopwatchContainer = document.getElementById('stopwatch-container');
    stopwatchContainer.style.display = 'none';
    clearInterval(stopwatchInterval);

    // Pause the stop sound
    pauseStopSound();
}

// Function to play the stop sound
function playStopSound() {
    stopSound.play();
}

// Function to pause the stop sound
function pauseStopSound() {
    stopSound.pause();
    stopSound.currentTime = 0; // Reset the sound to the beginning
}

// Function to pad single-digit numbers with a leading zero
function padZero(num) {
    return num < 10 ? "0" + num : num;
}

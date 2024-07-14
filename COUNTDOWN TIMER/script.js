let timer;
let countdown;
let isRunning = false;
const initialTime = 10 * 60; // 10 minutes in seconds
let timeRemaining = initialTime;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        countdown = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateDisplay(timeRemaining);
            } else {
                clearInterval(countdown);
                isRunning = false;
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeRemaining = initialTime;
    updateDisplay(timeRemaining);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay(timeRemaining);

const timerDisplay = document.getElementById("timer-display");
const startTimerButton = document.getElementById("start-timer");
const stopTimerButton = document.getElementById("stop-timer");
let timerInterval;
let targetTime; // Add a variable to store the target time in milliseconds

startTimerButton.addEventListener("click", () => {
    let startTime = Date.now();
    targetTime = startTime + 1 * 60 * 60 * 1000 + 20 * 60 * 1000; // Set the target time to 5 minutes from the start
    timerInterval = setInterval(() => updateTimer(startTime, targetTime), 1000);
    startTimerButton.disabled = true;
    stopTimerButton.disabled = false;
});

stopTimerButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    startTimerButton.disabled = false;
    stopTimerButton.disabled = true;
});

function updateTimer(startTime, targetTime) {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);

    // Check if the elapsed time has reached the target time
    if (currentTime >= targetTime) {
        clearInterval(timerInterval);
        startTimerButton.disabled = false;
        stopTimerButton.disabled = true;
        timerDisplay.textContent = "00:00"; // Optionally, you can reset the display to "00:00"
    } else {
        const minutes = elapsedTime.getUTCMinutes();
        const seconds = elapsedTime.getUTCSeconds();
        timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
}


const checkboxes = document.querySelectorAll("input[type='checkbox']");
const printButton = document.getElementById("print-button");

// Add event listeners for the checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            checkbox.parentElement.style.textDecoration = "line-through";
        } else {
            checkbox.parentElement.style.textDecoration = "none";
        }
    });
});

// Add event listener for the Print button
printButton.addEventListener("click", () => {
    window.print();
});

const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementElement;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});

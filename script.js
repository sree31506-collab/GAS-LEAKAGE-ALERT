const SAFE_LIMIT = 400;
const DANGER_LIMIT = 600;
const MAX_GAS = 1000;

function getGasStatus(gasLevel) {

    if (gasLevel < SAFE_LIMIT) {
        return "SAFE";
    }

    if (gasLevel < DANGER_LIMIT) {
        return "WARNING";
    }

    return "DANGER";
}

function simulateGas() {

    const input = document.getElementById("gasInput");
    let gasLevel = Number(input.value);

    if (gasLevel < 0) {
        gasLevel = 0;
    }

    if (gasLevel > MAX_GAS) {
        gasLevel = MAX_GAS;
    }

    updateSimulation(gasLevel);
}

function updateSimulation(gasLevel) {

    const gasValue = document.getElementById("gasValue");
    const meterFill = document.getElementById("meterFill");
    const status = document.getElementById("status");
    const led = document.getElementById("led");
    const ledText = document.getElementById("ledText");
    const alarm = document.getElementById("alarm");

    const currentStatus = getGasStatus(gasLevel);

    gasValue.textContent = gasLevel;

    const percentage = (gasLevel / MAX_GAS) * 100;
    meterFill.style.width = `${percentage}%`;

    status.className = "";
    alarm.classList.remove("active");

    if (currentStatus === "SAFE") {

        status.textContent = "SYSTEM SAFE";
        status.classList.add("safe");

        meterFill.style.background = "green";

        led.style.background = "green";
        led.style.boxShadow = "0 0 15px green";
        ledText.textContent = "Normal";

        alarm.textContent = "🔔 ALARM OFF";

    } else if (currentStatus === "WARNING") {

        status.textContent = "⚠️ GAS LEVEL WARNING";
        status.classList.add("warning");

        meterFill.style.background = "#e6a700";

        led.style.background = "#e6a700";
        led.style.boxShadow = "0 0 15px #e6a700";
        ledText.textContent = "Warning";

        alarm.textContent = "⚠️ WARNING";

    } else {

        status.textContent = "🚨 GAS LEAK DETECTED!";
        status.classList.add("danger");

        meterFill.style.background = "red";

        led.style.background = "red";
        led.style.boxShadow = "0 0 20px red";
        ledText.textContent = "Danger";

        alarm.textContent = "🚨 ALARM ON";
        alarm.classList.add("active");
    }
}

function generateRandomGas() {

    const randomGas = Math.floor(Math.random() * (MAX_GAS + 1));

    document.getElementById("gasInput").value = randomGas;

    updateSimulation(randomGas);
}

// Initial simulation
updateSimulation(100);

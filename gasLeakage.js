// Gas Leakage Alert System
// Gas concentration is measured in ppm.

const THRESHOLDS = {
    SAFE: 300,
    WARNING: 500
};

function checkGasLevel(gasLevel) {
    if (typeof gasLevel !== "number" || Number.isNaN(gasLevel)) {
        throw new Error("Gas level must be a valid number.");
    }

    if (gasLevel < 0) {
        throw new Error("Gas level cannot be negative.");
    }

    if (gasLevel < THRESHOLDS.SAFE) {
        return {
            status: "SAFE",
            buzzer: false,
            message: "Gas level is normal."
        };
    }

    if (gasLevel < THRESHOLDS.WARNING) {
        return {
            status: "WARNING",
            buzzer: false,
            message: "Gas concentration is increasing."
        };
    }

    return {
        status: "GAS LEAKAGE DETECTED",
        buzzer: true,
        message: "Danger! Gas leakage detected. Evacuate the area!"
    };
}

module.exports = {
    checkGasLevel,
    THRESHOLDS
};

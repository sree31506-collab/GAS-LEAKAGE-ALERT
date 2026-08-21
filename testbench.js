const SAFE_LIMIT = 400;
const DANGER_LIMIT = 600;

function getGasStatus(gasLevel) {

    if (gasLevel < SAFE_LIMIT) {
        return "SAFE";
    }

    if (gasLevel < DANGER_LIMIT) {
        return "WARNING";
    }

    return "DANGER";
}

function runTest(testNumber, gasLevel, expected) {

    const actual = getGasStatus(gasLevel);

    if (actual === expected) {
        console.log(
            `TEST ${testNumber}: PASS | ` +
            `Gas = ${gasLevel} ppm | ` +
            `Expected = ${expected} | ` +
            `Actual = ${actual}`
        );

        return true;
    }

    console.log(
        `TEST ${testNumber}: FAIL | ` +
        `Gas = ${gasLevel} ppm | ` +
        `Expected = ${expected} | ` +
        `Actual = ${actual}`
    );

    return false;
}

console.log("======================================");
console.log(" GAS LEAKAGE ALERT SYSTEM TESTBENCH");
console.log("======================================");

let passed = 0;
let failed = 0;

const tests = [
    [1, 0, "SAFE"],
    [2, 100, "SAFE"],
    [3, 399, "SAFE"],
    [4, 400, "WARNING"],
    [5, 500, "WARNING"],
    [6, 599, "WARNING"],
    [7, 600, "DANGER"],
    [8, 700, "DANGER"],
    [9, 900, "DANGER"],
    [10, 1000, "DANGER"]
];

tests.forEach(test => {

    const result = runTest(
        test[0],
        test[1],
        test[2]
    );

    if (result) {
        passed++;
    } else {
        failed++;
    }
});

console.log("--------------------------------------");
console.log(`TOTAL TESTS : ${tests.length}`);
console.log(`PASSED      : ${passed}`);
console.log(`FAILED      : ${failed}`);
console.log("--------------------------------------");

if (failed === 0) {
    console.log("RESULT: ALL TESTS PASSED");
} else {
    console.log("RESULT: SOME TESTS FAILED");
}

console.log("======================================");

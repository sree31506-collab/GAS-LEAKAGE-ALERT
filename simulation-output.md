# Simulation Output

## Testbench Result

The JavaScript testbench was executed using Node.js.

```text
======================================
 GAS LEAKAGE ALERT SYSTEM TESTBENCH
======================================

TEST 1: PASS | Gas = 0 ppm | Expected = SAFE | Actual = SAFE
TEST 2: PASS | Gas = 100 ppm | Expected = SAFE | Actual = SAFE
TEST 3: PASS | Gas = 399 ppm | Expected = SAFE | Actual = SAFE
TEST 4: PASS | Gas = 400 ppm | Expected = WARNING | Actual = WARNING
TEST 5: PASS | Gas = 500 ppm | Expected = WARNING | Actual = WARNING
TEST 6: PASS | Gas = 599 ppm | Expected = WARNING | Actual = WARNING
TEST 7: PASS | Gas = 600 ppm | Expected = DANGER | Actual = DANGER
TEST 8: PASS | Gas = 700 ppm | Expected = DANGER | Actual = DANGER
TEST 9: PASS | Gas = 900 ppm | Expected = DANGER | Actual = DANGER
TEST 10: PASS | Gas = 1000 ppm | Expected = DANGER | Actual = DANGER

--------------------------------------
TOTAL TESTS : 10
PASSED      : 10
FAILED      : 0
--------------------------------------
RESULT: ALL TESTS PASSED
======================================

# Gas Leakage Alert System Using JavaScript

## Abstract

Gas leakage is a serious safety problem that can cause fire, explosions,
health problems, and loss of life. This project demonstrates a simple
Gas Leakage Alert System using JavaScript.

The system simulates a gas sensor that measures gas concentration in parts
per million (ppm). Based on the sensor reading, the system identifies the
condition as SAFE, WARNING, or GAS LEAKAGE DETECTED.

When the gas concentration reaches or exceeds the leakage threshold, the
system activates a simulated buzzer and displays an emergency warning.

This project is implemented as a software simulation and does not directly
control a physical gas sensor or buzzer.

---

## Objectives

The main objectives of this project are:

1. To simulate a gas leakage detection system.
2. To process gas sensor readings using JavaScript.
3. To identify safe and dangerous gas concentration levels.
4. To generate an alert when a dangerous gas level is detected.
5. To test the system using a JavaScript testbench.
6. To demonstrate the simulation output through the command line.

---

## Features

- Gas sensor value simulation
- Three gas-level conditions
- Automatic leakage detection
- Simulated buzzer activation
- Emergency warning message
- Automated testbench
- Command-line simulation
- Simple JavaScript implementation

---

## Gas Level Classification

| Gas Level | Condition | Buzzer |
|-----------|-----------|--------|
| Less than 300 ppm | SAFE | OFF |
| 300–499 ppm | WARNING | OFF |
| 500 ppm or above | GAS LEAKAGE DETECTED | ON |

These thresholds are used only for this software demonstration and should
not be treated as calibrated safety limits for a real gas detector.

---

## System Working

The system follows these steps:

1. A gas sensor reading is provided to the program.
2. The JavaScript program receives the reading in ppm.
3. The reading is compared with predefined thresholds.
4. If the value is below 300 ppm, the system reports SAFE.
5. If the value is between 300 and 499 ppm, the system reports WARNING.
6. If the value is 500 ppm or greater, gas leakage is detected.
7. When leakage is detected, the simulated buzzer is turned ON.
8. An emergency message is displayed.

---

## Block Diagram

```text
+------------------+
|   Gas Sensor     |
+--------+---------+
         |
         v
+------------------+
| Sensor Reading   |
|      (ppm)       |
+--------+---------+
         |
         v
+------------------+
| JavaScript       |
| Detection Logic  |
+--------+---------+
         |
         v
+-------------------------+
| Gas Level Classification|
+-----------+-------------+
            |
       +----+----+
       |         |
       v         v
    SAFE/WARN  LEAKAGE
       |         |
       v         v
 Buzzer OFF   Buzzer ON
                 |
                 v
           Emergency Alert
           

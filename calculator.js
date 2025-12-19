/**
 * Get numeric values from input fields
 * @returns {Object} Object containing two numbers
 */
function getInputValues() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    return {
        number1: number1,
        number2: number2
    };
}

/**
 * Display result in the page
 * @param {number} result
 */
function displayResult(result) {
    document.getElementById("result").textContent = "Result: " + result;
}

/**
 * Addition operation
 */
function add() {
    const values = getInputValues();
    displayResult(values.number1 + values.number2);
}

/**
 * Subtraction operation
 */
function subtract() {
    const values = getInputValues();
    displayResult(values.number1 - values.number2);
}

/**
 * Multiplication operation
 */
function multiply() {
    const values = getInputValues();
    displayResult(values.number1 * values.number2);
}

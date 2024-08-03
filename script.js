let display = document.getElementById('display');
let currentInput = '';
let result = '';

function appendNumber(number) {
    if (result) {
        clearDisplay();
        result = '';
    }
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (result) {
        currentInput = result;
        result = '';
    }
    currentInput += operator;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculateResult() {
    try {
        result = eval(currentInput);
        display.innerText = result;
        currentInput = '';
    } catch (error) {
        display.innerText = 'Error';
    }
}

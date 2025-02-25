let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        let result = evaluateExpression(expression);
        display.value = result;
    } catch (error) {
        display.value = 'tidak berhasil';
    }
}

function evaluateExpression(expression) {
    let numbers = expression.split(/[\+\-\*\/]/);
    let operators = expression.replace(/[0-9.]/g, '').split('');

    let result = parseFloat(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
        let nextNumber = parseFloat(numbers[i + 1]);
        switch (operators[i]) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber === 0) {
                    throw new Error('Division by zero');
                }
                result /= nextNumber;
                break;
            default:
                throw new Error('Invalid operator');
        }
    }
    return result;
}
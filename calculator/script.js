let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || '0';
    }
}

function appendCharacter(char) {
    if (operator && !firstOperand) {
        firstOperand = currentInput;
        currentInput = '';
    }
    currentInput += char;
    display.innerText = currentInput;
}

function calculateResult() {
    if (firstOperand && currentInput && operator) {
        let result;
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(currentInput);
        
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        display.innerText = result;
        currentInput = result.toString();
        operator = '';
        firstOperand = '';
    }
}

function handleOperator(op) {
    if (currentInput) {
        if (operator && firstOperand) {
            calculateResult();
        }
        operator = op;
        firstOperand = currentInput;
        currentInput = '';
    }
}


document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', event => {
        const char = event.target.innerText;

        if (char === '+' || char === '-' || char === '*' || char === '/') {
            handleOperator(char);
        } else if (char === '=') {
            calculateResult();
        } else if (char === 'C') {
            clearDisplay();
        } else if (char === 'DEL') {
            deleteLast();
        } else {
            appendCharacter(char);
        }
    });
});

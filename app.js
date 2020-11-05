const numbers = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '';

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

equal.addEventListener("click", (event) => {
    calculate();
    updateScreen(currentNumber);
});

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

decimal.addEventListener("click", (event) =>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
};

const clearAll = () => {
    prevNumber = 0;
    calculationOperator = '';
    currentNumber = 0;
};

const calculate = () => {
    let result = 0;
    if (prevNumber != null || currentNumber != null) {
        switch (calculationOperator) {
            case "+":
                result = parseFloat(prevNumber) + parseFloat(currentNumber);
                break;
            case "-":
                result = parseFloat(prevNumber) - parseFloat(currentNumber);
                break;
            case "*":
                result = parseFloat(prevNumber) * parseFloat(currentNumber);
                break;
            case "/": 
                result = parseFloat(prevNumber) / parseFloat(currentNumber);
                break;
            default:
                break;
        }
    } else {
        // currentNumber = result;
    }
    currentNumber = result;
    calculationOperator = '';
    console.log(result)
}

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
};
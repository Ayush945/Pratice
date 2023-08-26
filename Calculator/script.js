const inputField = document.getElementById('inputField');
const buttons = document.querySelectorAll(".buttonContainer button");
const clearButton = document.getElementById("clearButton");
const calculateButton = document.getElementById("calculateButton");

const addbutton = document.getElementById('plus');
const minusbutton = document.getElementById('minus');
const multiplybutton = document.getElementById('multiply');
const dividebutton = document.getElementById('divide');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        inputField.value += buttonValue;
    })
})

clearButton.addEventListener("click", () => {
    inputField.value = '';
})

calculateButton.addEventListener("click", () => {
    const expression = inputField.value;
    const result = calculate(expression);
    inputField.value = result;
})

function calculate(expression) {
    try {
        const operators = ['+', '-', '*', '/']
        let opeator = null

        for (const op of operators) {
            if (expression.includes(op)) {
                opeator = op;
                break;
            }
        }
        if (opeator) {
            const operands = expression.split(opeator);
            const num1 = parseFloat(operands[0]);
            const num2 = parseFloat(operands[1]);

            switch (opeator) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    return num1 / num2;
            }
        }

    } catch (error) {
        return "Error";
    }
}

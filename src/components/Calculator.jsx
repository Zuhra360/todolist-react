import { useNavigate } from "react-router-dom";
import './Calculator.module.css';

export const Calculator = () => {
    const navigate = useNavigate();

    var Number1 = '';
var Number2 = '';
var operation = null;

function appendNumber(number) {
    Number1 += number;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = Number1;
}

function setOperation(op) {
    if (Number1 === '') return;
    if (Number2 !== '') {
    calculateResult();
    }
    operation = op;
    Number2 = Number1;
    Number1 = '';
    }

function calculateResult() {
    let result;
    const no2 = parseInt(Number2);
    const no1 = parseInt(Number1);
    switch (operation) {
        case '+':
            result = no2 + no1;
            break;
        case '-':
            result = no2 - no1;
            break;
        case '*':
            result = no2 * no1;
            break;
        case '/':
            result = no2 / no1;
            break;
        default:
            return;
    }
    Number1 = result;
    operation = null;
    Number2 = '';
    updateDisplay();
}

function clearDisplay() {
    Number1 = '';
    Number2 = '';
    operation = null;
    updateDisplay();
}
    return(
        <>
        <div id="root"></div>
        <h1 style={"text-align :center"}>CALCULATOR</h1>
        <div class="calculator">
        <input type="text" class="display" id="display" readonly></input>
        <div class="buttons">
        <div>
            <button onclick="appendNumber('1')">1</button>
            <button onclick="appendNumber('2')">2</button>
            <button onclick="appendNumber('3')">3</button>
            <button onclick="setOperation('+')">+</button>
        </div>
        <div>
            <button onclick="appendNumber('4')">4</button>
            <button onclick="appendNumber('5')">5</button>
            <button onclick="appendNumber('6')">6</button>
            <button onclick="setOperation('-')">-</button>
        </div>
        <div>
            <button onclick="appendNumber('7')">7</button>
            <button onclick="appendNumber('8')">8</button>
            <button onclick="appendNumber('9')">9</button>
            <button onclick="setOperation('*')">*</button>
        </div>
        <div>
            <button onclick="appendNumber('0')">0</button>
            <button onclick="clearDisplay()">C</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="setOperation('/')">/</button>
        </div>
        </div>
    </div>
    </>
);
};
let num1;
let num2;
let operations = ["+", "-", "×", "÷"];
let result;
let randomOperator;
const score = document.querySelector("#score");
const questions = document.querySelector("#quesiton");
const userInput = document.querySelector("#userInput");
let count = JSON.parse(localStorage.getItem("score"));
if (!count) {
    count = 0;
}
score.innerText = `Score : ${count}`;
const calculation = () => {
    // console.log(operations[randomOperation]);
    // *check random operators
    if (operations[randomOperator] === "+") {
        result = num1 + num2;
    } else if (operations[randomOperator] === "-") {
        result = num1 - num2;
    } else if (operations[randomOperator] === "×") {
        result = num1 * num2;
    } else if (operations[randomOperator] === "÷") {
        result = num1 / num2;
    }
    return result;
}



// *generate quesitons
function generateQuesiton() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    randomOperator = Math.floor(Math.random() * operations.length);
    questions.innerText = `What is ${num1} ${operations[randomOperator]} ${num2} ?`;
}


function checkResult() {
    if (count < 0) {
        count = 0;
    }
}

function Checkanswer() {
    let answer = calculation();
    const userAnswer = +userInput.value;
    if (answer === userAnswer) {
        count++;
        checkResult();
        updateScore();
    } else {
        count--;
        checkResult();
        updateScore();
    }
    score.innerText = `Score : ${count}`;
}
generateQuesiton();
// *function checkResult

document.querySelector("#submit").addEventListener("click", () => {
    Checkanswer();
    generateQuesiton();
    userInput.value = "";

})

// *local storage
function updateScore() {
    localStorage.setItem("score", JSON.stringify(count));
}
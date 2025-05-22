const display = document.querySelector(".display");
let currentNum = "";
let waitingNum, operator;

const clearCurrent = () => currentNum = "";
const clearWaiting = () => waitingNum = "";
const clearOperator = () => operator = "";
const clearDisplay = () => display.textContent = "";

const clearCalculator = () => {
  clearCurrent();
  clearOperator();
  clearWaiting();
  clearDisplay();
}

const updateNumber = (a) => {
  currentNum = "" + currentNum + a;
  display.textContent = currentNum;
}

const updateOperator = (o) => {
  if(waitingNum && currentNum){
    logEquation("hiyaa folks");
    operate();
  }
  else{
    logEquation("beforeElse");
    waitingNum = currentNum;
    clearCurrent();
  }
  operator = o;
  logEquation("afterall");
}
// const equals = () => {
//   waitingNum = operate();
//   display.textContent = waitingNum;
//   clearCurrent(); 
// }
const logEquation = (msg) => {
  console.log(`${msg} with W:${waitingNum} O:${operator} C:${currentNum}`);
  
}
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => {
  return b ? a/b : "DIV BY ZERO" 
};

const operate = () => {
  if(!(waitingNum && operator && currentNum)){
    alert("Hey There! enter two numbers and an operator")
    return
  }
  if(operator == "/" && currentNum == 0){
    display.textContent = "noDIVBY0";
    clearCurrent();
    clearWaiting();
    clearOperator();
    return
  }
  console.log(`${waitingNum} ${operator} ${currentNum}`)
  waitingNum = +waitingNum
  currentNum = +currentNum

  switch (operator) {
    case "+":
      waitingNum = add(waitingNum, currentNum);
      break;
    case "-":
      waitingNum = subtract(waitingNum, currentNum);
      break;
    case "*":
    case "x":
      waitingNum = multiply(waitingNum, currentNum);
      break;
    case "/":
      waitingNum = divide(waitingNum, currentNum);
      break;
    default:
      throw new Error("Invalid operator");
  }

  display.textContent = waitingNum.toFixed(3);
  clearCurrent();
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  operate,
};
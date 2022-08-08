let buttons = document.querySelector('#buttons');
let display = document.querySelector('#display');
let valuesArray = [];
let operandosArray = [];
let value = '';
buttons.addEventListener('click', (event) => {
if (event.target.getAttribute('btn-raw-data') !== null) {
  let btnText = event.target.getAttribute('btn-raw-data');
  display.textContent += btnText;
  if (btnText == '*' || btnText == '-' || btnText == '+' || btnText == '/' || btnText == '=') {
    let operando = btnText;
    console.log(value);
    value = Number(value);
    valuesArray.push(value);
    operandosArray.push(operando);
    console.log(valuesArray);
    console.log(operandosArray);
    console.log(value);
    if (btnText == '=') {
      let result = operate(operandosArray[0], valuesArray[0], valuesArray[1]);
      console.log(result);
      display.textContent =  result;
    }
    value = '';
  }else{
    value += btnText;
  }
}
})

let give = digit => digit;

let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

let operate = (operando, a, b) => {
  let res;
  switch(operando){
    case '+':
      res = add(a, b);
      break;
    case '-':
      res = subtract(a, b);
      break;
    case '*':
      res = multiply(a, b);
      break;
    case '/':
      res = divide(a, b);
      break;
  }
  return res;
} 
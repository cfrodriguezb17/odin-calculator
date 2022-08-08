let buttons = document.querySelector('#buttons');
let display = document.querySelector('#display');
let valuesArray = [];
let operandosArray = [];
let value = '';
buttons.addEventListener('click', (event) => {
if (event.target.getAttribute('btn-raw-data') !== null) {
  let btnText = event.target.getAttribute('btn-raw-data');
  if (btnText == 'c') {
    valuesArray = [];
    operandosArray = [];
    value = '';
    display.textContent = '';
    btnText = '';
  }
  display.textContent += btnText;
  if (btnText == '*' || btnText == '-' || btnText == '+' || btnText == '/' || btnText == '=') {
    let operando = btnText;
    console.log(value);
    value = Number(value);
    if (value != 0) {
      valuesArray.push(value);
    }
    operandosArray.push(operando);
    console.log(valuesArray.length);
    console.log(operandosArray);
    console.log(value);
    if (operandosArray.length > 1 && valuesArray.length > 1) {
      let result = operate(operandosArray[0], valuesArray[0], valuesArray[1]);
      console.log(result);
      valuesArray = [];
      valuesArray.push(result);
      operandosArray = [];
      if (btnText != '='){
        display.textContent =  result + btnText;
        operandosArray.push(btnText);
      }else{
        display.textContent =  result;

      }
    } else if (valuesArray.length >= 1 && operandosArray.length >= 2){
      operandosArray[0] = operandosArray[1];
      operandosArray.pop();
      let momentText = display.textContent;
      let lastCharacter = momentText[momentText.length - 1];
      momentText = momentText.substring(0, momentText.length - 2);
      momentText = momentText + lastCharacter;
      display.textContent = momentText;
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
let buttons = document.querySelector('#buttons');
let display = document.querySelector('#display');
let valuesArray = [];
let operandosArray = [];
let value = '';
buttons.addEventListener('click', (event) => {
if (event.target.getAttribute('btn-raw-data') !== null) {
  let btnText = event.target.getAttribute('btn-raw-data');
  let cleanValues = () => {
    valuesArray = [];
    operandosArray = [];
    value = '';
    display.textContent = '';
    btnText = '';
  }
  if (btnText == 'c') {
    cleanValues();
  }
  display.textContent += btnText;
  if(display.textContent[0] == '='){
    btnText = ''
    display.textContent = ''
  }
  if(display.textContent[0] == '0' && display.textContent[1] == '0'){
    btnText = '0'
    display.textContent = '0'
  }
  if(display.textContent[display.textContent.length - 1] == '0' && display.textContent[display.textContent.length - 2] == '/'){
    display.textContent = 'No sea loka';
    setTimeout(cleanValues, 600);
  }
  if (btnText == '*' || btnText == '-' || btnText == '+' || btnText == '/' || btnText == '=') {
    let operando = btnText;
    value = Number(value);
    if (value != 0) {
      valuesArray.push(value);
    }
    operandosArray.push(operando);
    if (operandosArray[0] == '=') {
      operandosArray = [];
      let momentText = display.textContent;
      momentText = momentText.substring(0, momentText.length - 1);
      display.textContent = momentText;
    }
    console.log(operandosArray);
    if (operandosArray.length > 1 && valuesArray.length > 1) {
      let result = operate(operandosArray[0], valuesArray[0], valuesArray[1]);
      valuesArray = [];
      valuesArray.push(result);
      operandosArray = [];
      if(!Number.isInteger(result)){
        result = result.toFixed(4);
      }
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

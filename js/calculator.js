let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
  if (isNaN(value)) {
    //not number
    handleSymbol(value);
  } else {
    //number
    handleNumber(value);
  }
}

function handleSymbol(symbol){}
function hanleNumber(numberString){
  if (buffer === '0') {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
      console.log(event)
      buttonClick(event.target.innerText);
    })
}

init();
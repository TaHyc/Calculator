let numberA = document.querySelector('.js-number-a')
let numberB = document.querySelector('.js-number-b')
let resultAll = document.querySelector('.js-result')
let output = document.querySelector('.js-out')
let select = document.querySelector('.js-select-operation')
let reset = document.querySelector('#reset')


resultAll.addEventListener('click', function(){
const a = Number(numberA.value);
const b = Number(numberB.value);
const operation = select.value;

const result = calculate({a,b,operation})

output.innerHTML=result;
}
);

function sum(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function division(a, b) {
    return a / b
}
const OPERATIONS = {
    sum: "+",
    substract: "-",
    multiply: "*",
    division: "/"
};

function calculate({ a, b, operation }) {
    let result = null;

    switch (operation){
    case OPERATIONS.sum:
    result=sum(a,b);
    break;

    case OPERATIONS.substract:
    result=substract(a,b);
    break;
    
    case OPERATIONS.multiply:
    result=multiply(a,b);
    break;

    case OPERATIONS.division:
    result=division(a,b);
    break;

    default:

    break;
    }
    return result
}

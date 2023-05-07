let a = '';// first number
let b = ''; // second number
let sign = ''; // знак операции
let result = ''; // ответ
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'x', '/', '*']

//экран
const out = document.querySelector('.js-out');

document.addEventListener('keydown', (e) => {

    console.log('Cработал ', e.key)

    if (digit.includes(event.key)) {
        if (b === '' && sign === '') {
            a += event.key;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = event.key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += event.key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
    if (event.key =='r') {
        clearAll()
    }
    //если нажата кнавиша +, -, *, /
    if (action.includes(event.key)) {
        sign = event.key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //нажата =
    if (event.key === '=') {

        switch (sign) {
            case '+':
                result = (+a) + (+b);
                break;
            case '-':
                result = a - b;
                break;
            case 'x' || '*':
                result = a * b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
        finish = true;
        if (result === '') "0"
        else out.textContent = result;
        console.log(a, b, sign, "=", result);
    }
})

document.querySelector('.reset').onclick = clearAll;
function clearAll() {
    a = ''// first number and result
    b = ''; // second number
    sign = ''; // знак
    result = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.allButtons').onclick = (event) => {

    // нажата не кнопка
    if (!event.target.classList.contains('oneButton')) return;

    // нажата кнопка clearAll 
    if (event.target.classList.contains('reset')) return;
    out.textContent = '0';

    // получаю нажатую кнопку
    const key = event.target.textContent;

    // если нажата клавиша 0-9 или
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }

        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    //если нажата кнавиша +
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //нажата =
    if (key === '=') {
        switch (sign) {
            case '+':
                result = (+a) + (+b);
                break;
            case '-':
                result = a - b;
                break;
            case 'x' || '*':
                result = a * b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
        finish = true;
        if (result === '') "0"
        else out.textContent = result;
        console.log(a, b, sign, "=", result);
    }
}

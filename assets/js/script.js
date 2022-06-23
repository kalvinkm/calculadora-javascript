const display = document.getElementById('display')
const numbers = document.querySelectorAll('#number-key')
const cleanerKey = document.getElementById('clean-key')
const backKey = document.getElementById('back-key')
const result = document.getElementById('equal-key')
var numberResult


function insertNumber(num) {
   numberResult = display.innerHTML
   display.innerHTML = numberResult + num.target.textContent
}

function cleanerDisplay() {
    display.innerHTML = ''
}

function backSpace() {
    numberResult = display.innerHTML
    display.innerHTML = numberResult.substring(0, numberResult.length - 1)
}

function calculate() {
    numberResult = display.innerHTML
    if(numberResult) {
        document.getElementById('display').innerHTML = eval(numberResult)
    }
}


numbers.forEach(number => number.addEventListener('click', insertNumber))
result.addEventListener('click', calculate)
cleanerKey.addEventListener('click', cleanerDisplay)
backKey.addEventListener('click', backSpace)
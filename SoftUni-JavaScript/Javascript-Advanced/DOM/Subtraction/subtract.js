function subtract() {
    let num1 = document.querySelector('#firstNumber').value;
    let num2 = document.querySelector('#secondNumber').value;

    let result = Number(num1) - Number(num2);

    let parentEl = document.querySelector('#result');
    console.log(parentEl);
    parentEl.innerHTML = result;

}

window.onload = subtract;
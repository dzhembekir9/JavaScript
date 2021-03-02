function solve() {
    
    let btn = document.querySelectorAll('button');
    let expOutput = document.querySelector('#expressionOutput');
    let resultOutput = document.querySelector('#resultOutput');

    const calculate = (value) => {
        if (value === '=') {
            let exp = expOutput.innerHTML;

            let result = eval(exp);
            resultOutput.innerHTML = result;
        }
        if (value !== 'Clear') {
            if (value == Number(value)) {
                expOutput.innerHTML += value;
            }
            else {
                expOutput.innerHTML += ' ' + value + ' ';
            }
        }
        else {
            expOutput.innerHTML = '';
            resultOutput.innerHTML = '';
        }
        
    }
    
    btn.forEach(x => {
        x.addEventListener('click', function() {
            calculate(x.value);
        });
    });

}
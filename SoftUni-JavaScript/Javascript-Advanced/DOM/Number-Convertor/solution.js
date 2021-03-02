function solve() {

    let selectEl = document.querySelector('#selectMenuTo');

    let hexadecimalOption = new Option('Hexadecimal', undefined);
    let binaryOption = new Option('Binary', undefined);

    selectEl.add(hexadecimalOption, undefined);
    selectEl.add(binaryOption, undefined);

    const convert = () => {
        let toValue = selectEl.value;
        let number = Number(document.querySelector('#input').value);
        let resultEl = document.querySelector('#result');
        
        if (toValue === 'Hexadecimal') {
            let hex = number.toString(16);
            resultEl.value = hex;
        }
        else if (toValue === 'Binary') {
            let binary = number.toString(2);
            resultEl.value = binary;
        }
    }

    let btn = document.querySelector('button');
    btn.addEventListener('click', convert);

}
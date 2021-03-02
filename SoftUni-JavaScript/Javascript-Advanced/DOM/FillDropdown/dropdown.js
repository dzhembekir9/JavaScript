function addItem() {
    let inputEl = document.querySelector('#newItemText');
    let text = inputEl.value;

    let valueEl = document.querySelector('#newItemValue');
    let value = valueEl.value;

    let selectEl = document.querySelector('#menu');

    let option = new Option(text, value);

    selectEl.add(option, undefined);
}
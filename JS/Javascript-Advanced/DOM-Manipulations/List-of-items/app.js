function addItem() {
    
    let ulEl = document.querySelector('#items');
    let textEl = document.querySelector('#newItemText');
    
    let newEl = document.createElement('li');
    newEl.innerHTML = textEl.value;

    ulEl.appendChild(newEl);
}
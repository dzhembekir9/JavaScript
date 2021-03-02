function addItem() {
    
    const deleteItem = (target) => {
        ulEl.removeChild(target.parentElement);
    }

    let textEl = document.querySelector('#newText');
    let ulEl = document.querySelector('#items');
    
    let newEl = document.createElement('li');
    newEl.innerHTML = textEl.value + ' ';
    
    let deleteEl = document.createElement('u');
    deleteEl.style.cursor = 'pointer';
    deleteEl.textContent = 'Delete';
    deleteEl.addEventListener('click', (event) => {
        deleteItem(event.target);
    });
    
    newEl.appendChild(deleteEl);
    ulEl.appendChild(newEl);
    
    textEl.value = '';
}
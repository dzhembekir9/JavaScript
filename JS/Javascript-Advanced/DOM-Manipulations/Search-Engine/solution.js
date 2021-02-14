function solve() {
    
    let button = document.querySelector('#searchBtn');
    let searchField = document.querySelector('#searchField');
    let cellParentEl = document.querySelector('tbody');
    let cellEl = cellParentEl.querySelectorAll('td');

    const searchHandler = () => {

        cellEl.forEach(x => {
            x.parentElement.classList.remove('select');
        });
        
        cellEl.forEach(x => {
            if (x.innerHTML.toLowerCase().includes(searchField.value)) {
                x.parentElement.classList.add('select');
            }
        });

    }

    button.addEventListener('click', searchHandler);

}
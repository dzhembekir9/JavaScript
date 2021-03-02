function deleteByEmail() {
    
    let email = document.querySelector('input').value;
    let emailEl = document.querySelectorAll('td');
    let tBodyEl = document.querySelector('tbody');
    let resultEl = document.querySelector('#result');

    emailEl.forEach(x => {
        if (x.innerHTML === email) {
            resultEl.innerHTML = 'Deleted';
        }
        else {
            resultEl.innerHTML = 'Not found';
        }
    });
    
    emailEl.forEach(x => {
        if (x.innerHTML === email) {
            tBodyEl.removeChild(x.parentElement);
        }
    });


}
function toggle() {
    let pEl = document.querySelector('#extra');

    if (document.querySelector('.button').innerHTML === 'More') {
        document.querySelector('.button').innerHTML = 'Less';
        pEl.style.display = 'block';
    }
    else {
        document.querySelector('.button').innerHTML = 'More';
        pEl.style.display = 'none';
    }

}
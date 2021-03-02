function lockedProfile() {
    
    let buttonElements = document.querySelectorAll('button');

    const infoHandler = (e) => {

        let parentEl = e.target.parentElement;
        let radioElements = parentEl.querySelectorAll('input[type="radio"]');
        let hiddenInfoEl = parentEl.querySelector('div');
        
        if (e.target.innerHTML === 'Hide it' && radioElements[1].checked === true) {
            hiddenInfoEl.style.display = 'none';
            e.target.innerHTML = 'Show more ';
        }

        else if (radioElements[1].checked === true) {
            hiddenInfoEl.style.display = 'block';
            e.target.innerHTML = 'Hide it';
        }
    }

    buttonElements.forEach(x => {
        x.addEventListener('click', e => {
            infoHandler(e);
        })
    });

}
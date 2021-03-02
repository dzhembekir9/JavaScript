function focus() {

    let inputElements = document.querySelectorAll('input');


    inputElements.forEach(x => {
        x.addEventListener('focus', e => {
            e.target.parentElement.classList.add('focused');
        });
        x.addEventListener('blur', e => {
            e.target.parentElement.classList.remove('focused');
        });
    });

}
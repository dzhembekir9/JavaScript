function validate() {
    
    let inputElement = document.querySelector('input');
    let template = /[(a-z)||(1-9)]+@[a-z]+.[a-z]+/;

    const checkEmailHandler = () => {
        if (template.test(inputElement.value)) {
            inputElement.classList.remove('error');
        }
        else {
            inputElement.classList.add('error');
        }
    }

    inputElement.addEventListener('change', e => {
        checkEmailHandler();
    });

}
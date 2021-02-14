function notify(str) {
    
    let notEl = document.querySelector('#notification');
    notEl.innerHTML = str;
    notEl.style.display = 'block';

    setInterval(function e () {
        notEl.style.display = 'none';
    }, 2000);

}

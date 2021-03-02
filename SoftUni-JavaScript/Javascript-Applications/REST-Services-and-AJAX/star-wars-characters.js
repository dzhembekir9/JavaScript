
let btnEl = document.querySelector('button');
let ulEl = document.querySelector('ul');

btnEl.addEventListener('click', function () {
    const httpRequest = new XMLHttpRequest();
    
    httpRequest.addEventListener('loadend', function () {
        let person = JSON.parse(this.response);
        ulEl.innerHTML += `<li>${person.name}</li>`
    });
    
    let rndNum = Math.floor(Math.random() * 30 + 1);
    const url = `https://swapi.dev/api/people/${rndNum}/`;
    httpRequest.open('GET', url);
    httpRequest.send();

});

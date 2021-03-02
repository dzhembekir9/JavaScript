let btnEl = document.querySelector('button');
let ulEl = document.querySelector('ul');

btnEl.addEventListener('click', function () {

    let inputEl = document.createElement("INPUT");
    inputEl.setAttribute("type", "text");

    let sendBtnEl = document.createElement('button');
    sendBtnEl.innerHTML = 'Get messages';
    sendBtnEl.addEventListener('click', function() {

        const url = `https://rest-messanger.firebaseio.com/messanger.json`;
        let httpRequest = new XMLHttpRequest();

        httpRequest.addEventListener('loadend', function () {
            
            let response = JSON.parse(httpRequest.response);
            
            for (let value of Object.values(response)) {
                console.log(`Author: ${value['author']} - ${value['content']}`);
            }

        });
        httpRequest.open('GET', url);
        httpRequest.send();

    });

    document.body.appendChild(inputEl);
    document.body.appendChild(sendBtnEl);
});
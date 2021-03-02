let btnEl = document.querySelector('button');
let ulEl = document.querySelector('ul');

btnEl.addEventListener('click', function () {

    let inputEl = document.createElement("INPUT");
    inputEl.setAttribute("type", "text");

    let sendBtnEl = document.createElement('button');
    sendBtnEl.innerHTML = 'Get repos';
    sendBtnEl.addEventListener('click', function() {

        const url = `https://judgetests.firebaseio.com/businfo/${inputEl.value}.json`;
        let httpRequest = new XMLHttpRequest();

        httpRequest.addEventListener('loadend', function () {
            
            let response = JSON.parse(httpRequest.responseText);

            
            for (let [key, value] of Object.entries(response.buses)) {
                ulEl.innerHTML += `<li>Bus ${key} arrives in ${value} minutes</li>`
            }

        });
        httpRequest.open('GET', url);
        httpRequest.send();

    });

    document.body.appendChild(inputEl);
    document.body.appendChild(sendBtnEl);
});
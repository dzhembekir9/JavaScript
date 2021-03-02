let btnEl = document.querySelector('button');

btnEl.addEventListener('click', function () {

    let inputEl = document.createElement("INPUT");
    inputEl.setAttribute("type", "text");

    let sendBtnEl = document.createElement('button');
    sendBtnEl.innerHTML = 'Get repos';
    sendBtnEl.addEventListener('click', function() {

        let user = inputEl.value;

        const url = `https://api.github.com/users/${user}/repos`;
        let httpRequest = new XMLHttpRequest();

        httpRequest.addEventListener('loadend', function () {
            let response = httpRequest.response;

            let obj = JSON.parse(response);
            
            console.log(obj);

        });
        httpRequest.open('GET', url);
        httpRequest.send();

    });

    document.body.appendChild(inputEl);
    document.body.appendChild(sendBtnEl);
});
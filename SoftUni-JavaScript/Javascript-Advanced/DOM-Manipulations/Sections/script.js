function create(arr) {
    
    const showTextHandler = (e) => {
        let textElement = e.target.childNodes[0];
        textElement.style.display = 'block';
    }

    arr.forEach(x => {
        let newElement = document.createElement('div');
        let textElement = document.createElement('p');
        textElement.innerHTML = x;
        textElement.style.display = 'none';
        newElement.appendChild(textElement);
        document.getElementById('content').appendChild(newElement);
        newElement.addEventListener('click', e => {
            showTextHandler(e);
        });
    });

}
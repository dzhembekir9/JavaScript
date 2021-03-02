function encodeAndDecodeMessages() {
    
    let textAreaEl = document.querySelectorAll('textarea');
    let buttonEl = document.querySelectorAll('button');

    const encodeMsg = () => {
        let text = textAreaEl[0].value;

        let encoded = [];

        for (let i in text) {
            encoded.push(text.charCodeAt(i) + 1);
        }
        
        return encoded;
    
    }

    const decodeMsg = () => {
        let decoded = '';
        let encoded = encodeMsg();

        encoded.forEach(x => {
            decoded += String.fromCharCode(x);
        });

        textAreaEl[1].innerHTML = decoded;
        
    }


    buttonEl[0].addEventListener('click', encodeMsg);
    buttonEl[1].addEventListener('click', decodeMsg);
}
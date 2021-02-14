function solve() {
    let btn = document.querySelector('#send');

    const addMsg = () => {
        let textAreaEl = document.querySelector('#chat_input');

        let msgBox = document.querySelector('#chat_messages');
        let newMsg = document.createElement('div');
        newMsg.className = 'message my-message';
        newMsg.innerHTML = textAreaEl.value;
        msgBox.appendChild(newMsg);

        textAreaEl.value = '';
    }

    btn.addEventListener('click', addMsg);
}
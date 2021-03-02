let h1El = document.querySelector('h1');
let pEl = document.querySelector('p');
let h2El = document.querySelector('h2');
let ulEl = document.querySelector('ul');

let btnEl = document.querySelector('button');
let inputEl = document.querySelector('input');


btnEl.addEventListener('click', () => {
    fetch('https://blog-apps-c12bf.firebaseio.com/.json')
    .then(res => res.json())
    .then(data => {
            ulEl.innerHTML = '';
            h2El.innerHTML = 'Comments';
            for (let value of Object.values(data.posts)) {
                if (value.title === inputEl.value) {
                    h1El.innerHTML = value.title;
                    pEl.innerHTML = value.body;
                    for (let comment of Object.values(data.comments)) {
                        if (comment.postId === value.id) {
                            ulEl.innerHTML += `<li>${comment.text}</li>`;
                        }
                    }
                }
            }
        })
});

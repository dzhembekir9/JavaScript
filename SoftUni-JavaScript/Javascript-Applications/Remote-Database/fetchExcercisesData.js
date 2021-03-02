let getElement = document.querySelector('.add');
getElement.addEventListener('click', getData);

let exEl = document.querySelector('.ex-name');
let ratingEl = document.querySelector('.ex-rating');

let inputNameEl = document.querySelectorAll('input')[0];
let inputRatingEl = document.querySelectorAll('input')[1];


function getData() {

    if (inputRatingEl.value && inputNameEl.value) {
        fetch('https://fitness-excercises-default-rtdb.firebaseio.com/.json', {
            method: 'POST',
            body: JSON.stringify({
                name: inputNameEl.value,
                rating: inputRatingEl.value
            })
        })
    }
    

    fetch('https://fitness-excercises-default-rtdb.firebaseio.com/.json')
    .then(res => res.json())
    .then(data => {
        exEl.innerHTML = '';
        ratingEl.innerHTML = '';
            for (let value of Object.values(data)) {
                exEl.innerHTML += `<h2>${value.name}</h2>`;
                ratingEl.innerHTML += `<h2>${value.rating}</h2>`;
            }

        })

}

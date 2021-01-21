// 1

const div = document.createElement('div');
div.setAttribute('class', 'wrapper');
document.body.appendChild(div);

// 2

const list = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'one';
const li2 = document.createElement('li');
li2.textContent = 'two';
const li3 = document.createElement('li');
li3.textContent = 'three';

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);

div.appendChild(list);

// 3

const img = document.createElement('img');
img.src = './img.jpg';
img.width = '250';
img.className = 'cute';
img.alt = 'Cute Birds';

document.body.appendChild(img);

// 4

const div2 = document.createElement('div');
const p1 = document.createElement('p');
const p2 = document.createElement('p');

div2.appendChild(p1);
div2.appendChild(p2);

list.insertAdjacentElement('beforebegin', div2);
p1.className = 'warning';
div2.removeChild(p2);

// 5

function generatePlayerCard(name, age, height) {
  const playerCard = `<div class  ="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be
            ${age / 15}. That would be a tall dog!
        </p>
    </div>`;
  div.innerHTML = playerCard;
}

generatePlayerCard('Djem', 19, '174');

// 6

const newDiv = document.createElement('div');
newDiv.className = 'cards';

const card1 = document.createElement('h1');
card1.textContent = 'card1';
const button1 = document.createElement('button');
button1.innerHTML = 'remove';
const card2 = document.createElement('h1');
card2.textContent = 'card2';
const button2 = document.createElement('button');
button2.innerHTML = 'remove';
const card3 = document.createElement('h1');
card3.textContent = 'card3';
const button3 = document.createElement('button');
button3.innerHTML = 'remove';
const card4 = document.createElement('h1');
card4.textContent = 'card4';
const button4 = document.createElement('button');
button4.innerHTML = 'remove';

newDiv.appendChild(card1);
newDiv.appendChild(button1);
newDiv.appendChild(card2);
newDiv.appendChild(button2);
newDiv.appendChild(card3);
newDiv.appendChild(button3);
newDiv.appendChild(card4);
newDiv.appendChild(button4);

button1.onclick = function remove1() {
  newDiv.removeChild(card1);
  newDiv.removeChild(button1);
};

button2.onclick = function remove1() {
  newDiv.removeChild(card2);
  newDiv.removeChild(button2);
};

button3.onclick = function remove1() {
  newDiv.removeChild(card3);
  newDiv.removeChild(button3);
};

button4.onclick = function remove1() {
  newDiv.removeChild(card4);
  newDiv.removeChild(button4);
};

// div.insertAdjacentElement('beforebegin', newDiv);

document.body.appendChild(newDiv);

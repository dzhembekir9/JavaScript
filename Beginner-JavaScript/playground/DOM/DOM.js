function init() {
  /*
    const h1 = document.getElementById('h1');
    const inner = h1.innerHTML;
    if (inner === 'This is my title') {
        alert('I love your title');
    }
    else {
        alert('Change your title');
    } */

  const div = document.querySelector('div');
  console.log(div.innerHTML);
  console.log(div.innerText);

  let counter = 0;

  function addSurname() {
    const name = div.querySelector('.name');
    if (counter <= 1) {
      name.insertAdjacentText('beforeend', ' Bekir');
    } else {
      name.insertAdjacentText('beforeend', '.');
    }
  }

  document.getElementById('btn').onclick = function () {
    counter += 1;
    addSurname();
  };

  const img = document.querySelector('img');
  function togglePic() {
    img.classList.toggle('pic');
  }
  img.onclick = function togglePicture() {
    togglePic();
  };
}

window.onload = init;

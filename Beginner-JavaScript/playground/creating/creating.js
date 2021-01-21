function init() {
  let counter = 1;
  function addTag() {
    const newPTag = document.createElement('p');
    newPTag.innerHTML = `${counter}`;
    document.body.appendChild(newPTag);
    counter += 1;
  }
  function removeTag() {
    if (counter > 1) {
      document.body.removeChild(document.body.lastChild);
      counter -= 1;
    }
  }
  const add = document.querySelector('.add');
  add.onclick = function () {
    addTag();
  };
  const remove = document.querySelector('.delete');
  remove.onclick = function () {
    removeTag();
  };
}

window.onload = init;

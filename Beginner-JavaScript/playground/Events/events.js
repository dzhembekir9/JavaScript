const addProductBtn = document.createElement('button');
addProductBtn.innerHTML = 'Add new product';
addProductBtn.classList.add('class', 'product');
document.body.appendChild(addProductBtn);
const delButtonStatic = document.createElement('button');
delButtonStatic.innerHTML = 'DELETE PRODUCT';
document.body.appendChild(delButtonStatic);

let counter = 0;
const addProduct = () => {
  counter += 1;
  const newProduct = document.createElement('h1');
  const deleteBtn = document.createElement('button');
  deleteBtn.className = `btn`;
  newProduct.textContent = `Product ${counter}`;
  deleteBtn.textContent = `Delete product ${counter}`;
  const parentDiv = document.createElement('div');
  parentDiv.appendChild(newProduct);
  parentDiv.appendChild(deleteBtn);
  document.body.appendChild(parentDiv);
};

function deleteProduct(event) {
  const currentBtn = event.currentTarget;
  currentBtn.parentElement.remove();
  counter -= 1;
}

function delProduct() {
  const div = document.querySelector('div');
  document.body.removeChild(div);
  counter -= 1;
}

addProductBtn.addEventListener('click', addProduct);
const delBtns = document.querySelectorAll('button.btn');
delBtns.forEach((btn) => btn.addEventListener('click', deleteProduct));
delButtonStatic.addEventListener('click', delProduct);

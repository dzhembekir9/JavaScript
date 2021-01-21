// function init() {
//   let counter = 1;
//   const button = document.querySelector('button');
//   function toggleNavbar() {
//     if (counter % 2 === 0) {
//       const container = document.querySelector('ul');
//       container.style.display = 'flex';
//     } else {
//       const container = document.querySelector('ul');
//       container.style.display = 'none';
//     }
//   }
//   button.onclick = function name() {
//     counter += 1;
//     toggleNavbar();
//   };
// }

function init() {
  const button = document.querySelector('button');
  function toggleNavbar() {
    const ul = document.querySelector('ul');
    ul.classList.toggle('navbar-container');
  }
  button.onclick = function name() {
    toggleNavbar();
  };
}

window.onload = init;

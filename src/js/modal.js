const open = document.querySelector ('.button');
const modalContainer =  document.querySelector ('.modalContainer');
const close = document.querySelector ('.modal__close');

open.addEventListener('click', () => {
    modalContainer.classList.add('show');
   console.log ('Hi')

});

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
   


});
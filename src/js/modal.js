const open1 = document.querySelector ('.button');
const modalContainer =  document.querySelector ('.modalContainer');
const close1 = document.querySelector ('.modal__close');

open1.addEventListener('click', () => {
    modalContainer.classList.add('show');
//    console.log ('Hi')

});

close1.addEventListener('click', () => {
    modalContainer.classList.remove('show');
   


});
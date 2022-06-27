const open = document.getElementById('open');
const modal_box = document.getElementById('modal-box');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_box.classList.add('show');
});

close.addEventListener('click', () => {
    modal_box.classList.remove('show');
});
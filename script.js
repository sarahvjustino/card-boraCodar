const btn3d = document.querySelector('#image-3d');
const btnGifClose = document.querySelector('#close');
let image = document.querySelector('img');

btn3d.addEventListener('click', changeImageToGif);
btnGifClose.addEventListener('click', closeGif);

function changeImageToGif() {
    toggleButtons()
    image.src = ('./assets/sofa.gif');
}

function closeGif() {
    toggleButtons()
    image.src = ('./assets/img-sofa.png');
}

function toggleButtons() {
    btn3d.classList.toggle('hide');
    btnGifClose.classList.toggle('hide');
}
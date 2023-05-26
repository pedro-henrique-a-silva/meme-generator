const inputTexto = document.querySelector('#text-input');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');

const escreveTextoNoMeme = () => {
  inputTexto.addEventListener('keyup', () => {
    memeText.innerHTML = inputTexto.value;
  });
};

escreveTextoNoMeme();
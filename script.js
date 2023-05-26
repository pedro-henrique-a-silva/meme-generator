const inputTexto = document.querySelector('#text-input');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');

const memeImage = document.querySelector('#meme-image');

const escreveTextoNoMeme = () => {
  inputTexto.addEventListener('keyup', () => {
    memeText.innerHTML = inputTexto.value;
  });
};

const uploadImageToPreview = () => {
  const memeInsert = document.querySelector('#meme-insert');
  memeInsert.addEventListener('change', (event) => {
    const image = event.target.files[0];
    memeImage.src = URL.createObjectURL(image);
    memeImageContainer.style.height = memeImage.style.height;
  });
};

escreveTextoNoMeme();
uploadImageToPreview();

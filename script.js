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
    console.log(event.target);
    console.log(URL.createObjectURL(image));
    memeImage.src = URL.createObjectURL(image);
  });
};

escreveTextoNoMeme();
uploadImageToPreview();

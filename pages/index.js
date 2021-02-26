const pageBackground = document.querySelector('.page');

const backImagesArray = [
  'page__background_first', 
  'page__background_second', 
  'page__background_third', 
  'page__background_four', 
  'page__background_five'
];

function handleRandomBackground(item) {
  let index = Math.floor(Math.random()*item.length);
  pageBackground.classList.toggle(item[index]);
}

setInterval(handleRandomBackground, 4000, backImagesArray);

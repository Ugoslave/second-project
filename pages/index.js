const pageBackground = document.querySelector('.page');

function handleAdBlock(item) {
  pageBackground.classList.toggle(item);
}


setTimeout(handleAdBlock, 6000, 'page__background_first');
setTimeout(handleAdBlock, 12000, 'page__background_second');
setTimeout(handleAdBlock, 18000, 'page__background_third');
setTimeout(handleAdBlock, 24000, 'page__background_four');

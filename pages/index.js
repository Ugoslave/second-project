const adBlock = document.querySelector('.ad-block');
const descriptionBlock = document.querySelector('.description');
const headerBlock = document.querySelector('.header');

function handleAdBlock(item) {
  item.classList.add('ad-block_active');
}

setTimeout(handleAdBlock, 1000, adBlock);
setTimeout(handleAdBlock, 2500, descriptionBlock);
setTimeout(handleAdBlock, 7500, headerBlock);
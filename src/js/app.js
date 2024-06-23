import Board from "./Board";

new Board().init();

const cardContainer = document.querySelector('.card-container');

const cards = [...cardContainer.querySelectorAll('.card')];

let actualCard;

const onMouseUp = (e) => {
  const mouseUpItem = e.target;

  actualCard.classList.remove('card-dragged');

  actualCard = undefined;
  document.documentElement.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mouseover', onMouseOver)
}

const onMouseOver = (e) => {

  actualCard.style.top = e.clientY + 'px';
  actualCard.style.left = e.clientY + 'px';
}

cards.map(card => card.addEventListener('mousedown', e => {
  e.preventDefault()
  actualCard = e.target;

  actualCard.classList.add('card-dragged');

  document.documentElement.addEventListener('mouseup', onMouseUp);
  document.documentElement.addEventListener('mouseover', onMouseOver)
}))

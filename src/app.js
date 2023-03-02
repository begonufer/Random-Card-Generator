/* eslint-disable */
import "bootstrap";
import "./style.css";

function show() {
  //get initial card
  //obtener número aleatoriamente //Math.random(0 12)
  //Obtener el palo aleatoriamente //Math.random(1 4)
  //Cambiar el estado de carta
  //Mostrar en el html la carta
}

const cardSymbol = ["♦", "♥", "♠", "♣"];
const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "King", "Queen", "Jack", "Ace"];

//2 to 10, King, Queen, Jack or Ace

const getRandomCard = () => {
  const card = {
    symbol: null,
    value: null
  };
  symbol = cardSymbol[Math.floor(Math.random() * 3, +1)];
  value = cardValue[Math.floor(Math.random() * 12)];
};

//
//const getInitialCard = () => {
//  const card = {
//    symbol: null,
//    value: null
//  };
//};

const getRandomCard2 = () => {
  getInitialCard();
};

//

const card = {
  number: null,
  symbol: null
};

const simbolList = function getSimbolList() {
  return ["❤️", "🔷", "🏆", "🍀"];
};

const numberList = function getNumberList() {
  return [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
};

const getRandomElement = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const randomSimbol = getRandomElement(simbolList);

const randomNumber = getRandomElement(numberList);

const setCardState = (card, randomSimbol, randomNumber) => {
  (card.symbol = randomSimbol), (card.number = randomNumber);
};

const showCard = setCardState;

document.querySelector(
  "#heart"
).innerHTML = `<div class="card position-absolute top-50 start-50 translate-middle">
      <div class="card-body">
        <p class="card-text text-start fs-1">❤️</p>
        <h1 class="card-text text-center fw-bold">K</h1>
        <p class="card-text text-end fs-1">❤️</p>
      </div>
    </div>`;

/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = () => {
  let suits = ["heart", "spade", "club", "diamond"];
  let ranks = ["A", 2, 3, 4, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let card = document.querySelector(".card");
  let num = document.querySelector(".number");
  const getRandomInt = array => {
    return Math.floor(Math.random() * array.length);
  };
  card.classList.add(suits[getRandomInt(suits)]);
  num.innerHTML = ranks[getRandomInt(ranks)];
};

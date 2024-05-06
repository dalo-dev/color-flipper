"use strict";

//* HTML ELEMENTS
const backgroundElm = document.getElementById("background");
const currentColorElm = document.getElementById("current-color");
const changeColorBtn = document.getElementById("change");

//* FEATURES
const getRandomHexColor = function () {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const setBackgroundColor = function () {
  const randomColor = getRandomHexColor();
  currentColorElm.innerText = randomColor;
  backgroundElm.style.backgroundColor = randomColor;
};

//* EVENTS
changeColorBtn.addEventListener("click", setBackgroundColor);

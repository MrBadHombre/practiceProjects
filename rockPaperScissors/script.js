const buttons = document.querySelector(".button");
const overlay = document.querySelector(".overlay");
const title = document.querySelector(".title");
const red = document.querySelector(".overlay");
const showOverlay = function () {
  overlay.classList.toggle("hidden");
};
const hideOverlay = function () {
  overlay.classList.toggle("hidden");
};

buttons.addEventListener("mouseenter", showOverlay);

buttons.addEventListener("mouseout", hideOverlay);

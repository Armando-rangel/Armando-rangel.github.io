const iconHome = document.querySelector(".icon__home");
const iconMessage = document.querySelector(".icon__message");
const iconStop = document.querySelector(".icon__stop");
const iconMicro = document.querySelector(".icon__micro");
const iconPieze = document.querySelector(".icon__pieze");


iconHome.addEventListener("click", () => {
  window.scroll(0, iconHome.offsetTop);
});

iconMessage.addEventListener("click", () => {
  window.scroll(0, 1200);
});

iconStop.addEventListener("click", () => {
  window.scroll(0, 2300);
});

iconMicro.addEventListener("click", () => {
  window.scroll(0, 3200);
});

iconPieze.addEventListener("click", () => {
  window.scroll(0, 4300);
});
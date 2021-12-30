let $button = document.querySelector("#open");
let $shade = document.querySelector(".shade");

$button.addEventListener("click", action);

let openState = false;

function action() {
  openState ? open() : off();
  openState = !openState;
}

function open() {
  $button.style.top = "3px";
  $button.style.transition = ".3s";
  document.documentElement.className = "light";
  $shade.style.display = "block";
}

function off() {
  $button.style.top = "0";
  $button.style.transition = ".3s";
  document.documentElement.className = "dark";
  $shade.style.display = "none";
}

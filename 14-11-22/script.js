import { GET, createCard } from "./utils.js";

const url = "https://jsonplaceholder.typicode.com/posts/";
let i = 1;
const btnprev = document.querySelector(".prev_button");
const btnnext = document.querySelector(".next_button");
const loading = document.querySelector(".lds-facebook");
const cards = document.createElement("div");
const title = document.createElement("h3");
const post = document.createElement("p");

createCard(GET(`${url}${i}`));

btnnext.addEventListener("click", () => {
  if (i < 10) {
    i++;
    createCard(GET(`${url}${i}`));
  } else {
    btnnext.disabled = true;
  }
});

btnprev.addEventListener("click", () => {
  if (i > 1) {
    i--;
    createCard(GET(`${url}${i}`));
  } else {
    btnprev.disabled = true;
  }
});
window.onload(createCard(GET(`${url}${i}`)));

import { c, q, GET, POST, createCard } from "./utils.js";

const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pokemonList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: element.pkmId.value,
    name: element.pkmName.value,
    type: element.pkmType.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

const type = element.pkmType.value;
window.onload = GET(url).then((res) => res.map((pkm) => createCard(pkm)));

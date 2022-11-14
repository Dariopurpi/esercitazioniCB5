//"https://pokeapi.co/api/v2/pokemon/1";
const loading = document.querySelector(".lds-spinner");
let i = 1;

let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
fetch(result)
  .then((res) => res.json())
  .then((res) => createCard(res))
  .finally(() => (loading.style.opacity = 0));

const namePoke = document.createElement("h3");
const ImgPoke = document.createElement("img");
const typePoke = document.createElement("p");
const id = document.createElement("p");
const singleCard = document.createElement("div");

// create card
const createCard = (pokemon) => {
  const cards = document.createElement("body");

  namePoke.textContent = pokemon.forms[0].name;
  cards.className = pokemon.types[0].type.name;
  singleCard.className = "single_card";
  ImgPoke.setAttribute("src", pokemon.sprites.front_default);
  typePoke.textContent = pokemon.types[0].type.name;
  id.textContent = getId(pokemon.id);

  //appendo elemento al
  singleCard.append(namePoke, ImgPoke, typePoke, id);
  cards.appendChild(singleCard);
  pokedex.appendChild(cards);
};

const pokedex = document.querySelector(".card");

const getId = (n) => {
  if (!n) return null;

  let id = n;
  if (id < 10) {
    id = "#00" + id;
  } else if (id < 100) {
    id = "#0" + id;
  }
  return (id = "#" + id);
};

//button previous and next
const buttonNext = document.querySelector(".next_button");
const buttonPrevious = document.querySelector(".previous_button");

buttonNext.addEventListener("click", () => {
  if (i < 10) {
    i++;
    let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => createCard(res))
      .finally(() => (loading.style.opacity = 0));
  }
});

buttonPrevious.addEventListener("click", () => {
  i--;
  let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res));
});

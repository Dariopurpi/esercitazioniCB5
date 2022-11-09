let pokemons = [];
for (let i = 1; i <= 150; i++) {
  pokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}
console.log(pokemons);
let request = pokemons.map((url) => {
  return fetch(url).then((res) => res.json());
});
console.log(request);

Promise.all(request).then((res) => res.map((pokemon) => createCard(pokemon)));
//id
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

//create card function
const pokedex = document.querySelector(".pokedex");

const createCard = (pokemon) => {
  const cards = document.createElement("span");

  const namePoke = document.createElement("h3");
  const ImgPoke = document.createElement("img");
  const typePoke = document.createElement("p");

  namePoke.textContent = pokemon.forms[0].name;
  cards.className = pokemon.types[0].type.name;
  ImgPoke.setAttribute("src", pokemon.sprites.front_default);
  typePoke.textContent = getId(pokemon.id);

  //appendo elemento al
  cards.append(namePoke, ImgPoke, typePoke);
  pokedex.appendChild(cards);
};

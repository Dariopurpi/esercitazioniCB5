/*const name1 = fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  .then((res) => res.json())
  .then((res) => res.results.map((item) => console.log(item.url)));*/

/*const img = fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  .then((res) => res.json())
  .then((res) =>
    res.results.map((item) => fetch(item.url).then((res2) => res2.json()))
  );*/
/*const type = fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  .then((res) => res.json())
  .then((res) =>
    res.results.map((item) => fetch(item.url).then((res2) => res2.json()))
  );*/
fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  .then((res) => res.json())
  .then((res) =>
    Promise.all(
      res.results.map((pokemon) =>
        fetch(pokemon.url).then((pokemon) => pokemon.json())
      )
    )
  )
  .then((pokemons) =>
    pokemons.map((pokemon) =>
      createCard(
        pokemon.name,
        pokemon.sprites.front_default,
        pokemon.types[0].type.name
      )
    )
  );

const pokedex = document.querySelector(".pokedex");

const createCard = (name1, img, type) => {
  const cards = document.createElement("div");

  const namePoke = document.createElement("h3");
  const ImgPoke = document.createElement("img");
  const typePoke = document.createElement("p");

  namePoke.textContent = name1;
  cards.className = "cards";
  ImgPoke.setAttribute("src", img);
  typePoke.textContent = type;

  //appendo elemento al
  cards.append(namePoke, ImgPoke, typePoke);
  pokedex.appendChild(cards);
};
//createCard(name1, img, type);

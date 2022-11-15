const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

const POST = async (BASE_URL, body) => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const createCard = (pokemon) => {
  const cards = c("li");
  const img = c("img");
  const namePoke = c("h4");
  const typePoke = c("p");
  const id = c("p");

  const pokedex = q(".pokemonList");
  img.setAttribute("src", "https://picsum.photos/200/300");
  namePoke.textContent = `${"nome:"} ${pokemon.name}`;
  typePoke.textContent = `${"tipo:"} ${pokemon.type}`;
  id.textContent = `${"id :"} ${pokemon.id}`;

  //appendo elemento al

  cards.append(namePoke, typePoke, id, img);
  pokedex.appendChild(cards);
};

export { c, q, GET, POST, createCard };

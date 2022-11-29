const url = "http://localhost:3000/attori";
fetch(url)
  .then((res) => res.json())
  .then((res) => createCard(res));

const createCard = (item) => {
  const wrapper = document.querySelector(".container");
  for (let i of item) {
    const card = document.createElement("div");
    const nome = document.createElement("h2");
    const cognome = document.createElement("h2");
    const dataNascita = document.createElement("p");

    nome.textContent = i.nome;
    cognome.textContent = i.cognome;
    dataNascita.textContent = i.data_nascita;
    console.log(dataNascita);
    card.append(nome, cognome, dataNascita);
    wrapper.appendChild(card);
  }
};

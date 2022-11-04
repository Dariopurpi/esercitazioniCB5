import products from "./products.js";

/*const bodyEl = document.querySelector("body");
const heroEl = document.createElement("div");
const heroCards = document.createElement("div");
const heroCardsTitle = document.createElement("h1");
const heroCardsImg = document.createElement("img");
const heroCardsPar = document.createElement("div");

heroEl.className = "hero";
heroCards.className = "cards";
heroCardsTitle.textContent = "prova";
heroCardsImg.setAttribute("src" urlimg);
heroCardsImg.setAttribute("alt" descr);
heroCardsPar.textContent = "prova paragrafo";

//appendo elemento al
bodyEl.appendChild(heroEl);
heroEl.appendChild(heroCards);
heroCards.appendChild(heroCardsTitle, heroCardsImg, heroCardsPar);*/

/*const heroTitle = products.map((product) => {
  return product.title;
});
const title = document.createTextNode(heroTitle);
heroEl.appendChild(title);*/

//------------------------------------
/*let title1 = products[0].title;
console.log(title1);
const titleNode = document.createTextNode(title1);
heroCards.appendChild(titleNode);

let imgUrl = products[0].image;
let description1 = products[0].description;
const imgEl = document.createElement("img");
imgEl.setAttribute("src", imgUrl);
imgEl.setAttribute("alt", description1);
heroCards.appendChild(imgEl);*/
const createCard = (data) => {
  const bodyEl = document.querySelector("body");
  const heroEl = document.createElement("div");
  const heroCards = document.createElement("div");
  const heroCardsTitle = document.createElement("h1");
  const heroCardsImg = document.createElement("img");
  const heroCardsPar = document.createElement("p");

  heroEl.className = "hero";
  heroCards.className = "cards";
  heroCardsTitle.textContent = data.title;
  heroCardsImg.setAttribute("src", data.image);
  heroCardsImg.setAttribute("alt", data.description);
  heroCardsPar.textContent = data.description;

  //appendo elemento al
  bodyEl.appendChild(heroEl);
  heroEl.appendChild(heroCards);
  heroCards.append(heroCardsTitle, heroCardsImg, heroCardsPar);
};
products.map((product) => createCard(product));

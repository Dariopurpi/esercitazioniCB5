import products from "./products.js";

let bodyEl = document.querySelector("body");
let heroEl = document.createElement("hero");
let heroCards = document.createElement("cards");

//appendo elemento al
bodyEl.appendChild(heroEl);
heroEl.appendChild(heroCards);

/*const heroTitle = products.map((product) => {
  return product.title;
});
const title = document.createTextNode(heroTitle);
heroEl.appendChild(title);*/

//------------------------------------
let title1 = products[0].title;
console.log(title1);
const titleNode = document.createTextNode(title1);
heroCards.appendChild(titleNode);

let imgUrl = products[0].image;
let description1 = products[0].description;
const imgEl = document.createElement("img");
imgEl.setAttribute("src", imgUrl);
imgEl.setAttribute("alt", description1);
heroCards.appendChild(imgEl);

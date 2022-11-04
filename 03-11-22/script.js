import products from "./products.js";
//console.log(products);

const createCard = (data) => {
  const allProducts = document.querySelector(".All__products");
  const cards = document.createElement("div");

  const allProductsTitle = document.createElement("h5");
  const allProductsImg = document.createElement("img");
  const allProductsPar = document.createElement("p");

  allProductsTitle.textContent = data.title;
  cards.className = "cards";
  allProductsImg.setAttribute("src", data.thumbnail);
  allProductsImg.setAttribute("alt", data.description);
  allProductsPar.textContent = data.description;

  //appendo elemento al
  cards.append(allProductsTitle, allProductsImg, allProductsPar);
  allProducts.appendChild(cards);
};
products.map((product) => createCard(product));

//dark mode

const mainEl = document.querySelector("main", "h1");
const button = document.querySelector("button");
button.addEventListener("click", () => mainEl.classList.toggle("darkmode"));

//prove per rimuovere al click figli all products e aggiungere category=fragrance
/*const allProducts = document.querySelector(".All__products");
const fragrancesEl = document.querySelector("#fragrances");
console.log(fragrancesEl);
fragrancesEl.addEventListener("click", () => {
  const cards = document.querySelector(".cards");
  allProducts.remove(cards);
  products.forEach((element) => {
    if (element.category === "fragrances") {
      products.map((element) => {
        if (element.category === "fragrances") {
          const allProducts2 = document.querySelector(".All__products");
          const cards2 = document.createElement("div");

          const allProducts2Title = document.createElement("h5");
          const allProducts2Img = document.createElement("img");
          const allProducts2Par = document.createElement("p");

          allProducts2Title.textContent = element.title;
          cards2.className = "cards2";
          allProducts2Img.setAttribute("src", element.thumbnail);
          allProducts2Img.setAttribute("alt", element.description);
          allProducts2Par.textContent = element.description;

          //appendo elemento al
          cards2.append(allProducts2Title, allProducts2Img, allProducts2Par);
          allProducts2.appendChild(cards2);
        }
      });
    }
  });
});*/

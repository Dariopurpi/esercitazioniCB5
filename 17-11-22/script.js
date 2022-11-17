import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let inputValue = "";
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  // const elements = {
  //   cardEl: ce("div"),
  //   imgEl: ce("img"),
  //   titleEl: ce("h4"),
  //   urlEl: ce("p")
  // }
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};
/*let x = [];
GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 10);
  console.log();

  for (let i = 0; i <= productsList.length - 1; i++) {
    x[i] = productsList[i];
  }
});
 console.log(x);*/

// const filteredByInput = justTenProd.filter((product) =>
//   product.title.includes(inputValue)
// );
// filteredByInput.map((product) => createCardEl(product, cardList));

/*async function prova() {
  const m = await x.then((el) => el);
}
console.log(prova());*/

/*inputEl.addEventListener("input", (e) => {
  inputValue = "";
  inputValue += e.target.value;
  if (x.includes(inputValue)) {
    console.log("fatto");
  } else {
    console.log("ciao");
  }
});*/

/*for (i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    }
    else {
        x[i].style.display="list-item";
    }
}*/

let prodotti = [];

GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 100);
  prodotti = productsList.map((product) => {
    createCardEl(product, cardList);
    return product;
  });
  inputEl.addEventListener("input", (e) => {
    cardList.textContent = "";
    prodotti.filter(
      (product) =>
        product.title.includes(e.target.value) &&
        createCardEl(product, cardList)
    );
  });
});

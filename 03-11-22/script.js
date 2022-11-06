import products from "./products.js";
//console.log(products);
const smartphones = document.querySelector(".smartphones");
const laptops = document.querySelector(".latpops");
const other = document.querySelector(".other");
const createCardSmartphone = (data) => {
  const cards = document.createElement("div");

  const smartphonesTitle = document.createElement("h5");
  const smartphonesImg = document.createElement("img");
  const smartphonesPar = document.createElement("p");

  smartphonesTitle.textContent = data.title;
  cards.className = "cards";
  smartphonesImg.setAttribute("src", data.thumbnail);
  smartphonesImg.setAttribute("alt", data.description);
  smartphonesPar.textContent = data.description;

  //appendo elemento al
  cards.append(smartphonesTitle, smartphonesImg, smartphonesPar);
  smartphones.appendChild(cards);
};
//------creo sezione smarphone
products.filter((product) => {
  product.category === "smartphones" && createCardSmartphone(product);
});
//------creo sezione laptops
const createCardLaptop = (data) => {
  const cards = document.createElement("div");

  const laptopTitle = document.createElement("h5");
  const laptopImg = document.createElement("img");
  const laptopPar = document.createElement("p");

  laptopTitle.textContent = data.title;
  cards.className = "cards";
  laptopImg.setAttribute("src", data.thumbnail);
  laptopImg.setAttribute("alt", data.description);
  laptopPar.textContent = data.description;

  //appendo elemento al
  cards.append(laptopTitle, laptopImg, laptopPar);
  laptops.appendChild(cards);
};
products.filter((product) => {
  product.category === "laptops" && createCardLaptop(product);
});

//-------creo sezione other
const createCardOther = (data) => {
  const cards = document.createElement("div");

  const otherTitle = document.createElement("h5");
  const otherImg = document.createElement("img");
  const otherPar = document.createElement("p");

  otherTitle.textContent = data.title;
  cards.className = "cards";
  otherImg.setAttribute("src", data.thumbnail);
  otherImg.setAttribute("alt", data.description);
  otherPar.textContent = data.description;

  //appendo elemento al
  cards.append(otherTitle, otherImg, otherPar);
  other.appendChild(cards);
};
products.filter((product) => {
  if (product.category != "laptops" && product.category != "smartphones")
    createCardOther(product);
});

//dark mode

const mainEl = document.querySelector("main", "h1");
const button = document.querySelector("button");
button.addEventListener("click", () => mainEl.classList.toggle("darkmode"));

//modale

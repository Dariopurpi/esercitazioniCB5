// FUNZIONI OPERAZIONI
const formElement = document.forms.formEl.elements;
const btnSum = formElement.btnSum;
const btnMolt = formElement.btnMolt;
const btnDiv = formElement.btnDiv;
const btnSott = formElement.btnSott;
const risEl = document.querySelector("h2");

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (risEl.textContent = "Risultato: " + data));
};

// EVENTO SOMMA AL CLICK
if (btnSum) {
  btnSum.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
}

// EVENTO SOTTRAZIONE AL CLICK
if (btnSott) {
  btnSott.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
}

// EVENTO PRODOTTO AL CLICK
if (btnMolt) {
  btnMolt.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
}

if (btnDiv) {
  // EVENTO DIVISIONE AL CLICK
  btnDiv.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/divisione?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
}

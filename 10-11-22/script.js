//creazione delle varie costanti da usare

const urlAdvice = "https://api.adviceslip.com/advice";
const advice = document.querySelector("h2");
const btn = document.querySelector(".btn-generator");
const id = document.querySelector("p");
const loading = document.querySelector("h3");

//creazione dell funzione per il testo

/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => (advice.innerHTML = res.slip.advice))
    .catch((e) => console.log(e))
    .finally(() => (loading.style.opacity = 0));
};

//creazione della funzione per id
/**
 * Get id from id url
 *
 * @param {string} url
 */
const getIdAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => (id.innerHTML = res.slip.id))
    .catch((e) => console.log(e));
};

getAdvice(urlAdvice);

//creazione evento click
btn.addEventListener("click", () => {
  loading.style.opacity = 1;
  getAdvice(urlAdvice);
  getIdAdvice(urlAdvice);
});

//prova loading
//loading.style.opacity = 1;

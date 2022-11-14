/**
 * Get data from the end point
 *
 * @param {string} url
 */
const GET = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => createCard(res))
    .finally(() => (loading.style.opacity = 1));
};

//create card function
const title = document.querySelector("h3");
const post = document.querySelector("p");
const cards = document.querySelector(".card");
const createCard = (data) => {
  // title.textContent = data.title;

  title.innerText = data?.title;
  post.innerText = data?.body;

  //appendo elemento al
  cards.append(title, post);
};

export { createCard, GET };

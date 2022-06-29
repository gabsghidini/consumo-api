const cat = document.querySelector("#cat");
const dog = document.querySelector("#dog");

async function dogAPI() {
  const url = "https://api.thedogapi.com/v1/images/search";
  const options = {};

  const result = fetch(url, options);

  await result
    .then((response) => {
      return response.json(); // Transformando os dados em JSON
    })
    .then((response) => {
      response.forEach((element) => {
        const card = criarCard(element, "dog__button", "cachorro");
        dog.innerHTML = card;
      });
    });
}

async function catAPI() {
  const url = "https://api.thecatapi.com/v1/images/search";
  const options = {};

  const result = fetch(url, options);

  await result
    .then((response) => {
      return response.json(); // Transformando os dados em JSON
    })
    .then((response) => {
      response.forEach((element) => {
        const card = criarCard(element, "cat__button", "gato");
        cat.innerHTML = card;
      });
    });
}

function criarCard(object, buttonId, animal) {
  const { url } = object;

  return `<img src=${url}>
    <button id="${buttonId}"> Clique aqui para ver outro ${animal}! </button>`;
}

async function listeners() {
  // Cat Section
  const catButton = document.querySelector("#cat__button");

  catButton.addEventListener("click", catCaller);

  // Dog Section
  const dogButton = document.querySelector("#dog__button");

  dogButton.addEventListener("click", dogCaller);
}

async function catCaller() {
  await catAPI();
  listeners();
}

async function dogCaller() {
  await dogAPI();
  listeners();
}

async function init() {
  await catAPI();
  await dogAPI();
  listeners();
}

init();

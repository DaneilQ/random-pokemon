const cleanHtml = (element) => {
  element.innerHTML = "";
};

const name = document.querySelector("#name");
const img = document.querySelector("#img");
const footer = document.querySelector("#footer");
const loading = document.querySelector('#loading');

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const pokeData = async () => {
    name.classList.add("hidden");
    img.parentElement.classList.add("hidden");
    loading.classList.remove('hidden');
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber(1, 251)}`
  );
  const data = await response.json();

  console.log(data)

  let firstLetter = data.name.charAt(0).toUpperCase();

  let otherLetters = data.name.slice(1);

  cleanHtml(name);
  cleanHtml(img);

  img.alt = firstLetter + otherLetters;

  img.src = Object.values(data.sprites.versions)[1].gold.front_transparent;
  name.innerText =  firstLetter + otherLetters;

  img.parentElement.classList.remove("hidden");

  name.classList.remove("hidden");
  loading.classList.add('hidden');
  footer.classList.remove("hidden");
};

pokeData();

img.addEventListener("click", () => {
  pokeData();
});

// local reviews data

const reviews = [
  {
    id: 1,
    name: "Bob Esponja",
    job: "Cocinero",
    img: "./bobEsponja.jpg",
    text: `Soy bob esponja y me dedico a cocinar en el Crustaceo Cascarudo.
    Me despierto a las 7 am todos los dias...
    `,
  },
  {
    id: 2,
    name: "Patricio",
    job: "Cazador de meduzas",
    img: "./patricio.png",
    text: `soy calamardo y me gusta cazar meduzas
        `,
  },
  {
    id: 3,
    name: "Calamardo",
    job: "Atencion al cliente",
    img: "./calamardo.webp",
    text: `Soy Calamardo, toco flauta y tengo de vecino a bob esponja
        `,
  },
  {
    id: 4,
    name: "Arenita",
    job: "Cientifica",
    img: "./arenita.webp",
    text: `Vivo en un domo, dentro tengo mi arbol. me gusta la ciencia y karate.
        `,
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
//show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
});

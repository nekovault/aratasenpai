const searchInput =
document.getElementById("searchInput");

const resultBox =
document.getElementById("searchResult");

/* AMBIL DUA HALAMAN */
Promise.all([
fetch("index.html").then(res => res.text()),
fetch("rpg.html").then(res => res.text())
])

.then(([renpyData, rpgData]) => {

const parser = new DOMParser();

const renpyDoc =
parser.parseFromString(
renpyData,
"text/html"
);

const rpgDoc =
parser.parseFromString(
rpgData,
"text/html"
);

/* GABUNG SEMUA GAME */
const games = [
...renpyDoc.querySelectorAll(".game-card"),
...rpgDoc.querySelectorAll(".game-card")
];

searchInput.addEventListener(
"keyup",
() => {

  let keyword =
  searchInput.value
  .toLowerCase();

  resultBox.innerHTML = "";

  games.forEach(game => {

    let title =
    game.querySelector(".game-title")
    .innerText
    .toLowerCase();

    if(title.includes(keyword)) {

      resultBox.innerHTML +=
      game.outerHTML;

    }

  });

}

);

});
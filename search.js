const searchInput =
document.getElementById("searchInput");

const resultBox =
document.getElementById("searchResult");

/* AMBIL INDEX.HTML */
fetch("index.html")

.then(res => res.text())

.then(data => {

  /* UBAH HTML JADI DOCUMENT */
  const parser =
  new DOMParser();

  const doc =
  parser.parseFromString(data, "text/html");

  /* AMBIL SEMUA GAME */
  const games =
  doc.querySelectorAll(".game-card");

  /* SEARCH */
  searchInput.addEventListener("keyup", () => {

    let keyword =
    searchInput.value.toLowerCase();

    resultBox.innerHTML = "";

    games.forEach(game => {

      let title =
      game.querySelector(".game-title")
      .innerText
      .toLowerCase();

      if(title.includes(keyword)) {

        resultBox.innerHTML += game.outerHTML;

      }

    });

  });

});
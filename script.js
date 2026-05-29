document.addEventListener("DOMContentLoaded", function() {

  const navItems = document.querySelectorAll(".nav-item");
  let currentPage = window.location.pathname;

  navItems.forEach(item => {
    const link = item.getAttribute("href");

    // cocokkan pakai includes (lebih aman)
    if (currentPage.includes(link)) {
      item.classList.add("active");
    }

    // efek klik
    item.addEventListener("click", function() {
      navItems.forEach(i => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

});

const kategori = document.querySelectorAll(".kategori");

kategori.forEach(btn => {
  btn.addEventListener("click", function() {
    kategori.forEach(b => b.classList.remove("active"));
    this.classList.add("active");
  });
});

function toggleMenu() {

  document
    .getElementById("sidebar")
    .classList.toggle("active");

  document
    .getElementById("overlay")
    .classList.toggle("active");

}

function shareGame() {

  navigator.share({

    title: document.title,

    text: "Download game di Arata Senpai 😏",

    url: window.location.href

  });
}
const btn = document.querySelector(".btnham");
const nav = document.querySelector(".navmobile");
let isNavOpen = false;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  isNavOpen = !isNavOpen;
  nav.style.transform = isNavOpen ? "scaley(1)" : "scaley(0)";
});

document.addEventListener("click", function (e) {
  if (!nav.contains(e.target) && !btn.contains(e.target) && isNavOpen) {
    isNavOpen = false;
    nav.style.transform = "scaley(0)";
  }
});

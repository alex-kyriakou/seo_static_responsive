let menu = document.getElementById("menu-btn");
let navbar = document.querySelector(".navbar");
let themeBtn = document.getElementById("theme-btn");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  menu.classList.toggle("active");

  if (menu.classList.contains("fa-times")) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

themeBtn.addEventListener("click", () => {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
});

window.addEventListener("onscroll", () => {
  menu.classList.remove("fa-times");
  menu.classList.remove("active");
});

window.addEventListener("scroll", () => indicateScrollBar());

function indicateScrollBar() {
  const distanceFromPageTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (distanceFromPageTop / height) * 100;

  document.querySelector(".scroll-indicator").style.width = `${scrolled}%`;
}

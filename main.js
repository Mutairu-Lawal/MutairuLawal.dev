const menuButton = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-bar");
const menuIcon = document.querySelector(".fa-bars");
const listLinks = document.querySelectorAll(".nav-bar a");

menuButton.addEventListener("click", () => {
  toggle();
});

const toggle = () => {
  menuIcon.classList.toggle("fa-x");
  navList.classList.toggle("slide");
};
listLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activePage();
    link.classList.add("active-page");
    toggle();
  });
});

let activePage = () => {
  listLinks.forEach((link) => {
    if (link.classList.contains("active-page")) {
      link.classList.remove("active-page");
    }
  });
};

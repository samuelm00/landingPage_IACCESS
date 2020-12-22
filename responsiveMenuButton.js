const menuButton = document.querySelector(".menuButton");

//div that contains the nav element
const navBar = document.querySelector(".navBar");

const navUl = navBar.getElementsByTagName("li");

menuButton.addEventListener("click", () => {
  //Either adds or removes class from the NavBar
  navBar.classList.toggle("open");
});

for (let i = 0; i < navUl.length; ++i) {
  //Adds an eventLIstener to every li element in the nav
  //in order to close the navMenu after a click event
  navUl[i].addEventListener("click", () => navBar.classList.toggle("open"));
}

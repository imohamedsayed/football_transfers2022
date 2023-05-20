let aside = document.querySelector("aside");
let menuToggles = aside.querySelector(".menu-toggler");
let showMenu = true;

if (localStorage.getItem("isExpanded") != null) {
  showMenu = JSON.parse(localStorage.getItem("isExpanded"));

  checkAside(aside);
}

menuToggles.addEventListener("click", () => {
  showMenu = !showMenu;
  aside.classList.toggle("expanded");
  localStorage.setItem("isExpanded", JSON.stringify(showMenu));
});

function checkAside(aside) {
  if (showMenu) {
    aside.classList.add("expanded");
  } else {
    aside.classList.remove("expanded");
  }
}

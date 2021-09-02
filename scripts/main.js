const menu = document.querySelector("#menu-btn");
const navBar = document.querySelector(".navbar");
const navTags =document.querySelectorAll('.navBar a');



menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navBar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navBar.classList.remove('active');
}


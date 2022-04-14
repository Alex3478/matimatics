const btnTop = document.getElementById("btn-top");
const saitBody = document.querySelector(".body-tag");
document.addEventListener("scroll", event => {
    if (window.pageYOffset > 700) saitBody.classList.add("body-tag_active");
    else saitBody.classList.remove("body-tag_active");
    
});

const menuBtn = document.getElementById("menu-hidden");
const menuNav = document.querySelector(".menu__nav");
menuBtn.addEventListener("click", event => {
    menuNav.classList.toggle("menu__nav_active");
});
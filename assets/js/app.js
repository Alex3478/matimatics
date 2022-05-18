const menuButton = document.getElementById('menuButton');
const menuNav = document.querySelector(".is-noactive");
if (menuButton) {
    menuButton.addEventListener('click', function (e) {
        menuButton.classList.toggle('is-active');
        menuNav.classList.toggle("is-active");
        e.preventDefault();
    });
}


const btnTop = document.getElementById("btn-top");
if (btnTop) {
    btnTop.addEventListener("click", event => {
        window.scrollTo(0, 0);
    });
}



// const saitBody = document.querySelector(".body-tag");
// document.addEventListener("scroll", event => {
//     if (window.pageYOffset > 700) saitBody.classList.add("body-tag_active");
//     else saitBody.classList.remove("body-tag_active");
    
// });

// const menuBtn = document.getElementById("menu-hidden");
// const menuNav = document.querySelector(".menu__nav");
// menuBtn.addEventListener("click", event => {
//     menuNav.classList.toggle("menu__nav_active");
// });
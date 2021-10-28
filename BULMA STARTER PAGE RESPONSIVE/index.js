const foodie = document.querySelector("#burger");
const navbars  = document.querySelector(".navbar-menu");
const clickers = document.querySelector("#button");

foodie.addEventListener("mouseover", function(){
    navbars.classList.toggle("is-active");
});

clickers.addEventListener("click", function(){
    clickers.classList.toggle("is-loading");
});

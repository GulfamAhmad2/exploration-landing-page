$(document).ready(function(){
    $('.education__slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
});
const menu = document.querySelector(".nav__menu"),
closeNav = document.querySelector(".nav__close"),
toggle = document.querySelector(".nav__toggle"),
navItem = document.querySelectorAll(".nav__link");
console.log(navItem)

toggle.addEventListener("click", ()=>{
    menu.classList.add("active")
})

closeNav.addEventListener("click", ()=>{
    menu.classList.remove("active")
})

function hideMenu(){
    menu.classList.remove("active")
}

navItem.forEach(n => n.addEventListener('click', hideMenu))


/* ============== Scroll Revel Animation ============== */

const sr = ScrollReveal({
    origin: "left",
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true
})

sr.reveal(".home__left")
sr.reveal(`.home__right`, {origin:"right"})
sr.reveal(`.offer__left-data`, {delay:300, origin:"top"})
sr.reveal(`.offer__right-data`, {delay:300, origin:"top"})
sr.reveal(`.purchase__left-data`, {delay:300, origin:"left"})
sr.reveal(`.purchase__right-images`, {delay:300, origin:"right"})
sr.reveal(`.getting__left-data`, {delay:300, origin:"left"})
sr.reveal(`.getting__right-data`, {delay:300, origin:"right"})
sr.reveal(`.works__left-data`, {delay:300, origin:"left"})
sr.reveal(`.works__right-data`, {delay:300, origin:"right"})
sr.reveal(`.education__left`, {delay:300, origin:"top"})
sr.reveal(`.education__right`, {delay:300, origin:"top"})
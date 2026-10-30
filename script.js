let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide(){
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
}

setInterval(nextSlide,5000);


/* sticky header */

window.addEventListener("scroll",function(){
document.querySelector(".header").classList.toggle("scrolled",window.scrollY>50)
})


/* mobile menu */

function toggleMenu(){
document.getElementById("menu").classList.toggle("active")
}
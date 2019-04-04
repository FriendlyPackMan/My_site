const carousel = document.querySelector(".carousel");
const carouselImg = document.querySelector(".carousel img");

const prevBut = document.querySelector("#prevBut");
const nextBut = document.querySelector("#nextBut");

let counter = 0;
const size =  document.getElementsByClassName("carousel")[0].clientWidth;

nextBut.addEventListener('click', ()=>{
    if (counter >= carousel.childElementCount - 1) 
        counter = -1;
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carousel.style.transform = 'translateX(' + ( -size * counter ) + 'px)';
});

prevBut.addEventListener('click', ()=>{
    if (counter <= 0) 
        counter = carousel.childElementCount;
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carousel.style.transform = 'translateX(' + ( -size * counter ) + 'px)';
});
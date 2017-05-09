/*
 Full width Slider
 use window.loader or
 showSlides in html page.
 */
let slideIndex = 0;
const showSlides = () => {
    let timer = 2000;
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, timer); // Change image every  seconds
};


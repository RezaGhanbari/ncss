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

/* ---------------------------------------- */

/* Calendar*/

// use month() in html
month=() => {
    const monthArray =
        ["January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"];
    let d = new Date();
    let m = monthArray[d.getMonth()];
    document.getElementById("monthName").innerHTML = m;
};

// use year() in html
year=() => {
    let d = new Date();
    let dd = (d.getYear() -100)+2000;
    document.getElementById("year").innerHTML = dd;
};


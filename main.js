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


/* ---------------------------------
/* Canvas dot animation */
// use it inside html page
// todo: working stand alone

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const TAU = 2 * Math.PI;

times = [];
loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    requestAnimationFrame(loop);
};

Ball = (startX, startY, startVelX, startVelY) => {
    this.x = startX || Math.random() * canvas.width;
    this.y = startY || Math.random() * canvas.height;
    this.vel = {
        x: startVelX || Math.random() * 2 - 1,
        y: startVelY || Math.random() * 2 - 1
    };
    this.update = (canvas) => {
        if (this.x > canvas.width + 50 || this.x < -50) {
            this.vel.x = -this.vel.x;
        }
        if (this.y > canvas.height + 50 || this.y < -50) {
            this.vel.y = -this.vel.y;
        }
        this.x += this.vel.x;
        this.y += this.vel.y;
    };
    this.draw = (ctx, can) => {
        ctx.beginPath();
        ctx.globalAlpha = .4;
        ctx.fillStyle = '#448fda';
        ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 3, 0, TAU, false);
        ctx.fill();
    }
};

const balls = [];
for (let i = 0; i < canvas.width * canvas.height / (65*65); i++) {
    balls.push(new Ball(Math.random() * canvas.width, Math.random() * canvas.height));
}

let lastTime = Date.now();
function update() {
    let diff = Date.now() - lastTime;
    for (let frame = 0; frame * 16.6667 < diff; frame++) {
        for (let index = 0; index < balls.length; index++) {
            balls[index].update(canvas);
        }
    }
    lastTime = Date.now();
}
let mouseX = -1e9, mouseY = -1e9;
document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function distMouse(ball) {
    return Math.hypot(ball.x - mouseX, ball.y - mouseY);
}

function draw() {
    ctx.globalAlpha=1;
    ctx.fillStyle = '#001c33';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    for (let index = 0; index < balls.length; index++) {
        let ball = balls[index];
        ball.draw(ctx, canvas);
        ctx.beginPath();
        for (let index2 = balls.length - 1; index2 > index; index2 += -1) {
            let ball2 = balls[index2];
            let dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
            if (dist < 100) {
                ctx.strokeStyle = "#448fda";
                ctx.globalAlpha = 1 - (dist > 100 ? .8 : dist / 150);
                ctx.lineWidth = "2px";
                ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
                ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
            }
        }
        ctx.stroke();
    }
}
loop();

/* ---------------------------------
/* End of canvas animation */



/* ------------------------------------- */
/* Beginning of  */
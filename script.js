// HERO TEXT ANIMATION

const heroText = document.querySelector(".hero h2");

window.addEventListener("load", () => {

    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(50px)";

    setTimeout(() => {

        heroText.style.transition = "1.5s";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0px)";

    }, 500);

});

// BUTTON GLOW EFFECT

const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {

    button.style.boxShadow = "0 0 40px orange";

});

button.addEventListener("mouseleave", () => {

    button.style.boxShadow = "0 0 0px orange";

});

// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "rgba(0,0,0,0.8)";

    }

    else{

        nav.style.background = "rgba(0,0,0,0.3)";

    }

});

// PLAY BUTTON CLICK EFFECT

button.addEventListener("click", () => {

    alert("WELCOME TO FREE FIRE BATTLEGROUND 🔥");

});
// CHARACTER ENTRY ANIMATION

gsap.from(".character",{

    duration:2,

    x:-500,

    opacity:0,

    ease:"power4.out"

});

// HERO TEXT ANIMATION

gsap.from(".hero h2",{

    duration:2,

    y:100,

    opacity:0,

    delay:0.5,

    ease:"power4.out"

});

// PARAGRAPH ANIMATION

gsap.from(".hero p",{

    duration:2,

    y:100,

    opacity:0,

    delay:1,

    ease:"power4.out"

});

// BUTTON ANIMATION

gsap.from("button",{

    duration:2,

    scale:0,

    opacity:0,

    delay:1.5,

    ease:"back.out(1.7)"

});

// CHARACTER FLOATING EFFECT

// CINEMATIC GLIDING ANIMATION

gsap.to(".character",{

    y:-20,

    scale:1.03,

    duration:2.5,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});
const weapons = document.querySelectorAll('.showcase-image img');

weapons.forEach((weapon) => {

    weapon.addEventListener('mousemove', (e) => {

        const rect = weapon.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 12);

        const rotateY = ((centerX - x) / 12);

        weapon.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.1)`;

    });

    weapon.addEventListener('mouseleave', () => {

        weapon.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

});
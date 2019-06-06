const $ = query => document.querySelector(query);
const queryAll = query => document.querySelectorAll(query);

// Elements
const nav = $('.nav-wrapper');
const navLinksDiv = $('.nav-links');
const navLinks = queryAll('.nav-link');
const downArrow = document.querySelector('.down');

// Section elements
const experience = $('#experience'),
    portfolio = $('#portfolio'),
    contact = $('#contact');
//===================================================
// Doc load
document.addEventListener('DOMContentLoaded', () => {
    //Iniate typed object on dom load.
    let typed = new Typed(".typed", options);

    window.onscroll = function () {
        if (experience.getBoundingClientRect().y === 0) {
            $('.active').classList.remove('active');
            queryAll('nav a')[1].classList.add('active');
        }

        //Checks browser Y pos on scroll
        if (window.pageYOffset > 275) {
            nav.style.background = "#1f2833";
        } else {
            nav.style.background = "transparent";
        }


        // Check position for active link
    }
    // Checks position of browser on load
    if (window.pageYOffset > 275) {
        nav.style.background = "#1f2833";
    } else {
        nav.style.background = "transparent";
    }
});


// =============================================
// Typed.js
// Can also be included with a regular script tag
let options = {
    strings: ["create websites 💻 and apps 📱. ", "am a Full Stack enthusiast. 🤔 ", "love learning about new technology.", "solve problems."],
    typeSpeed: 25,
    backSpeed: 20,
    startDelay: 1500,
    onComplete: function () {
        const typed = document.querySelector('.typed');
        typed.style.background = "#1f2833";
        typed.style.color = "#fff"
        setTimeout(() => {
            downArrow.style.opacity = "1";
            downArrow.firstElementChild.classList.add('fadeOutDown');
        }, 500);
    }
}
//================================================================
// Nav links
navLinks.forEach(e => {
    e.addEventListener('click', () => {
        const activeLink = $('a.active');
        activeLink.classList.remove('active');
        e.classList.add('active');
    });
});

//=============================================
// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    spedAsDuration: true,
});



//=======================================================
//AOS
AOS.init({
    once: true
});


// Arrow event listener
downArrow.addEventListener('click', () => {
    $('.active').classList.remove('active');
    queryAll('nav a')[1].classList.add('active');
})
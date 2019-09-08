const $ = query => document.querySelector(query);
const queryAll = query => document.querySelectorAll(query);
// Elements
const nav = $('.nav-wrapper');
const navLinksDiv = $('.nav-links');
const downArrow = document.querySelector('.down');

// Section elements
const experience = $('#experience'),
    portfolio = $('#portfolio'),
    contact = $('#contact');
//===================================================
// Doc load
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = queryAll('a.nav-link');


    let options = {
        strings: ["create websites and apps . ", "am a MERN stack Developer.", "love learning about new technology.", "solve problems."],
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
    //Iniate typed object on dom load.
    let typed = new Typed(".typed", options);

    window.onscroll = function () {
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



//=============================================
// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    spedAsDuration: true,
    updateURL:false
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

const $ = query => document.querySelector(query);
const queryAll = query => document.querySelectorAll(query);

const mobileNavButton = $('.fa-bars');
const nav = $('.nav-wrapper');
const navLinksDiv = $('.nav-links');
const navLinks = queryAll('.nav-link');

// TODO: Onscroll set nav to fixed position
const downArrow = document.querySelector('.down');

// =============================================
// Typed.js
// Can also be included with a regular script tag
let options = {
    strings: ["create websites 💻 and apps 📱. ", "am a Full Stack enthusiast. 🤔 ", "love learning about new technology.", "solve problems."],
    typeSpeed: 30,
    backSpeed: 25,
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
// Nav links
navLinks.forEach(e=>{
    e.addEventListener('click',()=>{
        const activeLink = $('a.active');
        activeLink.classList.remove('active');
        e.classList.add('active');
    }) ;
});

document.addEventListener('DOMContentLoaded', () => {
    //Iniate typed object on dom load.
    let typed = new Typed(".typed", options);

    window.onscroll = function(){

        if(window.pageYOffset>275){
            nav.style.background="#1f2833";
        }
        else{
            nav.style.background="transparent";
        }
    }
    if(window.pageYOffset>275){
        nav.style.background="#1f2833";
    }
    else{
        nav.style.background="transparent";
    }
});

//=============================================
var scroll = new SmoothScroll('a[href*="#"]',{
    speed:1000,
    spedAsDuration:true,
});




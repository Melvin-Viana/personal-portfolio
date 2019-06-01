//  TODO: Display nav when bar icon is clicked

// TODO: Onscroll set nav to fixed position
// =============================================
// Typed.js
// Can also be included with a regular script tag
let options = {
  strings: ["create websites 💻 and apps 📱. ", "am a Full Stack enthusiast. 🤔 ","love learning about new technology.", "solve very challenging problems."],
  typeSpeed: 30,
  backSpeed:30,
  onComplete:function(){
      const typed=document.querySelector('.typed');
      typed.style.background="#1f2833";
      typed.style.color="#fff"
  }
}


document.addEventListener('DOMContentLoaded', ()=>{
    //Iniate typed object on dom load.
    let typed = new Typed(".typed", options);

});
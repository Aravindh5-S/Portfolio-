/* ----- NAVIGATION BAR FUNCTION ----- */

function myMenuBar() {

  const navBtn = document.querySelector("#myNavMenu")

  const bar = document.querySelector(".bar")
  const close = document.querySelector(".close")

  navBtn.classList.toggle("responsive")

  bar.classList.toggle("a")
  close.classList.toggle("b")




}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */

function navScroll() {

  const navbar = document.getElementById("navbar")
  const navmenu = document.getElementById("myNavMenu")

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {


    navbar.style.boxShadow = "0px 8px 20px -10px rgba(0,0,0,0.2)"
    navbar.style.height = "80px"
    navbar.style.paddingTop = "7px"
    navmenu.style.paddingTop = "10px"
    navbar.style.transition = "0.3s all ease"
    if (window.innerWidth <= 540) {
      navbar.style.height = "60px"
    }

  }
  else {
    navbar.style.boxShadow = "none"
    navbar.style.height = "90px"
  }
}







/* -----------  SCROLL SPY ---------- */



let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('ul li')

const scroll = () => {
  sec.forEach(section => {
    let top = window.scrollY;
    let bottom = top + window.innerHeight;
    let offset = section.offsetTop;
    let height = section.offsetHeight
    let id = section.getAttribute('id');

    if (bottom - 300 >= offset && top <= offset + height) {
      links.forEach(link => {
        link.classList.remove('active')
        document.querySelector('ul li[href*=' + id + ']').classList.add('active');

      })


    }

  })
};












/* ----- TYPING EFFECT ----- */

const typed = new Typed(".typedtext", {
  strings: ["Designer", "Web Developer", "UI/UX Designer"],
  typeSpeed: 160,
  backDelay: 1000,
  backSpeed: 80,
  loop: true
})
const typed2 = new Typed(".typedtext2", {
  strings: ["Designer", "Web Developer", "UI/UX Designer"],
  typeSpeed: 160,
  backDelay: 1000,
  backSpeed: 80,
  loop: true
})


function change() {
  alert(':( Sorry! For Inconvinience this function is in under development process')
  const moon = document.querySelector(".moon")
  const sun = document.querySelector(".sun")


  moon.classList.toggle("a")
  sun.classList.toggle("c")
}





window.onscroll = () => {
  scroll();
  navScroll();
}

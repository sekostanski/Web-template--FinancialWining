//accordion
var coll = document.getElementsByClassName("about-us__collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//owl carousel
$('.owl-one').owlCarousel({
  margin:0,
  loop:true,
  items:1,
  autoplay:true,
  autoplayTimeout: 3000,
  autoplaySpeed: 2000
})


$('.owl-two').owlCarousel({
  autoplay: false,
  autoWidth: true,
  items: 5,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


//sticky nav
const navBar = document.querySelector('.hero__header');
const navBarHeight = document.querySelector('.hero__header').offsetHeight;
const heroSection = document.querySelector('.hero').offsetHeight;
const howItWorksPos = document.querySelector('.howItWorks').offsetTop;

function checkHeight() {
  if(window.pageYOffset > howItWorksPos){
    navBar.classList.add('stickyNav');
  } else {
    navBar.classList.remove('stickyNav');
  }
}

window.addEventListener('scroll', checkHeight);

//AOS animation
AOS.init();



//Mobile menu

var mobileBttn = document.querySelector(".mainnav__mobile-icon");
var bttnBackground = document.querySelector(".mainnav__mobile-background"); 
var mainNav = document.querySelector(".mainnav__navigation-list");  



mobileBttn.addEventListener("click", function(){
  mainNav.classList.toggle("active");
  bttnBackground.classList.toggle("active");
})
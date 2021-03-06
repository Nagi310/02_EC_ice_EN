/* -- Menu show --*/
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if (toggle && nav){
        toggle.addEventListener('click',() => {
            nav.classList.toggle('show');
        });
    }
}
    showMenu('nav-toggle','nav-menu'); // id名

/* -- Remove Menu --*/

const navLink =document.querySelectorAll(`.nav-link`);
navMenu = document.getElementById(`nav-menu`);
function linkAction(){
    navMenu.classList.remove(`show`);
}
navLink.forEach(n =>n.addEventListener('click',linkAction));

/* -- Scroll Sections Active link --*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener(`scroll,scrollActive`);
function scrollActive(){
 const scrollY = window.pageYOffset;
 sections/forEach(current =>{
     const sectionHeight = current.offsetHeight;
     const sectionTOP = current.offsetTOP -50;
     sectionId = current.getAttribute(`id`);
      if(scrollY > sectionTop && scrollY <= sectionTOP + sectionHeight){
          document.querySelector(`.nav__menu a [href*=` + sectionId + ` ]`).classList.add(`active`);
      }else{
        document.querySelector(`.nav__menu a [href*=` + sectionId + ` ]`).classList.remove(`active`);
      }
 })
} 


/* -- Change Color Header --*/
window.onscroll = () =>{
    const nav = document.getElementById(`header`);
    if(this .scrollY >=200) nav.classList.add(`scroll-header`);else nav.classList.remove(`scroll-header`);
}
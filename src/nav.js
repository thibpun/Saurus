const navMenu=document.querySelector('#nav-menu');
const icon=document.querySelector('#menu-icon');
const navToggle=document.querySelector('.mobile-nav-toggle');
const navbar=document.querySelector('.navbar');
navToggle.addEventListener('click',()=>{
    console.log(navbar.classList);
    const visibility=navMenu.getAttribute("data-visible");
    
    if(visibility=="false"){
        navMenu.setAttribute('data-visible',"true");
        navToggle.setAttribute('aria-expanded',true);
        icon.setAttribute('icon','ri:close-large-fill');
        document.body.classList.add('no-scroll');
    }
    else{
        navMenu.setAttribute("data-visible","false");
        navToggle.setAttribute('aria-expanded',false);
        icon.setAttribute('icon','ri:menu-line');
        document.body.classList.remove('no-scroll');
    }
})
if(navbar.classList.contains("home")){
    console.log("na indexu");
    init();
    window.addEventListener("scroll",()=>{
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = "whitesmoke";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    })
}
function init(){
    if (window.scrollY > 0)navbar.style.backgroundColor = "whitesmoke";
    else navbar.style.backgroundColor = "transparent";
}
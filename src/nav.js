const navMenu=document.querySelector('#nav-menu');
const icon=document.querySelector('#menu-icon');
const navToggle=document.querySelector('.mobile-nav-toggle');
const navbar=document.querySelector('.navbar');
navToggle.addEventListener('click',()=>{
    const visibility=navMenu.getAttribute("data-visible");
    
    if(visibility=="false"){
        navMenu.setAttribute('data-visible',"true");
        navToggle.setAttribute('aria-expanded',true);
        icon.setAttribute('icon','ri:close-large-fill');
        navbar.style.backdropFilter='none';
    }
    else{
        navMenu.setAttribute("data-visible","false");
        navToggle.setAttribute('aria-expanded',false);
        icon.setAttribute('icon','ri:menu-line');
        navbar.style.backdropFilter='blur(1rem)';
    }
})
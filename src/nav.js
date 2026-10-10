const navMenu=document.querySelector('#nav-menu');
const icon=document.querySelector('#menu-icon');
const navToggle=document.querySelector('.mobile-nav-toggle');
const navbar=document.querySelector('.navbar');
import i18next from "./i18n.js";

navToggle.addEventListener('click',()=>{
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
    initHome();
    window.addEventListener("scroll",()=>{
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = "whitesmoke";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    })
}
else initNotHome();
function initHome(){
    if (window.scrollY > 0)navbar.style.backgroundColor = "whitesmoke";
    else navbar.style.backgroundColor = "transparent";
}
function initNotHome(){
    const currentLang = i18next.language || "sr";
    let currentPage=location.pathname.split("/")[1]
    if(currentLang==="en"){
        switch(currentPage){
            case "projekti":
                currentPage="projects";
                break;
            case "vesti":
                currentPage="news";
                break;
            default:
        }
    }
    const links=Array.from(navMenu.querySelectorAll("a"));
    links.forEach(link=>{
        if(link.textContent.toLowerCase()===currentPage.toLowerCase())link.style.color="black";
    })
}
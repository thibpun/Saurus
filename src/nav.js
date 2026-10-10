const navMenu=document.querySelector('#nav-menu');
const icon=document.querySelector('#menu-icon');
const navToggle=document.querySelector('.mobile-nav-toggle');
const navbar=document.querySelector('.navbar');
const links=Array.from(navMenu.querySelectorAll("a"));
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
if(navbar.classList.contains("home"))initHome();
else initNotHome();
    
    
function initHome(){
    if (window.scrollY > 0)navbar.style.backgroundColor = "whitesmoke";
    else navbar.style.backgroundColor = "transparent";
    window.addEventListener("scroll",()=>{
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = "whitesmoke";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    })
    links.forEach(link=>{
        link.style.color="black";
        link.addEventListener("mouseenter",(e)=>{
            link.style.color="rgb(105, 105, 105)";
        })
        link.addEventListener("mouseleave",(e)=>{
            link.style.color="black";
        })
    })
    const languageToggle=document.querySelector('#language-toggle');
    languageToggle.style.color="black";
    languageToggle.addEventListener("mouseenter",(e)=>{
        languageToggle.style.color="rgb(105, 105, 105)";
    })
    languageToggle.addEventListener("mouseleave",(e)=>{
        languageToggle.style.color="black";
    })
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
    links.forEach(link=>{
        if(link.textContent.toLowerCase()===currentPage.toLowerCase())link.style.color="black";
        else{
            link.addEventListener("mouseenter",(e)=>{
                link.style.color="black";
            })
            link.addEventListener("mouseleave",(e)=>{
                link.style.color="rgb(105, 105, 105)";
            })
        }
    })
}
const carouselContainer = document.getElementById('popout-carousel-container');
const carousel=carouselContainer.querySelector('div');
const projectsContainer = document.getElementById('projects-container');
const body=document.querySelector("body");
const closeBtn=document.querySelector("#close-popout iconify-icon");
import getProjects from "./loadProjects";
let images;
let markers;
const isMobile = window.matchMedia("(max-width: 65rem)");



    
function init() {
    projectsContainer.addEventListener(("click"),(e)=>{
        const proj=e.target.closest("[data-id]");
        if(proj){
            carouselContainer.style.display="flex";
            body.classList.toggle("no-scroll");
            renderCarousel(Number(proj.getAttribute('data-id')));
    }
  });
  closeBtn.addEventListener("click",()=>{
    carouselContainer.style.display="none";
    body.classList.toggle("no-scroll");
    carousel.innerHTML='';
  })
  if(!isMobile.matches){
    
    carousel.addEventListener('mousemove',(event)=>{
        const rect=carousel.getBoundingClientRect();
        const width=rect.width;
        const x=event.clientX-rect.left;
        
        const leftArrowUrl = 'https://api.iconify.design/ph/caret-left-thin.svg?width=96&height=96&color=black';
        const rightArrowUrl = 'https://api.iconify.design/ph/caret-right-thin.svg?width=96&height=96&color=black';
        if(x<width/2) carousel.style.cursor=`url('${leftArrowUrl}') 12 12, auto`;
        else carousel.style.cursor=`url('${rightArrowUrl}') 12 12, auto`;
    })
    carousel.addEventListener("click",(event)=>{
        const rect=carousel.getBoundingClientRect();
        const width=rect.width;
        const x=event.clientX-rect.left;
        const activeImage=carousel.querySelector("picture[data-active]");
        let newIndex=Array.from(images).indexOf(activeImage)
        if(x<width/2)newIndex--;
        else newIndex++;
        if(newIndex<0)newIndex=images.length-1;
        if(newIndex>=images.length)newIndex=0;
        changeImage(newIndex,activeImage);
    })
}
else{
    let startX=0;
    let startY=0;
    carousel.addEventListener("touchstart",(e)=>{
        startX=e.changedTouches[0].clientX;
        startY=e.changedTouches[0].clientY;
    },{passive:true});
    carousel.addEventListener("touchend",(e)=>{
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const dX=endX-startX;
        const dY=endY-startY;
        const threshold = 30;
        
        if (Math.abs(dX) > Math.abs(dY)) {
            if (Math.abs(dX) > threshold) {
                const activeImage=carousel.querySelector("picture[data-active]");
                let newIndex=Array.from(images).indexOf(activeImage)
                if (dX > 0) newIndex--;
                else newIndex++;
                if(newIndex<0)newIndex=images.length-1;
                if(newIndex>=images.length)newIndex=0;
                changeImage(newIndex,activeImage);
            }
        } 
    },{passive:true});
}
}
async function renderCarousel(desiredID){
    const projects = await getProjects();
    const project=projects.find(project=>project.id===desiredID);
    const allImageModules = import.meta.glob('/src/assets/projects/**/*.{png,jpg,jpeg,webp}', { eager: true });
    const imagesLinks = Object.entries(allImageModules).filter(([filePath, module]) => filePath.includes(project.imagesFolderName)).map(([filePath, module]) => module.default);
    const mobileLinks = Object.entries(allImageModules).filter(([filePath, module]) => filePath.includes(project.mobileImagesFolderName)).map(([filePath, module]) => module.default);
    let pictures='';
    let rectangles='';
    for(let i=0;i<imagesLinks.length;i++){
        if(i==0){
            pictures+=`<picture data-active>
            <source media="(min-width: 65rem)" srcset="${imagesLinks[i]}">
            <img src="${mobileLinks[i]}" fetchpriority="high">
            </picture>`;
            rectangles+=`<button type="button" class="rectangular-marker" data-active aria-label="show image ${i+1}"></button>`;
        }
        else
        {
            try{
                pictures+=`<picture>
                <source media="(min-width: 65rem)" srcset="${imagesLinks[i]}">
                <img src="${mobileLinks[i]}">
                </picture>`;
                rectangles+=`<button type="button" class="rectangular-marker" aria-label="show image ${i+1}"></button>`;
            }
            catch{
                pictures+=`<picture>
                <source media="(min-width: 65rem)" srcset="${imagesLinks[i]}">
                <img src="${imagesLinks[i]}">
                </picture>`;
                rectangles+=`<button type="button" class="rectangular-marker" aria-label="show image ${i+1}"></button>`;       
            }
        }
    }
    const markerContainer=document.createElement('div');
    markerContainer.id='popout-marker-container'
    markerContainer.innerHTML=rectangles;
    carousel.innerHTML=pictures;
    carousel.append(markerContainer);
    images=carousel.querySelectorAll('picture');
    markers=markerContainer.querySelectorAll('button');
    createButtonEvents(markerContainer);
}

function createButtonEvents(markerContainer){
    markerContainer.addEventListener("click",(e)=>{
        e.stopPropagation();
        const marker=e.target.closest('button');
        if(marker){
            let newIndex=Array.from(markers).indexOf(marker);
            const activeImage=carousel.querySelector("picture[data-active]");
            changeImage(newIndex,activeImage);
        }
    })
}
function changeImage(newIndex, activeImage){
    images[newIndex].dataset.active=true;
    delete activeImage.dataset.active;
    
    const activeMarker=document.querySelector("#popout-marker-container button[data-active]");
    markers[newIndex].dataset.active=true;
    delete activeMarker.dataset.active; 
}

init();


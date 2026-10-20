const carousel=document.getElementById("project-carousel");
const rect=carousel.getBoundingClientRect();
const width=rect.width;
const isMobile = window.matchMedia("(max-width: 65rem)");
let images;
let markers;

if(!isMobile.matches){

    carousel.addEventListener('mousemove',(event)=>{
        const x=event.clientX-rect.left;
        
        const leftArrowUrl = 'https://api.iconify.design/ph/caret-left-thin.svg?width=96&height=96&color=black';
        const rightArrowUrl = 'https://api.iconify.design/ph/caret-right-thin.svg?width=96&height=96&color=black';
        if(x<width/2) carousel.style.cursor=`url('${leftArrowUrl}') 12 12, auto`;
        else carousel.style.cursor=`url('${rightArrowUrl}') 12 12, auto`;
    })
    carousel.addEventListener("click",(event)=>{
        const x=event.clientX-rect.left;
        const activeImage=document.querySelector("#project-carousel img[data-active]");
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
                const activeImage=document.querySelector("#project-carousel img[data-active]");
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

export default function createCarousel(folderPath){
    const allImageModules = import.meta.glob('/src/assets/projects/**/*.{png,jpg,jpeg,webp}', { eager: true });
    const imagesLinks = Object.entries(allImageModules).filter(([filePath, module]) => filePath.includes(folderPath)).map(([filePath, module]) => module.default);
    let innerHtml='';
    let rectangles='';
    for(let i=0;i<imagesLinks.length;i++){
        if(i==0){
            innerHtml+=`<img src="${imagesLinks[i]}" data-active>`;
            rectangles+=`<button type="button" class="rectangular-marker" data-active aria-label="show image ${i+1}"></button>`;
        }
        else
        {
            innerHtml+=`<img src="${imagesLinks[i]}">`;
            rectangles+=`<button type="button" class="rectangular-marker" aria-label="show image ${i+1}"></button>`;
        }
    }
    const markerContainer=document.createElement('div');
    markerContainer.id='marker-container'
    markerContainer.innerHTML=rectangles;
    carousel.innerHTML=innerHtml;
    carousel.append(markerContainer);
    images=document.querySelectorAll('#project-carousel>img');
    markers=markerContainer.querySelectorAll('button');
    createButtonEvents(markerContainer);
}  

function createButtonEvents(markerContainer){
    markerContainer.addEventListener("click",(e)=>{
        e.stopPropagation();
        const marker=e.target.closest('button');
        if(marker){
            let newIndex=Array.from(markers).indexOf(marker);
            const activeImage=document.querySelector("#project-carousel img[data-active]");
            changeImage(newIndex,activeImage);
        }
    })
}
function changeImage(newIndex, activeImage){
    images[newIndex].dataset.active=true;
    delete activeImage.dataset.active;
    
    const activeMarker=document.querySelector("#marker-container button[data-active]");
    markers[newIndex].dataset.active=true;
    delete activeMarker.dataset.active; 
}
const carousel=document.getElementById("project-carousel");
const rect=carousel.getBoundingClientRect();
const width=rect.width;
let images;
let markers;
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

    images[newIndex].dataset.active=true;
    delete activeImage.dataset.active;

    const activeMarker=document.querySelector("#marker-container div[data-active]");
    markers[newIndex].dataset.active=true;
    delete activeMarker.dataset.active; 
})

function init(){
    const imageModules = import.meta.glob('/src/assets/projects/project1/*.{png,jpg,jpeg,webp}', { eager: true });
    const imagesLinks = Object.values(imageModules).map(module => module.default);
    let innerHtml='';
    let rectangles='';
    for(let i=0;i<imagesLinks.length;i++){
        if(i==0){
            innerHtml+=`<img src="${imagesLinks[i]}" data-active>`;
            rectangles+='<div class="rectangular-marker" data-active></div>';
        }
        else
        {
            innerHtml+=`<img src="${imagesLinks[i]}">`;
            rectangles+='<div class="rectangular-marker"></div>';
        }
    }
    const markerContainer=document.createElement('div');
    markerContainer.id='marker-container'
    markerContainer.innerHTML=rectangles;
    carousel.innerHTML=innerHtml;
    carousel.append(markerContainer);
    images=document.querySelectorAll('#project-carousel>img');
    markers=document.querySelectorAll('#marker-container > div');
}  
init();
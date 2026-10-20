const markerContainer=document.getElementById('marker-container');
const markers=markerContainer.querySelectorAll('button');
const images=document.querySelectorAll('#hero>picture');
const isMobile = window.matchMedia("(max-width: 65rem)");
const hero=document.getElementById("hero");
let timerId=null;
const delay=5000;

if(isMobile.matches){
    let startX=0;
    let startY=0;
    hero.addEventListener("touchstart",(e)=>{
        startX=e.changedTouches[0].clientX;
        startY=e.changedTouches[0].clientY;
    },{passive:true});
    hero.addEventListener("touchend",(e)=>{
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const dX=endX-startX;
        const dY=endY-startY;
        const threshold = 30;

        if (Math.abs(dX) > Math.abs(dY)) {
            if (Math.abs(dX) > threshold) {
                const activeImage=hero.querySelector("picture[data-active]");
                let newIndex=Array.from(images).indexOf(activeImage)
                if (dX > 0) newIndex--;
                else newIndex++;
                if(newIndex<0)newIndex=images.length-1;
                if(newIndex>=images.length)newIndex=0;
                changeImage(newIndex,activeImage);
                resetTimer();
            }
          } 
    },{passive:true});
}

markerContainer.addEventListener("click",(e)=>{
    e.stopPropagation();
    const marker=e.target.closest('button');
    if(marker){
        let newIndex=Array.from(markers).indexOf(marker);
        const activeImage=hero.querySelector("picture[data-active]");
        changeImage(newIndex,activeImage);
        resetTimer();
    }
})

function changeImage(newIndex, activeImage){
    images[newIndex].dataset.active=true;
    delete activeImage.dataset.active;
    
    const activeMarker=markerContainer.querySelector("#marker-container button[data-active]");
    markers[newIndex].dataset.active=true;
    delete activeMarker.dataset.active; 
}

function startTimer(){
    if(timerId!==null)return;

    timerId=setInterval(()=>{
        const activeImage=hero.querySelector("picture[data-active]");
        let newIndex=Array.from(images).indexOf(activeImage)+1;
        if(newIndex>=images.length)newIndex=0;
        changeImage(newIndex,activeImage);    
    },delay);
}
function resetTimer(){
    clearInterval(timerId);
    timerId=null;
    startTimer();
}
startTimer();
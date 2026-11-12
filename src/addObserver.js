let intersectionObserver;

export default function addObserver(){
    const images =document.querySelectorAll("#projects img[data-src]");

    if(!window.IntersectionObserver){
        loadImagesFallback(images);
        return;
    }

    if (intersectionObserver) intersectionObserver.disconnect();//disconnect previous observer

    intersectionObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(!entry.isIntersecting) return;
            intersectionObserver.unobserve(entry.target);
            const {src}=entry.target.dataset;
            if(!src)return;
            entry.target.src=src;
        })
    },options);

    images.forEach((image)=>{
        intersectionObserver.observe(image);
    })
}

function loadImagesFallback(images){
    images.forEach((image)=>{
        const {src}=image.dataset;
        if(!src)return;
        image.src=src;
    })
}
const options = {
    root: null, // Uses the browser viewport as the container
    rootMargin: '0px 0px 200px 0px', // Triggers 200px before entering the bottom of the screen
    threshold: 0 // Fires as soon as 1 pixel crosses the expanded margin
};
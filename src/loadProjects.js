import renderProjects from "./renderProjects";
let projectsCache=null;

export default async function getProjects(){

    if(projectsCache) return projectsCache;

    try{
        const cacheBuster = `?v=${Date.now()}`;
        const res = await fetch(`${import.meta.env.BASE_URL}projects.json${cacheBuster}`, {
            cache: "no-store" // Requests fresh response without caching it
        });
        // const res=await fetch(`${import.meta.env.BASE_URL}projects.json`);
        
        if(!res.ok)throw new Error(`HTTP error! status:${res.status}`);

        projectsCache=await res.json();
        renderProjects(projectsCache);
        return projectsCache;
    }
    catch(err){
        console.error("Could not fetch projects!",err);
        return [];
    }
}

getProjects();


import renderProjects from "./renderProjects";
let projectsCache=null;

export default async function getProjects(){

    if(projectsCache) return projectsCache;

    try{
        const res=await fetch('/projects.json');
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


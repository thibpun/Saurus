import renderProjects from "./renderProjects";
import i18next from "./i18n.js";
import { fetchProjectsPreview } from "./loadProjects";

export default async function applyFilters(){
    const currentLang = i18next.language || "sr";
    const projects=await fetchProjectsPreview(currentLang);
    const All= currentLang==="en"?"All":"Sve";
    const getActiveFilters=(filterId)=>{
        const list=document.getElementById(filterId);

        const targetUL=list.tagName==="UL" ? list:list.querySelector('ul');
        const desiredFilters=Array.from(targetUL.querySelectorAll("button.active"));
        
        if(desiredFilters.some(filter=>filter.textContent.trim().includes(`${All}`))) return [];
        return desiredFilters.map(button=>button.textContent.trim());
    }

    const currentFilters={
        year:getActiveFilters('year-filter'),
        type:getActiveFilters('type-filter'),
        phase:getActiveFilters('phase-filter'),
        contest:getActiveFilters('contest-filter')
    }
    const filters=Object.entries(currentFilters);

    const projectsFiltered=projects.filter(project=>filters.every(filter=>checkFilter(project,filter)));
    renderProjects(projectsFiltered);
}

function checkFilter(project,filter){
    if(filter[1].length===0)return true;
    
    const desiredFilter=new Set(filter[1].map(element=>element.toLowerCase()));
    const match=project[filter[0]].some(element=>desiredFilter.has(element.toLowerCase()));
    return match;
    
}
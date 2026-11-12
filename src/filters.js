import i18next from "./i18n.js";

export default async function applyFilters(){
    const currentLang = i18next.language || "sr";
    const All = currentLang==="en"?"All":"Sve";
    const projects=document.querySelectorAll("#projects .project");

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

    projects.forEach((project)=>{
        const matches=filters.every(filter=>checkFilter(project,filter))
        project.classList.toggle("is-hidden", !matches);
    });
}

function checkFilter(project,filter){
    if(filter[1].length===0)return true;
    
    const desiredFilter=new Set(filter[1].map(element=>element.toLowerCase()));
    const match=project.getAttribute(`data-${filter[0]}`).split(",").some(element=>desiredFilter.has(element.toLowerCase()));
    return match;
}
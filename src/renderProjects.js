import i18next from "./i18n.js";
import { fetchProjectsPreview } from "./loadProjects";
import addObserver from "./addObserver.js";
import applyFilters from "./filters.js";

const projectsContainer = document.getElementById('projects');

async function init() {
  const projects=await fetchProjectsPreview(i18next.language);
  renderProjects(projects);
}

init();

const waitForDOMUpdate = () => new Promise(resolve => requestAnimationFrame(resolve));
i18next.on('languageChanged', async () => {
  const projects=await fetchProjectsPreview(i18next.language);
  renderProjects(projects); 

  await waitForDOMUpdate(); 
  applyFilters();
});

export default function renderProjects(projects){
  projectsContainer.innerHTML=projects.toReversed().map((project)=>{    
    const filterAttrs = `
      data-year="${project.year?.join(',') || ''}"
      data-type="${project.type?.join(',') || ''}"
      data-phase="${project.phase?.join(',') || ''}"
      data-contest="${project.contest?.join(',') || ''}"
    `;

    return project.expand ?    
    `<a href="../projekat/?slug=${project.slug}" class="project" ${filterAttrs}>
    <img data-src="${project.thumbnail.url}" alt="${project.thumbnail.alt}">
    <div class="card-content">
    <h2>${project.title}</h2>
    <p>${project.thumbnailDescription}</p>
    <div>
    <p>${project.year?.join(', ')}</p>
    <p>${project.type?.join(', ')}</p>
    </div>
    </div>
    </a>`
    :`<div class="project" data-id="${project._id}"  ${filterAttrs}>
    <img data-src="${project.thumbnail.url}" alt="${project.thumbnail.alt}">
    <div class="card-content">
    <h2>${project.title}</h2>
    <p>${project.thumbnailDescription}</p>
    <div>
    <p>${project.year?.join(', ')}</p>
    <p>${project.type?.join(', ')}</p>
    </div>
    </div>
    </div>`
  }).join("");
  addObserver();
}
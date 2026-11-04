import getProjects from "./loadProjects";
import i18next from "./i18n.js";
import { fetchProjectsPreview } from "./loadProjects";

const projectsContainer = document.getElementById('projects');

async function init() {
  // const projects = await getProjects();
  const projects=await fetchProjectsPreview(i18next.language);
  console.log(projects);
  renderProjects(projects);
}

init();

i18next.on('languageChanged', async () => {
  // const projects = await getProjects();
  const projects=await fetchProjectsPreview(i18next.language);
  renderProjects(projects); 
});

// export default function renderProjects(projects){
//   projectsContainer.innerHTML=projects.toReversed().map((project)=>
//     project.expand ?    
//       `<a href="${getProjectUrl(project)}" class="project">
//       <img src="${getImageUrl(project.thumbnail)}" alt="" loading="lazy">
//       <div class="card-content">
//       <h2>${project.title}</h2>
//       <p>${project.thumbnailDescription}</p>
//       <div>
//       <p>${project.year.join(', ')}</p>
//       <p>${project.type.join(', ')}</p>
//       </div>
//       </div>
//       </a>`
//       :`<div class="project" data-id="${project.id}">
//       <img src="${getImageUrl(project.thumbnail)}" alt="" loading="lazy">
//       <div class="card-content">
//       <h2>${project.title}</h2>
//       <p>${project.thumbnailDescription}</p>
//       <div>
//       <p>${project.year.join(', ')}</p>
//       <p>${project.type.join(', ')}</p>
//       </div>
//       </div>
//       </div>`
//     ).join("");
// }

// function getImageUrl(imgName) {
//   return new URL(`./assets/projects-thumbnails/${imgName}`, import.meta.url).href;
// }
// function getProjectUrl(project){
//   return `../projekat/?id=${project.id}`;
// }

export default function renderProjects(projects){
  projectsContainer.innerHTML=projects.toReversed().map((project)=>
    project.expand ?    
      `<a href="../projekat/?slug=${project.slug}" class="project">
      <img src="${project.thumbnail}" alt="" loading="lazy">
      <div class="card-content">
      <h2>${project.title}</h2>
      <p>${project.thumbnailDescription}</p>
      <div>
      <p>${project.year?.join(', ')}</p>
      <p>${project.type?.join(', ')}</p>
      </div>
      </div>
      </a>`
      :`<div class="project" data-id="${project._id}">
      <img src="${project.thumbnail}" alt="" loading="lazy">
      <div class="card-content">
      <h2>${project.title}</h2>
      <p>${project.thumbnailDescription}</p>
      <div>
      <p>${project.year?.join(', ')}</p>
      <p>${project.type?.join(', ')}</p>
      </div>
      </div>
      </div>`
    ).join("");
}
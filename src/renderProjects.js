import getProjects from "./loadProjects";
import i18next from "./i18n.js";

const projectsContainer = document.getElementById('projects');

async function init() {
  const projects = await getProjects();
  renderProjects(projects);
}

init();

i18next.on('languageChanged', async () => {
  const projects = await getProjects(); // This will skip cache and fetch the new JSON
  
  // (Optional) If you have an active filter, you might want to re-apply 
  // the filter here instead of rendering all projects.
  renderProjects(projects); 
});

export default function renderProjects(projects){
  // console.log(typeof projects);
  // console.log(projects);
  projectsContainer.innerHTML=projects.toReversed().map((project)=>
    `<a href="${project.link}" class="project">
    <img src="${getImageUrl(project.img)}" alt="" loading="lazy">
    <div class="card-content">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <div>
    <p>${project.year.join(', ')}</p>
    <p>${project.type.join(', ')}</p>
    </div>
    </div>
    </a>`).join("");
}

function getImageUrl(imgName) {
  return new URL(`./assets/projects/${imgName}`, import.meta.url).href;
}
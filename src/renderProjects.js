const projectsContainer = document.getElementById('projects');

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
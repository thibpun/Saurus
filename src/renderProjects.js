const projectsContainer = document.getElementById('projects');

export default function renderProjects(projects){
  projectsContainer.innerHTML=projects.map((project)=>
    `<a href="${project.link}" class="project">
    <img src="/src/assets/projects/${project.img}" alt="" loading="lazy">
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
import createCarousel from "./projectCarousel";
import i18next from "./i18n.js";
import getProjects from "./loadProjects";
const params = new URLSearchParams(window.location.search);
const projectId = params.get('id');

document.addEventListener('DOMContentLoaded', async () => {
  const currentLang = i18next.language || "sr";
  const doesntExistError= currentLang==="en" ?"Project not found":"Projekat ne postoji";
  

  if (!projectId) {
    document.body.innerHTML = `<h1>${doesntExistError}</h1>`;
    return;
  }
  
  try {
    insertProject();
  }
  catch (error) {
    console.error("Error loading project:", error);
  }
});
i18next.on('languageChanged', async () => {
  try {
    insertProject();
  }
  catch (error) {
    console.error("Error loading project:", error);
  }
});

function createDescritpionLong(description){
  const descriptionArr=description.split('\n');
  let innerHtml="";
  descriptionArr.forEach((paragraph)=>{
    innerHtml+=`<p>${paragraph}</p>`;
  })
  return innerHtml;
}
async function insertProject(){
  const projects = await getProjects();
  const project = projects.find(p => p.id == projectId);
  
  if (project){
    createCarousel(project.imagesFolderName,project.mobileImagesFolderName);
    document.querySelector('title').textContent = project.title;
    document.getElementById('project-title').textContent = project.title;
    document.querySelector(`td[data-field="period"]`).textContent=project.year;
    document.querySelector(`td[data-field="client"]`).textContent=project.client;
    document.querySelector(`td[data-field="location"]`).textContent=project.location;
    document.querySelector(`td[data-field="description"]`).textContent=project.description;
    document.querySelector(`td[data-field="gross"]`).textContent=project.gross;
    document.querySelector(`td[data-field="status"]`).textContent=project.status;
    const projectDescription=createDescritpionLong(project.descriptionLong);
    document.getElementById('project-description').innerHTML = projectDescription;
  }
  else document.body.innerHTML = `<h1>${doesntExistError}</h1>`;
}
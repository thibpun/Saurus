import createCarousel from "./projectCarousel";
import i18next from "./i18n.js";
import { fetchProjectExpaned } from "./loadProjects";
import { toHTML } from '@portabletext/to-html';
import DOMPurify from 'dompurify';
const params = new URLSearchParams(window.location.search);

const projectSlug = params.get('slug');

document.addEventListener('DOMContentLoaded', async () => {
  const currentLang = i18next.language || "sr";
  const doesntExistError= currentLang==="en" ?"Project not found":"Projekat ne postoji";
  

  if (!projectSlug) {
    showMissingError();
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


async function insertProject(){
  const project = (await fetchProjectExpaned(projectSlug,i18next.language))[0];
  console.log(project);
  if (project){
    createCarousel(project.images,project.mobileImages);
    document.querySelector('title').textContent = project.title;
    document.getElementById('project-title').textContent = project.title;
    document.querySelector(`td[data-field="period"]`).textContent=project.year;
    document.querySelector(`td[data-field="client"]`).textContent=project.client;
    document.querySelector(`td[data-field="location"]`).textContent=project.location;
    document.querySelector(`td[data-field="description"]`).textContent=project.description;
    document.querySelector(`td[data-field="gross"]`).textContent=project.gross;
    document.querySelector(`td[data-field="status"]`).textContent=project.status;
    const contentHTML = toHTML(
      project.descriptionLong  || []
    );
    document.getElementById('project-description').innerHTML = DOMPurify.sanitize(contentHTML);
  }
  else showMissingError();
}

function showMissingError(){
  const mainContainer = document.querySelector('main')
  const footer=document.querySelector('footer');
  footer?.remove();
  mainContainer.removeAttribute("id");
  mainContainer.id="main-box";
  mainContainer.innerHTML = `
  <section id="missing-container">
  <p data-i18n="404.text">Oops! That page can't be found.</p>
  <span>404</span>
</section>
<footer class="link-container">
  <a href="https://www.facebook.com/StudioSaurus/" aria-label="Facebook"><iconify-icon icon="ri:facebook-fill" class="link-icon"></iconify-icon></a>
  <a href="https://www.instagram.com/studio_saurus/" aria-label="Instagram"><iconify-icon icon="ri:instagram-line" class="link-icon"></iconify-icon></a>
  <a href="https://www.linkedin.com/company/studio-saurus/" aria-label="LinkedIn"><iconify-icon icon="ri:linkedin-fill" class="link-icon"></iconify-icon></a>
</footer>`;
}
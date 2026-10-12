import createCarousel from "./projectCarousel";

document.addEventListener('DOMContentLoaded', async () => {

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
  
    if (!projectId) {
      document.body.innerHTML = '<h1>Project not found</h1>';
      return;
    }
    
    try {
      const response = await fetch('/projects.json');
      const projects = await response.json();
      
      const project = projects.find(p => p.id == projectId);
      
      if (project) {
        // 4. Inject the data into your HTML
        createCarousel(project["imagesFolderName"]);
        document.querySelector('title').textContent = project["title"];
        document.getElementById('project-title').textContent = project["title"];
        document.querySelector(`td[data-field="period"]`).textContent=project["year"];
        document.querySelector(`td[data-field="client"]`).textContent=project["client"];
        document.querySelector(`td[data-field="location"]`).textContent=project["location"];
        document.querySelector(`td[data-field="description"]`).textContent=project["description"];
        document.querySelector(`td[data-field="gross"]`).textContent=project["gross"];
        document.querySelector(`td[data-field="status"]`).textContent=project["status"];
        document.getElementById('project-description').textContent = project["descriptionLong"];
      } else {
        document.body.innerHTML = '<h1>Projekat ne postoji</h1>';
      }
    } catch (error) {
      console.error("Error loading project:", error);
    }
  });
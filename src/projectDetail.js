// src/projectDetail.js
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Get the ID from the URL (e.g., ?id=123)
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
  
    if (!projectId) {
      document.body.innerHTML = '<h1>Project not found</h1>';
      return;
    }
  
    try {
      // 2. Fetch your project data from the public folder
      const response = await fetch('/projects.json');
      const projects = await response.json();
  
      // 3. Find the matching project
      const project = projects.find(p => p.id == projectId);
  
      if (project) {
        // 4. Inject the data into your HTML
        document.querySelector('title').textContent = project.name;
        document.getElementById('project-title').textContent = "Adaptacija u Hotel u Beogradu";
        // ... render images, descriptions, etc.
      } else {
        document.body.innerHTML = '<h1>Project not found</h1>';
      }
    } catch (error) {
      console.error("Error loading project:", error);
    }
  });
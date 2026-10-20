import i18next from "./i18n.js";
import getNews from "./loadNews.js";
const params = new URLSearchParams(window.location.search);
const articleId = params.get('id');
const articleContainer=document.getElementById('article-container');
document.addEventListener('DOMContentLoaded', async () => {
  const currentLang = i18next.language || "sr";
  const doesntExistError= currentLang==="en" ?"News not found":"Vesti ne postoji";
  

  if (!articleId) {
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
    console.error("Error loading article:", error);
  }
});

async function insertProject(){
  const news = await getNews();
  const article = news.find(article => article.id == articleId);
  
  if (article){
    articleContainer.querySelector('img').src=getImageUrl(article["bannerImage"]);
    articleContainer.querySelector('h1').textContent = article["title"];
    articleContainer.querySelector('p').innerHTML = article["description"];
  }
  else document.body.innerHTML = `<h1>${doesntExistError}</h1>`;
}
function getImageUrl(imgName) {
    return new URL(`./assets/news/${imgName}`, import.meta.url).href;
}
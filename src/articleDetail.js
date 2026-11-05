import i18next from "./i18n.js";
// import getNews from "./loadNews.js";
import { fetchNewsArticle } from "./loadNews.js";
import { toHTML } from '@portabletext/to-html';
import DOMPurify from 'dompurify';
const params = new URLSearchParams(window.location.search);
// const articleId = params.get('id');
const articleSlug = params.get('slug');


function showNotFound() {
  const errorMessage = i18next.language === "en"
      ? "This article doesn't exist!"
      : "Ova vest ne postoji!";

  articleContainer.innerHTML = `<h1>${errorMessage}</h1>`;
}

const articleContainer=document.getElementById('article-container');
document.addEventListener('DOMContentLoaded', async () => {
  
  if (!articleSlug) {
    showNotFound();
    return;
  }
  
  try {
    insertArticle();
  }
  catch (error) {
    console.error("Error loading article:", error);
  }
});
i18next.on('languageChanged', async () => {
  try {
    insertArticle();
  }
  catch (error) {
    console.error("Error loading article:", error);
  }
});
async function insertArticle(){
  const article = (await fetchNewsArticle(articleSlug,i18next.language))[0];
  console.log(article);
  if (article){
    articleContainer.querySelector('img').src=article.bannerImage;
    articleContainer.querySelector('h1').textContent = article.title;

    const contentHTML = toHTML(
      article.articleContent || []
    );
    console.log(contentHTML);
    articleContainer.querySelector('#rich-textbox').innerHTML = DOMPurify.sanitize(contentHTML);
  }
  else showNotFound();
}
function getImageUrl(imgName) {
    return new URL(`./assets/news/${imgName}`, import.meta.url).href;
}
// document.addEventListener('DOMContentLoaded', async () => {
//   const currentLang = i18next.language || "sr";
//   const doesntExistError= currentLang==="en" ?"News not found":"Vesti ne postoji";
  

//   if (!articleId) {
//     document.body.innerHTML = `<h1>${doesntExistError}</h1>`;
//     return;
//   }
  
//   try {
//     insertArticle();
//   }
//   catch (error) {
//     console.error("Error loading article:", error);
//   }
// });
// i18next.on('languageChanged', async () => {
//   try {
//     insertArticle();
//   }
//   catch (error) {
//     console.error("Error loading article:", error);
//   }
// });

// async function insertArticle(){
//   const news = await getNews();
//   const article = news.find(article => article.id == articleId);
  
//   if (article){
//     articleContainer.querySelector('img').src=getImageUrl(article["bannerImage"]);
//     articleContainer.querySelector('h1').textContent = article["title"];
//     articleContainer.querySelector('p').innerHTML = article["description"];
//   }
//   else document.body.innerHTML = `<h1>${doesntExistError}</h1>`;
// }
// function getImageUrl(imgName) {
//     return new URL(`./assets/news/${imgName}`, import.meta.url).href;
// }
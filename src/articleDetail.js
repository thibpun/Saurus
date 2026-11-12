import i18next from "./i18n.js";
import { fetchNewsArticle } from "./loadNews.js";
import { toHTML } from '@portabletext/to-html';
import DOMPurify from 'dompurify';
const params = new URLSearchParams(window.location.search);
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
  if (article){
    articleContainer.querySelector('img').src=article.bannerImage;
    articleContainer.querySelector('h1').textContent = article.title;

    const contentHTML = toHTML(
      article.articleContent || []
    );
    articleContainer.querySelector('#rich-textbox').innerHTML = DOMPurify.sanitize(contentHTML);
  }
  else showNotFound();
}

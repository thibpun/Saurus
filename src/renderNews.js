import getNews from "./loadNews.js";
import i18next from "./i18n.js";
import { fetchNewsPreview } from "./loadNews.js";

const newsContainer = document.getElementById('news-container');
async function init() {
  // const news = await getNews();
  const news=await fetchNewsPreview(i18next.language);
  renderNews(news);
}

init();

i18next.on('languageChanged', async () => {
  // const news = await getNews();
  const news=await fetchNewsPreview(i18next.language);
  renderNews(news); 
});

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function getMonthAbbrev(dateString) {
  const monthIndex = parseInt(dateString.split('-')[1], 10) - 1;
  return MONTHS[monthIndex];
}

export default function renderNews(news){
  newsContainer.innerHTML=news.toReversed().map((article)=>
  `<div class="article">
  <div class="article-date">
  <time>${article.date.split("-")[2]}</time>
  <time>${getMonthAbbrev(article.date)} ${article.date.split("-")[0]}</time>
  </div>
  <div class="article-content">
  <a href="${createLink(article)}">
  <img src="${article.thumbnail}" alt="">
  <h2>${article.title}</h2>
  </a>
  <p class="article-text">${article.description}</p>
  </div>
  </div>`).join("");
}

function createLink(article){
  if(!article.relatedProject)return `../vest/?slug=${article.slug}`;
  else return `../projekat/?slug=${article.relatedProject}`;
}
// export default function renderNews(news){
//   newsContainer.innerHTML=news.toReversed().map((article)=>
//   `<div class="article">
//   <div class="article-date">
//   <time>${article.day}</time>
//   <time>${article.month} ${article.year}</time>
//   </div>
//   <div class="article-content">
//   <a href="${createLink(article)}">
//   <img src="${getImageUrl(article.thumbnail)}" alt="">
//   <h2>${article.title}</h2>
//   </a>
//   <p class="article-text">${article.description}</p>
//   </div>
//   </div>`).join("");
// }


// function getImageUrl(imgName) {
//   return new URL(`./assets/news-thumbnails/${imgName}`, import.meta.url).href;
// }
// function createLink(article){
//     if(article.projectID==="")return `../vest/?id=${article.id}`;
//     else return `../projekat/?id=${article.projectID}`;
// }
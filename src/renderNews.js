import getNews from "./loadNews.js";
import i18next from "./i18n.js";

const newsContainer = document.getElementById('news-container');
async function init() {
  const news = await getNews();
  renderNews(news);
}

init();

i18next.on('languageChanged', async () => {
  const news = await getNews();
  renderNews(news); 
});

export default function renderNews(news){
  newsContainer.innerHTML=news.toReversed().map((article)=>
  `<div class="article">
  <div class="article-date">
  <time>${article.day}</time>
  <time>${article.month} ${article.year}</time>
  </div>
  <div class="article-content">
  <a href="${createLink(article)}">
  <img src="${getImageUrl(article.thumbnail)}" alt="">
  <h2>${article.title}</h2>
  </a>
  <p class="article-text">${article.description}</p>
  </div>
  </div>`).join("");
}


function getImageUrl(imgName) {
  return new URL(`./assets/news-thumbnails/${imgName}`, import.meta.url).href;
}
function createLink(article){
    console.log(article.id);
    if(article.projectID==="")return `../vest/?id=${article.id}`;
    else return `../projekat/?id=${article.projectID}`;
}
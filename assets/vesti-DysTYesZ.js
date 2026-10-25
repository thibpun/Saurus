import{t as e}from"./nav-CXHG0WiL.js";import{t}from"./loadNews-CrgC83ML.js";var n=`/Saurus/assets/SavetiDaiBau-D7EkmCtW.jpg`,r=`/Saurus/assets/proj16-COgOM7Rr.jpg`,i=`/Saurus/assets/proj18-BtHpfETb.jpg`,a=document.getElementById(`news-container`);async function o(){s(await t())}o(),e.on(`languageChanged`,async()=>{s(await t())});function s(e){a.innerHTML=e.toReversed().map(e=>`<div class="article">
  <div class="article-date">
  <time>${e.day}</time>
  <time>${e.month} ${e.year}</time>
  </div>
  <div class="article-content">
  <a href="${l(e)}">
  <img src="${c(e.thumbnail)}" alt="">
  <h2>${e.title}</h2>
  </a>
  <p class="article-text">${e.description}</p>
  </div>
  </div>`).join(``)}function c(e){return new URL(Object.assign({"./assets/news-thumbnails/SavetiDaiBau.jpg":n,"./assets/news-thumbnails/beočinTrg.jpg":r,"./assets/news-thumbnails/česma.jpg":i})[`./assets/news-thumbnails/${e}`],import.meta.url).href}function l(e){return console.log(e.id),e.projectID===``?`../vest/?id=${e.id}`:`../projekat/?id=${e.projectID}`}
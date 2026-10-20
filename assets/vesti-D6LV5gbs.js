import{t as e}from"./nav-DXWa1lDR.js";var t=`/Saurus/assets/SavetiDaiBau-D7EkmCtW.jpg`,n=`/Saurus/assets/proj16-COgOM7Rr.jpg`,r=`/Saurus/assets/proj18-BtHpfETb.jpg`,i={lang:null,data:null};async function a(){let t=e.language||`sr`,n=t===`en`?`news_en.json`:`news.json`;if(i.data&&i.lang===t)return i.data;try{let e=`?v=${Date.now()}`,r=await fetch(`/Saurus/${n}${e}`,{cache:`no-store`});if(!r.ok)throw Error(`HTTP error! status:${r.status}`);let a=await r.json();return i={lang:t,data:a},a}catch(e){return console.error(`Could not fetch news!`,e),[]}}a();var o=document.getElementById(`news-container`);async function s(){c(await a())}s(),e.on(`languageChanged`,async()=>{c(await a())});function c(e){o.innerHTML=e.toReversed().map(e=>`<div class="article">
  <div class="article-date">
  <time>${e.day}</time>
  <time>${e.month} ${e.year}</time>
  </div>
  <div class="article-content">
  <a href="${u(e)}">
  <img src="${l(e.thumbnail)}" alt="">
  <h2>${e.title}</h2>
  </a>
  <p class="article-text">${e.description}</p>
  </div>
  </div>`).join(``)}function l(e){return new URL(Object.assign({"./assets/news-thumbnails/SavetiDaiBau.jpg":t,"./assets/news-thumbnails/beočinTrg.jpg":n,"./assets/news-thumbnails/česma.jpg":r})[`./assets/news-thumbnails/${e}`],import.meta.url).href}function u(e){return console.log(e.id),e.projectID===``?`../vest/?id=${e.id}`:`../projekat/?id=${e.projectID}`}
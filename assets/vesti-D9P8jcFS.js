import{t as e}from"./nav-CkvKuC5e.js";import{n as t}from"./loadNews-VkuY5lci.js";var n=document.getElementById(`news-container`);async function r(){o(await t(e.language))}r(),e.on(`languageChanged`,async()=>{o(await t(e.language))});var i=[`JAN`,`FEB`,`MAR`,`APR`,`MAY`,`JUN`,`JUL`,`AUG`,`SEP`,`OCT`,`NOV`,`DEC`];function a(e){return i[parseInt(e.split(`-`)[1],10)-1]}function o(e){n.innerHTML=e.toReversed().map(e=>`<div class="article">
  <div class="article-date">
  <time>${e.date.split(`-`)[2]}</time>
  <time>${a(e.date)} ${e.date.split(`-`)[0]}</time>
  </div>
  <div class="article-content">
  <a href="${s(e)}">
  <img src="${e.thumbnail}" alt="">
  <h2>${e.title}</h2>
  </a>
  <p class="article-text">${e.description}</p>
  </div>
  </div>`).join(``)}function s(e){return e.relatedProject?`../projekat/?slug=${e.relatedProject}`:`../vest/?slug=${e.slug}`}
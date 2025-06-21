import{a as f,S as m,i as a}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50969769-837e1e35a02cf09097b5591db",g="https://pixabay.com/api/";async function h(s){return(await f.get(g,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector("#loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:d,downloads:p})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img class="gallery-img" src="${o}" alt="${e}" />
        </a>
        <div class="image-info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${d}</p>
          <p><b>Downloads</b> ${p}</p>
        </div>
      </li>
    `).join("");c.innerHTML=r,b.refresh()}function v(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const u=document.querySelector(".form"),P=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const r=P.value.trim();if(!r){a.warning({message:"Please enter a search term!",position:"topRight"});return}v(),w();try{const o=await h(r);if(!o.hits.length){a.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}L(o.hits)}catch(o){console.error(o)}finally{q()}});
//# sourceMappingURL=index.js.map

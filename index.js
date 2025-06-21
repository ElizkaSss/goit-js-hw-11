import{a as f,S as m,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50969769-837e1e35a02cf09097b5591db",g="https://pixabay.com/api/";async function h(s){return(await f.get(g,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),n=document.querySelector("#loader");n.style.display="block";const b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:p})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img class="gallery-img" src="${o}" alt="${e}" />
        </a>
        <div class="image-info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${d}</p>
          <p><b>Downloads</b> ${p}</p>
        </div>
      </li>
    `).join("");l.innerHTML=r,b.refresh()}function v(){l.innerHTML=""}function w(){n.classList.remove("hidden")}function q(){n.classList.add("hidden")}const u=document.querySelector(".form"),P=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const r=P.value.trim();if(!r){c.warning({message:"Please enter a search term!",position:"topRight"});return}v(),w();try{const o=await h(r);if(!o.hits.length){c.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}L(o.hits)}catch(o){console.error(o)}finally{q()}});
//# sourceMappingURL=index.js.map

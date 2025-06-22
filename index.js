import{a as m,S as y,i as a}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="50969769-837e1e35a02cf09097b5591db",g="https://pixabay.com/api/";async function h(s){return(await m.get(g,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector("#loader");c.style.display="none";const b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:p,downloads:f})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img class="gallery-img" src="${o}" alt="${e}" />
        </a>
        <div class="image-info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${n}</p>
          <p><b>Comments</b> ${p}</p>
          <p><b>Downloads</b> ${f}</p>
        </div>
      </li>
    `).join("");l.innerHTML=r,b.refresh()}function w(){l.innerHTML=""}function P(){c.style.display="block"}function S(){c.style.display="none"}const u=document.querySelector(".form"),q=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const r=q.value.trim();if(!r){a.warning({message:"Please enter a search term!",position:"topRight"});return}w(),P();try{const o=await h(r);if(!o.hits.length){a.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}L(o.hits)}catch(o){console.error(o),a.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map

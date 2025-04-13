import{a as b,i as l,S as C}from"./assets/vendor-lDhL-8I6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function h(i,t){const s={baseURL:"https://pixabay.com/api/",params:{key:"49660701-34943155f6893778b93ecffed",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}};try{return(await b(s)).data}catch(o){l.show({message:`Ooops, something went wrong, try again. ${o}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}}let n=null;const m=document.querySelector(".loader"),y=document.querySelector(".load-more-btn");function w(i){const t=document.querySelector(".gallery");let s=[];i.forEach(o=>{s.push(`<li class="gallery-item">
	<a class="gallery-link" href="${o.webformatURL}">
  <div class="image-wrapper">
    <img 
      class="gallery-image" 
      src="${o.largeImageURL}" 
      alt="${o.tags}" 
    />
    
    <div class="overlay-box">
      <div class="in-list-container">
        <h2 class="in-list-title">Likes</h2>
        <p class="in-list-p">${o.likes}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Views</h2>
        <p class="in-list-p">${o.views}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Comments</h2>
        <p class="in-list-p">${o.comments}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Downloads</h2>
        <p class="in-list-p">${o.downloads}</p>
      </div>
    </div>
  </div>
</a>
   
</li>`)}),t.insertAdjacentHTML("beforeend",`${s.join("")}`),n?n.refresh():n=new C(".gallery a",{captionsData:"alt",captionDelay:250,download:!0})}function S(){const i=document.querySelector(".gallery");i.innerHTML="",n&&(n.destroy(),n=null)}function L(){m.classList.remove("display-none")}function u(){m.classList.add("display-none")}function v(){y.classList.remove("display-none")}function p(){y.classList.add("display-none")}const f=document.querySelector(".form");f.addEventListener("submit",q);const $=document.querySelector(".load-more-btn");$.addEventListener("click",O);let a=1,c,g;async function q(i){i.preventDefault(),L(),S();const t=f.elements["search-text"].value.trim();c=t,g!==c&&(a=1,g=c);try{const{hits:s}=await h(t,a);s.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",backgroundColor:"red"}):(w(s),v())}catch(s){l.show({message:`Ooops, something went wrong, try again. ${s}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}u(),f.reset()}async function O(){a++;const i=document.querySelector(".gallery-item").getBoundingClientRect().height*2+48;L(),p();try{const{hits:t,totalHits:s}=await h(c,a);if(Math.ceil(s/15)-a>0)w(t),window.scrollBy({top:i,behavior:"smooth"});else{l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#fff",backgroundColor:"red"}),u(),p();return}}catch(t){l.show({message:`Ooops, something went wrong, try again. ${t}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}u(),v()}
//# sourceMappingURL=index.js.map

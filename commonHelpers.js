import{a as h,S as g,i as d}from"./assets/vendor-f67ecabd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();async function u(r,o){const l="https://pixabay.com/api/?key=",s="&q=",e="&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=",t=l+b+s+r+e+o,c=await(await h(t)).data;return console.log(c),c}const y=new g(".gallery a");function f(r){if(r.totalHits!==0){console.log(Math.ceil(r.totalHits/40)),console.log(n);const o=r.hits.map(({webformatURL:l,largeImageURL:s,tags:e,likes:t,views:a,comments:c,downloads:p})=>`<div class="photo-card">
                  <a href="${s}">
                    <img src="${l}" alt="${e}" loading="lazy"/>
                    <div class="info">
                      <p class="info-item">
                        <b>Likes</b>
                        ${t}
                      </p>
                      <p class="info-item">
                        <b>Views</b>
                        ${a}
                      </p>
                      <p class="info-item">
                        <b>Comments</b>
                        ${c}
                      </p>
                      <p class="info-item">
                        <b>Downloads</b>
                        ${p}
                      </p>
                    </div>
                  </a>
                </div>`).join("");i.galleryImages.insertAdjacentHTML("beforeend",o),Math.ceil(r.totalHits/40)>n?i.loadMoreBtn.classList.remove("is-hidden"):(i.loadMoreBtn.classList.add("is-hidden"),n!==1&&d.show({backgroundColor:"lightyellow",message:"We're sorry, but you've reached the end of search results",timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"})),y.refresh(),n===1&&d.show({backgroundColor:"lightgreen",message:`Hooray! We found ${r.totalHits} images.`,timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"})}else i.loadMoreBtn.classList.add("is-hidden"),d.show({backgroundColor:"#FD4A3F",message:"Sorry, there are no images matching your search query. Please try again.",timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"})}const i={searchForm:document.querySelector(".search-form"),galleryImages:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")};i.loadMoreBtn.classList.add("is-hidden");const b="35129314-12d9f6cafbe4df38ad9bc5f6b";let m="",n=1;i.searchForm.addEventListener("submit",L);i.loadMoreBtn.addEventListener("click",w);async function L(r){i.loadMoreBtn.classList.add("is-hidden"),r.preventDefault(),I();const o=r.currentTarget.elements.searchQuery.value.trim();if(console.log(o),o.trim()===""){d.show({backgroundColor:"lightyellow",message:"Empty string",timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});return}m=o,n=1;try{await u(o,n).then(f)}catch{}}function I(){i.galleryImages.innerHTML=""}async function w(){n+=1;try{await u(m,n).then(f)}catch{}}
//# sourceMappingURL=commonHelpers.js.map

import{a as g,S as h,i as c}from"./assets/vendor-f67ecabd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function u(o,r){const i="https://pixabay.com/api/?key=",a="&q=",e="&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=",t=i+b+a+o+e+r;return await(await g(t)).data}const y=new h(".gallery a");function f(o){if(o.totalHits!==0){const r=o.hits.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:l,comments:d,downloads:p})=>`<div class="photo-card">
                  <a href="${a}">
                    <img src="${i}" alt="${e}" loading="lazy"/>
                    <div class="info">
                      <p class="info-item">
                        <b>Likes</b>
                        ${t}
                      </p>
                      <p class="info-item">
                        <b>Views</b>
                        ${l}
                      </p>
                      <p class="info-item">
                        <b>Comments</b>
                        ${d}
                      </p>
                      <p class="info-item">
                        <b>Downloads</b>
                        ${p}
                      </p>
                    </div>
                  </a>
                </div>`).join("");s.galleryImages.insertAdjacentHTML("beforeend",r),Math.ceil(o.totalHits/40)>n?s.loadMoreBtn.classList.remove("is-hidden"):(s.loadMoreBtn.classList.add("is-hidden"),n!==1&&c.show({backgroundColor:"lightyellow",message:"We're sorry, but you've reached the end of search results",timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"})),y.refresh(),n===1&&c.show({backgroundColor:"lightgreen",message:`Hooray! We found ${o.totalHits} images.`,timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"})}else s.loadMoreBtn.classList.add("is-hidden"),c.show({backgroundColor:"#FD4A3F",message:"Sorry, there are no images matching your search query. Please try again.",timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"})}const s={searchForm:document.querySelector(".search-form"),galleryImages:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")};s.loadMoreBtn.classList.add("is-hidden");const b="35129314-12d9f6cafbe4df38ad9bc5f6b";let m="",n=1;s.searchForm.addEventListener("submit",L);s.loadMoreBtn.addEventListener("click",w);async function L(o){s.loadMoreBtn.classList.add("is-hidden"),o.preventDefault(),I();const r=o.currentTarget.elements.searchQuery.value.trim();if(r.trim()===""){c.show({backgroundColor:"lightyellow",message:"Empty string",timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});return}m=r,n=1;try{const i=await u(r,n);f(i)}catch(i){console.log(i)}}function I(){s.galleryImages.innerHTML=""}async function w(){n+=1;try{const o=await u(m,n);f(o)}catch(o){console.log(o)}}
//# sourceMappingURL=commonHelpers.js.map

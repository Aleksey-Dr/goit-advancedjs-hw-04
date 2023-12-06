import{a as g,S as h,i as d}from"./assets/vendor-f67ecabd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let l=1;async function u(r){const o="https://pixabay.com/api/?key=",i="&q=",a="&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=",e=o+L+i+r+a+l,n=await(await g(e)).data;return l+=1,console.log(n),n}function y(){l=1}const b=new h(".gallery a");function f(r){if(r.totalHits!==0){const o=r.hits.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:n,comments:m,downloads:p})=>`<div class="photo-card">
                  <a href="${a}">
                    <img src="${i}" alt="${e}" loading="lazy"/>
                    <div class="info">
                      <p class="info-item">
                        <b>Likes</b>
                        ${t}
                      </p>
                      <p class="info-item">
                        <b>Views</b>
                        ${n}
                      </p>
                      <p class="info-item">
                        <b>Comments</b>
                        ${m}
                      </p>
                      <p class="info-item">
                        <b>Downloads</b>
                        ${p}
                      </p>
                    </div>
                  </a>
                </div>`).join("");s.galleryImages.insertAdjacentHTML("beforeend",o),s.loadMoreBtn.classList.remove("is-hidden"),b.refresh(),d.show({backgroundColor:"lightgreen",message:`Hooray! We found ${r.totalHits} images.`,timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"})}else s.loadMoreBtn.classList.add("is-hidden"),d.show({backgroundColor:"#FD4A3F",message:"Sorry, there are no images matching your search query. Please try again.",timeout:3e3,position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"})}const s={searchForm:document.querySelector(".search-form"),galleryImages:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")};s.loadMoreBtn.classList.add("is-hidden");const L="35129314-12d9f6cafbe4df38ad9bc5f6b";let c="";s.searchForm.addEventListener("submit",I);s.loadMoreBtn.addEventListener("click",v);function I(r){s.loadMoreBtn.classList.add("is-hidden"),r.preventDefault(),M();const o=r.currentTarget.elements.searchQuery.value.trim();console.log(o),c!==o&&y(),c=o,u(o).then(f).catch(i=>console.log(i))}function v(){u(c).then(f)}function M(){s.galleryImages.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map

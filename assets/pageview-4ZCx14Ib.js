import{_ as r}from"./app-DDVDjG37.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.mister-hope.com"};const i=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-DDVDjG37.js").then(t=>t.M),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

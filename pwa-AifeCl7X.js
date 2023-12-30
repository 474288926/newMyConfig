import{_ as e}from"./index-x5_LvLnI.js";!function(n={}){const{immediate:i=!1,onNeedRefresh:t,onOfflineReady:o,onRegistered:s,onRegisteredSW:r,onRegisterError:a}=n;let d,l;l=async function(){if("serviceWorker"in navigator){const{Workbox:n}=await e((()=>import("./workbox-window.prod.es5-Iyh4EnN0.js")),__vite__mapDeps([]),import.meta.url);d=new n("./sw.js",{scope:"./",type:"classic"}),d.addEventListener("activated",(e=>{(e.isUpdate||e.isExternal)&&window.location.reload()})),d.addEventListener("installed",(e=>{e.isUpdate||null==o||o()})),d.register({immediate:i}).then((e=>{r?r("./sw.js",e):null==s||s(e)})).catch((e=>{null==a||a(e)}))}}()}({onNeedRefresh(){},onOfflineReady(){}});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
if(!self.define){let e,r={};const c=(c,i)=>(c=new URL(c+".js",i).href,r[c]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=r,document.head.appendChild(e)}else e=c,importScripts(c),r()})).then((()=>{let e=r[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(r[s])return;let d={};const f=e=>c(e,s),n={module:{uri:s},exports:d,require:f};r[s]=Promise.all(i.map((e=>n[e]||f(e)))).then((e=>(a(...e),d)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-c23QDN-8.js",revision:"8edf1e926047cadf8e9ca7442086496c"},{url:"blank-OlnPJQCk.js",revision:"f2b3465f88f8ef77752e6f2f66206024"},{url:"dataValidation-erOQTCSW.js",revision:"a90ca45e487f5b839c832b2f45318ecf"},{url:"dbClickTable-Um3ywlsP.js",revision:"0e80f23764cf26df75f31a3b4d574dd6"},{url:"element-89dVkf1p.js",revision:"103528d9ba2c29adaa4d3e03ae7c5771"},{url:"GlobalLoading-JwS2K6AE.css",revision:"5edb118c3e0fef586ae52b4413070269"},{url:"GlobalLoading-UqG-AcH7.js",revision:"d10450177132d8badafad1499922a79d"},{url:"index-2eUYLhRK.js",revision:"a614c24151bfdaf82efc48be62304cbe"},{url:"index-EYyDz7Mo.js",revision:"9bb0c519c7cfa52000a7a6135d2e6e1b"},{url:"index-JC6oCWtL.js",revision:"1afa1ce58149c41bb64dfba3f34d9c47"},{url:"index-l-5fSopf.js",revision:"f2c327fe4c5139bc26b2e3664530a365"},{url:"index-U79tOMea.js",revision:"67a17b966f19740b329e179729bf2c8d"},{url:"index-U9QpuF__.css",revision:"293045741bd11f7897dca2b8b88a0f82"},{url:"index-W9egNqcl.css",revision:"84bfa6507e0913cba91252970bb07e40"},{url:"index.html",revision:"bc77cb4df16425e28f68bf48bf553376"},{url:"particleEffects-4DLHjPZO.js",revision:"dc0fa5d7dbaeff50be3687e52a63accb"},{url:"pinia-hvuNo0MT.js",revision:"2a767bbe882f3d2e20c29f35c4ad1c05"},{url:"register-_S3W5PYv.js",revision:"520c63543ea8b4634bff6218382e82b0"},{url:"router-9PARNkFe.js",revision:"bd78b2c665e52052ef857d9dc0714a71"},{url:"steps-UsjZVDPi.js",revision:"e1e3ecba00e0c222af9ca6dc6fbf292a"},{url:"three/draco/draco_decoder.js",revision:"69b56a1d86b226ea41399f572eccc9ce"},{url:"three/draco/draco_encoder.js",revision:"19ec7d67f4a209ec8b5fa0a7e0055226"},{url:"three/draco/draco_wasm_wrapper.js",revision:"5900efaec20d6859eb66417fedb1acb4"},{url:"three/draco/gltf/draco_decoder.js",revision:"5fcad04db3893d9fbb79418b1f8e44a1"},{url:"three/draco/gltf/draco_encoder.js",revision:"b3c687f18f58015e032d5d4b5c5c33e8"},{url:"three/draco/gltf/draco_wasm_wrapper.js",revision:"7a48a3fdc5785631621f4b20cd0937dc"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"vue-LsJfAMmj.js",revision:"ba84647f4f7418e006549199f80c5963"},{url:"VueVerifyCode-wnDD6TsX.js",revision:"054679babfc1bd2f4087952182fbbb4b"},{url:"YForm-uMv03Yh9.js",revision:"1e746e73eea4404335d0354694fc254f"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

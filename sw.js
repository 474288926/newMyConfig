if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const f=e=>r(e,n),a={module:{uri:n},exports:s,require:f};i[n]=Promise.all(c.map((e=>a[e]||f(e)))).then((e=>(d(...e),s)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-GovYshvi.png",revision:"0f423b57d874ffb0ba59a7296364f999"},{url:"404-ZmL3KBig.js",revision:"6e16fdf182a4e6a7a1497f996d96baf2"},{url:"drawline-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"drawline-ZRYoneMI.js",revision:"602131b27abc8b91c2a122b0160597fe"},{url:"element-DuGX5tsM.js",revision:"b3fc6ad867a94fe8f49799b9eadbf8be"},{url:"index-cGmIDgqD.js",revision:"44463fc46931323bdf75df76c12811e0"},{url:"index-DL0Aa4CH.css",revision:"5c03b9653f7e2af65c9b62094a7f5d2f"},{url:"index-HBVLMcDJ.js",revision:"f59555622b57eba32e8128b179a72ba9"},{url:"index-TEGDBaiy.js",revision:"1905b822fb03033b3b10129a5bece9c6"},{url:"index.html",revision:"f97dacd55466d6cbcc7c9c50c2582e5d"},{url:"left_img_1-6d-jzRvB-6d-jzRvB.png",revision:"2ea48a1d257c4528e196f00cb73352d8"},{url:"left_img_2-qPXLYNe1-qPXLYNe1.png",revision:"8e4c393ccbea56edaba56e640b6c4bc7"},{url:"logo-uAGKRxDI.png",revision:"10c07aaf611eb03e6d31c7ffe6542fbc"},{url:"pinia-44_LUiNr.js",revision:"7ae3dc8a326e65632605e9d044400956"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"register-w7QBR3kH.js",revision:"5ebf8ca6e9296d6dd760b952049d4e0f"},{url:"router-Ecr3o60-.js",revision:"469caf1ddf1fb8ac137d7eb445cd0232"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"vue-ThrvhItt.js",revision:"c83ec993bb912c8cb473f8464678f743"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let u={};const o=e=>n(e,r),c={module:{uri:r},exports:u,require:o};i[r]=Promise.all(s.map((e=>c[e]||o(e)))).then((e=>(l(...e),u)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-ld7cLHpC.js",revision:null},{url:"drawline-f0mNRiTD.css",revision:null},{url:"drawline-Ktb-KEBe.js",revision:null},{url:"element-N2lv0VLh.js",revision:null},{url:"index-1gfAqK-Y.js",revision:null},{url:"index-82oTkzrm.css",revision:null},{url:"index-F9j7KsPm.js",revision:null},{url:"index-Y41gJ0tc.js",revision:null},{url:"index.html",revision:null},{url:"pinia-q6R7NAGK.js",revision:null},{url:"register-bVF8KaS4.js",revision:null},{url:"router-Oxa7rqHb.js",revision:null},{url:"vue-Bryl4oDd.css",revision:null},{url:"vue-dW7sum19.js",revision:null},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

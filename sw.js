if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const f=e=>r(e,n),d={module:{uri:n},exports:a,require:f};i[n]=Promise.all(s.map((e=>d[e]||f(e)))).then((e=>(c(...e),a)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-B_0VvszM.js",revision:"84bb326bfa482abf1ba4b103e8c2e705"},{url:"drawline-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"drawline-PNrGesES.js",revision:"865843453018a20bdeac2c5d66560db5"},{url:"element-eDX0L2r6.js",revision:"ccb1ecb6d739f243bd56f5881fe6409b"},{url:"index-8hodD6WF.js",revision:"c59b3e2684e7c7a5a27c011c12512e0f"},{url:"index-ifDtTkrQ.js",revision:"3f3bac39071c9689724b054faf48672b"},{url:"index-ikO7rpQI.js",revision:"9d31ef15939452dc7e667476bd1e1340"},{url:"index-nhBzzrW6.css",revision:"d2f2b00f8dcd38f4584480c3b361341c"},{url:"index.html",revision:"35723b8b6c6aa74a1fb9d2aa13df4761"},{url:"pinia-iYtar0m3.js",revision:"39d6efe5f2860af16932e059a3b1646a"},{url:"register-d4nvVB2Y.js",revision:"7081989737abcfa8b3343485e24d4b7f"},{url:"router-kXQf0Puw.js",revision:"300115d1746cf1c7a6e797bac658515e"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"vue-wcalmOrs.js",revision:"08335ac9c72b35abfc916fe47e217650"},{url:"VueVerifyCode-wSEIWrov.js",revision:"9e9e82f4ae4172080943517e765fd513"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

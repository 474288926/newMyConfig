if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const f=e=>s(e,d),n={module:{uri:d},exports:a,require:f};i[d]=Promise.all(r.map((e=>n[e]||f(e)))).then((e=>(c(...e),a)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-eyG2mIXf.js",revision:"e858bd8aed008f81223a4b34866be2f4"},{url:"blank-TKYYSkoa.js",revision:"2863ed71e33f70267d3b8d34503897b8"},{url:"element-r5h3MN1K.js",revision:"0508161084e7cd720388c9c773c6248a"},{url:"GlobalLoading-huFtrt7r.js",revision:"f0daf4ea0e5625167c57ec4d9b8460ba"},{url:"GlobalLoading-Pu9i27L4.css",revision:"96ac19b497040b1fe52dfd93133b9626"},{url:"index-HMYOj7wx.js",revision:"c8a6ba34d0061d886bbec19e839bb593"},{url:"index-ID83CKC_.css",revision:"6e419357d9cd5f8fddf85411e7b015d2"},{url:"index-Vjg05dyh.js",revision:"9ff57f77786878829d5bfb4af14eea44"},{url:"index-xEX1cQ6N.js",revision:"070a68abd7de264ff126126efb9e0634"},{url:"index.html",revision:"e3cf8bcf118b73a4bfe2c05ea1fdc5e1"},{url:"lil-gui.esm-5OOmdJFK.js",revision:"b48b258c61213c60bb30153b1e21bb77"},{url:"OrbitControls--o0rLgAM.js",revision:"be842824ce4a09122c543a4322ec9436"},{url:"pinia-ABw42prN.js",revision:"6edfd002e90f9dfd1e4f1072274e484e"},{url:"point-Qw3y5t9R.js",revision:"9dd98617c1e94a0f84211a485e05c2a6"},{url:"practice-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"practice-F3E6TtNh.js",revision:"85eaacc5dc4b43a46059225fa55cef01"},{url:"register-ztkOhHkO.js",revision:"899d5f9379849708b5d4761b24506f30"},{url:"router-_SOWiE3F.js",revision:"9417a76ad90e527c8b2f929a20dea732"},{url:"stickers-tY4vjwLk.js",revision:"2aa3556bb53734603340be37c3bcfaf1"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"vue-WD7aSW8w.js",revision:"2df8a38a16c440849b032216ef9bf07f"},{url:"VueVerifyCode-vksD0Uiv.js",revision:"db9da7f47c32fcce91fa94372bdb9bb1"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

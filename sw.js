if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const d=e=>c(e,n),f={module:{uri:n},exports:a,require:d};i[n]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(r(...e),a)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-xr9z7aYc.js",revision:"eafdc59ea90625e94edb7a325d13f28e"},{url:"blank-OfvDKdC-.js",revision:"183571d2866fe58247dcca77002b8302"},{url:"drawline-bCpwqWY8.js",revision:"1a587a7b3ce9ec1b3179083645cfa0bd"},{url:"drawline-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"element-RmjhcLnx.js",revision:"645e8fb9ccef22868fc399f57bd53ee6"},{url:"index-6ZzzimzY.js",revision:"fe057bfc0ab580ee7a9b881d252a06af"},{url:"index-NEOXw6DN.js",revision:"3b211d5a9e1215cccf0525be48a981d4"},{url:"index-PTVkKLEL.css",revision:"6f178b4e60cdfcb86a7a1ad432c824dd"},{url:"index-ZfiRN0gW.js",revision:"acca98522a7560bc8ef0064da631b940"},{url:"index.html",revision:"ceae8aed7e055b7ab93d655339bc1804"},{url:"pinia-TtKMqWyt.js",revision:"9315fd39884524761066f656082861e8"},{url:"register-DhpX8rAn.js",revision:"9f1d8d166ae4736d8e479cc6c4df5176"},{url:"router-2jceL_wS.js",revision:"cffcdd75c92761ae2bd3e87379ba0a5e"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"vue-OJ3pYGxG.js",revision:"34fcc5408e2da3e2a1f7b5c04e5f1262"},{url:"VueVerifyCode-lCDtNUjg.js",revision:"aa52b1166e4c2fd1a0098318208d57b6"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const f=e=>c(e,d),a={module:{uri:d},exports:n,require:f};i[d]=Promise.all(s.map((e=>a[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-Nlx6NQLv.js",revision:"f75316702e32742383e28e50f9000934"},{url:"drawline-EVri8d3l.js",revision:"f2a3777dd9a8c46c5b6a23285d5c5ff9"},{url:"drawline-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"element-Wydtbf8p.js",revision:"4a97219b07c6c7a5852c92c7151001ff"},{url:"index-6apqfNFz.js",revision:"acf30b64c869e68c23685431fc5eb066"},{url:"index-Mx00HIt_.js",revision:"746862fb008f7076c65acc686c7ceb20"},{url:"index-WUd6_Km4.css",revision:"e96460d807c4743c900b27dc5e194d2d"},{url:"index-Xcah8Hmr.js",revision:"e993f9b2bb9215996658156e59971b02"},{url:"index.html",revision:"e86d3ea3d40d93e50972e7b7f52c15b7"},{url:"pinia-r05kERgI.js",revision:"68f630674854653c7d67d01b974e1a69"},{url:"register-tAEEmqOc.js",revision:"62b952d2c7325bc507980d803819fd8f"},{url:"router-1-hisd1N.js",revision:"a6f7ec54265ea72765bd918b8829f24d"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"vue-ciRMUGox.js",revision:"7c872e73b5ecf0508fa1911d50624ed2"},{url:"VueVerifyCode-h9iCAk81.js",revision:"11da89e55bd0cb3739d28445911c803d"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const a=e=>c(e,d),f={module:{uri:d},exports:n,require:a};i[d]=Promise.all(s.map((e=>f[e]||a(e)))).then((e=>(r(...e),n)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-5iTrwmeP.js",revision:"0a3a54977d6a65043ae8d33621f1d632"},{url:"blank-xaJvleXw.js",revision:"11a993c5ff20a6e24abfcd98023b943c"},{url:"drawline-7G6xXWPt.js",revision:"7c1745050c0e14d9d05a1dabfe93f18c"},{url:"drawline-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"element-s_8vyiYU.js",revision:"2de82d0d8877e4303cac517eb07202c2"},{url:"index-31hENhUo.css",revision:"3dc01db566e7919ae416e73c1a7103a3"},{url:"index-DJYDZuLJ.js",revision:"e2f61b7864f55533e800306901efead6"},{url:"index-GjOR-5YV.js",revision:"39426b39ef8154709cfd697378165cf0"},{url:"index-YILQi2ou.js",revision:"87022ce38a02149828893fa3e294bba7"},{url:"index.html",revision:"8a8d2c1bcf2cb52a9ceb06d780cfa778"},{url:"pinia-o4vYmjXd.js",revision:"c5766eaab901d8720d58cb7ac54dc768"},{url:"register-wHxzxMOi.js",revision:"99d2706c815c5b724dbd5857480e398b"},{url:"router-IUV0bUlc.js",revision:"55f9b780c75037f1824558ed7c805eac"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"vue-vEmFmh7b.js",revision:"b52e3a538472b5c0d8bc432328d86670"},{url:"VueVerifyCode-ChOHdd78.js",revision:"26a0def01a8b9dfc75c859262fdc864f"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

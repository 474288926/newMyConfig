if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let n={};const a=e=>s(e,f),d={module:{uri:f},exports:n,require:a};i[f]=Promise.all(r.map((e=>d[e]||a(e)))).then((e=>(c(...e),n)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-OGAGPZHN.js",revision:"fb44b31724bff9f1a4af4e5e72eafb9b"},{url:"drawline-cAc2l4fv.js",revision:"eac013751a6da1a7efc0f0cb25b885b0"},{url:"drawline-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"element-ZYOctrQL.js",revision:"034e24367cb8f63f6d8bb64e12e228ea"},{url:"index-4kC57r3I.js",revision:"429d85d659800a1978b2ad07f43c9858"},{url:"index-Ee790E1J.css",revision:"6cd0ce3270b953d794bfd930238f44e2"},{url:"index-SGZWLVyW.js",revision:"1dd9d7bf41c7fe6174fff5aa4c8eb76a"},{url:"index-UTRWquqg.js",revision:"ecbcfd8286ddfff5b00067f625586ca6"},{url:"index.html",revision:"881f89df9510b604068cd1fd7bed44d5"},{url:"pinia-UQUQAaUT.js",revision:"7cb2068d85d115e0c067be3f21c8a0e6"},{url:"register-eGnEQdmz.js",revision:"3afbfbe1b913ee83e75cf0a32292a91d"},{url:"router-uUl2h6ml.js",revision:"20186e9baa87935565e86bbbf21cc2be"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"vue-Rr47Usvh.js",revision:"aa5a66aaf296b5c749e93e14394103c4"},{url:"VueVerifyCode-AypfQOQh.js",revision:"92806444a5a64b611758d91a3f78c8e3"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

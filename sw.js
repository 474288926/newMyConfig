if(!self.define){let e,c={};const i=(i,s)=>(i=new URL(i+".js",s).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let n={};const a=e=>i(e,r),f={module:{uri:r},exports:n,require:a};c[r]=Promise.all(s.map((e=>f[e]||a(e)))).then((e=>(d(...e),n)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-KhCBIR9s.js",revision:"ddbcc1bc20e7c8efad49c58da303646c"},{url:"blank-nNu8n3y8.js",revision:"31f6a99ebe146f4ca592249f7c380b16"},{url:"drawline-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"drawline-R8peZAga.js",revision:"13b991a8870f9b5e1c17a02d94d710dc"},{url:"element-_jdsOpwD.js",revision:"ecd62d8f1b1ae5bc0c739d0d18c326ce"},{url:"index-MRwy51IG.css",revision:"f4b348c6eb508057e2dd0c536da87110"},{url:"index-oAjMBXcI.js",revision:"58d61a4dc1b0e5172071058fc5d8d101"},{url:"index-rD2apTW7.js",revision:"92552d15782cfafeb698dda71ae84783"},{url:"index-UjTSb8Mq.js",revision:"2d83324973b2a97afc02fd7b4d29de4c"},{url:"index.html",revision:"c6ad9129fa18b48432465a139ce7e185"},{url:"pinia-CJXYloCd.js",revision:"f0bdff425166b432aa345812c2ee9c7c"},{url:"register-7ldvp_aw.js",revision:"8f951cedaab872b448c7f562d4b3f773"},{url:"router-Zg4DlueI.js",revision:"4d51f83cab5752fcc5a6543cbd7bc178"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"vue-tqnVl7_1.js",revision:"8719c436ec116c024bfa5b1ce4b1d6f0"},{url:"VueVerifyCode-hmRxlG-u.js",revision:"291cf78f2fef14574f7923aaa84f67ed"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

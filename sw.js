if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const n=e=>c(e,d),f={module:{uri:d},exports:a,require:n};i[d]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-QgVYjsQp.js",revision:"67f68f95a39c48883243875c15893ed0"},{url:"blank-DcibnRh-.js",revision:"d60f184dc470036dae4cc80cea7df17d"},{url:"element-Mute81YA.js",revision:"49801961bf71bdc1f453c5427160373e"},{url:"GlobalLoading-aQIlUaag.css",revision:"c7e8aba7fecc05d2a376d0ec6199efe3"},{url:"GlobalLoading-svjXZ3kL.js",revision:"848e2bcc8b61100dbaeee8f1f4dac688"},{url:"index-8VPrfUJp.js",revision:"2c98d11b6ab8a68273b2ad31c24a57bb"},{url:"index-dJhiOnpV.js",revision:"6def26079ae52298bfdaa22eb836191b"},{url:"index-H3ONvJhA.css",revision:"bcb629cd48fc18098667535f554d6627"},{url:"index-I8CeXR9i.js",revision:"32f2b2f540bd0504aefc8cd16fc7e79c"},{url:"index.html",revision:"c35cd52e16ee4ae47b9e2356d688684b"},{url:"lil-gui.esm-5OOmdJFK.js",revision:"b48b258c61213c60bb30153b1e21bb77"},{url:"OrbitControls--o0rLgAM.js",revision:"be842824ce4a09122c543a4322ec9436"},{url:"pinia-MdAk0oCK.js",revision:"5c7a8fad095a6fe636a75a6c0e6be163"},{url:"point-YkECVI4E.js",revision:"fdc25b9c2119289b774b82e1df834e59"},{url:"practice-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"practice-FvO1w73D.js",revision:"aa0755b03ab2419729b5ec57d43d6e2d"},{url:"register-vIJ98RBl.js",revision:"9bd62613b63aa5b7e583ecf41ad13bae"},{url:"router-UWs-czpg.js",revision:"c13549c2cc331e3a4d47f00a84217f5b"},{url:"stickers-7Zd_fLdN.js",revision:"fe0bc1ce5fd46636b3ef86fd07d83077"},{url:"vue-9Ohf15WQ.js",revision:"addff23526d28e4fe894ddeeaacf098c"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"VueVerifyCode-702UVZXd.js",revision:"72aedd45105c4af7414827627614c517"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"9d78aea5597479db8ca5c922a70b00d2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

if(!self.define){let e,d={};const r=(r,i)=>(r=new URL(r+".js",i).href,d[r]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=d,document.head.appendChild(e)}else e=r,importScripts(r),d()})).then((()=>{let e=d[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(d[a])return;let s={};const b=e=>r(e,a),n={module:{uri:a},exports:s,require:b};d[a]=Promise.all(i.map((e=>n[e]||b(e)))).then((e=>(c(...e),s)))}}define(["./workbox-2dfdff9b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404-Db5WgJt5.js",revision:"3e22bd052a19d62a53732a4e65c624ba"},{url:"blank-pQfyU7bp.js",revision:"30ab40f69767718dfc870ad44311d8c6"},{url:"element-2Z2Vb9S8.js",revision:"d0c6a82b7491204981e9333ee2bfd46a"},{url:"fog-VAK1Rexd.js",revision:"c0624a189918b62254cf8610d44576c2"},{url:"GlobalLoading-ePv_yJBW.js",revision:"5d8a5f485a8308420a706d4d002a9392"},{url:"GlobalLoading-hYdwa5iS.css",revision:"2ceadc5a2a2b2e0044dcba36e495841d"},{url:"index-98-6umcr.js",revision:"5e1d3c8577e0b51c4ebba15b38a31ba5"},{url:"index-b_eUFkq0.css",revision:"ad40e6c16dbc281306d6f51150d81983"},{url:"index-B4EPfUSH.js",revision:"761633536e69db6c7e443ecd453d7abe"},{url:"index-idy_hbJv.js",revision:"c6a87bcac5969d714beedf98d629d6e8"},{url:"index.html",revision:"5ddf45e592fa2de3593d851b27da0802"},{url:"lil-gui.esm-5OOmdJFK.js",revision:"b48b258c61213c60bb30153b1e21bb77"},{url:"loadModel-L2Hpxzmw.js",revision:"57e0575dd6bd8d0f69c3e680596d6104"},{url:"pinia-WVN59piB.js",revision:"b8bc5fdf64d4cbb152e649876a80e62d"},{url:"point-4zqHt85c.js",revision:"596dee09825a3334a81e373da1c43725"},{url:"practice-f0mNRiTD.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"practice-YKO5mXOu.js",revision:"b760e6665dd2d5715a2d022a501ff63b"},{url:"raycasting-lJ3EMYTL.js",revision:"650ba189bc4de9291bafad7a68be78a7"},{url:"register-hO3jPtR1.js",revision:"4ea64cd6bdab7ca7d89f8484000172bc"},{url:"RGBELoader-wFRHd7xM.js",revision:"2f12d0cc70d956674be31f3c3fd9afac"},{url:"router-Jx8oPocv.js",revision:"8dcdb9d71006bbb43f06f6abb15355bb"},{url:"solarSystem-neMCZznO.js",revision:"2cfc7ef655e584c5b001319d708a8fd2"},{url:"stickers-RW2wM432.js",revision:"dffd4f0bb1114090fc32a401c86fcf8d"},{url:"three/draco/draco_decoder.js",revision:"69b56a1d86b226ea41399f572eccc9ce"},{url:"three/draco/draco_encoder.js",revision:"19ec7d67f4a209ec8b5fa0a7e0055226"},{url:"three/draco/draco_wasm_wrapper.js",revision:"5900efaec20d6859eb66417fedb1acb4"},{url:"three/draco/gltf/draco_decoder.js",revision:"5fcad04db3893d9fbb79418b1f8e44a1"},{url:"three/draco/gltf/draco_encoder.js",revision:"b3c687f18f58015e032d5d4b5c5c33e8"},{url:"three/draco/gltf/draco_wasm_wrapper.js",revision:"7a48a3fdc5785631621f4b20cd0937dc"},{url:"tweenedAnimation-rjcfx840.js",revision:"195b6dc7a360694e9294d414d950080e"},{url:"updateSize-r6U5WxDX.js",revision:"02806d0add7a8502ca98a11b2aa0feeb"},{url:"vue-AJG3-b4b.js",revision:"9b8028f7588ba0bd77369e28824b8354"},{url:"vue-Bryl4oDd.css",revision:"7e64779cda10ba475dc59cce8200e8db"},{url:"VueVerifyCode-eWjMKisk.js",revision:"1812f254d1f347949ce67fe351309780"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-144.png",revision:"572bad962004f4715d09af5fa0ac78c4"},{url:"pwa-192.png",revision:"a534bc581efb7704c10cf6771715c104"},{url:"pwa-512.png",revision:"82d5b1d8c15422a33300d61660ef8edb"},{url:"manifest.webmanifest",revision:"8b1510f71b632e6add658538e33c81f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/someInterface/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));

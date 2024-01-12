import{G as e}from"./lil-gui.esm-5OOmdJFK.js";import{D as t,H as a,F as n,a as r,L as s,b as o,S as i,P as l,W as c,A as d,O as p,T as h,c as f,d as m,M as u,E as w,e as g,f as y}from"./OrbitControls--o0rLgAM.js";import{d as E,r as b,o as v,s as M,c as A,e as R,f as F}from"./index-dJhiOnpV.js";class C extends t{constructor(e){super(e),this.type=a}parse(e){const t=function(e,t){switch(e){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(t||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(t||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(t||""));default:throw new Error("THREE.RGBELoader: Memory Error: "+(t||""))}},s=function(e,t,a){t=t||1024;let n=e.pos,r=-1,s=0,o="",i=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));for(;0>(r=i.indexOf("\n"))&&s<t&&n<e.byteLength;)o+=i,s+=i.length,n+=128,i+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));return-1<r&&(!1!==a&&(e.pos+=s+r+1),o+i.slice(0,r))},o=function(e,t,a,n){const r=e[t+3],s=Math.pow(2,r-128)/255;a[n+0]=e[t+0]*s,a[n+1]=e[t+1]*s,a[n+2]=e[t+2]*s,a[n+3]=1},i=function(e,t,a,n){const s=e[t+3],o=Math.pow(2,s-128)/255;a[n+0]=r.toHalfFloat(Math.min(e[t+0]*o,65504)),a[n+1]=r.toHalfFloat(Math.min(e[t+1]*o,65504)),a[n+2]=r.toHalfFloat(Math.min(e[t+2]*o,65504)),a[n+3]=r.toHalfFloat(1)},l=new Uint8Array(e);l.pos=0;const c=function(e){const a=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,n=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,r=/^\s*FORMAT=(\S+)\s*$/,o=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,i={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let l,c;for((e.pos>=e.byteLength||!(l=s(e)))&&t(1,"no header found"),(c=l.match(/^#\?(\S+)/))||t(3,"bad initial token"),i.valid|=1,i.programtype=c[1],i.string+=l+"\n";l=s(e),!1!==l;)if(i.string+=l+"\n","#"!==l.charAt(0)){if((c=l.match(a))&&(i.gamma=parseFloat(c[1])),(c=l.match(n))&&(i.exposure=parseFloat(c[1])),(c=l.match(r))&&(i.valid|=2,i.format=c[1]),(c=l.match(o))&&(i.valid|=4,i.height=parseInt(c[1],10),i.width=parseInt(c[2],10)),2&i.valid&&4&i.valid)break}else i.comments+=l+"\n";return 2&i.valid||t(3,"missing format specifier"),4&i.valid||t(3,"missing image size specifier"),i}(l),d=c.width,p=c.height,h=function(e,a,n){const r=a;if(r<8||r>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);r!==(e[2]<<8|e[3])&&t(3,"wrong scanline width");const s=new Uint8Array(4*a*n);s.length||t(4,"unable to allocate buffer space");let o=0,i=0;const l=4*r,c=new Uint8Array(4),d=new Uint8Array(l);let p=n;for(;p>0&&i<e.byteLength;){i+4>e.byteLength&&t(1),c[0]=e[i++],c[1]=e[i++],c[2]=e[i++],c[3]=e[i++],2==c[0]&&2==c[1]&&(c[2]<<8|c[3])==r||t(3,"bad rgbe scanline format");let a,n=0;for(;n<l&&i<e.byteLength;){a=e[i++];const r=a>128;if(r&&(a-=128),(0===a||n+a>l)&&t(3,"bad scanline data"),r){const t=e[i++];for(let e=0;e<a;e++)d[n++]=t}else d.set(e.subarray(i,i+a),n),n+=a,i+=a}const h=r;for(let e=0;e<h;e++){let t=0;s[o]=d[e+t],t+=r,s[o+1]=d[e+t],t+=r,s[o+2]=d[e+t],t+=r,s[o+3]=d[e+t],o+=4}p--}return s}(l.subarray(l.pos),d,p);let f,m,u;switch(this.type){case n:u=h.length/4;const e=new Float32Array(4*u);for(let a=0;a<u;a++)o(h,4*a,e,4*a);f=e,m=n;break;case a:u=h.length/4;const t=new Uint16Array(4*u);for(let a=0;a<u;a++)i(h,4*a,t,4*a);f=t,m=a;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:d,height:p,data:f,header:c.string,gamma:c.gamma,exposure:c.exposure,type:m}}setDataType(e){return this.type=e,this}load(e,t,r,i){return super.load(e,(function(e,r){switch(e.type){case n:case a:e.colorSpace=s,e.minFilter=o,e.magFilter=o,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,r)}),r,i)}}const k={class:"flex-1 overflow-hidden"},x=E({__name:"stickers",setup(t){const a=b(null),n=new i,r=new l(45,1,.1,1e3);r.position.set(2,2,1),r.lookAt(0,0,0);const o=new c,E=new d(5);n.add(E);const x=new p(r,o.domElement),H=new e;H.title("控制器");const L=H.domElement;L.style.top="140px",L.style.right="32px";const U=new h,S=U.load("/newMyConfig/three/stickers/color.jpg");S.colorSpace=f;const G=U.load("/newMyConfig/three/stickers/ambientOcclusion.jpg"),B=U.load("/newMyConfig/three/stickers/roughness.jpg"),T=new m(1,2),j=new u({color:"#fff",map:S,transparent:!0,aoMap:G,specularMap:B,reflectivity:.3});(new C).load("/newMyConfig/three/hdr/003.hdr",(e=>{Object.assign(e,{mapping:w}),n.background=e,n.environment=e,j.envMap=e})),H.add(j,"aoMapIntensity",0,1).name("ao贴图强度"),H.add(S,"colorSpace",{sRGB:f,linear:s}).onChange((()=>{S.needsUpdate=!0}));const O=new g(T,j),$=new y(16777215,1);$.position.set(2,3,4),n.add($);const I=()=>{x.update(),requestAnimationFrame(I),o.render(n,r)};return v((async()=>{var e,t,r;await M(),a.value&&(a.value.appendChild(L),o.setSize(null==(e=a.value)?void 0:e.clientWidth,null==(t=a.value)?void 0:t.clientHeight),null==(r=a.value)||r.appendChild(o.domElement)),n.add(O),x.update(),I()})),(e,t)=>(A(),R("div",k,[F("div",{ref_key:"canvasRef",ref:a,class:"h-full"},null,512)]))}});export{x as default};
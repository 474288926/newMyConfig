import{S as a,F as t,P as e,W as n,O as o,B as s,a as r,T as i,b as l,c as d,d as u,e as p,f as w,u as m,V as c}from"./updateSize-eKcqFK11.js";import{T as v,E as f,u as y}from"./tween.module-upfANlK2.js";import{d as h,r as M,o as b,s as A,c as x,e as g,f as z}from"./index-Gjt4mdF1.js";const E={class:"flex-1 overflow-hidden"},P=h({__name:"particleEffects",setup(h){const P=M(null),I=new a;I.fog=new t(328972,5e-4);const j=new e(60,1,100,1e4);j.position.set(90,140,200);const F=new n;F.setPixelRatio(window.devicePixelRatio);const R=new o(j,F.domElement),S=new s,_=new s,k=new Float32Array(4500),C=new Float32Array(1500);for(let a=0,t=1500,e=0;a<t;a+=1,e+=3)k[e]=800*Math.random()-400,k[e+1]=800*Math.random()-400,k[e+2]=800*Math.random()-400,a<500&&(C[e]=600*Math.random()-400,C[e+1]=600*Math.random()-400,C[e+2]=600*Math.random()-400);S.setAttribute("position",new r(k,3)),_.setAttribute("position",new r(C,3));const T=(new i).load("/newMyConfig/three/gradient.png");T.colorSpace=l;const B=new d({size:4,transparent:!0,map:T}),L=new d({size:2,transparent:!0,map:T}),O=new u(S,B),U=new u(_,L);I.add(O),I.add(U);const V=S.getAttribute("position"),W=new p(100,100,100,8,8,8).getAttribute("position"),q=new w(100,20,20).getAttribute("position"),D=M(0),G=M(!1),H=(a,t)=>{G.value=!G.value;const{array:e,count:n}=a;D.value=D.value>n?D.value:n;for(let o=0;o<D.value;o+=1){const a=new c(S.attributes.position.array[3*o]-t,S.attributes.position.array[3*o+1],S.attributes.position.array[3*o+2]);new v(a).easing(f.Exponential.In).to({x:void 0===e[3*o]?800*Math.random()-400:e[3*o]+t,y:void 0===e[3*o+1]?800*Math.random()-400:e[3*o+1],z:void 0===e[3*o+2]?800*Math.random()-400:e[3*o+2]},1e3).delay(400*Math.random()).onUpdate((()=>{V.array[3*o]=a.x+t,V.array[3*o+1]=a.y,V.array[3*o+2]=a.z,S.setAttribute("position",new r(V.array,3))})).start()}},J=()=>{R.update(),U.rotation.x+=Math.PI/1e3,U.rotation.y-=Math.PI/1e3,y(),j.lookAt(I.position),F.render(I,j)};return b((async()=>{var a;await A(),P.value&&(m(P.value,j,F),null==(a=P.value)||a.appendChild(F.domElement)),setInterval((()=>{G.value?H(W,80):H(q,-80)}),5e3),F.setAnimationLoop(J)})),(a,t)=>(x(),g("div",E,[z("div",{ref_key:"canvasRef",ref:P,class:"h-full"},null,512)]))}});export{P as default};

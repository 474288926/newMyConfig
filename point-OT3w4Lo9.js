import{S as e,P as a,W as n,A as s,O as o,B as t,a as d,M as l,g as r,u as i}from"./updateSize-l203fZic.js";import{d as u,r as w,o as p,s as c,c as f,e as m,f as v}from"./index-WKXDDgqB.js";const A={class:"flex-1 overflow-hidden"},x=u({__name:"point",setup(u){const x=w(null),y=new e,h=new a(45,1,.1,1e3);h.position.set(2,2,10),h.lookAt(0,0,0);const _=new n,j=new s(5);y.add(j);const k=new o(h,_.domElement),E=new t,G=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);E.setAttribute("position",new d(G,3));const S=new Uint32Array([0,1,2,2,3,0]);E.setIndex(new d(S,1)),E.addGroup(0,3,0),E.addGroup(3,3,1);const b=new l({color:16711680}),g=new l({color:65280}),z=new r(E,[b,g]),B=()=>{k.update(),_.render(y,h)};return p((async()=>{var e;await c(),x.value&&(i(x.value,h,_),null==(e=x.value)||e.appendChild(_.domElement)),y.add(z),_.setAnimationLoop(B)})),(e,a)=>(f(),m("div",A,[v("div",{ref_key:"canvasRef",ref:x,class:"h-full"},null,512)]))}});export{x as default};

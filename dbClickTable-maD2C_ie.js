import{d as e,r as l,b as a,c as d,f as t,w as n,g as o,e as u,t as r,F as s,k as i,l as m}from"./index-2lILnGRF.js";const p=e({__name:"dbClickTable",setup(e){const p=l([{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:20,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"Shanghai",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["1"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"}]),V=l([{label:"",value:""},{label:"男",value:"1"},{label:"女",value:"0"}]),x=e=>"1"===e?"男":"0"===e?"女":"";return(e,l)=>{const f=a("vxe-column"),v=a("vxe-input"),c=a("vxe-option"),b=a("vxe-select"),U=a("vxe-table");return o(),d("div",null,[t(U,{border:"","show-overflow":"",data:p.value,"column-config":{resizable:!0},"edit-config":{trigger:"dblclick",mode:"cell"}},{default:n((()=>[t(f,{type:"seq",width:"60"}),t(f,{field:"name",title:"Name","edit-render":{autofocus:".vxe-input--inner"}},{edit:n((({row:e})=>[t(v,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,type:"text"},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["edit-render"]),t(f,{field:"role",title:"Role","edit-render":{}},{edit:n((({row:e})=>[t(v,{modelValue:e.role,"onUpdate:modelValue":l=>e.role=l,type:"text",placeholder:"请输入昵称"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),t(f,{field:"sex",title:"Sex","edit-render":{}},{default:n((({row:e})=>[u("span",null,r(x(e.sex)),1)])),edit:n((({row:e})=>[t(b,{modelValue:e.sex,"onUpdate:modelValue":l=>e.sex=l,transfer:""},{default:n((()=>[(o(!0),d(s,null,i(V.value,(e=>(o(),m(c,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),t(f,{field:"sex2",title:"多选下拉","edit-render":{}},{default:n((({row:e})=>{return[u("span",null,r((l=e.sex2,l?l.map((e=>x(e))).join(","):"")),1)];var l})),edit:n((({row:e})=>[t(b,{modelValue:e.sex2,"onUpdate:modelValue":l=>e.sex2=l,multiple:"",transfer:""},{default:n((()=>[(o(!0),d(s,null,i(V.value,(e=>(o(),m(c,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),t(f,{field:"num6",title:"Number","edit-render":{}},{edit:n((({row:e})=>[t(v,{modelValue:e.num6,"onUpdate:modelValue":l=>e.num6=l,type:"number",placeholder:"请输入数值"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),t(f,{field:"date12",title:"Date","edit-render":{}},{edit:n((({row:e})=>[t(v,{modelValue:e.date12,"onUpdate:modelValue":l=>e.date12=l,type:"date",placeholder:"请选择日期",transfer:""},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),t(f,{field:"date13",title:"Week","edit-render":{}},{edit:n((({row:e})=>[t(v,{modelValue:e.date13,"onUpdate:modelValue":l=>e.date13=l,type:"week",placeholder:"请选择日期",transfer:""},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),t(f,{field:"address",title:"Address","edit-render":{}},{edit:n((({row:e})=>[t(v,{modelValue:e.address,"onUpdate:modelValue":l=>e.address=l,type:"text"},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])}}});export{p as default};

import{d as e,r as a,b as t,c as l,e as o,f as n,w as d,V as s,g as r,h as i}from"./index-kt5uSOvn.js";const u=e({__name:"dataValidation",setup(e){const u=a(),m=a([{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"",age:23,address:"test abc"},{id:10005,name:"",role:"",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}]),c=a({name:[{required:!0,message:"请输入名称"},{validator:({cellValue:e})=>new Promise(((a,t)=>{setTimeout((()=>{e&&(e.length<3||e.length>50)?t(new Error("名称长度在 3 到 50 个字符之间")):a()}),100)}))}],role:[{validator({cellValue:e}){if(e&&!["Develop","Test","Designer","PM"].includes(e))return new Error("角色输入不正确")}}],sex:[{required:!0,message:"性别必须填写"},{pattern:/^[0,1]{1}$/,message:"格式不正确"}],age:[{pattern:"^[0-9]{0,3}$",message:"格式不正确"}]}),g=e=>{const a=u.value;a&&a.updateStatus(e)},p=async()=>{const e=u.value;if(e){await e.validate()?s.modal.message({status:"error",content:"校验不通过！"}):s.modal.message({status:"success",content:"校验成功！"})}},f=async()=>{const e=u.value;if(e){const{row:a}=await e.insert({});await e.validate(a)}},h=()=>{const e=u.value;if(e){const a=e.getCheckboxRecords();s.modal.alert(a.length)}},v=()=>{const e=u.value;if(e){const a=e.getInsertRecords();s.modal.alert(a.length)}},w=()=>{const e=u.value;if(e){const a=e.getRemoveRecords();s.modal.alert(a.length)}},x=()=>{const e=u.value;if(e){const a=e.getUpdateRecords();s.modal.alert(a.length)}};return(e,a)=>{const s=t("vxe-button"),V=t("vxe-column"),C=t("vxe-input"),_=t("vxe-colgroup"),k=t("vxe-table");return r(),l("div",null,[o("p",null,[n(s,{onClick:f},{default:d((()=>[i("新增")])),_:1}),n(s,{onClick:a[0]||(a[0]=e=>(()=>{const e=u.value;e&&e.removeCheckboxRow()})())},{default:d((()=>[i("删除选中")])),_:1}),n(s,{onClick:p},{default:d((()=>[i("快速校验变动数据")])),_:1}),n(s,{onClick:h},{default:d((()=>[i("获取选中")])),_:1}),n(s,{onClick:v},{default:d((()=>[i("获取新增")])),_:1}),n(s,{onClick:w},{default:d((()=>[i("获取删除")])),_:1}),n(s,{onClick:x},{default:d((()=>[i("获取修改")])),_:1})]),n(k,{class:"mt-4",border:"","show-overflow":"","keep-source":"",height:"300",ref_key:"tableRef",ref:u,data:m.value,"edit-rules":c.value,"edit-config":{trigger:"click",mode:"cell",showStatus:!0}},{default:d((()=>[n(V,{type:"checkbox",width:"60"}),n(V,{type:"seq",width:"60"}),n(_,{title:"分组1"},{default:d((()=>[n(V,{field:"name",title:"Name","edit-render":{name:"$input"}},{edit:d((e=>[n(C,{modelValue:e.row.name,"onUpdate:modelValue":a=>e.row.name=a,type:"text",onChange:a=>g(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),n(V,{field:"role",title:"Role","edit-render":{name:"$input"}},{edit:d((e=>[n(C,{modelValue:e.row.role,"onUpdate:modelValue":a=>e.row.role=a,type:"text",onChange:a=>g(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1})])),_:1}),n(_,{title:"分组2"},{default:d((()=>[n(_,{title:"分组21"},{default:d((()=>[n(V,{field:"sex",title:"Sex","edit-render":{name:"$input"}},{edit:d((e=>[n(C,{modelValue:e.row.sex,"onUpdate:modelValue":a=>e.row.sex=a,type:"text",onChange:a=>g(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),n(V,{field:"age",title:"Age","edit-render":{name:"$input"}},{edit:d((e=>[n(C,{modelValue:e.row.age,"onUpdate:modelValue":a=>e.row.age=a,type:"integer",onChange:a=>g(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),n(V,{field:"date",title:"Date","edit-render":{name:"$input"}},{edit:d((e=>[n(C,{modelValue:e.row.date,"onUpdate:modelValue":a=>e.row.date=a,type:"date",transfer:"",onChange:a=>g(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1})])),_:1})])),_:1})])),_:1},8,["data","edit-rules"])])}}});export{u as default};

import{d as e,r as l,s as t,b as a,c as s,l as r,w as o,g as c,e as u,f as i,h as n,t as p,F as d}from"./index-qt47kGxj.js";const m={class:"border-dotted border-2 border-sky-500 font-normal p-4 m-auto"},v={class:"flex flex-row text-right"},f=i("div",{class:"w-24"},"付款账户：",-1),y={class:"flex flex-row text-right"},g=i("div",{class:"w-24"},"收款账户：",-1),b={class:"flex flex-row text-right"},x=i("div",{class:"w-24"},"收款人姓名：",-1),w={class:"flex flex-row text-right"},k=i("div",{class:"w-24"},"转账金额：",-1),X=e({__name:"steps",setup(e){const X=l(1),_=l(),h=l([{key:"paymentAccount",label:"付款账户",component:"el-input",itemProps:{rules:[{required:!0,message:"请输入付款账户",trigger:"blur"}]}},{key:"collectionAccount",label:"收款账户",component:"el-input",itemProps:{rules:[{required:!0,message:"请输入收款账户",trigger:"blur"}]}},{key:"payee",label:"收款人姓名",component:"el-input",itemProps:{rules:[{required:!0,message:"请输入收款人姓名",trigger:"blur"}]}},{key:"price",label:"转账金额",component:"el-input",itemProps:{rules:[{required:!0,message:"请输入转账金额",trigger:"blur"},{type:"number",message:"请输入正确金额"}]}},{key:"password",label:"支付密码",component:"el-input",props:{type:"password","show-password":!0},itemProps:{rules:[{required:!0,message:"请输入支付密码",trigger:"blur"}]}}]),A=t((()=>(e,l)=>{let t=JSON.parse(JSON.stringify(e));switch(l){case 1:t.pop();break;case 2:t=t.reduce(((e,l,t,a)=>t===a.length-1?e.concat(l):(e.push({...l,component:"innerText"}),e)),[])}return t})),q=l({paymentAccount:"XXXXXXXXXXXXXXXX",collectionAccount:"1054788873@qq.com",payee:"zhangsan",price:100,password:"123456"}),P=l({paymentAccount:"",collectionAccount:"",payee:"",price:0}),C=async()=>{await _.value.validate()&&(X.value+=1)},O=()=>{X.value-=1},S=()=>{Object.assign(P.value,q.value),_.value.resetForm(),C()},j=()=>{X.value=1},F=e=>{q.value=e};return(e,l)=>{const t=a("el-step"),J=a("el-steps"),N=a("el-col"),z=a("y-form"),R=a("el-result"),T=a("el-button"),U=a("el-row");return s(),r(U,null,{default:o((()=>[c(N,null,{default:o((()=>[c(J,{active:X.value},{default:o((()=>[c(t,{title:"第一步",description:"填写转账信息"}),c(t,{title:"第二步",description:"确认转账信息"}),c(t,{title:"第三步",description:"完成"})])),_:1},8,["active"])])),_:1}),c(N,{class:"mt-4 flex flex-col"},{default:o((()=>{var e;return[3!==X.value?(s(),r(z,{key:0,ref_key:"formRef",ref:_,source:q.value,config:A.value(h.value,X.value),"label-width":"100px",onSourceUpdate:F},null,8,["source","config"])):(s(),u(d,{key:1},[c(R,{icon:"success",title:"支付成功"}),i("div",m,[i("div",v,[f,n(" "+p(P.value.paymentAccount),1)]),i("div",y,[g,n(" "+p(null==(e=P.value)?void 0:e.collectionAccount),1)]),i("div",b,[x,n(" "+p(P.value.payee),1)]),i("div",w,[k,n(" "+p(P.value.price),1)])])],64))]})),_:1}),c(N,{class:"text-center mt-4"},{default:o((()=>[1===X.value?(s(),r(T,{key:0,type:"primary",onClick:C},{default:o((()=>[n("下一步")])),_:1})):2===X.value?(s(),u(d,{key:1},[c(T,{type:"primary",onClick:S},{default:o((()=>[n("提交")])),_:1}),c(T,{onClick:O},{default:o((()=>[n("上一步")])),_:1})],64)):(s(),r(T,{key:2,type:"primary",onClick:j},{default:o((()=>[n("再转一笔")])),_:1}))])),_:1})])),_:1})}}});export{X as default};

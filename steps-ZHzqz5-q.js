import{d as e,r as l,s as t,a,k as s,w as r,g as o,e as c,c as u,b as i,h as n,t as p,F as d}from"./index-BXJwBXv6.js";const m={class:"border-dotted border-2 border-sky-500 font-normal p-4 m-auto"},v={class:"flex flex-row text-right"},y=i("div",{class:"w-24"},"付款账户：",-1),f={class:"flex flex-row text-right"},g=i("div",{class:"w-24"},"收款账户：",-1),b={class:"flex flex-row text-right"},x=i("div",{class:"w-24"},"收款人姓名：",-1),k={class:"flex flex-row text-right"},w=i("div",{class:"w-24"},"转账金额：",-1),X=e({__name:"steps",setup(e){const X=l(1),_=l(),h=l([{key:"paymentAccount",label:"付款账户",component:"el-input",itemProps:{rules:[{required:!0,message:"请输入付款账户",trigger:"blur"}]}},{key:"collectionAccount",label:"收款账户",component:"el-input",itemProps:{rules:[{required:!0,message:"请输入收款账户",trigger:"blur"}]}},{key:"payee",label:"收款人姓名",component:"el-input",itemProps:{rules:[{required:!0,message:"请输入收款人姓名",trigger:"blur"}]}},{key:"price",label:"转账金额",component:"el-input",itemProps:{rules:[{required:!0,message:"请输入转账金额",trigger:"blur"},{type:"number",message:"请输入正确金额"}]}},{key:"password",label:"支付密码",component:"el-input",props:{type:"password","show-password":!0},itemProps:{rules:[{required:!0,message:"请输入支付密码",trigger:"blur"}]}}]),A=t((()=>(e,l)=>{let t=JSON.parse(JSON.stringify(e));switch(l){case 1:t.pop();break;case 2:t=t.reduce(((e,l,t,a)=>t===a.length-1?e.concat(l):(e.push({...l,component:"innerText"}),e)),[])}return t})),q=l({paymentAccount:"XXXXXXXXXXXXXXXX",collectionAccount:"1054788873@qq.com",payee:"zhangsan",price:100,password:"123456"}),P=l({paymentAccount:"",collectionAccount:"",payee:"",price:0}),C=async()=>{await _.value.validate()&&(X.value+=1)},O=()=>{X.value-=1},S=()=>{Object.assign(P.value,q.value),_.value.resetForm(),C()},j=()=>{X.value=1},F=e=>{q.value=e};return(e,l)=>{const t=a("el-step"),J=a("el-steps"),N=a("el-col"),z=a("y-form"),R=a("el-result"),T=a("el-button"),U=a("el-row");return o(),s(U,null,{default:r((()=>[c(N,null,{default:r((()=>[c(J,{active:X.value},{default:r((()=>[c(t,{title:"第一步",description:"填写转账信息"}),c(t,{title:"第二步",description:"确认转账信息"}),c(t,{title:"第三步",description:"完成"})])),_:1},8,["active"])])),_:1}),c(N,{class:"mt-4 flex flex-col"},{default:r((()=>{var e;return[3!==X.value?(o(),s(z,{key:0,ref_key:"formRef",ref:_,source:q.value,config:A.value(h.value,X.value),"label-width":"100px",onSourceUpdate:F},null,8,["source","config"])):(o(),u(d,{key:1},[c(R,{icon:"success",title:"支付成功"}),i("div",m,[i("div",v,[y,n(" "+p(P.value.paymentAccount),1)]),i("div",f,[g,n(" "+p(null==(e=P.value)?void 0:e.collectionAccount),1)]),i("div",b,[x,n(" "+p(P.value.payee),1)]),i("div",k,[w,n(" "+p(P.value.price),1)])])],64))]})),_:1}),c(N,{class:"text-center mt-4"},{default:r((()=>[1===X.value?(o(),s(T,{key:0,type:"primary",onClick:C},{default:r((()=>[n("下一步")])),_:1})):2===X.value?(o(),u(d,{key:1},[c(T,{type:"primary",onClick:S},{default:r((()=>[n("提交")])),_:1}),c(T,{onClick:O},{default:r((()=>[n("上一步")])),_:1})],64)):(o(),s(T,{key:2,type:"primary",onClick:j},{default:r((()=>[n("再转一笔")])),_:1}))])),_:1})])),_:1})}}});export{X as default};
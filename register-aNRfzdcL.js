import{d as e,i as l,r as a,a as r,b as s,c as o,e as t,f as d,g as u,u as i,w as n,h as p}from"./index-zoBCjbDO.js";const m=""+new URL("left_img_2-qPXLYNe1-qPXLYNe1.png",import.meta.url).href,f={class:"w-full h-screen bg-gradient-to-b from-blue-300 to-blue-400 flex justify-center items-center"},c={class:"w-3/5 bg-white rounded-xl flex flex-row gap-2 p-8"},g={class:"flex-1 items-center justify-center hidden md:flex"},x={class:"flex-1 text-gray-500"},b=d("span",{class:"text-6xl font-light tracking-wide"},"hello !",-1),w=d("p",{class:"text-3xl mt-4"},"账号注册",-1),_={class:"flex flex-col gap-2 w-full"},h=e({__name:"register",setup(e){const h=l("router"),y=a(),V=r({username:"admin",password:"123456",phone:"",code:""}),v=r({username:[{required:!0,message:"请输入账号",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]}),q=()=>{h.replace("/login")};return(e,l)=>{const a=s("el-image"),r=s("el-input"),U=s("el-form-item"),k=s("el-button"),L=s("el-form");return o(),t("div",f,[d("main",c,[d("div",g,[u(a,{src:i(m),fit:"fill"},null,8,["src"])]),d("div",x,[b,w,u(L,{model:V,ref_key:"formRef",ref:y,rules:v,size:"large",class:"py-4"},{default:n((()=>[u(U,{label:"",prop:"username"},{default:n((()=>[u(r,{modelValue:V.username,"onUpdate:modelValue":l[0]||(l[0]=e=>V.username=e),clearable:"","prefix-icon":"User"},null,8,["modelValue"])])),_:1}),u(U,{label:"",prop:"phone"},{default:n((()=>[u(r,{modelValue:V.phone,"onUpdate:modelValue":l[1]||(l[1]=e=>V.phone=e),clearable:"","prefix-icon":"Phone"},null,8,["modelValue"])])),_:1}),u(U,{label:"",prop:"code"},{default:n((()=>[u(r,{modelValue:V.code,"onUpdate:modelValue":l[2]||(l[2]=e=>V.code=e),clearable:"","prefix-icon":"Key"},{append:n((()=>[u(k,{type:"primary",size:"default"},{default:n((()=>[p("获取验证码")])),_:1})])),_:1},8,["modelValue"])])),_:1}),u(U,{label:"",prop:"password"},{default:n((()=>[u(r,{modelValue:V.password,"onUpdate:modelValue":l[3]||(l[3]=e=>V.password=e),clearable:"","prefix-icon":"Lock",type:"password","show-password":""},null,8,["modelValue"])])),_:1}),u(U,null,{default:n((()=>[d("div",_,[u(k,{type:"primary",onClick:l[4]||(l[4]=e=>(async e=>{e&&await e.validate(((e,l)=>{e&&h.replace("/login")}))})(y.value))},{default:n((()=>[p("注册")])),_:1}),d("div",null,[u(k,{type:"primary",class:"w-20",size:"default",onClick:q},{default:n((()=>[p("登陆")])),_:1})])])])),_:1})])),_:1},8,["model","rules"])])])])}}});export{h as default};

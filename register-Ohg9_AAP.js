import{a as e}from"./useUser-B6j74jXA.js";import{d as l,u as a,r,a as s,c as o,b as t,e as d,f as u,w as n,g as p,h as i}from"./index-A73ekVUy.js";const f=""+new URL("left_img_2-qPXLYNe1-qPXLYNe1.png",import.meta.url).href,m={class:"w-full h-screen bg-gradient-to-b from-blue-300 to-blue-400 flex justify-center items-center"},c={class:"w-3/5 bg-white rounded-xl flex flex-row gap-2 p-8"},x={class:"flex-1 items-center justify-center hidden md:flex"},g={class:"flex-1 text-gray-500"},b=t("span",{class:"text-6xl font-light tracking-wide"},"hello !",-1),w=t("p",{class:"text-3xl mt-4"},"账号注册",-1),_={class:"flex flex-col gap-2 w-full"},y=l({__name:"register",setup(l){const{router:y}=a(),h=r(),{registerForm:V,rules:U,onRegister:v}=e(),k=()=>{y.replace("/login")};return(e,l)=>{const a=s("el-image"),r=s("el-input"),y=s("el-form-item"),j=s("el-button"),L=s("el-form");return p(),o("div",m,[t("main",c,[t("div",x,[d(a,{src:u(f),fit:"fill"},null,8,["src"])]),t("div",g,[b,w,d(L,{model:u(V),ref_key:"formRef",ref:h,rules:u(U),size:"large",class:"py-4"},{default:n((()=>[d(y,{label:"",prop:"username"},{default:n((()=>[d(r,{modelValue:u(V).username,"onUpdate:modelValue":l[0]||(l[0]=e=>u(V).username=e),clearable:"","prefix-icon":"User"},null,8,["modelValue"])])),_:1}),d(y,{label:"",prop:"phone"},{default:n((()=>[d(r,{modelValue:u(V).phone,"onUpdate:modelValue":l[1]||(l[1]=e=>u(V).phone=e),clearable:"","prefix-icon":"Phone"},null,8,["modelValue"])])),_:1}),d(y,{label:"",prop:"code"},{default:n((()=>[d(r,{modelValue:u(V).code,"onUpdate:modelValue":l[2]||(l[2]=e=>u(V).code=e),clearable:"","prefix-icon":"Key"},{append:n((()=>[d(j,{type:"primary",size:"default"},{default:n((()=>[i("获取验证码")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(y,{label:"",prop:"password"},{default:n((()=>[d(r,{modelValue:u(V).password,"onUpdate:modelValue":l[3]||(l[3]=e=>u(V).password=e),clearable:"","prefix-icon":"Lock",type:"password","show-password":""},null,8,["modelValue"])])),_:1}),d(y,null,{default:n((()=>[t("div",_,[d(j,{type:"primary",onClick:l[4]||(l[4]=e=>u(v)(h.value))},{default:n((()=>[i("注册")])),_:1}),t("div",null,[d(j,{type:"primary",class:"w-20",size:"default",onClick:k},{default:n((()=>[i("登陆")])),_:1})])])])),_:1})])),_:1},8,["model","rules"])])])])}}});export{y as default};

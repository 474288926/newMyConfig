import{u as e,r}from"./index-BXJwBXv6.js";const a=()=>{const{cookies:a,router:s}=e(),{captchaValue:t,getCode:o,getRefResh:u}=(()=>{const e=r("");return{captchaValue:e,getCode:r=>{e.value=r},getRefResh:e=>{e.value.display()}}})();return{loginForm:r({username:"admin",password:"123456",code:""}),rules:r({username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{validator:(e,r,a)=>{if(r.toLowerCase()===t.value.toLowerCase())a();else{a(new Error("请输入正确验证码"))}},trigger:"blur"}]}),captchaValue:t,onLogin:async e=>{if(!e)return;await e.validate()&&(a.set("token","John Doe",{expires:7}),s.replace("/"))},getRefResh:u,getCode:o}},s=()=>{const{router:a}=e();return{registerForm:r({username:"admin",password:"123456",phone:"",code:""}),rules:r({username:[{required:!0,message:"请输入账号",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]}),onRegister:async e=>{if(!e)return;await e.validate()&&a.replace("/login")}}};export{s as a,a as u};
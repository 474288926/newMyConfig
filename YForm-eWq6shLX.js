import{d as e,r as l,o as a,z as o,b as t,c as s,l as u,w as d,A as r,g as n,e as p,k as m,B as c,t as i,q as y,F as k,h as b,m as f}from"./index-xrVANN2z.js";const v={key:1},_=e({__name:"YForm",props:{source:{type:Object,required:!0,default:()=>({})},config:{type:Array,required:!0,default:()=>[]}},emits:["sourceUpdate"],setup(e,{expose:_,emit:V}){const x=e,g=l(),U=l({...x.source}),h=V;return _({resetForm:()=>{g.value&&g.value.resetFields()},validate:async()=>{if(!g.value)return;return await g.value.validate((e=>e))}}),a((()=>{})),o(U,(e=>{h("sourceUpdate",e)}),{deep:!0}),o(x.source,(e=>{U.value={...e}}),{deep:!0,immediate:!0}),(l,a)=>{const o=t("el-checkbox"),_=t("el-radio"),V=t("el-option"),x=t("el-form-item"),h=t("el-col"),w=t("el-row"),F=t("el-form");return s(),u(F,r({ref_key:"formRef",ref:g,model:U.value},l.$attrs,{"label-width":"120px"}),{default:d((()=>[n(w,{gutter:8},{default:d((()=>[(s(!0),p(k,null,m(e.config,((e,a)=>(s(),u(h,{key:a,span:e.span||24},{default:d((()=>[n(x,r(e.itemProps,{label:e.label,prop:e.key}),{default:d((()=>["slot"===e.component?c(l.$slots,e.slotName,{key:0}):"innerText"===e.component?(s(),p("div",v,i(U.value[e.key]),1)):"el-cascader"===e.component?(s(),u(y(e.component),r({key:2,modelValue:U.value[e.key],"onUpdate:modelValue":l=>U.value[e.key]=l},e.props),null,16,["modelValue","onUpdate:modelValue"])):(s(),u(y(e.component),r({key:3,modelValue:U.value[e.key],"onUpdate:modelValue":l=>U.value[e.key]=l},e.props),{default:d((()=>["el-checkbox-group"==e.component?(s(!0),p(k,{key:0},m(e.options,((e,l)=>(s(),u(o,{key:l,label:e.value},{default:d((()=>[b(i(e.label),1)])),_:2},1032,["label"])))),128)):"el-radio-group"===e.component?(s(!0),p(k,{key:1},m(e.options,((e,l)=>(s(),u(_,{key:l,label:e.value,disabled:e.disabled},{default:d((()=>[b(i(e.label),1)])),_:2},1032,["label","disabled"])))),128)):"el-select"===e.component?(s(!0),p(k,{key:2},m(e.options,((e,l)=>(s(),u(V,{key:l,label:e.label,value:e.value},null,8,["label","value"])))),128)):f("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue"]))])),_:2},1040,["label","prop"])])),_:2},1032,["span"])))),128))])),_:3})])),_:3},16,["model"])}}});export{_ as default};

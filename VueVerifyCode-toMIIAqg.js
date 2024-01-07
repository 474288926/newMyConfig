import{_ as t,c as e,e as s}from"./index-j2U000cb.js";const a={props:{width:{type:Number,default:90},height:{type:Number,default:35},codeFont:{type:String,default:"22px arial"},codeType:{type:String,default:"code"},codeLength:{type:Number,default:5},strict:{type:Boolean,default:!0},calcRange:{type:Array,default:[10,20]},calcSymbol:{type:Array,default:["+","-","*"]},lineCount:{type:Number,default:5}},data:()=>({canvas:null}),mounted(){const{canvas:t}=this.$refs;t.width=this.width,t.height=this.height,this.canvas=t.getContext("2d"),this.display()},methods:{display(){this.canvas.clearRect(0,0,this.width,this.height),this.createLine(),this.canvas.font=this.codeFont,this.canvas.textAlign="left",this.canvas.textBaseline="middle";const t=this.createCode();for(let e=0;e<this.codeLength;e++)this.canvas.save(),this.canvas.fillStyle=this.randomColor(),this.canvas.translate((e+.2)*this.width/this.codeLength,this.getRandom([.3*this.height,.7*this.height])),this.canvas.rotate(this.getRandom([-30,30])*Math.PI/180),this.canvas.fillText(t[e],0,0),this.canvas.restore()},createLine(){for(let t=0;t<this.lineCount;t++){const t=[-this.width/2,1.5*this.width],e=[-this.height/2,1.5*this.height];this.canvas.lineWidth=this.getRandom([1,3]),this.canvas.strokeStyle=this.randomColor(),this.canvas.beginPath(),this.canvas.moveTo(this.getRandom(t),this.getRandom(e)),this.canvas.lineTo(this.getRandom(t),this.getRandom(e)),this.canvas.stroke()}},createCode(){if("code"===this.codeType)return this.result=this.getString({length:this.codeLength}),this.$emit("getCode",this.strict?this.result:this.result.toLocaleLowerCase()),this.result;const t=this.getRandom(this.calcRange),e=this.getArray(this.calcSymbol),s=this.getRandom(this.calcRange),a=t+e+s;return this.result=new Function(`return ${a}`),this.$emit("getCode",`${this.result}`),t+("*"===e?"x":e)+s},getRandom:([t=0,e=0])=>Math.floor(Math.random()*(e-t+1))+t,getString({length:t,str:e="abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789",split:s=0,join:a="-"}){let i="";for(let h=0;h<t;h++)s>0&&0!==h&&h%s==0&&(i+=a),i+=e[this.getRandom([0,e.length-1])];return i},isArray:t=>(Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.isArray(t)),getArray(t){if(!this.isArray(t))throw new Error("argument must be an Array");return t[Math.floor(Math.random()*t.length)]},randomColor:()=>`#${(Math.random()*16777215..toString(10)).toString(16).slice(-6)}`}},i={ref:"canvas"};const h=t(a,[["render",function(t,a,h,r,n,o){return e(),s("canvas",i,null,512)}]]);export{h as default};
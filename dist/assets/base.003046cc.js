import{d as x,y as S,z as h,E as _,A as $,G as z,H as O,B as y,I as R,J as B,K as b}from"./index.66cdbd62.js";var M={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};const P=()=>M,C={name:"Space",self:P};var E=C;const T=Object.assign(Object.assign({},h.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},itemStyle:[String,Object],wrap:{type:Boolean,default:!0}});var L=x({name:"Space",props:T,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:r}=S(e),t=h("Space","-space",void 0,E,e,n);return{rtlEnabled:_("Space",r,n),mergedClsPrefix:n,margin:$(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[R("gap",a)]:u}}=t.value,{row:i,col:c}=B(u);return{horizontal:b(c),vertical:b(i)}})}},render(){const{vertical:e,align:n,inline:r,justify:t,itemStyle:d,margin:a,wrap:u,mergedClsPrefix:i,rtlEnabled:c}=this,f=z(O(this));if(!f.length)return null;const m=`${a.horizontal}px`,p=`${a.horizontal/2}px`,w=`${a.vertical}px`,l=`${a.vertical/2}px`,s=f.length-1,g=t.startsWith("space-");return y("div",{role:"none",class:[`${i}-space`,c&&`${i}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!u||e?"nowrap":"wrap",marginTop:e?"":`-${l}`,marginBottom:e?"":`-${l}`,alignItems:n}},f.map((j,o)=>y("div",{role:"none",style:[d,{maxWidth:"100%"},e?{marginBottom:o!==s?w:""}:c?{marginLeft:g?t==="space-between"&&o===s?"":p:o!==s?m:"",marginRight:g?t==="space-between"&&o===0?"":p:"",paddingTop:l,paddingBottom:l}:{marginRight:g?t==="space-between"&&o===s?"":p:o!==s?m:"",marginLeft:g?t==="space-between"&&o===0?"":p:"",paddingTop:l,paddingBottom:l}]},j)))}}),D=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function G(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function I(e){if(e.__esModule)return e;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})}),n}function W(e){return e.replace(/<[^>]+>/g,"").replace(/(^\s*)|(\s*$)/g,"").replace(/&nbsp;/gi,"")}let v;v=window.location.hostname;console.log(v);export{L as _,G as a,v as b,D as c,W as d,I as g};

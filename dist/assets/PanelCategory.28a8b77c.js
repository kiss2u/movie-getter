import{S as h}from"./public.1bd71590.js";import{p as D}from"./path.fa862f3a.js";import{c as s}from"./data.1d9a90a8.js";import{a as l,b as x,c as B}from"./api.93d8d373.js";import{F as v}from"./FlashOutline.29ef8c54.js";import{A as F,R as k}from"./RefreshCircleOutline.8baa3f10.js";import{e as N,r as z,v as b,A as w,B as t,I as A,C as e,D as n,y as p,_ as u,h as r}from"./index.d1d9fe1a.js";import{u as O}from"./use-notification.ad5b049f.js";import{N as I}from"./Icon.ac758718.js";import{_ as c}from"./Space.95e22203.js";import{_ as V}from"./Input.2c16f332.js";import{_ as $}from"./DataTable.df526328.js";import"./index.80337ce4.js";import"./base.12718b58.js";import"./use-merged-state.ef35e236.js";import"./get-slot.40f09d44.js";import"./Checkbox.f42a15a4.js";import"./Tooltip.e5ec2061.js";import"./next-frame-once.da993024.js";import"./Dropdown.46097e35.js";import"./create.eac446e4.js";import"./Ellipsis.a766dddb.js";import"./Pagination.b897d5ce.js";import"./Tag.4363652b.js";const R={style:{display:"flex","align-items":"center",height:"100%"}},S={style:{display:"flex","align-items":"center",height:"100%"}},se=N({__name:"PanelCategory",setup(j){D.value=[{name:"\u5206\u7C7B",params:null,to:""}];const _=z([{title:"ID",key:"id",width:100,align:"center"},{title:"\u540D\u5B57",key:"name",align:"center",render(a,o){return r(h,{value:a.name,onUpdateValue(i){s.value[o].name=i}})}},{title:"\u91C7\u96C6\u7C7B\u6570",key:"classNum",width:100,align:"center"},{title:"\u5F71\u7247\u6570",key:"movieNum",width:100,align:"center"},{title:"\u64CD\u4F5C",key:"action",width:"150px",align:"center",render(a,o){return r(c,{justify:"center"},()=>[a.create?r(u,{secondary:!0,type:"info",size:"small",onClick:()=>{x(a.name).then(()=>{l(),m.success({duration:2e3,content:"\u4FDD\u5B58",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u4FDD\u5B58"):null,r(u,{secondary:!0,type:"error",size:"small",onClick:()=>{B(a.id).then(()=>{l(),m.success({duration:2e3,content:"\u5220\u9664",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u5220\u9664")])}}]),m=O();function d(){s.value.push({id:0,name:"\u5F85\u4FDD\u5B58\u5206\u7C7B",classNum:0,movieNum:0,create:!0})}return(a,o)=>{const i=I,f=V,C=$,y=A;return b(),w(y,{title:"\u5206\u7C7B\u7BA1\u7406",size:"small"},{"header-extra":t(()=>[e(n(c),null,{default:t(()=>[e(f,{placeholder:"\u641C\u7D22",disabled:!0,round:""},{prefix:t(()=>[e(i,{component:n(v)},null,8,["component"])]),_:1}),p("div",R,[e(n(u),{text:"",type:"primary",style:{"font-size":"24px"},onClick:o[0]||(o[0]=g=>d())},{default:t(()=>[e(i,null,{default:t(()=>[e(n(F))]),_:1})]),_:1})]),p("div",S,[e(n(u),{text:"",type:"info",style:{"font-size":"24px"},onClick:o[1]||(o[1]=g=>n(l)())},{default:t(()=>[e(i,null,{default:t(()=>[e(n(k))]),_:1})]),_:1})])]),_:1})]),default:t(()=>[e(C,{columns:_.value,data:n(s),bordered:!1,"single-line":!1},null,8,["columns","data"])]),_:1})}}});export{se as default};
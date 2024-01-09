import{d as C,l as g,ab as v,Z as D,q as w,M as o,V as d}from"./entry._tw1YBvV.js";import _ from"./ContentRenderer.rH8zN7od.js";import q from"./ContentQuery.M5ryM0VP.js";import"./ContentRendererMarkdown.vue.Gbtu6tnD.js";import"./preview.Hg5v7jeS.js";import"./asyncData.0-fN9Yw_.js";import"./query.OfGhMVO0.js";const S=C({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=g().public.content,e=v(),{tag:m,excerpt:r,path:l,query:i,head:a}=f,u=a===void 0?c:a,s={...i||{},path:l||(i==null?void 0:i.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(q,s,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var p;return u&&d(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:y,excerpt:r,...this.$attrs})}:({data:t})=>(u&&d(t),o(_,{value:t,excerpt:r,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),O=S;export{O as default};

import k from"./ArticlesListItem.AAY7UpHW.js";import w from"./ProseA.B3DODlgZ.js";import v from"./ProseCodeInline.23YCOfTS.js";import{u as g}from"./asyncData.0-fN9Yw_.js";import{q as A}from"./query.OfGhMVO0.js";import{d as C,X as I,H as S,L as c,b as a,c as n,e as o,g as i,F as L,Y as b,C as e,w as d,p as B,i as N,Z as V,W as q,k as F}from"./entry._tw1YBvV.js";import"./preview.Hg5v7jeS.js";import"./date.3uOv5BcS.js";const P=t=>(B("data-v-6f91846b"),t=t(),N(),t),T={key:0,class:"articles-list"},Y={class:"featured"},D={class:"layout"},E={key:1,class:"tour"},H=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),W=C({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const u=t,{data:m}=([s,l]=I(async()=>g("articles",async()=>await A(V(u.path)).sort({date:-1}).find())),s=await s,l(),s),r=S(()=>m.value||[]);return(X,Z)=>{var p;const _=k,f=w,h=v;return(p=c(r))!=null&&p.length?(a(),n("div",T,[o("div",Y,[i(_,{article:c(r)[0],featured:!0},null,8,["article"])]),o("div",D,[(a(!0),n(L,null,b(c(r).slice(1),(y,x)=>(a(),q(_,{key:x,article:y},null,8,["article"]))),128))])])):(a(),n("div",E,[H,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),R=F(W,[["__scopeId","data-v-6f91846b"]]);export{R as default};

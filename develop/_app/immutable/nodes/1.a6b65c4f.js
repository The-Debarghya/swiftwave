import{s as z,v as B,r as F,c as D,g as v,l as Q,T as H,d as k,h as f,i as E,m as C,k as g,E as O}from"../chunks/scheduler.559b666f.js";import{S as I,i as N,d as q,v as P,e as _,g as T,a as R,n as h,s as V}from"../chunks/index.59aa5467.js";import{p as w}from"../chunks/stores.fb98373c.js";const b="src/routes/+error.svelte";function j(a){let s,n,t,c,d=a[0].status+"",o,u,e,i;document.title=s="Error - "+a[0].status;const y={c:function(){n=D(),t=v("div"),c=v("h1"),o=Q(d),u=D(),e=v("p"),i=Q(a[1]),this.h()},l:function(r){H("svelte-1wpfhz9",document.head).forEach(_),n=k(r),t=f(r,"DIV",{class:!0});var p=E(t);c=f(p,"H1",{});var S=E(c);o=C(S,d),S.forEach(_),u=k(p),e=f(p,"P",{});var A=E(e);i=C(A,a[1]),A.forEach(_),p.forEach(_),this.h()},h:function(){g(c,b,16,2,311),g(e,b,18,2,338),T(t,"class","wrapper s-QcQDAQA3vV4F"),g(t,b,15,0,287)},m:function(r,l){R(r,n,l),R(r,t,l),h(t,c),h(c,o),h(t,u),h(t,e),h(e,i)},p:function(r,[l]){l&1&&s!==(s="Error - "+r[0].status)&&(document.title=s),l&1&&d!==(d=r[0].status+"")&&V(o,d),l&2&&V(i,r[1])},i:O,o:O,d:function(r){r&&(_(n),_(t))}};return q("SvelteRegisterBlock",{block:y,id:j.name,type:"component",source:"",ctx:a}),y}function W(a,s,n){let t;B(w,"page"),F(a,w,e=>n(0,t=e));let{$$slots:c={},$$scope:d}=s;P("Error",c,[]);let o;const u=[];return Object.keys(s).forEach(e=>{!~u.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Error> was created with unknown prop '${e}'`)}),a.$capture_state=()=>({page:w,error:o,$page:t}),a.$inject_state=e=>{"error"in e&&n(1,o=e.error)},s&&"$$inject"in s&&a.$inject_state(s.$$inject),a.$$.update=()=>{var e;if(a.$$.dirty&1){const i=((e=t.error)==null?void 0:e.message)||"An unexpected error occurred.";n(1,o=i.endsWith(".")?i:`${i}.`)}},[t,o]}class K extends I{constructor(s){super(s),N(this,s,W,j,z,{}),q("SvelteRegisterComponent",{component:this,tagName:"Error",options:s,id:j.name})}}export{K as component};

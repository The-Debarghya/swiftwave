import{x as T,y as E,q as N}from"../chunks/pages.43d16b43.js";import{e as x}from"../chunks/index.0bc363c4.js";import{s as B,c as g,T as k,d as _}from"../chunks/scheduler.559b666f.js";import{S as q,i as C,d as j,v as D,j as h,e as l,k as v,a as w,m as $,b as P,t as b,l as y}from"../chunks/index.59aa5467.js";import{F as M,Q as S}from"../chunks/FieldDetails.dad608dc.js";import{P as O}from"../chunks/PreviousNextPage.26476dbc.js";const F=T(),Q=({params:n,url:t})=>{const i=E(n.mutation),o=N(t.pathname);if(!i||!o)throw x(404,`Mutation ${n.mutation} not found.`);return{field:i,page:o}},J=Object.freeze(Object.defineProperty({__proto__:null,load:Q,prerender:F},Symbol.toStringTag,{value:"Module"}));function m(n){let t,i,o,d,a,c;document.title=t="Mutation - "+n[0].field.name,o=new M({props:{field:n[0].field,type:S.MUTATION},$$inline:!0}),a=new O({props:{page:n[0].page},$$inline:!0});const s={c:function(){i=g(),h(o.$$.fragment),d=g(),h(a.$$.fragment)},l:function(e){k("svelte-1ha51ns",document.head).forEach(l),i=_(e),v(o.$$.fragment,e),d=_(e),v(a.$$.fragment,e)},m:function(e,r){w(e,i,r),$(o,e,r),w(e,d,r),$(a,e,r),c=!0},p:function(e,[r]){(!c||r&1)&&t!==(t="Mutation - "+e[0].field.name)&&(document.title=t);const f={};r&1&&(f.field=e[0].field),o.$set(f);const p={};r&1&&(p.page=e[0].page),a.$set(p)},i:function(e){c||(P(o.$$.fragment,e),P(a.$$.fragment,e),c=!0)},o:function(e){b(o.$$.fragment,e),b(a.$$.fragment,e),c=!1},d:function(e){e&&(l(i),l(d)),y(o,e),y(a,e)}};return j("SvelteRegisterBlock",{block:s,id:m.name,type:"component",source:"",ctx:n}),s}function R(n,t,i){let{$$slots:o={},$$scope:d}=t;D("Page",o,[]);let{data:a}=t;n.$$.on_mount.push(function(){a===void 0&&!("data"in t||n.$$.bound[n.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const c=["data"];return Object.keys(t).forEach(s=>{!~c.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Page> was created with unknown prop '${s}'`)}),n.$$set=s=>{"data"in s&&i(0,a=s.data)},n.$capture_state=()=>({QueryType:S,FieldDetails:M,PreviousNextPage:O,data:a}),n.$inject_state=s=>{"data"in s&&i(0,a=s.data)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[a]}class K extends q{constructor(t){super(t),C(this,t,R,m,B,{data:0}),j("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:m.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{K as component,J as universal};

import{e as C}from"../chunks/index.0bc363c4.js";import{p as E,q as O}from"../chunks/pages.43d16b43.js";import{s as q,c as f,T as B,d as _}from"../chunks/scheduler.559b666f.js";import{S as M,i as N,d as k,v as R,j as h,e as m,k as w,a as v,m as $,b as P,t as b,l as j}from"../chunks/index.59aa5467.js";import{C as y,P as S}from"../chunks/PreviousNextPage.26476dbc.js";const T=E.length>0,z=({url:n})=>{const t=O(n.pathname);if(!t)throw C(404,"Could not find the page you are looking for");return{page:t}},J=Object.freeze(Object.defineProperty({__proto__:null,load:z,prerender:T},Symbol.toStringTag,{value:"Module"}));function d(n){let t,i,s,p,a,c;document.title=t=`
    `+(n[0].page.section?`${n[0].page.section} - `:"")+n[0].page.title+`
  `,s=new y({props:{source:n[0].page.content},$$inline:!0}),a=new S({props:{page:n[0].page},$$inline:!0});const o={c:function(){i=f(),h(s.$$.fragment),p=f(),h(a.$$.fragment)},l:function(e){B("svelte-52tmna",document.head).forEach(m),i=_(e),w(s.$$.fragment,e),p=_(e),w(a.$$.fragment,e)},m:function(e,r){v(e,i,r),$(s,e,r),v(e,p,r),$(a,e,r),c=!0},p:function(e,[r]){(!c||r&1)&&t!==(t=`
    `+(e[0].page.section?`${e[0].page.section} - `:"")+e[0].page.title+`
  `)&&(document.title=t);const l={};r&1&&(l.source=e[0].page.content),s.$set(l);const g={};r&1&&(g.page=e[0].page),a.$set(g)},i:function(e){c||(P(s.$$.fragment,e),P(a.$$.fragment,e),c=!0)},o:function(e){b(s.$$.fragment,e),b(a.$$.fragment,e),c=!1},d:function(e){e&&(m(i),m(p)),j(s,e),j(a,e)}};return k("SvelteRegisterBlock",{block:o,id:d.name,type:"component",source:"",ctx:n}),o}function D(n,t,i){let{$$slots:s={},$$scope:p}=t;R("Page",s,[]);let{data:a}=t;n.$$.on_mount.push(function(){a===void 0&&!("data"in t||n.$$.bound[n.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const c=["data"];return Object.keys(t).forEach(o=>{!~c.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Page> was created with unknown prop '${o}'`)}),n.$$set=o=>{"data"in o&&i(0,a=o.data)},n.$capture_state=()=>({CarbonMarkdown:y,PreviousNextPage:S,data:a}),n.$inject_state=o=>{"data"in o&&i(0,a=o.data)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[a]}class K extends M{constructor(t){super(t),N(this,t,D,d,q,{data:0}),k("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:d.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{K as component,J as universal};

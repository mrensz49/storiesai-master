import{x as a,y as n,E as c,F as u,_ as p,G as _,e as d,z as g,A as v,B as m}from"./index.0ff69430.js";import{_ as f}from"./VDivider.fc14be3f.js";var h=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t(a,[t(n,{attrs:{cols:"12",lg:"8",xl:"8"}},[t("div",[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("Categories")]),t("h4",{staticClass:"text-h6"},[e._v("Select your favourite category.")])]),t(f,{staticClass:"my-4"}),t(a,e._l(e.categoryStore.categories,function(o){return t(n,{key:o.id,attrs:{cols:"12",md:"6",lg:"4"}},[t(c,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var s=l.hover;return[t("div",[t(u,{attrs:{flat:"",color:s?"white":"transparent",elevation:s?12:0,hover:"",to:"/category/"+o.slug}},[t(p,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:e.getImageUrl(o.image),"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(_,[t(d,{attrs:{color:"accent"}},[e._v(e._s(o.category))])],1)],1),t(_,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(o.contents_count)+" stories ")])])],1)],1)]}}],null,!0)})],1)}),1),e.categoryStore.loading?t("skeletonLoader"):e._e()],1)])]),t(n,[t("div",[t("siderbar")],1)])],1)],1)},y=[];const x={name:"Category",mounted(){this.categoryStore.getCategories()},data(){return{categoryStore:v()}},components:{siderbar:()=>m(()=>import("./sidebar.475dd544.js"),["./sidebar.475dd544.js","./index.0ff69430.js","./index.b780dda7.css","./VDivider.fc14be3f.js","./VDivider.3d6d3afb.css"],import.meta.url)}},i={};var C=g(x,h,y,!1,S,null,null,null);function S(e){for(let r in i)this[r]=i[r]}const k=function(){return C.exports}();export{k as default};

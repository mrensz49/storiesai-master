import{x as r,y as a,I as c,J as u,_ as p,K as _,e as d,z as g,A as v,D as m}from"./index.80e9036d.js";import{_ as f}from"./VDivider.10bc2e84.js";var h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t(r,[t(a,{attrs:{cols:"12",lg:"8",xl:"8"}},[t("div",[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("Categories")]),t("h4",{staticClass:"text-h6"},[e._v("Select your favourite category.")])]),t(f,{staticClass:"my-4"}),t(r,e._l(e.categoryStore.categories,function(o){return t(a,{key:o.id,attrs:{cols:"12",md:"6",lg:"4"}},[t(c,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var n=l.hover;return[t("div",[t(u,{attrs:{flat:"",color:n?"white":"transparent",elevation:n?12:0,hover:"",to:"/category/"+o.slug}},[t(p,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:e.getImageUrl(o.image),"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(_,[t(d,{attrs:{color:"accent",small:""}},[t("small",[e._v(e._s(o.category))])])],1)],1),t(_,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(o.contents_count)+" stories ")])])],1)],1)]}}],null,!0)})],1)}),1),e.categoryStore.loading?t("skeletonLoader"):e._e()],1)])]),t(a,[t("div",{staticClass:"pt-10"},[t("siderbar")],1)])],1)],1)},y=[];const C={name:"Category",mounted(){this.categoryStore.getCategories()},data(){return{categoryStore:v()}},components:{siderbar:()=>m(()=>import("./sidebar.4f01e64f.js"),["assets/sidebar.4f01e64f.js","assets/index.80e9036d.js","assets/index.24f43d83.css","assets/VDivider.10bc2e84.js","assets/VDivider.3d6d3afb.css"])}},i={};var x=g(C,h,y,!1,S,null,null,null);function S(e){for(let s in i)this[s]=i[s]}const w=function(){return x.exports}();export{w as default};

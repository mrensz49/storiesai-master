import{x as s,y as a,E as c,F as u,_ as d,G as _,e as p,z as v,A as g,B as m}from"./index.24f81e75.js";import{_ as h}from"./VDivider.cde0899e.js";var f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t(s,[t(a,{attrs:{cols:"12",lg:"8",xl:"8"}},[t("div",[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("My Dashboard")]),t("h4",{staticClass:"text-h6"},[e._v("Your recent and upcoming activities.")])]),t(h,{staticClass:"my-4"}),t(s,e._l(e.categoryStore.categories,function(o){return t(a,{key:o.id,attrs:{cols:"12",md:"6",lg:"4"}},[t(c,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(l){var r=l.hover;return[t("div",[t(u,{attrs:{flat:"",color:r?"white":"transparent",elevation:r?12:0,hover:"",to:"/category/"+o.slug}},[t(d,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:e.getImageUrl(o.image),"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(_,[t(p,{attrs:{color:"accent"}},[e._v(e._s(o.category))])],1)],1),t(_,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(o.contents_count)+" stories ")])])],1)],1)]}}],null,!0)})],1)}),1),e.categoryStore.loading?t("skeletonLoader"):e._e()],1)])]),t(a,[t("div",[t("siderbar")],1)])],1)],1)},y=[];const x={name:"Category",mounted(){this.categoryStore.getCategories()},data(){return{categoryStore:g()}},components:{siderbar:()=>m(()=>import("./sidebar.b091e463.js"),["assets/sidebar.b091e463.js","assets/index.24f81e75.js","assets/index.bc85530d.css","assets/VDivider.cde0899e.js","assets/VDivider.8bd5bceb.css"])}},i={};var C=v(x,f,y,!1,b,null,null,null);function b(e){for(let n in i)this[n]=i[n]}var k=function(){return C.exports}();export{k as default};

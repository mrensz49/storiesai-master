import{x as n,y as r,z as s,A as _,B as i}from"./index.457beb38.js";import{_ as c}from"./VDivider.e605c6ea.js";var l=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t(n,[t(r,{attrs:{cols:"12",lg:"8",xl:"8"}},[t("div",[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("My Dashboard")]),t("h4",{staticClass:"text-h6"},[e._v("Your recent and upcoming activities.")])]),t(c,{staticClass:"my-4"}),t(n,[e._v(" SOON to open! ")]),e.categoryStore.loading?t("skeletonLoader"):e._e()],1)])]),t(r,[t("div",[t("siderbar")],1)])],1)],1)},u=[];const d={name:"Category",mounted(){this.categoryStore.getCategories()},data(){return{categoryStore:_()}},components:{siderbar:()=>i(()=>import("./sidebar.44fc7b98.js"),["./sidebar.44fc7b98.js","./index.457beb38.js","./index.24f43d83.css","./VDivider.e605c6ea.js","./VDivider.3d6d3afb.css"],import.meta.url)}},a={};var m=s(d,l,u,!1,v,null,null,null);function v(e){for(let o in a)this[o]=a[o]}const h=function(){return m.exports}();export{h as default};

import{x as n,y as r,z as a,A as _,B as i}from"./index.8405f87c.js";import{_ as c}from"./VDivider.d70feca7.js";var l=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t(n,[t(r,{attrs:{cols:"12",lg:"8",xl:"8"}},[t("div",[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("My Dashboard")]),t("h4",{staticClass:"text-h6"},[e._v("Your recent and upcoming activities.")])]),t(c,{staticClass:"my-4"}),t(n,[e._v(" SOON to open! ")]),e.categoryStore.loading?t("skeletonLoader"):e._e()],1)])]),t(r,[t("div",[t("siderbar")],1)])],1)],1)},u=[];const d={name:"Category",mounted(){this.categoryStore.getCategories()},data(){return{categoryStore:_()}},components:{siderbar:()=>i(()=>import("./sidebar.1bd15ce3.js"),["assets/sidebar.1bd15ce3.js","assets/index.8405f87c.js","assets/index.b780dda7.css","assets/VDivider.d70feca7.js","assets/VDivider.3d6d3afb.css"])}},s={};var v=a(d,l,u,!1,m,null,null,null);function m(e){for(let o in s)this[o]=s[o]}const h=function(){return v.exports}();export{h as default};

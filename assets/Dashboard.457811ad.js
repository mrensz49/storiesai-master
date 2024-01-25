import{x as d,y as r,F as p,G as n,H as l,_,I as a,e as c,z as h,B as g,D as m}from"./index.668c7ef9.js";import{_ as f}from"./VDivider.b430886c.js";const u=""+new URL("viewed-story.3de7ba39.jpg",import.meta.url).href;var S=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t(d,[t(r,{attrs:{cols:"12",lg:"8",xl:"8"}},[t("div",[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("My Dashboard")]),t("h4",{staticClass:"text-h6"},[e._v("Your recent and upcoming activities.")])]),t(f,{staticClass:"my-4"}),e.authStore.loading?t(p):e._e(),t(d,[t(r,{attrs:{cols:"12",md:"6",lg:"4"}},[t(n,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(o){var s=o.hover;return[t("div",[t(l,{attrs:{flat:"",color:s?"white":"transparent",elevation:s?12:0,hover:"",to:"/list/visited"}},[t(_,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:u,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(a,[t(c,{attrs:{color:"accent"}},[e._v("Visited Stories")])],1)],1),t(a,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(e.authStore.count_read_stories)+" visited stories ")])])],1)],1)]}}])})],1),t(r,{attrs:{cols:"12",md:"6",lg:"4"}},[t(n,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(o){var s=o.hover;return[t("div",[t(l,{attrs:{flat:"",color:s?"white":"transparent",elevation:s?12:0,hover:"",to:"/list/unvisited"}},[t(_,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:u,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(a,[t(c,{attrs:{color:"accent"}},[e._v("Unvisited Stories")])],1)],1),t(a,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(e.authStore.count_unread_stories>15?"15+":e.authStore.count_unread_stories)+" unvisited stories ")])])],1)],1)]}}])})],1),t(r,{attrs:{cols:"12",md:"6",lg:"4"}},[t(n,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(o){var s=o.hover;return[t("div",[t(l,{attrs:{flat:"",color:s?"white":"transparent",elevation:s?12:0,hover:"",to:"/list/latest"}},[t(_,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:u,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(a,[t(c,{attrs:{color:"accent"}},[e._v("Latest Stories")])],1)],1),t(a,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(e.authStore.count_latest_stories)+" latest stories ")])])],1)],1)]}}])})],1)],1)],1)])]),t(r,[t("div",{staticClass:"pt-10"},[t("siderbar")],1)])],1)],1)},y=[];const x={name:"Category",mounted(){this.authStore.getCountReadStories(),this.authStore.getCountUnReadStories(),this.authStore.getCountLatestStories()},data(){return{authStore:g()}},components:{siderbar:()=>m(()=>import("./sidebar.76d08cde.js"),["./sidebar.76d08cde.js","./index.668c7ef9.js","./index.24f43d83.css","./VDivider.b430886c.js","./VDivider.3d6d3afb.css"],import.meta.url)}},v={};var b=h(x,S,y,!1,C,null,null,null);function C(e){for(let i in v)this[i]=v[i]}const D=function(){return b.exports}();export{D as default};

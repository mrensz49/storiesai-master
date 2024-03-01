import{A as s,B as r,N as l,a as n,Q as _,e as u,P as y,h as c,E as p,F as m,H as g}from"./index.9676f69d.js";var d=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[typeof t.categoryStore.category.category<"u"?e(s,[e(r,{attrs:{cols:"12",lg:"8",xl:"8"}},[t.categoryStore.loading_page?e(l):t._e(),this.$route.query.q?t._e():e("div",[e("div",[e(n,{staticStyle:{"border-radius":"16px"},attrs:{src:t.getImageUrl(t.categoryStore.category.category.image),"aspect-ratio":16/5,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",dark:""}},[e(_,{staticClass:"fill-height d-flex align-end"},[e(s,{staticClass:"flex-column"},[e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h2",{staticClass:"text-h3 py-3",staticStyle:{"line-height":"1.2"}},[t._v(" Reading is a journey, and every story is a new destination. ")])])],1)],1)],1),e("div",{staticClass:"py-4"},[e(u,{attrs:{color:"accent"}},[t._v(t._s(t.categoryStore.category.category.category))])],1),t._l(t.categoryStore.category.contents.data,function(a){return e(s,{key:a.id,staticClass:"py-2"},[e(r,{attrs:{cols:"12",md:"3"}},[e(y,{attrs:{flat:"",height:"100%",to:"/category/"+t.categoryStore.category.category.slug+"?q="+a.title_slug}},[e(n,{attrs:{"aspect-ratio":16/9,src:t.getPublicImageThumbnail(a.image),alt:"No Image"}})],1)],1),e(r,[e("a",{on:{click:function(x){return t.newPage(t.categoryStore.category.category.slug,a.title_slug)}}},[e("h3",{staticClass:"text-h6 text--secondary font-weight-bold"},[t._v(" "+t._s(a.title)+" ")])])])],1)})],2),e("div",[e(s,{attrs:{justify:"space-between"}},[e(r,{attrs:{cols:"6",md:"6",lg:"6",sm:"6"}},[t.categoryStore.category.contents.current_page!=1?e("a",{staticClass:"align-center",on:{click:function(a){t.categoryStore.getNewPage({name:t.categoryStore.category.category.slug,page:parseInt(t.categoryStore.category.contents.current_page)-1})}}},[e(c,[t._v("mdi-arrow-left")]),e("div",{staticClass:"text-h6 primary--text pl-2"},[e("div",{staticClass:"text-subtitle-1"},[t._v("Previous Page")])])],1):t._e()]),e(r,{attrs:{cols:"6",md:"6",lg:"6",sm:"6"}},[t.categoryStore.category.contents.current_page!=t.categoryStore.category.contents.last_page?e("div",{staticClass:"align-center text-right"},[e("a",{staticClass:"text-h6 primary--text pr-2",on:{click:function(a){t.categoryStore.getNewPage({name:t.categoryStore.category.category.slug,page:parseInt(t.categoryStore.category.contents.current_page)+1})}}},[e(c,[t._v("mdi-arrow-right")]),e("div",{staticClass:"text-subtitle-1"},[t._v("Next Page")])],1)]):t._e()])],1)],1)]),this.$route.query.q?e("story"):t._e()],1),e(r,[e("div",[e("siderbar")],1)])],1):t._e()],1)},h=[];const v={name:"Category",mounted(){var t;this.categoryStore.getCategory((t=this.$route.params)==null?void 0:t.name)},data(){return{categoryStore:m()}},methods:{newPage(t,o){this.$router.push("./"+t+"?q="+o)}},components:{siderbar:()=>g(()=>import("./sidebar.0701a4d8.js"),["./sidebar.0701a4d8.js","./index.9676f69d.js","./index.e3d769c2.css","./VAlert.c36a19c1.js","./VAlert.904eb20e.css","./VDivider.56812c18.js","./VDivider.3d6d3afb.css","./sidebar.2b5c1253.css"],import.meta.url),story:()=>g(()=>import("./Content.c0b4b381.js"),["./Content.c0b4b381.js","./index.9676f69d.js","./index.e3d769c2.css","./VDivider.56812c18.js","./VDivider.3d6d3afb.css","./VAlert.c36a19c1.js","./VAlert.904eb20e.css","./index.9db19249.js","./Content.b49d9b97.css"],import.meta.url)},watch:{$route:function(){this.$route.params.name?this.categoryStore.getNewPage({name:this.$route.params.name,page:parseInt(this.categoryStore.category.contents.current_page)}):this.categoryStore.getCategory(this.$route.params.name)}}},i={};var S=p(v,d,h,!1,f,null,null,null);function f(t){for(let o in i)this[o]=i[o]}const P=function(){return S.exports}();export{P as default};

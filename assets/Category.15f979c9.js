import{x as s,y as r,H as l,_ as n,G as _,e as u,F as y,h as c,z as p,A as m,B as i}from"./index.facc6ef3.js";var d=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[typeof t.categoryStore.category.category!="undefined"?e(s,[e(r,{attrs:{cols:"12",lg:"8",xl:"8"}},[t.categoryStore.loading_page?e(l):t._e(),this.$route.query.q?t._e():e("div",[e("div",[e(n,{staticStyle:{"border-radius":"16px"},attrs:{src:t.getImageUrl(t.categoryStore.category.category.image),"aspect-ratio":16/5,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",dark:""}},[e(_,{staticClass:"fill-height d-flex align-end"},[e(s,{staticClass:"flex-column"},[e(r,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[e("h2",{staticClass:"text-h3 py-3",staticStyle:{"line-height":"1.2"}},[t._v(" Reading is a journey, and every story is a new destination. ")])])],1)],1)],1),e("div",{staticClass:"py-4"},[e(u,{attrs:{color:"accent"}},[t._v(t._s(t.categoryStore.category.category.category))])],1),t._l(t.categoryStore.category.contents.data,function(a){return e(s,{key:a.id,staticClass:"py-2"},[e(r,{attrs:{cols:"12",md:"2"}},[e(y,{attrs:{flat:"",height:"100%",to:"/category/"+t.categoryStore.category.category.slug+"?q="+a.title_slug}},[e(n,{attrs:{"aspect-ratio":16/9,src:t.getPublicImage(a.image),alt:"No Image"}})],1)],1),e(r,[e("a",{on:{click:function(x){return t.newPage(t.categoryStore.category.category.slug,a.title_slug)}}},[e("h3",{staticClass:"text-h5 text--secondary font-weight-bold"},[t._v(" "+t._s(a.title)+" ")])])])],1)})],2),e("div",[e(s,{attrs:{justify:"space-between"}},[e(r,{attrs:{cols:"6",md:"6",lg:"6",sm:"6"}},[e("a",{staticClass:"align-center",on:{click:function(a){t.categoryStore.getNewPage({name:t.categoryStore.category.category.slug,page:parseInt(t.categoryStore.category.contents.current_page)-1})}}},[e(c,[t._v("mdi-arrow-left")]),e("div",{staticClass:"text-h6 primary--text pl-2"},[e("div",{staticClass:"text-subtitle-1"},[t._v("Previous Page")])])],1)]),e(r,{attrs:{cols:"6",md:"6",lg:"6",sm:"6"}},[e("div",{staticClass:"align-center text-right"},[e("a",{staticClass:"text-h6 primary--text pr-2",on:{click:function(a){t.categoryStore.getNewPage({name:t.categoryStore.category.category.slug,page:parseInt(t.categoryStore.category.contents.current_page)+1})}}},[e(c,[t._v("mdi-arrow-right")]),e("div",{staticClass:"text-subtitle-1"},[t._v("Next Page")])],1)])])],1)],1)]),this.$route.query.q?e("story"):t._e()],1),e(r,[e("div",[e("siderbar")],1)])],1):t._e()],1)},v=[];const h={name:"Category",mounted(){var t;this.categoryStore.getCategory((t=this.$route.params)==null?void 0:t.name)},data(){return{categoryStore:m()}},methods:{newPage(t,o){this.$router.push("./"+t+"?q="+o)}},components:{siderbar:()=>i(()=>import("./sidebar.5a2e0498.js"),["assets/sidebar.5a2e0498.js","assets/index.facc6ef3.js","assets/index.bc85530d.css","assets/VDivider.3506e2dc.js","assets/VDivider.8bd5bceb.css"]),story:()=>i(()=>import("./Content.1f19eea2.js"),["assets/Content.1f19eea2.js","assets/index.facc6ef3.js","assets/index.bc85530d.css","assets/VDivider.3506e2dc.js","assets/VDivider.8bd5bceb.css","assets/VAlert.74c70b63.js","assets/VAlert.39d78c09.css"])},watch:{$route:function(){this.$route.params.name?this.categoryStore.getNewPage({name:this.$route.params.name,page:parseInt(this.categoryStore.category.contents.current_page)}):this.categoryStore.getCategory(this.$route.params.name)}}},g={};var f=p(h,d,v,!1,S,null,null,null);function S(t){for(let o in g)this[o]=g[o]}var P=function(){return f.exports}();export{P as default};

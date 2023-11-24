import{x as s,y as a,_ as n,F as l,e as _,E as y,h as c,z as u,A as p,B as i}from"./index.46601a35.js";var d=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[typeof e.categoryStore.category.category!="undefined"?t(s,[t(a,{attrs:{cols:"12",lg:"12",xl:"8"}},[this.$route.query.q?e._e():t("div",[t("div",[t(n,{staticStyle:{"border-radius":"16px"},attrs:{src:e.getImageUrl(e.categoryStore.category.category.image),"aspect-ratio":16/5,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",dark:""}},[t(l,{staticClass:"fill-height d-flex align-end"},[t(s,{staticClass:"flex-column"},[t(a,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[t("h2",{staticClass:"text-h3 py-3",staticStyle:{"line-height":"1.2"}},[e._v(" Reading is a journey, and every story is a new destination. ")])])],1)],1)],1),t("div",{staticClass:"py-4"},[t(_,{attrs:{color:"accent"}},[e._v(e._s(e.categoryStore.category.category.category))])],1),e._l(e.categoryStore.category.contents.data,function(o){return t(s,{key:o.id,staticClass:"py-2"},[t(a,{attrs:{cols:"12",md:"2"}},[t(y,{attrs:{flat:"",height:"100%",to:"/category/"+e.categoryStore.category.category.slug+"?q="+o.title_slug}},[t(n,{attrs:{"aspect-ratio":16/9,src:e.getImageUrl(e.categoryStore.category.category.image),height:"100%"}})],1)],1),t(a,[t("a",{on:{click:function(S){return e.newPage(e.categoryStore.category.category.slug,o.title_slug)}}},[t("h3",{staticClass:"text-h5 text--secondary font-weight-bold pt-3"},[e._v(" "+e._s(o.title)+" ")])])])],1)})],2),t("div",[t(s,{staticClass:"mb-2",attrs:{justify:"space-between"}},[t(a,{attrs:{cols:"12",md:"6",lg:"4"}},[t("a",{staticClass:"align-center",on:{click:function(o){e.categoryStore.getNewPage({name:e.categoryStore.category.category.slug,page:parseInt(e.categoryStore.category.contents.current_page)-1})}}},[t(c,[e._v("mdi-arrow-left")]),t("div",{staticClass:"text-h6 primary--text pl-2"},[t("div",{staticClass:"text-subtitle-1"},[e._v("Previous Page")])])],1)]),t(a,{attrs:{cols:"12",md:"6",lg:"4"}},[t("div",{staticClass:"align-center text-right"},[t(c,[e._v("mdi-arrow-right")]),t("a",{staticClass:"text-h6 primary--text pr-2",on:{click:function(o){e.categoryStore.getNewPage({name:e.categoryStore.category.category.slug,page:parseInt(e.categoryStore.category.contents.current_page)+1})}}},[t("div",{staticClass:"text-subtitle-1"},[e._v("Next Page")])])],1)])],1)],1)]),this.$route.query.q?t("story"):e._e()],1),t(a,[t("div",[t("siderbar")],1)])],1):e._e(),t(a,{attrs:{cols:"8",lg:"8",xl:"8"}},[e.categoryStore.loading?t("skeletonLoaderCard"):e._e()],1)],1)},m=[];const h={name:"Category",mounted(){this.categoryStore.getCategory(this.$route.params.name)},data(){return{categoryStore:p()}},methods:{newPage(e,r){this.$router.push("./"+e+"?q="+r)}},components:{siderbar:()=>i(()=>import("./sidebar.8edb8bbd.js"),["assets/sidebar.8edb8bbd.js","assets/index.46601a35.js","assets/index.41f84da6.css","assets/VDivider.8e23ffd4.js","assets/VDivider.eeb75575.css"]),story:()=>i(()=>import("./Content.815831d6.js"),["assets/Content.815831d6.js","assets/index.46601a35.js","assets/index.41f84da6.css","assets/VDivider.8e23ffd4.js","assets/VDivider.eeb75575.css","assets/VAlert.6b3c6249.js","assets/VAlert.bf40aa02.css"])},watch:{$route:function(){this.$route.params.name?this.categoryStore.getNewPage({name:this.$route.params.name,page:parseInt(this.categoryStore.category.contents.current_page)}):this.categoryStore.getCategory(this.$route.params.name)}}},g={};var v=u(h,d,m,!1,f,null,null,null);function f(e){for(let r in g)this[r]=g[r]}var C=function(){return v.exports}();export{C as default};

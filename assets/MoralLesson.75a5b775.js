import{x as r,y as s,E as c,_ as l,e as _,h as n,z as g,A as u,B as d}from"./index.c261f423.js";import{_ as p}from"./VDivider.ae4369e0.js";var v=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t(r,[t(s,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("Moral Lesson")]),t("h4",{staticClass:"text-h6"},[e._v(" Are the lessons that we learn from our experiences, from the stories that we are told, and from the people that we meet. They teach us about right and wrong, about good and evil, and about how to live a good and meaningful life. ")])]),t(p,{staticClass:"my-4"}),t("div",[t("div",[e.categoryStore.loading?t("skeletonLoaderCard"):e._e(),e._l(e.categoryStore.moral_lessons.data,function(a){return t(r,{key:a.id},[t(s,{attrs:{cols:"12",md:"3"}},[t(c,{attrs:{flat:"",height:"100%",to:"/category/"+a.category.slug+"?q="+a.title_slug}},[t(l,{attrs:{"aspect-ratio":16/9,height:"100%",src:e.getImageUrl(a.category.image)}})],1)],1),t(s,[t("div",[t(_,{attrs:{color:"accent",depressed:"",to:"/category/"+a.category.slug}},[e._v(e._s(a.category.category))]),t("router-link",{staticClass:"text-decoration-none",attrs:{to:"/category/"+a.category.slug+"?q="+a.title_slug}},[t("h3",{staticClass:"text-h4 font-weight-bold pt-3"},[e._v(" "+e._s(a.title)+" ")])]),t("div",{staticClass:"text-h6 font-weight-regular pt-3 text--secondary",domProps:{innerHTML:e._s(a.data.substring(0,200)+"...")}})],1)])],1)}),t(r,{staticClass:"mb-2",attrs:{justify:"space-between"}},[t(s,{attrs:{cols:"12",md:"6",lg:"4"}},[t("a",{staticClass:"align-center",on:{click:function(a){e.categoryStore.getMoralLesson(parseInt(e.categoryStore.moral_lessons.current_page)-1)}}},[t(n,[e._v("mdi-arrow-left")]),t("div",{staticClass:"text-h6 primary--text pl-2"},[t("div",{staticClass:"text-subtitle-1"},[e._v("Previous Page")])])],1)]),t(s,{attrs:{cols:"12",md:"6",lg:"4"}},[t("div",{staticClass:"align-center text-right"},[t(n,[e._v("mdi-arrow-right")]),t("a",{staticClass:"text-h6 primary--text pr-2",on:{click:function(a){e.categoryStore.getMoralLesson(parseInt(e.categoryStore.moral_lessons.current_page)+1)}}},[t("div",{staticClass:"text-subtitle-1"},[e._v("Next Page")])])],1)])],1)],2)])],1)]),t(s,[t("div",{staticClass:"pt-16"},[t("siderbar")],1)])],1)],1)},h=[];const m={name:"Home",mounted(){this.categoryStore.getMoralLesson(1)},data(){return{categoryStore:u()}},components:{siderbar:()=>d(()=>import("./sidebar.8ecf977b.js"),["assets/sidebar.8ecf977b.js","assets/index.c261f423.js","assets/index.41f84da6.css","assets/VDivider.ae4369e0.js","assets/VDivider.eeb75575.css"])}},i={};var y=g(m,v,h,!1,f,null,null,null);function f(e){for(let o in i)this[o]=i[o]}var b=function(){return y.exports}();export{b as default};

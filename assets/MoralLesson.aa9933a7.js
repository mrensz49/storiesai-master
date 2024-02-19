import{A as r,B as a,N as c,P as l,a as _,e as g,h as n,E as u,F as d,H as p}from"./index.291b9972.js";import{_ as m}from"./VDivider.7542742f.js";var v=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t(r,[t(a,{attrs:{cols:"12",lg:"8",xl:"8"}},[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("Moral Lesson")]),t("h4",{staticClass:"text-h6"},[e._v(" The lessons that we learn from our experiences, from the stories that we are told, and from the people that we meet. They teach us about right and wrong, about good and evil, and about how to live a good and meaningful life. ")])]),t(m,{staticClass:"my-4"}),t("div",[t("div",[e.categoryStore.loading?t(c):e._e(),e._l(e.categoryStore.moral_lessons.data,function(s){return t(r,{key:s.id},[t(a,{attrs:{cols:"12",md:"3"}},[t(l,{attrs:{flat:"",height:"100%",to:"/category/"+s.category.slug+"?q="+s.title_slug}},[t(_,{attrs:{"aspect-ratio":16/9,height:"100%",src:e.getPublicImageThumbnail(s.image)}})],1)],1),t(a,[t("div",[t(g,{attrs:{color:"accent",depressed:"",to:"/category/"+s.category.slug}},[e._v(e._s(s.category.category))]),t("router-link",{staticClass:"text-decoration-none",attrs:{to:"/category/"+s.category.slug+"?q="+s.title_slug}},[t("h3",{staticClass:"text-h4 font-weight-bold pt-3"},[e._v(" "+e._s(s.title)+" ")])]),t("div",{staticClass:"text-body-1 font-weight-regular pt-3 text--secondary",domProps:{innerHTML:e._s(s.moral_lesson.substring(0,200)+"...")}})],1)])],1)}),t(r,{staticClass:"mb-2",attrs:{justify:"space-between"}},[t(a,{attrs:{cols:"6",md:"6",lg:"6",sm:"6"}},[e.categoryStore.moral_lessons.current_page!=1?t("a",{staticClass:"align-center",on:{click:function(s){e.categoryStore.getMoralLesson(parseInt(e.categoryStore.moral_lessons.current_page)-1)}}},[t(n,[e._v("mdi-arrow-left")]),t("div",{staticClass:"text-h6 primary--text pl-2"},[t("div",{staticClass:"text-subtitle-1"},[e._v("Previous Page")])])],1):e._e()]),t(a,{attrs:{cols:"6",md:"6",lg:"6",sm:"6"}},[e.categoryStore.moral_lessons.current_page!=e.categoryStore.moral_lessons.last_page?t("div",{staticClass:"align-center text-right"},[t("a",{staticClass:"text-h6 primary--text pr-2",on:{click:function(s){e.categoryStore.getMoralLesson(parseInt(e.categoryStore.moral_lessons.current_page)+1)}}},[t(n,[e._v("mdi-arrow-right")]),t("div",{staticClass:"text-subtitle-1"},[e._v("Next Page")])],1)]):e._e()])],1)],2)])],1)]),t(a,[t("div",{staticClass:"pt-3"},[t("siderbar")],1)])],1)],1)},h=[];const y={name:"Home",mounted(){this.categoryStore.getMoralLesson(1)},data(){return{categoryStore:d()}},components:{siderbar:()=>p(()=>import("./sidebar.91522870.js"),["assets/sidebar.91522870.js","assets/index.291b9972.js","assets/index.e3d769c2.css","assets/VAlert.adb06add.js","assets/VAlert.904eb20e.css","assets/VDivider.7542742f.js","assets/VDivider.3d6d3afb.css","assets/sidebar.2b5c1253.css"])}},i={};var f=u(y,v,h,!1,x,null,null,null);function x(e){for(let o in i)this[o]=i[o]}const S=function(){return f.exports}();export{S as default};

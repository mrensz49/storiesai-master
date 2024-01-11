import{x as r,y as a,H as c,F as l,_,e as g,h as n,z as u,A as d,B as p}from"./index.24f81e75.js";import{_ as v}from"./VDivider.cde0899e.js";var m=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t(r,[t(a,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("Moral Lesson")]),t("h4",{staticClass:"text-h6"},[e._v(" The lessons that we learn from our experiences, from the stories that we are told, and from the people that we meet. They teach us about right and wrong, about good and evil, and about how to live a good and meaningful life. ")])]),t(v,{staticClass:"my-4"}),t("div",[t("div",[e.categoryStore.loading?t(c):e._e(),e._l(e.categoryStore.moral_lessons.data,function(s){return t(r,{key:s.id},[t(a,{attrs:{cols:"12",md:"3"}},[t(l,{attrs:{flat:"",height:"100%",to:"/category/"+s.category.slug+"?q="+s.title_slug}},[t(_,{attrs:{"aspect-ratio":16/9,height:"100%",src:e.getPublicImage(s.image)}})],1)],1),t(a,[t("div",[t(g,{attrs:{color:"accent",depressed:"",to:"/category/"+s.category.slug}},[e._v(e._s(s.category.category))]),t("router-link",{staticClass:"text-decoration-none",attrs:{to:"/category/"+s.category.slug+"?q="+s.title_slug}},[t("h3",{staticClass:"text-h4 font-weight-bold pt-3"},[e._v(" "+e._s(s.title)+" ")])]),t("div",{staticClass:"text-h6 font-weight-regular pt-3 text--secondary",domProps:{innerHTML:e._s(s.moral_lesson.substring(0,200)+"...")}})],1)])],1)}),t(r,{staticClass:"mb-2",attrs:{justify:"space-between"}},[t(a,{attrs:{cols:"6",md:"6",lg:"6",sm:"6"}},[t("a",{staticClass:"align-center",on:{click:function(s){e.categoryStore.getMoralLesson(parseInt(e.categoryStore.moral_lessons.current_page)-1)}}},[t(n,[e._v("mdi-arrow-left")]),t("div",{staticClass:"text-h6 primary--text pl-2"},[t("div",{staticClass:"text-subtitle-1"},[e._v("Previous Page")])])],1)]),t(a,{attrs:{cols:"6",md:"6",lg:"6",sm:"6"}},[t("div",{staticClass:"align-center text-right"},[t("a",{staticClass:"text-h6 primary--text pr-2",on:{click:function(s){e.categoryStore.getMoralLesson(parseInt(e.categoryStore.moral_lessons.current_page)+1)}}},[t(n,[e._v("mdi-arrow-right")]),t("div",{staticClass:"text-subtitle-1"},[e._v("Next Page")])],1)])])],1)],2)])],1)]),t(a,[t("div",{staticClass:"pt-16"},[t("siderbar")],1)])],1)],1)},h=[];const y={name:"Home",mounted(){this.categoryStore.getMoralLesson(1)},data(){return{categoryStore:d()}},components:{siderbar:()=>p(()=>import("./sidebar.b091e463.js"),["assets/sidebar.b091e463.js","assets/index.24f81e75.js","assets/index.bc85530d.css","assets/VDivider.cde0899e.js","assets/VDivider.8bd5bceb.css"])}},i={};var f=u(y,m,h,!1,x,null,null,null);function x(e){for(let o in i)this[o]=i[o]}var w=function(){return f.exports}();export{w as default};

import{x as _,y as n,F as o,_ as c,e as u,G as p,z as g,A as m}from"./index.ed44ada3.js";import{_ as r}from"./VDivider.695f1c9d.js";var d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",[t("h3",{staticClass:"text-h5 font-weight-medium pb-4"},[e._v("Popular Posts")]),t(r),t("div",e._l(e.categoryStore.popular5,function(s,l){return t(_,{key:"sb_"+l,staticClass:"py-2"},[s?[t(n,{attrs:{cols:"12",md:"6",lg:"5"}},[t(o,{attrs:{height:"100%",flat:"",to:"/category/"+s.slug+"?q="+s.title_slug}},[t(c,{attrs:{src:e.getPublicImage(s.image),"aspect-ratio":16/9,height:"100%"}})],1)],1),t(n,[t("div",[t(u,{attrs:{depressed:"",color:"accent",small:"",to:"/category/"+s.slug}},[e._v(e._s(s.category))]),t("router-link",{staticClass:"text-decoration-none",attrs:{to:"/category/"+s.slug+"?q="+s.title_slug}},[t("h3",{staticClass:"text-h6 font-weight-bold primary--text py-3"},[e._v(" "+e._s(s.title)+" ")])])],1)])]:e._e()],2)}),1)],1),t("div",{staticClass:"pt-4"},[t("h3",{staticClass:"text-h5 font-weight-medium pb-4"},[e._v("Category")]),t(r),e._l(e.categoryStore.categories,function(s){return t(o,{key:s.id,staticClass:"my-4",attrs:{color:"accent",dark:"",flat:"",to:"/category/"+s.slug}},[t(p,{staticClass:"d-flex justify-space-between align-center white--text"},[t("h6",{staticClass:"text-h6"},[e._v(e._s(s.category))])])],1)})],2),t("top-scroll")],1)},h=[];const v={name:"SideBar",mounted(){this.categoryStore.getCategories(),this.categoryStore.getPopular5()},data(){return{categoryStore:m()}}},i={};var f=g(v,d,h,!1,C,null,null,null);function C(e){for(let a in i)this[a]=i[a]}var S=function(){return f.exports}();export{S as default};

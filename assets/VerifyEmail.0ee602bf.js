import{A as r,B as i,P as o,Q as _,M as l,E as u,G as c}from"./index.c0ea0668.js";import{_ as h}from"./VDivider.796afb2d.js";import{_ as a}from"./VAlert.5f22bfbd.js";var m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(r,[e(i,{attrs:{cols:"12",lg:"12",xl:"12"}},[e("div",[e("div",[e("div",[e("h2",{staticClass:"text-h4 font-weight-bold"},[t._v("Verifying Your Email")]),e("h4",{staticClass:"text-h6"},[t._v("\xA0")])]),e(h,{staticClass:"my-4"}),e("div",{staticStyle:{"min-height":"62vh"}},[e(o,{attrs:{flat:"",elevation:"20"}},[e(_,[t.authStore.loading?e("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e(l,{attrs:{size:20,color:"amber",indeterminate:""}}),e("span",{staticClass:"ml-3 text-h6 font-weight-bold primary--text"},[t._v("Please wait while verifying your email.")])],1):t._e(),t.authStore.verified?e(a,{attrs:{dense:"",text:"",type:"success"}},[t._v(" Successfully verified! Redirecting to dashboard. ")]):t._e(),t.authStore.errors_verify?e(a,{attrs:{dense:"",text:"",type:"warning"}},[t._v(" "+t._s(t.authStore.errors_verify)+" ")]):t._e()],1)],1)],1)],1)])])],1)],1)},d=[];const p={name:"Category",mounted(){const t=this.$route.params.hash,s=this.$route.params.id;this.authStore.handleVerifyEmail({id:s,hash:t})},data(){return{authStore:c()}}},n={};var v=u(p,m,d,!1,f,null,null,null);function f(t){for(let s in n)this[s]=n[s]}const S=function(){return v.exports}();export{S as default};

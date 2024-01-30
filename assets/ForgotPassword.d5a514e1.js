import{E as r,F as o,P as m,Q as l,e as i,L as c,I as p,G as f}from"./index.e7be2e6a.js";import{_ as g,a as h}from"./VWindowItem.c22be90c.js";import{_ as n}from"./VTextField.1eb78399.js";import"./index.dfeaf047.js";var v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e(r,{staticClass:"d-flex justify-center align-center fill-height",staticStyle:{"min-height":"100vh"}},[e(o,{attrs:{cols:"12",sm:"12"}},[e(m,{staticClass:"elevation-6 mt-10"},[e(g,{model:{value:t.step,callback:function(s){t.step=s},expression:"step"}},[e(h,{attrs:{value:1}},[e(r,[e(o,{staticClass:"blue rounded-br-xl",attrs:{cols:"12",md:"6"}},[e("div",{staticStyle:{"text-align":"center",padding:"180px 0"}},[e(l,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Already Signed up?")]),e("h6",{staticClass:"text-center"},[t._v("Log in to your account so you can continue building and"),e("br"),t._v(" editing your onboarding flows")])]),e("div",{staticClass:"text-center"},[e("router-link",{staticClass:"text-decoration-none",attrs:{to:"/login"}},[e(i,{attrs:{tile:"",outlined:"",dark:""}},[t._v("Log in")])],1)],1)],1)]),e(o,{attrs:{cols:"12",md:"6"}},[e(l,{staticClass:"mt-12"},[e("h1",{staticClass:"text-center"},[t._v("Reset Password")]),e("p",{staticClass:"text-center grey--text mt-3"},[t._v(" Reset your password. ")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.handleResetPassword.apply(null,arguments)}}},[e(r,{attrs:{align:"center",justify:"center"}},[e(o,{staticClass:"mt-4",attrs:{cols:"12",sm:"8"}},[e(n,{attrs:{label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false",disabled:"",required:""},model:{value:t.formData.email,callback:function(s){t.$set(t.formData,"email",s)},expression:"formData.email"}}),e(n,{attrs:{type:"password",label:"New Password",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.formData.password,callback:function(s){t.$set(t.formData,"password",s)},expression:"formData.password"}}),e(n,{attrs:{type:"password",label:"Repeat New Password",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.formData.password_confirmation,callback:function(s){t.$set(t.formData,"password_confirmation",s)},expression:"formData.password_confirmation"}}),e(i,{attrs:{color:"warning",type:"submit",dark:"",block:"",tile:"",loading:t.authStore.loading}},[t._v("Submit")]),Object.keys(t.authStore.errors_reset).length?e(c,{staticClass:"mt-8",attrs:{color:"warning",icon:"$error",text:""}},t._l(t.authStore.errors_reset,function(s,d){return e("span",{key:d},[t._v(" "+t._s(s[0])),e("br")])}),0):t._e(),t.authStore.reset_password_details?e(c,{staticClass:"mt-8",attrs:{color:"success",icon:"$success",text:""}},[e("span",[t._v(t._s(t.authStore.reset_password_details))])]):t._e()],1)],1)],1)])],1)],1)],1)],1)],1)],1)],1)},w=[];const u=p(),b={name:"ForgotPassword",mounted(){this.formData.email=this.$route.params.email,this.formData.token=this.$route.params.token},data:()=>({authStore:u,step:1,formData:{email:"",token:"",password:"",password_confirmation:""}}),props:{source:String},methods:{handleResetPassword(){u.handleResetPassword(this.formData)}}},_={};var x=f(b,v,w,!1,y,"0e5bc123",null,null);function y(t){for(let a in _)this[a]=_[a]}const P=function(){return x.exports}();export{P as default};

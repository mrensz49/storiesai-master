import{x as r,y as o,F as d,G as l,e as i,z as p}from"./index.cff887f2.js";import{_ as f,a as g,u as v}from"./auth.e40b44a4.js";import{_ as n}from"./VTextField.d4d38531.js";import{_ as c}from"./VAlert.23ec98e8.js";import"./index.bf93233b.js";var h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e(r,{staticClass:"d-flex justify-center align-center fill-height",staticStyle:{"min-height":"100vh"}},[e(o,{attrs:{cols:"12",sm:"12"}},[e(d,{staticClass:"elevation-6 mt-10"},[e(f,{model:{value:t.step,callback:function(s){t.step=s},expression:"step"}},[e(g,{attrs:{value:1}},[e(r,[e(o,{staticClass:"blue rounded-br-xl",attrs:{cols:"12",md:"6"}},[e("div",{staticStyle:{"text-align":"center",padding:"180px 0"}},[e(l,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Already Signed up?")]),e("h6",{staticClass:"text-center"},[t._v("Log in to your account so you can continue building and"),e("br"),t._v(" editing your onboarding flows")])]),e("div",{staticClass:"text-center"},[e("router-link",{staticClass:"text-decoration-none",attrs:{to:"/login"}},[e(i,{attrs:{tile:"",outlined:"",dark:""}},[t._v("Log in")])],1)],1)],1)]),e(o,{attrs:{cols:"12",md:"6"}},[e(l,{staticClass:"mt-12"},[e("h1",{staticClass:"text-center"},[t._v("Reset Password")]),e("p",{staticClass:"text-center grey--text mt-3"},[t._v(" Reset your password. ")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.handleResetPassword.apply(null,arguments)}}},[e(r,{attrs:{align:"center",justify:"center"}},[e(o,{staticClass:"mt-4",attrs:{cols:"12",sm:"8"}},[e(n,{attrs:{label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false",disabled:"",required:""},model:{value:t.formData.email,callback:function(s){t.$set(t.formData,"email",s)},expression:"formData.email"}}),e(n,{attrs:{type:"password",label:"New Password",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.formData.password,callback:function(s){t.$set(t.formData,"password",s)},expression:"formData.password"}}),e(n,{attrs:{type:"password",label:"Repeat New Password",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.formData.password_confirmation,callback:function(s){t.$set(t.formData,"password_confirmation",s)},expression:"formData.password_confirmation"}}),e(i,{attrs:{color:"warning",type:"submit",dark:"",block:"",tile:"",loading:t.authStore.loading}},[t._v("Submit")]),Object.keys(t.authStore.errors_reset).length?e(c,{staticClass:"mt-8",attrs:{color:"warning",icon:"$error",text:""}},t._l(t.authStore.errors_reset,function(s,m){return e("span",{key:m},[t._v(" "+t._s(s[0])),e("br")])}),0):t._e(),t.authStore.reset_password_details?e(c,{staticClass:"mt-8",attrs:{color:"success",icon:"$success",text:""}},[e("span",[t._v(t._s(t.authStore.reset_password_details))])]):t._e()],1)],1)],1)])],1)],1)],1)],1)],1)],1)],1)},w=[];const u=v(),x={name:"ForgotPassword",mounted(){this.formData.email=this.$route.params.email,this.formData.token=this.$route.params.token},data:()=>({authStore:u,step:1,formData:{email:"",token:"",password:"",password_confirmation:""}}),props:{source:String},methods:{handleResetPassword(){u.handleResetPassword(this.formData)}}},_={};var b=p(x,h,w,!1,y,"0e5bc123",null,null);function y(t){for(let a in _)this[a]=_[a]}var $=function(){return b.exports}();export{$ as default};

import{a as v,r as b,m as x,h as m,x as n,y as i,H as y,I as l,e as r,K as u,B as C,z as k,M as w}from"./index.668c7ef9.js";import{_ as S,a as p}from"./VWindowItem.e6c8e137.js";import{C as $,V as h,_ as o}from"./VTextField.fb913a1d.js";import{_ as f}from"./VDivider.b430886c.js";import"./index.e2f49248.js";const D=v.extend({name:"rippleable",directives:{ripple:b},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}});function _(t){t.preventDefault()}const V=x(h,D,$).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive(){const t=this.value,a=this.internalValue;return this.isMultiple?Array.isArray(a)?a.some(e=>this.valueComparator(e,t)):!1:this.trueValue===void 0||this.falseValue===void 0?t?this.valueComparator(t,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty(){return this.isActive},rippleState(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=h.options.methods.genLabel.call(this);return t&&(t.data.on={click:_},t)},genInput(t,a){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},a),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:_},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);const e=a.length;a=a.filter(s=>!this.valueComparator(s,t)),a.length===e&&a.push(t)}else this.trueValue!==void 0&&this.falseValue!==void 0?a=this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:t?a=this.valueComparator(a,t)?null:t:a=!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),I=V.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...h.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!(this.isDisabled&&!this.inputIndeterminate)){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor}}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){!this.indeterminate||(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...a}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(m,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...a,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}});var A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e(n,{staticClass:"d-flex justify-center align-center fill-height",staticStyle:{"min-height":"100vh"}},[e(i,{attrs:{cols:"10",lg:"8",md:"10",sm:"12"}},[e(y,{staticClass:"elevation-6 mt-10"},[e(S,{model:{value:t.step,callback:function(s){t.step=s},expression:"step"}},[e(p,{attrs:{value:1}},[e(n,[e(i,{attrs:{cols:"12",md:"6"}},[e(l,{staticClass:"mt-12"},[e("h3",{staticClass:"text-center"},[t._v("Login Your Account")]),e(n,{attrs:{align:"center",justify:"center"}},[e(i,{attrs:{cols:"12",sm:"8"}},[e("form",{on:{submit:function(s){return s.preventDefault(),t.handleLogin.apply(null,arguments)}}},[e(o,{staticClass:"mt-16",attrs:{type:"email",label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}}),e(o,{attrs:{label:"Password",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"password",required:""},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),e(n,[e(i,{attrs:{cols:"12",sm:"7"}},[e(I,{staticClass:"mt-n1",attrs:{label:"Remember Me",color:"blue"}})],1),e(i,{attrs:{cols:"12",sm:"5"}},[e("a",{staticClass:"text-decoration-none",attrs:{href:"#"},on:{click:function(s){t.step+=2}}},[e("span",{staticClass:"caption blue--text"},[t._v("Forgot password")])])])],1),e(r,{attrs:{color:"blue",type:"submit",dark:"",block:"",tile:"",loading:t.authStore.loading}},[t._v("Log in")])],1),Object.keys(t.authStore.errors_login).length?e(u,{staticClass:"mt-8",attrs:{color:"warning",icon:"$error",text:""}},t._l(t.authStore.errors_login,function(s,c){return e("span",{key:c},[t._v(" "+t._s(s[0])),e("br")])}),0):t._e(),e(n,{staticClass:"grey--text mt-4 mb-3",attrs:{align:"center"}},[e(f),t._v(" or login as "),e(f)],1),e("div",{staticClass:"justify-space-between align-center mb-16"},[e("div",{staticClass:"mb-2"},[e(r,{staticClass:"mr-1",attrs:{depressed:"",block:"",outlined:"",color:"grey"},on:{click:function(s){return t.AuthProvider("google")}}},[e(m,{attrs:{color:"red"}},[t._v("mdi-google")])],1)],1),e("div",[e(r,{staticClass:"mr-1",attrs:{depressed:"",block:"",outlined:"",color:"grey"},on:{click:function(s){return t.AuthProvider("facebook")}}},[e(m,{attrs:{color:"blue"}},[t._v("mdi-facebook")])],1)],1)])],1)],1)],1)],1),e(i,{staticClass:"blue rounded-bl-xl",attrs:{cols:"12",md:"6"}},[e("div",{staticStyle:{"text-align":"center",padding:"180px 0"}},[e(l,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Don't Have an Account Yet?")]),e("h6",{staticClass:"text-center"},[t._v("Let's get you all set up so you can start creating your your first"),e("br"),t._v(" onboarding experience")])]),e("div",{staticClass:"text-center"},[e(r,{attrs:{tile:"",outlined:"",dark:""},on:{click:function(s){t.step++}}},[t._v("SIGN UP")])],1)],1)])],1)],1),e(p,{attrs:{value:2}},[e(n,[e(i,{staticClass:"blue rounded-br-xl",attrs:{cols:"12",md:"6"}},[e("div",{staticStyle:{"text-align":"center",padding:"180px 0"}},[e(l,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Already Signed up?")]),e("h6",{staticClass:"text-center"},[t._v("Log in to your account so you can continue building and"),e("br"),t._v(" editing your onboarding flows")])]),e("div",{staticClass:"text-center"},[e(r,{attrs:{tile:"",outlined:"",dark:""},on:{click:function(s){t.step--}}},[t._v("Log in")])],1)],1)]),e(i,{attrs:{cols:"12",md:"6"}},[e(l,{staticClass:"mt-12"},[e("h4",{staticClass:"text-center"},[t._v("Sign Up for an Account")]),e("h6",{staticClass:"text-center grey--text"},[t._v("Let's get you all set up so you can start creatin your "),e("br"),t._v(" first onboarding experiance")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.handleRegister.apply(null,arguments)}}},[e(n,{attrs:{align:"center",justify:"center"}},[e(i,{staticClass:"mt-4",attrs:{cols:"12",sm:"8"}},[e(n,[e(i,{attrs:{cols:"12",sm:"6"}},[e(o,{attrs:{label:"First Name",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.formData.first_name,callback:function(s){t.$set(t.formData,"first_name",s)},expression:"formData.first_name"}})],1),e(i,{attrs:{cols:"12",sm:"6"}},[e(o,{attrs:{label:"Last Name",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.formData.last_name,callback:function(s){t.$set(t.formData,"last_name",s)},expression:"formData.last_name"}})],1)],1),e(o,{attrs:{label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"email",required:""},model:{value:t.formData.email,callback:function(s){t.$set(t.formData,"email",s)},expression:"formData.email"}}),e(o,{attrs:{label:"Password",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"password",required:""},model:{value:t.formData.password,callback:function(s){t.$set(t.formData,"password",s)},expression:"formData.password"}}),e(o,{attrs:{label:"Confirm",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"password",required:""},model:{value:t.formData.password_confirmation,callback:function(s){t.$set(t.formData,"password_confirmation",s)},expression:"formData.password_confirmation"}}),e(r,{attrs:{color:"blue",type:"submit",dark:"",block:"",tile:"",loading:t.authStore.loading}},[t._v("Sign up")]),Object.keys(t.authStore.errors_reg).length?e(u,{staticClass:"mt-8",attrs:{color:"warning",icon:"$error",text:""}},t._l(t.authStore.errors_reg,function(s,c){return e("span",{key:c},[t._v(" "+t._s(s[0])),e("br")])}),0):t._e()],1)],1)],1)])],1)],1)],1),e(p,{attrs:{value:3}},[e(n,[e(i,{staticClass:"blue rounded-br-xl",attrs:{cols:"12",md:"6"}},[e("div",{staticStyle:{"text-align":"center",padding:"180px 0"}},[e(l,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Already Signed up?")]),e("h6",{staticClass:"text-center"},[t._v("Log in to your account so you can continue building and"),e("br"),t._v(" editing your onboarding flows")])]),e("div",{staticClass:"text-center"},[e(r,{attrs:{tile:"",outlined:"",dark:""},on:{click:function(s){t.step-=2}}},[t._v("Log in")])],1)],1)]),e(i,{attrs:{cols:"12",md:"6"}},[e(l,{staticClass:"mt-12"},[e("h1",{staticClass:"text-center"},[t._v("Forgot Password")]),e("p",{staticClass:"text-center grey--text mt-3"},[t._v(" No problem. Just let us know your email address and we will email "),e("br"),t._v("you a password reset linkthat will allow you to choose a new one. ")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.handleForgotPassword.apply(null,arguments)}}},[e(n,{attrs:{align:"center",justify:"center"}},[e(i,{staticClass:"mt-4",attrs:{cols:"12",sm:"8"}},[e(o,{attrs:{label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"email",required:""},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}}),e(r,{attrs:{color:"warning",type:"submit",dark:"",block:"",tile:"",loading:t.authStore.loading}},[t._v("Reset")]),Object.keys(t.authStore.errors_reset).length?e(u,{staticClass:"mt-8",attrs:{color:"warning",icon:"$error",text:""}},t._l(t.authStore.errors_reset,function(s,c){return e("span",{key:c},[t._v(" "+t._s(s[0])),e("br")])}),0):t._e(),t.authStore.reset_password_details?e(u,{staticClass:"mt-8",attrs:{color:"success",icon:"$success",text:""}},[e("span",[t._v(t._s(t.authStore.reset_password_details))])]):t._e()],1)],1)],1)])],1)],1)],1)],1)],1)],1)],1)},L=[];const d=C(),F={name:"LoginForm",data:()=>({authStore:d,step:1,email:"",password:"",formData:{first_name:"",last_name:"",email:"",password:"",password_confirmation:""}}),props:{source:String},methods:{AuthProvider(t){this.$auth.authenticate(t).then(a=>{this.socialLogin(t,a)}).catch(a=>{console.log({err:a})})},socialLogin(t,a){var e="http://stories-v2.test/";console.log('"development" - ',"development"),console.log("baseURL - ",e),console.log("provider - ",t),this.$http.post(e+"sociallogin/"+t,a).then(s=>{w.push({name:"Dashboard"})}).catch(s=>{console.log({err:s})})},handleRegister(){d.handleRegister(this.formData)},handleLogin(){d.handleLogin({email:this.email,password:this.password})},handleForgotPassword(){d.handleForgotPassword({email:this.email})}}},g={};var j=k(F,A,L,!1,P,"195907a4",null,null);function P(t){for(let a in g)this[a]=g[a]}const M=function(){return j.exports}();export{M as default};

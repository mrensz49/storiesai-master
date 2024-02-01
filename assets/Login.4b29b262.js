import{a as v,q as g,m as _,h as b,i as y,c as C,v as x,E as n,F as i,P as w,Q as o,e as l,L as u,I as k,G as S,X as $}from"./index.dba1dd73.js";import{_ as D,a as h}from"./VWindowItem.dc725b95.js";import{C as V,V as p,_ as r}from"./VTextField.fe3a68ec.js";import"./index.785be691.js";const I=v.extend({name:"rippleable",directives:{ripple:g},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}});function m(t){t.preventDefault()}const L=_(p,I,V).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive(){const t=this.value,a=this.internalValue;return this.isMultiple?Array.isArray(a)?a.some(e=>this.valueComparator(e,t)):!1:this.trueValue===void 0||this.falseValue===void 0?t?this.valueComparator(t,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty(){return this.isActive},rippleState(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=p.options.methods.genLabel.call(this);return t&&(t.data.on={click:m},t)},genInput(t,a){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},a),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);const e=a.length;a=a.filter(s=>!this.valueComparator(s,t)),a.length===e&&a.push(t)}else this.trueValue!==void 0&&this.falseValue!==void 0?a=this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:t?a=this.valueComparator(a,t)?null:t:a=!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),A=L.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...p.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!(this.isDisabled&&!this.inputIndeterminate)){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor}}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){!this.indeterminate||(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...a}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(b,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...a,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}});const F=_(y).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:C(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}});x("v-table__overflow");var j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e(n,{staticClass:"d-flex justify-center align-center fill-height",staticStyle:{"min-height":"100vh"}},[e(i,{attrs:{cols:"10",lg:"8",md:"10",sm:"12"}},[e(w,{staticClass:"elevation-6 mt-10"},[e(D,{model:{value:t.step,callback:function(s){t.step=s},expression:"step"}},[e(h,{attrs:{value:1}},[e(n,[e(i,{attrs:{cols:"12",md:"6"}},[e(o,{staticClass:"mt-12"},[e("h3",{staticClass:"text-center"},[t._v("Sign in")]),e(n,{attrs:{align:"center",justify:"center"}},[e(i,{attrs:{cols:"12",md:"10",sm:"8"}},[e("form",{on:{submit:function(s){return s.preventDefault(),t.handleLogin.apply(null,arguments)}}},[e(r,{staticClass:"mt-16",attrs:{type:"email",label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}}),e(r,{attrs:{label:"Password",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"password",required:""},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),e(n,[e(i,{staticClass:"text-body-2 mt-n9",attrs:{cols:"12",lg:"12",md:"12",sm:"12"}},[e("table",{attrs:{width:"100%"}},[e("tr",[e("td",[e(A,{attrs:{color:"blue"},scopedSlots:t._u([{key:"label",fn:function(){return[e("small",{staticStyle:{"font-size":"10.2px"}},[e("b",[t._v("Remember Me")])])]},proxy:!0}])})],1),e("td",[e("a",{staticClass:"text-decoration-none text-right",attrs:{href:"#"},on:{click:function(s){t.step+=2}}},[e("span",{staticClass:"caption blue--text"},[e("small",[t._v("Forgot password")])])])])])])])],1),e(l,{attrs:{color:"blue",type:"submit",dark:"",block:"",tile:"",loading:t.authStore.loading}},[t._v("Log in")])],1),Object.keys(t.authStore.errors_login).length?e(u,{staticClass:"mt-8",attrs:{color:"warning",icon:"$error",text:""}},t._l(t.authStore.errors_login,function(s,c){return e("span",{key:c},[t._v(" "+t._s(s[0])),e("br")])}),0):t._e(),e("div",{staticClass:"justify-space-between align-center mb-16"},[e("div",{staticClass:"mt-5 text-justify"},[e("small",[t._v(" By clicking Log In, you agree to our "),e("u",{staticClass:"pointer",on:{click:function(s){return t.consent("terms")}}},[t._v("Terms")]),t._v(". Learn how we process your data in our "),e("u",{staticClass:"pointer",on:{click:function(s){return t.consent("privacy")}}},[t._v("Privacy Policy")]),t._v(". ")])])])],1)],1)],1)],1),e(i,{staticClass:"blue rounded-bl-xl",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"text-center",staticStyle:{padding:"2%","margin-top":"10%"}},[e(o,{staticClass:"white--text"},[e(F,{attrs:{dense:"",elevation:"5"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",{staticStyle:{"background-color":"#FCF8E1"}},[e("tr",[e("th",{staticClass:"text-center"},[t._v(" Why Login? ")]),e("th",{staticClass:"text-center"},[t._v(" Coming soon ")])])]),e("tbody",[e("tr",[e("td",[t._v("Dashboard")]),e("td",{staticClass:"font-italic"},[t._v("Theme Color")])]),e("tr",[e("td",[t._v("Visited Stories")]),e("td",{staticClass:"font-italic"},[t._v("Lofi music")])]),e("tr",[e("td",[t._v("Unvisited Stories")]),e("td",{staticClass:"font-italic"},[t._v("Add comments")])]),e("tr",[e("td",[t._v("Latest Stories")]),e("td",{staticClass:"font-italic"},[t._v("Likes and etc.")])])])]},proxy:!0}])})],1)],1),e("div",{staticClass:"mb-7",staticStyle:{"text-align":"center"}},[e(o,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Don't have an account?")])]),e("div",{staticClass:"text-center"},[e(l,{attrs:{color:"warning"},on:{click:function(s){t.step++}}},[t._v("SIGN UP")])],1)],1)])],1)],1),e(h,{attrs:{value:2}},[e(n,[e(i,{staticClass:"blue rounded-br-xl",attrs:{cols:"12",md:"5"}},[e("div",{staticStyle:{"text-align":"center",padding:"180px 0"}},[e(o,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Have an account?")])]),e("div",{staticClass:"text-center"},[e(l,{attrs:{color:"warning"},on:{click:function(s){t.step--}}},[t._v("Log in")])],1)],1)]),e(i,{attrs:{cols:"12",md:"7"}},[e(o,{staticClass:"mt-12"},[e("h4",{staticClass:"text-center"},[t._v("Sign up for an account")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.handleRegister.apply(null,arguments)}}},[e(n,{attrs:{align:"center",justify:"center"}},[e(i,{staticClass:"mt-4 mb-5",attrs:{cols:"12",md:"10",sm:"8"}},[e(n,[e(i,{attrs:{cols:"12",sm:"6"}},[e(r,{attrs:{label:"First Name",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.formData.first_name,callback:function(s){t.$set(t.formData,"first_name",s)},expression:"formData.first_name"}})],1),e(i,{attrs:{cols:"12",sm:"6"}},[e(r,{attrs:{label:"Last Name",outlined:"",dense:"",color:"blue",autocomplete:"false",required:""},model:{value:t.formData.last_name,callback:function(s){t.$set(t.formData,"last_name",s)},expression:"formData.last_name"}})],1)],1),e(r,{attrs:{label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"email",required:""},model:{value:t.formData.email,callback:function(s){t.$set(t.formData,"email",s)},expression:"formData.email"}}),e(r,{attrs:{label:"Password",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"password",required:""},model:{value:t.formData.password,callback:function(s){t.$set(t.formData,"password",s)},expression:"formData.password"}}),e(r,{attrs:{label:"Confirm",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"password",required:""},model:{value:t.formData.password_confirmation,callback:function(s){t.$set(t.formData,"password_confirmation",s)},expression:"formData.password_confirmation"}}),e(l,{attrs:{color:"blue",type:"submit",dark:"",block:"",tile:"",loading:t.authStore.loading}},[t._v("Sign up")]),Object.keys(t.authStore.errors_reg).length?e(u,{staticClass:"mt-8",attrs:{color:"warning",icon:"$error",text:""}},t._l(t.authStore.errors_reg,function(s,c){return e("span",{key:c},[t._v(" "+t._s(s[0])),e("br")])}),0):t._e(),e("div",{staticClass:"mt-5 text-justify"},[e("small",[t._v(" By clicking Sign Up, you agree to our "),e("u",{staticClass:"pointer",on:{click:function(s){return t.consent("terms")}}},[t._v("Terms")]),t._v(". Learn how we process your data in our "),e("u",{staticClass:"pointer",on:{click:function(s){return t.consent("privacy")}}},[t._v("Privacy Policy")]),t._v(". ")])])],1)],1)],1)])],1)],1)],1),e(h,{attrs:{value:3}},[e(n,[e(i,{staticClass:"blue rounded-br-xl",attrs:{cols:"12",md:"6"}},[e("div",{staticStyle:{"text-align":"center",padding:"180px 0"}},[e(o,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Have an account?")])]),e("div",{staticClass:"text-center"},[e(l,{attrs:{tile:"",outlined:"",dark:""},on:{click:function(s){t.step-=2}}},[t._v("Log in")])],1)],1)]),e(i,{attrs:{cols:"12",md:"6"}},[e(o,{staticClass:"mt-12"},[e("h1",{staticClass:"text-center"},[t._v("Forgot Password")]),e("p",{staticClass:"text-center grey--text mt-3 text-justify"},[t._v(" No problem. Just let us know your email address and we will email you a password reset linkthat will allow you to choose a new one. ")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.handleForgotPassword.apply(null,arguments)}}},[e(n,{attrs:{align:"center",justify:"center"}},[e(i,{staticClass:"mt-4",attrs:{cols:"12",md:"10",sm:"8"}},[e(r,{attrs:{label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"email",required:""},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}}),e(l,{attrs:{color:"warning",type:"submit",dark:"",block:"",tile:"",loading:t.authStore.loading}},[t._v("Reset")]),Object.keys(t.authStore.errors_reset).length?e(u,{staticClass:"mt-8",attrs:{color:"warning",icon:"$error",text:""}},t._l(t.authStore.errors_reset,function(s,c){return e("span",{key:c},[t._v(" "+t._s(s[0])),e("br")])}),0):t._e(),t.authStore.reset_password_details?e(u,{staticClass:"mt-8",attrs:{color:"success",icon:"$success",text:""}},[e("span",[t._v(t._s(t.authStore.reset_password_details))])]):t._e()],1)],1)],1)])],1)],1)],1)],1)],1)],1)],1)},P=[];const d=k(),E={name:"LoginForm",data:()=>({authStore:d,step:1,email:"",password:"",formData:{first_name:"",last_name:"",email:"",password:"",password_confirmation:""}}),props:{source:String},methods:{AuthProvider(t){this.$auth.authenticate(t).then(a=>{this.socialLogin(t,a)}).catch(a=>{console.log({err:a})})},socialLogin(t,a){var e="https://storiesforyou.net/be/";this.$http.post(e+"sociallogin/"+t,a).then(s=>{$.push({name:"Dashboard"})}).catch(s=>{console.log({err:s})})},handleRegister(){d.handleRegister(this.formData)},handleLogin(){d.handleLogin({email:this.email,password:this.password})},handleForgotPassword(){d.handleForgotPassword({email:this.email})},consent(t){t=="terms"?window.location.href="https://www.storiesforyou.net/be/terms-service":window.location.href="https://www.storiesforyou.net/be/privacy-policy"}}},f={};var B=S(E,j,P,!1,R,"8c93a99e",null,null);function R(t){for(let a in f)this[a]=f[a]}const M=function(){return B.exports}();export{M as default};

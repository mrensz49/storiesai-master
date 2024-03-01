import{m as f,f as k,T as b,C as y,_ as a,i as C,c as n,r as T,s as x,g as c,e as l,E as m,A as w,B as u,P as h,a as B,Q as S,F as $,H as A}from"./index.9676f69d.js";import{_ as P}from"./VAlert.c36a19c1.js";import{_ as r}from"./VDivider.56812c18.js";const E=f(a,y,b,k(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>typeof t=="string"||t===!1},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:C.options.computed.isDark.call(this)},styles(){if(this.absolute||!this.app)return{};const{bar:t,bottom:i,footer:e,insetFooter:s,left:o,right:v,top:g}=this.$vuetify.application;return{paddingBottom:n(i+e+s),paddingLeft:n(o),paddingRight:n(v),paddingTop:n(t+g)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&T("auto-height",this),this.timeout==0&&x('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[c(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[c(this)])},genWrapper(){const i=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:a.options.computed.classes.call(this),style:a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:()=>window.clearTimeout(this.activeTimeout),pointerleave:this.setTimeout}});return this.$createElement("div",i,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);!this.isActive||[0,-1].includes(t)||(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[this.transition!==!1?this.genTransition():this.genWrapper()])}});var W=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t.shown?e("div",[e(P,{staticClass:"pl-7",attrs:{shaped:"",type:t.type,prominent:""}},[t._v(" "+t._s(t.message)+" "),e(l,{ref:"addBtn",attrs:{color:"orange"},on:{click:t.installPWA}},[t._v(" Install ")])],1)],1):t._e(),e("div",[e(E,{attrs:{timeout:t.timeout,color:"deep-purple-accent-4"},scopedSlots:t._u([{key:"actions",fn:function(){return[e(l,{attrs:{variant:"text"},on:{click:function(s){t.snackbar=!1}}},[t._v(" Close ")])]},proxy:!0}]),model:{value:t.snackbar,callback:function(s){t.snackbar=s},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)])},j=[];const L={data:()=>({shown:!1,type:"info",message:"Add storiesforyou to home screen?",snackbar:!1,text:"Thanks! Kindly see your app in a moment",timeout:3e3}),computed:{isMobileOrTablet(){return window.innerWidth<=768}},beforeMount(){window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this.installEvent=t,this.shown=!0})},methods:{dismissPrompt(){this.shown=!1},installPWA(){this.installEvent.prompt(),this.installEvent.userChoice.then(t=>{this.dismissPrompt(),t.outcome==="accepted"&&(this.snackbar=!0)})}}},p={};var M=m(L,W,j,!1,O,null,null,null);function O(t){for(let i in p)this[i]=p[i]}const d=function(){return M.exports}(),D=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"}));var F=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",[e("h3",{staticClass:"text-h5 font-weight-medium pb-4"},[t._v("Popular Posts")]),e(r),e("div",t._l(t.categoryStore.popular5,function(s,o){return e(w,{key:"sb_"+o,staticClass:"py-2"},[s?[e(u,{attrs:{cols:"12",md:"6",lg:"5"}},[e(h,{attrs:{height:"100%",flat:"",to:"/category/"+s.slug+"?q="+s.title_slug}},[e(B,{attrs:{src:t.getPublicImageThumbnail(s.image),"aspect-ratio":16/9,height:"100%"}})],1)],1),e(u,[e("div",[e(l,{attrs:{depressed:"",color:"accent",small:"",to:"/category/"+s.slug}},[e("small",[t._v(t._s(s.category))])]),e("router-link",{staticClass:"text-decoration-none",attrs:{to:"/category/"+s.slug+"?q="+s.title_slug}},[e("h5",{staticClass:"text-h7 font-weight-bold primary--text py-3"},[t._v(" "+t._s(s.title)+" ")])])],1)])]:t._e()],2)}),1)],1),e("div",{staticClass:"pt-4 pb-4"},[e("h3",{staticClass:"text-h6 font-weight-medium pb-4"},[t._v("Category")]),e(r),t._l(t.categoryStore.categories,function(s){return e(h,{key:s.id,staticClass:"my-2",attrs:{color:"accent",dark:"",flat:"",to:"/category/"+s.slug}},[e(S,{staticClass:"d-flex justify-space-between align-center white--text"},[e("h6",{staticClass:"text-h6"},[t._v(t._s(s.category))])])],1)})],2),e(r),e("div",{staticClass:"pt-4"},[e(d)],1),e("top-scroll")],1)},R=[];const H={name:"SideBar",mounted(){this.categoryStore.getCategories(),this.categoryStore.getPopular5()},data(){return{categoryStore:$()}},components:{AddToHomeBtn:()=>A(()=>Promise.resolve().then(()=>D),void 0,import.meta.url)}},_={};var I=m(H,F,R,!1,V,null,null,null);function V(t){for(let i in _)this[i]=_[i]}const K=function(){return I.exports}();export{K as default};

import{m as C,T as P,i as E,f as D,C as k,c as m,g as p,h as i,D as L,I as j,J as I,k as M,A as w,B as g,E as d,F as h,e as c,H as _,ad as F,P as v,a as Y,Q as y}from"./index.9676f69d.js";import{_ as T}from"./VDivider.56812c18.js";import{T as z,_ as X}from"./VAlert.c36a19c1.js";import{M as q,D as W,A as H}from"./index.9db19249.js";const N=C(k,D(["left","bottom"]),E,P,z).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":this.icon!=null,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${m(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,o=this.$attrs["aria-label"]||t.t(this.label),e=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":o,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),a=this.$createElement("span",e,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[a]):a},genBadgeContent(){if(this.dot)return;const t=p(this,"badge");if(t)return t;if(this.content)return String(this.content);if(this.icon)return this.$createElement(i,this.icon)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const o=[this.genBadgeWrapper()],e=[p(this)],{"aria-atomic":a,"aria-label":s,"aria-live":r,role:l,title:n,...u}=this.$attrs;return this.inline&&this.left?e.unshift(o):e.push(o),t("span",{staticClass:"v-badge",attrs:u,class:this.classes},e)}});const V=C(k,L,W,q).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:o}=this.dimensions,e=!this.bottom&&!this.left&&!this.top&&!this.right,a=this.attach!==!1?t.offsetLeft:t.left;let s=0;return this.top||this.bottom||e?s=a+t.width/2-o.width/2:(this.left||this.right)&&(s=a+(this.right?t.width:-o.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),`${this.calcXOverflow(s,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:o}=this.dimensions,e=this.attach!==!1?t.offsetTop:t.top;let a=0;return this.top||this.bottom?a=e+(this.bottom?t.height:-o.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=e+t.height/2-o.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),this.attach===!1&&(a+=this.pageYOffset),`${this.calcYOverflow(a)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":this.attach===""||this.attach===!0||this.attach==="attach"}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:m(this.maxWidth),minWidth:m(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){j(this,"activator",!0)==="v-slot"&&I(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`,this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=H.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=o=>{this.getActivator(o),this.runDelay("open")},t.blur=o=>{this.getActivator(o),this.runDelay("close")}),t.keydown=o=>{o.keyCode===M.esc&&(this.getActivator(o),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}});var U=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e(T,{staticClass:"my-12"}),e(w,{attrs:{justify:"space-between"}},[e(g,{attrs:{cols:"12",md:"6",lg:"5",sm:"6"}},[e("router-link",{staticClass:"text-decoration-none",attrs:{to:"/category/"+t.categoryStore.story.previous.category.slug+"?q="+t.categoryStore.story.previous.title_slug}},[e("div",{staticClass:"d-flex align-center"},[e("div",[e(i,[t._v("mdi-arrow-left")])],1),e("div",{staticClass:"text-h6 primary--text pl-2"},[e("div",{staticClass:"text-subtitle-2"},[t._v("Previous Story")]),t._v(" "+t._s(t.categoryStore.story.previous.title)+" ("),e("small",[t._v(t._s(t.categoryStore.story.previous.category.category))]),t._v(") ")])])])],1),e(g,{attrs:{cols:"12",md:"6",lg:"5",sm:"6"}},[e("router-link",{staticClass:"text-decoration-none",attrs:{to:"/category/"+t.categoryStore.story.next.category.slug+"?q="+t.categoryStore.story.next.title_slug}},[e("div",{staticClass:"d-flex align-center text-right"},[e("div",{staticClass:"text-h6 primary--text pr-2"},[e("div",{staticClass:"text-subtitle-2"},[t._v("Next Story")]),t._v(" "+t._s(t.categoryStore.story.next.title)+" ("),e("small",[t._v(t._s(t.categoryStore.story.next.category.category))]),t._v(") ")]),e("div",[e(i,[t._v("mdi-arrow-right")])],1)])])],1)],1)],1)},J=[];const Q={data(){return{categoryStore:h()}}},f={};var Z=d(Q,U,J,!1,G,null,null,null);function G(t){for(let o in f)this[o]=f[o]}const B=function(){return Z.exports}(),K=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));var tt=function(){var t,o,e,a,s,r=this,l=r.$createElement,n=r._self._c||l;return n("span",[n(c,{staticClass:"mx-1",attrs:{fab:"",dark:"",small:"",color:"info",loading:((t=r.categoryStore.loading_reaction[0])===null||t===void 0?void 0:t.reaction)=="like"},on:{click:function(u){return r.categoryStore.postReaction({id:r.categoryStore.story.story.id,type:"like"})}}},[n(i,{attrs:{dark:"",small:""}},[r._v("mdi-thumb-up")])],1),n(c,{staticClass:"mx-1",attrs:{fab:"",dark:"",small:"",color:"pink",loading:((o=r.categoryStore.loading_reaction[0])===null||o===void 0?void 0:o.reaction)=="love"},on:{click:function(u){return r.categoryStore.postReaction({id:r.categoryStore.story.story.id,type:"love"})}}},[n(i,{attrs:{dark:"",small:""}},[r._v("mdi-heart")])],1),n(c,{staticClass:"mx-1",attrs:{fab:"",dark:"",small:"",color:"#FF891B",loading:((e=r.categoryStore.loading_reaction[0])===null||e===void 0?void 0:e.reaction)=="happy"},on:{click:function(u){return r.categoryStore.postReaction({id:r.categoryStore.story.story.id,type:"happy"})}}},[n(i,{attrs:{dark:""}},[r._v("mdi-emoticon-happy-outline")])],1),n(c,{staticClass:"mx-1",attrs:{fab:"",dark:"",small:"",color:"orange",loading:((a=r.categoryStore.loading_reaction[0])===null||a===void 0?void 0:a.reaction)=="sad"},on:{click:function(u){return r.categoryStore.postReaction({id:r.categoryStore.story.story.id,type:"sad"})}}},[n(i,{attrs:{dark:""}},[r._v("mdi-emoticon-sad-outline")])],1),n(c,{staticClass:"mx-1",attrs:{fab:"",dark:"",small:"",color:"red",loading:((s=r.categoryStore.loading_reaction[0])===null||s===void 0?void 0:s.reaction)=="angry"},on:{click:function(u){return r.categoryStore.postReaction({id:r.categoryStore.story.story.id,type:"angry"})}}},[n(i,{attrs:{dark:""}},[r._v("mdi-emoticon-angry-outline")])],1)],1)},et=[];const ot={name:"reaction",data(){return{categoryStore:h()}}},S={};var rt=d(ot,tt,et,!1,st,null,null,null);function st(t){for(let o in S)this[o]=S[o]}const R=function(){return rt.exports}(),at=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));var it=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("span",[t._l(t.categoryStore.reaction_summary,function(a,s,r){return[s=="love"?e(i,{attrs:{dark:"","x-small":"",color:"pink"}},[t._v("mdi-heart")]):t._e(),s=="like"?e(i,{attrs:{dark:"","x-small":"",color:"info"}},[t._v("mdi-thumb-up")]):t._e(),s=="happy"?e(i,{attrs:{dark:"","x-small":"",color:"#FF891B"}},[t._v("mdi-emoticon-happy")]):t._e(),s=="sad"?e(i,{attrs:{dark:"","x-small":"",color:"orange"}},[t._v("mdi-emoticon-sad")]):t._e(),s=="angry"?e(i,{attrs:{dark:"","x-small":"",color:"red"}},[t._v("mdi-emoticon-angry")]):t._e()]})],2)},nt=[];const lt={name:"reaction",data(){return{categoryStore:h()}}},b={};var ct=d(lt,it,nt,!1,ut,null,null,null);function ut(t){for(let o in b)this[o]=b[o]}const O=function(){return ct.exports}(),dt=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));var ht=function(){var t,o,e=this,a=e.$createElement,s=e._self._c||a;return s("small",[(t=e.categoryStore.users_reaction.self)!==null&&t!==void 0&&t.show?s("span",[s("span",[s(N,{staticClass:"py-2 mr-3 ml-1",attrs:{color:"pink",icon:e.showIcon((o=e.categoryStore.users_reaction.self)===null||o===void 0?void 0:o.type),overlap:""}},[e._v(" You"),e.categoryStore.users_reaction.count>1?s("span",[e._v(",")]):e._e()])],1)]):e._e(),s(O),e._l(e.categoryStore.users_reaction.users,function(r,l){return l<2?s("span",{key:l},[e._v(" "+e._s(r)+", ")]):e._e()}),e.categoryStore.users_reaction.count>2?s("span",[e._v("& "),s(V,{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(r){var l=r.on,n=r.attrs;return[s("a",e._g(e._b({staticClass:"text-decoration-underline"},"a",n,!1),l),[e._v("others")])]}}],null,!1,3406861181)},[s("span",[s("small",e._l(e.categoryStore.users_reaction.users,function(r,l){return s("div",{key:"more_"+l},[e._v(" "+e._s(r)+" ")])}),0)])])],1):e._e()],2)},_t=[];const gt={name:"reaction",data(){return{categoryStore:h()}},components:{Reaction:()=>_(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url)}},$={};var mt=d(gt,ht,_t,!1,pt,null,null,null);function pt(t){for(let o in $)this[o]=$[o]}const A=function(){return mt.exports}(),vt=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));var yt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.categoryStore.loading?e(F):t._e(),typeof t.categoryStore.story.category<"u"&&!t.categoryStore.loading?e("div",[e(v,{attrs:{color:"grey lighten-4"}},[t.categoryStore.story.story.image?e(Y,{attrs:{src:t.getPublicImage(t.categoryStore.story.story.image),width:"100%"}}):t._e(),e(y,[e("div",[e(c,{attrs:{color:"accent",to:"/category/"+t.categoryStore.category.category.slug}},[t._v(t._s(t.categoryStore.story.category.category))])],1),e("div",{staticClass:"text-h7 font-weight-bold primary--text pt-4"},[e("h1",[t._v(t._s(t.categoryStore.story.story.title))])]),e(T,{staticClass:"my-4"}),e(v,{attrs:{flat:"",color:"transparent"}},[e(y,[e("div",{staticClass:"text-subtitle-1 primary--text text-justify",domProps:{innerHTML:t._s(t.$options.filters.formatText(t.categoryStore.story.story.data))}})])],1),e("h2",{staticClass:"mt-7"},[t._v("Moral Lesson")]),e("div",{staticClass:"py-7"},[e(X,{staticClass:"text-justify",attrs:{border:"left","colored-border":"",color:"orange"}},[e("div",{domProps:{innerHTML:t._s(t.$options.filters.formatText(t.categoryStore.story.story.moral_lesson))}})])],1),e(w,[e(g,{attrs:{cols:"12",lg:"8",md:"8",sm:"12"}},[e("div",{staticClass:"pa-0",attrs:{fluid:""}},[e("div",{staticClass:"pl-2"},[e(A)],1),e(R)],1)]),e(g,{staticClass:"text-right",attrs:{cols:"12",lg:"4",md:"4",sm:"12"}},[e(i,{attrs:{color:"blue"}},[t._v("mdi-share-variant-outline")]),e("ShareNetwork",{attrs:{network:"facebook",url:t.url_share,title:t.categoryStore.story.story.title,description:t.descriptionSocial,quote:"You will learn most things by looking, but reading gives understanding. - Paul Rand",hashtags:"storiesforyou"}},[e(c,{staticClass:"text-capitalize ml-1",attrs:{color:"info",small:"",type:"submit",outlined:"",dark:""},on:{open:t.open,change:t.change,close:t.close}},[e(i,{attrs:{color:"blue"}},[t._v("mdi-facebook")])],1)],1),e("ShareNetwork",{staticClass:"text-decoration-none",attrs:{network:"twitter",url:t.url_share,title:t.categoryStore.story.story.title,description:t.descriptionSocial,quote:"You will learn most things by looking, but reading gives understanding. - Paul Rand",hashtags:"storiesforyou"}},[e(c,{staticClass:"text-capitalize ml-1 text-decoration-none",attrs:{color:"info",small:"",type:"submit",outlined:"",dark:""},on:{open:t.open,change:t.change,close:t.close}},[e(i,{attrs:{color:"blue"}},[t._v("mdi-twitter")])],1)],1)],1)],1),e(B)],1)],1)],1):t._e()],1)},ft=[];const St={name:"Home",metaInfo(){const t=this.categoryStore.story&&this.categoryStore.story.story&&this.categoryStore.story.story.moral_lesson?this.categoryStore.story.story.title:"storiesforyou",o=this.categoryStore.story&&this.categoryStore.story.story&&this.categoryStore.story.story.moral_lesson?this.removeHtmlTags(this.categoryStore.story.story.moral_lesson):this.descriptionSocial;return{title:t,titleTemplate:"%s | storiesforyou",description:o,htmlAttrs:{lang:"en",amp:!0},meta:[{vmid:t,name:t,content:o},{vmid:"og:title",property:"og:title",content:t&&t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),template:e=>`${e} | storiesforyou`},{vmid:"og:image",property:"og:image",content:"https://www.admin.storiesforyou.net/images/icon/icon.png"}]}},async created(){await this.fetchData()},methods:{async fetchData(){try{await this.categoryStore.getStory({name:this.$route.params.name,title:this.$route.query.q})}catch(t){console.error("Error fetching data:",t)}},open(){console.log("open")},change(){console.log("change")},close(){console.log("close")},removeHtmlTags(t){return t.replace(/<[^>]*>/g,"")}},watch:{$route:function(){this.fetchData()}},data(){return{categoryStore:h(),url_share:window.location.href,descriptionSocial:"When you read an online story, you're not just reading it on your own. You're joining a community of readers and authors who are passionate about stories. You can share your thoughts on the story with other readers, and you can even leave comments for the story."}},components:{ReactedBy:()=>_(()=>Promise.resolve().then(()=>vt),void 0,import.meta.url),ButtonReaction:()=>_(()=>Promise.resolve().then(()=>at),void 0,import.meta.url),SuggestedStory:()=>_(()=>Promise.resolve().then(()=>K),void 0,import.meta.url)}},x={};var bt=d(St,yt,ft,!1,$t,null,null,null);function $t(t){for(let o in x)this[o]=x[o]}const Tt=function(){return bt.exports}();export{Tt as default};

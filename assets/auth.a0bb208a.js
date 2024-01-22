import{T as c}from"./index.b95075c4.js";import{m as p,n as g,P as v,d as w,e as x,h as _,c as u,l as I,L as y,M as r,K as d}from"./index.76271238.js";import{C as V,B as C}from"./VTextField.7091d725.js";const o=p(V,v,g).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:this.value!==void 0?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return this.internalValue==null?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const t=this.internalValue;return Array.isArray(t)?e=>t.some(s=>this.valueComparator(s,e)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&w("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return t.value===void 0?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),s=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(s)<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(n=>n!==s):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const s=this.getValue(t,e);t.isActive=this.toggleMethod(s)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const s=e.find(n=>!n.disabled);if(!s)return;const i=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,i))},updateMultiple(t){const s=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),i=s.findIndex(n=>this.valueComparator(n,t));this.mandatory&&i>-1&&s.length-1<1||this.max!=null&&i<0&&s.length+1>this.max||(i>-1?s.splice(i,1):s.push(t),this.internalValue=s)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});o.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var B=o.extend({name:"v-window",directives:{Touch:c},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...o.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",s=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return`v-window-${t}${s}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){var i,n,a;const h={click:m=>{m.stopPropagation(),this.changedByDelimiters=!0,s()}},l={"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},f=(a=(n=(i=this.$scopedSlots)[t])===null||n===void 0?void 0:n.call(i,{on:h,attrs:l}))!==null&&a!==void 0?a:[this.$createElement(x,{props:{icon:!0},attrs:l,on:h},[this.$createElement(_,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:`v-window__${t}`},f)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&typeof e=="string"){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&typeof s=="string"){const i=this.genIcon("next",s,this.next);i&&t.push(i)}return t},getNextIndex(t){const e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const s=this.items.length,i=s-1;return s<=2?t<e:t===i&&e===0?!0:t===0&&e===i?!1:t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const s=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:i=>{i.stopPropagation()},start:i=>{i.stopPropagation()}};e.directives.push({name:"touch",value:s})}return t("div",e,[this.genContainer()])}});const T=p(C,I("windowGroup","v-window-item","v-window"));var b=T.extend().extend().extend({name:"v-window-item",directives:{Touch:c},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?typeof this.reverseTransition!="undefined"?this.reverseTransition||"":this.windowGroup.computedTransition:typeof this.transition!="undefined"?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){!this.inTransition||(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,this.windowGroup.transitionCount===0&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,this.windowGroup.transitionCount===0&&(this.windowGroup.transitionHeight=u(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){!this.inTransition||this.$nextTick(()=>{!this.computedTransition||!this.inTransition||(this.windowGroup.transitionHeight=u(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}});const k=y({id:"auth",state:()=>({user:[],reset_password_details:"",csrf_token:"",loading:!1,errors_login:[],errors_reg:[],errors_reset:[]}),actions:{async getCSRFToken(){await r.getCSRFToken().then(t=>{this.csrf_token=t.data})},async handleRegister(t){this.loading=!0,this.errors_reg=[],await this.getCSRFToken(),t._token=this.csrf_token,r.register(t).then(e=>{this.user=e.data.user,this.loading=!1,d.push({name:"Dashboard"})}).catch(e=>{var s,i;this.user_loading=!1,this.loading=!1,((s=e.response.data)==null?void 0:s.errors)==null?this.errors_reg.push([e.response.data.message]):this.errors_reg=(i=e.response.data)==null?void 0:i.errors})},async handleLogin(t){this.loading=!0,this.errors_login=[],await this.getCSRFToken(),t._token=this.csrf_token,r.login(t).then(e=>{console.log("duccess",e.data.user),this.user=e.data,this.loading=!1,d.push({name:"Dashboard"})}).catch(e=>{this.errors_login=e.response.data.errors,this.loading=!1})},async handleForgotPassword(t){this.loading=!0,this.errors_reset=[],this.reset_password_details="",await this.getCSRFToken(),t._token=this.csrf_token,r.forgotPassword(t).then(e=>{this.reset_password_details=e.data.status,this.loading=!1}).catch(e=>{this.errors_reset=e.response.data.errors,this.loading=!1})},async handleResetPassword(t){this.loading=!0,this.errors_reset=[],this.reset_password_details="",await this.getCSRFToken(),t._token=this.csrf_token,r.resetPassword(t).then(e=>{this.reset_password_details=e.data.message,this.loading=!1}).catch(e=>{this.errors_reset=e.response.data.errors,this.loading=!1})}}});export{B as _,b as a,k as u};

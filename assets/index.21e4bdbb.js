import{I as v,J as p,g as c,m as n,T as m,D as g,V as b,u as r,K as A,L as w,d as y,c as l,f as O}from"./index.f60d97e9.js";const x=n(g,m),f=x.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=v(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&p(`The activator slot must be bound, try '<template v-slot:activator="{ on }"><v-btn v-on="on">'`,this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=c(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=e=>{this.getActivator(e),this.runDelay("open")},t.mouseleave=e=>{this.getActivator(e),this.runDelay("close")}):this.openOnClick&&(t.click=e=>{const i=this.getActivator(e);i&&i.focus(),e.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=e=>{this.getActivator(e),e.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const i=this.internalActivator?this.$el:document;typeof this.activator=="string"?e=i.querySelector(this.activator):this.activator.$el?e=this.activator.$el:e=this.activator}else if(this.activatorNode.length===1||this.activatorNode.length&&!t){const i=this.activatorNode[0].componentInstance;i&&i.$options.mixins&&i.$options.mixins.some(s=>s.options&&["activatable","menuable"].includes(s.options.name))?e=i.getActivator():e=this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(e==null?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot(){return c(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}});function u(t){const e=[];for(let i=0;i<t.length;i++){const s=t[i];s.isActive&&s.isDependent?e.push(s):e.push(...u(s.$children))}return e}const T=n().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?u(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let i=0;i<e.length;i++)t.push(...e[i].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}}),N=b.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if(typeof window>"u")return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:r(t);return e==null?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,i=[this.stackMinZIndex,r(e)],s=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let o=0;o<s.length;o++)t.includes(s[o])||i.push(r(s[o]));return Math.max(...i)}}});function E(t){const e=typeof t;return e==="boolean"||e==="string"?!0:t.nodeType===Node.ELEMENT_NODE}function d(t){t.forEach(e=>{e.elm&&e.elm.parentNode&&e.elm.parentNode.removeChild(e.elm)})}const D=n(A).extend({name:"detachable",props:{attach:{default:!1,validator:E},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick(()=>{this.activatorNode&&(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach(e=>{if(!e.elm||!this.$el.parentNode)return;const i=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(e.elm,i)})})},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver(i=>{i.some(s=>Array.from(s.removedNodes).includes(this.$el))&&(e.disconnect(),d(t))});e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else d(t)}},methods:{getScopeIdAttrs(){const t=w(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||this.attach===""||this.attach===!0||this.attach==="attach")return;let t;if(this.attach===!1?t=document.querySelector("[data-app]"):typeof this.attach=="string"?t=document.querySelector(this.attach):t=this.attach,!t){y(`Unable to locate target ${this.attach||"[data-app]"}`,this);return}t.appendChild(this.$refs.content),this.hasDetached=!0}}}),$=n(N,O(["top","right","bottom","left","absolute"]),f,D),Y=$.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(this.attach!==!1?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width);let o=0;if(o+=i,(this.left||this.$vuetify.rtl&&!this.right)&&(o-=s-t.width),this.offsetX){const a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));o+=this.left?-a:t.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),this.attach!==!1?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow=typeof window<"u",this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return l(this.attach!==!1?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return l(this.attach!==!1?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return(!this.left||this.right)&&i>0?t=Math.max(t-i,0):t=Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.absoluteYOffset+e,s=this.dimensions.activator,o=this.dimensions.content.height,a=t+o,h=i<a;return h&&this.offsetOverflow&&s.top>o?t=this.pageYOffset+(s.top-o):h&&!this.allowOverflow?t=i-o-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate(){!this.hasWindow||this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(this.attach!==!1){this.activatorFixed=!1;return}let t=this.getActivator();for(;t;){if(window.getComputedStyle(t).position==="fixed"){this.activatorFixed=!0;return}t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=f.options.methods.genActivatorListeners.call(this),e=t.click;return e&&(t.click=i=>{this.openOnClick&&e&&e(i),this.absoluteX=i.clientX,this.absoluteY=i.clientY}),t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(this.attach!==!1){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;if(!e||e.style.display!=="none"){t();return}e.style.display="inline-block",t(),e.style.display="none"})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow=typeof window<"u",this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,this.attach!==!1?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const e=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+e.top,t.activator.top-=this.relativeYOffset,t.activator.left-=window.pageXOffset+e.left}t.content=this.measure(this.$refs.content)}this.dimensions=t})}}});export{f as A,T as D,Y as M,N as S,D as a};

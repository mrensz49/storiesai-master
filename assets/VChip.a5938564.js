import{m as n,t as r,u as c,i as h,s as l,U as p,C as u,b as d,h as a,W as g}from"./index.9fd246dd.js";const b=n(u,p,l,h,c("chipGroup"),r("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...l.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(l.options.computed.isClickable.call(this)||this.chipGroup)}},created(){[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach(([i,s])=>{this.$attrs.hasOwnProperty(i)&&d(i,s,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(g,t)},genClose(){return this.$createElement(a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const i=[this.genContent()];let{tag:s,data:e}=this.generateRouteLink();e.attrs={...e.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:e.attrs.tabindex},e.directives.push({name:"show",value:this.active}),e=this.setBackgroundColor(this.color,e);const o=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(o,e),i)}});export{b as _};

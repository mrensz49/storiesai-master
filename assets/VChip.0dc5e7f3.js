import{m as n,l as r,n as c,o as h,R as l,S as p,C as u,b as d,h as a,H as g}from"./index.51b9211f.js";var b=n(u,p,l,h,c("chipGroup"),r("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...l.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(l.options.computed.isClickable.call(this)||this.chipGroup)}},created(){[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach(([i,s])=>{this.$attrs.hasOwnProperty(i)&&d(i,s,this)})},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(g,e)},genClose(){return this.$createElement(a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const i=[this.genContent()];let{tag:s,data:t}=this.generateRouteLink();t.attrs={...t.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:t.attrs.tabindex},t.directives.push({name:"show",value:this.active}),t=this.setBackgroundColor(this.color,t);const o=this.textColor||this.outlined&&this.color;return e(s,this.setTextColor(o,t),i)}});export{b as _};

import{o as r}from"./index.46601a35.js";var a=r.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return(!this.$attrs.role||this.$attrs.role==="separator")&&(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}});export{a as _};

import{i}from"./index.ae2df37e.js";const s=i.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return(!this.$attrs.role||this.$attrs.role==="separator")&&(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}});export{s as _};

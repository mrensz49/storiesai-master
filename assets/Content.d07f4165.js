import{a9 as i,F as s,_ as c,G as a,e as _,z as y,A as l}from"./index.0dc60f27.js";import{_ as r}from"./VDivider.f2f9ca1d.js";import{_ as g}from"./VAlert.8ae1dc4e.js";var u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.categoryStore.loading?o(i):t._e(),typeof t.categoryStore.story.category<"u"&&!t.categoryStore.loading?o("div",[o(s,{attrs:{color:"grey lighten-4"}},[t.categoryStore.story.story.image?o(c,{attrs:{src:t.getPublicImage(t.categoryStore.story.story.image),width:"100%"}}):t._e(),o(a,[o("div",[o(_,{attrs:{color:"accent",to:"/category/"+t.categoryStore.category.category.slug}},[t._v(t._s(t.categoryStore.story.category.category))])],1),o("div",{staticClass:"text-h4 font-weight-bold primary--text pt-4"},[o("h4",[t._v(t._s(t.categoryStore.story.story.title))])]),o(r,{staticClass:"my-4"}),o(s,{attrs:{flat:"",color:"transparent"}},[o(a,[o("div",{staticClass:"text-subtitle-1 primary--text text-justify",domProps:{innerHTML:t._s(t.categoryStore.story.story.data)}})])],1),o(r,{staticClass:"my-4 pb-2"}),o("h2",[t._v("Moral Lesson")]),o("div",{staticClass:"py-7"},[o(g,{staticClass:"text-justify",attrs:{border:"left","colored-border":"",color:"orange"}},[o("div",{domProps:{innerHTML:t._s(t.categoryStore.story.story.moral_lesson)}})])],1),t.categoryStore.story.story.image_source?o(r,{staticClass:"my-2 pb-2"}):t._e(),o("small",[o("div",{domProps:{innerHTML:t._s(t.categoryStore.story.story.image_source)}})])],1)],1)],1):t._e()],1)},m=[];const p={name:"Home",mounted(){this.categoryStore.getStory({name:this.$route.params.name,title:this.$route.query.q})},data(){return{categoryStore:l()}},watch:{$route:function(){this.categoryStore.getStory({name:this.$route.params.name,title:this.$route.query.q})}}},n={};var d=y(p,u,m,!1,v,null,null,null);function v(t){for(let e in n)this[e]=n[e]}const C=function(){return d.exports}();export{C as default};

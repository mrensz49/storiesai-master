import{aa as c,F as s,_ as i,G as a,e as _,J as y,z as l,A as g}from"./index.05c05d0e.js";import{_ as r}from"./VDivider.d33c0631.js";var u=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.categoryStore.loading?e(c):t._e(),typeof t.categoryStore.story.category<"u"&&!t.categoryStore.loading?e("div",[e(s,{attrs:{color:"grey lighten-4"}},[t.categoryStore.story.story.image?e(i,{attrs:{src:t.getPublicImage(t.categoryStore.story.story.image),width:"100%"}}):t._e(),e(a,[e("div",[e(_,{attrs:{color:"accent",to:"/category/"+t.categoryStore.category.category.slug}},[t._v(t._s(t.categoryStore.story.category.category))])],1),e("div",{staticClass:"text-h4 font-weight-bold primary--text pt-4"},[e("h4",[t._v(t._s(t.categoryStore.story.story.title))])]),e(r,{staticClass:"my-4"}),e(s,{attrs:{flat:"",color:"transparent"}},[e(a,[e("div",{staticClass:"text-subtitle-1 primary--text text-justify",domProps:{innerHTML:t._s(t.categoryStore.story.story.data)}})])],1),e(r,{staticClass:"my-4 pb-2"}),e("h2",[t._v("Moral Lesson")]),e("div",{staticClass:"py-7"},[e(y,{staticClass:"text-justify",attrs:{border:"left","colored-border":"",color:"orange"}},[e("div",{domProps:{innerHTML:t._s(t.categoryStore.story.story.moral_lesson)}})])],1),t.categoryStore.story.story.image_source?e(r,{staticClass:"my-2 pb-2"}):t._e(),e("small",[e("div",{domProps:{innerHTML:t._s(t.categoryStore.story.story.image_source)}})])],1)],1)],1):t._e()],1)},m=[];const p={name:"Home",mounted(){this.categoryStore.getStory({name:this.$route.params.name,title:this.$route.query.q})},data(){return{categoryStore:g()}},watch:{$route:function(){this.categoryStore.getStory({name:this.$route.params.name,title:this.$route.query.q})}}},n={};var d=l(p,u,m,!1,v,null,null,null);function v(t){for(let o in n)this[o]=n[o]}const h=function(){return d.exports}();export{h as default};

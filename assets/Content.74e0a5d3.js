import{a5 as a,E as s,F as n,e as c,z as i,A as _}from"./index.49c86b54.js";import{_ as l}from"./VDivider.04022d87.js";import{_ as u}from"./VAlert.5b8ce677.js";var y=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.categoryStore.loading?e(a):t._e(),typeof t.categoryStore.story.category!="undefined"&&!t.categoryStore.loading?e("div",[e(s,{attrs:{flat:"",color:"transparent"}},[e(n,[e("div",[e(c,{attrs:{color:"accent",to:"/category/"+t.categoryStore.category.category.slug}},[t._v(t._s(t.categoryStore.story.category.category))])],1),e("div",{staticClass:"text-h4 font-weight-bold primary--text pt-4"},[e("h4",[t._v(t._s(t.categoryStore.story.story.title))])]),e(l,{staticClass:"my-4"}),e("div",{staticClass:"text-subtitle-1 primary--text font-weight-medium",domProps:{innerHTML:t._s(t.categoryStore.story.story.data)}}),e("div",{staticClass:"py-7"},[e(u,{staticClass:"text-center",attrs:{border:"left","colored-border":"",color:"accent"}},[e("div",{domProps:{innerHTML:t._s(t.categoryStore.story.story.moral_lesson)}})])],1)],1)],1)],1):t._e()],1)},m=[];const g={name:"Home",mounted(){this.categoryStore.getStory({name:this.$route.params.name,title:this.$route.query.q})},data(){return{categoryStore:_()}},watch:{$route:function(){this.categoryStore.getStory({name:this.$route.params.name,title:this.$route.query.q})}}},r={};var p=i(g,y,m,!1,d,null,null,null);function d(t){for(let o in r)this[o]=r[o]}var h=function(){return p.exports}();export{h as default};

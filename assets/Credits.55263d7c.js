import{q as c,A as o,B as a,N as l,P as u,Q as d,a as p,E as g,F as m}from"./index.807c5bc0.js";import{_ as f}from"./VSimpleTable.048cd2e4.js";import{_ as h}from"./VDivider.0334acad.js";c("v-table__overflow");var v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t(o,[t(a,{attrs:{cols:"12",lg:"8",xl:"8"}},[t("div",[t("div",[t("div",[t("h2",{staticClass:"text-h5 font-weight-bold"},[e._v("Credits")]),t("h4",{staticClass:"text-h6"},[e._v("\xA0")])]),t(h,{staticClass:"my-4 mt-n4"}),e.categoryStore.loading?t(l):e._e(),t(o,[t(a,{attrs:{cols:"12",md:"12",lg:"12"}},[t(u,{attrs:{flat:"",hover:""}},[t(d,[t(f,{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left",attrs:{width:"30%"}},[e._v("Image")]),t("th",{staticClass:"text-left"},[e._v("Link")])])]),t("tbody",[e._l(e.removeDuplicateObjects(e.categoryStore.credits),function(s){return e._l(s,function(n,_){return t("tr",{key:_+"_"+n.id},[t("td",{staticClass:"py-3"},[t(p,{staticClass:"rounded-sm",attrs:{"aspect-ratio":16/9,src:e.getPublicImageThumbnail(n.image)}})],1),t("td",[t("small",[e._v(e._s(n.image_source))])])])})})],2)]},proxy:!0}])})],1)],1)],1)],1)],1)])])],1)],1)},y=[];const S={name:"Category",mounted(){this.categoryStore.getCredits(1),this.processInfiniteScroll()},data(){return{categoryStore:m(),temp_current_page:""}},methods:{processInfiniteScroll(){window.addEventListener("scroll",()=>{window.innerHeight+Math.round(window.scrollY)+1>=document.body.offsetHeight&&(this.temp_current_page!=this.categoryStore.current_page&&this.categoryStore.getCredits(this.categoryStore.current_page),this.temp_current_page=this.categoryStore.current_page)})},removeDuplicateObjects(e){return e.filter((r,t,s)=>s.findIndex(n=>JSON.stringify(r)===JSON.stringify(n))===t)}}},i={};var C=g(S,v,y,!1,x,null,null,null);function x(e){for(let r in i)this[r]=i[r]}const O=function(){return C.exports}();export{O as default};

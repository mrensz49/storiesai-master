import{F as n,L as b,e as l,M as y,h as C,G as f,I as g,E as v,N as x,O as _,P as u,_ as c,Q as i,J as h}from"./index.1c9245ed.js";import{_ as $}from"./VDivider.81d08d8f.js";var w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.authStore.is_logged_in&&!t.authStore.user.email_verified_at?e(n,{attrs:{cols:"12",lg:"12",md:"12"}},[e(b,{staticClass:"mb-10",attrs:{border:"bottom","colored-border":"",type:"warning",elevation:"20"}},[e("span",{staticClass:"text-h5"},[t._v("Thanks for signing up!")]),t._v(" "),e("br"),e("p",{staticClass:"text-justify"},[t._v(" Before getting started, could you verify your email address by clicking on the link we just emailed to you? "),e("br")]),t._v(" If you didn't receive the email: "),e("br"),e("span",[t._v("\u2022")]),t._v(" Check your email "),e("span",{staticClass:"font-italic font-weight-bold text-decoration-underline"},[t._v(t._s(t.authStore.user.email))]),t._v(" for typos. "),e("br"),e("span",[t._v("\u2022")]),t._v(" Check the SPAM folder of your mailbox. "),e("br"),e("span",[t._v("\u2022")]),t._v(" Or we will gladly send you another. "),t.authStore.verification_loading?e(l,{staticClass:"btn-sm ml-3"},[e(y,{staticClass:"mr-2",attrs:{size:20,color:"amber",indeterminate:""}}),t._v(" Resending verification link... ")],1):t._e(),!t.authStore.verification_loading&&!t.authStore.verified?e(l,{staticClass:"btn-sm ml-4 mb-3",attrs:{color:"warning",disabled:t.authStore.verification_loading},on:{click:function(o){return t.authStore.handleResendVerification()}}},[t._v(" Resend verification ")]):t._e(),t.authStore.verified?e("span",[e(l,{staticClass:"ml-4 mb-3 mr-2",attrs:{color:"success",fab:"",small:""}},[e(C,[t._v("mdi-check")])],1),e("small",[t._v("check you email.")])],1):t._e(),t.authStore.errors_verification.length?e("p",{staticStyle:{color:"#B71C1C"}},[t._v(t._s(t.authStore.errors_verification))]):t._e()],1),e("p",{staticStyle:{color:"#B71C1C"}},[t._v("Note: Dashboard is accessable only if email is verified.")])],1):t._e()},k=[];const R={name:"VerifiyEmail",data(){return{authStore:g()}}},p={};var E=f(R,w,k,!1,V,null,null,null);function V(t){for(let s in p)this[s]=p[s]}const S=function(){return E.exports}(),j=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),d="https://storiesforyou.net/assets/viewed-story.3de7ba39.jpg";var P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e(v,[e(n,{attrs:{cols:"12",lg:"8",xl:"8"}},[e("div",[e("div",[e("div",[e("h2",{staticClass:"text-h4 font-weight-bold"},[t._v("My Dashboard")]),e("h4",{staticClass:"text-h6"},[t._v("Your recent and upcoming activities.")])]),e($,{staticClass:"my-4"}),e(S),t.authStore.loading?e(x):t._e(),e(v,[e(n,{attrs:{cols:"12",md:"6",lg:"4"}},[e(_,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(o){var a,r=o.hover;return[e("div",[e(u,{attrs:{flat:"",color:r?"white":"transparent",elevation:r?12:0,hover:"",to:"/list/visited",disabled:!((a=t.authStore.user)!==null&&a!==void 0&&a.email_verified_at)}},[e(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:d,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[e(i,[e(l,{attrs:{color:"accent"}},[t._v("Visited Stories")])],1)],1),e(i,[e("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t._v(" "+t._s(t.authStore.count_read_stories)+" visited stories ")])])],1)],1)]}}])})],1),e(n,{attrs:{cols:"12",md:"6",lg:"4"}},[e(_,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(o){var a,r=o.hover;return[e("div",[e(u,{attrs:{flat:"",color:r?"white":"transparent",elevation:r?12:0,hover:"",to:"/list/unvisited",disabled:!((a=t.authStore.user)!==null&&a!==void 0&&a.email_verified_at)}},[e(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:d,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[e(i,[e(l,{attrs:{color:"accent"}},[t._v("Unvisited Stories")])],1)],1),e(i,[e("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t._v(" "+t._s(t.authStore.count_unread_stories>15?"15+":t.authStore.count_unread_stories)+" unvisited stories ")])])],1)],1)]}}])})],1),e(n,{attrs:{cols:"12",md:"6",lg:"4"}},[e(_,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(o){var a,r=o.hover;return[e("div",[e(u,{attrs:{flat:"",color:r?"white":"transparent",elevation:r?12:0,hover:"",to:"/list/latest",disabled:!((a=t.authStore.user)!==null&&a!==void 0&&a.email_verified_at)}},[e(c,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:d,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[e(i,[e(l,{attrs:{color:"accent"}},[t._v("Latest Stories")])],1)],1),e(i,[e("div",{staticClass:"text-h5 font-weight-bold primary--text"},[t._v(" "+t._s(t.authStore.count_latest_stories)+" latest stories ")])])],1)],1)]}}])})],1)],1)],1)])]),e(n,[e("div",{staticClass:"pt-10"},[e("siderbar")],1)])],1)],1)},M=[];const O={name:"Category",mounted(){this.authStore.getCountReadStories(),this.authStore.getCountUnReadStories(),this.authStore.getCountLatestStories()},data(){return{authStore:g()}},components:{siderbar:()=>h(()=>import("./sidebar.cc7adc9b.js"),["assets/sidebar.cc7adc9b.js","assets/index.1c9245ed.js","assets/index.24f43d83.css","assets/VDivider.81d08d8f.js","assets/VDivider.3d6d3afb.css"]),ResendVerificationEmail:()=>h(()=>Promise.resolve().then(()=>j),void 0)}},m={};var D=f(O,P,M,!1,L,null,null,null);function L(t){for(let s in m)this[s]=m[s]}const I=function(){return D.exports}();export{I as default};

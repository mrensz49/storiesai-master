import{B as n,e as l,M as b,h as y,E as f,G as g,A as v,N as x,O as _,P as c,a as u,Q as i,H as h}from"./index.d08e8ea1.js";import{_ as C}from"./VAlert.f9a2b5e9.js";import{_ as $}from"./VDivider.2dafec1b.js";var w=function(){var e=this,o=e.$createElement,t=e._self._c||o;return e.authStore.is_logged_in&&!e.authStore.user.email_verified_at?t(n,{attrs:{cols:"12",lg:"12",md:"12"}},[t(C,{staticClass:"mb-10",attrs:{border:"bottom","colored-border":"",type:"warning",elevation:"20"}},[t("span",{staticClass:"text-h5"},[e._v("Thanks for signing up!")]),e._v(" "),t("br"),t("p",{staticClass:"text-justify"},[e._v(" Before getting started, could you verify your email address by clicking on the link we just emailed to you? "),t("br")]),e._v(" If you didn't receive the email: "),t("br"),t("span",[e._v("\u2022")]),e._v(" Check your email "),t("span",{staticClass:"font-italic font-weight-bold text-decoration-underline"},[e._v(e._s(e.authStore.user.email))]),e._v(" for typos. "),t("br"),t("span",[e._v("\u2022")]),e._v(" Check the SPAM folder of your mailbox. "),t("br"),t("span",[e._v("\u2022")]),e._v(" Or we will gladly send you another. "),e.authStore.verification_loading?t(l,{staticClass:"btn-sm ml-3"},[t(b,{staticClass:"mr-2",attrs:{size:20,color:"amber",indeterminate:""}}),e._v(" Resending verification link... ")],1):e._e(),!e.authStore.verification_loading&&!e.authStore.verified?t(l,{staticClass:"btn-sm ml-4 mb-3",attrs:{color:"warning",disabled:e.authStore.verification_loading},on:{click:function(s){return e.authStore.handleResendVerification()}}},[e._v(" Resend verification ")]):e._e(),e.authStore.verified?t("span",[t(l,{staticClass:"ml-4 mb-3 mr-2",attrs:{color:"success",fab:"",small:""}},[t(y,[e._v("mdi-check")])],1),t("small",[e._v("check you email.")])],1):e._e(),e.authStore.errors_verification.length?t("p",{staticStyle:{color:"#b71c1c"}},[e._v(" "+e._s(e.authStore.errors_verification)+" ")]):e._e()],1),t("p",{staticStyle:{color:"#b71c1c"}},[e._v(" Note: Dashboard is accessable only if email is verified. ")])],1):e._e()},k=[];const R={name:"VerifiyEmail",data(){return{authStore:g()}}},p={};var E=f(R,w,k,!1,V,null,null,null);function V(e){for(let o in p)this[o]=p[o]}const S=function(){return E.exports}(),j=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),d="https://storiesforyou.net/assets/viewed-story.3de7ba39.jpg";var P=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t(v,[t(n,{attrs:{cols:"12",lg:"8",xl:"8"}},[t("div",[t("div",[t("div",[t("h2",{staticClass:"text-h4 font-weight-bold"},[e._v("My Dashboard")]),t("h4",{staticClass:"text-h6"},[e._v("Your recent and upcoming activities.")])]),t($,{staticClass:"my-4"}),t(S),e.authStore.loading?t(x):e._e(),t(v,[t(n,{attrs:{cols:"12",md:"6",lg:"4"}},[t(_,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(s){var a,r=s.hover;return[t("div",[t(c,{attrs:{flat:"",color:r?"white":"transparent",elevation:r?12:0,hover:"",to:"/list/visited",disabled:!((a=e.authStore.user)!==null&&a!==void 0&&a.email_verified_at)}},[t(u,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:d,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(i,[t(l,{attrs:{color:"accent"}},[e._v("Visited Stories")])],1)],1),t(i,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(e.authStore.count_read_stories)+" visited stories ")])])],1)],1)]}}])})],1),t(n,{attrs:{cols:"12",md:"6",lg:"4"}},[t(_,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(s){var a,r=s.hover;return[t("div",[t(c,{attrs:{flat:"",color:r?"white":"transparent",elevation:r?12:0,hover:"",to:"/list/unvisited",disabled:!((a=e.authStore.user)!==null&&a!==void 0&&a.email_verified_at)}},[t(u,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:d,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(i,[t(l,{attrs:{color:"accent"}},[e._v("Unvisited Stories")])],1)],1),t(i,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(e.authStore.count_unread_stories>15?"15+":e.authStore.count_unread_stories)+" unvisited stories ")])])],1)],1)]}}])})],1),t(n,{attrs:{cols:"12",md:"6",lg:"4"}},[t(_,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(s){var a,r=s.hover;return[t("div",[t(c,{attrs:{flat:"",color:r?"white":"transparent",elevation:r?12:0,hover:"",to:"/list/latest",disabled:!((a=e.authStore.user)!==null&&a!==void 0&&a.email_verified_at)}},[t(u,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:d,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(i,[t(l,{attrs:{color:"accent"}},[e._v("Latest Stories")])],1)],1),t(i,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(e.authStore.count_latest_stories)+" latest stories ")])])],1)],1)]}}])})],1),t(n,{attrs:{cols:"12",md:"6",lg:"4"}},[t(_,{attrs:{"open-delay":"50","close-delay":"50"},scopedSlots:e._u([{key:"default",fn:function(s){var a,r=s.hover;return[t("div",[t(c,{attrs:{flat:"",color:r?"white":"transparent",elevation:r?12:0,hover:"",to:"/list/upcoming",disabled:!((a=e.authStore.user)!==null&&a!==void 0&&a.email_verified_at)}},[t(u,{staticClass:"elevation-2",staticStyle:{"border-radius":"16px"},attrs:{src:d,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)",height:"200px"}},[t(i,[t(l,{attrs:{color:"accent"}},[e._v("Upcoming Stories")])],1)],1),t(i,[t("div",{staticClass:"text-h5 font-weight-bold primary--text"},[e._v(" "+e._s(e.authStore.count_upcoming_stories)+" upcoming stories ")])])],1)],1)]}}])})],1)],1)],1)])]),t(n,[t("div",{staticClass:"pt-10"},[t("siderbar")],1)])],1)],1)},M=[];const O={name:"Category",mounted(){this.authStore.getCountReadStories(),this.authStore.getCountUnReadStories(),this.authStore.getCountLatestStories(),this.authStore.getCountUpcomingStories()},data(){return{authStore:g()}},components:{siderbar:()=>h(()=>import("./sidebar.d8c9eff9.js"),["assets/sidebar.d8c9eff9.js","assets/index.d08e8ea1.js","assets/index.e3d769c2.css","assets/VAlert.f9a2b5e9.js","assets/VAlert.904eb20e.css","assets/VDivider.2dafec1b.js","assets/VDivider.3d6d3afb.css","assets/sidebar.2b5c1253.css"]),ResendVerificationEmail:()=>h(()=>Promise.resolve().then(()=>j),void 0)}},m={};var A=f(O,P,M,!1,D,null,null,null);function D(e){for(let o in m)this[o]=m[o]}const z=function(){return A.exports}();export{z as default};

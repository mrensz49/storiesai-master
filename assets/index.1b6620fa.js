import{K as h,a as d,r as a}from"./index.4bc8a28e.js";function x(t){if(typeof t.getRootNode!="function"){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}const o=t.getRootNode();return o!==document&&o.getRootNode({composed:!0})!==document?null:o}function f(t,o,e){const n=o.value,s=o.options||{passive:!0};window.addEventListener("resize",n,s),t._onResize=Object(t._onResize),t._onResize[e.context._uid]={callback:n,options:s},(!o.modifiers||!o.modifiers.quiet)&&n()}function l(t,o,e){var n;if(!(!((n=t._onResize)===null||n===void 0)&&n[e.context._uid]))return;const{callback:s,options:c}=t._onResize[e.context._uid];window.removeEventListener("resize",s,c),delete t._onResize[e.context._uid]}const r={inserted:f,unbind:l},E=r,m=t=>{const{touchstartX:o,touchendX:e,touchstartY:n,touchendY:s}=t,c=.5,i=16;t.offsetX=e-o,t.offsetY=s-n,Math.abs(t.offsetY)<c*Math.abs(t.offsetX)&&(t.left&&e<o-i&&t.left(t),t.right&&e>o+i&&t.right(t)),Math.abs(t.offsetX)<c*Math.abs(t.offsetY)&&(t.up&&s<n-i&&t.up(t),t.down&&s>n+i&&t.down(t))};function _(t,o){const e=t.changedTouches[0];o.touchstartX=e.clientX,o.touchstartY=e.clientY,o.start&&o.start(Object.assign(t,o))}function v(t,o){const e=t.changedTouches[0];o.touchendX=e.clientX,o.touchendY=e.clientY,o.end&&o.end(Object.assign(t,o)),m(o)}function X(t,o){const e=t.changedTouches[0];o.touchmoveX=e.clientX,o.touchmoveY=e.clientY,o.move&&o.move(Object.assign(t,o))}function Y(t){const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:e=>_(e,o),touchend:e=>v(e,o),touchmove:e=>X(e,o)}}function b(t,o,e){const n=o.value,s=n.parent?t.parentElement:t,c=n.options||{passive:!0};if(!s)return;const i=Y(o.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[e.context._uid]=i,h(i).forEach(u=>{s.addEventListener(u,i[u],c)})}function g(t,o,e){const n=o.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const s=n._touchHandlers[e.context._uid];h(s).forEach(c=>{n.removeEventListener(c,s[c])}),delete n._touchHandlers[e.context._uid]}const R={inserted:b,unbind:g},H=R,B=d.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&a("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}});export{B,E as R,H as T,x as a};

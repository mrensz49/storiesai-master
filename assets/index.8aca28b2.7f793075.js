import{t as r}from"./index.971bed5f.js";function g(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function a(e,t,n){const o=t.value,c=t.options||{passive:!0};window.addEventListener("resize",o,c),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:o,options:c},(!t.modifiers||!t.modifiers.quiet)&&o()}function d(e,t,n){var o;if(!((o=e._onResize)!=null&&o[n.context._uid]))return;const{callback:c,options:s}=e._onResize[n.context._uid];window.removeEventListener("resize",c,s),delete e._onResize[n.context._uid]}const f={inserted:a,unbind:d};var R=f;const h=e=>{const{touchstartX:t,touchendX:n,touchstartY:o,touchendY:c}=e,s=.5,u=16;e.offsetX=n-t,e.offsetY=c-o,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&n<t-u&&e.left(e),e.right&&n>t+u&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&c<o-u&&e.up(e),e.down&&c>o+u&&e.down(e))};function l(e,t){const n=e.changedTouches[0];t.touchstartX=n.clientX,t.touchstartY=n.clientY,t.start&&t.start(Object.assign(e,t))}function v(e,t){const n=e.changedTouches[0];t.touchendX=n.clientX,t.touchendY=n.clientY,t.end&&t.end(Object.assign(e,t)),h(t)}function m(e,t){const n=e.changedTouches[0];t.touchmoveX=n.clientX,t.touchmoveY=n.clientY,t.move&&t.move(Object.assign(e,t))}function p(e){const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>l(n,t),touchend:n=>v(n,t),touchmove:n=>m(n,t)}}function _(e,t,n){const o=t.value,c=o.parent?e.parentElement:e,s=o.options||{passive:!0};if(!c)return;const u=p(t.value);c._touchHandlers=Object(c._touchHandlers),c._touchHandlers[n.context._uid]=u,r(u).forEach(i=>{c.addEventListener(i,u[i],s)})}function X(e,t,n){const o=t.value.parent?e.parentElement:e;if(!o||!o._touchHandlers)return;const c=o._touchHandlers[n.context._uid];r(c).forEach(s=>{o.removeEventListener(s,c[s])}),delete o._touchHandlers[n.context._uid]}const Y={inserted:_,unbind:X};var x=Y;export{g as b,x,R as z};

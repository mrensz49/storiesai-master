import{D as h}from"./index.41ca13fb.js";function b(t){if(typeof t.getRootNode!="function"){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}const o=t.getRootNode();return o!==document&&o.getRootNode({composed:!0})!==document?null:o}function d(t,o,n){const e=o.value,c=o.options||{passive:!0};window.addEventListener("resize",e,c),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:e,options:c},(!o.modifiers||!o.modifiers.quiet)&&e()}function f(t,o,n){var e;if(!((e=t._onResize)!=null&&e[n.context._uid]))return;const{callback:c,options:s}=t._onResize[n.context._uid];window.removeEventListener("resize",c,s),delete t._onResize[n.context._uid]}const a={inserted:d,unbind:f};var z=a;const l=t=>{const{touchstartX:o,touchendX:n,touchstartY:e,touchendY:c}=t,s=.5,u=16;t.offsetX=n-o,t.offsetY=c-e,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<o-u&&t.left(t),t.right&&n>o+u&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&c<e-u&&t.up(t),t.down&&c>e+u&&t.down(t))};function m(t,o){const n=t.changedTouches[0];o.touchstartX=n.clientX,o.touchstartY=n.clientY,o.start&&o.start(Object.assign(t,o))}function _(t,o){const n=t.changedTouches[0];o.touchendX=n.clientX,o.touchendY=n.clientY,o.end&&o.end(Object.assign(t,o)),l(o)}function r(t,o){const n=t.changedTouches[0];o.touchmoveX=n.clientX,o.touchmoveY=n.clientY,o.move&&o.move(Object.assign(t,o))}function R(t){const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:n=>m(n,o),touchend:n=>_(n,o),touchmove:n=>r(n,o)}}function X(t,o,n){const e=o.value,c=e.parent?t.parentElement:t,s=e.options||{passive:!0};if(!c)return;const u=R(o.value);c._touchHandlers=Object(c._touchHandlers),c._touchHandlers[n.context._uid]=u,h(u).forEach(i=>{c.addEventListener(i,u[i],s)})}function Y(t,o,n){const e=o.value.parent?t.parentElement:t;if(!e||!e._touchHandlers)return;const c=e._touchHandlers[n.context._uid];h(c).forEach(s=>{e.removeEventListener(s,c[s])}),delete e._touchHandlers[n.context._uid]}const g={inserted:X,unbind:Y};var x=g;export{z as R,x as T,b as a};

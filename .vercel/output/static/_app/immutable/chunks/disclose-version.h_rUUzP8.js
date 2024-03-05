import{c as m,w as E,y as Ee,P as X,M as w,R as P,z as p,A as V,B as ve,D as ye,U as Ce,C as Z,F as M,G as U,H as Te,J as be,t as x,K as xe,i as O,L as $,d as N,N as Ne,O as we,Q as Re,T as ee,f as Ae,b as Ie,V as Se,g as S,h as Le,q as K,p as ne,W as D,j as te,X as Oe,e as De}from"./runtime.DPct-Ydm.js";function re(e,n){return e===n}function se(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function le(e,n){return!se(e,n)}function fe(e,n,t){return{b:t,c:null,d:null,e:null,f:e,l:0,i:null,r:null,v:n,w:0,x:null,y:null}}function oe(e,n){const t=e.r;t===null?e.r=[n]:t.push(n)}function b(e,n,t,r,s){const l=fe(e|ye,null,r);return l.i=n,l.x=E,p!==null&&(l.l=p.l+1,e&w||oe(p,l)),s&&Ee(l,t),l}function un(){return p?(p.f&w)===0:!1}function q(e){if(p===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=p.f&P&&E!==null&&!E.m,t=b(V,e,!1,m,!n);if(n){const r=E;(r.e??(r.e=[])).push(t)}return t}function W(e){return b(V,e,!1,m,!0)}function Pe(e){return b(V|w,e,!1,m,!0)}function Ve(e,n){return b(X|w,e,n,m,!0)}function ke(e){if(p===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=p!==null&&(p.f&P)!==0;return b(X,()=>{const t=e();return ve(),t},n,m,!0)}function L(e,n=m,t=!1,r=!0){let s=P;return t&&(s|=w),b(s,e,r,n,!0)}function Fe(e){const t=p===null?U|Te:U,r=fe(t|Z,Ce,m);return r.i=e,r.e=re,M!==null&&oe(M,r),r}function Be(e){return Me(be|Z,e)}function He(e){var t;const n=Be(e);return n.e=le,E&&((t=E).d??(t.d=[])).push(n),n}function Me(e,n){return{c:null,e:re,f:e,v:n,w:0}}var y,I,Y,ue,ce,k,ie,ae;function de(){y===void 0&&(y=Node.prototype,I=Element.prototype,Y=Text.prototype,ue=y.appendChild,ce=y.cloneNode,I.__click=void 0,Y.__nodeValue=" ",I.__className="",k=x(y,"firstChild").get,ie=x(y,"nextSibling").get,ae=x(y,"textContent").set,x(I,"className").set)}function z(e,n){ue.call(e,n)}function Ue(e,n){return ce.call(e,n)}function v(){return document.createTextNode("")}function $e(e){const n=k.call(e);if(h)if(n===null){const t=v();return e.appendChild(t),t}else return F(n);return n}function cn(e,n){if(h){const t=e[0];if(n&&(t==null?void 0:t.nodeType)!==3){const r=v();return g.unshift(r),t&&t.parentNode.insertBefore(r,t),r}return t!==null?F(t):t}return k.call(e)}function an(e,n=!1){const t=ie.call(e);if(h){if(n&&(t==null?void 0:t.nodeType)!==3){const r=v();if(t){const s=g.indexOf(t);g.splice(s,0,r),t.parentNode.insertBefore(r,t)}else g.push(r);return r}if(t!==null)return F(t)}return t}function dn(e){ae.call(e,"")}function F(e){if(e.nodeType===8&&e.data.startsWith("ssr:")&&g[g.length-1]!==e){const n=B(e),r=(n[n.length-1]||e).nextSibling;return r.$$fragment=n,r}return e}let h=!1,g=null;function C(e){h=e!==null,g=e}function B(e,n=!1){const t=[];let r=e,s=null;for(;r!==null;){const l=r.nodeType,u=r.nextSibling;if(l===8){const i=r.data;if(i.startsWith("ssr:")){const a=i.slice(4);if(s===null)s=a;else if(a===s){if(n&&t.length===0){const f=v();t.push(f),r.parentNode.insertBefore(f,r)}return t}else t.push(r);r=u;continue}}s!==null&&t.push(r),r=u}return null}function H(e,n){if(h){let t=e;if(n&&(t=t.firstChild),t.nodeType===8){let r=t.$$fragment;r===void 0?r=B(t):xe(()=>{t.$$fragment=void 0}),C(r)}else{const r=t.firstChild;C(r===null?[]:[r])}}}function Ke(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function qe(e,n,t){if(O(e)){for(var r=0,s;r<e.length;r++)s=e[r],t===null?z(n,s):t.before(s);return e[0]}else e!==null&&(t===null?z(n,e):t.before(e));return e}function T(e){var n=e;if(O(e))for(var t=0,r;t<e.length;t++)r=e[t],t===0&&(n=r),r.isConnected&&r.remove();else e.isConnected&&e.remove();return n}const _n=1,pn=2,hn=4,gn=8,mn=64,We=1,Ye=2,ze=4,Ge=8,G=["touchstart","touchmove","touchend"];function je(e,n,t){const r=[];for(const s of e){const l=s.r,u=s.e;n==="in"?(l==="in"||l==="both"?s.in():s.c(),s.d.inert=!1,$(u,!1)):n==="key"?l==="key"&&(s.p||(s.p=s.i(t)),s.in()):((l==="out"||l==="both")&&(s.p||(s.p=s.i()),r.push(s.o)),s.d.inert=!0,$(u,!0))}if(r.length>0){const s=Ve(()=>{N(s);const l=Pe(()=>{N(l),Ne(r)})},!1)}}function Qe(e){return{d:null,e:null,i:e,p:null,r:null,t:we}}function Je(){return{d:null,e:null,p:m,r:null,t:Re}}const Xe=new Set,j=new Set;function _e(e,n){let t;return()=>{if(t===void 0){const r=Ke(e);t=n?r:$e(r)}return t}}function pe(e,n,t,r){if(h){t!==null&&H(t,!1);const s=g;if(s!==null)return e?s:s[0]}return n?Ue(r(),!0):document.importNode(r(),!0)}function Ze(e,n,t){return pe(!1,n,e,t)}function en(e,n,t){return pe(!0,n,e,t)}const nn=_e(" ",!1),tn=_e("<!>",!0);function En(e){var n=Ze(e,!0,nn);return h&&(n==null?void 0:n.nodeType)!==3&&(n=v(),e.before(n)),n}function vn(e){if(h&&e.nodeType!==3){const n=v();return e.before(n),n}return e}function yn(e){return en(e,!0,tn)}function he(e,n,t){const r=m,s=n?O(e)?e:Array.from(e.childNodes):e;!h&&t!==null&&qe(s,null,t),r.d=s}function Cn(e,n){he(n,!1,e)}function Tn(e,n){he(n,!0,e)}function bn(e,n){L(()=>rn(e,n()))}function rn(e,n){const t=e.__nodeValue,r=sn(n);h&&e.nodeValue===r?e.__nodeValue=r:t!==r&&(e.nodeValue=r,e.__nodeValue=r)}function xn(e,n,t,r){let s,l;const u=W(()=>{s=l,l=(r==null?void 0:r())||[],te(()=>{e!==t(...l)&&(n(e,...l),s&&t(...s)===e&&n(null,...s))})});ne(u,()=>{W(()=>{t(...l)===e&&n(null,...l)})})}function Q(e,n){var a;const t=e.ownerDocument,r=n.type,s=((a=n.composedPath)==null?void 0:a.call(n))||[];let l=s[0]||n.target;n.target!==l&&K(n,"target",{configurable:!0,value:l});let u=0;const i=n.__root;if(i){const f=s.indexOf(i);if(f!==-1&&(e===document||e===window)){n.__root=e;return}const o=s.indexOf(e);if(o===-1)return;f<=o&&(u=f+1)}for(l=s[u]||n.target,K(n,"currentTarget",{configurable:!0,get(){return l||t}});l!==null;){const f=l.parentNode||l.host||null,o="__"+r,c=l[o];if(c!==void 0&&!l.disabled)if(O(c)){const[_,...d]=c;_.apply(l,[n,...d])}else c.call(l,n);if(n.cancelBubble||f===e||l===e)break;l=f}n.__root=e,l=e}function Nn(e,n,t,r){H(e),n===void 0?r!==null&&r(e):n(e,t)}function wn(e,n,t){const r=Je();let s=null;H(e);let l=null;r.r=f=>{const o=s,c=o.s;c.add(f),f.f(()=>{c.delete(f),c.size===0&&s!==o&&o.e!==null&&(o.d!==null&&(T(o.d),o.d=null),N(o.e),o.e=null)})};const u=()=>{const f={d:null,e:null,s:new Set,p:s},o=L(()=>{const c=r.d;c!==null&&(T(c),r.d=null),l&&t(l),f.d=r.d,r.d=null},r,!0);f.e=o,s=f},i=()=>{const f=s;if(f===null){u();return}const o=f.s;o.size===0?(f.d!==null&&(T(f.d),f.d=null),f.e?De(f.e):u()):(u(),je(o,"out"))},a=L(()=>{const f=n();l!==f&&(l=f,i())},r,!1);ne(a,()=>{let f=s;for(;f!==null;){const o=f.d;o!==null&&T(o);const c=f.e;c!==null&&N(c),f=f.p}}),r.e=a}function sn(e){return typeof e=="string"?e:e==null?"":e+""}function Rn(e,n,t){t=t==null?null:t+"",(!h||e.getAttribute(n)!==t&&n!=="src"&&n!=="href"&&n!=="srcset")&&(t===null?e.removeAttribute(n):e.setAttribute(n,t))}function ln(e,n){de();const t=v();return n.target.appendChild(t),ee(()=>ge(e,{...n,anchor:t}),!1)}function An(e,n){var a,f;de();const t=n.target,r=t.firstChild,s=B(r,!0),l=g;C(s);let u=null;s===null&&(u=v(),t.appendChild(u));let i=!1;try{return ee(()=>{const o=ge(e,{...n,anchor:u});return C(null),i=!0,o},!1)}catch(o){if(!i&&n.recover!==!1&&s!==null)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",o),T(s),r.remove(),(f=(a=s[s.length-1])==null?void 0:a.nextSibling)==null||f.remove(),C(null),ln(e,n);throw o}finally{C(l)}}function ge(e,n){const t=new Set,r=n.target,s=Qe(n.intro||!1);let l;const u=L(()=>{n.context&&(Ae({}),E.c=n.context),n.props||(n.props={}),n.events&&(n.props.$$events=n.events),l=e(n.anchor,n.props)||{},n.context&&Ie()},s,!0);s.e=u;const i=Q.bind(null,r),a=Q.bind(null,document),f=o=>{for(let c=0;c<o.length;c++){const _=o[c];t.has(_)||(t.add(_),r.addEventListener(_,i,G.includes(_)?{passive:!0}:void 0),document.addEventListener(_,a,G.includes(_)?{passive:!0}:void 0))}};return f(Se(Xe)),j.add(f),me.set(l,()=>{for(const c of t)r.removeEventListener(c,i);j.delete(f);const o=s.d;o!==null&&T(o),N(s.e)}),l}let me=new WeakMap;function In(e){const n=me.get(e);n==null||n()}function Sn(e,n,t,r){var _;var s=(t&We)!==0,l=(t&Ye)!==0,u=e[n],i=(_=x(e,n))==null?void 0:_.set;if(u===void 0&&r!==void 0){if(i&&l)throw new Error("ERR_SVELTE_BINDING_FALLBACK");t&Ge&&(r=r()),u=r,i&&i(u)}var a=()=>{var d=e[n];return d!==void 0&&(r=void 0),d===void 0?r:d};if(!(t&ze))return a;if(i)return function(d){return arguments.length===1?(i(d),d):a()};var f=!1,o=He(u),c=Fe(()=>{var d=a(),R=S(o);return f?(f=!1,R):o.v=d});return s||(c.e=le),function(d,R=!1){var A=S(c);return arguments.length>0?((R||(s?d!==A:se(d,A)))&&(f=!0,Le(o,R?A:d),S(c)),d):A}}function Ln(){const e=E,n=e.u;n&&(n.b.length&&ke(()=>{J(e),n.b.forEach(D)}),q(()=>{const t=te(()=>n.m.map(D));return()=>{for(const r of t)typeof r=="function"&&r()}}),n.a.length&&q(()=>{J(e),n.a.forEach(D)}))}function J(e){if(e.d)for(const n of e.d)S(n);Oe(e.s)}const fn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fn);export{Ze as A,_e as B,cn as C,Nn as D,hn as E,q as F,vn as G,un as H,An as I,ln as J,In as K,Sn as L,ke as M,wn as N,bn as O,yn as P,En as Q,xn as R,L as a,gn as b,h as c,g as d,v as e,dn as f,B as g,H as h,qe as i,_n as j,pn as k,mn as l,Be as m,He as n,Ln as o,Tn as p,Rn as q,T as r,C as s,je as t,rn as u,sn as v,Cn as w,en as x,an as y,$e as z};

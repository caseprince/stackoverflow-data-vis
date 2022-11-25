const Ys=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Ys();/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function La(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?La(Object(n),!0).forEach(function(r){Vs(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):La(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rn(e){return Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rn(e)}function Ws(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ks(e,t,n){return t&&Fa(e.prototype,t),n&&Fa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Vs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qr(e,t){return Gs(e)||Qs(e,t)||qi(e,t)||Zs()}function Un(e){return qs(e)||Xs(e)||qi(e)||Js()}function qs(e){if(Array.isArray(e))return vr(e)}function Gs(e){if(Array.isArray(e))return e}function Xs(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qs(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function qi(e,t){if(!!e){if(typeof e=="string")return vr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vr(e,t)}}function vr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Js(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var za=function(){},Gr={},Gi={},Xi=null,Qi={mark:za,measure:za};try{typeof window!="undefined"&&(Gr=window),typeof document!="undefined"&&(Gi=document),typeof MutationObserver!="undefined"&&(Xi=MutationObserver),typeof performance!="undefined"&&(Qi=performance)}catch{}var el=Gr.navigator||{},ja=el.userAgent,$a=ja===void 0?"":ja,ct=Gr,se=Gi,Ha=Xi,gn=Qi;ct.document;var Qe=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Ji=~$a.indexOf("MSIE")||~$a.indexOf("Trident/"),Ve="___FONT_AWESOME___",br=16,Zi="fa",eo="svg-inline--fa",xt="data-fa-i2svg",yr="data-fa-pseudo-element",tl="data-fa-pseudo-element-pending",Xr="data-prefix",Qr="data-icon",Da="fontawesome-i2svg",nl="async",rl=["HTML","HEAD","STYLE","SCRIPT"],to=function(){try{return!0}catch{return!1}}(),Jr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Tn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},no={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},al={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},il=/fa[srltdbk\-\ ]/,ro="fa-layers-text",ol=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,sl={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},ao=[1,2,3,4,5,6,7,8,9,10],ll=ao.concat([11,12,13,14,15,16,17,18,19,20]),cl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fl=[].concat(Un(Object.keys(Tn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vt.GROUP,vt.SWAP_OPACITY,vt.PRIMARY,vt.SECONDARY]).concat(ao.map(function(e){return"".concat(e,"x")})).concat(ll.map(function(e){return"w-".concat(e)})),io=ct.FontAwesomeConfig||{};function ul(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function dl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var ml=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ml.forEach(function(e){var t=qr(e,2),n=t[0],r=t[1],a=dl(ul(n));a!=null&&(io[r]=a)})}var hl={familyPrefix:Zi,styleDefault:"solid",replacementClass:eo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Jt=S(S({},hl),io);Jt.autoReplaceSvg||(Jt.observeMutations=!1);var z={};Object.keys(Jt).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){Jt[e]=n,Cn.forEach(function(r){return r(z)})},get:function(){return Jt[e]}})});ct.FontAwesomeConfig=z;var Cn=[];function pl(e){return Cn.push(e),function(){Cn.splice(Cn.indexOf(e),1)}}var et=br,He={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gl(e){if(!(!e||!Qe)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return se.head.insertBefore(t,r),e}}var vl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sn(){for(var e=12,t="";e-- >0;)t+=vl[Math.random()*62|0];return t}function Ut(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Zr(e){return e.classList?Ut(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function oo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(oo(e[n]),'" ')},"").trim()}function Bn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ea(e){return e.size!==He.size||e.x!==He.x||e.y!==He.y||e.rotate!==He.rotate||e.flipX||e.flipY}function yl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function wl(e){var t=e.transform,n=e.width,r=n===void 0?br:n,a=e.height,i=a===void 0?br:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ji?l+="translate(".concat(t.x/et-r/2,"em, ").concat(t.y/et-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):l+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),l+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var xl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function so(){var e=Zi,t=eo,n=z.familyPrefix,r=z.replacementClass,a=xl;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ua=!1;function ir(){z.autoAddCss&&!Ua&&(gl(so()),Ua=!0)}var Cl={mixout:function(){return{dom:{css:so,insertCss:ir}}},hooks:function(){return{beforeDOMElementCreation:function(){ir()},beforeI2svg:function(){ir()}}}},qe=ct||{};qe[Ve]||(qe[Ve]={});qe[Ve].styles||(qe[Ve].styles={});qe[Ve].hooks||(qe[Ve].hooks={});qe[Ve].shims||(qe[Ve].shims=[]);var Te=qe[Ve],lo=[],_l=function e(){se.removeEventListener("DOMContentLoaded",e),Mn=1,lo.map(function(t){return t()})},Mn=!1;Qe&&(Mn=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Mn||se.addEventListener("DOMContentLoaded",_l));function kl(e){!Qe||(Mn?setTimeout(e,0):lo.push(e))}function hn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?oo(e):"<".concat(t," ").concat(bl(r),">").concat(i.map(hn).join(""),"</").concat(t,">")}function Ba(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var El=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},or=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?El(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Al(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function wr(e){var t=Al(e);return t.length===1?t[0].toString(16):null}function Pl(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ya(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function xr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ya(t);typeof Te.hooks.addPack=="function"&&!a?Te.hooks.addPack(e,Ya(t)):Te.styles[e]=S(S({},Te.styles[e]||{}),i),e==="fas"&&xr("fa",t)}var Zt=Te.styles,Ol=Te.shims,Sl=Object.values(no),ta=null,co={},fo={},uo={},mo={},ho={},Rl=Object.keys(Jr);function Tl(e){return~fl.indexOf(e)}function Ml(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Tl(a)?a:null}var po=function(){var t=function(i){return or(Zt,function(o,s,l){return o[l]=or(s,i,{}),o},{})};co=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),fo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ho=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Zt||z.autoFetchSvg,r=or(Ol,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});uo=r.names,mo=r.unicodes,ta=Yn(z.styleDefault)};pl(function(e){ta=Yn(e.styleDefault)});po();function na(e,t){return(co[e]||{})[t]}function Il(e,t){return(fo[e]||{})[t]}function Mt(e,t){return(ho[e]||{})[t]}function go(e){return uo[e]||{prefix:null,iconName:null}}function Nl(e){var t=mo[e],n=na("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ft(){return ta}var ra=function(){return{prefix:null,iconName:null,rest:[]}};function Yn(e){var t=Jr[e],n=Tn[e]||Tn[t],r=e in Te.styles?e:null;return n||r||null}function Wn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Ml(z.familyPrefix,s);if(Zt[s]?(s=Sl.includes(s)?al[s]:s,a=s,o.prefix=s):Rl.indexOf(s)>-1?(a=s,o.prefix=Yn(s)):l?o.iconName=l:s!==z.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?go(o.iconName):{},f=Mt(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||f||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!Zt.far&&Zt.fas&&!z.autoFetchSvg&&(o.prefix="fas")}return o},ra());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ft()||"fas"),i}var Ll=function(){function e(){Ws(this,e),this.definitions={}}return Ks(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),xr(s,o[s]);var l=no[s];l&&xr(l,o[s]),po()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),Wa=[],It={},Lt={},Fl=Object.keys(Lt);function zl(e,t){var n=t.mixoutsTo;return Wa=e,It={},Object.keys(Lt).forEach(function(r){Fl.indexOf(r)===-1&&delete Lt[r]}),Wa.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Rn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){It[o]||(It[o]=[]),It[o].push(i[o])})}r.provides&&r.provides(Lt)}),n}function Cr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=It[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=It[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ge(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lt[e]?Lt[e].apply(null,t):void 0}function _r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ft();if(!!t)return t=Mt(n,t)||t,Ba(vo.definitions,n,t)||Ba(Te.styles,n,t)}var vo=new Ll,jl=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Ct("noAuto")},$l={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(Ct("beforeI2svg",t),Ge("pseudoElements2svg",t),Ge("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,kl(function(){Dl({autoReplaceSvgRoot:n}),Ct("watch",t)})}},Hl={icon:function(t){if(t===null)return null;if(Rn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Yn(t[0]);return{prefix:r,iconName:Mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.familyPrefix,"-"))>-1||t.match(il))){var a=Wn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ft(),iconName:Mt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ft();return{prefix:i,iconName:Mt(i,t)||t}}}},Ee={noAuto:jl,config:z,dom:$l,parse:Hl,library:vo,findIconDefinition:_r,toHtml:hn},Dl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(Te.styles).length>0||z.autoFetchSvg)&&Qe&&z.autoReplaceSvg&&Ee.dom.i2svg({node:r})};function Kn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return hn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Qe){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ul(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ea(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Bn(S(S({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Bl(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(z.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:o}),children:r}]}]}function aa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,m=e.watchable,g=m===void 0?!1:m,C=r.found?r:n,R=C.width,P=C.height,A=a==="fak",M=[z.replacementClass,i?"".concat(z.familyPrefix,"-").concat(i):""].filter(function(X){return d.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(d.classes).join(" "),j={children:[],attributes:S(S({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:M,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(P)})},D=A&&!~d.classes.indexOf("fa-fw")?{width:"".concat(R/P*16*.0625,"em")}:{};g&&(j.attributes[xt]=""),l&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(f||sn())},children:[l]}),delete j.attributes.title);var K=S(S({},j),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:S(S({},D),d.styles)}),te=r.found&&n.found?Ge("generateAbstractMask",K)||{children:[],attributes:{}}:Ge("generateAbstractIcon",K)||{children:[],attributes:{}},Y=te.children,ie=te.attributes;return K.children=Y,K.attributes=ie,s?Bl(K):Ul(K)}function Ka(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=S(S(S({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[xt]="");var f=S({},o.styles);ea(a)&&(f.transform=wl({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Bn(f);d.length>0&&(c.style=d);var m=[];return m.push({tag:"span",attributes:c,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Yl(e){var t=e.content,n=e.title,r=e.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Bn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var sr=Te.styles;function kr(e){var t=e[0],n=e[1],r=e.slice(4),a=qr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(z.familyPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Wl={found:!1,width:512,height:512};function Kl(e,t){!to&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Er(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=ft()),new Promise(function(r,a){if(Ge("missingIconAbstract"),n==="fa"){var i=go(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&sr[t]&&sr[t][e]){var o=sr[t][e];return r(kr(o))}Kl(e,t),r(S(S({},Wl),{},{icon:z.showMissingIcons&&e?Ge("missingIconAbstract")||{}:{}}))})}var Va=function(){},Ar=z.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:Va,measure:Va},Gt='FA "6.1.1"',Vl=function(t){return Ar.mark("".concat(Gt," ").concat(t," begins")),function(){return bo(t)}},bo=function(t){Ar.mark("".concat(Gt," ").concat(t," ends")),Ar.measure("".concat(Gt," ").concat(t),"".concat(Gt," ").concat(t," begins"),"".concat(Gt," ").concat(t," ends"))},ia={begin:Vl,end:bo},_n=function(){};function qa(e){var t=e.getAttribute?e.getAttribute(xt):null;return typeof t=="string"}function ql(e){var t=e.getAttribute?e.getAttribute(Xr):null,n=e.getAttribute?e.getAttribute(Qr):null;return t&&n}function Gl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function Xl(){if(z.autoReplaceSvg===!0)return kn.replace;var e=kn[z.autoReplaceSvg];return e||kn.replace}function Ql(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function Jl(e){return se.createElement(e)}function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ql:Jl:n;if(typeof e=="string")return se.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(yo(o,{ceFn:r}))}),a}function Zl(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var kn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(yo(a),n)}),n.getAttribute(xt)===null&&z.keepOriginalSource){var r=se.createComment(Zl(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Zr(n).indexOf(z.replacementClass))return kn.replace(t);var a=new RegExp("".concat(z.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===z.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return hn(s)}).join(`
`);n.setAttribute(xt,""),n.innerHTML=o}};function Ga(e){e()}function wo(e,t){var n=typeof t=="function"?t:_n;if(e.length===0)n();else{var r=Ga;z.mutateApproach===nl&&(r=ct.requestAnimationFrame||Ga),r(function(){var a=Xl(),i=ia.begin("mutate");e.map(a),i(),n()})}}var oa=!1;function xo(){oa=!0}function Pr(){oa=!1}var In=null;function Xa(e){if(!!Ha&&!!z.observeMutations){var t=e.treeCallback,n=t===void 0?_n:t,r=e.nodeCallback,a=r===void 0?_n:r,i=e.pseudoElementsCallback,o=i===void 0?_n:i,s=e.observeMutationsRoot,l=s===void 0?se:s;In=new Ha(function(c){if(!oa){var f=ft();Ut(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!qa(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&qa(d.target)&&~cl.indexOf(d.attributeName))if(d.attributeName==="class"&&ql(d.target)){var m=Wn(Zr(d.target)),g=m.prefix,C=m.iconName;d.target.setAttribute(Xr,g||f),C&&d.target.setAttribute(Qr,C)}else Gl(d.target)&&a(d.target)})}}),Qe&&In.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ec(){!In||In.disconnect()}function tc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function nc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Wn(Zr(e));return a.prefix||(a.prefix=ft()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Il(a.prefix,e.innerText)||na(a.prefix,wr(e.innerText))),a}function rc(e){var t=Ut(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ac(){return{iconName:null,title:null,titleId:null,prefix:null,transform:He,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nc(e),r=n.iconName,a=n.prefix,i=n.rest,o=rc(e),s=Cr("parseNodeAttributes",{},e),l=t.styleParser?tc(e):[];return S({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:He,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ic=Te.styles;function Co(e){var t=z.autoReplaceSvg==="nest"?Qa(e,{styleParser:!1}):Qa(e);return~t.extra.classes.indexOf(ro)?Ge("generateLayersText",e,t):Ge("generateSvgReplacementMutation",e,t)}function Ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=se.documentElement.classList,r=function(d){return n.add("".concat(Da,"-").concat(d))},a=function(d){return n.remove("".concat(Da,"-").concat(d))},i=z.autoFetchSvg?Object.keys(Jr):Object.keys(ic),o=[".".concat(ro,":not([").concat(xt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(xt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ut(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ia.begin("onTree"),c=s.reduce(function(f,d){try{var m=Co(d);m&&f.push(m)}catch(g){to||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(m){wo(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(m){l(),d(m)})})}function oc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Co(e).then(function(n){n&&wo([n],t)})}function sc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:_r(a||{})),e(r,S(S({},n),{},{mask:a}))}}var lc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?He:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,m=d===void 0?null:d,g=n.titleId,C=g===void 0?null:g,R=n.classes,P=R===void 0?[]:R,A=n.attributes,M=A===void 0?{}:A,j=n.styles,D=j===void 0?{}:j;if(!!t){var K=t.prefix,te=t.iconName,Y=t.icon;return Kn(S({type:"icon"},t),function(){return Ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(m?M["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(C||sn()):(M["aria-hidden"]="true",M.focusable="false")),aa({icons:{main:kr(Y),mask:l?kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:te,transform:S(S({},He),a),symbol:o,title:m,maskId:f,titleId:C,extra:{attributes:M,styles:D,classes:P}})})}},cc={mixout:function(){return{icon:sc(lc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ja,n.nodeCallback=oc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?se:r,i=n.callback,o=i===void 0?function(){}:i;return Ja(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,m=r.extra;return new Promise(function(g,C){Promise.all([Er(a,s),f.iconName?Er(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var P=qr(R,2),A=P[0],M=P[1];g([n,aa({icons:{main:A,mask:M},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:m,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Bn(s);l.length>0&&(a.style=l);var c;return ea(o)&&(c=Ge("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},fc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Kn({type:"layer"},function(){Ct("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.familyPrefix,"-layers")].concat(Un(i)).join(" ")},children:o}]})}}}},uc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Kn({type:"counter",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),Yl({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(z.familyPrefix,"-layers-counter")].concat(Un(s))}})})}}}},dc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?He:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,m=r.styles,g=m===void 0?{}:m;return Kn({type:"text",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),Ka({content:n,transform:S(S({},He),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(z.familyPrefix,"-layers-text")].concat(Un(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ji){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return z.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ka({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},mc=new RegExp('"',"ug"),Za=[1105920,1112319];function hc(e){var t=e.replace(mc,""),n=Pl(t,0),r=n>=Za[0]&&n<=Za[1],a=t.length===2?t[0]===t[1]:!1;return{value:wr(a?t[0]:t),isSecondary:r||a}}function ei(e,t){var n="".concat(tl).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ut(e.children),o=i.filter(function(te){return te.getAttribute(yr)===t})[0],s=ct.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ol),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Tn[l[2].toLowerCase()]:sl[c],g=hc(d),C=g.value,R=g.isSecondary,P=l[0].startsWith("FontAwesome"),A=na(m,C),M=A;if(P){var j=Nl(C);j.iconName&&j.prefix&&(A=j.iconName,m=j.prefix)}if(A&&!R&&(!o||o.getAttribute(Xr)!==m||o.getAttribute(Qr)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var D=ac(),K=D.extra;K.attributes[yr]=t,Er(A,m).then(function(te){var Y=aa(S(S({},D),{},{icons:{main:te,mask:ra()},prefix:m,iconName:M,extra:K,watchable:!0})),ie=se.createElement("svg");t==="::before"?e.insertBefore(ie,e.firstChild):e.appendChild(ie),ie.outerHTML=Y.map(function(X){return hn(X)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function pc(e){return Promise.all([ei(e,"::before"),ei(e,"::after")])}function gc(e){return e.parentNode!==document.head&&!~rl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ti(e){if(!!Qe)return new Promise(function(t,n){var r=Ut(e.querySelectorAll("*")).filter(gc).map(pc),a=ia.begin("searchPseudoElements");xo(),Promise.all(r).then(function(){a(),Pr(),t()}).catch(function(){a(),Pr(),n()})})}var vc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ti,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?se:r;z.searchPseudoElements&&ti(a)}}},ni=!1,bc={mixout:function(){return{dom:{unwatch:function(){xo(),ni=!0}}}},hooks:function(){return{bootstrap:function(){Xa(Cr("mutationObserverCallbacks",{}))},noAuto:function(){ec()},watch:function(n){var r=n.observeMutationsRoot;ni?Pr():Xa(Cr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ri=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},yc={mixout:function(){return{parse:{transform:function(n){return ri(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ri(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:m};return{tag:"g",attributes:S({},g.outer),children:[{tag:"g",attributes:S({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),g.path)}]}]}}}},lr={x:0,y:0,width:"100%",height:"100%"};function ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function wc(e){return e.tag==="g"?e.children:[e]}var xc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Wn(a.split(" ").map(function(o){return o.trim()})):ra();return i.prefix||(i.prefix=ft()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,m=o.icon,g=yl({transform:l,containerWidth:d,iconWidth:c}),C={tag:"rect",attributes:S(S({},lr),{},{fill:"white"})},R=f.children?{children:f.children.map(ai)}:{},P={tag:"g",attributes:S({},g.inner),children:[ai(S({tag:f.tag,attributes:S(S({},f.attributes),g.path)},R))]},A={tag:"g",attributes:S({},g.outer),children:[P]},M="mask-".concat(s||sn()),j="clip-".concat(s||sn()),D={tag:"mask",attributes:S(S({},lr),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,A]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:wc(m)},D]};return r.push(K,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(M,")")},lr)}),{children:r,attributes:a}}}},Cc={provides:function(t){var n=!1;ct.matchMedia&&(n=ct.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_c={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},kc=[Cl,cc,fc,uc,dc,vc,bc,yc,xc,Cc,_c];zl(kc,{mixoutsTo:Ee});Ee.noAuto;var Lm=Ee.config,Ec=Ee.library;Ee.dom;var Fm=Ee.parse;Ee.findIconDefinition;Ee.toHtml;var zm=Ee.icon;Ee.layer;var jm=Ee.text;Ee.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ac={prefix:"fab",iconName:"stack-overflow",icon:[384,512,[],"f16c","M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Pc={prefix:"far",iconName:"square",icon:[448,512,[9723,9724,61590,9632],"f0c8","M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"]},Oc={prefix:"far",iconName:"square-check",icon:[448,512,[9989,61510,9745,"check-square"],"f14a","M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Sc={prefix:"fas",iconName:"angle-down",icon:[384,512,[8964],"f107","M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"]},Rc={prefix:"fas",iconName:"angle-up",icon:[384,512,[8963],"f106","M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"]},Tc={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},Mc={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"]},Ic=Mc,Nc={prefix:"fas",iconName:"circle-nodes",icon:[512,512,[],"e4e2","M380.6 365.6C401.1 379.9 416 404.3 416 432C416 476.2 380.2 512 336 512C291.8 512 256 476.2 256 432C256 423.6 257.3 415.4 259.7 407.8L114.1 280.4C103.8 285.3 92.21 288 80 288C35.82 288 0 252.2 0 208C0 163.8 35.82 128 80 128C101.9 128 121.7 136.8 136.2 151.1L320 77.52C321.3 34.48 356.6 0 400 0C444.2 0 480 35.82 480 80C480 117.9 453.7 149.6 418.4 157.9L380.6 365.6zM156.3 232.2L301.9 359.6C306.9 357.3 312.1 355.4 317.6 354.1L355.4 146.4C351.2 143.6 347.4 140.4 343.8 136.9L159.1 210.5C159.7 218 158.5 225.3 156.3 232.2V232.2z"]},Lc={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"]},Fc=Lc,zc={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"]},jc=zc,$c={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z"]},Hc={prefix:"fas",iconName:"user-astronaut",icon:[448,512,[],"f4fb","M176 448C167.3 448 160 455.3 160 464V512h32v-48C192 455.3 184.8 448 176 448zM272 448c-8.75 0-16 7.25-16 16s7.25 16 16 16s16-7.25 16-16S280.8 448 272 448zM164 172l8.205 24.62c1.215 3.645 6.375 3.645 7.59 0L188 172l24.62-8.203c3.646-1.219 3.646-6.375 0-7.594L188 148L179.8 123.4c-1.215-3.648-6.375-3.648-7.59 0L164 148L139.4 156.2c-3.646 1.219-3.646 6.375 0 7.594L164 172zM336.1 315.4C304 338.6 265.1 352 224 352s-80.03-13.43-112.1-36.59C46.55 340.2 0 403.3 0 477.3C0 496.5 15.52 512 34.66 512H128v-64c0-17.75 14.25-32 32-32h128c17.75 0 32 14.25 32 32v64h93.34C432.5 512 448 496.5 448 477.3C448 403.3 401.5 340.2 336.1 315.4zM64 224h13.5C102.3 280.5 158.4 320 224 320s121.8-39.5 146.5-96H384c8.75 0 16-7.25 16-16v-96C400 103.3 392.8 96 384 96h-13.5C345.8 39.5 289.6 0 224 0S102.3 39.5 77.5 96H64C55.25 96 48 103.3 48 112v96C48 216.8 55.25 224 64 224zM104 136C104 113.9 125.5 96 152 96h144c26.5 0 48 17.88 48 40V160c0 53-43 96-96 96h-48c-53 0-96-43-96-96V136z"]};function sa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Dc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uc=sa(Dc);function _o(e){return!!e||e===""}function la(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=me(r)?Wc(r):la(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(me(e))return e;if(fe(e))return e}}const Bc=/;(?![^(]*\))/g,Yc=/:(.+)/;function Wc(e){const t={};return e.split(Bc).forEach(n=>{if(n){const r=n.split(Yc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ca(e){let t="";if(me(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=ca(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $m=e=>me(e)?e:e==null?"":H(e)||fe(e)&&(e.toString===Po||!B(e.toString))?JSON.stringify(e,ko,2):String(e),ko=(e,t)=>t&&t.__v_isRef?ko(e,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Eo(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!H(t)&&!Oo(t)?String(t):t,ae={},Ft=[],Ie=()=>{},Kc=()=>!1,Vc=/^on[^a-z]/,Vn=e=>Vc.test(e),fa=e=>e.startsWith("onUpdate:"),pe=Object.assign,ua=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},qc=Object.prototype.hasOwnProperty,V=(e,t)=>qc.call(e,t),H=Array.isArray,zt=e=>qn(e)==="[object Map]",Eo=e=>qn(e)==="[object Set]",B=e=>typeof e=="function",me=e=>typeof e=="string",da=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Ao=e=>fe(e)&&B(e.then)&&B(e.catch),Po=Object.prototype.toString,qn=e=>Po.call(e),Gc=e=>qn(e).slice(8,-1),Oo=e=>qn(e)==="[object Object]",ma=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,En=sa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xc=/-(\w)/g,Ue=Gn(e=>e.replace(Xc,(t,n)=>n?n.toUpperCase():"")),Qc=/\B([A-Z])/g,Bt=Gn(e=>e.replace(Qc,"-$1").toLowerCase()),Xn=Gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cr=Gn(e=>e?`on${Xn(e)}`:""),ln=(e,t)=>!Object.is(e,t),fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Jc=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ii;const Zc=()=>ii||(ii=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ze;class So{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ze&&(this.parent=ze,this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ze;try{return ze=this,t()}finally{ze=n}}}on(){ze=this}off(){ze=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ef(e){return new So(e)}function tf(e,t=ze){t&&t.active&&t.effects.push(e)}const ha=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ro=e=>(e.w&ut)>0,To=e=>(e.n&ut)>0,nf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ut},rf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ro(a)&&!To(a)?a.delete(e):t[n++]=a,a.w&=~ut,a.n&=~ut}t.length=n}},Or=new WeakMap;let Xt=0,ut=1;const Sr=30;let De;const bt=Symbol(""),Rr=Symbol("");class pa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tf(this,r)}run(){if(!this.active)return this.fn();let t=De,n=st;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=De,De=this,st=!0,ut=1<<++Xt,Xt<=Sr?nf(this):oi(this),this.fn()}finally{Xt<=Sr&&rf(this),ut=1<<--Xt,De=this.parent,st=n,this.parent=void 0}}stop(){this.active&&(oi(this),this.onStop&&this.onStop(),this.active=!1)}}function oi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let st=!0;const Mo=[];function Yt(){Mo.push(st),st=!1}function Wt(){const e=Mo.pop();st=e===void 0?!0:e}function ke(e,t,n){if(st&&De){let r=Or.get(e);r||Or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ha()),Io(a)}}function Io(e,t){let n=!1;Xt<=Sr?To(e)||(e.n|=ut,n=!Ro(e)):n=!e.has(De),n&&(e.add(De),De.deps.push(e))}function Xe(e,t,n,r,a,i){const o=Or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?ma(n)&&s.push(o.get("length")):(s.push(o.get(bt)),zt(e)&&s.push(o.get(Rr)));break;case"delete":H(e)||(s.push(o.get(bt)),zt(e)&&s.push(o.get(Rr)));break;case"set":zt(e)&&s.push(o.get(bt));break}if(s.length===1)s[0]&&Tr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Tr(ha(l))}}function Tr(e,t){for(const n of H(e)?e:[...e])(n!==De||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const af=sa("__proto__,__v_isRef,__isVue"),No=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(da)),of=ga(),sf=ga(!1,!0),lf=ga(!0),si=cf();function cf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(G)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Yt();const r=G(this)[t].apply(this,n);return Wt(),r}}),e}function ga(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ef:$o:t?jo:zo).get(r))return r;const o=H(r);if(!e&&o&&V(si,a))return Reflect.get(si,a,i);const s=Reflect.get(r,a,i);return(da(a)?No.has(a):af(a))||(e||ke(r,"get",a),t)?s:de(s)?!o||!ma(a)?s.value:s:fe(s)?e?Ho(s):pn(s):s}}const ff=Lo(),uf=Lo(!0);function Lo(e=!1){return function(n,r,a,i){let o=n[r];if(cn(o)&&de(o)&&!de(a))return!1;if(!e&&!cn(a)&&(Do(a)||(a=G(a),o=G(o)),!H(n)&&de(o)&&!de(a)))return o.value=a,!0;const s=H(n)&&ma(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===G(i)&&(s?ln(a,o)&&Xe(n,"set",r,a):Xe(n,"add",r,a)),l}}function df(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Xe(e,"delete",t,void 0),r}function mf(e,t){const n=Reflect.has(e,t);return(!da(t)||!No.has(t))&&ke(e,"has",t),n}function hf(e){return ke(e,"iterate",H(e)?"length":bt),Reflect.ownKeys(e)}const Fo={get:of,set:ff,deleteProperty:df,has:mf,ownKeys:hf},pf={get:lf,set(e,t){return!0},deleteProperty(e,t){return!0}},gf=pe({},Fo,{get:sf,set:uf}),va=e=>e,Qn=e=>Reflect.getPrototypeOf(e);function vn(e,t,n=!1,r=!1){e=e.__v_raw;const a=G(e),i=G(t);t!==i&&!n&&ke(a,"get",t),!n&&ke(a,"get",i);const{has:o}=Qn(a),s=r?va:n?xa:fn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function bn(e,t=!1){const n=this.__v_raw,r=G(n),a=G(e);return e!==a&&!t&&ke(r,"has",e),!t&&ke(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function yn(e,t=!1){return e=e.__v_raw,!t&&ke(G(e),"iterate",bt),Reflect.get(e,"size",e)}function li(e){e=G(e);const t=G(this);return Qn(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function ci(e,t){t=G(t);const n=G(this),{has:r,get:a}=Qn(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function fi(e){const t=G(this),{has:n,get:r}=Qn(t);let a=n.call(t,e);a||(e=G(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Xe(t,"delete",e,void 0),i}function ui(){const e=G(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function wn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=G(o),l=t?va:e?xa:fn;return!e&&ke(s,"iterate",bt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function xn(e,t,n){return function(...r){const a=this.__v_raw,i=G(a),o=zt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?va:t?xa:fn;return!t&&ke(i,"iterate",l?Rr:bt),{next(){const{value:d,done:m}=c.next();return m?{value:d,done:m}:{value:s?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function tt(e){return function(...t){return e==="delete"?!1:this}}function vf(){const e={get(i){return vn(this,i)},get size(){return yn(this)},has:bn,add:li,set:ci,delete:fi,clear:ui,forEach:wn(!1,!1)},t={get(i){return vn(this,i,!1,!0)},get size(){return yn(this)},has:bn,add:li,set:ci,delete:fi,clear:ui,forEach:wn(!1,!0)},n={get(i){return vn(this,i,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:wn(!0,!1)},r={get(i){return vn(this,i,!0,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),t[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[e,n,t,r]}const[bf,yf,wf,xf]=vf();function ba(e,t){const n=t?e?xf:wf:e?yf:bf;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const Cf={get:ba(!1,!1)},_f={get:ba(!1,!0)},kf={get:ba(!0,!1)},zo=new WeakMap,jo=new WeakMap,$o=new WeakMap,Ef=new WeakMap;function Af(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pf(e){return e.__v_skip||!Object.isExtensible(e)?0:Af(Gc(e))}function pn(e){return cn(e)?e:ya(e,!1,Fo,Cf,zo)}function Of(e){return ya(e,!1,gf,_f,jo)}function Ho(e){return ya(e,!0,pf,kf,$o)}function ya(e,t,n,r,a){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Pf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function jt(e){return cn(e)?jt(e.__v_raw):!!(e&&e.__v_isReactive)}function cn(e){return!!(e&&e.__v_isReadonly)}function Do(e){return!!(e&&e.__v_isShallow)}function Uo(e){return jt(e)||cn(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function wa(e){return Nn(e,"__v_skip",!0),e}const fn=e=>fe(e)?pn(e):e,xa=e=>fe(e)?Ho(e):e;function Bo(e){st&&De&&(e=G(e),Io(e.dep||(e.dep=ha())))}function Yo(e,t){e=G(e),e.dep&&Tr(e.dep)}function de(e){return!!(e&&e.__v_isRef===!0)}function Wo(e){return Ko(e,!1)}function Sf(e){return Ko(e,!0)}function Ko(e,t){return de(e)?e:new Rf(e,t)}class Rf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:fn(t)}get value(){return Bo(this),this._value}set value(t){t=this.__v_isShallow?t:G(t),ln(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:fn(t),Yo(this))}}function en(e){return de(e)?e.value:e}const Tf={get:(e,t,n)=>en(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return de(a)&&!de(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vo(e){return jt(e)?e:new Proxy(e,Tf)}function Hm(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=If(e,n);return t}class Mf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function If(e,t,n){const r=e[t];return de(r)?r:new Mf(e,t,n)}class Nf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new pa(t,()=>{this._dirty||(this._dirty=!0,Yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=G(this);return Bo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Lf(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Ie):(r=e.get,a=e.set),new Nf(r,a,i||!a,n)}Promise.resolve();function lt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Jn(i,t,n)}return a}function Oe(e,t,n,r){if(B(e)){const i=lt(e,t,n,r);return i&&Ao(i)&&i.catch(o=>{Jn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Jn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){lt(l,null,10,[e,o,s]);return}}Ff(e,n,a,r)}function Ff(e,t,n,r=!0){console.error(e)}let Ln=!1,Mr=!1;const _e=[];let We=0;const tn=[];let Qt=null,St=0;const nn=[];let at=null,Rt=0;const qo=Promise.resolve();let Ca=null,Ir=null;function Go(e){const t=Ca||qo;return e?t.then(this?e.bind(this):e):t}function zf(e){let t=We+1,n=_e.length;for(;t<n;){const r=t+n>>>1;un(_e[r])<e?t=r+1:n=r}return t}function Xo(e){(!_e.length||!_e.includes(e,Ln&&e.allowRecurse?We+1:We))&&e!==Ir&&(e.id==null?_e.push(e):_e.splice(zf(e.id),0,e),Qo())}function Qo(){!Ln&&!Mr&&(Mr=!0,Ca=qo.then(es))}function jf(e){const t=_e.indexOf(e);t>We&&_e.splice(t,1)}function Jo(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Qo()}function $f(e){Jo(e,Qt,tn,St)}function Hf(e){Jo(e,at,nn,Rt)}function _a(e,t=null){if(tn.length){for(Ir=t,Qt=[...new Set(tn)],tn.length=0,St=0;St<Qt.length;St++)Qt[St]();Qt=null,St=0,Ir=null,_a(e,t)}}function Zo(e){if(nn.length){const t=[...new Set(nn)];if(nn.length=0,at){at.push(...t);return}for(at=t,at.sort((n,r)=>un(n)-un(r)),Rt=0;Rt<at.length;Rt++)at[Rt]();at=null,Rt=0}}const un=e=>e.id==null?1/0:e.id;function es(e){Mr=!1,Ln=!0,_a(e),_e.sort((n,r)=>un(n)-un(r));const t=Ie;try{for(We=0;We<_e.length;We++){const n=_e[We];n&&n.active!==!1&&lt(n,null,14)}}finally{We=0,_e.length=0,Zo(),Ln=!1,Ca=null,(_e.length||tn.length||nn.length)&&es(e)}}function Df(e,t,...n){const r=e.vnode.props||ae;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:m}=r[f]||ae;m?a=n.map(g=>g.trim()):d&&(a=n.map(Jc))}let s,l=r[s=cr(t)]||r[s=cr(Ue(t))];!l&&i&&(l=r[s=cr(Bt(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function ts(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=c=>{const f=ts(c,t,!0);f&&(s=!0,pe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):pe(o,i),r.set(e,o),o)}function Zn(e,t){return!e||!Vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Bt(t))||V(e,t))}let Me=null,ns=null;function Fn(e){const t=Me;return Me=e,ns=e&&e.type.__scopeId||null,t}function Uf(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ci(-1);const i=Fn(t),o=e(...a);return Fn(i),r._d&&Ci(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ur(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:m,setupState:g,ctx:C,inheritAttrs:R}=e;let P,A;const M=Fn(e);try{if(n.shapeFlag&4){const D=a||r;P=je(f.call(D,D,d,i,g,m,C)),A=l}else{const D=t;P=je(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),A=t.props?l:Bf(l)}}catch(D){rn.length=0,Jn(D,e,1),P=be(Be)}let j=P;if(A&&R!==!1){const D=Object.keys(A),{shapeFlag:K}=j;D.length&&K&7&&(o&&D.some(fa)&&(A=Yf(A,o)),j=_t(j,A))}return n.dirs&&(j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),P=j,Fn(M),P}const Bf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vn(n))&&((t||(t={}))[n]=e[n]);return t},Yf=(e,t)=>{const n={};for(const r in e)(!fa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Wf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?di(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==r[m]&&!Zn(c,m))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?di(r,o,c):!0:!!o;return!1}function di(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function Kf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Vf=e=>e.__isSuspense;function qf(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Hf(e)}function An(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function Ke(e,t,n=!1){const r=ue||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const mi={};function Pn(e,t,n){return rs(e,t,n)}function rs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ae){const s=ue;let l,c=!1,f=!1;if(de(e)?(l=()=>e.value,c=Do(e)):jt(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(jt),l=()=>e.map(A=>{if(de(A))return A.value;if(jt(A))return Nt(A);if(B(A))return lt(A,s,2)})):B(e)?t?l=()=>lt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Oe(e,s,3,[m])}:l=Ie,t&&r){const A=l;l=()=>Nt(A())}let d,m=A=>{d=P.onStop=()=>{lt(A,s,4)}};if(dn)return m=Ie,t?n&&Oe(t,s,3,[l(),f?[]:void 0,m]):l(),Ie;let g=f?[]:mi;const C=()=>{if(!!P.active)if(t){const A=P.run();(r||c||(f?A.some((M,j)=>ln(M,g[j])):ln(A,g)))&&(d&&d(),Oe(t,s,3,[A,g===mi?void 0:g,m]),g=A)}else P.run()};C.allowRecurse=!!t;let R;a==="sync"?R=C:a==="post"?R=()=>we(C,s&&s.suspense):R=()=>{!s||s.isMounted?$f(C):C()};const P=new pa(l,R);return t?n?C():g=P.run():a==="post"?we(P.run.bind(P),s&&s.suspense):P.run(),()=>{P.stop(),s&&s.scope&&ua(s.scope.effects,P)}}function Gf(e,t,n){const r=this.proxy,a=me(e)?e.includes(".")?as(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=ue;$t(this);const s=rs(a,i.bind(r),n);return o?$t(o):wt(),s}function as(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Nt(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))Nt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Nt(e[n],t);else if(Eo(e)||zt(e))e.forEach(n=>{Nt(n,t)});else if(Oo(e))for(const n in e)Nt(e[n],t);return e}function Xf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return us(()=>{e.isMounted=!0}),ds(()=>{e.isUnmounting=!0}),e}const Pe=[Function,Array],Qf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pe,onEnter:Pe,onAfterEnter:Pe,onEnterCancelled:Pe,onBeforeLeave:Pe,onLeave:Pe,onAfterLeave:Pe,onLeaveCancelled:Pe,onBeforeAppear:Pe,onAppear:Pe,onAfterAppear:Pe,onAppearCancelled:Pe},setup(e,{slots:t}){const n=zu(),r=Xf();let a;return()=>{const i=t.default&&os(t.default(),!0);if(!i||!i.length)return;const o=G(e),{mode:s}=o,l=i[0];if(r.isLeaving)return dr(l);const c=hi(l);if(!c)return dr(l);const f=Nr(c,o,r,n);Lr(c,f);const d=n.subTree,m=d&&hi(d);let g=!1;const{getTransitionKey:C}=c.type;if(C){const R=C();a===void 0?a=R:R!==a&&(a=R,g=!0)}if(m&&m.type!==Be&&(!pt(c,m)||g)){const R=Nr(m,o,r,n);if(Lr(m,R),s==="out-in")return r.isLeaving=!0,R.afterLeave=()=>{r.isLeaving=!1,n.update()},dr(l);s==="in-out"&&c.type!==Be&&(R.delayLeave=(P,A,M)=>{const j=is(r,m);j[String(m.key)]=m,P._leaveCb=()=>{A(),P._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=M})}return l}}},Jf=Qf;function is(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Nr(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:g,onLeaveCancelled:C,onBeforeAppear:R,onAppear:P,onAfterAppear:A,onAppearCancelled:M}=t,j=String(e.key),D=is(n,e),K=(Y,ie)=>{Y&&Oe(Y,r,9,ie)},te={mode:i,persisted:o,beforeEnter(Y){let ie=s;if(!n.isMounted)if(a)ie=R||s;else return;Y._leaveCb&&Y._leaveCb(!0);const X=D[j];X&&pt(e,X)&&X.el._leaveCb&&X.el._leaveCb(),K(ie,[Y])},enter(Y){let ie=l,X=c,ye=f;if(!n.isMounted)if(a)ie=P||l,X=A||c,ye=M||f;else return;let he=!1;const ge=Y._enterCb=Ze=>{he||(he=!0,Ze?K(ye,[Y]):K(X,[Y]),te.delayedLeave&&te.delayedLeave(),Y._enterCb=void 0)};ie?(ie(Y,ge),ie.length<=1&&ge()):ge()},leave(Y,ie){const X=String(e.key);if(Y._enterCb&&Y._enterCb(!0),n.isUnmounting)return ie();K(d,[Y]);let ye=!1;const he=Y._leaveCb=ge=>{ye||(ye=!0,ie(),ge?K(C,[Y]):K(g,[Y]),Y._leaveCb=void 0,D[X]===e&&delete D[X])};D[X]=e,m?(m(Y,he),m.length<=1&&he()):he()},clone(Y){return Nr(Y,t,n,r)}};return te}function dr(e){if(er(e))return e=_t(e),e.children=null,e}function hi(e){return er(e)?e.children?e.children[0]:void 0:e}function Lr(e,t){e.shapeFlag&6&&e.component?Lr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function os(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Re?(o.patchFlag&128&&a++,r=r.concat(os(o.children,t,s))):(t||o.type!==Be)&&r.push(s!=null?_t(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ss(e){return B(e)?{setup:e,name:e.name}:e}const Fr=e=>!!e.type.__asyncLoader,er=e=>e.type.__isKeepAlive;function ls(e,t){fs(e,"a",t)}function cs(e,t){fs(e,"da",t)}function fs(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(tr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)er(a.parent.vnode)&&Zf(r,t,n,a),a=a.parent}}function Zf(e,t,n,r){const a=tr(t,e,r,!0);ka(()=>{ua(r[t],a)},n)}function tr(e,t,n=ue,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Yt(),$t(n);const s=Oe(t,n,e,o);return wt(),Wt(),s});return r?a.unshift(i):a.push(i),i}}const Je=e=>(t,n=ue)=>(!dn||e==="sp")&&tr(e,t,n),eu=Je("bm"),us=Je("m"),tu=Je("bu"),nu=Je("u"),ds=Je("bum"),ka=Je("um"),ru=Je("sp"),au=Je("rtg"),iu=Je("rtc");function ou(e,t=ue){tr("ec",e,t)}let zr=!0;function su(e){const t=hs(e),n=e.proxy,r=e.ctx;zr=!1,t.beforeCreate&&pi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:m,beforeUpdate:g,updated:C,activated:R,deactivated:P,beforeDestroy:A,beforeUnmount:M,destroyed:j,unmounted:D,render:K,renderTracked:te,renderTriggered:Y,errorCaptured:ie,serverPrefetch:X,expose:ye,inheritAttrs:he,components:ge,directives:Ze,filters:kt}=t;if(c&&lu(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Q=o[ne];B(Q)&&(r[ne]=Q.bind(n))}if(a){const ne=a.call(n,n);fe(ne)&&(e.data=pn(ne))}if(zr=!0,i)for(const ne in i){const Q=i[ne],xe=B(Q)?Q.bind(n,n):B(Q.get)?Q.get.bind(n,n):Ie,At=!B(Q)&&B(Q.set)?Q.set.bind(n):Ie,Ye=$e({get:xe,set:At});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ne=>Ye.value=Ne})}if(s)for(const ne in s)ms(s[ne],r,n,ne);if(l){const ne=B(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(Q=>{An(Q,ne[Q])})}f&&pi(f,e,"c");function ce(ne,Q){H(Q)?Q.forEach(xe=>ne(xe.bind(n))):Q&&ne(Q.bind(n))}if(ce(eu,d),ce(us,m),ce(tu,g),ce(nu,C),ce(ls,R),ce(cs,P),ce(ou,ie),ce(iu,te),ce(au,Y),ce(ds,M),ce(ka,D),ce(ru,X),H(ye))if(ye.length){const ne=e.exposed||(e.exposed={});ye.forEach(Q=>{Object.defineProperty(ne,Q,{get:()=>n[Q],set:xe=>n[Q]=xe})})}else e.exposed||(e.exposed={});K&&e.render===Ie&&(e.render=K),he!=null&&(e.inheritAttrs=he),ge&&(e.components=ge),Ze&&(e.directives=Ze)}function lu(e,t,n=Ie,r=!1){H(e)&&(e=jr(e));for(const a in e){const i=e[a];let o;fe(i)?"default"in i?o=Ke(i.from||a,i.default,!0):o=Ke(i.from||a):o=Ke(i),de(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function pi(e,t,n){Oe(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ms(e,t,n,r){const a=r.includes(".")?as(n,r):()=>n[r];if(me(e)){const i=t[e];B(i)&&Pn(a,i)}else if(B(e))Pn(a,e.bind(n));else if(fe(e))if(H(e))e.forEach(i=>ms(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&Pn(a,i,e)}}function hs(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,o,!0)),zn(l,t,o)),i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(o=>zn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=cu[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const cu={data:gi,props:ht,emits:ht,methods:ht,computed:ht,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:ht,directives:ht,watch:uu,provide:gi,inject:fu};function gi(e,t){return t?e?function(){return pe(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function fu(e,t){return ht(jr(e),jr(t))}function jr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function ht(e,t){return e?pe(pe(Object.create(null),e),t):t}function uu(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function du(e,t,n,r=!1){const a={},i={};Nn(i,nr,1),e.propsDefaults=Object.create(null),ps(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Of(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function mu(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=G(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(Zn(e.emitsOptions,m))continue;const g=t[m];if(l)if(V(i,m))g!==i[m]&&(i[m]=g,c=!0);else{const C=Ue(m);a[C]=$r(l,s,C,g,e,!1)}else g!==i[m]&&(i[m]=g,c=!0)}}}else{ps(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!V(t,d)&&((f=Bt(d))===d||!V(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=$r(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!V(t,d)&&!0)&&(delete i[d],c=!0)}c&&Xe(e,"set","$attrs")}function ps(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(En(l))continue;const c=t[l];let f;a&&V(a,f=Ue(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=G(n),c=s||ae;for(let f=0;f<i.length;f++){const d=i[f];n[d]=$r(a,l,d,c[d],e,!V(c,d))}}return o}function $r(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=a;n in c?r=c[n]:($t(a),r=c[n]=l.call(null,t),wt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}function gs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const f=d=>{l=!0;const[m,g]=gs(d,t,!0);pe(o,m),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,Ft),Ft;if(H(i))for(let f=0;f<i.length;f++){const d=Ue(i[f]);vi(d)&&(o[d]=ae)}else if(i)for(const f in i){const d=Ue(f);if(vi(d)){const m=i[f],g=o[d]=H(m)||B(m)?{type:m}:m;if(g){const C=wi(Boolean,g.type),R=wi(String,g.type);g[0]=C>-1,g[1]=R<0||C<R,(C>-1||V(g,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function vi(e){return e[0]!=="$"}function bi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function yi(e,t){return bi(e)===bi(t)}function wi(e,t){return H(t)?t.findIndex(n=>yi(n,e)):B(t)&&yi(t,e)?0:-1}const vs=e=>e[0]==="_"||e==="$stable",Ea=e=>H(e)?e.map(je):[je(e)],hu=(e,t,n)=>{const r=Uf((...a)=>Ea(t(...a)),n);return r._c=!1,r},bs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(vs(a))continue;const i=e[a];if(B(i))t[a]=hu(a,i,r);else if(i!=null){const o=Ea(i);t[a]=()=>o}}},ys=(e,t)=>{const n=Ea(t);e.slots.default=()=>n},pu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),Nn(t,"_",n)):bs(t,e.slots={})}else e.slots={},t&&ys(e,t);Nn(e.slots,nr,1)},gu=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ae;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,bs(t,a)),o=t}else t&&(ys(e,t),o={default:1});if(i)for(const s in a)!vs(s)&&!(s in o)&&delete a[s]};function dt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Yt(),Oe(l,n,8,[e.el,s,e,t]),Wt())}}function ws(){return{app:null,config:{isNativeTag:Kc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vu=0;function bu(e,t){return function(r,a=null){B(r)||(r=Object.assign({},r)),a!=null&&!fe(a)&&(a=null);const i=ws(),o=new Set;let s=!1;const l=i.app={_uid:vu++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Yu,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...f)):B(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const m=be(r,a);return m.appContext=i,f&&t?t(m,c):e(m,c,d),s=!0,l._container=c,c.__vue_app__=l,Sa(m.component)||m.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Hr(e,t,n,r,a=!1){if(H(e)){e.forEach((m,g)=>Hr(m,t&&(H(t)?t[g]:t),n,r,a));return}if(Fr(r)&&!a)return;const i=r.shapeFlag&4?Sa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ae?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(me(c)?(f[c]=null,V(d,c)&&(d[c]=null)):de(c)&&(c.value=null)),B(l))lt(l,s,12,[o,f]);else{const m=me(l),g=de(l);if(m||g){const C=()=>{if(e.f){const R=m?f[l]:l.value;a?H(R)&&ua(R,i):H(R)?R.includes(i)||R.push(i):m?(f[l]=[i],V(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else m?(f[l]=o,V(d,l)&&(d[l]=o)):de(l)&&(l.value=o,e.k&&(f[e.k]=o))};o?(C.id=-1,we(C,n)):C()}}}const we=qf;function yu(e){return wu(e)}function wu(e,t){const n=Zc();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:m,setScopeId:g=Ie,cloneNode:C,insertStaticContent:R}=e,P=(u,h,p,y=null,b=null,_=null,O=!1,x=null,k=!!h.dynamicChildren)=>{if(u===h)return;u&&!pt(u,h)&&(y=N(u),Ae(u,b,_,!0),u=null),h.patchFlag===-2&&(k=!1,h.dynamicChildren=null);const{type:w,ref:L,shapeFlag:T}=h;switch(w){case Aa:A(u,h,p,y);break;case Be:M(u,h,p,y);break;case On:u==null&&j(h,p,y,O);break;case Re:Ze(u,h,p,y,b,_,O,x,k);break;default:T&1?te(u,h,p,y,b,_,O,x,k):T&6?kt(u,h,p,y,b,_,O,x,k):(T&64||T&128)&&w.process(u,h,p,y,b,_,O,x,k,re)}L!=null&&b&&Hr(L,u&&u.ref,_,h||u,!h)},A=(u,h,p,y)=>{if(u==null)r(h.el=s(h.children),p,y);else{const b=h.el=u.el;h.children!==u.children&&c(b,h.children)}},M=(u,h,p,y)=>{u==null?r(h.el=l(h.children||""),p,y):h.el=u.el},j=(u,h,p,y)=>{[u.el,u.anchor]=R(u.children,h,p,y,u.el,u.anchor)},D=({el:u,anchor:h},p,y)=>{let b;for(;u&&u!==h;)b=m(u),r(u,p,y),u=b;r(h,p,y)},K=({el:u,anchor:h})=>{let p;for(;u&&u!==h;)p=m(u),a(u),u=p;a(h)},te=(u,h,p,y,b,_,O,x,k)=>{O=O||h.type==="svg",u==null?Y(h,p,y,b,_,O,x,k):ye(u,h,b,_,O,x,k)},Y=(u,h,p,y,b,_,O,x)=>{let k,w;const{type:L,props:T,shapeFlag:F,transition:$,patchFlag:q,dirs:le}=u;if(u.el&&C!==void 0&&q===-1)k=u.el=C(u.el);else{if(k=u.el=o(u.type,_,T&&T.is,T),F&8?f(k,u.children):F&16&&X(u.children,k,null,y,b,_&&L!=="foreignObject",O,x),le&&dt(u,null,y,"created"),T){for(const oe in T)oe!=="value"&&!En(oe)&&i(k,oe,null,T[oe],_,u.children,y,b,E);"value"in T&&i(k,"value",null,T.value),(w=T.onVnodeBeforeMount)&&Fe(w,y,u)}ie(k,u,u.scopeId,O,y)}le&&dt(u,null,y,"beforeMount");const Z=(!b||b&&!b.pendingBranch)&&$&&!$.persisted;Z&&$.beforeEnter(k),r(k,h,p),((w=T&&T.onVnodeMounted)||Z||le)&&we(()=>{w&&Fe(w,y,u),Z&&$.enter(k),le&&dt(u,null,y,"mounted")},b)},ie=(u,h,p,y,b)=>{if(p&&g(u,p),y)for(let _=0;_<y.length;_++)g(u,y[_]);if(b){let _=b.subTree;if(h===_){const O=b.vnode;ie(u,O,O.scopeId,O.slotScopeIds,b.parent)}}},X=(u,h,p,y,b,_,O,x,k=0)=>{for(let w=k;w<u.length;w++){const L=u[w]=x?it(u[w]):je(u[w]);P(null,L,h,p,y,b,_,O,x)}},ye=(u,h,p,y,b,_,O)=>{const x=h.el=u.el;let{patchFlag:k,dynamicChildren:w,dirs:L}=h;k|=u.patchFlag&16;const T=u.props||ae,F=h.props||ae;let $;p&&mt(p,!1),($=F.onVnodeBeforeUpdate)&&Fe($,p,h,u),L&&dt(h,u,p,"beforeUpdate"),p&&mt(p,!0);const q=b&&h.type!=="foreignObject";if(w?he(u.dynamicChildren,w,x,p,y,q,_):O||xe(u,h,x,null,p,y,q,_,!1),k>0){if(k&16)ge(x,h,T,F,p,y,b);else if(k&2&&T.class!==F.class&&i(x,"class",null,F.class,b),k&4&&i(x,"style",T.style,F.style,b),k&8){const le=h.dynamicProps;for(let Z=0;Z<le.length;Z++){const oe=le[Z],Se=T[oe],Pt=F[oe];(Pt!==Se||oe==="value")&&i(x,oe,Se,Pt,b,u.children,p,y,E)}}k&1&&u.children!==h.children&&f(x,h.children)}else!O&&w==null&&ge(x,h,T,F,p,y,b);(($=F.onVnodeUpdated)||L)&&we(()=>{$&&Fe($,p,h,u),L&&dt(h,u,p,"updated")},y)},he=(u,h,p,y,b,_,O)=>{for(let x=0;x<h.length;x++){const k=u[x],w=h[x],L=k.el&&(k.type===Re||!pt(k,w)||k.shapeFlag&70)?d(k.el):p;P(k,w,L,null,y,b,_,O,!0)}},ge=(u,h,p,y,b,_,O)=>{if(p!==y){for(const x in y){if(En(x))continue;const k=y[x],w=p[x];k!==w&&x!=="value"&&i(u,x,w,k,O,h.children,b,_,E)}if(p!==ae)for(const x in p)!En(x)&&!(x in y)&&i(u,x,p[x],null,O,h.children,b,_,E);"value"in y&&i(u,"value",p.value,y.value)}},Ze=(u,h,p,y,b,_,O,x,k)=>{const w=h.el=u?u.el:s(""),L=h.anchor=u?u.anchor:s("");let{patchFlag:T,dynamicChildren:F,slotScopeIds:$}=h;$&&(x=x?x.concat($):$),u==null?(r(w,p,y),r(L,p,y),X(h.children,p,L,b,_,O,x,k)):T>0&&T&64&&F&&u.dynamicChildren?(he(u.dynamicChildren,F,p,b,_,O,x),(h.key!=null||b&&h===b.subTree)&&xs(u,h,!0)):xe(u,h,p,L,b,_,O,x,k)},kt=(u,h,p,y,b,_,O,x,k)=>{h.slotScopeIds=x,u==null?h.shapeFlag&512?b.ctx.activate(h,p,y,O,k):Et(h,p,y,b,_,O,k):ce(u,h,k)},Et=(u,h,p,y,b,_,O)=>{const x=u.component=Fu(u,y,b);if(er(u)&&(x.ctx.renderer=re),ju(x),x.asyncDep){if(b&&b.registerDep(x,ne),!u.el){const k=x.subTree=be(Be);M(null,k,h,p)}return}ne(x,u,h,p,b,_,O)},ce=(u,h,p)=>{const y=h.component=u.component;if(Wf(u,h,p))if(y.asyncDep&&!y.asyncResolved){Q(y,h,p);return}else y.next=h,jf(y.update),y.update();else h.component=u.component,h.el=u.el,y.vnode=h},ne=(u,h,p,y,b,_,O)=>{const x=()=>{if(u.isMounted){let{next:L,bu:T,u:F,parent:$,vnode:q}=u,le=L,Z;mt(u,!1),L?(L.el=q.el,Q(u,L,O)):L=q,T&&fr(T),(Z=L.props&&L.props.onVnodeBeforeUpdate)&&Fe(Z,$,L,q),mt(u,!0);const oe=ur(u),Se=u.subTree;u.subTree=oe,P(Se,oe,d(Se.el),N(Se),u,b,_),L.el=oe.el,le===null&&Kf(u,oe.el),F&&we(F,b),(Z=L.props&&L.props.onVnodeUpdated)&&we(()=>Fe(Z,$,L,q),b)}else{let L;const{el:T,props:F}=h,{bm:$,m:q,parent:le}=u,Z=Fr(h);if(mt(u,!1),$&&fr($),!Z&&(L=F&&F.onVnodeBeforeMount)&&Fe(L,le,h),mt(u,!0),T&&U){const oe=()=>{u.subTree=ur(u),U(T,u.subTree,u,b,null)};Z?h.type.__asyncLoader().then(()=>!u.isUnmounted&&oe()):oe()}else{const oe=u.subTree=ur(u);P(null,oe,p,y,u,b,_),h.el=oe.el}if(q&&we(q,b),!Z&&(L=F&&F.onVnodeMounted)){const oe=h;we(()=>Fe(L,le,oe),b)}h.shapeFlag&256&&u.a&&we(u.a,b),u.isMounted=!0,h=p=y=null}},k=u.effect=new pa(x,()=>Xo(u.update),u.scope),w=u.update=k.run.bind(k);w.id=u.uid,mt(u,!0),w()},Q=(u,h,p)=>{h.component=u;const y=u.vnode.props;u.vnode=h,u.next=null,mu(u,h.props,y,p),gu(u,h.children,p),Yt(),_a(void 0,u.update),Wt()},xe=(u,h,p,y,b,_,O,x,k=!1)=>{const w=u&&u.children,L=u?u.shapeFlag:0,T=h.children,{patchFlag:F,shapeFlag:$}=h;if(F>0){if(F&128){Ye(w,T,p,y,b,_,O,x,k);return}else if(F&256){At(w,T,p,y,b,_,O,x,k);return}}$&8?(L&16&&E(w,b,_),T!==w&&f(p,T)):L&16?$&16?Ye(w,T,p,y,b,_,O,x,k):E(w,b,_,!0):(L&8&&f(p,""),$&16&&X(T,p,y,b,_,O,x,k))},At=(u,h,p,y,b,_,O,x,k)=>{u=u||Ft,h=h||Ft;const w=u.length,L=h.length,T=Math.min(w,L);let F;for(F=0;F<T;F++){const $=h[F]=k?it(h[F]):je(h[F]);P(u[F],$,p,null,b,_,O,x,k)}w>L?E(u,b,_,!0,!1,T):X(h,p,y,b,_,O,x,k,T)},Ye=(u,h,p,y,b,_,O,x,k)=>{let w=0;const L=h.length;let T=u.length-1,F=L-1;for(;w<=T&&w<=F;){const $=u[w],q=h[w]=k?it(h[w]):je(h[w]);if(pt($,q))P($,q,p,null,b,_,O,x,k);else break;w++}for(;w<=T&&w<=F;){const $=u[T],q=h[F]=k?it(h[F]):je(h[F]);if(pt($,q))P($,q,p,null,b,_,O,x,k);else break;T--,F--}if(w>T){if(w<=F){const $=F+1,q=$<L?h[$].el:y;for(;w<=F;)P(null,h[w]=k?it(h[w]):je(h[w]),p,q,b,_,O,x,k),w++}}else if(w>F)for(;w<=T;)Ae(u[w],b,_,!0),w++;else{const $=w,q=w,le=new Map;for(w=q;w<=F;w++){const Ce=h[w]=k?it(h[w]):je(h[w]);Ce.key!=null&&le.set(Ce.key,w)}let Z,oe=0;const Se=F-q+1;let Pt=!1,Ma=0;const Vt=new Array(Se);for(w=0;w<Se;w++)Vt[w]=0;for(w=$;w<=T;w++){const Ce=u[w];if(oe>=Se){Ae(Ce,b,_,!0);continue}let Le;if(Ce.key!=null)Le=le.get(Ce.key);else for(Z=q;Z<=F;Z++)if(Vt[Z-q]===0&&pt(Ce,h[Z])){Le=Z;break}Le===void 0?Ae(Ce,b,_,!0):(Vt[Le-q]=w+1,Le>=Ma?Ma=Le:Pt=!0,P(Ce,h[Le],p,null,b,_,O,x,k),oe++)}const Ia=Pt?xu(Vt):Ft;for(Z=Ia.length-1,w=Se-1;w>=0;w--){const Ce=q+w,Le=h[Ce],Na=Ce+1<L?h[Ce+1].el:y;Vt[w]===0?P(null,Le,p,Na,b,_,O,x,k):Pt&&(Z<0||w!==Ia[Z]?Ne(Le,p,Na,2):Z--)}}},Ne=(u,h,p,y,b=null)=>{const{el:_,type:O,transition:x,children:k,shapeFlag:w}=u;if(w&6){Ne(u.component.subTree,h,p,y);return}if(w&128){u.suspense.move(h,p,y);return}if(w&64){O.move(u,h,p,re);return}if(O===Re){r(_,h,p);for(let T=0;T<k.length;T++)Ne(k[T],h,p,y);r(u.anchor,h,p);return}if(O===On){D(u,h,p);return}if(y!==2&&w&1&&x)if(y===0)x.beforeEnter(_),r(_,h,p),we(()=>x.enter(_),b);else{const{leave:T,delayLeave:F,afterLeave:$}=x,q=()=>r(_,h,p),le=()=>{T(_,()=>{q(),$&&$()})};F?F(_,q,le):le()}else r(_,h,p)},Ae=(u,h,p,y=!1,b=!1)=>{const{type:_,props:O,ref:x,children:k,dynamicChildren:w,shapeFlag:L,patchFlag:T,dirs:F}=u;if(x!=null&&Hr(x,null,p,u,!0),L&256){h.ctx.deactivate(u);return}const $=L&1&&F,q=!Fr(u);let le;if(q&&(le=O&&O.onVnodeBeforeUnmount)&&Fe(le,h,u),L&6)I(u.component,p,y);else{if(L&128){u.suspense.unmount(p,y);return}$&&dt(u,null,h,"beforeUnmount"),L&64?u.type.remove(u,h,p,b,re,y):w&&(_!==Re||T>0&&T&64)?E(w,h,p,!1,!0):(_===Re&&T&384||!b&&L&16)&&E(k,h,p),y&&ar(u)}(q&&(le=O&&O.onVnodeUnmounted)||$)&&we(()=>{le&&Fe(le,h,u),$&&dt(u,null,h,"unmounted")},p)},ar=u=>{const{type:h,el:p,anchor:y,transition:b}=u;if(h===Re){v(p,y);return}if(h===On){K(u);return}const _=()=>{a(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:O,delayLeave:x}=b,k=()=>O(p,_);x?x(u.el,_,k):k()}else _()},v=(u,h)=>{let p;for(;u!==h;)p=m(u),a(u),u=p;a(h)},I=(u,h,p)=>{const{bum:y,scope:b,update:_,subTree:O,um:x}=u;y&&fr(y),b.stop(),_&&(_.active=!1,Ae(O,u,h,p)),x&&we(x,h),we(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},E=(u,h,p,y=!1,b=!1,_=0)=>{for(let O=_;O<u.length;O++)Ae(u[O],h,p,y,b)},N=u=>u.shapeFlag&6?N(u.component.subTree):u.shapeFlag&128?u.suspense.next():m(u.anchor||u.el),J=(u,h,p)=>{u==null?h._vnode&&Ae(h._vnode,null,null,!0):P(h._vnode||null,u,h,null,null,null,p),Zo(),h._vnode=u},re={p:P,um:Ae,m:Ne,r:ar,mt:Et,mc:X,pc:xe,pbc:he,n:N,o:e};let W,U;return t&&([W,U]=t(re)),{render:J,hydrate:W,createApp:bu(J,W)}}function mt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xs(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=it(a[i]),s.el=o.el),n||xs(o,s))}}function xu(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Cu=e=>e.__isTeleport,Cs="components";function _u(e,t){return Eu(Cs,e,!0,t)||e}const ku=Symbol();function Eu(e,t,n=!0,r=!1){const a=Me||ue;if(a){const i=a.type;if(e===Cs){const s=Uu(i);if(s&&(s===t||s===Ue(t)||s===Xn(Ue(t))))return i}const o=xi(a[e]||i[e],t)||xi(a.appContext[e],t);return!o&&r?i:o}}function xi(e,t){return e&&(e[t]||e[Ue(t)]||e[Xn(Ue(t))])}const Re=Symbol(void 0),Aa=Symbol(void 0),Be=Symbol(void 0),On=Symbol(void 0),rn=[];let yt=null;function _s(e=!1){rn.push(yt=e?null:[])}function Au(){rn.pop(),yt=rn[rn.length-1]||null}let jn=1;function Ci(e){jn+=e}function ks(e){return e.dynamicChildren=jn>0?yt||Ft:null,Au(),jn>0&&yt&&yt.push(e),e}function Pu(e,t,n,r,a,i){return ks(Pa(e,t,n,r,a,i,!0))}function Ou(e,t,n,r,a){return ks(be(e,t,n,r,a,!0))}function Dr(e){return e?e.__v_isVNode===!0:!1}function pt(e,t){return e.type===t.type&&e.key===t.key}const nr="__vInternal",Es=({key:e})=>e!=null?e:null,Sn=({ref:e,ref_key:t,ref_for:n})=>e!=null?me(e)||de(e)||B(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function Pa(e,t=null,n=null,r=0,a=null,i=e===Re?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Es(t),ref:t&&Sn(t),scopeId:ns,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),jn>0&&!o&&yt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&yt.push(l),l}const be=Su;function Su(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ku)&&(e=Be),Dr(e)){const s=_t(e,t,!0);return n&&Oa(s,n),s}if(Bu(e)&&(e=e.__vccOpts),t){t=Ru(t);let{class:s,style:l}=t;s&&!me(s)&&(t.class=ca(s)),fe(l)&&(Uo(l)&&!H(l)&&(l=pe({},l)),t.style=la(l))}const o=me(e)?1:Vf(e)?128:Cu(e)?64:fe(e)?4:B(e)?2:0;return Pa(e,t,n,r,a,o,i,!0)}function Ru(e){return e?Uo(e)||nr in e?pe({},e):e:null}function _t(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Mu(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Es(s),ref:t&&t.ref?n&&a?H(a)?a.concat(Sn(t)):[a,Sn(t)]:Sn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor}}function Tu(e=" ",t=0){return be(Aa,null,e,t)}function As(e,t){const n=be(On,null,e);return n.staticCount=t,n}function Dm(e="",t=!1){return t?(_s(),Ou(Be,null,e)):be(Be,null,e)}function je(e){return e==null||typeof e=="boolean"?be(Be):H(e)?be(Re,null,e.slice()):typeof e=="object"?it(e):be(Aa,null,String(e))}function it(e){return e.el===null||e.memo?e:_t(e)}function Oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(nr in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Tu(t)]):n=8);e.children=t,e.shapeFlag|=n}function Mu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ca([t.class,r.class]));else if(a==="style")t.style=la([t.style,r.style]);else if(Vn(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Fe(e,t,n,r=null){Oe(e,t,7,[n,r])}function Um(e,t,n,r){let a;const i=n&&n[r];if(H(e)||me(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(fe(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ur=e=>e?Ps(e)?Sa(e)||e.proxy:Ur(e.parent):null,$n=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ur(e.parent),$root:e=>Ur(e.root),$emit:e=>e.emit,$options:e=>hs(e),$forceUpdate:e=>()=>Xo(e.update),$nextTick:e=>Go.bind(e.proxy),$watch:e=>Gf.bind(e)}),Iu={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ae&&V(r,t))return o[t]=1,r[t];if(a!==ae&&V(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&V(c,t))return o[t]=3,i[t];if(n!==ae&&V(n,t))return o[t]=4,n[t];zr&&(o[t]=0)}}const f=$n[t];let d,m;if(f)return t==="$attrs"&&ke(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ae&&V(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,V(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==ae&&V(a,t)?(a[t]=n,!0):r!==ae&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ae&&V(e,o)||t!==ae&&V(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V($n,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e.$.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Nu=ws();let Lu=0;function Fu(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Nu,i={uid:Lu++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new So(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gs(r,a),emitsOptions:ts(r,a),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Df.bind(null,i),e.ce&&e.ce(i),i}let ue=null;const zu=()=>ue||Me,$t=e=>{ue=e,e.scope.on()},wt=()=>{ue&&ue.scope.off(),ue=null};function Ps(e){return e.vnode.shapeFlag&4}let dn=!1;function ju(e,t=!1){dn=t;const{props:n,children:r}=e.vnode,a=Ps(e);du(e,n,a,t),pu(e,r);const i=a?$u(e,t):void 0;return dn=!1,i}function $u(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=wa(new Proxy(e.ctx,Iu));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Du(e):null;$t(e),Yt();const i=lt(r,e,0,[e.props,a]);if(Wt(),wt(),Ao(i)){if(i.then(wt,wt),t)return i.then(o=>{_i(e,o,t)}).catch(o=>{Jn(o,e,0)});e.asyncDep=i}else _i(e,i,t)}else Os(e,t)}function _i(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Vo(t)),Os(e,n)}let ki;function Os(e,t,n){const r=e.type;if(!e.render){if(!t&&ki&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=ki(a,c)}}e.render=r.render||Ie}$t(e),Yt(),su(e),Wt(),wt()}function Hu(e){return new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}})}function Du(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Hu(e))},slots:e.slots,emit:e.emit,expose:t}}function Sa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vo(wa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $n)return $n[n](e)}}))}function Uu(e){return B(e)&&e.displayName||e.name}function Bu(e){return B(e)&&"__vccOpts"in e}const $e=(e,t)=>Lf(e,t,dn);function Ss(e,t,n){const r=arguments.length;return r===2?fe(t)&&!H(t)?Dr(t)?be(e,null,[t]):be(e,t):be(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Dr(n)&&(n=[n]),be(e,t,n))}const Yu="3.2.32",Wu="http://www.w3.org/2000/svg",gt=typeof document!="undefined"?document:null,Ei=gt&&gt.createElement("template"),Ku={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?gt.createElementNS(Wu,e):gt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>gt.createTextNode(e),createComment:e=>gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ei.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ei.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Vu(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function qu(e,t,n){const r=e.style,a=me(n);if(n&&!a){for(const i in n)Br(r,i,n[i]);if(t&&!me(t))for(const i in t)n[i]==null&&Br(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ai=/\s*!important$/;function Br(e,t,n){if(H(n))n.forEach(r=>Br(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Gu(e,t);Ai.test(n)?e.setProperty(Bt(r),n.replace(Ai,""),"important"):e[r]=n}}const Pi=["Webkit","Moz","ms"],mr={};function Gu(e,t){const n=mr[t];if(n)return n;let r=Ue(t);if(r!=="filter"&&r in e)return mr[t]=r;r=Xn(r);for(let a=0;a<Pi.length;a++){const i=Pi[a]+r;if(i in e)return mr[t]=i}return t}const Oi="http://www.w3.org/1999/xlink";function Xu(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oi,t.slice(6,t.length)):e.setAttributeNS(Oi,t,n);else{const i=Uc(t);n==null||i&&!_o(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Qu(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=_o(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Hn=Date.now,Rs=!1;if(typeof window!="undefined"){Hn()>document.createEvent("Event").timeStamp&&(Hn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Rs=!!(e&&Number(e[1])<=53)}let Yr=0;const Ju=Promise.resolve(),Zu=()=>{Yr=0},ed=()=>Yr||(Ju.then(Zu),Yr=Hn());function td(e,t,n,r){e.addEventListener(t,n,r)}function nd(e,t,n,r){e.removeEventListener(t,n,r)}function rd(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=ad(t);if(r){const c=i[t]=id(r,a);td(e,s,c,l)}else o&&(nd(e,s,o,l),i[t]=void 0)}}const Si=/(?:Once|Passive|Capture)$/;function ad(e){let t;if(Si.test(e)){t={};let n;for(;n=e.match(Si);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Bt(e.slice(2)),t]}function id(e,t){const n=r=>{const a=r.timeStamp||Hn();(Rs||a>=n.attached-1)&&Oe(od(r,n.value),t,5,[r])};return n.value=e,n.attached=ed(),n}function od(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ri=/^on[a-z]/,sd=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Vu(e,r,a):t==="style"?qu(e,n,r):Vn(t)?fa(t)||rd(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ld(e,t,r,a))?Qu(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xu(e,t,r,a))};function ld(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ri.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ri.test(t)&&me(n)?!1:t in e}const cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jf.props;const fd=pe({patchProp:sd},Ku);let Ti;function ud(){return Ti||(Ti=yu(fd))}const dd=(...e)=>{const t=ud().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=md(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function md(e){return me(e)?document.querySelector(e):e}var hd=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const pd=Symbol();var Mi;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Mi||(Mi={}));function gd(){const e=ef(!0),t=e.run(()=>Wo({}));let n=[],r=[];const a=wa({install(i){a._a=i,i.provide(pd,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!hd?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}var vd=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const bd={},yd={class:"app"},wd=As('<div class="info"><p>This project is a learning exercise in <a href="https://vuejs.org/">Vue 3</a>, <a href="https://d3js.org/">D3</a>, and the <a href="https://api.stackexchange.com/">Stack Exchange API v2.3.</a></p><p>View source code here: <a href="https://github.com/caseprince/stackoverflow-data-vis">https://github.com/caseprince/stackoverflow-data-vis</a>/</p></div>',1),xd=As('<a href="https://github.com/caseprince/stackoverflow-data-vis" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513;color:#fff;position:absolute;top:0;border:0;right:0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>',1);function Cd(e,t){const n=_u("router-view");return _s(),Pu(Re,null,[Pa("div",yd,[wd,be(n)]),xd],64)}var _d=vd(bd,[["render",Cd]]);const kd="modulepreload",Ii={},Ed="./",Ad=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Ed}${r}`,r in Ii)return;Ii[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":kd,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((s,l)=>{o.addEventListener("load",s),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ts=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Kt=e=>Ts?Symbol(e):"_vr_"+e,Ms=Kt("rvlm"),Ni=Kt("rvd"),Ra=Kt("r"),Is=Kt("rl"),Wr=Kt("rvl"),Tt=typeof window!="undefined";function Pd(e){return e.__esModule||Ts&&e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function hr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const an=()=>{},Od=/\/$/,Sd=e=>e.replace(Od,"");function pr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Id(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Rd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Td(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Ht(t.matched[r],n.matched[a])&&Ns(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ht(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ns(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Md(e[n],t[n]))return!1;return!0}function Md(e,t){return Array.isArray(e)?Fi(e,t):Array.isArray(t)?Fi(t,e):e===t}function Fi(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Id(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var mn;(function(e){e.pop="pop",e.push="push"})(mn||(mn={}));var on;(function(e){e.back="back",e.forward="forward",e.unknown=""})(on||(on={}));function Nd(e){if(!e)if(Tt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Sd(e)}const Ld=/^[^#]+#/;function Fd(e,t){return e.replace(Ld,"#")+t}function zd(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const rr=()=>({left:window.pageXOffset,top:window.pageYOffset});function jd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=zd(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function zi(e,t){return(history.state?history.state.position-t:-1)+e}const Kr=new Map;function $d(e,t){Kr.set(e,t)}function Hd(e){const t=Kr.get(e);return Kr.delete(e),t}let Dd=()=>location.protocol+"//"+location.host;function Ls(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Li(l,"")}return Li(n,e)+r+a}function Ud(e,t,n,r){let a=[],i=[],o=null;const s=({state:m})=>{const g=Ls(e,location),C=n.value,R=t.value;let P=0;if(m){if(n.value=g,t.value=m,o&&o===C){o=null;return}P=R?m.position-R.position:0}else r(g);a.forEach(A=>{A(n.value,C,{delta:P,type:mn.pop,direction:P?P>0?on.forward:on.back:on.unknown})})};function l(){o=n.value}function c(m){a.push(m);const g=()=>{const C=a.indexOf(m);C>-1&&a.splice(C,1)};return i.push(g),g}function f(){const{history:m}=window;!m.state||m.replaceState(ee({},m.state,{scroll:rr()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function ji(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?rr():null}}function Bd(e){const{history:t,location:n}=window,r={value:Ls(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Dd()+e+l;try{t[f?"replaceState":"pushState"](c,"",m),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](m)}}function o(l,c){const f=ee({},t.state,ji(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=ee({},a.value,t.state,{forward:l,scroll:rr()});i(f.current,f,!0);const d=ee({},ji(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Yd(e){e=Nd(e);const t=Bd(e),n=Ud(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=ee({location:"",base:e,go:r,createHref:Fd.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Wd(e){return typeof e=="string"||e&&typeof e=="object"}function Fs(e){return typeof e=="string"||typeof e=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zs=Kt("nf");var $i;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($i||($i={}));function Dt(e,t){return ee(new Error,{type:e,[zs]:!0},t)}function rt(e,t){return e instanceof Error&&zs in e&&(t==null||!!(e.type&t))}const Hi="[^/]+?",Kd={sensitive:!1,strict:!1,start:!0,end:!0},Vd=/[.+*?^${}()[\]/\\]/g;function qd(e,t){const n=ee({},Kd,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const m=c[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(a+="/"),a+=m.value.replace(Vd,"\\$&"),g+=40;else if(m.type===1){const{value:C,repeatable:R,optional:P,regexp:A}=m;i.push({name:C,repeatable:R,optional:P});const M=A||Hi;if(M!==Hi){g+=10;try{new RegExp(`(${M})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+D.message)}}let j=R?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(j=P&&c.length<2?`(?:/${j})`:"/"+j),P&&(j+="?"),a+=j,g+=20,P&&(g+=-8),R&&(g+=-20),M===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const g=f[m]||"",C=i[m-1];d[C.name]=g&&C.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const m of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of m)if(g.type===0)f+=g.value;else if(g.type===1){const{value:C,repeatable:R,optional:P}=g,A=C in c?c[C]:"";if(Array.isArray(A)&&!R)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(A)?A.join("/"):A;if(!M)if(P)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=M}}return f}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Gd(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Xd(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Gd(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const Qd={type:0,value:""},Jd=/[a-zA-Z0-9_]/;function Zd(e){if(!e)return[[]];if(e==="/")return[[Qd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:Jd.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function em(e,t,n){const r=qd(Zd(e.path),n),a=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function tm(e,t){const n=[],r=new Map;t=Ui({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,m){const g=!m,C=rm(f);C.aliasOf=m&&m.record;const R=Ui(t,f),P=[C];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of j)P.push(ee({},C,{components:m?m.record.components:C.components,path:D,aliasOf:m?m.record:C}))}let A,M;for(const j of P){const{path:D}=j;if(d&&D[0]!=="/"){const K=d.record.path,te=K[K.length-1]==="/"?"":"/";j.path=d.record.path+(D&&te+D)}if(A=em(j,d,R),m?m.alias.push(A):(M=M||A,M!==A&&M.alias.push(A),g&&f.name&&!Di(A)&&o(f.name)),"children"in C){const K=C.children;for(let te=0;te<K.length;te++)i(K[te],A,m&&m.children[te])}m=m||A,l(A)}return M?()=>{o(M)}:an}function o(f){if(Fs(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Xd(f,n[d])>=0&&(f.record.path!==n[d].record.path||!js(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Di(f)&&r.set(f.record.name,f)}function c(f,d){let m,g={},C,R;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Dt(1,{location:f});R=m.record.name,g=ee(nm(d.params,m.keys.filter(M=>!M.optional).map(M=>M.name)),f.params),C=m.stringify(g)}else if("path"in f)C=f.path,m=n.find(M=>M.re.test(C)),m&&(g=m.parse(C),R=m.record.name);else{if(m=d.name?r.get(d.name):n.find(M=>M.re.test(d.path)),!m)throw Dt(1,{location:f,currentLocation:d});R=m.record.name,g=ee({},d.params,f.params),C=m.stringify(g)}const P=[];let A=m;for(;A;)P.unshift(A.record),A=A.parent;return{name:R,path:C,params:g,matched:P,meta:im(P)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function nm(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function rm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:am(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function am(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Di(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function im(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Ui(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function js(e,t){return t.children.some(n=>n===e||js(e,n))}const $s=/#/g,om=/&/g,sm=/\//g,lm=/=/g,cm=/\?/g,Hs=/\+/g,fm=/%5B/g,um=/%5D/g,Ds=/%5E/g,dm=/%60/g,Us=/%7B/g,mm=/%7C/g,Bs=/%7D/g,hm=/%20/g;function Ta(e){return encodeURI(""+e).replace(mm,"|").replace(fm,"[").replace(um,"]")}function pm(e){return Ta(e).replace(Us,"{").replace(Bs,"}").replace(Ds,"^")}function Vr(e){return Ta(e).replace(Hs,"%2B").replace(hm,"+").replace($s,"%23").replace(om,"%26").replace(dm,"`").replace(Us,"{").replace(Bs,"}").replace(Ds,"^")}function gm(e){return Vr(e).replace(lm,"%3D")}function vm(e){return Ta(e).replace($s,"%23").replace(cm,"%3F")}function bm(e){return e==null?"":vm(e).replace(sm,"%2F")}function Dn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ym(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Hs," "),o=i.indexOf("="),s=Dn(o<0?i:i.slice(0,o)),l=o<0?null:Dn(i.slice(o+1));if(s in t){let c=t[s];Array.isArray(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Bi(e){let t="";for(let n in e){const r=e[n];if(n=gm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Vr(i)):[r&&Vr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function wm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function qt(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function xm(e,t,n){const r=()=>{e[t].delete(n)};ka(r),cs(r),ls(()=>{e[t].add(n)}),e[t].add(n)}function Bm(e){const t=Ke(Ms,{}).value;!t||xm(t,"updateGuards",e)}function ot(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Dt(4,{from:n,to:t})):d instanceof Error?s(d):Wd(d)?s(Dt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function gr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Cm(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ot(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Pd(c)?c.default:c;i.components[o]=f;const m=(f.__vccOpts||f)[t];return m&&ot(m,n,r,i,o)()}))}}return a}function Cm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yi(e){const t=Ke(Ra),n=Ke(Is),r=$e(()=>t.resolve(en(e.to))),a=$e(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(Ht.bind(null,f));if(m>-1)return m;const g=Wi(l[c-2]);return c>1&&Wi(f)===g&&d[d.length-1].path!==g?d.findIndex(Ht.bind(null,l[c-2])):m}),i=$e(()=>a.value>-1&&Am(n.params,r.value.params)),o=$e(()=>a.value>-1&&a.value===n.matched.length-1&&Ns(n.params,r.value.params));function s(l={}){return Em(l)?t[en(e.replace)?"replace":"push"](en(e.to)).catch(an):Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const _m=ss({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yi,setup(e,{slots:t}){const n=pn(Yi(e)),{options:r}=Ke(Ra),a=$e(()=>({[Ki(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ki(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ss("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),km=_m;function Em(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Am(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Wi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ki=(e,t,n)=>e!=null?e:t!=null?t:n,Pm=ss({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Ke(Wr),a=$e(()=>e.route||r.value),i=Ke(Ni,0),o=$e(()=>a.value.matched[i]);An(Ni,i+1),An(Ms,o),An(Wr,a);const s=Wo();return Pn(()=>[s.value,o.value,e.name],([l,c,f],[d,m,g])=>{c&&(c.instances[f]=l,m&&m!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),l&&c&&(!m||!Ht(c,m)||!d)&&(c.enterCallbacks[f]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=a.value,c=o.value,f=c&&c.components[e.name],d=e.name;if(!f)return Vi(n.default,{Component:f,route:l});const m=c.props[e.name],g=m?m===!0?l.params:typeof m=="function"?m(l):m:null,R=Ss(f,ee({},g,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(c.instances[d]=null)},ref:s}));return Vi(n.default,{Component:R,route:l})||R}}});function Vi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Om=Pm;function Sm(e){const t=tm(e.routes,e),n=e.parseQuery||ym,r=e.stringifyQuery||Bi,a=e.history,i=qt(),o=qt(),s=qt(),l=Sf(nt);let c=nt;Tt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=hr.bind(null,v=>""+v),d=hr.bind(null,bm),m=hr.bind(null,Dn);function g(v,I){let E,N;return Fs(v)?(E=t.getRecordMatcher(v),N=I):N=v,t.addRoute(N,E)}function C(v){const I=t.getRecordMatcher(v);I&&t.removeRoute(I)}function R(){return t.getRoutes().map(v=>v.record)}function P(v){return!!t.getRecordMatcher(v)}function A(v,I){if(I=ee({},I||l.value),typeof v=="string"){const U=pr(n,v,I.path),u=t.resolve({path:U.path},I),h=a.createHref(U.fullPath);return ee(U,u,{params:m(u.params),hash:Dn(U.hash),redirectedFrom:void 0,href:h})}let E;if("path"in v)E=ee({},v,{path:pr(n,v.path,I.path).path});else{const U=ee({},v.params);for(const u in U)U[u]==null&&delete U[u];E=ee({},v,{params:d(v.params)}),I.params=d(I.params)}const N=t.resolve(E,I),J=v.hash||"";N.params=f(m(N.params));const re=Rd(r,ee({},v,{hash:pm(J),path:N.path})),W=a.createHref(re);return ee({fullPath:re,hash:J,query:r===Bi?wm(v.query):v.query||{}},N,{redirectedFrom:void 0,href:W})}function M(v){return typeof v=="string"?pr(n,v,l.value.path):ee({},v)}function j(v,I){if(c!==v)return Dt(8,{from:I,to:v})}function D(v){return Y(v)}function K(v){return D(ee(M(v),{replace:!0}))}function te(v){const I=v.matched[v.matched.length-1];if(I&&I.redirect){const{redirect:E}=I;let N=typeof E=="function"?E(v):E;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=M(N):{path:N},N.params={}),ee({query:v.query,hash:v.hash,params:v.params},N)}}function Y(v,I){const E=c=A(v),N=l.value,J=v.state,re=v.force,W=v.replace===!0,U=te(E);if(U)return Y(ee(M(U),{state:J,force:re,replace:W}),I||E);const u=E;u.redirectedFrom=I;let h;return!re&&Td(r,N,E)&&(h=Dt(16,{to:u,from:N}),At(N,N,!0,!1)),(h?Promise.resolve(h):X(u,N)).catch(p=>rt(p)?rt(p,2)?p:xe(p):ne(p,u,N)).then(p=>{if(p){if(rt(p,2))return Y(ee(M(p.to),{state:J,force:re,replace:W}),I||u)}else p=he(u,N,!0,W,J);return ye(u,N,p),p})}function ie(v,I){const E=j(v,I);return E?Promise.reject(E):Promise.resolve()}function X(v,I){let E;const[N,J,re]=Rm(v,I);E=gr(N.reverse(),"beforeRouteLeave",v,I);for(const U of N)U.leaveGuards.forEach(u=>{E.push(ot(u,v,I))});const W=ie.bind(null,v,I);return E.push(W),Ot(E).then(()=>{E=[];for(const U of i.list())E.push(ot(U,v,I));return E.push(W),Ot(E)}).then(()=>{E=gr(J,"beforeRouteUpdate",v,I);for(const U of J)U.updateGuards.forEach(u=>{E.push(ot(u,v,I))});return E.push(W),Ot(E)}).then(()=>{E=[];for(const U of v.matched)if(U.beforeEnter&&!I.matched.includes(U))if(Array.isArray(U.beforeEnter))for(const u of U.beforeEnter)E.push(ot(u,v,I));else E.push(ot(U.beforeEnter,v,I));return E.push(W),Ot(E)}).then(()=>(v.matched.forEach(U=>U.enterCallbacks={}),E=gr(re,"beforeRouteEnter",v,I),E.push(W),Ot(E))).then(()=>{E=[];for(const U of o.list())E.push(ot(U,v,I));return E.push(W),Ot(E)}).catch(U=>rt(U,8)?U:Promise.reject(U))}function ye(v,I,E){for(const N of s.list())N(v,I,E)}function he(v,I,E,N,J){const re=j(v,I);if(re)return re;const W=I===nt,U=Tt?history.state:{};E&&(N||W?a.replace(v.fullPath,ee({scroll:W&&U&&U.scroll},J)):a.push(v.fullPath,J)),l.value=v,At(v,I,E,W),xe()}let ge;function Ze(){ge=a.listen((v,I,E)=>{const N=A(v),J=te(N);if(J){Y(ee(J,{replace:!0}),N).catch(an);return}c=N;const re=l.value;Tt&&$d(zi(re.fullPath,E.delta),rr()),X(N,re).catch(W=>rt(W,12)?W:rt(W,2)?(Y(W.to,N).then(U=>{rt(U,20)&&!E.delta&&E.type===mn.pop&&a.go(-1,!1)}).catch(an),Promise.reject()):(E.delta&&a.go(-E.delta,!1),ne(W,N,re))).then(W=>{W=W||he(N,re,!1),W&&(E.delta?a.go(-E.delta,!1):E.type===mn.pop&&rt(W,20)&&a.go(-1,!1)),ye(N,re,W)}).catch(an)})}let kt=qt(),Et=qt(),ce;function ne(v,I,E){xe(v);const N=Et.list();return N.length?N.forEach(J=>J(v,I,E)):console.error(v),Promise.reject(v)}function Q(){return ce&&l.value!==nt?Promise.resolve():new Promise((v,I)=>{kt.add([v,I])})}function xe(v){return ce||(ce=!v,Ze(),kt.list().forEach(([I,E])=>v?E(v):I()),kt.reset()),v}function At(v,I,E,N){const{scrollBehavior:J}=e;if(!Tt||!J)return Promise.resolve();const re=!E&&Hd(zi(v.fullPath,0))||(N||!E)&&history.state&&history.state.scroll||null;return Go().then(()=>J(v,I,re)).then(W=>W&&jd(W)).catch(W=>ne(W,v,I))}const Ye=v=>a.go(v);let Ne;const Ae=new Set;return{currentRoute:l,addRoute:g,removeRoute:C,hasRoute:P,getRoutes:R,resolve:A,options:e,push:D,replace:K,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Et.add,isReady:Q,install(v){const I=this;v.component("RouterLink",km),v.component("RouterView",Om),v.config.globalProperties.$router=I,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>en(l)}),Tt&&!Ne&&l.value===nt&&(Ne=!0,D(a.location).catch(J=>{}));const E={};for(const J in nt)E[J]=$e(()=>l.value[J]);v.provide(Ra,I),v.provide(Is,pn(E)),v.provide(Wr,l);const N=v.unmount;Ae.add(v),v.unmount=function(){Ae.delete(v),Ae.size<1&&(c=nt,ge&&ge(),l.value=nt,Ne=!1,ce=!1),N()}}}}function Ot(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Rm(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Ht(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Ht(c,l))||a.push(l))}return[n,r,a]}const Tm=[{path:"/:catchAll(.*)",name:"Stack Overflow Visualizer",component:()=>Ad(()=>import("./SOVisualizer.c6d3ae83.js"),["assets/SOVisualizer.c6d3ae83.js","assets/SOVisualizer.6826cdf8.css"])}],Mm=Sm({history:Yd(),routes:Tm}),Im=gd();Ec.add(Ac,Pc,Oc,jc,Fc,Ic,$c,Sc,Rc,Tc,Nc,Hc);const Nm=dd(_d).use(Mm).use(Im);Nm.mount("#app");export{Dm as A,Ou as B,Re as F,vd as _,$e as a,Hm as b,Lm as c,ss as d,Pu as e,Pa as f,As as g,Ss as h,zm as i,Mm as j,us as k,Bm as l,nu as m,ca as n,_s as o,Fm as p,ds as q,pn as r,Wo as s,jm as t,be as u,en as v,Pn as w,Tu as x,$m as y,Um as z};

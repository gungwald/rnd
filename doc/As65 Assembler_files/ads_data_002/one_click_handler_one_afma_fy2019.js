(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var m=this||self; 
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"== 
b&&"undefined"==typeof a.call)return"object";return b}function p(a){return"function"==n(a)}var aa="closure_uid_"+(1E9*Math.random()>>>0),ba=0,ca=Date.now||function(){return+new Date};function q(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};function da(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};function ea(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function t(a,b){this.b=a===fa&&b||"";this.c=ha}t.prototype.f=!0;t.prototype.a=function(){return this.b.toString()};var ia=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function ka(a){if(a instanceof t)return a;a="object"==typeof a&&a.f?a.a():String(a);ia.test(a)||(a="about:invalid#zClosurez");return new t(fa,a)}var ha={},fa={};var u;a:{var la=m.navigator;if(la){var ma=la.userAgent;if(ma){u=ma;break a}}u=""};function pa(){return-1!=u.indexOf("iPhone")&&-1==u.indexOf("iPod")&&-1==u.indexOf("iPad")};function qa(a){qa[" "](a);return a}qa[" "]=function(){};var ra=pa(),sa=-1!=u.indexOf("iPad");var ta=pa()||-1!=u.indexOf("iPod"),ua=-1!=u.indexOf("iPad");function x(a,b){this.b=a;this.f=b;this.a={};this.c=!0;if(0<this.b.length){for(a=0;a<this.b.length;a++){b=this.b[a];var c=b[0];this.a[c.toString()]=new va(c,b[1])}this.c=!0}}x.prototype.i=function(){if(this.c){if(this.f){var a=this.a,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].a;c&&c.i()}}}else{this.b.length=0;a=y(this);a.sort();for(b=0;b<a.length;b++){var d=this.a[a[b]];(c=d.a)&&c.i();this.b.push([d.key,d.value])}this.c=!0}return this.b};function z(a){this.a=0;this.b=a} 
z.prototype.next=function(){return this.a<this.b.length?{done:!1,value:this.b[this.a++]}:{done:!0,value:void 0}};"undefined"!=typeof Symbol&&(z.prototype[Symbol.iterator]=function(){return this});x.prototype.entries=function(){var a=[],b=y(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,A(this,d)])}return new z(a)};x.prototype.keys=function(){var a=[],b=y(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.a[b[c]].key);return new z(a)}; 
x.prototype.values=function(){var a=[],b=y(this);b.sort();for(var c=0;c<b.length;c++)a.push(A(this,this.a[b[c]]));return new z(a)};function wa(a,b){var c=y(a);c.sort();for(var d=0;d<c.length;d++){var e=a.a[c[d]];b.call(void 0,A(a,e),e.key,a)}}x.prototype.set=function(a,b){var c=new va(a);this.f?(c.a=b,c.value=b.i()):c.value=b;this.a[a.toString()]=c;this.c=!1;return this};function A(a,b){return a.f?(b.a||(b.a=new a.f(b.value)),b.a):b.value} 
x.prototype.get=function(a){if(a=this.a[a.toString()])return A(this,a)};x.prototype.has=function(a){return a.toString()in this.a};function y(a){a=a.a;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function va(a,b){this.key=a;this.value=b;this.a=void 0};function B(){}var xa="function"==typeof Uint8Array;function C(a,b,c){a.a=null;b||(b=[]);a.j=void 0;a.f=-1;a.b=b;a:{if(b=a.b.length){--b;var d=a.b[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||xa&&d instanceof Uint8Array)){a.g=b-a.f;a.c=d;break a}}a.g=Number.MAX_VALUE}a.h={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.g?(d+=a.f,a.b[d]=a.b[d]||D):(ya(a),a.c[d]=a.c[d]||D)}var D=[];function ya(a){var b=a.g+a.f;a.b[b]||(a.c=a.b[b]={})} 
function E(a,b){if(b<a.g){b+=a.f;var c=a.b[b];return c===D?a.b[b]=[]:c}if(a.c)return c=a.c[b],c===D?a.c[b]=[]:c}function F(a,b,c){a=E(a,b);return null==a?c:a}function G(a,b){a=E(a,b);a=null==a?a:!!a;return null==a?!1:a}function H(a,b,c){a.a||(a.a={});if(b in a.a)return a.a[b];var d=E(a,b);d||(d=[],I(a,b,d));return a.a[b]=new x(d,c)}function I(a,b,c){b<a.g?a.b[b+a.f]=c:(ya(a),a.c[b]=c)}function za(a){var b=Aa;a.a||(a.a={});if(!a.a[8]){var c=E(a,8);c&&(a.a[8]=new b(c))}return a.a[8]} 
function Ba(a){if(a.a)for(var b in a.a){var c=a.a[b];if("array"==n(c))for(var d=0;d<c.length;d++)c[d]&&c[d].i();else c&&c.i()}}B.prototype.i=function(){Ba(this);return this.b};B.prototype.toString=function(){Ba(this);return this.b.toString()}; 
function K(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?K(d):d)}return b}if(xa&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?K(d):d);return b};function Ca(a){C(this,a,null)}q(Ca,B);function L(a){C(this,a,Da)}q(L,B);function Aa(a){C(this,a,null)}q(Aa,B);var Da=[6,7];function Ea(a){C(this,a,Fa)}q(Ea,B);var Fa=[7];var Ga={capture:!0},Ha={passive:!0},Ia=ea(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function Ja(a){return a?a.passive&&Ia()?a:a.capture||!1:!1}function M(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Ja(d))}function Ka(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,Ja(void 0))};function N(a,b,c=null){La(a,b,c)}function La(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=a.document.createElement("img");if(c){const e=f=>{c&&c(f);Ka(d,"load",e);Ka(d,"error",e)};M(d,"load",e);M(d,"error",e)}d.src=b;a.google_image_requests.push(d)};let Ma=0;var Na=(a,b=null)=>b&&b.getAttribute("data-jc")==a?b:document.querySelector(`[${"data-jc"}="${a}"]`),Oa=a=>{if(!(.01<Math.random())){var b=(b=Na(a,document.currentScript))&&b.getAttribute("data-jc-version")||"unknown";a=`https://${"pagead2.googleadservices.com"}/pagead/gen_204?id=jca&jc=${a}&version=${b}&sample=${.01}`;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):N(b,a)}};var O=document,P=window;function Pa(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Pa(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};function R(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{qa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Qa(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var Ra=a=>{"complete"===O.readyState||"interactive"===O.readyState?a():O.addEventListener("DOMContentLoaded",a)};/* 
 Copyright (c) Microsoft Corporation. All rights reserved. 
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use 
 this file except in compliance with the License. You may obtain a copy of the 
 License at http://www.apache.org/licenses/LICENSE-2.0 
 
 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY 
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED 
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
 MERCHANTABLITY OR NON-INFRINGEMENT. 
 
 See the Apache Version 2.0 License for specific language governing permissions 
 and limitations under the License. 
*/ 
var Sa=/^((market|itms|intent|itms-appss):\/\/)/i;var S=(a,b,c)=>{b=b instanceof t||!Sa.test(b)?b:new t(fa,b);"about:invalid#zClosurez"===(b instanceof t?b:ka(b)).a()&&c(String(b));c=b instanceof t?b:ka(b);c instanceof t&&c.constructor===t&&c.c===ha?c=c.b:(n(c),c="type_error:SafeUrl");a.href=c},T=a=>{var b=`${"http:"===P.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)Pa(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");0>c&&(c=b.length);d=b.indexOf("?"); 
if(0>d||d>c){d=c;var f=""}else f=b.substring(d+1,c);c=[b.substr(0,d),f,b.substr(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};var Ta=!!window.google_async_iframe_id;let U=Ta&&window.parent||window;var Ua=a=>{try{return O.querySelectorAll("*["+a+"]")}catch(b){return[]}};class Va{constructor(a,b,c={}){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}};const Wa=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Xa=class{constructor(a,b){this.a=a;this.b=b}},Ya=class{constructor(a,b,c,d,e){this.url=a;this.v=!!d;this.depth="number"===typeof e?e:null}};function $a(a,b){const c={};c[a]=b;return[c]}function ab(a,b,c,d,e){const f=[];Qa(a,function(h,g){(h=bb(h,b,c,d,e))&&f.push(g+"="+h)});return f.join(b)} 
function bb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let h=0;h<a.length;h++)f.push(bb(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ab(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function cb(a,b,c,d){a.a.push(b);a.b[b]=$a(c,d)} 
function db(a){if(!a.f)return a.h;let b=1;for(const c in a.b)b=c.length>b?c.length:b;return a.h-a.f.length-b-a.c.length-1} 
function eb(a,b,c,d){b=b+"//"+c+d;let e=db(a)-d.length;if(0>e)return"";a.a.sort(function(h,g){return h-g});d=null;c="";for(var f=0;f<a.a.length;f++){const h=a.a[f],g=a.b[h];for(let l=0;l<g.length;l++){if(!e){d=null==d?h:d;break}let k=ab(g[l],a.c,a.j);if(k){k=c+k;if(e>=k.length){e-=k.length;b+=k;c=a.c;break}a.g&&(c=e,k[c-1]==a.c&&--c,b+=k.substr(0,c),c=a.c,e=0);d=null==d?h:d}}}f="";a.f&&null!=d&&(f=c+a.f+"="+(a.u||d));return b+f} 
class fb{constructor(a,b,c,d,e){this.h=c||4E3;this.c=a||"&";this.j=b||",$";this.f=void 0!==d?d:"trn";this.u=e||null;this.g=!1;this.b={};this.m=0;this.a=[]}};function gb(a,b,c,d,e,f){if((d?a.a:Math.random())<(e||a.b))try{let h;c instanceof fb?h=c:(h=new fb,Qa(c,(l,k)=>{var v=h,r=v.m++;l=$a(k,l);v.a.push(r);v.b[r]=l}));const g=eb(h,a.g,a.c,a.f+b+"&");g&&("undefined"===typeof f?N(m,g):N(m,g,f))}catch(h){}}class ib{constructor(a,b,c,d){this.g=a;this.c=b;this.f=c;this.b=d;this.a=Math.random()}};let jb=null;var kb=()=>{const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):ca()},lb=()=>{const a=m.performance;return a&&a.now?a.now():null};class nb{constructor(a,b,c,d=0,e){this.label=a;this.type=b;this.value=c;this.duration=d;this.uniqueId=Math.random();this.slotId=e}};const V=m.performance,ob=!!(V&&V.mark&&V.measure&&V.clearMarks),W=ea(()=>{var a;if(a=ob){var b;if(null===jb){jb="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(jb=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=jb;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function pb(a){a&&V&&W()&&(V.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),V.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class qb{constructor(a,b){this.b=[];this.c=b||m;let c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.b=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.a=W()||(null!=c?c:Math.random()<a)}start(a,b){if(!this.a)return null;const c=lb()||kb();a=new nb(a,b,c);b=`goog_${a.label}_${a.uniqueId}_start`;V&&W()&&V.mark(b);return a}};function rb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function sb(a,b,c){let d,e;try{if(a.a&&a.a.a){e=a.a.start(b.toString(),3);d=c();var f=a.a;c=e;if(f.a&&"number"===typeof c.value){var h=lb()||kb();c.duration=h-c.value;var g=`goog_${c.label}_${c.uniqueId}_end`;V&&W()&&V.mark(g);!f.a||2048<f.b.length||f.b.push(c)}}else d=c()}catch(l){f=a.h;try{pb(e),f=a.j(b,new Va(l,{message:rb(l)}),void 0,void 0)}catch(k){a.g(217,k)}if(!f)throw l;}return d}function tb(a,b){var c=ub;return(...d)=>sb(c,a,()=>b.apply(void 0,d))} 
class vb{constructor(a,b,c,d=null){this.c=a;this.m=b;this.h=c;this.b=null;this.j=this.g;this.a=d;this.f=!1}pinger(){return this.c}g(a,b,c,d,e){e=e||this.m;let f;try{const w=new fb;w.g=!0;cb(w,1,"context",a);b.error&&b.meta&&b.id||(b=new Va(b,{message:rb(b)}));b.msg&&cb(w,2,"msg",b.msg.substring(0,512));var h=b.meta||{};b=h;if(this.b)try{this.b(b)}catch(J){}if(d)try{d(b)}catch(J){}d=w;h=[h];d.a.push(3);d.b[3]=h;{{d=m;h=[];b=null;let na;do{var g=d;if(R(g)){var l=g.location.href;b=g.document&&g.document.referrer|| 
null;na=!0}else l=b,b=null,na=!1;h.push(new Ya(l||"",g,na));try{d=g.parent}catch(Q){d=null}}while(d&&g!=d);for(let Q=0,Za=h.length-1;Q<=Za;++Q)h[Q].depth=Za-Q;g=m;if(g.location&&g.location.ancestorOrigins&&g.location.ancestorOrigins.length==h.length-1)for(l=1;l<h.length;++l){var k=h[l];k.url||(k.url=g.location.ancestorOrigins[l-1]||"",k.v=!0)}var v=h}let J=new Ya(m.location.href,m,!0,!1);g=null;const oa=v.length-1;for(k=oa;0<=k;--k){var r=v[k];!g&&Wa.test(r.url)&&(g=r);if(r.url&&!r.v){J=r;break}}r= 
null;const Hb=v.length&&v[oa].url;0!=J.depth&&Hb&&(r=v[oa]);f=new Xa(J,r,g)}f.b&&cb(w,4,"top",f.b.url||"");cb(w,5,"url",f.a.url||"");gb(this.c,e,w,this.f,c)}catch(w){try{gb(this.c,e,{context:"ecmserr",rctx:a,msg:rb(w),url:f&&f.a.url},this.f,c)}catch(J){}}return this.h}};let X,ub;if(Ta&&!R(U)){let a="."+O.domain;try{for(;2<a.split(".").length&&!R(U);)O.domain=a=a.substr(a.indexOf(".")+1),U=window.parent}catch(b){}R(U)||(U=window)}const Y=U,Z=new qb(1,Y);var wb=()=>{Y.google_measure_js_timing||(Z.a=!1,Z.b!=Z.c.google_js_reporting_queue&&(W()&&Array.prototype.forEach.call(Z.b,pb,void 0),Z.b.length=0))};X=new ib("http:"===P.location.protocol?"http:":"https:","pagead2.googlesyndication.com","/pagead/gen_204?id=",.01);"number"!==typeof Y.google_srt&&(Y.google_srt=Math.random()); 
var xb=Y.google_srt;0<=xb&&1>=xb&&(X.a=xb);ub=new vb(X,"jserror",!0,Z); 
ub.b=a=>{var b=P.jerExpIds;if("array"==n(b)&&0!==b.length){var c=a.eid;if(c){c=[...c.split(","),...b];b={};for(var d=0,e=0;e<c.length;){var f=c[e++];var h=f;var g=typeof h;h="object"==g&&null!=h||"function"==g?"o"+(Object.prototype.hasOwnProperty.call(h,aa)&&h[aa]||(h[aa]=++ba)):(typeof h).charAt(0)+h;Object.prototype.hasOwnProperty.call(b,h)||(b[h]=!0,c[d++]=f)}c.length=d;a.eid=c.join(",")}else a.eid=b.join(",")}0!==Ma&&(a.jc=String(Ma));(c=P.jerUserAgent)&&(a.useragent=c)};ub.f=!0; 
"complete"==Y.document.readyState?wb():Z.a&&M(Y,"load",()=>{wb()});var yb=(a,b)=>tb(a,b);function zb(a){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var b=/[?&]adurl=([^&]+)/.exec(a);if(!b)return null;var c=b.index;try{return{o:a.slice(0,c)+"&act=1"+a.slice(c),finalUrl:decodeURIComponent(b[1])}}catch(d){return null}}if(/[?&]ae=2(&|$)/.test(a)){b=a;c="";{const d=a.indexOf("&adurl=");0<d&&(b=a.slice(0,d),c=a.slice(d))}return{o:b+"&act=1"+c,finalUrl:b+"&dct=1"+c}}return null};function Ab(a){const {l:b}=Bb(a.href);S(a,b,T(599))}function Cb(a,b,c=-1){b?300>Date.now()-c||((b=a.getAttribute("data-orig-async-clicktrack-url"))?({l:b}=Bb(b),S(a,b,T(599))):(a.setAttribute("data-orig-async-clicktrack-url",a.href),Ab(a))):Ab(a)}function Bb(a){const b=zb(a);return b?navigator.sendBeacon?navigator.sendBeacon(Db(b.o,"&ri=1"),"")?{l:b.finalUrl,s:!0}:{l:Db(a,"&ri=2"),s:!1}:{l:Db(a,"&ri=16"),s:!1}:{l:a,s:!1}} 
function Db(a,b){const c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)};var Eb=(a,b)=>{b=F(a,2,"")||b;if(!b)return"";const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];wa(H(a,4,null),(e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Fb=a=>{const b=Ua("data-asoch-targets");a=H(a,1,L);const c=[];for(let g=0;g<b.length;++g){var d=b[g].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let l of e)if(!a.has(l)){f=!1;break}if(f){f=a.get(e[0]);for(d=1;d<e.length;++d){{var h= 
a.get(e[d]);f=(new f.constructor(K(f.i()))).i();h=h.i();const l=Math.max(f.length,h.length);for(let k=0;k<l;++k)null==f[k]&&(f[k]=h[k]);f=new L(f)}}e=H(f,4,null);null!=E(f,5)&&e.set("nb",F(f,5,0).toString());c.push({element:b[g],data:f})}else gb(X,"gdn-asoch",{type:1,data:d},!0,void 0,void 0)}return c},Gb=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!G(a,1)){const c=b.element,d=Eb(a,c.href);0<d.length&&(S(c,d,T(609)),c.target||(c.target=null!=E(a,11)?F(a,11,""):"_top"))}};function Ib(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==E(c,2)&&I(c,2,a.href)}}function Jb(a,b){return da(a,c=>c.element===b)}function Kb(a){P.fetch?P.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(b=>{b.ok||N(P,a)}):N(P,a)} 
function Lb(a,b,c){const d=za(b);let e=F(d,2,"");wa(H(b,10,null),(f,h)=>{{var g=e;h=encodeURIComponent(h);const l=encodeURIComponent(f);f=new RegExp("[?&]"+h+"=([^&]+)");const k=f.exec(g);console.log(k);h=h+"="+l;e=k?g.replace(f,k[0].charAt(0)+h):g.replace("?","?"+h+"&")}});return c.redirectForStoreU2({clickUrl:a,trackingUrl:F(d,3,""),finalUrl:e,pingFunc:c.click,openFunc:c.openIntentOrNativeApp})}function Mb(){Ra(yb(556,()=>{new Nb(70)}))} 
function Ob(a,b,c,d){for(var e;!c.id;)if(e="asoch-id-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ca()).toString(36)),!O.getElementById(e)){c.id=e;break}e=c.id;p(window.xy)&&window.xy(b,c,O.body);p(window.mb)&&window.mb(c);p(window.bgz)&&window.bgz(e);p(window.ja)&&window.ja(e,d?F(d,5,0):0);a.c&&p(window.ss)&&(a.u?window.ss(e,1,a.c):window.ss(a.c,1))} 
class Nb{constructor(a){const b=Ua("data-asoch-meta");1!==b.length?gb(X,"gdn-asoch",{type:2,data:b.length},!0,void 0,void 0):(this.j=a,this.b=new Ea(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]),this.a=Fb(this.b),this.f=-Infinity,this.c=F(this.b,5,"")||"",this.u=!1,this.m=ta||ra||ua||sa,this.h=this.g=null,G(this.b,3)||(Gb(this.a),I(this.b,3,!0)),Ib(this.a),M(O,"click",yb(557,c=>{a:if(!c.defaultPrevented||this.g===c){for(var d,e,f=c.target;(!d||!e)&&f;){e||"A"!=f.tagName||(e=f);if(!d&&("A"== 
f.tagName||f.hasAttribute("data-asoch-targets"))){var h=Jb(this.a,f);h&&(d=h.data)}f=f.parentElement}if(f=d&&!G(d,1)){if(c.defaultPrevented){var g=d;if(this.g===c&&this.h){f=new Ca(this.h);d=F(g,9,"");h="";switch(F(f,4,1)){case 2:if(F(f,2,0))h="blocked_fast_click";else if(F(f,1,"")||F(f,7,""))h="blocked_border_click";break;case 3:f=O.getElementById?O.getElementById("common_15click_anchor"):null,p(window.copfcChm)&&f&&(g=new g.constructor(K(g.i())),I(g,5,12),H(g,4,null).set("nb",(12).toString()),(h= 
Jb(this.a,f))?h.data=g:this.a.push({element:f,data:g}),e&&(Ob(this,c,e,g),I(g,2,e.href)),window.copfcChm(c,Eb(g,f.href))),h="onepointfiveclick_first_click"}d&&h&&Kb(d+"&label="+h);Oa(this.j)}break a}h=d;for(g of E(h,6))Kb(g)}if(e&&f){d=f?d:null;(g=Jb(this.a,e))?g=g.data:(g=new L,I(g,2,e.href),I(g,11,e.target||"_top"),this.a.push({element:e,data:g}));g=Eb(d||g,F(g,2,""));0<g.length&&(S(e,g,T(557)),e.target||(e.target=d&&null!=E(d,11)?F(d,11,""):"_top"));G(this.b,9)?(g=e.href,g=(f=/[?&]adurl=([^&]+)/.exec(g))? 
[g.slice(0,f.index),g.slice(f.index)]:[g,""],S(e,g[0],T(557)),Ob(this,c,e,d),S(e,e.href+g[1],T(557))):Ob(this,c,e,d);g=(f=G(this.b,2))&&300<Date.now()-this.f;if(window.oneAfmaInstance)b:{c.preventDefault?c.preventDefault():c.returnValue=!1,c=window.oneAfmaInstance,e=c.appendClickSignals(e.href),e=c.logScionEventAndAddParam(e);if(d&&null!=E(d,8)&&(h=za(d),this.m&&G(h,5)&&null!=E(h,4))){c.click(e);c.openInAppStore(F(h,4,""));break b}d&&null!=E(d,8)&&Lb(e,d,c)||(f&&(d=zb(e))&&(g&&(e=d.o,f=e.search(/&adurl=/), 
e=0>f?e+"&ri=1":e.slice(0,f)+"&ri=1"+e.slice(f),(0,c.click)(e)),e=d.finalUrl),e.startsWith("intent:")?c.openIntentOrNativeApp(e):c.openSystemBrowser(e,{useFirstPackage:!0,useRunningProcess:!0}))}else g&&Cb(e,G(this.b,8),this.f);g&&(this.f=Date.now());Oa(this.j)}}}),Ga),this.c&&p(window.ss)&&M(O.body,"mouseover",yb(626,()=>{window.ss(this.c,0)}),Ha),window.googqscp&&p(window.googqscp.registerCallback)&&window.googqscp.registerCallback((c,d)=>{this.g=c;this.h=d}))}};var Pb=yb(555,()=>Mb());Ma=70;Pb();}).call(this);

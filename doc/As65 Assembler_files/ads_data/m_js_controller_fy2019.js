(function(_){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var ba,ia,la,na,qa,ta,C,Ka,La,Ma,Oa,Ta,Za,$a,bb,db,eb,fb,ib,rb,sb,ub,wb,vb,xb,yb,zb,Db,Eb,Kb,Lb,Ob,Qb,Rb,Tb,Wb,Xb,Yb,Zb,$b,ac,bc,cc,fc,hc,ic,kc,lc,pc,nc,qc,uc,vc,xc,Ac,Hc,Jc,Kc,Lc;ba=function(a){return function(){return _.aa[a].apply(this,arguments)}};_.r=function(a,b,c){a=a.split(".");c=c||_.m;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};_.ca=function(){}; 
_.da=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null"; 
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.ea=function(a){return"function"==_.da(a)};_.ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};ia=function(a,b,c){return a.call.apply(a.bind,arguments)}; 
la=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};_.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.t=ia:_.t=la;return _.t.apply(null,arguments)}; 
_.v=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};_.y=function(a,b){function c(){}c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a};_.ma=function(a,b,c){Array.prototype.forEach.call(a,b,c)};na=function(a,b){return Array.prototype.filter.call(a,b,void 0)}; 
_.oa=function(a,b){b=Array.prototype.indexOf.call(a,b,void 0);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};_.pa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};qa=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};ta=function(a,b){this.c=a===ra&&b||"";this.g=sa};_.ua=function(a){return a instanceof ta&&a.constructor===ta&&a.g===sa?a.c:"type_error:Const"};_.z=function(a){return new ta(ra,a)}; 
_.A=function(a,b){this.g=a===_.wa&&b||"";this.h=xa};_.ya=function(a){if(a instanceof _.A&&a.constructor===_.A&&a.h===xa)return a.g;_.da(a);return"type_error:TrustedResourceUrl"};_.B=function(a,b){this.g=a===_.za&&b||"";this.h=Aa};_.Ba=function(a){if(a instanceof _.B&&a.constructor===_.B&&a.h===Aa)return a.g;_.da(a);return"type_error:SafeUrl"};_.Da=function(a){if(a instanceof _.B)return a;a="object"==typeof a&&a.R?a.b():String(a);Ca.test(a)||(a="about:invalid#zClosurez");return new _.B(_.za,a)}; 
C=function(a){return-1!=Ea.indexOf(a)};_.Ga=function(){this.g="";this.j=Fa;this.h=null};_.Ha=function(a){if(a instanceof _.Ga&&a.constructor===_.Ga&&a.j===Fa)return a.g;_.da(a);return"type_error:SafeHtml"};_.Ia=function(a,b){var c=new _.Ga;c.g=a;c.h=b;return c};Ka=function(a){var b=new _.A(_.wa,_.ua(Ja));a.src=_.ya(b).toString()};La=function(){return C("iPhone")&&!C("iPod")&&!C("iPad")};Ma=function(a){Ma[" "](a);return a};_.Na=function(a,b){try{return Ma(a[b]),!0}catch(c){}return!1}; 
Oa=function(){var a=_.m.document;return a?a.documentMode:void 0};_.D=function(){};_.F=function(a,b,c){a.b=null;b||(b=[]);a.v=void 0;a.h=-1;a.c=b;a:{if(b=a.c.length){--b;var d=a.c[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||Pa&&d instanceof Uint8Array)){a.j=b-a.h;a.g=d;break a}}a.j=Number.MAX_VALUE}a.l={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.j)d+=a.h,a.c[d]=a.c[d]||Qa;else{var e=a.j+a.h;a.c[e]||(a.g=a.c[e]={});a.g[d]=a.g[d]||Qa}}; 
_.Ra=function(a,b){if(b<a.j){b+=a.h;var c=a.c[b];return c===Qa?a.c[b]=[]:c}if(a.g)return c=a.g[b],c===Qa?a.g[b]=[]:c};_.G=function(a,b,c){a=_.Ra(a,b);return null==a?c:a};_.H=function(a,b){a=_.Ra(a,b);a=null==a?a:!!a;return null==a?!1:a};_.Sa=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=_.Ra(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};Ta=function(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var d=_.Ra(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.b[c]=e}b=a.b[c];b==Qa&&(b=a.b[c]=[]);return b}; 
_.Ua=function(a){if(a.b)for(var b in a.b){var c=a.b[b];if("array"==_.da(c))for(var d=0;d<c.length;d++)c[d]&&_.Ua(c[d]);else c&&_.Ua(c)}return a.c};_.Wa=function(a){_.F(this,a,Va)};_.Xa=function(a){return _.G(a,22,"")};_.Ya=function(a){return _.G(a,23,"")};Za=function(a){_.F(this,a,null)};$a=function(a){_.F(this,a,null)};_.ab=function(a){_.F(this,a,null)};bb=function(a){_.F(this,a,null)};db=function(a){_.F(this,a,cb)};eb=function(a){return Ta(a,_.Wa,1)}; 
_.I=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};fb=function(a,b){this.b=void 0!==a?a:0;this.c=void 0!==b?b:0};_.gb=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};_.jb=function(a,b,c=null){ib(a,b,c)}; 
ib=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=a.document.createElement("img");if(c){const e=f=>{c&&c(f);d.removeEventListener&&d.removeEventListener("load",e,!1);d.removeEventListener&&d.removeEventListener("error",e,!1)};_.I(d,"load",e);_.I(d,"error",e)}d.src=b;a.google_image_requests.push(d)};_.kb=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}; 
_.lb=function(a,b){return b?a?a+"&"+b:b:a};_.nb=function(a,b){if(!b)return a;a=_.kb(a);a[1]=_.lb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]};_.ob=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)_.ob(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};_.pb=function(a){var b=[],c;for(c in a)_.ob(c,a[c],b);return b.join("&")};_.qb=function(a,b){b=_.pb(b);return _.nb(a,b)};rb=function(a){try{return!!a&&null!=a.location.href&&_.Na(a,"foo")}catch(b){return!1}}; 
sb=function(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.J=function(){this.h=this.h;this.g=this.g};_.tb=function(a,b){"about:invalid#zClosurez"===(a instanceof _.B?a:_.Da(a)).b()&&b(String(a))};ub=function(a,b){const c={};c[a]=b;return[c]};wb=function(a,b,c,d,e){const f=[];sb(a,function(g,h){(g=vb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}; 
vb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(vb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(wb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};xb=function(a,b,c,d){a.b.push(b);a.c[b]=ub(c,d)}; 
yb=function(a){if(!a.h)return a.l;let b=1;for(const c in a.c)b=c.length>b?c.length:b;return a.l-a.h.length-b-a.g.length-1}; 
zb=function(a,b,c,d){b=b+"//"+c+d;let e=yb(a)-d.length;if(0>e)return"";a.b.sort(function(g,h){return g-h});d=null;c="";for(var f=0;f<a.b.length;f++){const g=a.b[f],h=a.c[g];for(let k=0;k<h.length;k++){if(!e){d=null==d?g:d;break}let n=wb(h[k],a.g,a.v);if(n){n=c+n;if(e>=n.length){e-=n.length;b+=n;c=a.g;break}a.j&&(c=e,n[c-1]==a.g&&--c,b+=n.substr(0,c),c=a.g,e=0);d=null==d?g:d}}}f="";a.h&&null!=d&&(f=c+a.h+"="+(a.A||d));return b+f}; 
_.Bb=function(a,b,c,d,e,f){if((d?a.b:Math.random())<(e||a.c))try{let g;c instanceof Ab?g=c:(g=new Ab,sb(c,(k,n)=>{var q=g,p=q.w++;k=ub(n,k);q.b.push(p);q.c[p]=k}));const h=zb(g,a.j,a.g,a.h+b+"&");h&&("undefined"===typeof f?_.jb(_.m,h):_.jb(_.m,h,f))}catch(g){}};Db=function(a){a&&K&&Cb()&&(K.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),K.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}; 
Eb=function(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b}; 
_.Gb=function(a,b,c){let d,e;try{a.b&&a.b.b?(e=a.b.start(b.toString(),3),d=c(),a.b.end(e)):d=c()}catch(f){c=a.l;try{Db(e),c=a.v(b,new Fb(f,{message:Eb(f)}),void 0,void 0)}catch(g){a.g(217,g)}if(!c)throw f;}return d}; 
_.Hb=function(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;b=b?c.index:a.length;try{return{ia:a.slice(0,b)+"&act=1"+a.slice(b),F:decodeURIComponent(c[1])}}catch(d){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;let d="";b&&(b=a.indexOf("&adurl="),0<b&&(c=a.slice(0,b),d=a.slice(b)));return{ia:c+"&act=1"+d,F:c+"&dct=1"+d}}return null};Kb=function(a){const {U:b,aa:c}=_.Ib(a.href);Jb(a,b);return c}; 
Lb=function(a,b,c=-1){if(b)if(300>Date.now()-c)a=!1;else if(b=a.getAttribute("data-orig-async-clicktrack-url")){const {U:d,aa:e}=_.Ib(b);Jb(a,d);a=e}else a.setAttribute("data-orig-async-clicktrack-url",a.href),a=Kb(a);else a=Kb(a);return a};_.Ib=function(a){const b=_.Hb(a,!0);return b?navigator.sendBeacon?navigator.sendBeacon(_.Mb(b.ia,"&ri=1"),"")?{U:b.F,aa:!0}:{U:_.Mb(a,"&ri=2"),aa:!1}:{U:_.Mb(a,"&ri=16"),aa:!1}:{U:a,aa:!1}}; 
_.Mb=function(a,b){const c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)};_.Nb=function(a){return null!=a&&-1===a.indexOf("dbm/clk")&&null!==_.Hb(a)};Ob=function(a){return _.Nb(a.href)||(a.getAttribute("data-orig-async-clicktrack-url")?_.Nb(a.getAttribute("data-orig-async-clicktrack-url")):!1)};Qb=function(a,b,c){let d=b=b.getAttribute("data-original-click-url");if(d)for(let e=0;e<a.D.length;e++)d=Pb(d,b,a.D[e],c);return d};Rb=function(a,b=Date.now()){return b-a.l>_.G(a.b,39,0)}; 
Tb=function(a,b){-1===b.href.indexOf("dbm/clk")&&(Ob(b)||_.H(a.b,38))&&_.Gb(_.Sb,446,()=>{{const c=Date.now();Rb(a,c)&&Lb(b,_.H(a.b,45),a.l)&&(a.l=c)}})}; 
Wb=function(a,b,c,d){if(0!=a.j.length&&(d.preventDefault?!d.defaultPrevented:!1!==d.returnValue)){var e=1==d.which&&!d.ctrlKey&&"_blank"!=b.target&&"_new"!=b.target;e&&_.Ub(d);var f=[];for(let g=0;g<a.j.length;g++){const h=a.j[g](c);if(h){const k=new Promise(n=>{_.jb(_.L,h,n)});f.push(k)}}c=Promise.all(f);f=new Promise(g=>{window.setTimeout(g,2E3)});e&&Promise.race([c,f]).then((0,_.t)(Vb.prototype.$,a,b,d))}}; 
Xb=function(a,b,c){const d=b.href;if(a.g){const e=Date.now(),f=Rb(a,e);if(a.g.b(b,c,a.b,a.w,f))return f&&(a.l=e),!0}else if(_.m.googdlu&&(_.m.googdlu.tryOpenPlayStore&&_.m.googdlu.tryOpenPlayStore(c,d,_.G(a.b,15,""))||_.m.googdlu.tryOpenItunesStore&&_.m.googdlu.tryOpenItunesStore(c,d,_.G(a.b,15,""),_.H(a.b,42),_.H(a.b,43),_.G(a.h,7,""),_.G(a.h,8,""))))return!0;return _.H(a.b,31)&&_.H(a.b,30)&&_.G(a.b,28,"")&&_.m.googdlu&&_.m.googdlu.tryOpenAppUrl?(_.m.googdlu.tryOpenAppUrl(c,d,_.G(a.b,32,""),_.G(a.b, 
28,"")),!0):!1};Yb=function(a,b,c,d,e){if(a.g){const f=Rb(a,Date.now()),g=Ta(a.h,$a,23);return a.g.g(b,c,a.b,a.w,e,f,g,d)}return new Promise(f=>{f(!1)})};Zb=function(a,b,c){const d=Ta(a.h,$a,23);let e=!1;for(const f of d)if("use_async_for_js_click_handler"===_.G(f,1,"")&&"True"===_.G(f,2,"")){e=!0;break}e&&a.g&&2===a.v?(_.Ub(c),Yb(a,b,c,a.v,a.H).then(f=>{f||Tb(a,b)})):Xb(a,b,c)||Tb(a,b)};$b=function(a,b,c,d){a.c[d]||(a.c[d]={});a.c[d][c]||(a.c[d][c]=[]);_.I(b,d,(0,_.t)(a.Z,a,b,c,d))}; 
ac=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};bc=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};cc=function(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:ac(a).match(/\S+/g)||[],b=0<=Array.prototype.indexOf.call(a,b,void 0));return b};_.dc=function(a,b){if(a.classList)a.classList.add(b);else if(!cc(a,b)){var c=ac(a);bc(a,c+(0<c.length?" "+b:b))}}; 
_.ec=function(a,b){a.classList?a.classList.remove(b):cc(a,b)&&bc(a,na(a.classList?a.classList:ac(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))};fc=function(a){_.m.setTimeout(function(){throw a;},0)}; 
hc=function(){var a=_.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=_.gb(document,"IFRAME");e.style.display="none";Ka(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(_.Ha(gc));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,_.t)(function(k){if(("*"==h||k.origin==h)&&k.data== 
g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.xa;c.xa=null;e()}};return function(e){d.next={xa:e};d=d.next;b.port2.postMessage(0)}}return function(e){_.m.setTimeout(e,0)}};ic=function(){this.c=this.b=null}; 
kc=function(){var a=jc,b=null;a.b&&(b=a.b,a.b=a.b.next,a.b||(a.c=null),b.next=null);return b};lc=function(){this.next=this.c=this.b=null};pc=function(a){mc||nc();oc||(mc(),oc=!0);jc.add(a,void 0)};nc=function(){if(_.m.Promise&&_.m.Promise.resolve){var a=_.m.Promise.resolve(void 0);mc=function(){a.then(qc)}}else mc=function(){var b=qc;!_.ea(_.m.setImmediate)||_.m.Window&&_.m.Window.prototype&&!C("Edge")&&_.m.Window.prototype.setImmediate==_.m.setImmediate?(rc||(rc=hc()),rc(b)):_.m.setImmediate(b)}}; 
qc=function(){for(var a;a=kc();){try{a.b.call(a.c)}catch(c){fc(c)}var b=sc;b.j(a);b.c<b.h&&(b.c++,a.next=b.b,b.b=a)}oc=!1};_.tc=function(a){_.J.call(this);this.v=1;this.j=[];this.l=0;this.b=[];this.c={};this.A=!!a};uc=function(a,b,c){pc(function(){a.apply(b,c)})}; 
vc=function(a,b){if((null==_.Ra(a.l,28)||!_.H(_.Sa(a.l,Za,28),12))&&a.c[b]&&a.h(b)){a.j.push(b);var c=a.g;a=a.c[b];for(let d=0;d<a.length;d++){const e=a[d],f=e;f.href&&f.setAttribute("data-original-click-url",f.href);$b(c,e,b,"mousedown");$b(c,e,b,"click")}c.N[b]=!0}};_.wc=function(a,b,c){a=a.getElementsByAdPiece(b);if(c)for(b=0;b<a.length;b++){const d=a[b].getAttribute(c);if(d)return d}return null};xc=function(a,b){a=a.getElementsByAdPiece(b);for(b=0;b<a.length;b++)if(!a[b].href)return!1;return!0}; 
Ac=function(a){yc([a]);a=new zc(null,[],new db(a));return window.adSlot=a};_.Bc=function(){const a=window.adSlot;return a?a:(_.Sb.g(536,Error("no adslot"),void 0,void 0),Ac(null))};Hc=function(a,b){var c=Cc;const d={};if(!b)return null;d[0]=[b];Dc(Ec,e=>{c[e]&&(d[e]=_.pa(_.Fc(2,c[e],b)))});return new Gc(d,b,a)};Jc=function(a,b){const c=_.Sa(b,bb,16);c&&_.H(c,12)&&_.H(b,5)&&Ic(a,{backgroundColor:"transparent",backgroundImage:"none"})};_.aa=[];_.m=this||self;Kc="closure_uid_"+(1E9*Math.random()>>>0); 
Lc=0;_.M=Date.now||function(){return+new Date};ta.prototype.R=!0;ta.prototype.b=function(){return this.c};var sa={},ra={},Ja=_.z("");var xa;_.A.prototype.R=!0;_.A.prototype.b=function(){return this.g.toString()};_.A.prototype.na=!0;_.A.prototype.c=ba(2);xa={};_.wa={};_.Mc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Ca,Aa;_.B.prototype.R=!0;_.B.prototype.b=function(){return this.g.toString()};_.B.prototype.na=!0;_.B.prototype.c=ba(1);Ca=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;Aa={};_.za={};var Ea;a:{var Nc=_.m.navigator;if(Nc){var Oc=Nc.userAgent;if(Oc){Ea=Oc;break a}}Ea=""};_.Ga.prototype.na=!0;_.Ga.prototype.c=ba(0);_.Ga.prototype.R=!0;_.Ga.prototype.b=function(){return this.g.toString()};var Fa={};_.Ia("<!DOCTYPE html>",0);var gc=_.Ia("",0);_.Ia("<br>",0);_.Pc=qa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=_.Ha(gc);return!b.parentElement});Ma[" "]=_.ca;var Sc,Yc,cd;_.Qc=C("Opera");_.Rc=C("Trident")||C("MSIE");Sc=C("Edge");_.Tc=C("Gecko")&&!(-1!=Ea.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge");_.Uc=-1!=Ea.toLowerCase().indexOf("webkit")&&!C("Edge");_.Vc=C("Android");_.Wc=La();_.Xc=C("iPad"); 
a:{var Zc="",$c=function(){var a=Ea;if(_.Tc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Sc)return/Edge\/([\d\.]+)/.exec(a);if(_.Rc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Uc)return/WebKit\/(\S+)/.exec(a);if(_.Qc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();$c&&(Zc=$c?$c[1]:"");if(_.Rc){var ad=Oa();if(null!=ad&&ad>parseFloat(Zc)){Yc=String(ad);break a}}Yc=Zc}_.bd=Yc;if(_.m.document&&_.Rc){var dd=Oa();cd=dd?dd:parseInt(_.bd,10)||void 0}else cd=void 0;_.ed=cd;_.fd=La()||C("iPod");_.gd=C("iPad");_.hd=C("Android")&&!((C("Chrome")||C("CriOS"))&&!C("Edge")||C("Firefox")||C("FxiOS")||C("Opera")||C("Silk"));var Pa="function"==typeof Uint8Array,Qa=[];_.y(_.Wa,_.D);var Va=[20,33];_.y(Za,_.D);_.y($a,_.D);_.y(_.ab,_.D);_.y(bb,_.D);_.y(db,_.D);var cb=[1,23];var Ec;Ec={eb:0,Gb:1,Hb:45,Ib:46,ub:48,URL:2,Xa:3,Pa:4,Fb:5,zb:7,lb:8,Va:9,ob:6,rb:34,fb:13,Qa:14,nb:15,pb:16,qb:40,Db:47,Lb:29,ab:30,Eb:49,vb:17,Ya:18,cb:19,bb:20,Bb:23,Ta:24,yb:25,xb:26,Ua:27,wb:28,Kb:39,Jb:31,$a:32,Sa:33,gb:35,sb:36,Ra:37,Za:38,tb:42,Ab:43,Cb:44,Wa:50,ib:1E3,jb:1001,kb:1002};_.id=[16,47,49,18,27,28,39];fb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.c=Math.ceil(this.c);return this};fb.prototype.floor=function(){this.b=Math.floor(this.b);this.c=Math.floor(this.c);return this};fb.prototype.round=function(){this.b=Math.round(this.b);this.c=Math.round(this.c);return this};_.P=0;_.jd=document;_.L=window;_.Ub=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};_.J.prototype.h=!1;_.J.prototype.ka=ba(3);_.J.prototype.G=ba(5);/* 
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
var kd=/^((market|itms|intent|itms-appss):\/\/)/i;var Jb;Jb=(a,b)=>{var c=_.ld(599);b=b instanceof _.B||!kd.test(b)?b:new _.B(_.za,b);_.tb(b,c);c=b instanceof _.B?b:_.Da(b);a.href=_.Ba(c)};_.ld=a=>{var b=`${"http:"===_.L.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=_.qb(b,{id:"unsafeurl",ctx:a,url:c});navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Dc=(a,b)=>{if(a)for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},md=!!window.google_async_iframe_id,Ic;let nd=md&&window.parent||window;_.ua(_.z("//fonts.googleapis.com/css"));_.Fc=(a,b,c=_.jd)=>{switch(a){case 2:return c.getElementsByClassName(b);case 3:return c.getElementsByTagName(b)}return[]};_.Q=(a,b,c=_.jd)=>{switch(a){case 1:if(c.getElementById)return c.getElementById(b);break;case 2:case 3:if(a=_.Fc(a,b,c),0<a.length)return a[0]}return null}; 
Ic=(a,b)=>{a&&Dc(b,(c,d)=>{a.style[d]=c})};_.od=a=>{for(const b of a)if("use_refactored_boomerang_click_handler"===_.G(b,1,"")&&"true"===_.G(b,2,"").toLowerCase())return!0;return!1};var Fb=class{constructor(a,b,c={}){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}};const pd=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var qd=class{constructor(a,b){this.b=a;this.c=b}},rd=class{constructor(a,b,c,d,e){this.url=a;this.Ba=!!d;this.depth="number"===typeof e?e:null}};var Ab=class{constructor(a,b,c,d,e){this.l=c||4E3;this.g=a||"&";this.v=b||",$";this.h=void 0!==d?d:"trn";this.A=e||null;this.j=!1;this.c={};this.w=0;this.b=[]}};var sd=class{constructor(a,b,c,d){this.j=a;this.g=b;this.h=c;this.c=d;this.b=Math.random()}};let td=null;var ud=()=>{const a=_.m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,_.M)()},vd=()=>{const a=_.m.performance;return a&&a.now?a.now():null};var wd=class{constructor(a,b,c,d=0,e){this.label=a;this.type=b;this.value=c;this.duration=d;this.uniqueId=Math.random();this.slotId=e}};const K=_.m.performance,xd=!!(K&&K.mark&&K.measure&&K.clearMarks),Cb=qa(()=>{var a;if(a=xd){var b;if(null===td){td="";try{a="";try{a=_.m.top.location.hash}catch(c){a=_.m.location.hash}a&&(td=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=td;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
var yd=class{constructor(a,b){this.events=[];this.c=b||_.m;let c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.b=Cb()||(null!=c?c:Math.random()<a)}start(a,b){if(!this.b)return null;const c=vd()||ud();a=new wd(a,b,c);b=`goog_${a.label}_${a.uniqueId}_start`;K&&Cb()&&K.mark(b);return a}end(a){if(this.b&&"number"===typeof a.value){var b=vd()||ud();a.duration=b-a.value;b=`goog_${a.label}_${a.uniqueId}_end`; 
K&&Cb()&&K.mark(b);!this.b||2048<this.events.length||this.events.push(a)}}};_.zd=class{constructor(a,b,c,d=null){this.h=a;this.w=b;this.l=c;this.c=null;this.v=this.g;this.b=d;this.j=!1}g(a,b,c,d,e){e=e||this.w;let f;try{const w=new Ab;w.j=!0;xb(w,1,"context",a);b.error&&b.meta&&b.id||(b=new Fb(b,{message:Eb(b)}));b.msg&&xb(w,2,"msg",b.msg.substring(0,512));var g=b.meta||{};b=g;if(this.c)try{this.c(b)}catch(E){}if(d)try{d(b)}catch(E){}d=w;g=[g];d.b.push(3);d.c[3]=g;{{d=_.m;g=[];b=null;let Y;do{var h=d;if(rb(h)){var k=h.location.href;b=h.document&&h.document.referrer||null; 
Y=!0}else k=b,b=null,Y=!1;g.push(new rd(k||"",h,Y));try{d=h.parent}catch(fa){d=null}}while(d&&h!=d);for(let fa=0,O=g.length-1;fa<=O;++fa)g[fa].depth=O-fa;h=_.m;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==g.length-1)for(k=1;k<g.length;++k){var n=g[k];n.url||(n.url=h.location.ancestorOrigins[k-1]||"",n.Ba=!0)}var q=g}let E=new rd(_.m.location.href,_.m,!0,!1);h=null;const x=q.length-1;for(n=x;0<=n;--n){var p=q[n];!h&&pd.test(p.url)&&(h=p);if(p.url&&!p.Ba){E=p;break}}p= 
null;const u=q.length&&q[x].url;0!=E.depth&&u&&(p=q[x]);f=new qd(E,p,h)}f.c&&xb(w,4,"top",f.c.url||"");xb(w,5,"url",f.b.url||"");_.Bb(this.h,e,w,this.j,c)}catch(w){try{_.Bb(this.h,e,{context:"ecmserr",rctx:a,msg:Eb(w),url:f&&f.b.url},this.j,c)}catch(E){}}return this.l}};_.zd.prototype.pinger=ba(6);if(md&&!rb(nd)){let a="."+_.jd.domain;try{for(;2<a.split(".").length&&!rb(nd);)_.jd.domain=a=a.substr(a.indexOf(".")+1),nd=window.parent}catch(b){}rb(nd)||(nd=window)}const Bd=nd,Cd=new yd(1,Bd);var Dd=()=>{Bd.google_measure_js_timing||(Cd.b=!1,Cd.events!=Cd.c.google_js_reporting_queue&&(Cb()&&_.ma(Cd.events,Db),Cd.events.length=0))};_.Ad=new sd("http:"===_.L.location.protocol?"http:":"https:","pagead2.googlesyndication.com","/pagead/gen_204?id=",.01); 
"number"!==typeof Bd.google_srt&&(Bd.google_srt=Math.random());var Ed=Bd.google_srt;0<=Ed&&1>=Ed&&(_.Ad.b=Ed);_.Sb=new _.zd(_.Ad,"jserror",!0,Cd); 
_.Sb.c=a=>{var b=_.L.jerExpIds;if("array"==_.da(b)&&0!==b.length){var c=a.eid;if(c){c=[...c.split(","),...b];b={};for(var d=0,e=0;e<c.length;){var f=c[e++];var g=f;g=_.ha(g)?"o"+(Object.prototype.hasOwnProperty.call(g,Kc)&&g[Kc]||(g[Kc]=++Lc)):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(b,g)||(b[g]=!0,c[d++]=f)}c.length=d;a.eid=c.join(",")}else a.eid=b.join(",")}0!==_.P&&(a.jc=String(_.P));(c=_.L.jerUserAgent)&&(a.useragent=c)};_.Sb.j=!0; 
"complete"==Bd.document.readyState?Dd():Cd.b&&_.I(Bd,"load",()=>{Dd()});var Fd=(a,b,c,d,e)=>{c="&"+b+"="+c;const f=a.indexOf("&"+d+"=");c=0>f?a+c:a.substring(0,f)+c+a.substring(f);return 2E3<c.length?void 0!==e?Fd(a,b,e,d,void 0):a:c};var Pb=(a,b,c,d)=>{b=c(d,b);if(!(b instanceof Array))return a;_.ma(b,e=>{if(2!==e.length&&3!==e.length)return a;a=Fd(a,e[0],e[1],"adurl",e[2])});return a};var Vb=class{constructor(a,b,c){this.b=a;this.h=b;this.g=c;this.D=[];this.j=[];this.N={};this.c={};this.w=this.A=!1;this.v=Gd(this.b);this.H=new Promise(d=>{d(!1)});this.l=-1;a=_.Xa(this.b);b=_.Ya(this.b);c=Ta(this.h,$a,23);this.g&&this.b&&a&&b&&_.od(c)&&2===Gd(this.b)&&(this.v=2,this.H=this.g.c({url:a,id:a,C:b}))}$(a,b){this.A=!0;var c=!1;if(b.target){{c=b.target;var d=b.button,e=b.ctrlKey,f=b.shiftKey,g=b.metaKey,h=b.altKey,k=new fb(b.x,b.y);let n;document.createEvent?(n=document.createEvent("MouseEvents"), 
n.initMouseEvent("click",!0,!0,null,0,k.b,k.c,k.b,k.c,e,h,f,g,d,null),c.dispatchEvent?(c.dispatchEvent(n),c=!0):c=!1):c=!1}}!a.href||c||Xb(this,a,b)||(Tb(this,a),_.L.top.location=a.href)}Z(a,b,c,d){if(this.A)this.A=!1;else{d||(d=_.L.event);this.c[c][b].forEach(e=>{e(d)});if(a.href){const e=Qb(this,a,d.type);e&&(a.href=e)}"click"==c&&(Wb(this,a,b,d),(d.preventDefault?d.defaultPrevented:!1===d.returnValue)||Zb(this,a,d))}}};const Gd=a=>_.H(a,31)&&_.G(a,28,"")?1:_.Xa(a)&&_.Ya(a)?_.H(a,44)?3:2:0;var rc;var sc=new class{constructor(a,b,c){this.h=c;this.g=a;this.j=b;this.c=0;this.b=null}get(){let a;0<this.c?(this.c--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a}}(function(){return new lc},function(a){a.reset()},100);ic.prototype.add=function(a,b){var c=sc.get();c.set(a,b);this.c?this.c.next=c:this.b=c;this.c=c};lc.prototype.set=function(a,b){this.b=a;this.c=b;this.next=null};lc.prototype.reset=function(){this.next=this.c=this.b=null};var mc,oc=!1,jc=new ic;_.y(_.tc,_.J);_.tc.prototype.subscribe=function(a,b,c){var d=this.c[a];d||(d=this.c[a]=[]);var e=this.v;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.v=e+3;d.push(e);return e};_.tc.prototype.D=function(a){var b=this.b[a];b&&(b=this.c[b],0!=this.l?(this.j.push(a),this.b[a+1]=_.ca):(b&&_.oa(b,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2]))}; 
_.tc.prototype.w=function(a,b){var c=this.c[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];uc(this.b[g+1],this.b[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.D(c)}}}};_.tc.prototype.G=ba(4);var Hd=class{constructor(a,b,c,d,e){this.v=new _.tc;this.c=a;this.c[0]=[b];this.j=[];this.g=new Vb(c,d,e);this.l=d;this.b=c;b=_.Xa(this.b);c=_.Ya(this.b);d=Ta(this.l,$a,23);if(d=e&&this.b&&_.od(d))d=this.b,d=2===(_.H(d,31)&&_.G(d,28,"")?1:_.Xa(d)&&_.Ya(d)?_.H(d,44)?3:2:0);!d&&b&&c&&e&&(e.canOpenIntents([{url:b,id:b,C:c}],(0,_.t)(this.w,this))||e.canOpenURLs(b,(0,_.t)(this.w,this)));(e=_.Q(1,"common_15click_anchor"))?(a[20]=[e],vc(this,20)):(e=_.pa(_.Fc(2,"common_15click_anchor")),0<e.length&&(a[20]= 
e,vc(this,20)))}w(a,b){b=(a=_.Xa(this.b))&&b?b[a]:!1;this.g.w=!!b;this.B(0,"app_installed",!b);this.B(0,"rh-ani",b)}navigationAdPieces(){return this.j}h(){return!0}has(a){return(a=this.c[a])&&0<a.length}listen(a,b,c){const d=this.c[a];if(d){{var e=this.g;c=_.v(c,a,this);const f=("click"==b||"mousedown"==b)&&e.N[a];e.c[b]||(e.c[b]={});e.c[b][a]||(e.c[b][a]=[]);e.c[b][a].push(c);if(!f)for(a=0;a<d.length;a++)_.I(d[a],b,c)}}}B(a,b,c){if(b){a=this.getElementsByAdPiece(a);for(let d=0;d<a.length;d++)c?_.ec(a[d], 
b):_.dc(a[d],b)}}getElementsByAdPiece(a){return this.c[a]?this.c[a]:[]}creativeConversionUrl(){return _.G(this.b,6,"")}redirectUrl(){return _.G(this.b,8,"")}getIndex(){return _.G(this.b,2,0)}listenOnObject(a,b){this.v.subscribe(a,b)}fireOnObject(a,b){this.v.w(a,b)}};var yc=(a=[])=>{_.m.google_logging_queue||(_.m.google_logging_queue=[]);_.m.google_logging_queue.push([10,a])};var zc=class{constructor(a,b,c){this.w=new _.tc;this.l=a;this.g=b;this.b=c;this.j=[];this.v=!1;this.c=null}forEachAd(a){_.ma(this.g,a)}h(a){this.g.push(a)}A(a){if(a=_.Q(1,a))this.l=a;if(0==this.g.length)_.m.css=null;else{for(a=0;a<this.j.length;++a)this.j[a]();this.v=!0}}listenOnObject(a,b){this.w.subscribe(a,b)}fireOnObject(a,b){this.w.w(a,b)}registerFinalizeCallback(a){this.v?a():this.j.push(a)}getSerializedAdSlotData(){return _.Ua(this.b)}getAdsLength(){return this.g.length}getAd(a){return 0<= 
a&&a<this.g.length&&this.g[a].getIndex()==a?this.g[a]:null}getContainer(){return this.l}openSystemBrowser(a){return this.c?(this.c.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0}),!0):!1}openAttribution(a){return this.c?(this.c.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0,useCustomTabs:!0}),!0):!1}};var Gc=class extends Hd{constructor(a,b,c){super(a,b,c,_.Bc().b,_.Bc().c);for(a=0;a<Id.length;a++)vc(this,Id[a])}h(a){return xc(this,a)||4===a}A(a,b){return this.h(b)?a:""}};var Id=[1,2,3,4,8,6,40,33,36,37,38,9];let Jd="UNKNOWN",Kd="UNKNOWN",Ld=null; 
var Md=(a,b,c)=>{b.gqid=Jd;b.qqid=Kd;b.com=a;_.Bb(_.Ad,"glaurung",b,!0,c,void 0)},Cc={[1]:"title-link",[2]:"url-link",[3]:"body-link",[4]:"button-link",[8]:"favicon-link",[6]:"image-link",[26]:"price",[23]:"reviews",[43]:"rating-stars",[44]:"reviews-count",[24]:"app-store",[25]:"promo-headline",[33]:"app-icon",[16]:"image-gallery",[40]:"image-gallery-image-link",[36]:"logo-link",[37]:"advertiser-link",[38]:"call-to-action-link",[39]:"video",[42]:"logo",[50]:"badge-box",[9]:"ad-background"},Nd=(a, 
b,c)=>{_.Q(2,"app-icon-link",b)&&(Cc[33]="app-icon-link");var d=a.b,e=_.Q(1,"adunit",b),f=_.Q(1,"ads",b);if(!e||!f)return 1;var g={overflow:"hidden"};0==_.G(d,32,0)?(g.width=_.G(d,2,0)+"px",g.height=_.G(d,3,0)+"px",g.position="absolute",g.top="0",g.left="0"):(g.width="100%",g.height="100%");Ic(e,g);Jc(e,d);Jc(f,d);try{c(f,a)}catch(n){return _.H(d,13)&&(Ld=n),2}c=0;d=eb(d);for(e=0;e<d.length;e++){var h=d[e];g="taw"+_.G(h,2,0);f=_.Q(1,g,b);if(!f)return 3;f=Hc(h,f);if(!f)return 1;var k=_.L.registerAd; 
k?k(f,g):c=4;_.H(h,11)&&_.L.initAppPromo&&_.L.initAppPromo(f,a);g=f;if(_.H(h,19)&&(h=_.Ra(h,33),0<h.length))for(k=0;k<h.length;k++){const n=(0,_.t)(Gc.prototype.A,g,h[k]);g.g.j.push(n)}a.h(f)}return c};var Od=class extends Hd{constructor(a,b,c){const d=[];d[0]=[c];d[15]=[b];(b=_.Q(1,"abgc"))&&(d[27]=[b]);(b=_.Q(1,"cbc"))&&(d[28]=[b]);(b=_.Q(1,"cta-button-anchor"))&&(d[4]=[b]);super(d,c,a,_.Bc().b,_.Bc().c);vc(this,15);b&&vc(this,4)}};var Pd=class extends Hd{constructor(a,b){const c={};c[0]=[b];super(c,b,a,_.Bc().b,_.Bc().c)}};var Qd=class extends Hd{constructor(a,b,c){super(a,b,c,_.Bc().b,_.Bc().c);for(a=0;a<Rd.length;a++)vc(this,Rd[a]);this.listen(4,"mouseover",(0,_.t)(this.B,this,0,"onhoverbg",!1));this.listen(4,"mouseout",(0,_.t)(this.B,this,0,"onhoverbg",!0))}h(a){return xc(this,a)||4==a}}; 
var Sd={[1]:"rhtitle",[45]:"rhtitleline1",[46]:"rhtitleline2",[48]:"rhlongtitle",[3]:"rhbody",[2]:"rhurl",[4]:"rhbutton",[8]:"rhfavicon",[14]:"rhaddress",[6]:"rhimage",[34]:"rhimagetemplate",[49]:"rh-scrollflow",[16]:"rhimagegallery",[47]:"rhreviewgallery",[29]:"rhviewimagegallery",[30]:"rhcloseimagegalleryview",[31]:"rhtrydemobutton",[32]:"rhclosetrydemoview",[39]:"rhvideo",[9]:"rhbackground",[13]:"rh-icore-empty",[5]:"rhsitelink",[7]:"rhradlink",[17]:"rh-multiframe",[18]:"rh-box-breadcrumbs",[23]:"rhstarratings", 
[24]:"rhstoreicon",[25]:"rhpromotext",[26]:"rhprice",[27]:"abgc",[28]:"cbc",[35]:"rhdemocountdowntimer",[36]:"rhlogo",[1001]:"rhoverlap-imagegallery",[1002]:"rhoverlap-trydemo"},Rd=[1,45,46,48,2,4,5,7,8,3,9,6,14,15,34,26,24,36];_.P=5;zc.prototype.forEachAd=zc.prototype.forEachAd;zc.prototype.addAd=zc.prototype.h;zc.prototype.finalize=zc.prototype.A;_.r("buildAdSlot",Ac,void 0);_.r("buildGlaurungAds",(a,b,c)=>{const d=(new Date).getTime();let e=1,f=!1;Ld=null;try{const g=a.b;f=_.H(g,13);Jd=_.G(g,8,"");Kd=_.G(g,7,"");e=Nd(a,b,c)}catch(g){f&&(Ld=g),e=1}Md("bridge",{["r"]:e,["d"]:(new Date).getTime()-d});return e},void 0);_.r("glaurungError",()=>Ld,void 0);_.r("glaurungBridge.log",Md,void 0); 
_.r("glaurungBridge.getAdPieceClassName",a=>Cc[a],void 0);_.r("buildImageAd",function(a,b){if(0>b||b>=eb(a.b).length)a=null;else{{a=eb(a.b)[b];b=_.Q(1,"google_image_div");const c=_.Q(1,"aw0");a=b&&c?new Od(a,c,b):null}}return a},void 0);_.r("buildRichmediaAd",function(a,b){return 0>b||b>=eb(a.b).length?null:new Pd(eb(a.b)[b],_.jd.body)},void 0); 
_.r("buildTextAd",(a,b)=>{const c=a.b;if(!(0>b||b>=eb(c).length)){if(0>b||b>=eb(a.b).length)var d=null;else{{d=eb(a.b)[b];const g=_.Q(1,"taw"+b);if(g){{var e=g;const h={};h[0]=[e];for(const k in Ec){{var f=Ec[k];const n=Sd[f];n&&(h[f]=_.pa(_.Fc(2,n,e)))}}e=h}d=new Qd(e,g,d)}else d=null}}d&&(_.L.registerAd&&_.L.registerAd(d,"taw"+b),a.h(d),_.H(eb(c)[b],11)&&_.L.initAppPromo&&_.L.initAppPromo(d,a))}},void 0);})(window.hydra=window.hydra||{});

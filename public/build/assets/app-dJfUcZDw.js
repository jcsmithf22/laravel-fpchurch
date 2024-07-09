function Fo(t,e){return function(){return t.apply(e,arguments)}}const{toString:gc}=Object.prototype,{getPrototypeOf:$a}=Object,cs=(t=>e=>{const i=gc.call(e);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),ge=t=>(t=t.toLowerCase(),e=>cs(e)===t),us=t=>e=>typeof e===t,{isArray:Ht}=Array,gi=us("undefined");function _c(t){return t!==null&&!gi(t)&&t.constructor!==null&&!gi(t.constructor)&&ce(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Wo=ge("ArrayBuffer");function Ac(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Wo(t.buffer),e}const Sc=us("string"),ce=us("function"),Ho=us("number"),hs=t=>t!==null&&typeof t=="object",Tc=t=>t===!0||t===!1,en=t=>{if(cs(t)!=="object")return!1;const e=$a(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Ic=ge("Date"),yc=ge("File"),kc=ge("Blob"),wc=ge("FileList"),Rc=t=>hs(t)&&ce(t.pipe),Lc=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||ce(t.append)&&((e=cs(t))==="formdata"||e==="object"&&ce(t.toString)&&t.toString()==="[object FormData]"))},Cc=ge("URLSearchParams"),[Mc,Dc,xc,Pc]=["ReadableStream","Request","Response","Headers"].map(ge),Uc=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mi(t,e,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let n,s;if(typeof t!="object"&&(t=[t]),Ht(t))for(n=0,s=t.length;n<s;n++)e.call(null,t[n],n,t);else{const a=i?Object.getOwnPropertyNames(t):Object.keys(t),r=a.length;let l;for(n=0;n<r;n++)l=a[n],e.call(null,t[l],l,t)}}function Ko(t,e){e=e.toLowerCase();const i=Object.keys(t);let n=i.length,s;for(;n-- >0;)if(s=i[n],e===s.toLowerCase())return s;return null}const Vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qo=t=>!gi(t)&&t!==Vo;function Bs(){const{caseless:t}=qo(this)&&this||{},e={},i=(n,s)=>{const a=t&&Ko(e,s)||s;en(e[a])&&en(n)?e[a]=Bs(e[a],n):en(n)?e[a]=Bs({},n):Ht(n)?e[a]=n.slice():e[a]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&Mi(arguments[n],i);return e}const Oc=(t,e,i,{allOwnKeys:n}={})=>(Mi(e,(s,a)=>{i&&ce(s)?t[a]=Fo(s,i):t[a]=s},{allOwnKeys:n}),t),Nc=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),$c=(t,e,i,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),i&&Object.assign(t.prototype,i)},Bc=(t,e,i,n)=>{let s,a,r;const l={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),a=s.length;a-- >0;)r=s[a],(!n||n(r,t,e))&&!l[r]&&(e[r]=t[r],l[r]=!0);t=i!==!1&&$a(t)}while(t&&(!i||i(t,e))&&t!==Object.prototype);return e},Fc=(t,e,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=e.length;const n=t.indexOf(e,i);return n!==-1&&n===i},Wc=t=>{if(!t)return null;if(Ht(t))return t;let e=t.length;if(!Ho(e))return null;const i=new Array(e);for(;e-- >0;)i[e]=t[e];return i},Hc=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&$a(Uint8Array)),Kc=(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=n.next())&&!s.done;){const a=s.value;e.call(t,a[0],a[1])}},Vc=(t,e)=>{let i;const n=[];for(;(i=t.exec(e))!==null;)n.push(i);return n},qc=ge("HTMLFormElement"),Gc=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,n,s){return n.toUpperCase()+s}),Gr=(({hasOwnProperty:t})=>(e,i)=>t.call(e,i))(Object.prototype),Yc=ge("RegExp"),Go=(t,e)=>{const i=Object.getOwnPropertyDescriptors(t),n={};Mi(i,(s,a)=>{let r;(r=e(s,a,t))!==!1&&(n[a]=r||s)}),Object.defineProperties(t,n)},Qc=t=>{Go(t,(e,i)=>{if(ce(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const n=t[i];if(ce(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},zc=(t,e)=>{const i={},n=s=>{s.forEach(a=>{i[a]=!0})};return Ht(t)?n(t):n(String(t).split(e)),i},Zc=()=>{},Xc=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Ts="abcdefghijklmnopqrstuvwxyz",Yr="0123456789",Yo={DIGIT:Yr,ALPHA:Ts,ALPHA_DIGIT:Ts+Ts.toUpperCase()+Yr},Jc=(t=16,e=Yo.ALPHA_DIGIT)=>{let i="";const{length:n}=e;for(;t--;)i+=e[Math.random()*n|0];return i};function jc(t){return!!(t&&ce(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const eu=t=>{const e=new Array(10),i=(n,s)=>{if(hs(n)){if(e.indexOf(n)>=0)return;if(!("toJSON"in n)){e[s]=n;const a=Ht(n)?[]:{};return Mi(n,(r,l)=>{const d=i(r,s+1);!gi(d)&&(a[l]=d)}),e[s]=void 0,a}}return n};return i(t,0)},tu=ge("AsyncFunction"),iu=t=>t&&(hs(t)||ce(t))&&ce(t.then)&&ce(t.catch),m={isArray:Ht,isArrayBuffer:Wo,isBuffer:_c,isFormData:Lc,isArrayBufferView:Ac,isString:Sc,isNumber:Ho,isBoolean:Tc,isObject:hs,isPlainObject:en,isReadableStream:Mc,isRequest:Dc,isResponse:xc,isHeaders:Pc,isUndefined:gi,isDate:Ic,isFile:yc,isBlob:kc,isRegExp:Yc,isFunction:ce,isStream:Rc,isURLSearchParams:Cc,isTypedArray:Hc,isFileList:wc,forEach:Mi,merge:Bs,extend:Oc,trim:Uc,stripBOM:Nc,inherits:$c,toFlatObject:Bc,kindOf:cs,kindOfTest:ge,endsWith:Fc,toArray:Wc,forEachEntry:Kc,matchAll:Vc,isHTMLForm:qc,hasOwnProperty:Gr,hasOwnProp:Gr,reduceDescriptors:Go,freezeMethods:Qc,toObjectSet:zc,toCamelCase:Gc,noop:Zc,toFiniteNumber:Xc,findKey:Ko,global:Vo,isContextDefined:qo,ALPHABET:Yo,generateString:Jc,isSpecCompliantForm:jc,toJSONObject:eu,isAsyncFn:tu,isThenable:iu};function T(t,e,i,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),i&&(this.config=i),n&&(this.request=n),s&&(this.response=s)}m.inherits(T,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:m.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Qo=T.prototype,zo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{zo[t]={value:t}});Object.defineProperties(T,zo);Object.defineProperty(Qo,"isAxiosError",{value:!0});T.from=(t,e,i,n,s,a)=>{const r=Object.create(Qo);return m.toFlatObject(t,r,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),T.call(r,t.message,e,i,n,s),r.cause=t,r.name=t.name,a&&Object.assign(r,a),r};const nu=null;function Fs(t){return m.isPlainObject(t)||m.isArray(t)}function Zo(t){return m.endsWith(t,"[]")?t.slice(0,-2):t}function Qr(t,e,i){return t?t.concat(e).map(function(s,a){return s=Zo(s),!i&&a?"["+s+"]":s}).join(i?".":""):e}function su(t){return m.isArray(t)&&!t.some(Fs)}const au=m.toFlatObject(m,{},null,function(e){return/^is[A-Z]/.test(e)});function ms(t,e,i){if(!m.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,i=m.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,_){return!m.isUndefined(_[b])});const n=i.metaTokens,s=i.visitor||u,a=i.dots,r=i.indexes,d=(i.Blob||typeof Blob<"u"&&Blob)&&m.isSpecCompliantForm(e);if(!m.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(m.isDate(f))return f.toISOString();if(!d&&m.isBlob(f))throw new T("Blob is not supported. Use a Buffer instead.");return m.isArrayBuffer(f)||m.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,b,_){let S=f;if(f&&!_&&typeof f=="object"){if(m.endsWith(b,"{}"))b=n?b:b.slice(0,-2),f=JSON.stringify(f);else if(m.isArray(f)&&su(f)||(m.isFileList(f)||m.endsWith(b,"[]"))&&(S=m.toArray(f)))return b=Zo(b),S.forEach(function(k,ue){!(m.isUndefined(k)||k===null)&&e.append(r===!0?Qr([b],ue,a):r===null?b:b+"[]",h(k))}),!1}return Fs(f)?!0:(e.append(Qr(_,b,a),h(f)),!1)}const p=[],v=Object.assign(au,{defaultVisitor:u,convertValue:h,isVisitable:Fs});function E(f,b){if(!m.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+b.join("."));p.push(f),m.forEach(f,function(S,P){(!(m.isUndefined(S)||S===null)&&s.call(e,S,m.isString(P)?P.trim():P,b,v))===!0&&E(S,b?b.concat(P):[P])}),p.pop()}}if(!m.isObject(t))throw new TypeError("data must be an object");return E(t),e}function zr(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Ba(t,e){this._pairs=[],t&&ms(t,this,e)}const Xo=Ba.prototype;Xo.append=function(e,i){this._pairs.push([e,i])};Xo.toString=function(e){const i=e?function(n){return e.call(this,n,zr)}:zr;return this._pairs.map(function(s){return i(s[0])+"="+i(s[1])},"").join("&")};function ru(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jo(t,e,i){if(!e)return t;const n=i&&i.encode||ru,s=i&&i.serialize;let a;if(s?a=s(e,i):a=m.isURLSearchParams(e)?e.toString():new Ba(e,i).toString(n),a){const r=t.indexOf("#");r!==-1&&(t=t.slice(0,r)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}class Zr{constructor(){this.handlers=[]}use(e,i,n){return this.handlers.push({fulfilled:e,rejected:i,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){m.forEach(this.handlers,function(n){n!==null&&e(n)})}}const jo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ou=typeof URLSearchParams<"u"?URLSearchParams:Ba,lu=typeof FormData<"u"?FormData:null,du=typeof Blob<"u"?Blob:null,cu={isBrowser:!0,classes:{URLSearchParams:ou,FormData:lu,Blob:du},protocols:["http","https","file","blob","url","data"]},Fa=typeof window<"u"&&typeof document<"u",uu=(t=>Fa&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),hu=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mu=Fa&&window.location.href||"http://localhost",pu=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fa,hasStandardBrowserEnv:uu,hasStandardBrowserWebWorkerEnv:hu,origin:mu},Symbol.toStringTag,{value:"Module"})),be={...pu,...cu};function Eu(t,e){return ms(t,new be.classes.URLSearchParams,Object.assign({visitor:function(i,n,s,a){return be.isNode&&m.isBuffer(i)?(this.append(n,i.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},e))}function fu(t){return m.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function vu(t){const e={},i=Object.keys(t);let n;const s=i.length;let a;for(n=0;n<s;n++)a=i[n],e[a]=t[a];return e}function el(t){function e(i,n,s,a){let r=i[a++];if(r==="__proto__")return!0;const l=Number.isFinite(+r),d=a>=i.length;return r=!r&&m.isArray(s)?s.length:r,d?(m.hasOwnProp(s,r)?s[r]=[s[r],n]:s[r]=n,!l):((!s[r]||!m.isObject(s[r]))&&(s[r]=[]),e(i,n,s[r],a)&&m.isArray(s[r])&&(s[r]=vu(s[r])),!l)}if(m.isFormData(t)&&m.isFunction(t.entries)){const i={};return m.forEachEntry(t,(n,s)=>{e(fu(n),s,i,0)}),i}return null}function bu(t,e,i){if(m.isString(t))try{return(e||JSON.parse)(t),m.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(i||JSON.stringify)(t)}const Di={transitional:jo,adapter:["xhr","http","fetch"],transformRequest:[function(e,i){const n=i.getContentType()||"",s=n.indexOf("application/json")>-1,a=m.isObject(e);if(a&&m.isHTMLForm(e)&&(e=new FormData(e)),m.isFormData(e))return s?JSON.stringify(el(e)):e;if(m.isArrayBuffer(e)||m.isBuffer(e)||m.isStream(e)||m.isFile(e)||m.isBlob(e)||m.isReadableStream(e))return e;if(m.isArrayBufferView(e))return e.buffer;if(m.isURLSearchParams(e))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Eu(e,this.formSerializer).toString();if((l=m.isFileList(e))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return ms(l?{"files[]":e}:e,d&&new d,this.formSerializer)}}return a||s?(i.setContentType("application/json",!1),bu(e)):e}],transformResponse:[function(e){const i=this.transitional||Di.transitional,n=i&&i.forcedJSONParsing,s=this.responseType==="json";if(m.isResponse(e)||m.isReadableStream(e))return e;if(e&&m.isString(e)&&(n&&!this.responseType||s)){const r=!(i&&i.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(l){if(r)throw l.name==="SyntaxError"?T.from(l,T.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:be.classes.FormData,Blob:be.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};m.forEach(["delete","get","head","post","put","patch"],t=>{Di.headers[t]={}});const gu=m.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_u=t=>{const e={};let i,n,s;return t&&t.split(`
`).forEach(function(r){s=r.indexOf(":"),i=r.substring(0,s).trim().toLowerCase(),n=r.substring(s+1).trim(),!(!i||e[i]&&gu[i])&&(i==="set-cookie"?e[i]?e[i].push(n):e[i]=[n]:e[i]=e[i]?e[i]+", "+n:n)}),e},Xr=Symbol("internals");function Qt(t){return t&&String(t).trim().toLowerCase()}function tn(t){return t===!1||t==null?t:m.isArray(t)?t.map(tn):String(t)}function Au(t){const e=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=i.exec(t);)e[n[1]]=n[2];return e}const Su=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Is(t,e,i,n,s){if(m.isFunction(n))return n.call(this,e,i);if(s&&(e=i),!!m.isString(e)){if(m.isString(n))return e.indexOf(n)!==-1;if(m.isRegExp(n))return n.test(e)}}function Tu(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,i,n)=>i.toUpperCase()+n)}function Iu(t,e){const i=m.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+i,{value:function(s,a,r){return this[n].call(this,e,s,a,r)},configurable:!0})})}class te{constructor(e){e&&this.set(e)}set(e,i,n){const s=this;function a(l,d,h){const u=Qt(d);if(!u)throw new Error("header name must be a non-empty string");const p=m.findKey(s,u);(!p||s[p]===void 0||h===!0||h===void 0&&s[p]!==!1)&&(s[p||d]=tn(l))}const r=(l,d)=>m.forEach(l,(h,u)=>a(h,u,d));if(m.isPlainObject(e)||e instanceof this.constructor)r(e,i);else if(m.isString(e)&&(e=e.trim())&&!Su(e))r(_u(e),i);else if(m.isHeaders(e))for(const[l,d]of e.entries())a(d,l,n);else e!=null&&a(i,e,n);return this}get(e,i){if(e=Qt(e),e){const n=m.findKey(this,e);if(n){const s=this[n];if(!i)return s;if(i===!0)return Au(s);if(m.isFunction(i))return i.call(this,s,n);if(m.isRegExp(i))return i.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,i){if(e=Qt(e),e){const n=m.findKey(this,e);return!!(n&&this[n]!==void 0&&(!i||Is(this,this[n],n,i)))}return!1}delete(e,i){const n=this;let s=!1;function a(r){if(r=Qt(r),r){const l=m.findKey(n,r);l&&(!i||Is(n,n[l],l,i))&&(delete n[l],s=!0)}}return m.isArray(e)?e.forEach(a):a(e),s}clear(e){const i=Object.keys(this);let n=i.length,s=!1;for(;n--;){const a=i[n];(!e||Is(this,this[a],a,e,!0))&&(delete this[a],s=!0)}return s}normalize(e){const i=this,n={};return m.forEach(this,(s,a)=>{const r=m.findKey(n,a);if(r){i[r]=tn(s),delete i[a];return}const l=e?Tu(a):String(a).trim();l!==a&&delete i[a],i[l]=tn(s),n[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const i=Object.create(null);return m.forEach(this,(n,s)=>{n!=null&&n!==!1&&(i[s]=e&&m.isArray(n)?n.join(", "):n)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,i])=>e+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...i){const n=new this(e);return i.forEach(s=>n.set(s)),n}static accessor(e){const n=(this[Xr]=this[Xr]={accessors:{}}).accessors,s=this.prototype;function a(r){const l=Qt(r);n[l]||(Iu(s,r),n[l]=!0)}return m.isArray(e)?e.forEach(a):a(e),this}}te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);m.reduceDescriptors(te.prototype,({value:t},e)=>{let i=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(n){this[i]=n}}});m.freezeMethods(te);function ys(t,e){const i=this||Di,n=e||i,s=te.from(n.headers);let a=n.data;return m.forEach(t,function(l){a=l.call(i,a,s.normalize(),e?e.status:void 0)}),s.normalize(),a}function tl(t){return!!(t&&t.__CANCEL__)}function Kt(t,e,i){T.call(this,t??"canceled",T.ERR_CANCELED,e,i),this.name="CanceledError"}m.inherits(Kt,T,{__CANCEL__:!0});function il(t,e,i){const n=i.config.validateStatus;!i.status||!n||n(i.status)?t(i):e(new T("Request failed with status code "+i.status,[T.ERR_BAD_REQUEST,T.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function yu(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function ku(t,e){t=t||10;const i=new Array(t),n=new Array(t);let s=0,a=0,r;return e=e!==void 0?e:1e3,function(d){const h=Date.now(),u=n[a];r||(r=h),i[s]=d,n[s]=h;let p=a,v=0;for(;p!==s;)v+=i[p++],p=p%t;if(s=(s+1)%t,s===a&&(a=(a+1)%t),h-r<e)return;const E=u&&h-u;return E?Math.round(v*1e3/E):void 0}}function wu(t,e){let i=0;const n=1e3/e;let s=null;return function(){const r=this===!0,l=Date.now();if(r||l-i>n)return s&&(clearTimeout(s),s=null),i=l,t.apply(null,arguments);s||(s=setTimeout(()=>(s=null,i=Date.now(),t.apply(null,arguments)),n-(l-i)))}}const Fn=(t,e,i=3)=>{let n=0;const s=ku(50,250);return wu(a=>{const r=a.loaded,l=a.lengthComputable?a.total:void 0,d=r-n,h=s(d),u=r<=l;n=r;const p={loaded:r,total:l,progress:l?r/l:void 0,bytes:d,rate:h||void 0,estimated:h&&l&&u?(l-r)/h:void 0,event:a,lengthComputable:l!=null};p[e?"download":"upload"]=!0,t(p)},i)},Ru=be.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");let n;function s(a){let r=a;return e&&(i.setAttribute("href",r),r=i.href),i.setAttribute("href",r),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=s(window.location.href),function(r){const l=m.isString(r)?s(r):r;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}(),Lu=be.hasStandardBrowserEnv?{write(t,e,i,n,s,a){const r=[t+"="+encodeURIComponent(e)];m.isNumber(i)&&r.push("expires="+new Date(i).toGMTString()),m.isString(n)&&r.push("path="+n),m.isString(s)&&r.push("domain="+s),a===!0&&r.push("secure"),document.cookie=r.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Cu(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Mu(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function nl(t,e){return t&&!Cu(e)?Mu(t,e):e}const Jr=t=>t instanceof te?{...t}:t;function ht(t,e){e=e||{};const i={};function n(h,u,p){return m.isPlainObject(h)&&m.isPlainObject(u)?m.merge.call({caseless:p},h,u):m.isPlainObject(u)?m.merge({},u):m.isArray(u)?u.slice():u}function s(h,u,p){if(m.isUndefined(u)){if(!m.isUndefined(h))return n(void 0,h,p)}else return n(h,u,p)}function a(h,u){if(!m.isUndefined(u))return n(void 0,u)}function r(h,u){if(m.isUndefined(u)){if(!m.isUndefined(h))return n(void 0,h)}else return n(void 0,u)}function l(h,u,p){if(p in e)return n(h,u);if(p in t)return n(void 0,h)}const d={url:a,method:a,data:a,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,withXSRFToken:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:l,headers:(h,u)=>s(Jr(h),Jr(u),!0)};return m.forEach(Object.keys(Object.assign({},t,e)),function(u){const p=d[u]||s,v=p(t[u],e[u],u);m.isUndefined(v)&&p!==l||(i[u]=v)}),i}const sl=t=>{const e=ht({},t);let{data:i,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:a,headers:r,auth:l}=e;e.headers=r=te.from(r),e.url=Jo(nl(e.baseURL,e.url),t.params,t.paramsSerializer),l&&r.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let d;if(m.isFormData(i)){if(be.hasStandardBrowserEnv||be.hasStandardBrowserWebWorkerEnv)r.setContentType(void 0);else if((d=r.getContentType())!==!1){const[h,...u]=d?d.split(";").map(p=>p.trim()).filter(Boolean):[];r.setContentType([h||"multipart/form-data",...u].join("; "))}}if(be.hasStandardBrowserEnv&&(n&&m.isFunction(n)&&(n=n(e)),n||n!==!1&&Ru(e.url))){const h=s&&a&&Lu.read(a);h&&r.set(s,h)}return e},Du=typeof XMLHttpRequest<"u",xu=Du&&function(t){return new Promise(function(i,n){const s=sl(t);let a=s.data;const r=te.from(s.headers).normalize();let{responseType:l}=s,d;function h(){s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let u=new XMLHttpRequest;u.open(s.method.toUpperCase(),s.url,!0),u.timeout=s.timeout;function p(){if(!u)return;const E=te.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),b={data:!l||l==="text"||l==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:E,config:t,request:u};il(function(S){i(S),h()},function(S){n(S),h()},b),u=null}"onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(n(new T("Request aborted",T.ECONNABORTED,s,u)),u=null)},u.onerror=function(){n(new T("Network Error",T.ERR_NETWORK,s,u)),u=null},u.ontimeout=function(){let f=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const b=s.transitional||jo;s.timeoutErrorMessage&&(f=s.timeoutErrorMessage),n(new T(f,b.clarifyTimeoutError?T.ETIMEDOUT:T.ECONNABORTED,s,u)),u=null},a===void 0&&r.setContentType(null),"setRequestHeader"in u&&m.forEach(r.toJSON(),function(f,b){u.setRequestHeader(b,f)}),m.isUndefined(s.withCredentials)||(u.withCredentials=!!s.withCredentials),l&&l!=="json"&&(u.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&u.addEventListener("progress",Fn(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Fn(s.onUploadProgress)),(s.cancelToken||s.signal)&&(d=E=>{u&&(n(!E||E.type?new Kt(null,t,u):E),u.abort(),u=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const v=yu(s.url);if(v&&be.protocols.indexOf(v)===-1){n(new T("Unsupported protocol "+v+":",T.ERR_BAD_REQUEST,t));return}u.send(a||null)})},Pu=(t,e)=>{let i=new AbortController,n;const s=function(d){if(!n){n=!0,r();const h=d instanceof Error?d:this.reason;i.abort(h instanceof T?h:new Kt(h instanceof Error?h.message:h))}};let a=e&&setTimeout(()=>{s(new T(`timeout ${e} of ms exceeded`,T.ETIMEDOUT))},e);const r=()=>{t&&(a&&clearTimeout(a),a=null,t.forEach(d=>{d&&(d.removeEventListener?d.removeEventListener("abort",s):d.unsubscribe(s))}),t=null)};t.forEach(d=>d&&d.addEventListener&&d.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=r,[l,()=>{a&&clearTimeout(a),a=null}]},Uu=function*(t,e){let i=t.byteLength;if(!e||i<e){yield t;return}let n=0,s;for(;n<i;)s=n+e,yield t.slice(n,s),n=s},Ou=async function*(t,e,i){for await(const n of t)yield*Uu(ArrayBuffer.isView(n)?n:await i(String(n)),e)},jr=(t,e,i,n,s)=>{const a=Ou(t,e,s);let r=0;return new ReadableStream({type:"bytes",async pull(l){const{done:d,value:h}=await a.next();if(d){l.close(),n();return}let u=h.byteLength;i&&i(r+=u),l.enqueue(new Uint8Array(h))},cancel(l){return n(l),a.return()}},{highWaterMark:2})},eo=(t,e)=>{const i=t!=null;return n=>setTimeout(()=>e({lengthComputable:i,total:t,loaded:n}))},ps=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",al=ps&&typeof ReadableStream=="function",Ws=ps&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Nu=al&&(()=>{let t=!1;const e=new Request(be.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),to=64*1024,Hs=al&&!!(()=>{try{return m.isReadableStream(new Response("").body)}catch{}})(),Wn={stream:Hs&&(t=>t.body)};ps&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Wn[e]&&(Wn[e]=m.isFunction(t[e])?i=>i[e]():(i,n)=>{throw new T(`Response type '${e}' is not supported`,T.ERR_NOT_SUPPORT,n)})})})(new Response);const $u=async t=>{if(t==null)return 0;if(m.isBlob(t))return t.size;if(m.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if(m.isArrayBufferView(t))return t.byteLength;if(m.isURLSearchParams(t)&&(t=t+""),m.isString(t))return(await Ws(t)).byteLength},Bu=async(t,e)=>{const i=m.toFiniteNumber(t.getContentLength());return i??$u(e)},Fu=ps&&(async t=>{let{url:e,method:i,data:n,signal:s,cancelToken:a,timeout:r,onDownloadProgress:l,onUploadProgress:d,responseType:h,headers:u,withCredentials:p="same-origin",fetchOptions:v}=sl(t);h=h?(h+"").toLowerCase():"text";let[E,f]=s||a||r?Pu([s,a],r):[],b,_;const S=()=>{!b&&setTimeout(()=>{E&&E.unsubscribe()}),b=!0};let P;try{if(d&&Nu&&i!=="get"&&i!=="head"&&(P=await Bu(u,n))!==0){let he=new Request(e,{method:"POST",body:n,duplex:"half"}),Ue;m.isFormData(n)&&(Ue=he.headers.get("content-type"))&&u.setContentType(Ue),he.body&&(n=jr(he.body,to,eo(P,Fn(d)),null,Ws))}m.isString(p)||(p=p?"cors":"omit"),_=new Request(e,{...v,signal:E,method:i.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",withCredentials:p});let k=await fetch(_);const ue=Hs&&(h==="stream"||h==="response");if(Hs&&(l||ue)){const he={};["status","statusText","headers"].forEach(Gt=>{he[Gt]=k[Gt]});const Ue=m.toFiniteNumber(k.headers.get("content-length"));k=new Response(jr(k.body,to,l&&eo(Ue,Fn(l,!0)),ue&&S,Ws),he)}h=h||"text";let Ke=await Wn[m.findKey(Wn,h)||"text"](k,t);return!ue&&S(),f&&f(),await new Promise((he,Ue)=>{il(he,Ue,{data:Ke,headers:te.from(k.headers),status:k.status,statusText:k.statusText,config:t,request:_})})}catch(k){throw S(),k&&k.name==="TypeError"&&/fetch/i.test(k.message)?Object.assign(new T("Network Error",T.ERR_NETWORK,t,_),{cause:k.cause||k}):T.from(k,k&&k.code,t,_)}}),Ks={http:nu,xhr:xu,fetch:Fu};m.forEach(Ks,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const io=t=>`- ${t}`,Wu=t=>m.isFunction(t)||t===null||t===!1,rl={getAdapter:t=>{t=m.isArray(t)?t:[t];const{length:e}=t;let i,n;const s={};for(let a=0;a<e;a++){i=t[a];let r;if(n=i,!Wu(i)&&(n=Ks[(r=String(i)).toLowerCase()],n===void 0))throw new T(`Unknown adapter '${r}'`);if(n)break;s[r||"#"+a]=n}if(!n){const a=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let r=e?a.length>1?`since :
`+a.map(io).join(`
`):" "+io(a[0]):"as no adapter specified";throw new T("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n},adapters:Ks};function ks(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Kt(null,t)}function no(t){return ks(t),t.headers=te.from(t.headers),t.data=ys.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),rl.getAdapter(t.adapter||Di.adapter)(t).then(function(n){return ks(t),n.data=ys.call(t,t.transformResponse,n),n.headers=te.from(n.headers),n},function(n){return tl(n)||(ks(t),n&&n.response&&(n.response.data=ys.call(t,t.transformResponse,n.response),n.response.headers=te.from(n.response.headers))),Promise.reject(n)})}const ol="1.7.2",Wa={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Wa[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const so={};Wa.transitional=function(e,i,n){function s(a,r){return"[Axios v"+ol+"] Transitional option '"+a+"'"+r+(n?". "+n:"")}return(a,r,l)=>{if(e===!1)throw new T(s(r," has been removed"+(i?" in "+i:"")),T.ERR_DEPRECATED);return i&&!so[r]&&(so[r]=!0,console.warn(s(r," has been deprecated since v"+i+" and will be removed in the near future"))),e?e(a,r,l):!0}};function Hu(t,e,i){if(typeof t!="object")throw new T("options must be an object",T.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let s=n.length;for(;s-- >0;){const a=n[s],r=e[a];if(r){const l=t[a],d=l===void 0||r(l,a,t);if(d!==!0)throw new T("option "+a+" must be "+d,T.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new T("Unknown option "+a,T.ERR_BAD_OPTION)}}const Vs={assertOptions:Hu,validators:Wa},Ve=Vs.validators;class at{constructor(e){this.defaults=e,this.interceptors={request:new Zr,response:new Zr}}async request(e,i){try{return await this._request(e,i)}catch(n){if(n instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const a=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?a&&!String(n.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+a):n.stack=a}catch{}}throw n}}_request(e,i){typeof e=="string"?(i=i||{},i.url=e):i=e||{},i=ht(this.defaults,i);const{transitional:n,paramsSerializer:s,headers:a}=i;n!==void 0&&Vs.assertOptions(n,{silentJSONParsing:Ve.transitional(Ve.boolean),forcedJSONParsing:Ve.transitional(Ve.boolean),clarifyTimeoutError:Ve.transitional(Ve.boolean)},!1),s!=null&&(m.isFunction(s)?i.paramsSerializer={serialize:s}:Vs.assertOptions(s,{encode:Ve.function,serialize:Ve.function},!0)),i.method=(i.method||this.defaults.method||"get").toLowerCase();let r=a&&m.merge(a.common,a[i.method]);a&&m.forEach(["delete","get","head","post","put","patch","common"],f=>{delete a[f]}),i.headers=te.concat(r,a);const l=[];let d=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(i)===!1||(d=d&&b.synchronous,l.unshift(b.fulfilled,b.rejected))});const h=[];this.interceptors.response.forEach(function(b){h.push(b.fulfilled,b.rejected)});let u,p=0,v;if(!d){const f=[no.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,h),v=f.length,u=Promise.resolve(i);p<v;)u=u.then(f[p++],f[p++]);return u}v=l.length;let E=i;for(p=0;p<v;){const f=l[p++],b=l[p++];try{E=f(E)}catch(_){b.call(this,_);break}}try{u=no.call(this,E)}catch(f){return Promise.reject(f)}for(p=0,v=h.length;p<v;)u=u.then(h[p++],h[p++]);return u}getUri(e){e=ht(this.defaults,e);const i=nl(e.baseURL,e.url);return Jo(i,e.params,e.paramsSerializer)}}m.forEach(["delete","get","head","options"],function(e){at.prototype[e]=function(i,n){return this.request(ht(n||{},{method:e,url:i,data:(n||{}).data}))}});m.forEach(["post","put","patch"],function(e){function i(n){return function(a,r,l){return this.request(ht(l||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:a,data:r}))}}at.prototype[e]=i(),at.prototype[e+"Form"]=i(!0)});class Ha{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(a){i=a});const n=this;this.promise.then(s=>{if(!n._listeners)return;let a=n._listeners.length;for(;a-- >0;)n._listeners[a](s);n._listeners=null}),this.promise.then=s=>{let a;const r=new Promise(l=>{n.subscribe(l),a=l}).then(s);return r.cancel=function(){n.unsubscribe(a)},r},e(function(a,r,l){n.reason||(n.reason=new Kt(a,r,l),i(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const i=this._listeners.indexOf(e);i!==-1&&this._listeners.splice(i,1)}static source(){let e;return{token:new Ha(function(s){e=s}),cancel:e}}}function Ku(t){return function(i){return t.apply(null,i)}}function Vu(t){return m.isObject(t)&&t.isAxiosError===!0}const qs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qs).forEach(([t,e])=>{qs[e]=t});function ll(t){const e=new at(t),i=Fo(at.prototype.request,e);return m.extend(i,at.prototype,e,{allOwnKeys:!0}),m.extend(i,e,null,{allOwnKeys:!0}),i.create=function(s){return ll(ht(t,s))},i}const F=ll(Di);F.Axios=at;F.CanceledError=Kt;F.CancelToken=Ha;F.isCancel=tl;F.VERSION=ol;F.toFormData=ms;F.AxiosError=T;F.Cancel=F.CanceledError;F.all=function(e){return Promise.all(e)};F.spread=Ku;F.isAxiosError=Vu;F.mergeConfig=ht;F.AxiosHeaders=te;F.formToJSON=t=>el(m.isHTMLForm(t)?new FormData(t):t);F.getAdapter=rl.getAdapter;F.HttpStatusCode=qs;F.default=F;window.axios=F;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const g={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},C={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},dl={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_CHAPTERS_CUES:"mediaChaptersCues"},cl=Object.entries(dl),o=cl.reduce((t,[e,i])=>(t[e]=`${i.toLowerCase()}`,t),{}),Vt=cl.reduce((t,[e,i])=>(t[e]=`${i.toLowerCase()}`,t),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(Vt).reduce((t,[e,i])=>{const n=o[e];return n&&(t[i]=n),t},{userinactivechange:"userinactive"});const qu=Object.entries(o).reduce((t,[e,i])=>{const n=Vt[e];return n&&(t[i]=n),t},{userinactive:"userinactivechange"}),Xe={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},Dt={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},ao={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},oe={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},Fe={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Gu={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"},ae={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:t=1}={})=>`current playback rate ${t}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},X={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:t=30}={})=>`seek forward ${t} seconds`,SEEK_BACK_N_SECS:({seekOffset:t=30}={})=>`seek back ${t} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function Yu(t){return t==null?void 0:t.map(zu).join(" ")}function Qu(t){return t==null?void 0:t.split(/\s+/).map(Zu)}function zu(t){if(t){const{id:e,width:i,height:n}=t;return[e,i,n].filter(s=>s!=null).join(":")}}function Zu(t){if(t){const[e,i,n]=t.split(":");return{id:e,width:i,height:n}}}function Xu(t){return t==null?void 0:t.map(ju).join(" ")}function Ju(t){return t==null?void 0:t.split(/\s+/).map(eh)}function ju(t){if(t){const{id:e,kind:i,language:n,label:s}=t;return[e,i,n,s].filter(a=>a!=null).join(":")}}function eh(t){if(t){const[e,i,n,s]=t.split(":");return{id:e,kind:i,language:n,label:s}}}function th(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}const ul=t=>new Promise(e=>setTimeout(e,t)),ro=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ih=(t,e)=>{const i=t===1?ro[e].singular:ro[e].plural;return`${t} ${i}`},hi=t=>{if(!th(t))return"";const e=Math.abs(t),i=e!==t,n=new Date(0,0,0,0,0,e,0);return`${[n.getHours(),n.getMinutes(),n.getSeconds()].map((l,d)=>l&&ih(l,d)).filter(l=>l).join(", ")}${i?" remaining":""}`};function rt(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let n=Math.floor(t%60),s=Math.floor(t/60%60),a=Math.floor(t/3600);const r=Math.floor(e/60%60),l=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(a=s=n="0"),a=a>0||l>0?a+":":"",s=((a||r>=10)&&s<10?"0"+s:s)+":",n=n<10?"0"+n:n,(i?"-":"")+a+s+n}class hl{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class oo extends hl{}class nh{observe(){}unobserve(){}disconnect(){}}const ml={createElement:function(){return new Hn.HTMLElement},createElementNS:function(){return new Hn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},Hn={ResizeObserver:nh,document:ml,Node:oo,HTMLElement:class extends oo{},DocumentFragment:class extends hl{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}}},pl=typeof window>"u"||typeof window.customElements>"u",El=Object.keys(Hn).every(t=>t in globalThis),c=pl&&!El?Hn:globalThis,A=pl&&!El?ml:globalThis.document,lo=new WeakMap,Ka=t=>{let e=lo.get(t);return e||lo.set(t,e=new Set),e},fl=new c.ResizeObserver(t=>{for(let e of t)for(let i of Ka(e.target))i(e)});function Ot(t,e){Ka(t).add(e),fl.observe(t)}function _i(t,e){const i=Ka(t);i.delete(e),i.size||fl.unobserve(t)}function _e(t){var e;return(e=Gs(t))!=null?e:xi(t,"media-controller")}function Gs(t){var e;const{MEDIA_CONTROLLER:i}=C,n=t.getAttribute(i);if(n)return(e=Es(t))==null?void 0:e.getElementById(n)}const vl=(t,e,i=".value")=>{const n=t.querySelector(i);n&&(n.textContent=e)},sh=(t,e)=>{const i=`slot[name="${e}"]`,n=t.shadowRoot.querySelector(i);return n?n.children:[]},bl=(t,e)=>sh(t,e)[0],We=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:We(t,e.getRootNode().host),xi=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||xi(t.getRootNode().host,e)};function Va(t=document){var e;const i=t==null?void 0:t.activeElement;return i?(e=Va(i.shadowRoot))!=null?e:i:null}function Es(t){var e;const i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function ah(t,e=3){if(t.checkVisibility)return t.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=t;for(;i&&e>0;){const n=getComputedStyle(i);if(n.opacity==="0"||n.visibility==="hidden"||n.display==="none")return!1;i=i.parentElement,e--}return!0}function rh(t,e,i,n){const s=ws(i,n),a=ws(i,{x:t,y:e}),r=ws(n,{x:t,y:e});return a>s||r>s?a>r?1:0:a/s}function ws(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function B(t,e){const i=oh(t,n=>n===e);return i||gl(t,e)}function oh(t,e){var i;let n;for(n of t.querySelectorAll("style")){let s;try{s=(i=n.sheet)==null?void 0:i.cssRules}catch{continue}for(let a of s??[])if(e(a.selectorText))return a}}function gl(t,e){var i,n;const s=(i=t.querySelectorAll("style"))!=null?i:[],a=s==null?void 0:s[s.length-1];return a!=null&&a.sheet?(a==null||a.sheet.insertRule(`${e}{}`,a.sheet.cssRules.length),(n=a.sheet.cssRules)==null?void 0:n[a.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function $(t,e,i=Number.NaN){const n=t.getAttribute(e);return n!=null?+n:i}function z(t,e,i){const n=+i;if(i==null||Number.isNaN(n)){t.hasAttribute(e)&&t.removeAttribute(e);return}$(t,e,void 0)!==n&&t.setAttribute(e,`${n}`)}function G(t,e){return t.hasAttribute(e)}function Y(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}G(t,e)!=i&&t.toggleAttribute(e,i)}function J(t,e,i=null){var n;return(n=t.getAttribute(e))!=null?n:i}function j(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const n=`${i}`;J(t,e,void 0)!==n&&t.setAttribute(e,n)}var _l=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qe=(t,e,i)=>(_l(t,e,"read from private field"),i?i.call(t):e.get(t)),lh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ui=(t,e,i,n)=>(_l(t,e,"write to private field"),e.set(t,i),i),ee;const Al=A.createElement("template");Al.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class dh extends c.HTMLElement{constructor(e={}){if(super(),lh(this,ee,void 0),!this.shadowRoot){const i=this.attachShadow({mode:"open"}),n=Al.content.cloneNode(!0);this.nativeEl=n;let s=e.slotTemplate;s||(s=A.createElement("template"),s.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(s.content.cloneNode(!0)),i.appendChild(n)}}static get observedAttributes(){return[C.MEDIA_CONTROLLER,o.MEDIA_PAUSED]}attributeChangedCallback(e,i,n){var s,a,r,l,d;e===C.MEDIA_CONTROLLER&&(i&&((a=(s=qe(this,ee))==null?void 0:s.unassociateElement)==null||a.call(s,this),Ui(this,ee,null)),n&&this.isConnected&&(Ui(this,ee,(r=this.getRootNode())==null?void 0:r.getElementById(n)),(d=(l=qe(this,ee))==null?void 0:l.associateElement)==null||d.call(l,this)))}connectedCallback(){var e,i,n,s;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Ui(this,ee,ch(this)),this.getAttribute(C.MEDIA_CONTROLLER)&&((i=(e=qe(this,ee))==null?void 0:e.associateElement)==null||i.call(e,this)),(n=qe(this,ee))==null||n.addEventListener("pointerdown",this),(s=qe(this,ee))==null||s.addEventListener("click",this)}disconnectedCallback(){var e,i,n,s;this.getAttribute(C.MEDIA_CONTROLLER)&&((i=(e=qe(this,ee))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(n=qe(this,ee))==null||n.removeEventListener("pointerdown",this),(s=qe(this,ee))==null||s.removeEventListener("click",this),Ui(this,ee,null)}handleEvent(e){var i;const n=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(n==null?void 0:n.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:a,clientY:r}=e,{left:l,top:d,width:h,height:u}=this.getBoundingClientRect(),p=a-l,v=r-d;if(p<0||v<0||p>h||v>u||h===0&&u===0)return;const{pointerType:E=this._pointerType}=e;if(this._pointerType=void 0,E===ao.TOUCH){this.handleTap(e);return}else if(E===ao.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return G(this,o.MEDIA_PAUSED)}set mediaPaused(e){Y(this,o.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?g.MEDIA_PLAY_REQUEST:g.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new c.CustomEvent(i,{composed:!0,bubbles:!0}))}}ee=new WeakMap;function ch(t){var e;const i=t.getAttribute(C.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):xi(t,"media-controller")}c.customElements.get("media-gesture-receiver")||c.customElements.define("media-gesture-receiver",dh);var uh=Object.defineProperty,hh=(t,e,i)=>e in t?uh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,mh=(t,e,i)=>(hh(t,e+"",i),i),qa=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ys=(t,e,i)=>(qa(t,e,"read from private field"),e.get(t)),je=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Rs=(t,e,i,n)=>(qa(t,e,"write to private field"),e.set(t,i),i),ve=(t,e,i)=>(qa(t,e,"access private method"),i),Kn,bt,Qs,Sl,zs,Tl,Ai,fs,vs,Ga,Nt,Si;const w={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},Il=A.createElement("template");Il.innerHTML=`
  <style>
    
    :host([${o.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${w.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${w.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${w.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${w.AUDIO}])[${w.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${w.AUDIO}])[${w.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${w.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${w.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${w.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${w.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${w.NO_AUTOHIDE}]):not([hidden])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${w.USER_INACTIVE}]:not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_AIRPLAYING}]):not([${o.MEDIA_IS_CASTING}]):not([${w.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${w.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${w.USER_INACTIVE}]:not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_CASTING}]):not([${w.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${w.AUDIO}])[${o.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role="menu"]) {
      align-self: end;
    }

    ::slotted([role="dialog"]) {
      align-self: center;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;const ph=Object.values(o),Eh="sm:384 md:576 lg:768 xl:960";function fh(t){vh(t.target,t.contentRect.width)}function vh(t,e){var i;if(!t.isConnected)return;const n=(i=t.getAttribute(w.BREAKPOINTS))!=null?i:Eh,s=bh(n),a=gh(s,e);let r=!1;if(Object.keys(s).forEach(l=>{if(a.includes(l)){t.hasAttribute(`breakpoint${l}`)||(t.setAttribute(`breakpoint${l}`,""),r=!0);return}t.hasAttribute(`breakpoint${l}`)&&(t.removeAttribute(`breakpoint${l}`),r=!0)}),r){const l=new CustomEvent(Vt.BREAKPOINTS_CHANGE,{detail:a});t.dispatchEvent(l)}}function bh(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function gh(t,e){return Object.keys(t).filter(i=>e>=t[i])}class yl extends c.HTMLElement{constructor(){super(),je(this,Qs),je(this,zs),je(this,Ai),je(this,vs),je(this,Nt),je(this,Kn,0),je(this,bt,void 0),mh(this,"breakpointsComputed",!1),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Il.content.cloneNode(!0)));const e=r=>{const l=this.media;for(let d of r)d.type==="childList"&&(d.removedNodes.forEach(h=>{if(h.slot=="media"&&d.target==this){let u=d.previousSibling&&d.previousSibling.previousElementSibling;if(!u||!l)this.mediaUnsetCallback(h);else{let p=u.slot!=="media";for(;(u=u.previousSibling)!==null;)u.slot=="media"&&(p=!1);p&&this.mediaUnsetCallback(h)}}}),l&&d.addedNodes.forEach(h=>{h===l&&this.handleMediaUpdated(l)}))};new MutationObserver(e).observe(this,{childList:!0,subtree:!0});let n=!1;Ot(this,r=>{n||(setTimeout(()=>{fh(r),n=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(Vt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),n=!0)});let a=this.querySelector(":scope > slot[slot=media]");a&&a.addEventListener("slotchange",()=>{if(!a.assignedElements({flatten:!0}).length){Ys(this,bt)&&this.mediaUnsetCallback(Ys(this,bt));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[w.AUTOHIDE,w.GESTURES_DISABLED].concat(ph).filter(e=>![o.MEDIA_RENDITION_LIST,o.MEDIA_AUDIO_TRACK_LIST,o.MEDIA_CHAPTERS_CUES].includes(e))}attributeChangedCallback(e,i,n){e.toLowerCase()==w.AUTOHIDE&&(this.autohide=n)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Rs(this,bt,e),e.localName.includes("-")&&await c.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;const n=this.getAttribute(w.AUDIO)!=null?ae.AUDIO_PLAYER():ae.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",n),this.handleMediaUpdated(this.media),this.setAttribute(w.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=c.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),(e=c.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){Rs(this,bt,null)}handleEvent(e){switch(e.type){case"pointerdown":Rs(this,Kn,e.timeStamp);break;case"pointermove":ve(this,Qs,Sl).call(this,e);break;case"pointerup":ve(this,zs,Tl).call(this,e);break;case"mouseleave":ve(this,Ai,fs).call(this);break;case"mouseup":this.removeAttribute(w.KEYBOARD_CONTROL);break;case"keyup":ve(this,Nt,Si).call(this),this.setAttribute(w.KEYBOARD_CONTROL,"");break}}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return this._autohide===void 0?2:this._autohide}}Kn=new WeakMap;bt=new WeakMap;Qs=new WeakSet;Sl=function(t){t.pointerType!=="mouse"&&t.timeStamp-Ys(this,Kn)<250||(ve(this,vs,Ga).call(this),clearTimeout(this._inactiveTimeout),[this,this.media].includes(t.target)&&ve(this,Nt,Si).call(this))};zs=new WeakSet;Tl=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(w.USER_INACTIVE);[this,this.media].includes(t.target)&&e?ve(this,Ai,fs).call(this):ve(this,Nt,Si).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&ve(this,Nt,Si).call(this)};Ai=new WeakSet;fs=function(){if(this.autohide<0||this.hasAttribute(w.USER_INACTIVE))return;this.setAttribute(w.USER_INACTIVE,"");const t=new c.CustomEvent(Vt.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};vs=new WeakSet;Ga=function(){if(!this.hasAttribute(w.USER_INACTIVE))return;this.removeAttribute(w.USER_INACTIVE);const t=new c.CustomEvent(Vt.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};Nt=new WeakSet;Si=function(){ve(this,vs,Ga).call(this),clearTimeout(this._inactiveTimeout),!(this.autohide<0)&&(this._inactiveTimeout=setTimeout(()=>{ve(this,Ai,fs).call(this)},this.autohide*1e3))};c.customElements.get("media-container")||c.customElements.define("media-container",yl);var kl=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},q=(t,e,i)=>(kl(t,e,"read from private field"),i?i.call(t):e.get(t)),zt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Oi=(t,e,i,n)=>(kl(t,e,"write to private field"),e.set(t,i),i),gt,_t,Vn,st,$e,Ye;class bs{constructor(e,i,{defaultValue:n}={defaultValue:void 0}){zt(this,$e),zt(this,gt,void 0),zt(this,_t,void 0),zt(this,Vn,void 0),zt(this,st,new Set),Oi(this,gt,e),Oi(this,_t,i),Oi(this,Vn,new Set(n))}[Symbol.iterator](){return q(this,$e,Ye).values()}get length(){return q(this,$e,Ye).size}get value(){var e;return(e=[...q(this,$e,Ye)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Oi(this,st,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...q(this,$e,Ye)][e]}values(){return q(this,$e,Ye).values()}forEach(e){q(this,$e,Ye).forEach(e)}add(...e){var i,n;e.forEach(s=>q(this,st).add(s)),!(this.value===""&&!((i=q(this,gt))!=null&&i.hasAttribute(`${q(this,_t)}`)))&&((n=q(this,gt))==null||n.setAttribute(`${q(this,_t)}`,`${this.value}`))}remove(...e){var i;e.forEach(n=>q(this,st).delete(n)),(i=q(this,gt))==null||i.setAttribute(`${q(this,_t)}`,`${this.value}`)}contains(e){return q(this,$e,Ye).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}gt=new WeakMap;_t=new WeakMap;Vn=new WeakMap;st=new WeakMap;$e=new WeakSet;Ye=function(){return q(this,st).size?q(this,st):q(this,Vn)};const _h=(t="")=>t.split(/\s+/),wl=(t="")=>{let[e,i,n]=t.split(":");const s=n?decodeURIComponent(n):void 0;return e=e==="cc"?"captions":"subtitles",{kind:e,language:i,label:s}},gs=(t="",e={})=>_h(t).map(i=>{const n=wl(i);return{...e,...n}}),Rl=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?wl(e):e):typeof t=="string"?gs(t):[t]:[],Zs=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,Ti=(t=[])=>Array.prototype.map.call(t,Zs).join(" "),Ah=(t,e)=>i=>i[t]===e,Ll=t=>{const e=Object.entries(t).map(([i,n])=>Ah(i,n));return i=>e.every(n=>n(i))},mi=(t,e=[],i=[])=>{const n=Rl(i).map(Ll),s=a=>n.some(r=>r(a));Array.from(e).filter(s).forEach(a=>{a.mode=t})},_s=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];const i=typeof e=="function"?e:Ll(e);return Array.from(t.textTracks).filter(i)},Cl=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(o.MEDIA_SUBTITLES_SHOWING)},O={enter:"requestFullscreen",exit:"exitFullscreen",rootEvents:["fullscreenchange"],mediaEvents:[],element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};A.fullscreenElement===void 0&&(O.enter="webkitRequestFullScreen",O.exit=A.webkitExitFullscreen!=null?"webkitExitFullscreen":"webkitCancelFullScreen",O.rootEvents=["webkitfullscreenchange"],O.mediaEvents=["webkitbeginfullscreen","webkitendfullscreen"],O.element="webkitFullscreenElement",O.error="webkitfullscreenerror",O.enabled="webkitFullscreenEnabled");let Ni;const Ya=()=>{var t,e;return Ni||(Ni=(e=(t=A)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),Ni)},Sh=async(t=Ya())=>{if(!t)return!1;const e=t.volume;return t.volume=e/2+.1,await ul(0),t.volume!==e},Th=/.*Version\/.*Safari\/.*/.test(c.navigator.userAgent),Ml=(t=Ya())=>c.matchMedia("(display-mode: standalone)").matches&&Th?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",Dl=(t=Ya())=>{let e=A[O.enabled];return!e&&t&&(e="webkitSupportsFullscreen"in t),e},Ih=Dl(),yh=Ml(),kh=!!c.WebKitPlaybackTargetAvailabilityEvent,wh=!!c.chrome,qn=t=>_s(t.media,e=>[Xe.SUBTITLES,Xe.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),xl=t=>_s(t.media,e=>e.mode===Dt.SHOWING&&[Xe.SUBTITLES,Xe.CAPTIONS].includes(e.kind)),Pl=(t,e)=>{const i=qn(t),n=xl(t),s=!!n.length;if(i.length){if(e===!1||s&&e!==!0)mi(Dt.DISABLED,i,n);else if(e===!0||!s&&e!==!1){let a=i[0];const{options:r}=t;if(!(r!=null&&r.noSubtitlesLangPref)){const u=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),p=u?[u,...globalThis.navigator.languages]:globalThis.navigator.languages,v=i.filter(E=>p.some(f=>E.language.toLowerCase().startsWith(f.split("-")[0]))).sort((E,f)=>{const b=p.findIndex(S=>E.language.toLowerCase().startsWith(S.split("-")[0])),_=p.findIndex(S=>f.language.toLowerCase().startsWith(S.split("-")[0]));return b-_});v[0]&&(a=v[0])}const{language:l,label:d,kind:h}=a;mi(Dt.DISABLED,i,n),mi(Dt.SHOWING,i,[{language:l,label:d,kind:h}])}}},Qa=(t,e)=>t===e?!0:typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?Rh(t,e):Object.entries(t).every(([i,n])=>i in e&&Qa(n,e[i])),Rh=(t,e)=>{const i=Array.isArray(t),n=Array.isArray(e);return i!==n?!1:i||n?t.length!==e.length?!1:t.every((s,a)=>Qa(s,e[a])):!0},Lh=Object.values(Fe);let Gn;const Ch=Sh().then(t=>(Gn=t,Gn)),Mh=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof c.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const n=c.customElements.get(i);n&&e instanceof n||(await c.customElements.whenDefined(i),c.customElements.upgrade(e))}))},nn={mediaPaused:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;const{media:n}=e;n&&(t?n.pause():(i=n.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){const{media:i}=e;i&&(i.muted=t)},mediaEvents:["volumechange"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){const{media:i}=e;if(i){try{t==null?c.localStorage.removeItem("media-chrome-pref-volume"):c.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch{}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const n=c.localStorage.getItem("media-chrome-pref-volume");if(n==null)return;nn.mediaVolume.set(+n,e),t(n)}catch(n){console.debug("Error getting volume pref",n)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof(e==null?void 0:e.volume)>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||i.readyState===0||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;const n=i.seekable.start(0),s=i.seekable.end(i.seekable.length-1);if(!(!n&&!s))return[Number(n.toFixed(3)),Number(s.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,n=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(n).map((s,a)=>[Number(n.start(a).toFixed(3)),Number(n.end(a).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,n=[Fe.LIVE,Fe.ON_DEMAND].includes(i)?i:void 0;if(!e)return n;const{streamType:s}=e;if(Lh.includes(s))return s===Fe.UNKNOWN?n:s;const a=e.duration;return a===1/0?Fe.LIVE:Number.isFinite(a)?Fe.ON_DEMAND:n},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,n=nn.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&n===Fe.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(nn.mediaStreamType.get(t)===Fe.LIVE))return!1;const s=e.seekable;if(!s)return!0;if(!s.length)return!1;const a=s.end(s.length-1)-i;return e.currentTime>=a},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return qn(t).map(({kind:e,label:i,language:n})=>({kind:e,label:i,language:n}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return xl(t).map(({kind:e,label:i,language:n})=>({kind:e,label:i,language:n}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,n;const{media:s,options:a}=e;if(!s)return;const r=l=>{var d;!a.defaultSubtitles||l&&![Xe.CAPTIONS,Xe.SUBTITLES].includes((d=l==null?void 0:l.track)==null?void 0:d.kind)||Pl(e,!0)};return(i=s.textTracks)==null||i.addEventListener("addtrack",r),(n=s.textTracks)==null||n.addEventListener("removetrack",r),r(),()=>{var l,d;(l=s.textTracks)==null||l.removeEventListener("addtrack",r),(d=s.textTracks)==null||d.removeEventListener("removetrack",r)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[n]=_s(i,{kind:Xe.CHAPTERS});return Array.from((e=n==null?void 0:n.cues)!=null?e:[]).map(({text:s,startTime:a,endTime:r})=>({text:s,startTime:a,endTime:r}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{const{media:i}=e;if(!i)return;const n=i.querySelector('track[kind="chapters"][default][src]');return n==null||n.addEventListener("load",t),()=>{n==null||n.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:n,documentElement:s}=t;if(!n||!s||!s.pictureInPictureElement)return!1;if(s.pictureInPictureElement===n)return!0;if(s.pictureInPictureElement instanceof HTMLMediaElement)return(e=n.localName)!=null&&e.includes("-")?We(n,s.pictureInPictureElement):!1;if(s.pictureInPictureElement.localName.includes("-")){let a=s.pictureInPictureElement.shadowRoot;for(;a!=null&&a.pictureInPictureElement;){if(a.pictureInPictureElement===n)return!0;a=(i=a.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!A.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const n=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(s=>{if(s.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const a=()=>{i.removeEventListener("loadedmetadata",r),i.preload="none"},r=()=>{i.requestPictureInPicture().catch(n),a()};i.addEventListener("loadedmetadata",r),i.preload="metadata",setTimeout(()=>{i.readyState===0&&n(),a()},1e3)}else throw s}else throw s})}else A.pictureInPictureElement&&A.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(n=>({...n}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,n;const{media:s}=t;return(n=(i=s==null?void 0:s.videoRenditions)==null?void 0:i[(e=s.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:n.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const n=t,s=Array.prototype.findIndex.call(i.videoRenditions,a=>a.id==n);i.videoRenditions.selectedIndex!=s&&(i.videoRenditions.selectedIndex=s)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:n}=t;return(i=[...(e=n==null?void 0:n.audioTracks)!=null?e:[]].find(s=>s.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const n=t;for(let s of i.audioTracks)s.enabled=n==s.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){var e;const{media:i,documentElement:n,fullscreenElement:s=i}=t;if(!i||!n)return!1;if(!n[O.element])return"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i?i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Gu.FULLSCREEN:!1;if(n[O.element]===s)return!0;if(n[O.element].localName.includes("-")){let a=n[O.element].shadowRoot;if(!(O.element in a))return We(n[O.element],s);for(;a!=null&&a[O.element];){if(a[O.element]===s)return!0;a=(e=a[O.element])==null?void 0:e.shadowRoot}}return!1},set(t,e){var i,n;const{media:s,fullscreenElement:a,documentElement:r}=e;if(!t&&(r!=null&&r[O.exit])){const l=(i=r==null?void 0:r[O.exit])==null?void 0:i.call(r);l instanceof Promise&&l.catch(()=>{});return}if(a!=null&&a[O.enter]){const l=(n=a[O.enter])==null?void 0:n.call(a);l instanceof Promise&&l.catch(()=>{})}else s!=null&&s.webkitEnterFullscreen?s.webkitEnterFullscreen():s!=null&&s.requestFullscreen&&s.requestFullscreen()},rootEvents:O.rootEvents,mediaEvents:O.mediaEvents},mediaIsCasting:{get(t){var e;const{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:!!i.remote.state},set(t,e){var i,n;const{media:s}=e;if(s&&!(t&&((i=s.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((n=s.remote)==null?void 0:n.state)!=="connected")){if(typeof s.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}s.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&c.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!Ih||!Dl(e))return oe.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!yh||!Ml(e))return oe.UNSUPPORTED}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(Gn===!1||(e==null?void 0:e.volume)==null)return oe.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{Gn==null&&Ch.then(e=>t(e?void 0:oe.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:n}=t;if(!wh||!((i=n==null?void 0:n.remote)!=null&&i.state))return oe.UNSUPPORTED;if(!(e==null||e==="available"))return oe.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:n}=e;return n?(n.disableRemotePlayback||n.hasAttribute("disableremoteplayback")||(i=n==null?void 0:n.remote)==null||i.watchAvailability(a=>{t({availability:a?"available":"not-available"})}).catch(a=>{a.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var a;(a=n==null?void 0:n.remote)==null||a.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!kh)return oe.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return oe.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:n}=e;return n?(n.disableRemotePlayback||n.hasAttribute("disableremoteplayback")||(i=n==null?void 0:n.remote)==null||i.watchAvailability(a=>{t({availability:a?"available":"not-available"})}).catch(a=>{a.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var a;(a=n==null?void 0:n.remote)==null||a.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!(i!=null&&i.videoRenditions))return oe.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return oe.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:n}=t;if(!(n!=null&&n.audioTracks))return oe.UNSUPPORTED;if(((i=(e=n.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return oe.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},Dh={[g.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var n,s,a;const{media:r}=e,l=i??void 0;let d,h;if(r&&l!=null){const[E]=_s(r,{kind:Xe.METADATA,label:"thumbnails"}),f=Array.prototype.find.call((n=E==null?void 0:E.cues)!=null?n:[],(b,_,S)=>_===0?b.endTime>l:_===S.length-1?b.startTime<=l:b.startTime<=l&&b.endTime>l);if(f){const b=/'^(?:[a-z]+:)?\/\//i.test(f.text)||(s=r==null?void 0:r.querySelector('track[label="thumbnails"]'))==null?void 0:s.src,_=new URL(f.text,b);h=new URLSearchParams(_.hash).get("#xywh").split(",").map(P=>+P),d=_.href}}const u=t.mediaDuration.get(e);let v=(a=t.mediaChaptersCues.get(e).find((E,f,b)=>f===b.length-1&&u===E.endTime?E.startTime<=l&&E.endTime>=l:E.startTime<=l&&E.endTime>l))==null?void 0:a.text;return i!=null&&v==null&&(v=""),{mediaPreviewTime:l,mediaPreviewImage:d,mediaPreviewCoords:h,mediaPreviewChapter:v}},[g.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[g.MEDIA_PLAY_REQUEST](t,e){var i;const n="mediaPaused";if(t.mediaStreamType.get(e)===Fe.LIVE){const r=!(t.mediaTargetLiveWindow.get(e)>0),l=(i=t.mediaSeekable.get(e))==null?void 0:i[1];r&&l&&t.mediaCurrentTime.set(l,e)}t[n].set(!1,e)},[g.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const n="mediaPlaybackRate",s=i;t[n].set(s,e)},[g.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[g.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[g.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const n="mediaVolume",s=i;s&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[n].set(s,e)},[g.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const n="mediaCurrentTime",s=i;t[n].set(s,e)},[g.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];Number.isNaN(Number(s))&&t[n].set(s,e)},[g.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var n;const{options:s}=e,a=qn(e),r=Rl(i),l=(n=r[0])==null?void 0:n.language;l&&!s.noSubtitlesLangPref&&c.localStorage.setItem("media-chrome-pref-subtitles-lang",l),mi(Dt.SHOWING,a,r)},[g.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const n=qn(e),s=i??[];mi(Dt.DISABLED,n,s)},[g.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){Pl(e,i)},[g.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const n="mediaRenditionSelected",s=i;t[n].set(s,e)},[g.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const n="mediaAudioTrackEnabled",s=i;t[n].set(s,e)},[g.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[g.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[g.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e){const i="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[i].set(!0,e)},[g.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[g.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[g.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[g.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},xh=({media:t,fullscreenElement:e,documentElement:i,stateMediator:n=nn,requestMap:s=Dh,options:a={},monitorStateOwnersOnlyWithSubscriptions:r=!0})=>{const l=[],d={options:{...a}};let h=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const u=b=>{b!=null&&(Qa(b,h)||(h=Object.freeze({...h,...b}),l.forEach(_=>_(h))))},p=()=>{const b=Object.entries(n).reduce((_,[S,{get:P}])=>(_[S]=P(d),_),{});u(b)},v={};let E;const f=async(b,_)=>{var S,P,k,ue,Ke,he,Ue,Gt,vr,br,gr,_r,Ar,Sr,Tr,Ir;const uc=!!E;if(E={...d,...E??{},...b},uc)return;await Mh(...Object.values(b));const pt=l.length>0&&_===0&&r,yr=d.media!==E.media,kr=((S=d.media)==null?void 0:S.textTracks)!==((P=E.media)==null?void 0:P.textTracks),wr=((k=d.media)==null?void 0:k.videoRenditions)!==((ue=E.media)==null?void 0:ue.videoRenditions),Rr=((Ke=d.media)==null?void 0:Ke.audioTracks)!==((he=E.media)==null?void 0:he.audioTracks),Lr=((Ue=d.media)==null?void 0:Ue.remote)!==((Gt=E.media)==null?void 0:Gt.remote),Cr=d.documentElement!==E.documentElement,Mr=!!d.media&&(yr||pt),Dr=!!((vr=d.media)!=null&&vr.textTracks)&&(kr||pt),xr=!!((br=d.media)!=null&&br.videoRenditions)&&(wr||pt),Pr=!!((gr=d.media)!=null&&gr.audioTracks)&&(Rr||pt),Ur=!!((_r=d.media)!=null&&_r.remote)&&(Lr||pt),Or=!!d.documentElement&&(Cr||pt),Nr=Mr||Dr||xr||Pr||Ur||Or,Et=l.length===0&&_===1&&r,$r=!!E.media&&(yr||Et),Br=!!((Ar=E.media)!=null&&Ar.textTracks)&&(kr||Et),Fr=!!((Sr=E.media)!=null&&Sr.videoRenditions)&&(wr||Et),Wr=!!((Tr=E.media)!=null&&Tr.audioTracks)&&(Rr||Et),Hr=!!((Ir=E.media)!=null&&Ir.remote)&&(Lr||Et),Kr=!!E.documentElement&&(Cr||Et),Vr=$r||Br||Fr||Wr||Hr||Kr;if(!(Nr||Vr)){Object.entries(E).forEach(([M,Yt])=>{d[M]=Yt}),p(),E=void 0;return}Object.entries(n).forEach(([M,{get:Yt,mediaEvents:hc=[],textTracksEvents:mc=[],videoRenditionsEvents:pc=[],audioTracksEvents:Ec=[],remoteEvents:fc=[],rootEvents:vc=[],stateOwnersUpdateHandlers:bc=[]}])=>{v[M]||(v[M]={});const ie=N=>{const ne=Yt(d,N);u({[M]:ne})};let H;H=v[M].mediaEvents,hc.forEach(N=>{H&&Mr&&(d.media.removeEventListener(N,H),v[M].mediaEvents=void 0),$r&&(E.media.addEventListener(N,ie),v[M].mediaEvents=ie)}),H=v[M].textTracksEvents,mc.forEach(N=>{var ne,me;H&&Dr&&((ne=d.media.textTracks)==null||ne.removeEventListener(N,H),v[M].textTracksEvents=void 0),Br&&((me=E.media.textTracks)==null||me.addEventListener(N,ie),v[M].textTracksEvents=ie)}),H=v[M].videoRenditionsEvents,pc.forEach(N=>{var ne,me;H&&xr&&((ne=d.media.videoRenditions)==null||ne.removeEventListener(N,H),v[M].videoRenditionsEvents=void 0),Fr&&((me=E.media.videoRenditions)==null||me.addEventListener(N,ie),v[M].videoRenditionsEvents=ie)}),H=v[M].audioTracksEvents,Ec.forEach(N=>{var ne,me;H&&Pr&&((ne=d.media.audioTracks)==null||ne.removeEventListener(N,H),v[M].audioTracksEvents=void 0),Wr&&((me=E.media.audioTracks)==null||me.addEventListener(N,ie),v[M].audioTracksEvents=ie)}),H=v[M].remoteEvents,fc.forEach(N=>{var ne,me;H&&Ur&&((ne=d.media.remote)==null||ne.removeEventListener(N,H),v[M].remoteEvents=void 0),Hr&&((me=E.media.remote)==null||me.addEventListener(N,ie),v[M].remoteEvents=ie)}),H=v[M].rootEvents,vc.forEach(N=>{H&&Or&&(d.documentElement.removeEventListener(N,H),v[M].rootEvents=void 0),Kr&&(E.documentElement.addEventListener(N,ie),v[M].rootEvents=ie)});const qr=v[M].stateOwnersUpdateHandlers;bc.forEach(N=>{qr&&Nr&&qr(),Vr&&(v[M].stateOwnersUpdateHandlers=N(ie,E))})}),Object.entries(E).forEach(([M,Yt])=>{d[M]=Yt}),p(),E=void 0};return f({media:t,fullscreenElement:e,documentElement:i,options:a}),{dispatch(b){const{type:_,detail:S}=b;if(s[_]){u(s[_](n,d,b));return}_==="mediaelementchangerequest"?f({media:S}):_==="fullscreenelementchangerequest"?f({fullscreenElement:S}):_==="documentelementchangerequest"?f({documentElement:S}):_==="optionschangerequest"&&Object.entries(S??{}).forEach(([P,k])=>{d.options[P]=k})},getState(){return h},subscribe(b){return f({},l.length+1),l.push(b),b(h),()=>{const _=l.indexOf(b);_>=0&&(f({},l.length-1),l.splice(_,1))}}}};var Ph=xh,za=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},I=(t,e,i)=>(za(t,e,"read from private field"),i?i.call(t):e.get(t)),Oe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ge=(t,e,i,n)=>(za(t,e,"write to private field"),e.set(t,i),i),ze=(t,e,i)=>(za(t,e,"access private method"),i),Ze,ii,x,ni,Te,sn,an,Xs,$t,Ii,rn,Js;const Ul=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],co=10,y={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class Uh extends yl{constructor(){super(),Oe(this,an),Oe(this,$t),Oe(this,rn),Oe(this,Ze,new bs(this,y.HOTKEYS)),Oe(this,ii,void 0),Oe(this,x,void 0),Oe(this,ni,void 0),Oe(this,Te,void 0),Oe(this,sn,i=>{var n;(n=I(this,x))==null||n.dispatch(i)}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this);let e={};Ge(this,ni,i=>{Object.entries(i).forEach(([n,s])=>{if(n in e&&e[n]===s)return;this.propagateMediaState(n,s);const a=n.toLowerCase(),r=new c.CustomEvent(qu[a],{composed:!0,detail:s});this.dispatchEvent(r)}),e=i}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(y.NO_HOTKEYS,y.HOTKEYS,y.DEFAULT_STREAM_TYPE,y.DEFAULT_SUBTITLES,y.DEFAULT_DURATION)}get mediaStore(){return I(this,x)}set mediaStore(e){var i,n;if(I(this,x)&&((i=I(this,Te))==null||i.call(this),Ge(this,Te,void 0)),Ge(this,x,e),!I(this,x)&&!this.hasAttribute(y.NO_DEFAULT_STORE)){ze(this,an,Xs).call(this);return}Ge(this,Te,(n=I(this,x))==null?void 0:n.subscribe(I(this,ni)))}get fullscreenElement(){var e;return(e=I(this,ii))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(y.FULLSCREEN_ELEMENT)&&this.removeAttribute(y.FULLSCREEN_ELEMENT),Ge(this,ii,e),(i=I(this,x))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,i,n){var s,a,r,l,d,h;if(super.attributeChangedCallback(e,i,n),e===y.NO_HOTKEYS)n!==i&&n===""?(this.hasAttribute(y.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):n!==i&&n===null&&this.enableHotkeys();else if(e===y.HOTKEYS)I(this,Ze).value=n;else if(e===y.DEFAULT_SUBTITLES&&n!==i)(s=I(this,x))==null||s.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(y.DEFAULT_SUBTITLES)}});else if(e===y.DEFAULT_STREAM_TYPE)(r=I(this,x))==null||r.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(a=this.getAttribute(y.DEFAULT_STREAM_TYPE))!=null?a:void 0}});else if(e===y.LIVE_EDGE_OFFSET)(l=I(this,x))==null||l.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(y.LIVE_EDGE_OFFSET)?+this.getAttribute(y.LIVE_EDGE_OFFSET):void 0}});else if(e===y.FULLSCREEN_ELEMENT){const u=n?(d=this.getRootNode())==null?void 0:d.getElementById(n):void 0;Ge(this,ii,u),(h=I(this,x))==null||h.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,i;!I(this,x)&&!this.hasAttribute(y.NO_DEFAULT_STORE)&&ze(this,an,Xs).call(this),(e=I(this,x))==null||e.dispatch({type:"documentelementchangerequest",detail:A}),super.connectedCallback(),I(this,x)&&!I(this,Te)&&Ge(this,Te,(i=I(this,x))==null?void 0:i.subscribe(I(this,ni))),this.enableHotkeys()}disconnectedCallback(){var e,i,n,s;(e=super.disconnectedCallback)==null||e.call(this),I(this,x)&&((i=I(this,x))==null||i.dispatch({type:"documentelementchangerequest",detail:void 0}),(n=I(this,x))==null||n.dispatch({type:g.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),I(this,Te)&&((s=I(this,Te))==null||s.call(this),Ge(this,Te,void 0))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=I(this,x))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=I(this,x))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){mo(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const n=this.registerMediaStateReceiver.bind(this),s=this.unregisterMediaStateReceiver.bind(this),a=Wh(e,n,s);Object.values(g).forEach(r=>{e.addEventListener(r,I(this,sn))}),i.set(e,a)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(g).forEach(s=>{e.removeEventListener(s,I(this,sn))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),I(this,x)&&Object.entries(I(this,x).getState()).forEach(([s,a])=>{mo([e],s,a)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,n=i.indexOf(e);n<0||i.splice(n,1)}enableHotkeys(){this.addEventListener("keydown",ze(this,rn,Js))}disableHotkeys(){this.removeEventListener("keydown",ze(this,rn,Js)),this.removeEventListener("keyup",ze(this,$t,Ii))}get hotkeys(){return I(this,Ze)}keyboardShortcutHandler(e){var i,n,s,a,r,l;if(((a=(s=(i=e.target.getAttribute(y.KEYS_USED))==null?void 0:i.split(" "))!=null?s:(n=e.target)==null?void 0:n.keysUsed)!=null?a:[]).map(v=>v==="Space"?" ":v).filter(Boolean).includes(e.key))return;let h,u,p;if(!I(this,Ze).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&I(this,Ze).contains("nospace")))switch(e.key){case" ":case"k":h=I(this,x).getState().mediaPaused?g.MEDIA_PLAY_REQUEST:g.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new c.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"m":h=this.mediaStore.getState().mediaVolumeLevel==="off"?g.MEDIA_UNMUTE_REQUEST:g.MEDIA_MUTE_REQUEST,this.dispatchEvent(new c.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"f":h=this.mediaStore.getState().mediaIsFullscreen?g.MEDIA_EXIT_FULLSCREEN_REQUEST:g.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new c.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new c.CustomEvent(g.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{const v=this.hasAttribute(y.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(y.KEYBOARD_BACKWARD_SEEK_OFFSET):co;u=Math.max(((r=this.mediaStore.getState().mediaCurrentTime)!=null?r:0)-v,0),p=new c.CustomEvent(g.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(p);break}case"ArrowRight":{const v=this.hasAttribute(y.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(y.KEYBOARD_FORWARD_SEEK_OFFSET):co;u=Math.max(((l=this.mediaStore.getState().mediaCurrentTime)!=null?l:0)+v,0),p=new c.CustomEvent(g.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(p);break}}}}Ze=new WeakMap;ii=new WeakMap;x=new WeakMap;ni=new WeakMap;Te=new WeakMap;sn=new WeakMap;an=new WeakSet;Xs=function(){var t;this.mediaStore=Ph({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(y.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(y.DEFAULT_DURATION)?+this.getAttribute(y.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(y.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(y.LIVE_EDGE_OFFSET)?+this.getAttribute(y.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(y.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(y.NO_SUBTITLES_LANG_PREF)}})};$t=new WeakSet;Ii=function(t){const{key:e}=t;if(!Ul.includes(e)){this.removeEventListener("keyup",ze(this,$t,Ii));return}this.keyboardShortcutHandler(t)};rn=new WeakSet;Js=function(t){const{metaKey:e,altKey:i,key:n}=t;if(e||i||!Ul.includes(n)){this.removeEventListener("keyup",ze(this,$t,Ii));return}[" ","ArrowLeft","ArrowRight"].includes(n)&&!(I(this,Ze).contains(`no${n.toLowerCase()}`)||n===" "&&I(this,Ze).contains("nospace"))&&t.preventDefault(),this.addEventListener("keyup",ze(this,$t,Ii),{once:!0})};const Oh=Object.values(o),Nh=Object.values(dl),Ol=t=>{var e,i,n,s;let{observedAttributes:a}=t.constructor;!a&&((e=t.nodeName)!=null&&e.includes("-"))&&(c.customElements.upgrade(t),{observedAttributes:a}=t.constructor);const r=(s=(n=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,C.MEDIA_CHROME_ATTRIBUTES))==null?void 0:n.split)==null?void 0:s.call(n,/\s+/);return Array.isArray(a||r)?(a||r).filter(l=>Oh.includes(l)):[]},$h=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&c.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof c.customElements.get(t.nodeName.toLowerCase()))&&c.customElements.upgrade(t),Nh.some(n=>n in t)},js=t=>$h(t)||!!Ol(t).length,uo=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},ho={[o.MEDIA_SUBTITLES_LIST]:Ti,[o.MEDIA_SUBTITLES_SHOWING]:Ti,[o.MEDIA_SEEKABLE]:uo,[o.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(uo).join(" "),[o.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[o.MEDIA_RENDITION_LIST]:Yu,[o.MEDIA_AUDIO_TRACK_LIST]:Xu},Bh=async(t,e,i)=>{var n,s;if(t.isConnected||await ul(0),typeof i=="boolean"||i==null)return Y(t,e,i);if(typeof i=="number")return z(t,e,i);if(typeof i=="string")return j(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const a=(s=(n=ho[e])==null?void 0:n.call(ho,i))!=null?s:i;return t.setAttribute(e,a)},Fh=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},it=(t,e)=>{if(Fh(t))return;const i=(s,a)=>{var r,l;js(s)&&a(s);const{children:d=[]}=s??{},h=(l=(r=s==null?void 0:s.shadowRoot)==null?void 0:r.children)!=null?l:[];[...d,...h].forEach(p=>it(p,a))},n=t==null?void 0:t.nodeName.toLowerCase();if(n.includes("-")&&!js(t)){c.customElements.whenDefined(n).then(()=>{i(t,e)});return}i(t,e)},mo=(t,e,i)=>{t.forEach(n=>{if(e in n){n[e]=i;return}const s=Ol(n),a=e.toLowerCase();s.includes(a)&&Bh(n,a,i)})},Wh=(t,e,i)=>{it(t,e);const n=u=>{var p;const v=(p=u==null?void 0:u.composedPath()[0])!=null?p:u.target;e(v)},s=u=>{var p;const v=(p=u==null?void 0:u.composedPath()[0])!=null?p:u.target;i(v)};t.addEventListener(g.REGISTER_MEDIA_STATE_RECEIVER,n),t.addEventListener(g.UNREGISTER_MEDIA_STATE_RECEIVER,s);const a=u=>{u.forEach(p=>{const{addedNodes:v=[],removedNodes:E=[],type:f,target:b,attributeName:_}=p;f==="childList"?(Array.prototype.forEach.call(v,S=>it(S,e)),Array.prototype.forEach.call(E,S=>it(S,i))):f==="attributes"&&_===C.MEDIA_CHROME_ATTRIBUTES&&(js(b)?e(b):i(b))})};let r=[];const l=u=>{const p=u.target;p.name!=="media"&&(r.forEach(v=>it(v,i)),r=[...p.assignedElements({flatten:!0})],r.forEach(v=>it(v,e)))};t.addEventListener("slotchange",l);const d=new MutationObserver(a);return d.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{it(t,i),t.removeEventListener("slotchange",l),d.disconnect(),t.removeEventListener(g.REGISTER_MEDIA_STATE_RECEIVER,n),t.removeEventListener(g.UNREGISTER_MEDIA_STATE_RECEIVER,s)}};c.customElements.get("media-controller")||c.customElements.define("media-controller",Uh);var Hh=Object.defineProperty,Kh=(t,e,i)=>e in t?Hh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Vh=(t,e,i)=>(Kh(t,e+"",i),i),Nl=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},le=(t,e,i)=>(Nl(t,e,"read from private field"),i?i.call(t):e.get(t)),$i=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Bi=(t,e,i,n)=>(Nl(t,e,"write to private field"),e.set(t,i),i),Ie,on,At,ln;const $l=A.createElement("template");$l.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;class re extends c.HTMLElement{constructor(e={}){if(super(),$i(this,Ie,void 0),Vh(this,"preventClick",!1),$i(this,on,i=>{this.preventClick||this.handleClick(i)}),$i(this,At,i=>{const{key:n}=i;if(!this.keysUsed.includes(n)){this.removeEventListener("keyup",le(this,At));return}this.preventClick||this.handleClick(i)}),$i(this,ln,i=>{const{metaKey:n,altKey:s,key:a}=i;if(n||s||!this.keysUsed.includes(a)){this.removeEventListener("keyup",le(this,At));return}this.addEventListener("keyup",le(this,At),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});const i=$l.content.cloneNode(!0);this.nativeEl=i;let n=e.slotTemplate;n||(n=A.createElement("template"),n.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(n.content.cloneNode(!0)),this.shadowRoot.appendChild(i)}}static get observedAttributes(){return["disabled",C.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",le(this,on)),this.addEventListener("keydown",le(this,ln)),this.tabIndex=0}disable(){this.removeEventListener("click",le(this,on)),this.removeEventListener("keydown",le(this,ln)),this.removeEventListener("keyup",le(this,At)),this.tabIndex=-1}attributeChangedCallback(e,i,n){var s,a,r,l,d;e===C.MEDIA_CONTROLLER?(i&&((a=(s=le(this,Ie))==null?void 0:s.unassociateElement)==null||a.call(s,this),Bi(this,Ie,null)),n&&this.isConnected&&(Bi(this,Ie,(r=this.getRootNode())==null?void 0:r.getElementById(n)),(d=(l=le(this,Ie))==null?void 0:l.associateElement)==null||d.call(l,this))):e==="disabled"&&n!==i&&(n==null?this.enable():this.disable())}connectedCallback(){var e,i,n;const{style:s}=B(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");const a=this.getAttribute(C.MEDIA_CONTROLLER);a&&(Bi(this,Ie,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(n=(i=le(this,Ie))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=le(this,Ie))==null?void 0:e.unassociateElement)==null||i.call(e,this),Bi(this,Ie,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}}Ie=new WeakMap;on=new WeakMap;At=new WeakMap;ln=new WeakMap;c.customElements.get("media-chrome-button")||c.customElements.define("media-chrome-button",re);const po=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,Bl=A.createElement("template");Bl.innerHTML=`
  <style>
  :host([${o.MEDIA_IS_AIRPLAYING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${o.MEDIA_IS_AIRPLAYING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${po}</slot>
    <slot name="exit">${po}</slot>
  </slot>
`;const Eo=t=>{const e=t.mediaIsAirplaying?X.EXIT_AIRPLAY():X.ENTER_AIRPLAY();t.setAttribute("aria-label",e)};class qh extends re{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_AIRPLAYING,o.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:Bl,...e})}connectedCallback(){super.connectedCallback(),Eo(this)}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_IS_AIRPLAYING&&Eo(this)}get mediaIsAirplaying(){return G(this,o.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){Y(this,o.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return J(this,o.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){j(this,o.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new c.CustomEvent(g.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}c.customElements.get("media-airplay-button")||c.customElements.define("media-airplay-button",qh);function Gh({anchor:t,floating:e,placement:i}){let n=Yh({anchor:t,floating:e}),{x:s,y:a}=zh(n,i);return{x:s,y:a}}function Yh({anchor:t,floating:e}){return{anchor:Qh(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function Qh(t,e){let i=t.getBoundingClientRect(),n=e.getBoundingClientRect();return{x:i.x-n.x,y:i.y-n.y,width:i.width,height:i.height}}function zh({anchor:t,floating:e},i){const n=Zh(i)==="x"?"y":"x",s=n==="y"?"height":"width",a=Fl(i),r=t.x+t.width/2-e.width/2,l=t.y+t.height/2-e.height/2,d=t[s]/2-e[s]/2;let h;switch(a){case"top":h={x:r,y:t.y-e.height};break;case"bottom":h={x:r,y:t.y+t.height};break;case"right":h={x:t.x+t.width,y:l};break;case"left":h={x:t.x-e.width,y:l};break;default:h={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":h[n]-=d;break;case"end":h[n]+=d;break}return h}function Fl(t){return t.split("-")[0]}function Zh(t){return["top","bottom"].includes(Fl(t))?"y":"x"}var Xh=Object.defineProperty,Jh=(t,e,i)=>e in t?Xh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Yn=(t,e,i)=>(Jh(t,typeof e!="symbol"?e+"":e,i),i);class Za extends Event{constructor({action:e="auto",relatedTarget:i,...n}){super("invoke",n),Yn(this,"action"),Yn(this,"relatedTarget"),this.action=e,this.relatedTarget=i}}class jh extends Event{constructor({newState:e,oldState:i,...n}){super("toggle",n),Yn(this,"newState"),Yn(this,"oldState"),this.newState=e,this.oldState=i}}var em=Object.defineProperty,tm=(t,e,i)=>e in t?em(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,im=(t,e,i)=>(tm(t,e+"",i),i),Xa=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},R=(t,e,i)=>(Xa(t,e,"read from private field"),i?i.call(t):e.get(t)),L=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Be=(t,e,i,n)=>(Xa(t,e,"write to private field"),e.set(t,i),i),D=(t,e,i)=>(Xa(t,e,"access private method"),i),ye,ot,Je,Wl,Hl,dn,cn,lt,ea,Kl,Qn,un,ta,ia,Vl,na,ql,sa,Gl,xt,Pt,dt,Bt,zn,Ja,aa,Yl,ja,Ql,ra,zl,er,Zl,oa,Xl,la,Jl,pi,Zn,da,jl,Ei,Xn,hn,ca;function Ft({type:t,text:e,value:i,checked:n}){const s=A.createElement("media-chrome-menu-item");s.type=t??"",s.part.add("menu-item"),t&&s.part.add(t),s.value=i,s.checked=n;const a=A.createElement("span");return a.textContent=e,s.append(a),s}function ct(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if((i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;let n=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return n?n.cloneNode(!0):""}const ed=A.createElement("template");ed.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    slot[name="header"] {
      display: flex;
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    button[part~="back"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;const et={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class He extends c.HTMLElement{constructor(){super(),L(this,ea),L(this,un),L(this,ia),L(this,na),L(this,sa),L(this,dt),L(this,zn),L(this,aa),L(this,ja),L(this,ra),L(this,er),L(this,oa),L(this,la),L(this,pi),L(this,da),L(this,Ei),L(this,hn),L(this,ye,void 0),L(this,ot,void 0),L(this,Je,void 0),L(this,Wl,""),L(this,Hl,null),L(this,dn,new Set),L(this,cn,void 0),L(this,lt,!1),L(this,Qn,()=>{const e=R(this,dn),i=new Set(this.items);for(const n of e)i.has(n)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:n}));for(const n of i)e.has(n)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:n}));Be(this,dn,i)}),L(this,xt,()=>{D(this,dt,Bt).call(this,!1),D(this,zn,Ja).call(this,!1)}),L(this,Pt,()=>{D(this,dt,Bt).call(this,!1)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),Be(this,cn,new MutationObserver(R(this,Qn))),R(this,cn).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[et.DISABLED,et.HIDDEN,et.STYLE,et.ANCHOR,C.MEDIA_CONTROLLER]}static formatMenuItemText(e){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":D(this,ea,Kl).call(this,e);break;case"invoke":D(this,ia,Vl).call(this,e);break;case"click":D(this,aa,Yl).call(this,e);break;case"toggle":D(this,ra,zl).call(this,e);break;case"focusout":D(this,oa,Xl).call(this,e);break;case"keydown":D(this,la,Jl).call(this,e);break}}connectedCallback(){var e,i;D(this,un,ta).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),Be(this,ye,Gs(this)),(i=(e=R(this,ye))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(Ot(yi(this),R(this,xt)),Ot(this,R(this,Pt)))}disconnectedCallback(){var e,i;_i(yi(this),R(this,xt)),_i(this,R(this,Pt)),this.disable(),(i=(e=R(this,ye))==null?void 0:e.unassociateElement)==null||i.call(e,this),Be(this,ye,null)}attributeChangedCallback(e,i,n){var s,a,r,l;e===et.HIDDEN&&n!==i?(R(this,lt)||Be(this,lt,!0),this.hidden?D(this,sa,Gl).call(this):D(this,na,ql).call(this),this.dispatchEvent(new jh({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===C.MEDIA_CONTROLLER?(i&&((a=(s=R(this,ye))==null?void 0:s.unassociateElement)==null||a.call(s,this),Be(this,ye,null)),n&&this.isConnected&&(Be(this,ye,Gs(this)),(l=(r=R(this,ye))==null?void 0:r.associateElement)==null||l.call(r,this))):e===et.DISABLED&&n!==i?n==null?this.enable():this.disable():e===et.STYLE&&n!==i&&D(this,un,ta).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=Es(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(nm)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(n=>n.value===e);i&&D(this,hn,ca).call(this,i)}focus(){if(Be(this,ot,Va()),this.items.length){D(this,Ei,Xn).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e==null||e.focus()}handleSelect(e){var i;const n=D(this,pi,Zn).call(this,e);n&&(D(this,hn,ca).call(this,n,n.type==="checkbox"),R(this,Je)&&!this.hidden&&((i=R(this,ot))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,n;const{key:s}=e,a=this.items,r=(n=(i=D(this,pi,Zn).call(this,e))!=null?i:D(this,da,jl).call(this))!=null?n:a[0],l=a.indexOf(r);let d=Math.max(0,l);s==="ArrowDown"?d++:s==="ArrowUp"?d--:e.key==="Home"?d=0:e.key==="End"&&(d=a.length-1),d<0&&(d=a.length-1),d>a.length-1&&(d=0),D(this,Ei,Xn).call(this,a[d]),a[d].focus()}}ye=new WeakMap;ot=new WeakMap;Je=new WeakMap;Wl=new WeakMap;Hl=new WeakMap;dn=new WeakMap;cn=new WeakMap;lt=new WeakMap;ea=new WeakSet;Kl=function(t){const e=t.target;for(let i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();if(["header","title"].includes(e.name)){const i=this.shadowRoot.querySelector('slot[name="header"]');i.hidden=e.assignedNodes().length===0}e.name||R(this,Qn).call(this)};Qn=new WeakMap;un=new WeakSet;ta=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};ia=new WeakSet;Vl=function(t){Be(this,Je,t.relatedTarget),We(this,t.relatedTarget)||(this.hidden=!this.hidden)};na=new WeakSet;ql=function(){var t;(t=R(this,Je))==null||t.setAttribute("aria-expanded","true"),requestAnimationFrame(()=>D(this,dt,Bt).call(this,!1)),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Ot(yi(this),R(this,xt)),Ot(this,R(this,Pt))};sa=new WeakSet;Gl=function(){var t;(t=R(this,Je))==null||t.setAttribute("aria-expanded","false"),_i(yi(this),R(this,xt)),_i(this,R(this,Pt))};xt=new WeakMap;Pt=new WeakMap;dt=new WeakSet;Bt=function(t,e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:i,y:n}=Gh({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const a=yi(this).getBoundingClientRect(),r=this.anchorElement.getBoundingClientRect(),l=a.width-i-e,d=a.height-n-this.offsetHeight,h=a.height-r.height,{style:u}=B(this.shadowRoot,":host");t||u.setProperty("--media-menu-transition-in","none"),u.setProperty("position","absolute"),u.setProperty("right",`${Math.max(0,l)}px`),u.setProperty("bottom",`${d}px`),u.setProperty("--_menu-max-height",`${h}px`),u.removeProperty("--media-menu-transition-in")};zn=new WeakSet;Ja=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e==null?void 0:e.querySelector('[role="menu"]'),{style:n}=B(this.shadowRoot,":host");if(t||n.setProperty("--media-menu-transition-in","none"),i){const s=i.offsetHeight,a=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${s}px`),D(this,dt,Bt).call(this,t,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),D(this,dt,Bt).call(this,t);n.removeProperty("--media-menu-transition-in")};aa=new WeakSet;Yl=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(R(this,ja,Ql))){(e=R(this,ot))==null||e.focus(),this.hidden=!0;return}const i=D(this,pi,Zn).call(this,t);!i||i.hasAttribute("disabled")||(D(this,Ei,Xn).call(this,i),this.handleSelect(t))};ja=new WeakSet;Ql=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.part.contains("back")&&i.part.contains("button"))};ra=new WeakSet;zl=function(t){if(t.target===this)return;D(this,er,Zl).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Za({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);D(this,zn,Ja).call(this,!0)};er=new WeakSet;Zl=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};oa=new WeakSet;Xl=function(t){var e;We(this,t.relatedTarget)||(R(this,lt)&&((e=R(this,ot))==null||e.focus()),R(this,Je)&&R(this,Je)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};la=new WeakSet;Jl=function(t){var e,i,n,s,a;const{key:r,ctrlKey:l,altKey:d,metaKey:h}=t;if(!(l||d||h)&&this.keysUsed.includes(r))if(t.preventDefault(),t.stopPropagation(),r==="Tab"){if(R(this,lt)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(s=(n=this.nextElementSibling)==null?void 0:n.focus)==null||s.call(n),this.blur()}else r==="Escape"?((a=R(this,ot))==null||a.focus(),R(this,lt)&&(this.hidden=!0)):r==="Enter"||r===" "?this.handleSelect(t):this.handleMove(t)};pi=new WeakSet;Zn=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};da=new WeakSet;jl=function(){return this.items.find(t=>t.tabIndex===0)};Ei=new WeakSet;Xn=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};hn=new WeakSet;ca=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(n=>n.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((n,s)=>n!=i[s])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};im(He,"template",ed);function nm(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t==null?void 0:t.role)}function yi(t){var e;return(e=t.getAttribute("bounds")?xi(t,`#${t.getAttribute("bounds")}`):_e(t)||t.parentElement)!=null?e:t}c.customElements.get("media-chrome-menu")||c.customElements.define("media-chrome-menu",He);var tr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},td=(t,e,i)=>(tr(t,e,"read from private field"),i?i.call(t):e.get(t)),Fi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ua=(t,e,i,n)=>(tr(t,e,"write to private field"),e.set(t,i),i),Wi=(t,e,i)=>(tr(t,e,"access private method"),i),si,Jn,mn,ha,pn,ma;class sm extends He{constructor(){super(...arguments),Fi(this,mn),Fi(this,pn),Fi(this,si,[]),Fi(this,Jn,void 0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_AUDIO_TRACK_LIST,o.MEDIA_AUDIO_TRACK_ENABLED,o.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_AUDIO_TRACK_ENABLED&&i!==n?this.value=n:e===o.MEDIA_AUDIO_TRACK_LIST&&i!==n&&(ua(this,si,Ju(n)),Wi(this,mn,ha).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Wi(this,pn,ma))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Wi(this,pn,ma))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:_e(this).querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return td(this,si)}set mediaAudioTrackList(e){ua(this,si,e),Wi(this,mn,ha).call(this)}get mediaAudioTrackEnabled(){return J(this,o.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){j(this,o.MEDIA_AUDIO_TRACK_ENABLED,e)}}si=new WeakMap;Jn=new WeakMap;mn=new WeakSet;ha=function(){if(td(this,Jn)===JSON.stringify(this.mediaAudioTrackList))return;ua(this,Jn,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="";for(const e of t){const i=this.formatMenuItemText(e.label,e),n=Ft({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});n.prepend(ct(this,"checked-indicator")),this.defaultSlot.append(n)}};pn=new WeakSet;ma=function(){if(this.value==null)return;const t=new c.CustomEvent(g.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};c.customElements.get("media-audio-track-menu")||c.customElements.define("media-audio-track-menu",sm);class qt extends re{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Es(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){this.invokeTargetElement.dispatchEvent(new Za({relatedTarget:this}))}}c.customElements.get("media-chrome-menu-button")||c.customElements.define("media-chrome-menu-button",qt);const am=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,id=A.createElement("template");id.innerHTML=`
  <slot name="icon">${am}</slot>
`;class rm extends qt{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_AUDIO_TRACK_ENABLED,o.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:id})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ae.AUDIO_TRACKS())}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:_e(this).querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){return J(this,o.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){j(this,o.MEDIA_AUDIO_TRACK_ENABLED,e)}}c.customElements.get("media-audio-track-menu-button")||c.customElements.define("media-audio-track-menu-button",rm);const om=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,lm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,nd=A.createElement("template");nd.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${om}</slot>
    <slot name="off">${lm}</slot>
  </slot>
`;const fo=t=>{t.setAttribute("aria-checked",Cl(t))};class dm extends re{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_SUBTITLES_LIST,o.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:nd,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",ae.CLOSED_CAPTIONS()),fo(this)}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_SUBTITLES_SHOWING&&fo(this)}get mediaSubtitlesList(){return vo(this,o.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){bo(this,o.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return vo(this,o.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){bo(this,o.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new c.CustomEvent(g.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}const vo=(t,e)=>{const i=t.getAttribute(e);return i?gs(i):[]},bo=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const n=Ti(i);t.getAttribute(e)!==n&&t.setAttribute(e,n)};c.customElements.get("media-captions-button")||c.customElements.define("media-captions-button",dm);var cm=Object.defineProperty,um=(t,e,i)=>e in t?cm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,hm=(t,e,i)=>(um(t,e+"",i),i),ir=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},mm=(t,e,i)=>(ir(t,e,"read from private field"),i?i.call(t):e.get(t)),Ls=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pm=(t,e,i,n)=>(ir(t,e,"write to private field"),e.set(t,i),i),Cs=(t,e,i)=>(ir(t,e,"access private method"),i),jn,pa,sd,En,Ea;const Em=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,ad=A.createElement("template");ad.innerHTML=He.template.innerHTML+`
  <slot name="captions-indicator" hidden>${Em}</slot>`;class rd extends He{constructor(){super(...arguments),Ls(this,pa),Ls(this,En),Ls(this,jn,void 0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_SUBTITLES_LIST,o.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_SUBTITLES_LIST&&i!==n?Cs(this,pa,sd).call(this):e===o.MEDIA_SUBTITLES_SHOWING&&i!==n&&(this.value=n)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Cs(this,En,Ea))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Cs(this,En,Ea))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:_e(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return go(this,o.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){_o(this,o.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return go(this,o.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){_o(this,o.MEDIA_SUBTITLES_SHOWING,e)}}jn=new WeakMap;pa=new WeakSet;sd=function(){var t;if(mm(this,jn)===JSON.stringify(this.mediaSubtitlesList))return;pm(this,jn,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const e=!this.value,i=Ft({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:e});i.prepend(ct(this,"checked-indicator")),this.defaultSlot.append(i);const n=this.mediaSubtitlesList;for(const s of n){const a=Ft({type:"radio",text:this.formatMenuItemText(s.label,s),value:Zs(s),checked:this.value==Zs(s)});a.prepend(ct(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&a.append(ct(this,"captions-indicator")),this.defaultSlot.append(a)}};En=new WeakSet;Ea=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(o.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t!=null&&t.length&&i&&this.dispatchEvent(new c.CustomEvent(g.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const n=new c.CustomEvent(g.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(n)};hm(rd,"template",ad);const go=(t,e)=>{const i=t.getAttribute(e);return i?gs(i):[]},_o=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const n=Ti(i);t.getAttribute(e)!==n&&t.setAttribute(e,n)};c.customElements.get("media-captions-menu")||c.customElements.define("media-captions-menu",rd);const fm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,vm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,od=A.createElement("template");od.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${fm}</slot>
    <slot name="off">${vm}</slot>
  </slot>
`;const Ao=t=>{t.setAttribute("aria-checked",Cl(t))};class bm extends qt{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_SUBTITLES_LIST,o.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:od,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ae.CLOSED_CAPTIONS()),Ao(this)}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_SUBTITLES_SHOWING&&Ao(this)}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:_e(this).querySelector("media-captions-menu")}get mediaSubtitlesList(){return So(this,o.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){To(this,o.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return So(this,o.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){To(this,o.MEDIA_SUBTITLES_SHOWING,e)}}const So=(t,e)=>{const i=t.getAttribute(e);return i?gs(i):[]},To=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const n=Ti(i);t.getAttribute(e)!==n&&t.setAttribute(e,n)};c.customElements.get("media-captions-menu-button")||c.customElements.define("media-captions-menu-button",bm);const gm='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',_m='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',ld=A.createElement("template");ld.innerHTML=`
  <style>
  :host([${o.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${o.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${gm}</slot>
    <slot name="exit">${_m}</slot>
  </slot>
`;const Io=t=>{const e=t.mediaIsCasting?X.EXIT_CAST():X.ENTER_CAST();t.setAttribute("aria-label",e)};class Am extends re{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_CASTING,o.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:ld,...e})}connectedCallback(){super.connectedCallback(),Io(this)}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_IS_CASTING&&Io(this)}get mediaIsCasting(){return G(this,o.MEDIA_IS_CASTING)}set mediaIsCasting(e){Y(this,o.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return J(this,o.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){j(this,o.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?g.MEDIA_EXIT_CAST_REQUEST:g.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}}c.customElements.get("media-cast-button")||c.customElements.define("media-cast-button",Am);var Sm=Object.defineProperty,Tm=(t,e,i)=>e in t?Sm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Im=(t,e,i)=>(Tm(t,e+"",i),i),nr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ut=(t,e,i)=>(nr(t,e,"read from private field"),i?i.call(t):e.get(t)),tt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},dd=(t,e,i,n)=>(nr(t,e,"write to private field"),e.set(t,i),i),Zt=(t,e,i)=>(nr(t,e,"access private method"),i),ki,mt,fa,cd,va,ud,ba,hd,ga,md,_a,pd;const Ed=A.createElement("template");Ed.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-dialog-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-dialog-border-radius);
      border: var(--media-dialog-border, none);
      display: var(--media-dialog-display, inline-flex);
      transition: var(--media-dialog-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out
      ) !important;
      
      visibility: var(--media-dialog-visibility, visible);
      opacity: var(--media-dialog-opacity, 1);
      transform: var(--media-dialog-transform-in, translateY(0) scale(1));
    }

    :host([hidden]) {
      transition: var(--media-dialog-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-dialog-hidden-visibility, hidden);
      opacity: var(--media-dialog-hidden-opacity, 0);
      transform: var(--media-dialog-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }
  </style>
  <slot></slot>
`;const Ms={HIDDEN:"hidden",ANCHOR:"anchor"};class fd extends c.HTMLElement{constructor(){super(),tt(this,fa),tt(this,va),tt(this,ba),tt(this,ga),tt(this,_a),tt(this,ki,void 0),tt(this,mt,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[Ms.HIDDEN,Ms.ANCHOR]}handleEvent(e){switch(e.type){case"invoke":Zt(this,ba,hd).call(this,e);break;case"focusout":Zt(this,ga,md).call(this,e);break;case"keydown":Zt(this,_a,pd).call(this,e);break}}connectedCallback(){this.role||(this.role="dialog")}attributeChangedCallback(e,i,n){e===Ms.HIDDEN&&n!==i&&(this.hidden?Zt(this,va,ud).call(this):Zt(this,fa,cd).call(this))}focus(){dd(this,ki,Va());const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e==null||e.focus()}get keysUsed(){return["Escape","Tab"]}}ki=new WeakMap;mt=new WeakMap;fa=new WeakSet;cd=function(){var t;(t=Ut(this,mt))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};va=new WeakSet;ud=function(){var t;(t=Ut(this,mt))==null||t.setAttribute("aria-expanded","false")};ba=new WeakSet;hd=function(t){dd(this,mt,t.relatedTarget),We(this,t.relatedTarget)||(this.hidden=!this.hidden)};ga=new WeakSet;md=function(t){var e;We(this,t.relatedTarget)||((e=Ut(this,ki))==null||e.focus(),Ut(this,mt)&&Ut(this,mt)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};_a=new WeakSet;pd=function(t){var e,i,n,s,a;const{key:r,ctrlKey:l,altKey:d,metaKey:h}=t;l||d||h||this.keysUsed.includes(r)&&(t.preventDefault(),t.stopPropagation(),r==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(s=(n=this.nextElementSibling)==null?void 0:n.focus)==null||s.call(n),this.blur()):r==="Escape"&&((a=Ut(this,ki))==null||a.focus(),this.hidden=!0))};Im(fd,"template",Ed);c.customElements.get("media-chrome-dialog")||c.customElements.define("media-chrome-dialog",fd);var ym=Object.defineProperty,km=(t,e,i)=>e in t?ym(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,wm=(t,e,i)=>(km(t,e+"",i),i),sr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},xe=(t,e,i)=>(sr(t,e,"read from private field"),e.get(t)),Ne=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ds=(t,e,i,n)=>(sr(t,e,"write to private field"),e.set(t,i),i),De=(t,e,i)=>(sr(t,e,"access private method"),i),fn,fi,Aa,vd,ar,bd,rr,gd,Pe,Wt,wi,Sa,_d,vn,Ta;const Ad=A.createElement("template");Ad.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;const de={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class As extends c.HTMLElement{constructor(){super(),Ne(this,Aa),Ne(this,ar),Ne(this,rr),Ne(this,Wt),Ne(this,Sa),Ne(this,vn),Ne(this,fn,!1),Ne(this,fi,void 0),Ne(this,Pe,()=>{var e,i;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const n=this.shadowRoot.querySelector('slot[name="description"]'),s=(i=(e=this.submenuElement.checkedItems)==null?void 0:e[0])==null?void 0:i.text,a=A.createElement("span");a.textContent=s??"",n.replaceChildren(a)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[de.TYPE,de.DISABLED,de.CHECKED,de.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Xt(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":De(this,Aa,vd).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":De(this,Sa,_d).call(this,e);break;case"keyup":De(this,Wt,wi).call(this,e);break}}attributeChangedCallback(e,i,n){e===de.CHECKED&&Xt(this)&&!xe(this,fn)?this.setAttribute("aria-checked",n!=null?"true":"false"):e===de.TYPE&&n!==i?this.role="menuitem"+n:e===de.DISABLED&&n!==i&&(n==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(de.DISABLED)||this.enable(),this.role="menuitem"+this.type,Ds(this,fi,Ia(this,this.parentNode)),De(this,vn,Ta).call(this)}disconnectedCallback(){this.disable(),De(this,vn,Ta).call(this),Ds(this,fi,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Es(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(de.TYPE))!=null?e:""}set type(e){this.setAttribute(de.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(de.VALUE))!=null?e:this.text}set value(e){this.setAttribute(de.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Xt(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Xt(this)&&(Ds(this,fn,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Xt(this)||this.invokeTargetElement&&We(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Za({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}fn=new WeakMap;fi=new WeakMap;Aa=new WeakSet;vd=function(t){const e=t.target;if(!(e!=null&&e.name))for(let n of e.assignedNodes({flatten:!0}))n instanceof Text&&n.textContent.trim()===""&&n.remove();e.name==="submenu"&&(this.submenuElement?De(this,ar,bd).call(this):De(this,rr,gd).call(this))};ar=new WeakSet;bd=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",xe(this,Pe)),this.submenuElement.addEventListener("addmenuitem",xe(this,Pe)),this.submenuElement.addEventListener("removemenuitem",xe(this,Pe)),xe(this,Pe).call(this)};rr=new WeakSet;gd=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",xe(this,Pe)),this.submenuElement.removeEventListener("addmenuitem",xe(this,Pe)),this.submenuElement.removeEventListener("removemenuitem",xe(this,Pe)),xe(this,Pe).call(this)};Pe=new WeakMap;Wt=new WeakSet;wi=function(t){const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",De(this,Wt,wi));return}this.handleClick(t)};Sa=new WeakSet;_d=function(t){const{metaKey:e,altKey:i,key:n}=t;if(e||i||!this.keysUsed.includes(n)){this.removeEventListener("keyup",De(this,Wt,wi));return}this.addEventListener("keyup",De(this,Wt,wi),{once:!0})};vn=new WeakSet;Ta=function(){var t;const e=(t=xe(this,fi))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(n=>n.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const n of e)n.setAttribute("aria-checked","false");i==null||i.setAttribute("aria-checked","true")};wm(As,"template",Ad);function Xt(t){return t.type==="radio"||t.type==="checkbox"}function Ia(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?Ia(t,i):e!=null&&e.items?e:Ia(e,e==null?void 0:e.parentNode)}c.customElements.get("media-chrome-menu-item")||c.customElements.define("media-chrome-menu-item",As);var or=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},U=(t,e,i)=>(or(t,e,"read from private field"),i?i.call(t):e.get(t)),Q=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Qe=(t,e,i,n)=>(or(t,e,"write to private field"),e.set(t,i),i),pe=(t,e,i)=>(or(t,e,"access private method"),i),ke,Ss,bn,gn,Ee,es,_n,An,Sn,lr,Sd,Tn,ya,In,ka,ts,dr,wa,Td,Ra,Id,La,yd,Ca,kd;const wd=A.createElement("template");wd.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #background,
    #track {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #background {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #track {
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      overflow: hidden;
    }

    #progress,
    #highlight,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #background,
    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance" part="appearance">
      <div id="background"></div>
      <div id="track">
        <div id="highlight"></div>
        <div id="pointer"></div>
        <div id="progress"></div>
      </div>
      <div id="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class cr extends c.HTMLElement{constructor(){super(),Q(this,lr),Q(this,Tn),Q(this,In),Q(this,ts),Q(this,wa),Q(this,Ra),Q(this,La),Q(this,Ca),Q(this,ke,void 0),Q(this,Ss,void 0),Q(this,bn,void 0),Q(this,gn,void 0),Q(this,Ee,{}),Q(this,es,[]),Q(this,_n,()=>{if(this.range.matches(":focus-visible")){const{style:e}=B(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Q(this,An,()=>{const{style:e}=B(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Q(this,Sn,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(wd.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),Qe(this,bn,this.shadowRoot.querySelector("#startpoint")),Qe(this,gn,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",C.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,n){var s,a,r,l,d;e===C.MEDIA_CONTROLLER?(i&&((a=(s=U(this,ke))==null?void 0:s.unassociateElement)==null||a.call(s,this),Qe(this,ke,null)),n&&this.isConnected&&(Qe(this,ke,(r=this.getRootNode())==null?void 0:r.getElementById(n)),(d=(l=U(this,ke))==null?void 0:l.associateElement)==null||d.call(l,this))):(e==="disabled"||e==="aria-disabled"&&i!==n)&&(n==null?(this.range.removeAttribute(e),pe(this,Tn,ya).call(this)):(this.range.setAttribute(e,n),pe(this,In,ka).call(this)))}connectedCallback(){var e,i,n;const{style:s}=B(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),U(this,Ee).pointer=B(this.shadowRoot,"#pointer"),U(this,Ee).progress=B(this.shadowRoot,"#progress"),U(this,Ee).thumb=B(this.shadowRoot,"#thumb");const a=this.getAttribute(C.MEDIA_CONTROLLER);a&&(Qe(this,ke,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(n=(i=U(this,ke))==null?void 0:i.associateElement)==null||n.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",U(this,_n)),this.shadowRoot.addEventListener("focusout",U(this,An)),pe(this,Tn,ya).call(this),Ot(this.container,U(this,Sn))}disconnectedCallback(){var e,i;pe(this,In,ka).call(this),(i=(e=U(this,ke))==null?void 0:e.unassociateElement)==null||i.call(e,this),Qe(this,ke,null),this.shadowRoot.removeEventListener("focusin",U(this,_n)),this.shadowRoot.removeEventListener("focusout",U(this,An)),_i(this.container,U(this,Sn))}updatePointerBar(e){var i;(i=U(this,Ee).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const n=this.range.valueAsNumber*100;(e=U(this,Ee).progress)==null||e.style.setProperty("width",`${n}%`),(i=U(this,Ee).thumb)==null||i.style.setProperty("left",`${n}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;U(this,Ee).activeSegment=gl(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=[...new Set([+this.range.min,...e.flatMap(a=>[a.start,a.end]),+this.range.max])];Qe(this,es,[...n]);const s=n.pop();for(const[a,r]of n.entries()){const[l,d]=[a===0,a===n.length-1],h=l?"calc(var(--segments-gap) / -1)":`${r*100}%`,p=`calc(${((d?s:n[a+1])-r)*100}%${l||d?"":" - var(--segments-gap)"})`,v=A.createElementNS("http://www.w3.org/2000/svg","rect"),E=B(this.shadowRoot,`#segments-clipping rect:nth-child(${a+1})`);E.style.setProperty("x",h),E.style.setProperty("width",p),i.append(v)}}getPointerRatio(e){let i=rh(e.clientX,e.clientY,U(this,bn).getBoundingClientRect(),U(this,gn).getBoundingClientRect());return Math.max(0,Math.min(1,i))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":pe(this,Ca,kd).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":pe(this,wa,Td).call(this,e);break;case"pointerdown":pe(this,ts,dr).call(this,e);break;case"pointerup":pe(this,Ra,Id).call(this);break;case"pointerleave":pe(this,La,yd).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ke=new WeakMap;Ss=new WeakMap;bn=new WeakMap;gn=new WeakMap;Ee=new WeakMap;es=new WeakMap;_n=new WeakMap;An=new WeakMap;Sn=new WeakMap;lr=new WeakSet;Sd=function(t){const e=U(this,Ee).activeSegment;if(!e)return;const i=this.getPointerRatio(t),s=`#segments-clipping rect:nth-child(${U(this,es).findIndex((a,r,l)=>{const d=l[r+1];return d!=null&&i>=a&&i<=d})+1})`;(e.selectorText!=s||!e.style.transform)&&(e.selectorText=s,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Tn=new WeakSet;ya=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};In=new WeakSet;ka=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(t=c.window)==null||t.removeEventListener("pointerup",this),(e=c.window)==null||e.removeEventListener("pointermove",this)};ts=new WeakSet;dr=function(t){var e;Qe(this,Ss,t.composedPath().includes(this.range)),(e=c.window)==null||e.addEventListener("pointerup",this)};wa=new WeakSet;Td=function(t){var e;t.pointerType!=="mouse"&&pe(this,ts,dr).call(this,t),this.addEventListener("pointerleave",this),(e=c.window)==null||e.addEventListener("pointermove",this)};Ra=new WeakSet;Id=function(){var t;(t=c.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};La=new WeakSet;yd=function(){var t,e;this.removeEventListener("pointerleave",this),(t=c.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=U(this,Ee).activeSegment)==null||e.style.removeProperty("transform")};Ca=new WeakSet;kd=function(t){this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),pe(this,lr,Sd).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!U(this,Ss))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};c.customElements.get("media-chrome-range")||c.customElements.define("media-chrome-range",cr);var Rd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Hi=(t,e,i)=>(Rd(t,e,"read from private field"),i?i.call(t):e.get(t)),Rm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ki=(t,e,i,n)=>(Rd(t,e,"write to private field"),e.set(t,i),i),we;const Ld=A.createElement("template");Ld.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;class Lm extends c.HTMLElement{constructor(){super(),Rm(this,we,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ld.content.cloneNode(!0)))}static get observedAttributes(){return[C.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,n){var s,a,r,l,d;e===C.MEDIA_CONTROLLER&&(i&&((a=(s=Hi(this,we))==null?void 0:s.unassociateElement)==null||a.call(s,this),Ki(this,we,null)),n&&this.isConnected&&(Ki(this,we,(r=this.getRootNode())==null?void 0:r.getElementById(n)),(d=(l=Hi(this,we))==null?void 0:l.associateElement)==null||d.call(l,this)))}connectedCallback(){var e,i,n;const s=this.getAttribute(C.MEDIA_CONTROLLER);s&&(Ki(this,we,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(n=(i=Hi(this,we))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Hi(this,we))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ki(this,we,null)}}we=new WeakMap;c.customElements.get("media-control-bar")||c.customElements.define("media-control-bar",Lm);var Cd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Vi=(t,e,i)=>(Cd(t,e,"read from private field"),i?i.call(t):e.get(t)),Cm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qi=(t,e,i,n)=>(Cd(t,e,"write to private field"),e.set(t,i),i),Re;const Md=A.createElement("template");Md.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class Pi extends c.HTMLElement{constructor(){super(),Cm(this,Re,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Md.content.cloneNode(!0)))}static get observedAttributes(){return[C.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,n){var s,a,r,l,d;e===C.MEDIA_CONTROLLER&&(i&&((a=(s=Vi(this,Re))==null?void 0:s.unassociateElement)==null||a.call(s,this),qi(this,Re,null)),n&&this.isConnected&&(qi(this,Re,(r=this.getRootNode())==null?void 0:r.getElementById(n)),(d=(l=Vi(this,Re))==null?void 0:l.associateElement)==null||d.call(l,this)))}connectedCallback(){var e,i,n;const{style:s}=B(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const a=this.getAttribute(C.MEDIA_CONTROLLER);a&&(qi(this,Re,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(n=(i=Vi(this,Re))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Vi(this,Re))==null?void 0:e.unassociateElement)==null||i.call(e,this),qi(this,Re,null)}}Re=new WeakMap;c.customElements.get("media-text-display")||c.customElements.define("media-text-display",Pi);var Mm=Pi,Dd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},yo=(t,e,i)=>(Dd(t,e,"read from private field"),i?i.call(t):e.get(t)),Dm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},xm=(t,e,i,n)=>(Dd(t,e,"write to private field"),e.set(t,i),i),ai;class Pm extends Pi{constructor(){super(),Dm(this,ai,void 0),xm(this,ai,this.shadowRoot.querySelector("slot")),yo(this,ai).textContent=rt(0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_DURATION]}attributeChangedCallback(e,i,n){e===o.MEDIA_DURATION&&(yo(this,ai).textContent=rt(+n)),super.attributeChangedCallback(e,i,n)}get mediaDuration(){return $(this,o.MEDIA_DURATION)}set mediaDuration(e){z(this,o.MEDIA_DURATION,e)}}ai=new WeakMap;c.customElements.get("media-duration-display")||c.customElements.define("media-duration-display",Pm);const Um=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Om=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,xd=A.createElement("template");xd.innerHTML=`
  <style>
  :host([${o.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${o.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${Um}</slot>
    <slot name="exit">${Om}</slot>
  </slot>
`;const ko=t=>{const e=t.mediaIsFullscreen?X.EXIT_FULLSCREEN():X.ENTER_FULLSCREEN();t.setAttribute("aria-label",e)};class Nm extends re{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_FULLSCREEN,o.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:xd,...e})}connectedCallback(){super.connectedCallback(),ko(this)}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_IS_FULLSCREEN&&ko(this)}get mediaFullscreenUnavailable(){return J(this,o.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){j(this,o.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return G(this,o.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){Y(this,o.MEDIA_IS_FULLSCREEN,e)}handleClick(){const e=this.mediaIsFullscreen?g.MEDIA_EXIT_FULLSCREEN_REQUEST:g.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}}c.customElements.get("media-fullscreen-button")||c.customElements.define("media-fullscreen-button",Nm);const{MEDIA_TIME_IS_LIVE:yn,MEDIA_PAUSED:vi}=o,{MEDIA_SEEK_TO_LIVE_REQUEST:$m,MEDIA_PLAY_REQUEST:Bm}=g,Fm='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>',Pd=A.createElement("template");Pd.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${yn}]:not([${vi}])) slot[name=indicator] > *,
  :host([${yn}]:not([${vi}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${yn}]:not([${vi}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator">${Fm}</slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;const wo=t=>{const e=t.mediaPaused||!t.mediaTimeIsLive,i=e?X.SEEK_LIVE():X.PLAYING_LIVE();t.setAttribute("aria-label",i),e?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class Wm extends re{static get observedAttributes(){return[...super.observedAttributes,vi,yn]}constructor(e={}){super({slotTemplate:Pd,...e})}connectedCallback(){wo(this),super.connectedCallback()}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),wo(this)}get mediaPaused(){return G(this,o.MEDIA_PAUSED)}set mediaPaused(e){Y(this,o.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return G(this,o.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){Y(this,o.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new c.CustomEvent($m,{composed:!0,bubbles:!0})),this.hasAttribute(vi)&&this.dispatchEvent(new c.CustomEvent(Bm,{composed:!0,bubbles:!0})))}}c.customElements.get("media-live-button")||c.customElements.define("media-live-button",Wm);var Ud=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Jt=(t,e,i)=>(Ud(t,e,"read from private field"),i?i.call(t):e.get(t)),Ro=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},jt=(t,e,i,n)=>(Ud(t,e,"write to private field"),e.set(t,i),i),Le,kn;const Lo={LOADING_DELAY:"loadingdelay"},Od=500,Nd=A.createElement("template"),Hm=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;Nd.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Od}ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${Hm}</slot>
<div id="status" role="status" aria-live="polite">${ae.MEDIA_LOADING()}</div>
`;class Km extends c.HTMLElement{constructor(){if(super(),Ro(this,Le,void 0),Ro(this,kn,Od),!this.shadowRoot){const e=this.attachShadow({mode:"open"}),i=Nd.content.cloneNode(!0);e.appendChild(i)}}static get observedAttributes(){return[C.MEDIA_CONTROLLER,o.MEDIA_PAUSED,o.MEDIA_LOADING,Lo.LOADING_DELAY]}attributeChangedCallback(e,i,n){var s,a,r,l,d;e===Lo.LOADING_DELAY&&i!==n?this.loadingDelay=Number(n):e===C.MEDIA_CONTROLLER&&(i&&((a=(s=Jt(this,Le))==null?void 0:s.unassociateElement)==null||a.call(s,this),jt(this,Le,null)),n&&this.isConnected&&(jt(this,Le,(r=this.getRootNode())==null?void 0:r.getElementById(n)),(d=(l=Jt(this,Le))==null?void 0:l.associateElement)==null||d.call(l,this)))}connectedCallback(){var e,i,n;const s=this.getAttribute(C.MEDIA_CONTROLLER);s&&(jt(this,Le,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(n=(i=Jt(this,Le))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Jt(this,Le))==null?void 0:e.unassociateElement)==null||i.call(e,this),jt(this,Le,null)}get loadingDelay(){return Jt(this,kn)}set loadingDelay(e){jt(this,kn,e);const{style:i}=B(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return G(this,o.MEDIA_PAUSED)}set mediaPaused(e){Y(this,o.MEDIA_PAUSED,e)}get mediaLoading(){return G(this,o.MEDIA_LOADING)}set mediaLoading(e){Y(this,o.MEDIA_LOADING,e)}}Le=new WeakMap;kn=new WeakMap;c.customElements.get("media-loading-indicator")||c.customElements.define("media-loading-indicator",Km);const{MEDIA_VOLUME_LEVEL:ei}=o,Vm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Co=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,qm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,$d=A.createElement("template");$d.innerHTML=`
  <style>
  
  :host(:not([${ei}])) slot:not([name=high]):not([name=icon]), 
  :host([${ei}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${ei}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${ei}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${ei}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${Vm}</slot>
    <slot name="low">${Co}</slot>
    <slot name="medium">${Co}</slot>
    <slot name="high">${qm}</slot>
  </slot>
`;const Mo=t=>{const i=t.mediaVolumeLevel==="off"?X.UNMUTE():X.MUTE();t.setAttribute("aria-label",i)};class Gm extends re{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:$d,...e})}connectedCallback(){Mo(this),super.connectedCallback()}attributeChangedCallback(e,i,n){e===o.MEDIA_VOLUME_LEVEL&&Mo(this),super.attributeChangedCallback(e,i,n)}get mediaVolumeLevel(){return J(this,o.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){j(this,o.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?g.MEDIA_UNMUTE_REQUEST:g.MEDIA_MUTE_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}}c.customElements.get("media-mute-button")||c.customElements.define("media-mute-button",Gm);const Do=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,Bd=A.createElement("template");Bd.innerHTML=`
  <style>
  :host([${o.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${o.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${Do}</slot>
    <slot name="exit">${Do}</slot>
  </slot>
`;const xo=t=>{const e=t.mediaIsPip?X.EXIT_PIP():X.ENTER_PIP();t.setAttribute("aria-label",e)};class Ym extends re{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_PIP,o.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:Bd,...e})}connectedCallback(){xo(this),super.connectedCallback()}attributeChangedCallback(e,i,n){e===o.MEDIA_IS_PIP&&xo(this),super.attributeChangedCallback(e,i,n)}get mediaPipUnavailable(){return J(this,o.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){j(this,o.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return G(this,o.MEDIA_IS_PIP)}set mediaIsPip(e){Y(this,o.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?g.MEDIA_EXIT_PIP_REQUEST:g.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}}c.customElements.get("media-pip-button")||c.customElements.define("media-pip-button",Ym);var Qm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Gi=(t,e,i)=>(Qm(t,e,"read from private field"),i?i.call(t):e.get(t)),zm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},St;const xs={RATES:"rates"},Fd=[1,1.2,1.5,1.7,2],ri=1,Wd=A.createElement("template");Wd.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class Zm extends re{constructor(e={}){super({slotTemplate:Wd,...e}),zm(this,St,new bs(this,xs.RATES,{defaultValue:Fd})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${ri}x`}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PLAYBACK_RATE,xs.RATES]}attributeChangedCallback(e,i,n){if(super.attributeChangedCallback(e,i,n),e===xs.RATES&&(Gi(this,St).value=n),e===o.MEDIA_PLAYBACK_RATE){const s=n?+n:Number.NaN,a=Number.isNaN(s)?ri:s;this.container.innerHTML=`${a}x`,this.setAttribute("aria-label",ae.PLAYBACK_RATE({playbackRate:a}))}}get rates(){return Gi(this,St)}set rates(e){e?Array.isArray(e)&&(Gi(this,St).value=e.join(" ")):Gi(this,St).value=""}get mediaPlaybackRate(){return $(this,o.MEDIA_PLAYBACK_RATE,ri)}set mediaPlaybackRate(e){z(this,o.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const n=Array.from(this.rates.values(),r=>+r).sort((r,l)=>r-l),s=(i=(e=n.find(r=>r>this.mediaPlaybackRate))!=null?e:n[0])!=null?i:ri,a=new c.CustomEvent(g.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(a)}}St=new WeakMap;c.customElements.get("media-playback-rate-button")||c.customElements.define("media-playback-rate-button",Zm);var Hd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Yi=(t,e,i)=>(Hd(t,e,"read from private field"),i?i.call(t):e.get(t)),Ps=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ti=(t,e,i)=>(Hd(t,e,"access private method"),i),Tt,oi,wn,Rn,Ma;const Us={RATES:"rates"};class Xm extends He{constructor(){super(),Ps(this,oi),Ps(this,Rn),Ps(this,Tt,new bs(this,Us.RATES,{defaultValue:Fd})),ti(this,oi,wn).call(this)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PLAYBACK_RATE,Us.RATES]}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_PLAYBACK_RATE&&i!=n?this.value=n:e===Us.RATES&&i!=n&&(Yi(this,Tt).value=n,ti(this,oi,wn).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ti(this,Rn,Ma))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ti(this,Rn,Ma))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:_e(this).querySelector("media-playback-rate-menu-button")}get rates(){return Yi(this,Tt)}set rates(e){e?Array.isArray(e)&&(Yi(this,Tt).value=e.join(" ")):Yi(this,Tt).value="",ti(this,oi,wn).call(this)}get mediaPlaybackRate(){return $(this,o.MEDIA_PLAYBACK_RATE,ri)}set mediaPlaybackRate(e){z(this,o.MEDIA_PLAYBACK_RATE,e)}}Tt=new WeakMap;oi=new WeakSet;wn=function(){this.defaultSlot.textContent="";for(const t of this.rates){const e=Ft({type:"radio",text:this.formatMenuItemText(`${t}x`,t),value:t,checked:this.mediaPlaybackRate==t});e.prepend(ct(this,"checked-indicator")),this.defaultSlot.append(e)}};Rn=new WeakSet;Ma=function(){if(!this.value)return;const t=new c.CustomEvent(g.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};c.customElements.get("media-playback-rate-menu")||c.customElements.define("media-playback-rate-menu",Xm);var Jm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Qi=(t,e,i)=>(Jm(t,e,"read from private field"),i?i.call(t):e.get(t)),jm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},It;const Os={RATES:"rates"},ep=[1,1.2,1.5,1.7,2],Ns=1,Kd=A.createElement("template");Kd.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class tp extends qt{constructor(e={}){super({slotTemplate:Kd,...e}),jm(this,It,new bs(this,Os.RATES,{defaultValue:ep})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Ns}x`}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PLAYBACK_RATE,Os.RATES]}attributeChangedCallback(e,i,n){if(super.attributeChangedCallback(e,i,n),e===Os.RATES&&(Qi(this,It).value=n),e===o.MEDIA_PLAYBACK_RATE){const s=n?+n:Number.NaN,a=Number.isNaN(s)?Ns:s;this.container.innerHTML=`${a}x`,this.setAttribute("aria-label",ae.PLAYBACK_RATE({playbackRate:a}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:_e(this).querySelector("media-playback-rate-menu")}get rates(){return Qi(this,It)}set rates(e){e?Array.isArray(e)&&(Qi(this,It).value=e.join(" ")):Qi(this,It).value=""}get mediaPlaybackRate(){return $(this,o.MEDIA_PLAYBACK_RATE,Ns)}set mediaPlaybackRate(e){z(this,o.MEDIA_PLAYBACK_RATE,e)}}It=new WeakMap;c.customElements.get("media-playback-rate-menu-button")||c.customElements.define("media-playback-rate-menu-button",tp);const ip=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,np=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,Vd=A.createElement("template");Vd.innerHTML=`
  <style>
  :host([${o.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${o.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play">${ip}</slot>
    <slot name="pause">${np}</slot>
  </slot>
`;const Po=t=>{const e=t.mediaPaused?X.PLAY():X.PAUSE();t.setAttribute("aria-label",e)};class sp extends re{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PAUSED,o.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:Vd,...e})}connectedCallback(){Po(this),super.connectedCallback()}attributeChangedCallback(e,i,n){e===o.MEDIA_PAUSED&&Po(this),super.attributeChangedCallback(e,i,n)}get mediaPaused(){return G(this,o.MEDIA_PAUSED)}set mediaPaused(e){Y(this,o.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?g.MEDIA_PLAY_REQUEST:g.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}}c.customElements.get("media-play-button")||c.customElements.define("media-play-button",sp);const Ae={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},qd=A.createElement("template");qd.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;const ap=t=>{t.style.removeProperty("background-image")},rp=(t,e)=>{t.style["background-image"]=`url('${e}')`};class op extends c.HTMLElement{static get observedAttributes(){return[Ae.PLACEHOLDER_SRC,Ae.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(qd.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,n){e===Ae.SRC&&(n==null?this.image.removeAttribute(Ae.SRC):this.image.setAttribute(Ae.SRC,n)),e===Ae.PLACEHOLDER_SRC&&(n==null?ap(this.image):rp(this.image,n))}get placeholderSrc(){return J(this,Ae.PLACEHOLDER_SRC)}set placeholderSrc(e){j(this,Ae.SRC,e)}get src(){return J(this,Ae.SRC)}set src(e){j(this,Ae.SRC,e)}}c.customElements.get("media-poster-image")||c.customElements.define("media-poster-image",op);var Gd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},lp=(t,e,i)=>(Gd(t,e,"read from private field"),i?i.call(t):e.get(t)),dp=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},cp=(t,e,i,n)=>(Gd(t,e,"write to private field"),e.set(t,i),i),Ln;class up extends Mm{constructor(){super(),dp(this,Ln,void 0),cp(this,Ln,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_PREVIEW_CHAPTER&&n!==i&&n!=null&&(lp(this,Ln).textContent=n,n!==""?this.setAttribute("aria-valuetext",`chapter: ${n}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return J(this,o.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){j(this,o.MEDIA_PREVIEW_CHAPTER,e)}}Ln=new WeakMap;c.customElements.get("media-preview-chapter-display")||c.customElements.define("media-preview-chapter-display",up);var Yd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},zi=(t,e,i)=>(Yd(t,e,"read from private field"),i?i.call(t):e.get(t)),hp=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Zi=(t,e,i,n)=>(Yd(t,e,"write to private field"),e.set(t,i),i),Ce;const Qd=A.createElement("template");Qd.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class mp extends c.HTMLElement{constructor(){super(),hp(this,Ce,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Qd.content.cloneNode(!0)))}static get observedAttributes(){return[C.MEDIA_CONTROLLER,o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,n;const s=this.getAttribute(C.MEDIA_CONTROLLER);s&&(Zi(this,Ce,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(n=(i=zi(this,Ce))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;(i=(e=zi(this,Ce))==null?void 0:e.unassociateElement)==null||i.call(e,this),Zi(this,Ce,null)}attributeChangedCallback(e,i,n){var s,a,r,l,d;[o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===C.MEDIA_CONTROLLER&&(i&&((a=(s=zi(this,Ce))==null?void 0:s.unassociateElement)==null||a.call(s,this),Zi(this,Ce,null)),n&&this.isConnected&&(Zi(this,Ce,(r=this.getRootNode())==null?void 0:r.getElementById(n)),(d=(l=zi(this,Ce))==null?void 0:l.associateElement)==null||d.call(l,this)))}get mediaPreviewImage(){return J(this,o.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){j(this,o.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(o.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(o.MEDIA_PREVIEW_COORDS);return}this.setAttribute(o.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[n,s,a,r]=e,l=i.split("#")[0],d=getComputedStyle(this),{maxWidth:h,maxHeight:u,minWidth:p,minHeight:v}=d,E=Math.min(parseInt(h)/a,parseInt(u)/r),f=Math.max(parseInt(p)/a,parseInt(v)/r),b=E<1,_=b?E:f>1?f:1,{style:S}=B(this.shadowRoot,":host"),P=B(this.shadowRoot,"img").style,k=this.shadowRoot.querySelector("img"),ue=b?"min":"max";S.setProperty(`${ue}-width`,"initial","important"),S.setProperty(`${ue}-height`,"initial","important"),S.width=`${a*_}px`,S.height=`${r*_}px`;const Ke=()=>{P.width=`${this.imgWidth*_}px`,P.height=`${this.imgHeight*_}px`,P.display="block"};k.src!==l&&(k.onload=()=>{this.imgWidth=k.naturalWidth,this.imgHeight=k.naturalHeight,Ke()},k.src=l,Ke()),Ke(),P.transform=`translate(-${n*_}px, -${s*_}px)`}}Ce=new WeakMap;c.customElements.get("media-preview-thumbnail")||c.customElements.define("media-preview-thumbnail",mp);var zd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Uo=(t,e,i)=>(zd(t,e,"read from private field"),i?i.call(t):e.get(t)),pp=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ep=(t,e,i,n)=>(zd(t,e,"write to private field"),e.set(t,i),i),li;class fp extends Pi{constructor(){super(),pp(this,li,void 0),Ep(this,li,this.shadowRoot.querySelector("slot")),Uo(this,li).textContent=rt(0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_PREVIEW_TIME&&n!=null&&(Uo(this,li).textContent=rt(n))}get mediaPreviewTime(){return $(this,o.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){z(this,o.MEDIA_PREVIEW_TIME,e)}}li=new WeakMap;c.customElements.get("media-preview-time-display")||c.customElements.define("media-preview-time-display",fp);var ur=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Zd=(t,e,i)=>(ur(t,e,"read from private field"),i?i.call(t):e.get(t)),Xi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Da=(t,e,i,n)=>(ur(t,e,"write to private field"),e.set(t,i),i),Ji=(t,e,i)=>(ur(t,e,"access private method"),i),di,is,Cn,xa,Mn,Pa;class vp extends He{constructor(){super(...arguments),Xi(this,Cn),Xi(this,Mn),Xi(this,di,[]),Xi(this,is,void 0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_RENDITION_LIST,o.MEDIA_RENDITION_SELECTED,o.MEDIA_RENDITION_UNAVAILABLE]}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e===o.MEDIA_RENDITION_SELECTED&&i!==n?this.value=n??"auto":e===o.MEDIA_RENDITION_LIST&&i!==n&&(Da(this,di,Qu(n)),Ji(this,Cn,xa).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ji(this,Mn,Pa))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ji(this,Mn,Pa))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:_e(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return Zd(this,di)}set mediaRenditionList(e){Da(this,di,e),Ji(this,Cn,xa).call(this)}get mediaRenditionSelected(){return J(this,o.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){j(this,o.MEDIA_RENDITION_SELECTED,e)}}di=new WeakMap;is=new WeakMap;Cn=new WeakSet;xa=function(){if(Zd(this,is)===JSON.stringify(this.mediaRenditionList))return;Da(this,is,JSON.stringify(this.mediaRenditionList));const t=this.mediaRenditionList.sort((n,s)=>s.height-n.height);this.defaultSlot.textContent="";let e=!this.mediaRenditionSelected;for(const n of t){const s=this.formatMenuItemText(`${Math.min(n.width,n.height)}p`,n),a=Ft({type:"radio",text:s,value:`${n.id}`,checked:n.selected&&!e});a.prepend(ct(this,"checked-indicator")),this.defaultSlot.append(a)}const i=Ft({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:e});i.prepend(ct(this,"checked-indicator")),this.defaultSlot.append(i)};Mn=new WeakSet;Pa=function(){if(this.value==null)return;const t=new c.CustomEvent(g.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};c.customElements.get("media-rendition-menu")||c.customElements.define("media-rendition-menu",vp);const bp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,Xd=A.createElement("template");Xd.innerHTML=`
  <slot name="icon">${bp}</slot>
`;class gp extends qt{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_RENDITION_SELECTED,o.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:Xd})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ae.QUALITY())}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:_e(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return J(this,o.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){j(this,o.MEDIA_RENDITION_SELECTED,e)}}c.customElements.get("media-rendition-menu-button")||c.customElements.define("media-rendition-menu-button",gp);const ft={SEEK_OFFSET:"seekoffset"},Dn=30,_p=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${Dn}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`,Jd=A.createElement("template");Jd.innerHTML=`
  <slot name="icon">${_p}</slot>
`;const Ap=0;class Sp extends re{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,ft.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:Jd,...e})}connectedCallback(){this.seekOffset=$(this,ft.SEEK_OFFSET,Dn),super.connectedCallback()}attributeChangedCallback(e,i,n){e===ft.SEEK_OFFSET&&(this.seekOffset=$(this,ft.SEEK_OFFSET,Dn)),super.attributeChangedCallback(e,i,n)}get seekOffset(){return $(this,ft.SEEK_OFFSET,Dn)}set seekOffset(e){z(this,ft.SEEK_OFFSET,e),this.setAttribute("aria-label",X.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),vl(bl(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return $(this,o.MEDIA_CURRENT_TIME,Ap)}set mediaCurrentTime(e){z(this,o.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new c.CustomEvent(g.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}c.customElements.get("media-seek-backward-button")||c.customElements.define("media-seek-backward-button",Sp);const vt={SEEK_OFFSET:"seekoffset"},xn=30,Tp=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${xn}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`,jd=A.createElement("template");jd.innerHTML=`
  <slot name="icon">${Tp}</slot>
`;const Ip=0;class yp extends re{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,vt.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:jd,...e})}connectedCallback(){this.seekOffset=$(this,vt.SEEK_OFFSET,xn),super.connectedCallback()}attributeChangedCallback(e,i,n){e===vt.SEEK_OFFSET&&(this.seekOffset=$(this,vt.SEEK_OFFSET,xn)),super.attributeChangedCallback(e,i,n)}get seekOffset(){return $(this,vt.SEEK_OFFSET,xn)}set seekOffset(e){z(this,vt.SEEK_OFFSET,e),this.setAttribute("aria-label",X.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),vl(bl(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return $(this,o.MEDIA_CURRENT_TIME,Ip)}set mediaCurrentTime(e){z(this,o.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new c.CustomEvent(g.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}c.customElements.get("media-seek-forward-button")||c.customElements.define("media-seek-forward-button",yp);var kp=Object.defineProperty,wp=(t,e,i)=>e in t?kp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Rp=(t,e,i)=>(wp(t,e+"",i),i);const ec=A.createElement("template");ec.innerHTML=He.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 160px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class tc extends He{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:_e(this).querySelector("media-settings-menu-button")}}Rp(tc,"template",ec);c.customElements.get("media-settings-menu")||c.customElements.define("media-settings-menu",tc);const ic=A.createElement("template");ic.innerHTML=`
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class Lp extends qt{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:ic})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ae.SETTINGS())}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:_e(this).querySelector("media-settings-menu")}}c.customElements.get("media-settings-menu-button")||c.customElements.define("media-settings-menu-button",Lp);var Cp=Object.defineProperty,Mp=(t,e,i)=>e in t?Cp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Dp=(t,e,i)=>(Mp(t,e+"",i),i),Oo;const ns=A.createElement("template");ns.innerHTML=As.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`;(Oo=ns.content)!=null&&Oo.querySelector&&(ns.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class nc extends As{}Dp(nc,"template",ns);c.customElements.get("media-settings-menu-item")||c.customElements.define("media-settings-menu-item",nc);var sc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$s=(t,e,i)=>(sc(t,e,"read from private field"),i?i.call(t):e.get(t)),xp=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Pp=(t,e,i,n)=>(sc(t,e,"write to private field"),e.set(t,i),i),yt;const fe={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},No=[...Object.values(fe),o.MEDIA_CURRENT_TIME,o.MEDIA_DURATION,o.MEDIA_SEEKABLE],$o=["Enter"," "],Up="&nbsp;/&nbsp;",Bo=(t,{timesSep:e=Up}={})=>{var i,n;const s=t.hasAttribute(fe.REMAINING),a=t.hasAttribute(fe.SHOW_DURATION),r=(i=t.mediaCurrentTime)!=null?i:0,[,l]=(n=t.mediaSeekable)!=null?n:[];let d=0;Number.isFinite(t.mediaDuration)?d=t.mediaDuration:Number.isFinite(l)&&(d=l);const h=rt(s?0-(d-r):r);return a?`${h}${e}${rt(d)}`:h},Op="video not loaded, unknown time.",Np=t=>{var e;const i=t.mediaCurrentTime,[,n]=(e=t.mediaSeekable)!=null?e:[];let s=null;if(Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n),i==null||s===null){t.setAttribute("aria-valuetext",Op);return}const a=t.hasAttribute(fe.REMAINING),r=t.hasAttribute(fe.SHOW_DURATION),l=hi(a?0-(s-i):i);if(!r){t.setAttribute("aria-valuetext",l);return}const d=hi(s),h=`${l} of ${d}`;t.setAttribute("aria-valuetext",h)};class $p extends Pi{constructor(){super(),xp(this,yt,void 0),Pp(this,yt,this.shadowRoot.querySelector("slot")),$s(this,yt).innerHTML=`${Bo(this)}`}static get observedAttributes(){return[...super.observedAttributes,...No,"disabled"]}connectedCallback(){const{style:e}=B(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",ae.PLAYBACK_TIME());const i=n=>{const{key:s}=n;if(!$o.includes(s)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",n=>{const{metaKey:s,altKey:a,key:r}=n;if(s||a||!$o.includes(r)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,i,n){No.includes(e)?this.update():e==="disabled"&&n!==i&&(n==null?this.enable():this.disable()),super.attributeChangedCallback(e,i,n)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return G(this,fe.REMAINING)}set remaining(e){Y(this,fe.REMAINING,e)}get showDuration(){return G(this,fe.SHOW_DURATION)}set showDuration(e){Y(this,fe.SHOW_DURATION,e)}get noToggle(){return G(this,fe.NO_TOGGLE)}set noToggle(e){Y(this,fe.NO_TOGGLE,e)}get mediaDuration(){return $(this,o.MEDIA_DURATION)}set mediaDuration(e){z(this,o.MEDIA_DURATION,e)}get mediaCurrentTime(){return $(this,o.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){z(this,o.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(o.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(o.MEDIA_SEEKABLE);return}this.setAttribute(o.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Bo(this);Np(this),e!==$s(this,yt).innerHTML&&($s(this,yt).innerHTML=e)}}yt=new WeakMap;c.customElements.get("media-time-display")||c.customElements.define("media-time-display",$p);var ac=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},V=(t,e,i)=>(ac(t,e,"read from private field"),i?i.call(t):e.get(t)),Se=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},se=(t,e,i,n)=>(ac(t,e,"write to private field"),e.set(t,i),i),Bp=(t,e,i,n)=>({set _(s){se(t,e,s)},get _(){return V(t,e,n)}}),kt,Pn,wt,ci,Un,On,Nn,Rt,nt,$n;class Fp{constructor(e,i,n){Se(this,kt,void 0),Se(this,Pn,void 0),Se(this,wt,void 0),Se(this,ci,void 0),Se(this,Un,void 0),Se(this,On,void 0),Se(this,Nn,void 0),Se(this,Rt,void 0),Se(this,nt,0),Se(this,$n,(s=performance.now())=>{se(this,nt,requestAnimationFrame(V(this,$n))),se(this,ci,performance.now()-V(this,wt));const a=1e3/this.fps;if(V(this,ci)>a){se(this,wt,s-V(this,ci)%a);const r=1e3/((s-V(this,Pn))/++Bp(this,Un)._),l=(s-V(this,On))/1e3/this.duration;let d=V(this,Nn)+l*this.playbackRate;d-V(this,kt).valueAsNumber>0?se(this,Rt,this.playbackRate/this.duration/r):(se(this,Rt,.995*V(this,Rt)),d=V(this,kt).valueAsNumber+V(this,Rt)),this.callback(d)}}),se(this,kt,e),this.callback=i,this.fps=n}start(){V(this,nt)===0&&(se(this,wt,performance.now()),se(this,Pn,V(this,wt)),se(this,Un,0),V(this,$n).call(this))}stop(){V(this,nt)!==0&&(cancelAnimationFrame(V(this,nt)),se(this,nt,0))}update({start:e,duration:i,playbackRate:n}){const s=e-V(this,kt).valueAsNumber,a=Math.abs(i-this.duration);(s>0||s<-.03||a>=.5)&&this.callback(e),se(this,Nn,e),se(this,On,performance.now()),this.duration=i,this.playbackRate=n}}kt=new WeakMap;Pn=new WeakMap;wt=new WeakMap;ci=new WeakMap;Un=new WeakMap;On=new WeakMap;Nn=new WeakMap;Rt=new WeakMap;nt=new WeakMap;$n=new WeakMap;var hr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},W=(t,e,i)=>(hr(t,e,"read from private field"),i?i.call(t):e.get(t)),K=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Me=(t,e,i,n)=>(hr(t,e,"write to private field"),e.set(t,i),i),Z=(t,e,i)=>(hr(t,e,"access private method"),i),Lt,ut,ss,bi,as,Bn,Ri,Li,Ct,Mt,ui,mr,rc,Ua,rs,pr,os,Er,ls,fr,Oa,oc,Ci,ds,Na,lc;const Wp="video not loaded, unknown time.",Hp=t=>{const e=t.range,i=hi(+cc(t)),n=hi(+t.mediaSeekableEnd),s=i&&n?`${i} of ${n}`:Wp;e.setAttribute("aria-valuetext",s)},dc=A.createElement("template");dc.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #highlight {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${o.MEDIA_PREVIEW_IMAGE}], [${o.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${o.MEDIA_PREVIEW_IMAGE}], [${o.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${o.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${o.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${o.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${o.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${o.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${o.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${o.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${o.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${o.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
      transform: translateX(0);
    }

    :host([${o.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;const ji=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,n=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(n))return 0;const s=(e-i)/(n-i);return Math.max(0,Math.min(s,1))},cc=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,n=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(n)?0:e*(n-i)+i};class Kp extends cr{constructor(){super(),K(this,Mt),K(this,mr),K(this,rs),K(this,os),K(this,ls),K(this,Oa),K(this,Ci),K(this,Na),K(this,Lt,void 0),K(this,ut,void 0),K(this,ss,void 0),K(this,bi,void 0),K(this,as,void 0),K(this,Bn,void 0),K(this,Ri,void 0),K(this,Li,void 0),K(this,Ct,void 0),K(this,Ua,i=>{this.dragging||(this.range.valueAsNumber=i,this.updateBar())}),this.container.appendChild(dc.content.cloneNode(!0)),Me(this,ss,this.shadowRoot.querySelectorAll('[part~="box"]')),Me(this,as,this.shadowRoot.querySelector('[part~="preview-box"]')),Me(this,Bn,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);Me(this,Ri,parseInt(e.getPropertyValue("--media-box-padding-left"))),Me(this,Li,parseInt(e.getPropertyValue("--media-box-padding-right"))),Me(this,ut,new Fp(this.range,W(this,Ua),60))}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PAUSED,o.MEDIA_DURATION,o.MEDIA_SEEKABLE,o.MEDIA_CURRENT_TIME,o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_TIME,o.MEDIA_PREVIEW_CHAPTER,o.MEDIA_BUFFERED,o.MEDIA_PLAYBACK_RATE,o.MEDIA_LOADING,o.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",ae.SEEK()),Z(this,Mt,ui).call(this),Me(this,Lt,this.getRootNode()),(e=W(this,Lt))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),Z(this,Mt,ui).call(this),(e=W(this,Lt))==null||e.removeEventListener("transitionstart",this),Me(this,Lt,null)}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),i!=n&&(e===o.MEDIA_CURRENT_TIME||e===o.MEDIA_PAUSED||e===o.MEDIA_ENDED||e===o.MEDIA_LOADING||e===o.MEDIA_DURATION||e===o.MEDIA_SEEKABLE?(W(this,ut).update({start:ji(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),Z(this,Mt,ui).call(this),Hp(this)):e===o.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===o.MEDIA_DURATION||e===o.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=W(this,Ct),this.updateBar()))}get mediaChaptersCues(){return W(this,Ct)}set mediaChaptersCues(e){var i;Me(this,Ct,e),this.updateSegments((i=W(this,Ct))==null?void 0:i.map(n=>({start:ji(this,n.startTime),end:ji(this,n.endTime)})))}get mediaPaused(){return G(this,o.MEDIA_PAUSED)}set mediaPaused(e){Y(this,o.MEDIA_PAUSED,e)}get mediaLoading(){return G(this,o.MEDIA_LOADING)}set mediaLoading(e){Y(this,o.MEDIA_LOADING,e)}get mediaDuration(){return $(this,o.MEDIA_DURATION)}set mediaDuration(e){z(this,o.MEDIA_DURATION,e)}get mediaCurrentTime(){return $(this,o.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){z(this,o.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return $(this,o.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){z(this,o.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(o.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(n=>+n)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(o.MEDIA_BUFFERED);return}const i=e.map(n=>n.join(":")).join(" ");this.setAttribute(o.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(o.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(o.MEDIA_SEEKABLE);return}this.setAttribute(o.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return J(this,o.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){j(this,o.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return $(this,o.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){z(this,o.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return G(this,o.MEDIA_ENDED)}set mediaEnded(e){Y(this,o.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let n;if(this.mediaEnded)n=1;else{const a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=(e=i.find(([l,d])=>l<=a&&a<=d))!=null?e:[];n=ji(this,r)}const{style:s}=B(this.shadowRoot,"#highlight");s.setProperty("width",`${n*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=B(this.shadowRoot,"#current-rail"),n=B(this.shadowRoot,'[part~="current-box"]'),s=Z(this,rs,pr).call(this,W(this,Bn)),a=Z(this,os,Er).call(this,s,this.range.valueAsNumber),r=Z(this,ls,fr).call(this,s,this.range.valueAsNumber);i.style.transform=`translateX(${a})`,i.style.setProperty("--_range-width",`${s.range.width}`),n.style.setProperty("--_box-shift",`${r}`),n.style.setProperty("--_box-width",`${s.box.width}px`),n.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":Z(this,Na,lc).call(this);break;case"pointermove":Z(this,Oa,oc).call(this,e);break;case"pointerup":case"pointerleave":Z(this,Ci,ds).call(this,null);break;case"transitionstart":We(e.target,this)&&setTimeout(()=>Z(this,Mt,ui).call(this),0);break}}}Lt=new WeakMap;ut=new WeakMap;ss=new WeakMap;bi=new WeakMap;as=new WeakMap;Bn=new WeakMap;Ri=new WeakMap;Li=new WeakMap;Ct=new WeakMap;Mt=new WeakSet;ui=function(){Z(this,mr,rc).call(this)?W(this,ut).start():W(this,ut).stop()};mr=new WeakSet;rc=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ah(this)};Ua=new WeakMap;rs=new WeakSet;pr=function(t){var e;const n=((e=this.getAttribute("bounds")?xi(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),s=this.range.getBoundingClientRect(),a=t.offsetWidth,r=-(s.left-n.left-a/2),l=n.right-s.left-a/2;return{box:{width:a,min:r,max:l},bounds:n,range:s}};os=new WeakSet;Er=function(t,e){let i=`${e*100}%`;const{width:n,min:s,max:a}=t.box;if(!n)return i;if(Number.isNaN(s)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${s}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(a)){const l=`calc(1 / var(--_range-width) * 100 * ${a}% - var(--media-box-padding-right))`;i=`min(${i}, ${l})`}return i};ls=new WeakSet;fr=function(t,e){const{width:i,min:n,max:s}=t.box,a=e*t.range.width;if(a<n+W(this,Ri)){const r=t.range.left-t.bounds.left-W(this,Ri);return`${a-i/2+r}px`}if(a>s-W(this,Li)){const r=t.bounds.right-t.range.right-W(this,Li);return`${a+i/2-r-t.range.width}px`}return 0};Oa=new WeakSet;oc=function(t){const e=[...W(this,ss)].some(u=>t.composedPath().includes(u));if(!this.dragging&&(e||!t.composedPath().includes(this))){Z(this,Ci,ds).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const n=B(this.shadowRoot,"#preview-rail"),s=B(this.shadowRoot,'[part~="preview-box"]'),a=Z(this,rs,pr).call(this,W(this,as));let r=(t.clientX-a.range.left)/a.range.width;r=Math.max(0,Math.min(1,r));const l=Z(this,os,Er).call(this,a,r),d=Z(this,ls,fr).call(this,a,r);n.style.transform=`translateX(${l})`,n.style.setProperty("--_range-width",`${a.range.width}`),s.style.setProperty("--_box-shift",`${d}`),s.style.setProperty("--_box-width",`${a.box.width}px`);const h=Math.round(W(this,bi))-Math.round(r*i);Math.abs(h)<1&&r>.01&&r<.99||(Me(this,bi,r*i),Z(this,Ci,ds).call(this,W(this,bi)))};Ci=new WeakSet;ds=function(t){this.dispatchEvent(new c.CustomEvent(g.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Na=new WeakSet;lc=function(){W(this,ut).stop();const t=cc(this);this.dispatchEvent(new c.CustomEvent(g.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};c.customElements.get("media-time-range")||c.customElements.define("media-time-range",Kp);const Vp=1,qp=t=>t.mediaMuted?0:t.mediaVolume,Gp=({value:t})=>`${Math.round(t*100)}%`;class Yp extends cr{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME,o.MEDIA_MUTED,o.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,i=new c.CustomEvent(g.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",ae.VOLUME())}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),(e===o.MEDIA_VOLUME||e===o.MEDIA_MUTED)&&(this.range.valueAsNumber=qp(this),this.range.setAttribute("aria-valuetext",Gp(this.range)),this.updateBar())}get mediaVolume(){return $(this,o.MEDIA_VOLUME,Vp)}set mediaVolume(e){z(this,o.MEDIA_VOLUME,e)}get mediaMuted(){return G(this,o.MEDIA_MUTED)}set mediaMuted(e){Y(this,o.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return J(this,o.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){j(this,o.MEDIA_VOLUME_UNAVAILABLE,e)}}c.customElements.get("media-volume-range")||c.customElements.define("media-volume-range",Yp);

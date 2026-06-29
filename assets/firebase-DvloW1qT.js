var Am=Object.defineProperty;var vm=(n,e,t)=>e in n?Am(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var T=(n,e,t)=>vm(n,typeof e!="symbol"?e+"":e,t);import{p as j2,g as Kr}from"./vendor-C4z4wVBe.js";const Cm=()=>{};var pd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(n,e){if(!n)throw Zs(e)},Zs=function(n){return new Error("Firebase Database ("+z2.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Rm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,u=s+2<n.length,l=u?n[s+2]:0,h=i>>2,g=(i&3)<<4|a>>4;let E=(a&15)<<2|l>>6,v=l&63;u||(v=64,o||(E=64)),r.push(t[h],t[g],t[E],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(K2(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||g==null)throw new Sm;const E=i<<2|a>>4;if(r.push(E),l!==64){const v=a<<4&240|l>>2;if(r.push(v),g!==64){const S=l<<6&192|g;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y2=function(n){const e=K2(n);return $l.encodeByteArray(e,!0)},Ua=function(n){return Y2(n).replace(/\./g,"")},Ba=function(n){try{return $l.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(n){return Q2(void 0,n)}function Q2(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Nm(t)||(n[t]=Q2(n[t],e[t]));return n}function Nm(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof Kr<"u")return Kr;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=()=>bm().__FIREBASE_DEFAULTS__,Om=()=>{if(typeof j2>"u"||typeof pd>"u")return;const n=pd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},km=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ba(n[1]);return e&&JSON.parse(e)},Tc=()=>{try{return Cm()||xm()||Om()||km()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},X2=n=>{var e,t;return(t=(e=Tc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},J2=n=>{const e=X2(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Z2=()=>{var n;return(n=Tc())==null?void 0:n.config},ep=n=>{var e;return(e=Tc())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ua(JSON.stringify(t)),Ua(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function Dm(){var e;const n=(e=Tc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(Kr.process)==="[object process]"}catch{return!1}}function Vm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mm(){const n=vt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fm(){return z2.NODE_ADMIN===!0}function Um(){return!Dm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bm(){try{return typeof indexedDB=="object"}catch{return!1}}function qm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="FirebaseError";class Hn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hm,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$m(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,a,r)}}function $m(n,e){return n.replace(Gm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n){return JSON.parse(n)}function ft(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=so(Ba(i[0])||""),t=so(Ba(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},Wm=function(n){const e=rp(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},jm=function(n){const e=rp(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Yr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function rl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qa(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function gr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(gd(i)&&gd(o)){if(!gr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function gd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let g=0;g<16;g++)r[g]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let g=0;g<16;g++)r[g]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let g=16;g<80;g++){const E=r[g-3]^r[g-8]^r[g-14]^r[g-16];r[g]=(E<<1|E>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],l,h;for(let g=0;g<80;g++){g<40?g<20?(l=a^i&(o^a),h=1518500249):(l=i^o^a,h=1859775393):g<60?(l=i&o|a&(i|o),h=2400959708):(l=i^o^a,h=3395469782);const E=(s<<5|s>>>27)+l+u+h+r[g]&4294967295;u=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=E}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Km(n,e){const t=new Ym(n,e);return t.subscribe.bind(t)}class Ym{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Qm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Vu),s.error===void 0&&(s.error=Vu),s.complete===void 0&&(s.complete=Vu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vu(){}function Wl(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,j(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ac=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jl(n){return(await fetch(n,{credentials:"include"})).ok}class mr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ei;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(e7(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zm(n){return n===Ur?void 0:n}function e7(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t7{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(_e||(_e={}));const n7={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},r7=_e.INFO,s7={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},i7=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=s7[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=r7,this._logHandler=i7,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?n7[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const o7=(n,e)=>e.some(t=>n instanceof t);let md,_d;function a7(){return md||(md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c7(){return _d||(_d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sp=new WeakMap,sl=new WeakMap,ip=new WeakMap,Lu=new WeakMap,zl=new WeakMap;function u7(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(or(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&sp.set(t,n)}).catch(()=>{}),zl.set(e,n),e}function l7(n){if(sl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});sl.set(n,e)}let il={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ip.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return or(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function h7(n){il=n(il)}function d7(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Mu(this),e,...t);return ip.set(r,e.sort?e.sort():[e]),or(r)}:c7().includes(n)?function(...e){return n.apply(Mu(this),e),or(sp.get(this))}:function(...e){return or(n.apply(Mu(this),e))}}function f7(n){return typeof n=="function"?d7(n):(n instanceof IDBTransaction&&l7(n),o7(n,a7())?new Proxy(n,il):n)}function or(n){if(n instanceof IDBRequest)return u7(n);if(Lu.has(n))return Lu.get(n);const e=f7(n);return e!==n&&(Lu.set(n,e),zl.set(e,n)),e}const Mu=n=>zl.get(n);function p7(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=or(o);return r&&o.addEventListener("upgradeneeded",u=>{r(or(o.result),u.oldVersion,u.newVersion,or(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const g7=["get","getKey","getAll","getAllKeys","count"],m7=["put","add","delete","clear"],Fu=new Map;function yd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fu.get(e))return Fu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=m7.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||g7.includes(t)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&u.done]))[0]};return Fu.set(e,i),i}h7(n=>({...n,get:(e,t,r)=>yd(e,t)||n.get(e,t,r),has:(e,t)=>!!yd(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _7{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(y7(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function y7(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ol="@firebase/app",Ed="0.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new vc("@firebase/app"),E7="@firebase/app-compat",w7="@firebase/analytics-compat",I7="@firebase/analytics",T7="@firebase/app-check-compat",A7="@firebase/app-check",v7="@firebase/auth",C7="@firebase/auth-compat",R7="@firebase/database",S7="@firebase/data-connect",P7="@firebase/database-compat",N7="@firebase/functions",b7="@firebase/functions-compat",x7="@firebase/installations",O7="@firebase/installations-compat",k7="@firebase/messaging",D7="@firebase/messaging-compat",V7="@firebase/performance",L7="@firebase/performance-compat",M7="@firebase/remote-config",F7="@firebase/remote-config-compat",U7="@firebase/storage",B7="@firebase/storage-compat",q7="@firebase/firestore",H7="@firebase/ai",$7="@firebase/firestore-compat",G7="firebase",W7="12.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="[DEFAULT]",j7={[ol]:"fire-core",[E7]:"fire-core-compat",[I7]:"fire-analytics",[w7]:"fire-analytics-compat",[A7]:"fire-app-check",[T7]:"fire-app-check-compat",[v7]:"fire-auth",[C7]:"fire-auth-compat",[R7]:"fire-rtdb",[S7]:"fire-data-connect",[P7]:"fire-rtdb-compat",[N7]:"fire-fn",[b7]:"fire-fn-compat",[x7]:"fire-iid",[O7]:"fire-iid-compat",[k7]:"fire-fcm",[D7]:"fire-fcm-compat",[V7]:"fire-perf",[L7]:"fire-perf-compat",[M7]:"fire-rc",[F7]:"fire-rc-compat",[U7]:"fire-gcs",[B7]:"fire-gcs-compat",[q7]:"fire-fst",[$7]:"fire-fst-compat",[H7]:"fire-vertex","fire-js":"fire-js",[G7]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new Map,z7=new Map,cl=new Map;function wd(n,e){try{n.container.addComponent(e)}catch(t){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qr(n){const e=n.name;if(cl.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,n);for(const t of Ha.values())wd(t,n);for(const t of z7.values())wd(t,n);return!0}function Cc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K7={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Do("app","Firebase",K7);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y7{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=W7;function Q7(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:al,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ar.create("bad-app-name",{appName:String(s)});if(t||(t=Z2()),!t)throw ar.create("no-options");const i=Ha.get(s);if(i){if(gr(t,i.options)&&gr(r,i.config))return i;throw ar.create("duplicate-app",{appName:s})}const o=new t7(s);for(const u of cl.values())o.addComponent(u);const a=new Y7(t,r,o);return Ha.set(s,a),a}function Kl(n=al){const e=Ha.get(n);if(!e&&n===al&&Z2())return Q7();if(!e)throw ar.create("no-app",{appName:n});return e}function mn(n,e,t){let r=j7[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(o.join(" "));return}Qr(new mr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X7="firebase-heartbeat-database",J7=1,io="firebase-heartbeat-store";let Uu=null;function op(){return Uu||(Uu=p7(X7,J7,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(io)}catch(t){console.warn(t)}}}}).catch(n=>{throw ar.create("idb-open",{originalErrorMessage:n.message})})),Uu}async function Z7(n){try{const t=(await op()).transaction(io),r=await t.objectStore(io).get(ap(n));return await t.done,r}catch(e){if(e instanceof Hn)Mn.warn(e.message);else{const t=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(t.message)}}}async function Id(n,e){try{const r=(await op()).transaction(io,"readwrite");await r.objectStore(io).put(e,ap(n)),await r.done}catch(t){if(t instanceof Hn)Mn.warn(t.message);else{const r=ar.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mn.warn(r.message)}}}function ap(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=1024,t4=30;class n4{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new s4(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Td();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>t4){const o=i4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Td(),{heartbeatsToSend:r,unsentEntries:s}=r4(this._heartbeatsCache.heartbeats),i=Ua(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Mn.warn(t),""}}}function Td(){return new Date().toISOString().substring(0,10)}function r4(n,e=e4){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ad(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ad(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class s4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bm()?qm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Z7(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Id(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Id(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ad(n){return Ua(JSON.stringify({version:2,heartbeats:n})).length}function i4(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(n){Qr(new mr("platform-logger",e=>new _7(e),"PRIVATE")),Qr(new mr("heartbeat",e=>new n4(e),"PRIVATE")),mn(ol,Ed,n),mn(ol,Ed,"esm2020"),mn("fire-js","")}o4("");var cp={},Rc={};Rc.byteLength=u4;Rc.toByteArray=h4;Rc.fromByteArray=p4;var fn=[],jt=[],a4=typeof Uint8Array<"u"?Uint8Array:Array,Bu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Rs=0,c4=Bu.length;Rs<c4;++Rs)fn[Rs]=Bu[Rs],jt[Bu.charCodeAt(Rs)]=Rs;jt[45]=62;jt[95]=63;function up(n){var e=n.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=n.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function u4(n){var e=up(n),t=e[0],r=e[1];return(t+r)*3/4-r}function l4(n,e,t){return(e+t)*3/4-t}function h4(n){var e,t=up(n),r=t[0],s=t[1],i=new a4(l4(n,r,s)),o=0,a=s>0?r-4:r,u;for(u=0;u<a;u+=4)e=jt[n.charCodeAt(u)]<<18|jt[n.charCodeAt(u+1)]<<12|jt[n.charCodeAt(u+2)]<<6|jt[n.charCodeAt(u+3)],i[o++]=e>>16&255,i[o++]=e>>8&255,i[o++]=e&255;return s===2&&(e=jt[n.charCodeAt(u)]<<2|jt[n.charCodeAt(u+1)]>>4,i[o++]=e&255),s===1&&(e=jt[n.charCodeAt(u)]<<10|jt[n.charCodeAt(u+1)]<<4|jt[n.charCodeAt(u+2)]>>2,i[o++]=e>>8&255,i[o++]=e&255),i}function d4(n){return fn[n>>18&63]+fn[n>>12&63]+fn[n>>6&63]+fn[n&63]}function f4(n,e,t){for(var r,s=[],i=e;i<t;i+=3)r=(n[i]<<16&16711680)+(n[i+1]<<8&65280)+(n[i+2]&255),s.push(d4(r));return s.join("")}function p4(n){for(var e,t=n.length,r=t%3,s=[],i=16383,o=0,a=t-r;o<a;o+=i)s.push(f4(n,o,o+i>a?a:o+i));return r===1?(e=n[t-1],s.push(fn[e>>2]+fn[e<<4&63]+"==")):r===2&&(e=(n[t-2]<<8)+n[t-1],s.push(fn[e>>10]+fn[e>>4&63]+fn[e<<2&63]+"=")),s.join("")}var Yl={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Yl.read=function(n,e,t,r,s){var i,o,a=s*8-r-1,u=(1<<a)-1,l=u>>1,h=-7,g=t?s-1:0,E=t?-1:1,v=n[e+g];for(g+=E,i=v&(1<<-h)-1,v>>=-h,h+=a;h>0;i=i*256+n[e+g],g+=E,h-=8);for(o=i&(1<<-h)-1,i>>=-h,h+=r;h>0;o=o*256+n[e+g],g+=E,h-=8);if(i===0)i=1-l;else{if(i===u)return o?NaN:(v?-1:1)*(1/0);o=o+Math.pow(2,r),i=i-l}return(v?-1:1)*o*Math.pow(2,i-r)};Yl.write=function(n,e,t,r,s,i){var o,a,u,l=i*8-s-1,h=(1<<l)-1,g=h>>1,E=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=r?0:i-1,S=r?1:-1,q=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=h):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),o+g>=1?e+=E/u:e+=E*Math.pow(2,1-g),e*u>=2&&(o++,u/=2),o+g>=h?(a=0,o=h):o+g>=1?(a=(e*u-1)*Math.pow(2,s),o=o+g):(a=e*Math.pow(2,g-1)*Math.pow(2,s),o=0));s>=8;n[t+v]=a&255,v+=S,a/=256,s-=8);for(o=o<<s|a,l+=s;l>0;n[t+v]=o&255,v+=S,o/=256,l-=8);n[t+v-S]|=q*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(n){const e=Rc,t=Yl,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=h,n.SlowBuffer=it,n.INSPECT_MAX_BYTES=50;const s=2147483647;n.kMaxLength=s;const{Uint8Array:i,ArrayBuffer:o,SharedArrayBuffer:a}=globalThis;h.TYPED_ARRAY_SUPPORT=u(),!h.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function u(){try{const y=new i(1),f={foo:function(){return 42}};return Object.setPrototypeOf(f,i.prototype),Object.setPrototypeOf(y,f),y.foo()===42}catch{return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}});function l(y){if(y>s)throw new RangeError('The value "'+y+'" is invalid for option "size"');const f=new i(y);return Object.setPrototypeOf(f,h.prototype),f}function h(y,f,p){if(typeof y=="number"){if(typeof f=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return S(y)}return g(y,f,p)}h.poolSize=8192;function g(y,f,p){if(typeof y=="string")return q(y,f);if(o.isView(y))return te(y);if(y==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y);if(_t(y,o)||y&&_t(y.buffer,o)||typeof a<"u"&&(_t(y,a)||y&&_t(y.buffer,a)))return he(y,f,p);if(typeof y=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const I=y.valueOf&&y.valueOf();if(I!=null&&I!==y)return h.from(I,f,p);const b=Ce(y);if(b)return b;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof y[Symbol.toPrimitive]=="function")return h.from(y[Symbol.toPrimitive]("string"),f,p);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y)}h.from=function(y,f,p){return g(y,f,p)},Object.setPrototypeOf(h.prototype,i.prototype),Object.setPrototypeOf(h,i);function E(y){if(typeof y!="number")throw new TypeError('"size" argument must be of type number');if(y<0)throw new RangeError('The value "'+y+'" is invalid for option "size"')}function v(y,f,p){return E(y),y<=0?l(y):f!==void 0?typeof p=="string"?l(y).fill(f,p):l(y).fill(f):l(y)}h.alloc=function(y,f,p){return v(y,f,p)};function S(y){return E(y),l(y<0?0:st(y)|0)}h.allocUnsafe=function(y){return S(y)},h.allocUnsafeSlow=function(y){return S(y)};function q(y,f){if((typeof f!="string"||f==="")&&(f="utf8"),!h.isEncoding(f))throw new TypeError("Unknown encoding: "+f);const p=Je(y,f)|0;let I=l(p);const b=I.write(y,f);return b!==p&&(I=I.slice(0,b)),I}function G(y){const f=y.length<0?0:st(y.length)|0,p=l(f);for(let I=0;I<f;I+=1)p[I]=y[I]&255;return p}function te(y){if(_t(y,i)){const f=new i(y);return he(f.buffer,f.byteOffset,f.byteLength)}return G(y)}function he(y,f,p){if(f<0||y.byteLength<f)throw new RangeError('"offset" is outside of buffer bounds');if(y.byteLength<f+(p||0))throw new RangeError('"length" is outside of buffer bounds');let I;return f===void 0&&p===void 0?I=new i(y):p===void 0?I=new i(y,f):I=new i(y,f,p),Object.setPrototypeOf(I,h.prototype),I}function Ce(y){if(h.isBuffer(y)){const f=st(y.length)|0,p=l(f);return p.length===0||y.copy(p,0,0,f),p}if(y.length!==void 0)return typeof y.length!="number"||Ts(y.length)?l(0):G(y);if(y.type==="Buffer"&&Array.isArray(y.data))return G(y.data)}function st(y){if(y>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return y|0}function it(y){return+y!=y&&(y=0),h.alloc(+y)}h.isBuffer=function(f){return f!=null&&f._isBuffer===!0&&f!==h.prototype},h.compare=function(f,p){if(_t(f,i)&&(f=h.from(f,f.offset,f.byteLength)),_t(p,i)&&(p=h.from(p,p.offset,p.byteLength)),!h.isBuffer(f)||!h.isBuffer(p))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(f===p)return 0;let I=f.length,b=p.length;for(let V=0,B=Math.min(I,b);V<B;++V)if(f[V]!==p[V]){I=f[V],b=p[V];break}return I<b?-1:b<I?1:0},h.isEncoding=function(f){switch(String(f).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(f,p){if(!Array.isArray(f))throw new TypeError('"list" argument must be an Array of Buffers');if(f.length===0)return h.alloc(0);let I;if(p===void 0)for(p=0,I=0;I<f.length;++I)p+=f[I].length;const b=h.allocUnsafe(p);let V=0;for(I=0;I<f.length;++I){let B=f[I];if(_t(B,i))V+B.length>b.length?(h.isBuffer(B)||(B=h.from(B)),B.copy(b,V)):i.prototype.set.call(b,B,V);else if(h.isBuffer(B))B.copy(b,V);else throw new TypeError('"list" argument must be an Array of Buffers');V+=B.length}return b};function Je(y,f){if(h.isBuffer(y))return y.length;if(o.isView(y)||_t(y,o))return y.byteLength;if(typeof y!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof y);const p=y.length,I=arguments.length>2&&arguments[2]===!0;if(!I&&p===0)return 0;let b=!1;for(;;)switch(f){case"ascii":case"latin1":case"binary":return p;case"utf8":case"utf-8":return Ze(y).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p*2;case"hex":return p>>>1;case"base64":return mi(y).length;default:if(b)return I?-1:Ze(y).length;f=(""+f).toLowerCase(),b=!0}}h.byteLength=Je;function x(y,f,p){let I=!1;if((f===void 0||f<0)&&(f=0),f>this.length||((p===void 0||p>this.length)&&(p=this.length),p<=0)||(p>>>=0,f>>>=0,p<=f))return"";for(y||(y="utf8");;)switch(y){case"hex":return ea(this,f,p);case"utf8":case"utf-8":return Jo(this,f,p);case"ascii":return yu(this,f,p);case"latin1":case"binary":return Zo(this,f,p);case"base64":return _u(this,f,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ta(this,f,p);default:if(I)throw new TypeError("Unknown encoding: "+y);y=(y+"").toLowerCase(),I=!0}}h.prototype._isBuffer=!0;function A(y,f,p){const I=y[f];y[f]=y[p],y[p]=I}h.prototype.swap16=function(){const f=this.length;if(f%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let p=0;p<f;p+=2)A(this,p,p+1);return this},h.prototype.swap32=function(){const f=this.length;if(f%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let p=0;p<f;p+=4)A(this,p,p+3),A(this,p+1,p+2);return this},h.prototype.swap64=function(){const f=this.length;if(f%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let p=0;p<f;p+=8)A(this,p,p+7),A(this,p+1,p+6),A(this,p+2,p+5),A(this,p+3,p+4);return this},h.prototype.toString=function(){const f=this.length;return f===0?"":arguments.length===0?Jo(this,0,f):x.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(f){if(!h.isBuffer(f))throw new TypeError("Argument must be a Buffer");return this===f?!0:h.compare(this,f)===0},h.prototype.inspect=function(){let f="";const p=n.INSPECT_MAX_BYTES;return f=this.toString("hex",0,p).replace(/(.{2})/g,"$1 ").trim(),this.length>p&&(f+=" ... "),"<Buffer "+f+">"},r&&(h.prototype[r]=h.prototype.inspect),h.prototype.compare=function(f,p,I,b,V){if(_t(f,i)&&(f=h.from(f,f.offset,f.byteLength)),!h.isBuffer(f))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof f);if(p===void 0&&(p=0),I===void 0&&(I=f?f.length:0),b===void 0&&(b=0),V===void 0&&(V=this.length),p<0||I>f.length||b<0||V>this.length)throw new RangeError("out of range index");if(b>=V&&p>=I)return 0;if(b>=V)return-1;if(p>=I)return 1;if(p>>>=0,I>>>=0,b>>>=0,V>>>=0,this===f)return 0;let B=V-b,de=I-p;const Pe=Math.min(B,de),Ne=this.slice(b,V),Re=f.slice(p,I);for(let ve=0;ve<Pe;++ve)if(Ne[ve]!==Re[ve]){B=Ne[ve],de=Re[ve];break}return B<de?-1:de<B?1:0};function R(y,f,p,I,b){if(y.length===0)return-1;if(typeof p=="string"?(I=p,p=0):p>2147483647?p=2147483647:p<-2147483648&&(p=-2147483648),p=+p,Ts(p)&&(p=b?0:y.length-1),p<0&&(p=y.length+p),p>=y.length){if(b)return-1;p=y.length-1}else if(p<0)if(b)p=0;else return-1;if(typeof f=="string"&&(f=h.from(f,I)),h.isBuffer(f))return f.length===0?-1:O(y,f,p,I,b);if(typeof f=="number")return f=f&255,typeof i.prototype.indexOf=="function"?b?i.prototype.indexOf.call(y,f,p):i.prototype.lastIndexOf.call(y,f,p):O(y,[f],p,I,b);throw new TypeError("val must be string, number or Buffer")}function O(y,f,p,I,b){let V=1,B=y.length,de=f.length;if(I!==void 0&&(I=String(I).toLowerCase(),I==="ucs2"||I==="ucs-2"||I==="utf16le"||I==="utf-16le")){if(y.length<2||f.length<2)return-1;V=2,B/=2,de/=2,p/=2}function Pe(Re,ve){return V===1?Re[ve]:Re.readUInt16BE(ve*V)}let Ne;if(b){let Re=-1;for(Ne=p;Ne<B;Ne++)if(Pe(y,Ne)===Pe(f,Re===-1?0:Ne-Re)){if(Re===-1&&(Re=Ne),Ne-Re+1===de)return Re*V}else Re!==-1&&(Ne-=Ne-Re),Re=-1}else for(p+de>B&&(p=B-de),Ne=p;Ne>=0;Ne--){let Re=!0;for(let ve=0;ve<de;ve++)if(Pe(y,Ne+ve)!==Pe(f,ve)){Re=!1;break}if(Re)return Ne}return-1}h.prototype.includes=function(f,p,I){return this.indexOf(f,p,I)!==-1},h.prototype.indexOf=function(f,p,I){return R(this,f,p,I,!0)},h.prototype.lastIndexOf=function(f,p,I){return R(this,f,p,I,!1)};function N(y,f,p,I){p=Number(p)||0;const b=y.length-p;I?(I=Number(I),I>b&&(I=b)):I=b;const V=f.length;I>V/2&&(I=V/2);let B;for(B=0;B<I;++B){const de=parseInt(f.substr(B*2,2),16);if(Ts(de))return B;y[p+B]=de}return B}function D(y,f,p,I){return Is(Ze(f,y.length-p),y,p,I)}function C(y,f,p,I){return Is(ws(f),y,p,I)}function mt(y,f,p,I){return Is(mi(f),y,p,I)}function Cn(y,f,p,I){return Is(Eu(f,y.length-p),y,p,I)}h.prototype.write=function(f,p,I,b){if(p===void 0)b="utf8",I=this.length,p=0;else if(I===void 0&&typeof p=="string")b=p,I=this.length,p=0;else if(isFinite(p))p=p>>>0,isFinite(I)?(I=I>>>0,b===void 0&&(b="utf8")):(b=I,I=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const V=this.length-p;if((I===void 0||I>V)&&(I=V),f.length>0&&(I<0||p<0)||p>this.length)throw new RangeError("Attempt to write outside buffer bounds");b||(b="utf8");let B=!1;for(;;)switch(b){case"hex":return N(this,f,p,I);case"utf8":case"utf-8":return D(this,f,p,I);case"ascii":case"latin1":case"binary":return C(this,f,p,I);case"base64":return mt(this,f,p,I);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Cn(this,f,p,I);default:if(B)throw new TypeError("Unknown encoding: "+b);b=(""+b).toLowerCase(),B=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _u(y,f,p){return f===0&&p===y.length?e.fromByteArray(y):e.fromByteArray(y.slice(f,p))}function Jo(y,f,p){p=Math.min(y.length,p);const I=[];let b=f;for(;b<p;){const V=y[b];let B=null,de=V>239?4:V>223?3:V>191?2:1;if(b+de<=p){let Pe,Ne,Re,ve;switch(de){case 1:V<128&&(B=V);break;case 2:Pe=y[b+1],(Pe&192)===128&&(ve=(V&31)<<6|Pe&63,ve>127&&(B=ve));break;case 3:Pe=y[b+1],Ne=y[b+2],(Pe&192)===128&&(Ne&192)===128&&(ve=(V&15)<<12|(Pe&63)<<6|Ne&63,ve>2047&&(ve<55296||ve>57343)&&(B=ve));break;case 4:Pe=y[b+1],Ne=y[b+2],Re=y[b+3],(Pe&192)===128&&(Ne&192)===128&&(Re&192)===128&&(ve=(V&15)<<18|(Pe&63)<<12|(Ne&63)<<6|Re&63,ve>65535&&ve<1114112&&(B=ve))}}B===null?(B=65533,de=1):B>65535&&(B-=65536,I.push(B>>>10&1023|55296),B=56320|B&1023),I.push(B),b+=de}return ps(I)}const Dr=4096;function ps(y){const f=y.length;if(f<=Dr)return String.fromCharCode.apply(String,y);let p="",I=0;for(;I<f;)p+=String.fromCharCode.apply(String,y.slice(I,I+=Dr));return p}function yu(y,f,p){let I="";p=Math.min(y.length,p);for(let b=f;b<p;++b)I+=String.fromCharCode(y[b]&127);return I}function Zo(y,f,p){let I="";p=Math.min(y.length,p);for(let b=f;b<p;++b)I+=String.fromCharCode(y[b]);return I}function ea(y,f,p){const I=y.length;(!f||f<0)&&(f=0),(!p||p<0||p>I)&&(p=I);let b="";for(let V=f;V<p;++V)b+=oa[y[V]];return b}function ta(y,f,p){const I=y.slice(f,p);let b="";for(let V=0;V<I.length-1;V+=2)b+=String.fromCharCode(I[V]+I[V+1]*256);return b}h.prototype.slice=function(f,p){const I=this.length;f=~~f,p=p===void 0?I:~~p,f<0?(f+=I,f<0&&(f=0)):f>I&&(f=I),p<0?(p+=I,p<0&&(p=0)):p>I&&(p=I),p<f&&(p=f);const b=this.subarray(f,p);return Object.setPrototypeOf(b,h.prototype),b};function Me(y,f,p){if(y%1!==0||y<0)throw new RangeError("offset is not uint");if(y+f>p)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(f,p,I){f=f>>>0,p=p>>>0,I||Me(f,p,this.length);let b=this[f],V=1,B=0;for(;++B<p&&(V*=256);)b+=this[f+B]*V;return b},h.prototype.readUintBE=h.prototype.readUIntBE=function(f,p,I){f=f>>>0,p=p>>>0,I||Me(f,p,this.length);let b=this[f+--p],V=1;for(;p>0&&(V*=256);)b+=this[f+--p]*V;return b},h.prototype.readUint8=h.prototype.readUInt8=function(f,p){return f=f>>>0,p||Me(f,1,this.length),this[f]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(f,p){return f=f>>>0,p||Me(f,2,this.length),this[f]|this[f+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(f,p){return f=f>>>0,p||Me(f,2,this.length),this[f]<<8|this[f+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(f,p){return f=f>>>0,p||Me(f,4,this.length),(this[f]|this[f+1]<<8|this[f+2]<<16)+this[f+3]*16777216},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(f,p){return f=f>>>0,p||Me(f,4,this.length),this[f]*16777216+(this[f+1]<<16|this[f+2]<<8|this[f+3])},h.prototype.readBigUInt64LE=Wt(function(f){f=f>>>0,un(f,"offset");const p=this[f],I=this[f+7];(p===void 0||I===void 0)&&Rn(f,this.length-8);const b=p+this[++f]*2**8+this[++f]*2**16+this[++f]*2**24,V=this[++f]+this[++f]*2**8+this[++f]*2**16+I*2**24;return BigInt(b)+(BigInt(V)<<BigInt(32))}),h.prototype.readBigUInt64BE=Wt(function(f){f=f>>>0,un(f,"offset");const p=this[f],I=this[f+7];(p===void 0||I===void 0)&&Rn(f,this.length-8);const b=p*2**24+this[++f]*2**16+this[++f]*2**8+this[++f],V=this[++f]*2**24+this[++f]*2**16+this[++f]*2**8+I;return(BigInt(b)<<BigInt(32))+BigInt(V)}),h.prototype.readIntLE=function(f,p,I){f=f>>>0,p=p>>>0,I||Me(f,p,this.length);let b=this[f],V=1,B=0;for(;++B<p&&(V*=256);)b+=this[f+B]*V;return V*=128,b>=V&&(b-=Math.pow(2,8*p)),b},h.prototype.readIntBE=function(f,p,I){f=f>>>0,p=p>>>0,I||Me(f,p,this.length);let b=p,V=1,B=this[f+--b];for(;b>0&&(V*=256);)B+=this[f+--b]*V;return V*=128,B>=V&&(B-=Math.pow(2,8*p)),B},h.prototype.readInt8=function(f,p){return f=f>>>0,p||Me(f,1,this.length),this[f]&128?(255-this[f]+1)*-1:this[f]},h.prototype.readInt16LE=function(f,p){f=f>>>0,p||Me(f,2,this.length);const I=this[f]|this[f+1]<<8;return I&32768?I|4294901760:I},h.prototype.readInt16BE=function(f,p){f=f>>>0,p||Me(f,2,this.length);const I=this[f+1]|this[f]<<8;return I&32768?I|4294901760:I},h.prototype.readInt32LE=function(f,p){return f=f>>>0,p||Me(f,4,this.length),this[f]|this[f+1]<<8|this[f+2]<<16|this[f+3]<<24},h.prototype.readInt32BE=function(f,p){return f=f>>>0,p||Me(f,4,this.length),this[f]<<24|this[f+1]<<16|this[f+2]<<8|this[f+3]},h.prototype.readBigInt64LE=Wt(function(f){f=f>>>0,un(f,"offset");const p=this[f],I=this[f+7];(p===void 0||I===void 0)&&Rn(f,this.length-8);const b=this[f+4]+this[f+5]*2**8+this[f+6]*2**16+(I<<24);return(BigInt(b)<<BigInt(32))+BigInt(p+this[++f]*2**8+this[++f]*2**16+this[++f]*2**24)}),h.prototype.readBigInt64BE=Wt(function(f){f=f>>>0,un(f,"offset");const p=this[f],I=this[f+7];(p===void 0||I===void 0)&&Rn(f,this.length-8);const b=(p<<24)+this[++f]*2**16+this[++f]*2**8+this[++f];return(BigInt(b)<<BigInt(32))+BigInt(this[++f]*2**24+this[++f]*2**16+this[++f]*2**8+I)}),h.prototype.readFloatLE=function(f,p){return f=f>>>0,p||Me(f,4,this.length),t.read(this,f,!0,23,4)},h.prototype.readFloatBE=function(f,p){return f=f>>>0,p||Me(f,4,this.length),t.read(this,f,!1,23,4)},h.prototype.readDoubleLE=function(f,p){return f=f>>>0,p||Me(f,8,this.length),t.read(this,f,!0,52,8)},h.prototype.readDoubleBE=function(f,p){return f=f>>>0,p||Me(f,8,this.length),t.read(this,f,!1,52,8)};function ot(y,f,p,I,b,V){if(!h.isBuffer(y))throw new TypeError('"buffer" argument must be a Buffer instance');if(f>b||f<V)throw new RangeError('"value" argument is out of bounds');if(p+I>y.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(f,p,I,b){if(f=+f,p=p>>>0,I=I>>>0,!b){const de=Math.pow(2,8*I)-1;ot(this,f,p,I,de,0)}let V=1,B=0;for(this[p]=f&255;++B<I&&(V*=256);)this[p+B]=f/V&255;return p+I},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(f,p,I,b){if(f=+f,p=p>>>0,I=I>>>0,!b){const de=Math.pow(2,8*I)-1;ot(this,f,p,I,de,0)}let V=I-1,B=1;for(this[p+V]=f&255;--V>=0&&(B*=256);)this[p+V]=f/B&255;return p+I},h.prototype.writeUint8=h.prototype.writeUInt8=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,1,255,0),this[p]=f&255,p+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,2,65535,0),this[p]=f&255,this[p+1]=f>>>8,p+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,2,65535,0),this[p]=f>>>8,this[p+1]=f&255,p+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,4,4294967295,0),this[p+3]=f>>>24,this[p+2]=f>>>16,this[p+1]=f>>>8,this[p]=f&255,p+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,4,4294967295,0),this[p]=f>>>24,this[p+1]=f>>>16,this[p+2]=f>>>8,this[p+3]=f&255,p+4};function gs(y,f,p,I,b){sa(f,I,b,y,p,7);let V=Number(f&BigInt(4294967295));y[p++]=V,V=V>>8,y[p++]=V,V=V>>8,y[p++]=V,V=V>>8,y[p++]=V;let B=Number(f>>BigInt(32)&BigInt(4294967295));return y[p++]=B,B=B>>8,y[p++]=B,B=B>>8,y[p++]=B,B=B>>8,y[p++]=B,p}function ms(y,f,p,I,b){sa(f,I,b,y,p,7);let V=Number(f&BigInt(4294967295));y[p+7]=V,V=V>>8,y[p+6]=V,V=V>>8,y[p+5]=V,V=V>>8,y[p+4]=V;let B=Number(f>>BigInt(32)&BigInt(4294967295));return y[p+3]=B,B=B>>8,y[p+2]=B,B=B>>8,y[p+1]=B,B=B>>8,y[p]=B,p+8}h.prototype.writeBigUInt64LE=Wt(function(f,p=0){return gs(this,f,p,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=Wt(function(f,p=0){return ms(this,f,p,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(f,p,I,b){if(f=+f,p=p>>>0,!b){const Pe=Math.pow(2,8*I-1);ot(this,f,p,I,Pe-1,-Pe)}let V=0,B=1,de=0;for(this[p]=f&255;++V<I&&(B*=256);)f<0&&de===0&&this[p+V-1]!==0&&(de=1),this[p+V]=(f/B>>0)-de&255;return p+I},h.prototype.writeIntBE=function(f,p,I,b){if(f=+f,p=p>>>0,!b){const Pe=Math.pow(2,8*I-1);ot(this,f,p,I,Pe-1,-Pe)}let V=I-1,B=1,de=0;for(this[p+V]=f&255;--V>=0&&(B*=256);)f<0&&de===0&&this[p+V+1]!==0&&(de=1),this[p+V]=(f/B>>0)-de&255;return p+I},h.prototype.writeInt8=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,1,127,-128),f<0&&(f=255+f+1),this[p]=f&255,p+1},h.prototype.writeInt16LE=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,2,32767,-32768),this[p]=f&255,this[p+1]=f>>>8,p+2},h.prototype.writeInt16BE=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,2,32767,-32768),this[p]=f>>>8,this[p+1]=f&255,p+2},h.prototype.writeInt32LE=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,4,2147483647,-2147483648),this[p]=f&255,this[p+1]=f>>>8,this[p+2]=f>>>16,this[p+3]=f>>>24,p+4},h.prototype.writeInt32BE=function(f,p,I){return f=+f,p=p>>>0,I||ot(this,f,p,4,2147483647,-2147483648),f<0&&(f=4294967295+f+1),this[p]=f>>>24,this[p+1]=f>>>16,this[p+2]=f>>>8,this[p+3]=f&255,p+4},h.prototype.writeBigInt64LE=Wt(function(f,p=0){return gs(this,f,p,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=Wt(function(f,p=0){return ms(this,f,p,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function _s(y,f,p,I,b,V){if(p+I>y.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("Index out of range")}function gi(y,f,p,I,b){return f=+f,p=p>>>0,b||_s(y,f,p,4),t.write(y,f,p,I,23,4),p+4}h.prototype.writeFloatLE=function(f,p,I){return gi(this,f,p,!0,I)},h.prototype.writeFloatBE=function(f,p,I){return gi(this,f,p,!1,I)};function na(y,f,p,I,b){return f=+f,p=p>>>0,b||_s(y,f,p,8),t.write(y,f,p,I,52,8),p+8}h.prototype.writeDoubleLE=function(f,p,I){return na(this,f,p,!0,I)},h.prototype.writeDoubleBE=function(f,p,I){return na(this,f,p,!1,I)},h.prototype.copy=function(f,p,I,b){if(!h.isBuffer(f))throw new TypeError("argument should be a Buffer");if(I||(I=0),!b&&b!==0&&(b=this.length),p>=f.length&&(p=f.length),p||(p=0),b>0&&b<I&&(b=I),b===I||f.length===0||this.length===0)return 0;if(p<0)throw new RangeError("targetStart out of bounds");if(I<0||I>=this.length)throw new RangeError("Index out of range");if(b<0)throw new RangeError("sourceEnd out of bounds");b>this.length&&(b=this.length),f.length-p<b-I&&(b=f.length-p+I);const V=b-I;return this===f&&typeof i.prototype.copyWithin=="function"?this.copyWithin(p,I,b):i.prototype.set.call(f,this.subarray(I,b),p),V},h.prototype.fill=function(f,p,I,b){if(typeof f=="string"){if(typeof p=="string"?(b=p,p=0,I=this.length):typeof I=="string"&&(b=I,I=this.length),b!==void 0&&typeof b!="string")throw new TypeError("encoding must be a string");if(typeof b=="string"&&!h.isEncoding(b))throw new TypeError("Unknown encoding: "+b);if(f.length===1){const B=f.charCodeAt(0);(b==="utf8"&&B<128||b==="latin1")&&(f=B)}}else typeof f=="number"?f=f&255:typeof f=="boolean"&&(f=Number(f));if(p<0||this.length<p||this.length<I)throw new RangeError("Out of range index");if(I<=p)return this;p=p>>>0,I=I===void 0?this.length:I>>>0,f||(f=0);let V;if(typeof f=="number")for(V=p;V<I;++V)this[V]=f;else{const B=h.isBuffer(f)?f:h.from(f,b),de=B.length;if(de===0)throw new TypeError('The value "'+f+'" is invalid for argument "value"');for(V=0;V<I-p;++V)this[V+p]=B[V%de]}return this};const Gn={};function ys(y,f,p){Gn[y]=class extends p{constructor(){super(),Object.defineProperty(this,"message",{value:f.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${y}]`,this.stack,delete this.name}get code(){return y}set code(b){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:b,writable:!0})}toString(){return`${this.name} [${y}]: ${this.message}`}}}ys("ERR_BUFFER_OUT_OF_BOUNDS",function(y){return y?`${y} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ys("ERR_INVALID_ARG_TYPE",function(y,f){return`The "${y}" argument must be of type number. Received type ${typeof f}`},TypeError),ys("ERR_OUT_OF_RANGE",function(y,f,p){let I=`The value of "${y}" is out of range.`,b=p;return Number.isInteger(p)&&Math.abs(p)>2**32?b=Es(String(p)):typeof p=="bigint"&&(b=String(p),(p>BigInt(2)**BigInt(32)||p<-(BigInt(2)**BigInt(32)))&&(b=Es(b)),b+="n"),I+=` It must be ${f}. Received ${b}`,I},RangeError);function Es(y){let f="",p=y.length;const I=y[0]==="-"?1:0;for(;p>=I+4;p-=3)f=`_${y.slice(p-3,p)}${f}`;return`${y.slice(0,p)}${f}`}function ra(y,f,p){un(f,"offset"),(y[f]===void 0||y[f+p]===void 0)&&Rn(f,y.length-(p+1))}function sa(y,f,p,I,b,V){if(y>p||y<f){const B=typeof f=="bigint"?"n":"";let de;throw f===0||f===BigInt(0)?de=`>= 0${B} and < 2${B} ** ${(V+1)*8}${B}`:de=`>= -(2${B} ** ${(V+1)*8-1}${B}) and < 2 ** ${(V+1)*8-1}${B}`,new Gn.ERR_OUT_OF_RANGE("value",de,y)}ra(I,b,V)}function un(y,f){if(typeof y!="number")throw new Gn.ERR_INVALID_ARG_TYPE(f,"number",y)}function Rn(y,f,p){throw Math.floor(y)!==y?(un(y,p),new Gn.ERR_OUT_OF_RANGE("offset","an integer",y)):f<0?new Gn.ERR_BUFFER_OUT_OF_BOUNDS:new Gn.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${f}`,y)}const ia=/[^+/0-9A-Za-z-_]/g;function at(y){if(y=y.split("=")[0],y=y.trim().replace(ia,""),y.length<2)return"";for(;y.length%4!==0;)y=y+"=";return y}function Ze(y,f){f=f||1/0;let p;const I=y.length;let b=null;const V=[];for(let B=0;B<I;++B){if(p=y.charCodeAt(B),p>55295&&p<57344){if(!b){if(p>56319){(f-=3)>-1&&V.push(239,191,189);continue}else if(B+1===I){(f-=3)>-1&&V.push(239,191,189);continue}b=p;continue}if(p<56320){(f-=3)>-1&&V.push(239,191,189),b=p;continue}p=(b-55296<<10|p-56320)+65536}else b&&(f-=3)>-1&&V.push(239,191,189);if(b=null,p<128){if((f-=1)<0)break;V.push(p)}else if(p<2048){if((f-=2)<0)break;V.push(p>>6|192,p&63|128)}else if(p<65536){if((f-=3)<0)break;V.push(p>>12|224,p>>6&63|128,p&63|128)}else if(p<1114112){if((f-=4)<0)break;V.push(p>>18|240,p>>12&63|128,p>>6&63|128,p&63|128)}else throw new Error("Invalid code point")}return V}function ws(y){const f=[];for(let p=0;p<y.length;++p)f.push(y.charCodeAt(p)&255);return f}function Eu(y,f){let p,I,b;const V=[];for(let B=0;B<y.length&&!((f-=2)<0);++B)p=y.charCodeAt(B),I=p>>8,b=p%256,V.push(b),V.push(I);return V}function mi(y){return e.toByteArray(at(y))}function Is(y,f,p,I){let b;for(b=0;b<I&&!(b+p>=f.length||b>=y.length);++b)f[b+p]=y[b];return b}function _t(y,f){return y instanceof f||y!=null&&y.constructor!=null&&y.constructor.name!=null&&y.constructor.name===f.name}function Ts(y){return y!==y}const oa=(function(){const y="0123456789abcdef",f=new Array(256);for(let p=0;p<16;++p){const I=p*16;for(let b=0;b<16;++b)f[I+b]=y[p]+y[b]}return f})();function Wt(y){return typeof BigInt>"u"?wu:y}function wu(){throw new Error("BigInt not supported")}})(cp);const g4=cp.Buffer;var vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Kr<"u"?Kr:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cr,lp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,A){function R(){}R.prototype=A.prototype,x.F=A.prototype,x.prototype=new R,x.prototype.constructor=x,x.D=function(O,N,D){for(var C=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)C[mt-2]=arguments[mt];return A.prototype[N].apply(O,C)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,A,R){R||(R=0);const O=Array(16);if(typeof A=="string")for(var N=0;N<16;++N)O[N]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(N=0;N<16;++N)O[N]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=x.g[0],R=x.g[1],N=x.g[2];let D=x.g[3],C;C=A+(D^R&(N^D))+O[0]+3614090360&4294967295,A=R+(C<<7&4294967295|C>>>25),C=D+(N^A&(R^N))+O[1]+3905402710&4294967295,D=A+(C<<12&4294967295|C>>>20),C=N+(R^D&(A^R))+O[2]+606105819&4294967295,N=D+(C<<17&4294967295|C>>>15),C=R+(A^N&(D^A))+O[3]+3250441966&4294967295,R=N+(C<<22&4294967295|C>>>10),C=A+(D^R&(N^D))+O[4]+4118548399&4294967295,A=R+(C<<7&4294967295|C>>>25),C=D+(N^A&(R^N))+O[5]+1200080426&4294967295,D=A+(C<<12&4294967295|C>>>20),C=N+(R^D&(A^R))+O[6]+2821735955&4294967295,N=D+(C<<17&4294967295|C>>>15),C=R+(A^N&(D^A))+O[7]+4249261313&4294967295,R=N+(C<<22&4294967295|C>>>10),C=A+(D^R&(N^D))+O[8]+1770035416&4294967295,A=R+(C<<7&4294967295|C>>>25),C=D+(N^A&(R^N))+O[9]+2336552879&4294967295,D=A+(C<<12&4294967295|C>>>20),C=N+(R^D&(A^R))+O[10]+4294925233&4294967295,N=D+(C<<17&4294967295|C>>>15),C=R+(A^N&(D^A))+O[11]+2304563134&4294967295,R=N+(C<<22&4294967295|C>>>10),C=A+(D^R&(N^D))+O[12]+1804603682&4294967295,A=R+(C<<7&4294967295|C>>>25),C=D+(N^A&(R^N))+O[13]+4254626195&4294967295,D=A+(C<<12&4294967295|C>>>20),C=N+(R^D&(A^R))+O[14]+2792965006&4294967295,N=D+(C<<17&4294967295|C>>>15),C=R+(A^N&(D^A))+O[15]+1236535329&4294967295,R=N+(C<<22&4294967295|C>>>10),C=A+(N^D&(R^N))+O[1]+4129170786&4294967295,A=R+(C<<5&4294967295|C>>>27),C=D+(R^N&(A^R))+O[6]+3225465664&4294967295,D=A+(C<<9&4294967295|C>>>23),C=N+(A^R&(D^A))+O[11]+643717713&4294967295,N=D+(C<<14&4294967295|C>>>18),C=R+(D^A&(N^D))+O[0]+3921069994&4294967295,R=N+(C<<20&4294967295|C>>>12),C=A+(N^D&(R^N))+O[5]+3593408605&4294967295,A=R+(C<<5&4294967295|C>>>27),C=D+(R^N&(A^R))+O[10]+38016083&4294967295,D=A+(C<<9&4294967295|C>>>23),C=N+(A^R&(D^A))+O[15]+3634488961&4294967295,N=D+(C<<14&4294967295|C>>>18),C=R+(D^A&(N^D))+O[4]+3889429448&4294967295,R=N+(C<<20&4294967295|C>>>12),C=A+(N^D&(R^N))+O[9]+568446438&4294967295,A=R+(C<<5&4294967295|C>>>27),C=D+(R^N&(A^R))+O[14]+3275163606&4294967295,D=A+(C<<9&4294967295|C>>>23),C=N+(A^R&(D^A))+O[3]+4107603335&4294967295,N=D+(C<<14&4294967295|C>>>18),C=R+(D^A&(N^D))+O[8]+1163531501&4294967295,R=N+(C<<20&4294967295|C>>>12),C=A+(N^D&(R^N))+O[13]+2850285829&4294967295,A=R+(C<<5&4294967295|C>>>27),C=D+(R^N&(A^R))+O[2]+4243563512&4294967295,D=A+(C<<9&4294967295|C>>>23),C=N+(A^R&(D^A))+O[7]+1735328473&4294967295,N=D+(C<<14&4294967295|C>>>18),C=R+(D^A&(N^D))+O[12]+2368359562&4294967295,R=N+(C<<20&4294967295|C>>>12),C=A+(R^N^D)+O[5]+4294588738&4294967295,A=R+(C<<4&4294967295|C>>>28),C=D+(A^R^N)+O[8]+2272392833&4294967295,D=A+(C<<11&4294967295|C>>>21),C=N+(D^A^R)+O[11]+1839030562&4294967295,N=D+(C<<16&4294967295|C>>>16),C=R+(N^D^A)+O[14]+4259657740&4294967295,R=N+(C<<23&4294967295|C>>>9),C=A+(R^N^D)+O[1]+2763975236&4294967295,A=R+(C<<4&4294967295|C>>>28),C=D+(A^R^N)+O[4]+1272893353&4294967295,D=A+(C<<11&4294967295|C>>>21),C=N+(D^A^R)+O[7]+4139469664&4294967295,N=D+(C<<16&4294967295|C>>>16),C=R+(N^D^A)+O[10]+3200236656&4294967295,R=N+(C<<23&4294967295|C>>>9),C=A+(R^N^D)+O[13]+681279174&4294967295,A=R+(C<<4&4294967295|C>>>28),C=D+(A^R^N)+O[0]+3936430074&4294967295,D=A+(C<<11&4294967295|C>>>21),C=N+(D^A^R)+O[3]+3572445317&4294967295,N=D+(C<<16&4294967295|C>>>16),C=R+(N^D^A)+O[6]+76029189&4294967295,R=N+(C<<23&4294967295|C>>>9),C=A+(R^N^D)+O[9]+3654602809&4294967295,A=R+(C<<4&4294967295|C>>>28),C=D+(A^R^N)+O[12]+3873151461&4294967295,D=A+(C<<11&4294967295|C>>>21),C=N+(D^A^R)+O[15]+530742520&4294967295,N=D+(C<<16&4294967295|C>>>16),C=R+(N^D^A)+O[2]+3299628645&4294967295,R=N+(C<<23&4294967295|C>>>9),C=A+(N^(R|~D))+O[0]+4096336452&4294967295,A=R+(C<<6&4294967295|C>>>26),C=D+(R^(A|~N))+O[7]+1126891415&4294967295,D=A+(C<<10&4294967295|C>>>22),C=N+(A^(D|~R))+O[14]+2878612391&4294967295,N=D+(C<<15&4294967295|C>>>17),C=R+(D^(N|~A))+O[5]+4237533241&4294967295,R=N+(C<<21&4294967295|C>>>11),C=A+(N^(R|~D))+O[12]+1700485571&4294967295,A=R+(C<<6&4294967295|C>>>26),C=D+(R^(A|~N))+O[3]+2399980690&4294967295,D=A+(C<<10&4294967295|C>>>22),C=N+(A^(D|~R))+O[10]+4293915773&4294967295,N=D+(C<<15&4294967295|C>>>17),C=R+(D^(N|~A))+O[1]+2240044497&4294967295,R=N+(C<<21&4294967295|C>>>11),C=A+(N^(R|~D))+O[8]+1873313359&4294967295,A=R+(C<<6&4294967295|C>>>26),C=D+(R^(A|~N))+O[15]+4264355552&4294967295,D=A+(C<<10&4294967295|C>>>22),C=N+(A^(D|~R))+O[6]+2734768916&4294967295,N=D+(C<<15&4294967295|C>>>17),C=R+(D^(N|~A))+O[13]+1309151649&4294967295,R=N+(C<<21&4294967295|C>>>11),C=A+(N^(R|~D))+O[4]+4149444226&4294967295,A=R+(C<<6&4294967295|C>>>26),C=D+(R^(A|~N))+O[11]+3174756917&4294967295,D=A+(C<<10&4294967295|C>>>22),C=N+(A^(D|~R))+O[2]+718787259&4294967295,N=D+(C<<15&4294967295|C>>>17),C=R+(D^(N|~A))+O[9]+3951481745&4294967295,x.g[0]=x.g[0]+A&4294967295,x.g[1]=x.g[1]+(N+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+D&4294967295}r.prototype.v=function(x,A){A===void 0&&(A=x.length);const R=A-this.blockSize,O=this.C;let N=this.h,D=0;for(;D<A;){if(N==0)for(;D<=R;)s(this,x,D),D+=this.blockSize;if(typeof x=="string"){for(;D<A;)if(O[N++]=x.charCodeAt(D++),N==this.blockSize){s(this,O),N=0;break}}else for(;D<A;)if(O[N++]=x[D++],N==this.blockSize){s(this,O),N=0;break}}this.h=N,this.o+=A},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var A=1;A<x.length-8;++A)x[A]=0;A=this.o*8;for(var R=x.length-8;R<x.length;++R)x[R]=A&255,A/=256;for(this.v(x),x=Array(16),A=0,R=0;R<4;++R)for(let O=0;O<32;O+=8)x[A++]=this.g[R]>>>O&255;return x};function i(x,A){var R=a;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=A(x)}function o(x,A){this.h=A;const R=[];let O=!0;for(let N=x.length-1;N>=0;N--){const D=x[N]|0;O&&D==A||(R[N]=D,O=!1)}this.g=R}var a={};function u(x){return-128<=x&&x<128?i(x,function(A){return new o([A|0],A<0?-1:0)}):new o([x|0],x<0?-1:0)}function l(x){if(isNaN(x)||!isFinite(x))return g;if(x<0)return G(l(-x));const A=[];let R=1;for(let O=0;x>=R;O++)A[O]=x/R|0,R*=4294967296;return new o(A,0)}function h(x,A){if(x.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(x.charAt(0)=="-")return G(h(x.substring(1),A));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=l(Math.pow(A,8));let O=g;for(let D=0;D<x.length;D+=8){var N=Math.min(8,x.length-D);const C=parseInt(x.substring(D,D+N),A);N<8?(N=l(Math.pow(A,N)),O=O.j(N).add(l(C))):(O=O.j(R),O=O.add(l(C)))}return O}var g=u(0),E=u(1),v=u(16777216);n=o.prototype,n.m=function(){if(q(this))return-G(this).m();let x=0,A=1;for(let R=0;R<this.g.length;R++){const O=this.i(R);x+=(O>=0?O:4294967296+O)*A,A*=4294967296}return x},n.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(S(this))return"0";if(q(this))return"-"+G(this).toString(x);const A=l(Math.pow(x,6));var R=this;let O="";for(;;){const N=st(R,A).g;R=te(R,N.j(A));let D=((R.g.length>0?R.g[0]:R.h)>>>0).toString(x);if(R=N,S(R))return D+O;for(;D.length<6;)D="0"+D;O=D+O}},n.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function S(x){if(x.h!=0)return!1;for(let A=0;A<x.g.length;A++)if(x.g[A]!=0)return!1;return!0}function q(x){return x.h==-1}n.l=function(x){return x=te(this,x),q(x)?-1:S(x)?0:1};function G(x){const A=x.g.length,R=[];for(let O=0;O<A;O++)R[O]=~x.g[O];return new o(R,~x.h).add(E)}n.abs=function(){return q(this)?G(this):this},n.add=function(x){const A=Math.max(this.g.length,x.g.length),R=[];let O=0;for(let N=0;N<=A;N++){let D=O+(this.i(N)&65535)+(x.i(N)&65535),C=(D>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);O=C>>>16,D&=65535,C&=65535,R[N]=C<<16|D}return new o(R,R[R.length-1]&-2147483648?-1:0)};function te(x,A){return x.add(G(A))}n.j=function(x){if(S(this)||S(x))return g;if(q(this))return q(x)?G(this).j(G(x)):G(G(this).j(x));if(q(x))return G(this.j(G(x)));if(this.l(v)<0&&x.l(v)<0)return l(this.m()*x.m());const A=this.g.length+x.g.length,R=[];for(var O=0;O<2*A;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(let N=0;N<x.g.length;N++){const D=this.i(O)>>>16,C=this.i(O)&65535,mt=x.i(N)>>>16,Cn=x.i(N)&65535;R[2*O+2*N]+=C*Cn,he(R,2*O+2*N),R[2*O+2*N+1]+=D*Cn,he(R,2*O+2*N+1),R[2*O+2*N+1]+=C*mt,he(R,2*O+2*N+1),R[2*O+2*N+2]+=D*mt,he(R,2*O+2*N+2)}for(x=0;x<A;x++)R[x]=R[2*x+1]<<16|R[2*x];for(x=A;x<2*A;x++)R[x]=0;return new o(R,0)};function he(x,A){for(;(x[A]&65535)!=x[A];)x[A+1]+=x[A]>>>16,x[A]&=65535,A++}function Ce(x,A){this.g=x,this.h=A}function st(x,A){if(S(A))throw Error("division by zero");if(S(x))return new Ce(g,g);if(q(x))return A=st(G(x),A),new Ce(G(A.g),G(A.h));if(q(A))return A=st(x,G(A)),new Ce(G(A.g),A.h);if(x.g.length>30){if(q(x)||q(A))throw Error("slowDivide_ only works with positive integers.");for(var R=E,O=A;O.l(x)<=0;)R=it(R),O=it(O);var N=Je(R,1),D=Je(O,1);for(O=Je(O,2),R=Je(R,2);!S(O);){var C=D.add(O);C.l(x)<=0&&(N=N.add(R),D=C),O=Je(O,1),R=Je(R,1)}return A=te(x,N.j(A)),new Ce(N,A)}for(N=g;x.l(A)>=0;){for(R=Math.max(1,Math.floor(x.m()/A.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),D=l(R),C=D.j(A);q(C)||C.l(x)>0;)R-=O,D=l(R),C=D.j(A);S(D)&&(D=E),N=N.add(D),x=te(x,C)}return new Ce(N,x)}n.B=function(x){return st(this,x).h},n.and=function(x){const A=Math.max(this.g.length,x.g.length),R=[];for(let O=0;O<A;O++)R[O]=this.i(O)&x.i(O);return new o(R,this.h&x.h)},n.or=function(x){const A=Math.max(this.g.length,x.g.length),R=[];for(let O=0;O<A;O++)R[O]=this.i(O)|x.i(O);return new o(R,this.h|x.h)},n.xor=function(x){const A=Math.max(this.g.length,x.g.length),R=[];for(let O=0;O<A;O++)R[O]=this.i(O)^x.i(O);return new o(R,this.h^x.h)};function it(x){const A=x.g.length+1,R=[];for(let O=0;O<A;O++)R[O]=x.i(O)<<1|x.i(O-1)>>>31;return new o(R,x.h)}function Je(x,A){const R=A>>5;A%=32;const O=x.g.length-R,N=[];for(let D=0;D<O;D++)N[D]=A>0?x.i(D+R)>>>A|x.i(D+R+1)<<32-A:x.i(D+R);return new o(N,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,lp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=h,cr=o}).apply(typeof vd<"u"?vd:typeof self<"u"?self:typeof window<"u"?window:{});var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Kr<"u"?Kr:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hp,Fi,dp,Sa,ul,fp,pp,gp;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof _a=="object"&&_a];for(var d=0;d<c.length;++d){var m=c[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function s(c,d){if(d)e:{var m=r;c=c.split(".");for(var w=0;w<c.length-1;w++){var k=c[w];if(!(k in m))break e;m=m[k]}c=c[c.length-1],w=m[c],d=d(w),d!=w&&d!=null&&e(m,c,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(d){var m=[],w;for(w in d)Object.prototype.hasOwnProperty.call(d,w)&&m.push([w,d[w]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function u(c,d,m){return c.call.apply(c.bind,arguments)}function l(c,d,m){return l=u,l.apply(null,arguments)}function h(c,d){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function g(c,d){function m(){}m.prototype=d.prototype,c.Z=d.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(w,k,M){for(var z=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)z[fe-2]=arguments[fe];return d.prototype[k].apply(w,z)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function v(c){const d=c.length;if(d>0){const m=Array(d);for(let w=0;w<d;w++)m[w]=c[w];return m}return[]}function S(c,d){for(let w=1;w<arguments.length;w++){const k=arguments[w];var m=typeof k;if(m=m!="object"?m:k?Array.isArray(k)?"array":m:"null",m=="array"||m=="object"&&typeof k.length=="number"){m=c.length||0;const M=k.length||0;c.length=m+M;for(let z=0;z<M;z++)c[m+z]=k[z]}else c.push(k)}}class q{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function G(c){o.setTimeout(()=>{throw c},0)}function te(){var c=x;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class he{constructor(){this.h=this.g=null}add(d,m){const w=Ce.get();w.set(d,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Ce=new q(()=>new st,c=>c.reset());class st{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let it,Je=!1,x=new he,A=()=>{const c=Promise.resolve(void 0);it=()=>{c.then(R)}};function R(){for(var c;c=te();){try{c.h.call(c.g)}catch(m){G(m)}var d=Ce;d.j(c),d.h<100&&(d.h++,c.next=d.g,d.g=c)}Je=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};o.addEventListener("test",m,d),o.removeEventListener("test",m,d)}catch{}return c})();function C(c){return/^[\s\xa0]*$/.test(c)}function mt(c,d){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,d)}g(mt,N),mt.prototype.init=function(c,d){const m=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget,d||(m=="mouseover"?d=c.fromElement:m=="mouseout"&&(d=c.toElement)),this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&mt.Z.h.call(this)},mt.prototype.h=function(){mt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Cn="closure_listenable_"+(Math.random()*1e6|0),_u=0;function Jo(c,d,m,w,k){this.listener=c,this.proxy=null,this.src=d,this.type=m,this.capture=!!w,this.ha=k,this.key=++_u,this.da=this.fa=!1}function Dr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ps(c,d,m){for(const w in c)d.call(m,c[w],w,c)}function yu(c,d){for(const m in c)d.call(void 0,c[m],m,c)}function Zo(c){const d={};for(const m in c)d[m]=c[m];return d}const ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ta(c,d){let m,w;for(let k=1;k<arguments.length;k++){w=arguments[k];for(m in w)c[m]=w[m];for(let M=0;M<ea.length;M++)m=ea[M],Object.prototype.hasOwnProperty.call(w,m)&&(c[m]=w[m])}}function Me(c){this.src=c,this.g={},this.h=0}Me.prototype.add=function(c,d,m,w,k){const M=c.toString();c=this.g[M],c||(c=this.g[M]=[],this.h++);const z=gs(c,d,w,k);return z>-1?(d=c[z],m||(d.fa=!1)):(d=new Jo(d,this.src,M,!!w,k),d.fa=m,c.push(d)),d};function ot(c,d){const m=d.type;if(m in c.g){var w=c.g[m],k=Array.prototype.indexOf.call(w,d,void 0),M;(M=k>=0)&&Array.prototype.splice.call(w,k,1),M&&(Dr(d),c.g[m].length==0&&(delete c.g[m],c.h--))}}function gs(c,d,m,w){for(let k=0;k<c.length;++k){const M=c[k];if(!M.da&&M.listener==d&&M.capture==!!m&&M.ha==w)return k}return-1}var ms="closure_lm_"+(Math.random()*1e6|0),_s={};function gi(c,d,m,w,k){if(Array.isArray(d)){for(let M=0;M<d.length;M++)gi(c,d[M],m,w,k);return null}return m=ia(m),c&&c[Cn]?c.J(d,m,a(w)?!!w.capture:!1,k):na(c,d,m,!1,w,k)}function na(c,d,m,w,k,M){if(!d)throw Error("Invalid event type");const z=a(k)?!!k.capture:!!k;let fe=un(c);if(fe||(c[ms]=fe=new Me(c)),m=fe.add(d,m,w,z,M),m.proxy)return m;if(w=Gn(),m.proxy=w,w.src=c,w.listener=m,c.addEventListener)D||(k=z),k===void 0&&(k=!1),c.addEventListener(d.toString(),w,k);else if(c.attachEvent)c.attachEvent(ra(d.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Gn(){function c(m){return d.call(c.src,c.listener,m)}const d=sa;return c}function ys(c,d,m,w,k){if(Array.isArray(d))for(var M=0;M<d.length;M++)ys(c,d[M],m,w,k);else w=a(w)?!!w.capture:!!w,m=ia(m),c&&c[Cn]?(c=c.i,M=String(d).toString(),M in c.g&&(d=c.g[M],m=gs(d,m,w,k),m>-1&&(Dr(d[m]),Array.prototype.splice.call(d,m,1),d.length==0&&(delete c.g[M],c.h--)))):c&&(c=un(c))&&(d=c.g[d.toString()],c=-1,d&&(c=gs(d,m,w,k)),(m=c>-1?d[c]:null)&&Es(m))}function Es(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[Cn])ot(d.i,c);else{var m=c.type,w=c.proxy;d.removeEventListener?d.removeEventListener(m,w,c.capture):d.detachEvent?d.detachEvent(ra(m),w):d.addListener&&d.removeListener&&d.removeListener(w),(m=un(d))?(ot(m,c),m.h==0&&(m.src=null,d[ms]=null)):Dr(c)}}}function ra(c){return c in _s?_s[c]:_s[c]="on"+c}function sa(c,d){if(c.da)c=!0;else{d=new mt(d,this);const m=c.listener,w=c.ha||c.src;c.fa&&Es(c),c=m.call(w,d)}return c}function un(c){return c=c[ms],c instanceof Me?c:null}var Rn="__closure_events_fn_"+(Math.random()*1e9>>>0);function ia(c){return typeof c=="function"?c:(c[Rn]||(c[Rn]=function(d){return c.handleEvent(d)}),c[Rn])}function at(){O.call(this),this.i=new Me(this),this.M=this,this.G=null}g(at,O),at.prototype[Cn]=!0,at.prototype.removeEventListener=function(c,d,m,w){ys(this,c,d,m,w)};function Ze(c,d){var m,w=c.G;if(w)for(m=[];w;w=w.G)m.push(w);if(c=c.M,w=d.type||d,typeof d=="string")d=new N(d,c);else if(d instanceof N)d.target=d.target||c;else{var k=d;d=new N(w,c),ta(d,k)}k=!0;let M,z;if(m)for(z=m.length-1;z>=0;z--)M=d.g=m[z],k=ws(M,w,!0,d)&&k;if(M=d.g=c,k=ws(M,w,!0,d)&&k,k=ws(M,w,!1,d)&&k,m)for(z=0;z<m.length;z++)M=d.g=m[z],k=ws(M,w,!1,d)&&k}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var c=this.i;for(const d in c.g){const m=c.g[d];for(let w=0;w<m.length;w++)Dr(m[w]);delete c.g[d],c.h--}}this.G=null},at.prototype.J=function(c,d,m,w){return this.i.add(String(c),d,!1,m,w)},at.prototype.K=function(c,d,m,w){return this.i.add(String(c),d,!0,m,w)};function ws(c,d,m,w){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();let k=!0;for(let M=0;M<d.length;++M){const z=d[M];if(z&&!z.da&&z.capture==m){const fe=z.listener,et=z.ha||z.src;z.fa&&ot(c.i,z),k=fe.call(et,w)!==!1&&k}}return k&&!w.defaultPrevented}function Eu(c,d){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=l(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(c,d||0)}function mi(c){c.g=Eu(()=>{c.g=null,c.i&&(c.i=!1,mi(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class Is extends O{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:mi(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(c){O.call(this),this.h=c,this.g={}}g(_t,O);var Ts=[];function oa(c){ps(c.g,function(d,m){this.g.hasOwnProperty(m)&&Es(d)},c),c.g={}}_t.prototype.N=function(){_t.Z.N.call(this),oa(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wt=o.JSON.stringify,wu=o.JSON.parse,y=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function f(){}function p(){}var I={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function b(){N.call(this,"d")}g(b,N);function V(){N.call(this,"c")}g(V,N);var B={},de=null;function Pe(){return de=de||new at}B.Ia="serverreachability";function Ne(c){N.call(this,B.Ia,c)}g(Ne,N);function Re(c){const d=Pe();Ze(d,new Ne(d))}B.STAT_EVENT="statevent";function ve(c,d){N.call(this,B.STAT_EVENT,c),this.stat=d}g(ve,N);function Rt(c){const d=Pe();Ze(d,new ve(d,c))}B.Ja="timingevent";function P1(c,d){N.call(this,B.Ja,c),this.size=d}g(P1,N);function _i(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},d)}function yi(){this.g=!0}yi.prototype.ua=function(){this.g=!1};function tm(c,d,m,w,k,M){c.info(function(){if(c.g)if(M){var z="",fe=M.split("&");for(let be=0;be<fe.length;be++){var et=fe[be].split("=");if(et.length>1){const ct=et[0];et=et[1];const hn=ct.split("_");z=hn.length>=2&&hn[1]=="type"?z+(ct+"="+et+"&"):z+(ct+"=redacted&")}}}else z=null;else z=M;return"XMLHTTP REQ ("+w+") [attempt "+k+"]: "+d+`
`+m+`
`+z})}function nm(c,d,m,w,k,M,z){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+k+"]: "+d+`
`+m+`
`+M+" "+z})}function As(c,d,m,w){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+sm(c,m)+(w?" "+w:"")})}function rm(c,d){c.info(function(){return"TIMEOUT: "+d})}yi.prototype.info=function(){};function sm(c,d){if(!c.g)return d;if(!d)return null;try{const M=JSON.parse(d);if(M){for(c=0;c<M.length;c++)if(Array.isArray(M[c])){var m=M[c];if(!(m.length<2)){var w=m[1];if(Array.isArray(w)&&!(w.length<1)){var k=w[0];if(k!="noop"&&k!="stop"&&k!="close")for(let z=1;z<w.length;z++)w[z]=""}}}}return Wt(M)}catch{return d}}var aa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},N1={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},b1;function Iu(){}g(Iu,f),Iu.prototype.g=function(){return new XMLHttpRequest},b1=new Iu;function Ei(c){return encodeURIComponent(String(c))}function im(c){var d=1;c=c.split(":");const m=[];for(;d>0&&c.length;)m.push(c.shift()),d--;return c.length&&m.push(c.join(":")),m}function Wn(c,d,m,w){this.j=c,this.i=d,this.l=m,this.S=w||1,this.V=new _t(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new x1}function x1(){this.i=null,this.g="",this.h=!1}var O1={},Tu={};function Au(c,d,m){c.M=1,c.A=ua(ln(d)),c.u=m,c.R=!0,k1(c,null)}function k1(c,d){c.F=Date.now(),ca(c),c.B=ln(c.A);var m=c.B,w=c.S;Array.isArray(w)||(w=[String(w)]),j1(m.i,"t",w),c.C=0,m=c.j.L,c.h=new x1,c.g=ld(c.j,m?d:null,!c.u),c.P>0&&(c.O=new Is(l(c.Y,c,c.g),c.P)),d=c.V,m=c.g,w=c.ba;var k="readystatechange";Array.isArray(k)||(k&&(Ts[0]=k.toString()),k=Ts);for(let M=0;M<k.length;M++){const z=gi(m,k[M],w||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=c.J?Zo(c.J):{},c.u?(c.v||(c.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,d)):(c.v="GET",c.g.ea(c.B,c.v,null,d)),Re(),tm(c.i,c.v,c.B,c.l,c.S,c.u)}Wn.prototype.ba=function(c){c=c.target;const d=this.O;d&&Kn(c)==3?d.j():this.Y(c)},Wn.prototype.Y=function(c){try{if(c==this.g)e:{const fe=Kn(this.g),et=this.g.ya(),be=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Z1(this.g)))){this.K||fe!=4||et==7||(et==8||be<=0?Re(3):Re(2)),vu(this);var d=this.g.ca();this.X=d;var m=om(this);if(this.o=d==200,nm(this.i,this.v,this.B,this.l,this.S,fe,d),this.o){if(this.U&&!this.L){t:{if(this.g){var w,k=this.g;if((w=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(w)){var M=w;break t}}M=null}if(c=M)As(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Cu(this,c);else{this.o=!1,this.m=3,Rt(12),Vr(this),wi(this);break e}}if(this.R){c=!0;let ct;for(;!this.K&&this.C<m.length;)if(ct=am(this,m),ct==Tu){fe==4&&(this.m=4,Rt(14),c=!1),As(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==O1){this.m=4,Rt(15),As(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else As(this.i,this.l,ct,null),Cu(this,ct);if(D1(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||m.length!=0||this.h.h||(this.m=1,Rt(16),c=!1),this.o=this.o&&c,!c)As(this.i,this.l,m,"[Invalid Chunked Response]"),Vr(this),wi(this);else if(m.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),ku(z),z.P=!0,Rt(11))}}else As(this.i,this.l,m,null),Cu(this,m);fe==4&&Vr(this),this.o&&!this.K&&(fe==4?od(this.j,this):(this.o=!1,ca(this)))}else Im(this.g),d==400&&m.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),Vr(this),wi(this)}}}catch{}finally{}};function om(c){if(!D1(c))return c.g.la();const d=Z1(c.g);if(d==="")return"";let m="";const w=d.length,k=Kn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Vr(c),wi(c),"";c.h.i=new o.TextDecoder}for(let M=0;M<w;M++)c.h.h=!0,m+=c.h.i.decode(d[M],{stream:!(k&&M==w-1)});return d.length=0,c.h.g+=m,c.C=0,c.h.g}function D1(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function am(c,d){var m=c.C,w=d.indexOf(`
`,m);return w==-1?Tu:(m=Number(d.substring(m,w)),isNaN(m)?O1:(w+=1,w+m>d.length?Tu:(d=d.slice(w,w+m),c.C=w+m,d)))}Wn.prototype.cancel=function(){this.K=!0,Vr(this)};function ca(c){c.T=Date.now()+c.H,V1(c,c.H)}function V1(c,d){if(c.D!=null)throw Error("WatchDog timer not null");c.D=_i(l(c.aa,c),d)}function vu(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Wn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(rm(this.i,this.B),this.M!=2&&(Re(),Rt(17)),Vr(this),this.m=2,wi(this)):V1(this,this.T-c)};function wi(c){c.j.I==0||c.K||od(c.j,c)}function Vr(c){vu(c);var d=c.O;d&&typeof d.dispose=="function"&&d.dispose(),c.O=null,oa(c.V),c.g&&(d=c.g,c.g=null,d.abort(),d.dispose())}function Cu(c,d){try{var m=c.j;if(m.I!=0&&(m.g==c||Ru(m.h,c))){if(!c.L&&Ru(m.h,c)&&m.I==3){try{var w=m.Ba.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var k=w;if(k[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)pa(m),da(m);else break e;Ou(m),Rt(18)}}else m.xa=k[1],0<m.xa-m.K&&k[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=_i(l(m.Va,m),6e3));F1(m.h)<=1&&m.ta&&(m.ta=void 0)}else Mr(m,11)}else if((c.L||m.g==c)&&pa(m),!C(d))for(k=m.Ba.g.parse(d),d=0;d<k.length;d++){let be=k[d];const ct=be[0];if(!(ct<=m.K))if(m.K=ct,be=be[1],m.I==2)if(be[0]=="c"){m.M=be[1],m.ba=be[2];const hn=be[3];hn!=null&&(m.ka=hn,m.j.info("VER="+m.ka));const Fr=be[4];Fr!=null&&(m.za=Fr,m.j.info("SVER="+m.za));const Yn=be[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(w=1.5*Yn,m.O=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Qn=c.g;if(Qn){const ma=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ma){var M=w.h;M.g||ma.indexOf("spdy")==-1&&ma.indexOf("quic")==-1&&ma.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Su(M,M.h),M.h=null))}if(w.G){const Du=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;Du&&(w.wa=Du,ke(w.J,w.G,Du))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),w=m;var z=c;if(w.na=ud(w,w.L?w.ba:null,w.W),z.L){U1(w.h,z);var fe=z,et=w.O;et&&(fe.H=et),fe.D&&(vu(fe),ca(fe)),w.g=z}else sd(w);m.i.length>0&&fa(m)}else be[0]!="stop"&&be[0]!="close"||Mr(m,7);else m.I==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Mr(m,7):xu(m):be[0]!="noop"&&m.l&&m.l.qa(be),m.A=0)}}Re(4)}catch{}}var cm=class{constructor(c,d){this.g=c,this.map=d}};function L1(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function M1(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function F1(c){return c.h?1:c.g?c.g.size:0}function Ru(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function Su(c,d){c.g?c.g.add(d):c.h=d}function U1(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}L1.prototype.cancel=function(){if(this.i=B1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function B1(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const m of c.g.values())d=d.concat(m.G);return d}return v(c.i)}var q1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function um(c,d){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const w=c[m].indexOf("=");let k,M=null;w>=0?(k=c[m].substring(0,w),M=c[m].substring(w+1)):k=c[m],d(k,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function jn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;c instanceof jn?(this.l=c.l,Ii(this,c.j),this.o=c.o,this.g=c.g,Ti(this,c.u),this.h=c.h,Pu(this,z1(c.i)),this.m=c.m):c&&(d=String(c).match(q1))?(this.l=!1,Ii(this,d[1]||"",!0),this.o=Ai(d[2]||""),this.g=Ai(d[3]||"",!0),Ti(this,d[4]),this.h=Ai(d[5]||"",!0),Pu(this,d[6]||"",!0),this.m=Ai(d[7]||"")):(this.l=!1,this.i=new Ci(null,this.l))}jn.prototype.toString=function(){const c=[];var d=this.j;d&&c.push(vi(d,H1,!0),":");var m=this.g;return(m||d=="file")&&(c.push("//"),(d=this.o)&&c.push(vi(d,H1,!0),"@"),c.push(Ei(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(vi(m,m.charAt(0)=="/"?dm:hm,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",vi(m,pm)),c.join("")},jn.prototype.resolve=function(c){const d=ln(this);let m=!!c.j;m?Ii(d,c.j):m=!!c.o,m?d.o=c.o:m=!!c.g,m?d.g=c.g:m=c.u!=null;var w=c.h;if(m)Ti(d,c.u);else if(m=!!c.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var k=d.h.lastIndexOf("/");k!=-1&&(w=d.h.slice(0,k+1)+w)}if(k=w,k==".."||k==".")w="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){w=k.lastIndexOf("/",0)==0,k=k.split("/");const M=[];for(let z=0;z<k.length;){const fe=k[z++];fe=="."?w&&z==k.length&&M.push(""):fe==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),w&&z==k.length&&M.push("")):(M.push(fe),w=!0)}w=M.join("/")}else w=k}return m?d.h=w:m=c.i.toString()!=="",m?Pu(d,z1(c.i)):m=!!c.m,m&&(d.m=c.m),d};function ln(c){return new jn(c)}function Ii(c,d,m){c.j=m?Ai(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Ti(c,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);c.u=d}else c.u=null}function Pu(c,d,m){d instanceof Ci?(c.i=d,gm(c.i,c.l)):(m||(d=vi(d,fm)),c.i=new Ci(d,c.l))}function ke(c,d,m){c.i.set(d,m)}function ua(c){return ke(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ai(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function vi(c,d,m){return typeof c=="string"?(c=encodeURI(c).replace(d,lm),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function lm(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var H1=/[#\/\?@]/g,hm=/[#\?:]/g,dm=/[#\?]/g,fm=/[#\?@]/g,pm=/#/g;function Ci(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Lr(c){c.g||(c.g=new Map,c.h=0,c.i&&um(c.i,function(d,m){c.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}n=Ci.prototype,n.add=function(c,d){Lr(this),this.i=null,c=vs(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(d),this.h+=1,this};function $1(c,d){Lr(c),d=vs(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function G1(c,d){return Lr(c),d=vs(c,d),c.g.has(d)}n.forEach=function(c,d){Lr(this),this.g.forEach(function(m,w){m.forEach(function(k){c.call(d,k,w,this)},this)},this)};function W1(c,d){Lr(c);let m=[];if(typeof d=="string")G1(c,d)&&(m=m.concat(c.g.get(vs(c,d))));else for(c=Array.from(c.g.values()),d=0;d<c.length;d++)m=m.concat(c[d]);return m}n.set=function(c,d){return Lr(this),this.i=null,c=vs(this,c),G1(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},n.get=function(c,d){return c?(c=W1(this,c),c.length>0?String(c[0]):d):d};function j1(c,d,m){$1(c,d),m.length>0&&(c.i=null,c.g.set(vs(c,d),v(m)),c.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(let w=0;w<d.length;w++){var m=d[w];const k=Ei(m);m=W1(this,m);for(let M=0;M<m.length;M++){let z=k;m[M]!==""&&(z+="="+Ei(m[M])),c.push(z)}}return this.i=c.join("&")};function z1(c){const d=new Ci;return d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),d}function vs(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function gm(c,d){d&&!c.j&&(Lr(c),c.i=null,c.g.forEach(function(m,w){const k=w.toLowerCase();w!=k&&($1(this,w),j1(this,k,m))},c)),c.j=d}function mm(c,d){const m=new yi;if(o.Image){const w=new Image;w.onload=h(zn,m,"TestLoadImage: loaded",!0,d,w),w.onerror=h(zn,m,"TestLoadImage: error",!1,d,w),w.onabort=h(zn,m,"TestLoadImage: abort",!1,d,w),w.ontimeout=h(zn,m,"TestLoadImage: timeout",!1,d,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else d(!1)}function _m(c,d){const m=new yi,w=new AbortController,k=setTimeout(()=>{w.abort(),zn(m,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:w.signal}).then(M=>{clearTimeout(k),M.ok?zn(m,"TestPingServer: ok",!0,d):zn(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),zn(m,"TestPingServer: error",!1,d)})}function zn(c,d,m,w,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),w(m)}catch{}}function ym(){this.g=new y}function Nu(c){this.i=c.Sb||null,this.h=c.ab||!1}g(Nu,f),Nu.prototype.g=function(){return new la(this.i,this.h)};function la(c,d){at.call(this),this.H=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(la,at),n=la.prototype,n.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=d,this.readyState=1,Si(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(d.body=c),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ri(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;K1(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function K1(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Ri(this):Si(this),this.readyState==3&&K1(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,Ri(this))},n.Na=function(c){this.g&&(this.response=c,Ri(this))},n.ga=function(){this.g&&Ri(this)};function Ri(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Si(c)}n.setRequestHeader=function(c,d){this.A.append(c,d)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=d.next();return c.join(`\r
`)};function Si(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(la.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Y1(c){let d="";return ps(c,function(m,w){d+=w,d+=":",d+=m,d+=`\r
`}),d}function bu(c,d,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=Y1(m),typeof c=="string"?m!=null&&Ei(m):ke(c,d,m))}function qe(c){at.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(qe,at);var Em=/^https?$/i,wm=["POST","PUT"];n=qe.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,d,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():b1.g(),this.g.onreadystatechange=E(l(this.Ca,this));try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(M){Q1(this,M);return}if(c=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var k in w)m.set(k,w[k]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const M of w.keys())m.set(M,w.get(M));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),k=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(wm,d,void 0)>=0)||w||k||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of m)this.g.setRequestHeader(M,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(M){Q1(this,M)}};function Q1(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.o=5,X1(c),ha(c)}function X1(c){c.A||(c.A=!0,Ze(c,"complete"),Ze(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ze(this,"complete"),Ze(this,"abort"),ha(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),qe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?J1(this):this.Xa())},n.Xa=function(){J1(this)};function J1(c){if(c.h&&typeof i<"u"){if(c.v&&Kn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ze(c,"readystatechange"),Kn(c)==4){c.h=!1;try{const M=c.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var w;if(w=M===0){let z=String(c.D).match(q1)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),w=!Em.test(z?z.toLowerCase():"")}m=w}if(m)Ze(c,"complete"),Ze(c,"success");else{c.o=6;try{var k=Kn(c)>2?c.g.statusText:""}catch{k=""}c.l=k+" ["+c.ca()+"]",X1(c)}}finally{ha(c)}}}}function ha(c,d){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,d||Ze(c,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Kn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return Kn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),wu(d)}};function Z1(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Im(c){const d={};c=(c.g&&Kn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(C(c[w]))continue;var m=im(c[w]);const k=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=d[k]||[];d[k]=M,M.push(m)}yu(d,function(w){return w.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pi(c,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||d}function ed(c){this.za=0,this.i=[],this.j=new yi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pi("baseRetryDelayMs",5e3,c),this.Za=Pi("retryDelaySeedMs",1e4,c),this.Ta=Pi("forwardChannelMaxRetries",2,c),this.va=Pi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new L1(c&&c.concurrentRequestLimit),this.Ba=new ym,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ed.prototype,n.ka=8,n.I=1,n.connect=function(c,d,m,w){Rt(0),this.W=c,this.H=d||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.J=ud(this,null,this.W),fa(this)};function xu(c){if(td(c),c.I==3){var d=c.V++,m=ln(c.J);if(ke(m,"SID",c.M),ke(m,"RID",d),ke(m,"TYPE","terminate"),Ni(c,m),d=new Wn(c,c.j,d),d.M=2,d.A=ua(ln(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=d.A,m=!0),m||(d.g=ld(d.j,null),d.g.ea(d.A)),d.F=Date.now(),ca(d)}cd(c)}function da(c){c.g&&(ku(c),c.g.cancel(),c.g=null)}function td(c){da(c),c.v&&(o.clearTimeout(c.v),c.v=null),pa(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function fa(c){if(!M1(c.h)&&!c.m){c.m=!0;var d=c.Ea;it||A(),Je||(it(),Je=!0),x.add(d,c),c.D=0}}function Tm(c,d){return F1(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=d.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=_i(l(c.Ea,c,d),ad(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const k=new Wn(this,this.j,c);let M=this.o;if(this.U&&(M?(M=Zo(M),ta(M,this.U)):M=this.U),this.u!==null||this.R||(k.J=M,M=null),this.S)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,d>4096){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=rd(this,k,d),m=ln(this.J),ke(m,"RID",c),ke(m,"CVER",22),this.G&&ke(m,"X-HTTP-Session-Id",this.G),Ni(this,m),M&&(this.R?d="headers="+Ei(Y1(M))+"&"+d:this.u&&bu(m,this.u,M)),Su(this.h,k),this.Ra&&ke(m,"TYPE","init"),this.S?(ke(m,"$req",d),ke(m,"SID","null"),k.U=!0,Au(k,m,null)):Au(k,m,d),this.I=2}}else this.I==3&&(c?nd(this,c):this.i.length==0||M1(this.h)||nd(this))};function nd(c,d){var m;d?m=d.l:m=c.V++;const w=ln(c.J);ke(w,"SID",c.M),ke(w,"RID",m),ke(w,"AID",c.K),Ni(c,w),c.u&&c.o&&bu(w,c.u,c.o),m=new Wn(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),d&&(c.i=d.G.concat(c.i)),d=rd(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Su(c.h,m),Au(m,w,d)}function Ni(c,d){c.H&&ps(c.H,function(m,w){ke(d,w,m)}),c.l&&ps({},function(m,w){ke(d,w,m)})}function rd(c,d,m){m=Math.min(c.i.length,m);const w=c.l?l(c.l.Ka,c.l,c):null;e:{var k=c.i;let fe=-1;for(;;){const et=["count="+m];fe==-1?m>0?(fe=k[0].g,et.push("ofs="+fe)):fe=0:et.push("ofs="+fe);let be=!0;for(let ct=0;ct<m;ct++){var M=k[ct].g;const hn=k[ct].map;if(M-=fe,M<0)fe=Math.max(0,k[ct].g-100),be=!1;else try{M="req"+M+"_"||"";try{var z=hn instanceof Map?hn:Object.entries(hn);for(const[Fr,Yn]of z){let Qn=Yn;a(Yn)&&(Qn=Wt(Yn)),et.push(M+Fr+"="+encodeURIComponent(Qn))}}catch(Fr){throw et.push(M+"type="+encodeURIComponent("_badmap")),Fr}}catch{w&&w(hn)}}if(be){z=et.join("&");break e}}z=void 0}return c=c.i.splice(0,m),d.G=c,z}function sd(c){if(!c.g&&!c.v){c.Y=1;var d=c.Da;it||A(),Je||(it(),Je=!0),x.add(d,c),c.A=0}}function Ou(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=_i(l(c.Da,c),ad(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,id(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=_i(l(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),da(this),id(this))};function ku(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function id(c){c.g=new Wn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var d=ln(c.na);ke(d,"RID","rpc"),ke(d,"SID",c.M),ke(d,"AID",c.K),ke(d,"CI",c.F?"0":"1"),!c.F&&c.ia&&ke(d,"TO",c.ia),ke(d,"TYPE","xmlhttp"),Ni(c,d),c.u&&c.o&&bu(d,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=ua(ln(d)),m.u=null,m.R=!0,k1(m,c)}n.Va=function(){this.C!=null&&(this.C=null,da(this),Ou(this),Rt(19))};function pa(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function od(c,d){var m=null;if(c.g==d){pa(c),ku(c),c.g=null;var w=2}else if(Ru(c.h,d))m=d.G,U1(c.h,d),w=1;else return;if(c.I!=0){if(d.o)if(w==1){m=d.u?d.u.length:0,d=Date.now()-d.F;var k=c.D;w=Pe(),Ze(w,new P1(w,m)),fa(c)}else sd(c);else if(k=d.m,k==3||k==0&&d.X>0||!(w==1&&Tm(c,d)||w==2&&Ou(c)))switch(m&&m.length>0&&(d=c.h,d.i=d.i.concat(m)),k){case 1:Mr(c,5);break;case 4:Mr(c,10);break;case 3:Mr(c,6);break;default:Mr(c,2)}}}function ad(c,d){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*d}function Mr(c,d){if(c.j.info("Error code "+d),d==2){var m=l(c.bb,c),w=c.Ua;const k=!w;w=new jn(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ii(w,"https"),ua(w),k?mm(w.toString(),m):_m(w.toString(),m)}else Rt(2);c.I=0,c.l&&c.l.pa(d),cd(c),td(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function cd(c){if(c.I=0,c.ja=[],c.l){const d=B1(c.h);(d.length!=0||c.i.length!=0)&&(S(c.ja,d),S(c.ja,c.i),c.h.i.length=0,v(c.i),c.i.length=0),c.l.oa()}}function ud(c,d,m){var w=m instanceof jn?ln(m):new jn(m);if(w.g!="")d&&(w.g=d+"."+w.g),Ti(w,w.u);else{var k=o.location;w=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;const M=new jn(null);w&&Ii(M,w),d&&(M.g=d),k&&Ti(M,k),m&&(M.h=m),w=M}return m=c.G,d=c.wa,m&&d&&ke(w,m,d),ke(w,"VER",c.ka),Ni(c,w),w}function ld(c,d,m){if(d&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Aa&&!c.ma?new qe(new Nu({ab:m})):new qe(c.ma),d.Fa(c.L),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hd(){}n=hd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ga(){}ga.prototype.g=function(c,d){return new Bt(c,d)};function Bt(c,d){at.call(this),this.g=new ed(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(c?c["X-WebChannel-Client-Profile"]=d.sa:c={"X-WebChannel-Client-Profile":d.sa}),this.g.U=c,(c=d&&d.Qb)&&!C(c)&&(this.g.u=c),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!C(d)&&(this.g.G=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Cs(this)}g(Bt,at),Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){xu(this.g)},Bt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=Wt(c),c=m);d.i.push(new cm(d.Ya++,c)),d.I==3&&fa(d)},Bt.prototype.N=function(){this.g.l=null,delete this.j,xu(this.g),delete this.g,Bt.Z.N.call(this)};function dd(c){b.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const m in d){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}g(dd,b);function fd(){V.call(this),this.status=1}g(fd,V);function Cs(c){this.g=c}g(Cs,hd),Cs.prototype.ra=function(){Ze(this.g,"a")},Cs.prototype.qa=function(c){Ze(this.g,new dd(c))},Cs.prototype.pa=function(c){Ze(this.g,new fd)},Cs.prototype.oa=function(){Ze(this.g,"b")},ga.prototype.createWebChannel=ga.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,gp=function(){return new ga},pp=function(){return Pe()},fp=B,ul={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},aa.NO_ERROR=0,aa.TIMEOUT=8,aa.HTTP_ERROR=6,Sa=aa,N1.COMPLETE="complete",dp=N1,p.EventType=I,I.OPEN="a",I.CLOSE="b",I.ERROR="c",I.MESSAGE="d",at.prototype.listen=at.prototype.J,Fi=p,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,hp=qe}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */const Fe=class Fe{};T(Fe,"FOLD_CASE",1),T(Fe,"LITERAL",2),T(Fe,"CLASS_NL",4),T(Fe,"DOT_NL",8),T(Fe,"ONE_LINE",16),T(Fe,"NON_GREEDY",32),T(Fe,"PERL_X",64),T(Fe,"UNICODE_GROUPS",128),T(Fe,"WAS_DOLLAR",256),T(Fe,"MATCH_NL",Fe.CLASS_NL|Fe.DOT_NL),T(Fe,"PERL",Fe.CLASS_NL|Fe.ONE_LINE|Fe.PERL_X|Fe.UNICODE_GROUPS),T(Fe,"POSIX",0),T(Fe,"UNANCHORED",0),T(Fe,"ANCHOR_START",1),T(Fe,"ANCHOR_BOTH",2);let Q=Fe;class L{static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}T(L,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]));const _=class _{};T(_,"CASE_ORBIT",new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]])),T(_,"C",[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]]),T(_,"Cc",[[0,31,1],[127,159,1]]),T(_,"Cf",[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]]),T(_,"Co",[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]]),T(_,"Cs",[[55296,57343,1]]),T(_,"L",[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),T(_,"foldL",[[837,837,1]]),T(_,"Ll",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]]),T(_,"foldLl",[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]]),T(_,"Lm",[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]]),T(_,"Lo",[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),T(_,"Lt",[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]]),T(_,"foldLt",[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]]),T(_,"Lu",[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]]),T(_,"Upper",_.Lu),T(_,"foldLu",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]]),T(_,"M",[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),T(_,"foldM",[[921,953,32],[8126,8126,1]]),T(_,"Mc",[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]]),T(_,"Me",[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]]),T(_,"Mn",[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),T(_,"foldMn",[[921,953,32],[8126,8126,1]]),T(_,"N",[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]]),T(_,"Nd",[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]]),T(_,"Nl",[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]]),T(_,"No",[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]]),T(_,"P",[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),T(_,"Pc",[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]]),T(_,"Pd",[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]]),T(_,"Pe",[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]]),T(_,"Pf",[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]]),T(_,"Pi",[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]]),T(_,"Po",[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),T(_,"Ps",[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]]),T(_,"S",[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),T(_,"Sc",[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]]),T(_,"Sk",[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]]),T(_,"Sm",[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]]),T(_,"So",[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),T(_,"Z",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]]),T(_,"Zl",[[8232,8232,1]]),T(_,"Zp",[[8233,8233,1]]),T(_,"Zs",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]]),T(_,"Adlam",[[125184,125259,1],[125264,125273,1],[125278,125279,1]]),T(_,"Ahom",[[71424,71450,1],[71453,71467,1],[71472,71494,1]]),T(_,"Anatolian_Hieroglyphs",[[82944,83526,1]]),T(_,"Arabic",[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]]),T(_,"Armenian",[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]]),T(_,"Avestan",[[68352,68405,1],[68409,68415,1]]),T(_,"Balinese",[[6912,6988,1],[6992,7038,1]]),T(_,"Bamum",[[42656,42743,1],[92160,92728,1]]),T(_,"Bassa_Vah",[[92880,92909,1],[92912,92917,1]]),T(_,"Batak",[[7104,7155,1],[7164,7167,1]]),T(_,"Bengali",[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]]),T(_,"Bhaiksuki",[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]]),T(_,"Bopomofo",[[746,747,1],[12549,12591,1],[12704,12735,1]]),T(_,"Brahmi",[[69632,69709,1],[69714,69749,1],[69759,69759,1]]),T(_,"Braille",[[10240,10495,1]]),T(_,"Buginese",[[6656,6683,1],[6686,6687,1]]),T(_,"Buhid",[[5952,5971,1]]),T(_,"Canadian_Aboriginal",[[5120,5759,1],[6320,6389,1],[72368,72383,1]]),T(_,"Carian",[[66208,66256,1]]),T(_,"Caucasian_Albanian",[[66864,66915,1],[66927,66927,1]]),T(_,"Chakma",[[69888,69940,1],[69942,69959,1]]),T(_,"Cham",[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]]),T(_,"Cherokee",[[5024,5109,1],[5112,5117,1],[43888,43967,1]]),T(_,"Chorasmian",[[69552,69579,1]]),T(_,"Common",[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]]),T(_,"foldCommon",[[924,956,32]]),T(_,"Coptic",[[994,1007,1],[11392,11507,1],[11513,11519,1]]),T(_,"Cuneiform",[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]]),T(_,"Cypriot",[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]]),T(_,"Cypro_Minoan",[[77712,77810,1]]),T(_,"Cyrillic",[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]]),T(_,"Deseret",[[66560,66639,1]]),T(_,"Devanagari",[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]]),T(_,"Dives_Akuru",[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]]),T(_,"Dogra",[[71680,71739,1]]),T(_,"Duployan",[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]]),T(_,"Egyptian_Hieroglyphs",[[77824,78933,1]]),T(_,"Elbasan",[[66816,66855,1]]),T(_,"Elymaic",[[69600,69622,1]]),T(_,"Ethiopic",[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]]),T(_,"Georgian",[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]]),T(_,"Glagolitic",[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]]),T(_,"Gothic",[[66352,66378,1]]),T(_,"Grantha",[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]]),T(_,"Greek",[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]]),T(_,"foldGreek",[[181,837,656]]),T(_,"Gujarati",[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]]),T(_,"Gunjala_Gondi",[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]]),T(_,"Gurmukhi",[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]]),T(_,"Han",[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),T(_,"Hangul",[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]]),T(_,"Hanifi_Rohingya",[[68864,68903,1],[68912,68921,1]]),T(_,"Hanunoo",[[5920,5940,1]]),T(_,"Hatran",[[67808,67826,1],[67828,67829,1],[67835,67839,1]]),T(_,"Hebrew",[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]]),T(_,"Hiragana",[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]]),T(_,"Imperial_Aramaic",[[67648,67669,1],[67671,67679,1]]),T(_,"Inherited",[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]]),T(_,"foldInherited",[[921,953,32],[8126,8126,1]]),T(_,"Inscriptional_Pahlavi",[[68448,68466,1],[68472,68479,1]]),T(_,"Inscriptional_Parthian",[[68416,68437,1],[68440,68447,1]]),T(_,"Javanese",[[43392,43469,1],[43472,43481,1],[43486,43487,1]]),T(_,"Kaithi",[[69760,69826,1],[69837,69837,1]]),T(_,"Kannada",[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]]),T(_,"Katakana",[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]]),T(_,"Kawi",[[73472,73488,1],[73490,73530,1],[73534,73561,1]]),T(_,"Kayah_Li",[[43264,43309,1],[43311,43311,1]]),T(_,"Kharoshthi",[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]]),T(_,"Khitan_Small_Script",[[94180,101120,6940],[101121,101589,1]]),T(_,"Khmer",[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]]),T(_,"Khojki",[[70144,70161,1],[70163,70209,1]]),T(_,"Khudawadi",[[70320,70378,1],[70384,70393,1]]),T(_,"Lao",[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]]),T(_,"Latin",[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]]),T(_,"Lepcha",[[7168,7223,1],[7227,7241,1],[7245,7247,1]]),T(_,"Limbu",[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]]),T(_,"Linear_A",[[67072,67382,1],[67392,67413,1],[67424,67431,1]]),T(_,"Linear_B",[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]]),T(_,"Lisu",[[42192,42239,1],[73648,73648,1]]),T(_,"Lycian",[[66176,66204,1]]),T(_,"Lydian",[[67872,67897,1],[67903,67903,1]]),T(_,"Mahajani",[[69968,70006,1]]),T(_,"Makasar",[[73440,73464,1]]),T(_,"Malayalam",[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]]),T(_,"Mandaic",[[2112,2139,1],[2142,2142,1]]),T(_,"Manichaean",[[68288,68326,1],[68331,68342,1]]),T(_,"Marchen",[[72816,72847,1],[72850,72871,1],[72873,72886,1]]),T(_,"Masaram_Gondi",[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]]),T(_,"Medefaidrin",[[93760,93850,1]]),T(_,"Meetei_Mayek",[[43744,43766,1],[43968,44013,1],[44016,44025,1]]),T(_,"Mende_Kikakui",[[124928,125124,1],[125127,125142,1]]),T(_,"Meroitic_Cursive",[[68e3,68023,1],[68028,68047,1],[68050,68095,1]]),T(_,"Meroitic_Hieroglyphs",[[67968,67999,1]]),T(_,"Miao",[[93952,94026,1],[94031,94087,1],[94095,94111,1]]),T(_,"Modi",[[71168,71236,1],[71248,71257,1]]),T(_,"Mongolian",[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]]),T(_,"Mro",[[92736,92766,1],[92768,92777,1],[92782,92783,1]]),T(_,"Multani",[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]]),T(_,"Myanmar",[[4096,4255,1],[43488,43518,1],[43616,43647,1]]),T(_,"Nabataean",[[67712,67742,1],[67751,67759,1]]),T(_,"Nag_Mundari",[[124112,124153,1]]),T(_,"Nandinagari",[[72096,72103,1],[72106,72151,1],[72154,72164,1]]),T(_,"New_Tai_Lue",[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]]),T(_,"Newa",[[70656,70747,1],[70749,70753,1]]),T(_,"Nko",[[1984,2042,1],[2045,2047,1]]),T(_,"Nushu",[[94177,110960,16783],[110961,111355,1]]),T(_,"Nyiakeng_Puachue_Hmong",[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]]),T(_,"Ogham",[[5760,5788,1]]),T(_,"Ol_Chiki",[[7248,7295,1]]),T(_,"Old_Hungarian",[[68736,68786,1],[68800,68850,1],[68858,68863,1]]),T(_,"Old_Italic",[[66304,66339,1],[66349,66351,1]]),T(_,"Old_North_Arabian",[[68224,68255,1]]),T(_,"Old_Permic",[[66384,66426,1]]),T(_,"Old_Persian",[[66464,66499,1],[66504,66517,1]]),T(_,"Old_Sogdian",[[69376,69415,1]]),T(_,"Old_South_Arabian",[[68192,68223,1]]),T(_,"Old_Turkic",[[68608,68680,1]]),T(_,"Old_Uyghur",[[69488,69513,1]]),T(_,"Oriya",[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]]),T(_,"Osage",[[66736,66771,1],[66776,66811,1]]),T(_,"Osmanya",[[66688,66717,1],[66720,66729,1]]),T(_,"Pahawh_Hmong",[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]]),T(_,"Palmyrene",[[67680,67711,1]]),T(_,"Pau_Cin_Hau",[[72384,72440,1]]),T(_,"Phags_Pa",[[43072,43127,1]]),T(_,"Phoenician",[[67840,67867,1],[67871,67871,1]]),T(_,"Psalter_Pahlavi",[[68480,68497,1],[68505,68508,1],[68521,68527,1]]),T(_,"Rejang",[[43312,43347,1],[43359,43359,1]]),T(_,"Runic",[[5792,5866,1],[5870,5880,1]]),T(_,"Samaritan",[[2048,2093,1],[2096,2110,1]]),T(_,"Saurashtra",[[43136,43205,1],[43214,43225,1]]),T(_,"Sharada",[[70016,70111,1]]),T(_,"Shavian",[[66640,66687,1]]),T(_,"Siddham",[[71040,71093,1],[71096,71133,1]]),T(_,"SignWriting",[[120832,121483,1],[121499,121503,1],[121505,121519,1]]),T(_,"Sinhala",[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]]),T(_,"Sogdian",[[69424,69465,1]]),T(_,"Sora_Sompeng",[[69840,69864,1],[69872,69881,1]]),T(_,"Soyombo",[[72272,72354,1]]),T(_,"Sundanese",[[7040,7103,1],[7360,7367,1]]),T(_,"Syloti_Nagri",[[43008,43052,1]]),T(_,"Syriac",[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]]),T(_,"Tagalog",[[5888,5909,1],[5919,5919,1]]),T(_,"Tagbanwa",[[5984,5996,1],[5998,6e3,1],[6002,6003,1]]),T(_,"Tai_Le",[[6480,6509,1],[6512,6516,1]]),T(_,"Tai_Tham",[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]]),T(_,"Tai_Viet",[[43648,43714,1],[43739,43743,1]]),T(_,"Takri",[[71296,71353,1],[71360,71369,1]]),T(_,"Tamil",[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]]),T(_,"Tangsa",[[92784,92862,1],[92864,92873,1]]),T(_,"Tangut",[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]]),T(_,"Telugu",[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]]),T(_,"Thaana",[[1920,1969,1]]),T(_,"Thai",[[3585,3642,1],[3648,3675,1]]),T(_,"Tibetan",[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]]),T(_,"Tifinagh",[[11568,11623,1],[11631,11632,1],[11647,11647,1]]),T(_,"Tirhuta",[[70784,70855,1],[70864,70873,1]]),T(_,"Toto",[[123536,123566,1]]),T(_,"Ugaritic",[[66432,66461,1],[66463,66463,1]]),T(_,"Vai",[[42240,42539,1]]),T(_,"Vithkuqi",[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]]),T(_,"Wancho",[[123584,123641,1],[123647,123647,1]]),T(_,"Warang_Citi",[[71840,71922,1],[71935,71935,1]]),T(_,"Yezidi",[[69248,69289,1],[69291,69293,1],[69296,69297,1]]),T(_,"Yi",[[40960,42124,1],[42128,42182,1]]),T(_,"Zanabazar_Square",[[72192,72263,1]]),T(_,"CATEGORIES",new Map([["C",_.C],["Cc",_.Cc],["Cf",_.Cf],["Co",_.Co],["Cs",_.Cs],["L",_.L],["Ll",_.Ll],["Lm",_.Lm],["Lo",_.Lo],["Lt",_.Lt],["Lu",_.Lu],["M",_.M],["Mc",_.Mc],["Me",_.Me],["Mn",_.Mn],["N",_.N],["Nd",_.Nd],["Nl",_.Nl],["No",_.No],["P",_.P],["Pc",_.Pc],["Pd",_.Pd],["Pe",_.Pe],["Pf",_.Pf],["Pi",_.Pi],["Po",_.Po],["Ps",_.Ps],["S",_.S],["Sc",_.Sc],["Sk",_.Sk],["Sm",_.Sm],["So",_.So],["Z",_.Z],["Zl",_.Zl],["Zp",_.Zp],["Zs",_.Zs]])),T(_,"SCRIPTS",new Map([["Adlam",_.Adlam],["Ahom",_.Ahom],["Anatolian_Hieroglyphs",_.Anatolian_Hieroglyphs],["Arabic",_.Arabic],["Armenian",_.Armenian],["Avestan",_.Avestan],["Balinese",_.Balinese],["Bamum",_.Bamum],["Bassa_Vah",_.Bassa_Vah],["Batak",_.Batak],["Bengali",_.Bengali],["Bhaiksuki",_.Bhaiksuki],["Bopomofo",_.Bopomofo],["Brahmi",_.Brahmi],["Braille",_.Braille],["Buginese",_.Buginese],["Buhid",_.Buhid],["Canadian_Aboriginal",_.Canadian_Aboriginal],["Carian",_.Carian],["Caucasian_Albanian",_.Caucasian_Albanian],["Chakma",_.Chakma],["Cham",_.Cham],["Cherokee",_.Cherokee],["Chorasmian",_.Chorasmian],["Common",_.Common],["Coptic",_.Coptic],["Cuneiform",_.Cuneiform],["Cypriot",_.Cypriot],["Cypro_Minoan",_.Cypro_Minoan],["Cyrillic",_.Cyrillic],["Deseret",_.Deseret],["Devanagari",_.Devanagari],["Dives_Akuru",_.Dives_Akuru],["Dogra",_.Dogra],["Duployan",_.Duployan],["Egyptian_Hieroglyphs",_.Egyptian_Hieroglyphs],["Elbasan",_.Elbasan],["Elymaic",_.Elymaic],["Ethiopic",_.Ethiopic],["Georgian",_.Georgian],["Glagolitic",_.Glagolitic],["Gothic",_.Gothic],["Grantha",_.Grantha],["Greek",_.Greek],["Gujarati",_.Gujarati],["Gunjala_Gondi",_.Gunjala_Gondi],["Gurmukhi",_.Gurmukhi],["Han",_.Han],["Hangul",_.Hangul],["Hanifi_Rohingya",_.Hanifi_Rohingya],["Hanunoo",_.Hanunoo],["Hatran",_.Hatran],["Hebrew",_.Hebrew],["Hiragana",_.Hiragana],["Imperial_Aramaic",_.Imperial_Aramaic],["Inherited",_.Inherited],["Inscriptional_Pahlavi",_.Inscriptional_Pahlavi],["Inscriptional_Parthian",_.Inscriptional_Parthian],["Javanese",_.Javanese],["Kaithi",_.Kaithi],["Kannada",_.Kannada],["Katakana",_.Katakana],["Kawi",_.Kawi],["Kayah_Li",_.Kayah_Li],["Kharoshthi",_.Kharoshthi],["Khitan_Small_Script",_.Khitan_Small_Script],["Khmer",_.Khmer],["Khojki",_.Khojki],["Khudawadi",_.Khudawadi],["Lao",_.Lao],["Latin",_.Latin],["Lepcha",_.Lepcha],["Limbu",_.Limbu],["Linear_A",_.Linear_A],["Linear_B",_.Linear_B],["Lisu",_.Lisu],["Lycian",_.Lycian],["Lydian",_.Lydian],["Mahajani",_.Mahajani],["Makasar",_.Makasar],["Malayalam",_.Malayalam],["Mandaic",_.Mandaic],["Manichaean",_.Manichaean],["Marchen",_.Marchen],["Masaram_Gondi",_.Masaram_Gondi],["Medefaidrin",_.Medefaidrin],["Meetei_Mayek",_.Meetei_Mayek],["Mende_Kikakui",_.Mende_Kikakui],["Meroitic_Cursive",_.Meroitic_Cursive],["Meroitic_Hieroglyphs",_.Meroitic_Hieroglyphs],["Miao",_.Miao],["Modi",_.Modi],["Mongolian",_.Mongolian],["Mro",_.Mro],["Multani",_.Multani],["Myanmar",_.Myanmar],["Nabataean",_.Nabataean],["Nag_Mundari",_.Nag_Mundari],["Nandinagari",_.Nandinagari],["New_Tai_Lue",_.New_Tai_Lue],["Newa",_.Newa],["Nko",_.Nko],["Nushu",_.Nushu],["Nyiakeng_Puachue_Hmong",_.Nyiakeng_Puachue_Hmong],["Ogham",_.Ogham],["Ol_Chiki",_.Ol_Chiki],["Old_Hungarian",_.Old_Hungarian],["Old_Italic",_.Old_Italic],["Old_North_Arabian",_.Old_North_Arabian],["Old_Permic",_.Old_Permic],["Old_Persian",_.Old_Persian],["Old_Sogdian",_.Old_Sogdian],["Old_South_Arabian",_.Old_South_Arabian],["Old_Turkic",_.Old_Turkic],["Old_Uyghur",_.Old_Uyghur],["Oriya",_.Oriya],["Osage",_.Osage],["Osmanya",_.Osmanya],["Pahawh_Hmong",_.Pahawh_Hmong],["Palmyrene",_.Palmyrene],["Pau_Cin_Hau",_.Pau_Cin_Hau],["Phags_Pa",_.Phags_Pa],["Phoenician",_.Phoenician],["Psalter_Pahlavi",_.Psalter_Pahlavi],["Rejang",_.Rejang],["Runic",_.Runic],["Samaritan",_.Samaritan],["Saurashtra",_.Saurashtra],["Sharada",_.Sharada],["Shavian",_.Shavian],["Siddham",_.Siddham],["SignWriting",_.SignWriting],["Sinhala",_.Sinhala],["Sogdian",_.Sogdian],["Sora_Sompeng",_.Sora_Sompeng],["Soyombo",_.Soyombo],["Sundanese",_.Sundanese],["Syloti_Nagri",_.Syloti_Nagri],["Syriac",_.Syriac],["Tagalog",_.Tagalog],["Tagbanwa",_.Tagbanwa],["Tai_Le",_.Tai_Le],["Tai_Tham",_.Tai_Tham],["Tai_Viet",_.Tai_Viet],["Takri",_.Takri],["Tamil",_.Tamil],["Tangsa",_.Tangsa],["Tangut",_.Tangut],["Telugu",_.Telugu],["Thaana",_.Thaana],["Thai",_.Thai],["Tibetan",_.Tibetan],["Tifinagh",_.Tifinagh],["Tirhuta",_.Tirhuta],["Toto",_.Toto],["Ugaritic",_.Ugaritic],["Vai",_.Vai],["Vithkuqi",_.Vithkuqi],["Wancho",_.Wancho],["Warang_Citi",_.Warang_Citi],["Yezidi",_.Yezidi],["Yi",_.Yi],["Zanabazar_Square",_.Zanabazar_Square]])),T(_,"FOLD_CATEGORIES",new Map([["L",_.foldL],["Ll",_.foldLl],["Lt",_.foldLt],["Lu",_.foldLu],["M",_.foldM],["Mn",_.foldMn]])),T(_,"FOLD_SCRIPT",new Map([["Common",_.foldCommon],["Greek",_.foldGreek],["Inherited",_.foldInherited]]));let Et=_;class oe{static is32(e,t){let r=0,s=e.length;for(;r<s;){let i=r+Math.floor((s-r)/2),o=e[i];if(o[0]<=t&&t<=o[1])return(t-o[0])%o[2]===0;t<o[0]?s=i:r=i+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(Et.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(Et.L,e)||this.is(Et.M,e)||this.is(Et.N,e)||this.is(Et.P,e)||this.is(Et.S,e)}static simpleFold(e){if(Et.CASE_ORBIT.has(e))return Et.CASE_ORBIT.get(e);const t=L.toLowerCase(e);return t!==e?t:L.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return L.CODES.get("A")<=e&&e<=L.CODES.get("Z")&&(e|=32),L.CODES.get("A")<=t&&t<=L.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}T(oe,"MAX_RUNE",1114111),T(oe,"MAX_ASCII",127),T(oe,"MAX_LATIN1",255),T(oe,"MAX_BMP",65535),T(oe,"MIN_FOLD",65),T(oe,"MAX_FOLD",125251);class ue{static emptyInts(){return[]}static isalnum(e){return L.CODES.get("0")<=e&&e<=L.CODES.get("9")||L.CODES.get("a")<=e&&e<=L.CODES.get("z")||L.CODES.get("A")<=e&&e<=L.CODES.get("Z")}static unhex(e){return L.CODES.get("0")<=e&&e<=L.CODES.get("9")?e-L.CODES.get("0"):L.CODES.get("a")<=e&&e<=L.CODES.get("f")?e-L.CODES.get("a")+10:L.CODES.get("A")<=e&&e<=L.CODES.get("F")?e-L.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(oe.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case L.CODES.get('"'):t+='\\"';break;case L.CODES.get("\\"):t+="\\\\";break;case L.CODES.get("	"):t+="\\t";break;case L.CODES.get(`
`):t+="\\n";break;case L.CODES.get("\r"):t+="\\r";break;case L.CODES.get("\b"):t+="\\b";break;case L.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return L.CODES.get("a")<=e&&e<=L.CODES.get("z")||L.CODES.get("A")<=e&&e<=L.CODES.get("Z")||L.CODES.get("0")<=e&&e<=L.CODES.get("9")||e===L.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===L.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===L.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>oe.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[r++],a=e[r++],u=e[r++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{let o=e[r++],a=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}}T(ue,"METACHARACTERS","\\.+*?()|[]{}^$"),T(ue,"EMPTY_BEGIN_LINE",1),T(ue,"EMPTY_END_LINE",2),T(ue,"EMPTY_BEGIN_TEXT",4),T(ue,"EMPTY_END_TEXT",8),T(ue,"EMPTY_WORD_BOUNDARY",16),T(ue,"EMPTY_NO_WORD_BOUNDARY",32),T(ue,"EMPTY_ALL",-1);const mp=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)},ro=class ro{getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===ro.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===ro.Encoding.UTF_16}};T(ro,"Encoding",mp(["UTF_16","UTF_8"]));let _r=ro;class Cd extends _r{constructor(e=null){super(),this.bytes=e}getEncoding(){return _r.Encoding.UTF_8}asCharSequence(){return ue.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class m4 extends _r{constructor(e=null){super(),this.charSequence=e}getEncoding(){return _r.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class $a{static utf16(e){return new m4(e)}static utf8(e){return Array.isArray(e)?new Cd(e):new Cd(ue.stringToUtf8ByteArray(e))}}class Sc extends Error{constructor(e){super(e),this.name="RE2JSException"}}class $e extends Sc{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class _4 extends Sc{constructor(e){super(e),this.name="RE2JSCompileException"}}class Sn extends Sc{constructor(e){super(e),this.name="RE2JSGroupException"}}class y4 extends Sc{constructor(e){super(e),this.name="RE2JSFlagsException"}}class E4{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===L.CODES["\\"]||r===L.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof _r?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput($a.utf8(t)):this.resetMatcherInput($a.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Sn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Sn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new Sn(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new Sn(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Sn("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new Sn("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,Q.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,Q.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new Sn(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,Q.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?ue.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++){if(e.codePointAt(i)===L.CODES.get("\\")){r<i&&(t+=e.substring(r,i)),i++,r=i;continue}if(e.codePointAt(i)===L.CODES.get("$")){let o=e.codePointAt(i+1);if(L.CODES.get("0")<=o&&o<=L.CODES.get("9")){let a=o-L.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<L.CODES.get("0")||o>L.CODES.get("9")||a*10+o-L.CODES.get("0")>this.patternGroupCount));i++)a=a*10+o-L.CODES.get("0");if(a>this.patternGroupCount)throw new Sn(`n > number of groups: ${a}`);const u=this.group(a);u!==null&&(t+=u),r=i,i--;continue}else if(o===L.CODES.get("{")){r<i&&(t+=e.substring(r,i)),i++;let a=i+1;for(;a<e.length&&e.codePointAt(a)!==L.CODES.get("}")&&e.codePointAt(a)!==L.CODES.get(" ");)a++;if(a===e.length||e.codePointAt(a)!==L.CODES.get("}"))throw new Sn("named capture group is missing trailing '}'");const u=e.substring(i+1,a);t+=this.group(u),r=a+1}}}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalPerl(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===L.CODES.get("$")){let o=e.codePointAt(i+1);if(L.CODES.get("$")===o){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(L.CODES.get("&")===o){r<i&&(t+=e.substring(r,i));const a=this.group(0);a!==null?t+=a:t+="$&",i++,r=i+1;continue}else if(L.CODES.get("1")<=o&&o<=L.CODES.get("9")){let a=o-L.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<L.CODES.get("0")||o>L.CODES.get("9")||a*10+o-L.CODES.get("0")>this.patternGroupCount));i++)a=a*10+o-L.CODES.get("0");if(a>this.patternGroupCount){t+=`$${a}`,r=i,i--;continue}const u=this.group(a);u!==null&&(t+=u),r=i,i--;continue}else if(o===L.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let a=i+1;for(;a<e.length&&e.codePointAt(a)!==L.CODES.get(">")&&e.codePointAt(a)!==L.CODES.get(" ");)a++;if(a===e.length||e.codePointAt(a)!==L.CODES.get(">")){t+=e.substring(i-1,a+1),r=a+1;continue}const u=e.substring(i+1,a);Object.prototype.hasOwnProperty.call(this.namedGroups,u)?t+=this.group(u):t+=`$<${u}>`,r=a+1}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";for(this.reset();this.find()&&(s+=this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}}class Zn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class w4 extends Zn{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return Zn.EOF();let t=this.bytes[e++]&255;return(t&128)===0?t<<3|1:(t&224)===192?(t=t&31,e>=this.end?Zn.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?Zn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?Zn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4))}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let s=e-1;if(t=this.bytes[s--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),t=this.step(s)>>3}}const r=e<this.end?this.step(e)>>3:-1;return ue.emptyOpContext(t,r)}indexOf(e,t,r=0){let s=t.length;if(s===0)return-1;let i=e.length;for(let o=r;o<=i-s;o++)for(let a=0;a<s&&e[o+a]===t[a];a++)if(a===s-1)return o;return-1}}class I4 extends Zn{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|ue.charCount(t)}else return Zn.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return ue.emptyOpContext(t,r)}}class Ge{static fromUTF8(e,t=0,r=e.length){return new w4(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new I4(e,t,r)}}const re=class re{static isPseudoOp(e){return e>=re.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===L.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new re(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=re.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=re.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case re.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case re.Op.EMPTY_MATCH:e+="(?:)";break;case re.Op.STAR:case re.Op.PLUS:case re.Op.QUEST:case re.Op.REPEAT:{const t=this.subs[0];switch(t.op>re.Op.CAPTURE||t.op===re.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case re.Op.STAR:e+="*";break;case re.Op.PLUS:e+="+";break;case re.Op.QUEST:e+="?";break;case re.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&Q.NON_GREEDY)!==0&&(e+="?");break}case re.Op.CONCAT:{for(let t of this.subs)t.op===re.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case re.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case re.Op.LITERAL:(this.flags&Q.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=ue.escapeRune(t);(this.flags&Q.FOLD_CASE)!==0&&(e+=")");break;case re.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case re.Op.ANY_CHAR:e+="(?s:.)";break;case re.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==re.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case re.Op.BEGIN_TEXT:e+="\\A";break;case re.Op.END_TEXT:(this.flags&Q.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case re.Op.BEGIN_LINE:e+="^";break;case re.Op.END_LINE:e+="$";break;case re.Op.WORD_BOUNDARY:e+="\\b";break;case re.Op.NO_WORD_BOUNDARY:e+="\\B";break;case re.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===oe.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=re.quoteIfHyphen(r),e+=ue.escapeRune(r),r!==s&&(e+="-",e+=re.quoteIfHyphen(s),e+=ue.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=re.quoteIfHyphen(r),e+=ue.escapeRune(r),r!==s&&(e+="-",e+=re.quoteIfHyphen(s),e+=ue.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===re.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof re)||this.op!==e.op)return!1;switch(this.op){case re.Op.END_TEXT:{if((this.flags&Q.WAS_DOLLAR)!==(e.flags&Q.WAS_DOLLAR))return!1;break}case re.Op.LITERAL:case re.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case re.Op.ALTERNATE:case re.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case re.Op.STAR:case re.Op.PLUS:case re.Op.QUEST:{if((this.flags&Q.NON_GREEDY)!==(e.flags&Q.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case re.Op.REPEAT:{if((this.flags&Q.NON_GREEDY)!==(e.flags&Q.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case re.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}};T(re,"Op",mp(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]));let U=re;const Se=class Se{static isRuneOp(e){return Se.RUNE<=e&&e<=Se.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=ue.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const s=this.runes[0];return(this.arg&Q.FOLD_CASE)!==0?oe.equalsIgnoreCase(s,e):e===s}for(let s=0;s<this.runes.length&&s<=8;s+=2){if(e<this.runes[s])return!1;if(e<=this.runes[s+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const s=t+((r-t)/2|0);if(this.runes[2*s]<=e){if(e<=this.runes[2*s+1])return!0;t=s+1}else r=s}return!1}toString(){switch(this.op){case Se.ALT:return`alt -> ${this.out}, ${this.arg}`;case Se.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Se.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Se.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Se.MATCH:return"match";case Se.FAIL:return"fail";case Se.NOP:return`nop -> ${this.out}`;case Se.RUNE:return this.runes===null?"rune <null>":["rune ",Se.escapeRunes(this.runes),(this.arg&Q.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case Se.RUNE1:return`rune1 ${Se.escapeRunes(this.runes)} -> ${this.out}`;case Se.RUNE_ANY:return`any -> ${this.out}`;case Se.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}};T(Se,"ALT",1),T(Se,"ALT_MATCH",2),T(Se,"CAPTURE",3),T(Se,"EMPTY_WIDTH",4),T(Se,"FAIL",5),T(Se,"MATCH",6),T(Se,"NOP",7),T(Se,"RUNE",8),T(Se,"RUNE1",9),T(Se,"RUNE_ANY",10),T(Se,"RUNE_ANY_NOT_NL",11);let le=Se;class T4{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new le(e))}skipNop(e){let t=this.inst[e];for(;t.op===le.NOP||t.op===le.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!le.isRuneOp(t.op)||t.runes.length!==1)return[t.op===le.MATCH,e];for(;le.isRuneOp(t.op)&&t.runes.length===1&&(t.arg&Q.FOLD_CASE)===0;)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===le.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case le.EMPTY_WIDTH:e|=r.arg;break;case le.FAIL:return-1;case le.CAPTURE:case le.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return(e&1)===0?t.out:t.arg}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];(e&1)===0?(e=r.out,r.out=t):(e=r.arg,r.arg=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const i=this.next(r);if(i===0)break;r=i}const s=this.inst[r>>1];return(r&1)===0?s.out=t:s.arg=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class ya{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class Hi{static ANY_RUNE_NOT_NL(){return[0,L.CODES.get(`
`)-1,L.CODES.get(`
`)+1,oe.MAX_RUNE]}static ANY_RUNE(){return[0,oe.MAX_RUNE]}static compileRegexp(e){const t=new Hi,r=t.compile(e);return t.prog.patch(r.out,t.newInst(le.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new T4,this.newInst(le.FAIL)}newInst(e){return this.prog.addInst(e),new ya(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(le.NOP);return e.out=e.i<<1,e}fail(){return new ya}cap(e){const t=this.newInst(le.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new ya(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(le.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(le.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(le.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new ya(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(le.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(le.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=Q.FOLD_CASE,(e.length!==1||oe.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=r.i<<1,(t&Q.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?s.op=le.RUNE1:e.length===2&&e[0]===0&&e[1]===oe.MAX_RUNE?s.op=le.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===L.CODES.get(`
`)-1&&e[2]===L.CODES.get(`
`)+1&&e[3]===oe.MAX_RUNE&&(s.op=le.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case U.Op.NO_MATCH:return this.fail();case U.Op.EMPTY_MATCH:return this.nop();case U.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case U.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case U.Op.ANY_CHAR_NOT_NL:return this.rune(Hi.ANY_RUNE_NOT_NL(),0);case U.Op.ANY_CHAR:return this.rune(Hi.ANY_RUNE(),0);case U.Op.BEGIN_LINE:return this.empty(ue.EMPTY_BEGIN_LINE);case U.Op.END_LINE:return this.empty(ue.EMPTY_END_LINE);case U.Op.BEGIN_TEXT:return this.empty(ue.EMPTY_BEGIN_TEXT);case U.Op.END_TEXT:return this.empty(ue.EMPTY_END_TEXT);case U.Op.WORD_BOUNDARY:return this.empty(ue.EMPTY_WORD_BOUNDARY);case U.Op.NO_WORD_BOUNDARY:return this.empty(ue.EMPTY_NO_WORD_BOUNDARY);case U.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case U.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&Q.NON_GREEDY)!==0);case U.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&Q.NON_GREEDY)!==0);case U.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&Q.NON_GREEDY)!==0);case U.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}}case U.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}}default:throw new _4("regexp: unhandled case in compile")}}}class Xt{static simplify(e){if(e===null)return null;switch(e.op){case U.Op.CAPTURE:case U.Op.CONCAT:case U.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const s=e.subs[r],i=Xt.simplify(s);t===e&&i!==s&&(t=U.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=i)}return t}case U.Op.STAR:case U.Op.PLUS:case U.Op.QUEST:{const t=Xt.simplify(e.subs[0]);return Xt.simplify1(e.op,e.flags,t,e)}case U.Op.REPEAT:{if(e.min===0&&e.max===0)return new U(U.Op.EMPTY_MATCH);const t=Xt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Xt.simplify1(U.Op.STAR,e.flags,t,null);if(e.min===1)return Xt.simplify1(U.Op.PLUS,e.flags,t,null);const s=new U(U.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(Xt.simplify1(U.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),s}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=Xt.simplify1(U.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new U(U.Op.CONCAT);o.subs=[t,s],s=Xt.simplify1(U.Op.QUEST,e.flags,o,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new U(U.Op.CONCAT);return s.subs=r.slice(0),s}return new U(U.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){return r.op===U.Op.EMPTY_MATCH||e===r.op&&(t&Q.NON_GREEDY)===(r.flags&Q.NON_GREEDY)?r:(s!==null&&s.op===e&&(s.flags&Q.NON_GREEDY)===(t&Q.NON_GREEDY)&&r===s.subs[0]||(s=new U(e),s.flags=t,s.subs=[r]),s)}}class Ie{constructor(e,t){this.sign=e,this.cls=t}}const Rd=[48,57],Sd=[9,10,12,13,32,32],Pd=[48,57,65,90,95,95,97,122],Nd=new Map([["\\d",new Ie(1,Rd)],["\\D",new Ie(-1,Rd)],["\\s",new Ie(1,Sd)],["\\S",new Ie(-1,Sd)],["\\w",new Ie(1,Pd)],["\\W",new Ie(-1,Pd)]]),bd=[48,57,65,90,97,122],xd=[65,90,97,122],Od=[0,127],kd=[9,9,32,32],Dd=[0,31,127,127],Vd=[48,57],Ld=[33,126],Md=[97,122],Fd=[32,126],Ud=[33,47,58,64,91,96,123,126],Bd=[9,13,32,32],qd=[65,90],Hd=[48,57,65,90,95,95,97,122],$d=[48,57,65,70,97,102],Gd=new Map([["[:alnum:]",new Ie(1,bd)],["[:^alnum:]",new Ie(-1,bd)],["[:alpha:]",new Ie(1,xd)],["[:^alpha:]",new Ie(-1,xd)],["[:ascii:]",new Ie(1,Od)],["[:^ascii:]",new Ie(-1,Od)],["[:blank:]",new Ie(1,kd)],["[:^blank:]",new Ie(-1,kd)],["[:cntrl:]",new Ie(1,Dd)],["[:^cntrl:]",new Ie(-1,Dd)],["[:digit:]",new Ie(1,Vd)],["[:^digit:]",new Ie(-1,Vd)],["[:graph:]",new Ie(1,Ld)],["[:^graph:]",new Ie(-1,Ld)],["[:lower:]",new Ie(1,Md)],["[:^lower:]",new Ie(-1,Md)],["[:print:]",new Ie(1,Fd)],["[:^print:]",new Ie(-1,Fd)],["[:punct:]",new Ie(1,Ud)],["[:^punct:]",new Ie(-1,Ud)],["[:space:]",new Ie(1,Bd)],["[:^space:]",new Ie(-1,Bd)],["[:upper:]",new Ie(1,qd)],["[:^upper:]",new Ie(-1,qd)],["[:word:]",new Ie(1,Hd)],["[:^word:]",new Ie(-1,Hd)],["[:xdigit:]",new Ie(1,$d)],["[:^xdigit:]",new Ie(-1,$d)]]);class wt{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],o=e[s+1];i===o?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],o=e[s+1];let a=t,u=r;for(;a<=u;){for(;a<r&&wt.cmp(e,a,i,o)<0;)a+=2;for(;u>t&&wt.cmp(e,u,i,o)>0;)u-=2;if(a<=u){if(a!==u){let l=e[a];e[a]=e[u],e[u]=l,l=e[a+1],e[a+1]=e[u+1],e[u+1]=l}a+=2,u-=2}}t<u&&wt.qsortIntPair(e,t,u),a<r&&wt.qsortIntPair(e,a,r)}constructor(e=ue.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;wt.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&Q.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=oe.MIN_FOLD&&t>=oe.MAX_FOLD)return this.appendRange(e,t);if(t<oe.MIN_FOLD||e>oe.MAX_FOLD)return this.appendRange(e,t);e<oe.MIN_FOLD&&(this.appendRange(e,oe.MIN_FOLD-1),e=oe.MIN_FOLD),t>oe.MAX_FOLD&&(this.appendRange(oe.MAX_FOLD+1,t),t=oe.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=oe.simpleFold(r);s!==r;s=oe.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=oe.MAX_RUNE&&this.appendRange(t,oe.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],s=t[1],i=t[2];if(i===1){this.appendRange(r,s);continue}for(let o=r;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let r of e){const s=r[0],i=r[1],o=r[2];if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let a=s;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=oe.MAX_RUNE&&this.appendRange(t,oe.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=oe.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=oe.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new wt().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return wt.charClassToString(this.r,this.len)}}class $i{static of(e,t){return new $i(e,t)}constructor(e,t){this.first=e,this.second=t}}class A4{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=ue.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}const J=class J{static ANY_TABLE(){return[[0,oe.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?$i.of(J.ANY_TABLE(),J.ANY_TABLE()):Et.CATEGORIES.has(e)?$i.of(Et.CATEGORIES.get(e),Et.FOLD_CATEGORIES.get(e)):Et.SCRIPTS.has(e)?$i.of(Et.SCRIPTS.get(e),Et.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<oe.MIN_FOLD||e>oe.MAX_FOLD)return e;let t=e;const r=e;for(e=oe.simpleFold(e);e!==r;e=oe.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===U.Op.EMPTY_MATCH)return null;if(e.op===U.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===U.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new U(U.Op.LITERAL);return r.flags=t,r.runes=ue.stringToRunes(e),r}static parse(e,t){return new J(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=J.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=J.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new $e(J.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&oe.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==L.CODES.get("_")&&!ue.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=L.CODES.get("0")&&e.peek()<=L.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===L.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===U.Op.LITERAL&&e.runes.length===1||e.op===U.Op.CHAR_CLASS||e.op===U.Op.ANY_CHAR_NOT_NL||e.op===U.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case U.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case U.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case U.Op.ANY_CHAR_NOT_NL:return t!==L.CODES.get(`
`);case U.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case U.Op.ANY_CHAR:break;case U.Op.ANY_CHAR_NOT_NL:J.matchRune(t,L.CODES.get(`
`))&&(e.op=U.Op.ANY_CHAR);break;case U.Op.CHAR_CLASS:t.op===U.Op.LITERAL?e.runes=new wt(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new wt(e.runes).appendClass(t.runes).toArray();break;case U.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=U.Op.CHAR_CLASS,e.runes=new wt().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new $e(J.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case L.CODES.get("1"):case L.CODES.get("2"):case L.CODES.get("3"):case L.CODES.get("4"):case L.CODES.get("5"):case L.CODES.get("6"):case L.CODES.get("7"):if(!e.more()||e.peek()<L.CODES.get("0")||e.peek()>L.CODES.get("7"))break;case L.CODES.get("0"):{let s=r-L.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<L.CODES.get("0")||e.peek()>L.CODES.get("7"));i++)s=s*8+e.peek()-L.CODES.get("0"),e.skip(1);return s}case L.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===L.CODES.get("{")){let o=0,a=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===L.CODES.get("}"))break;const u=ue.unhex(r);if(u<0||(a=a*16+u,a>oe.MAX_RUNE))break e;o++}if(o===0)break e;return a}const s=ue.unhex(r);if(!e.more())break;r=e.pop();const i=ue.unhex(r);if(s<0||i<0)break;return s*16+i}case L.CODES.get("a"):return L.CODES.get("\x07");case L.CODES.get("f"):return L.CODES.get("\f");case L.CODES.get("n"):return L.CODES.get(`
`);case L.CODES.get("r"):return L.CODES.get("\r");case L.CODES.get("t"):return L.CODES.get("	");case L.CODES.get("v"):return L.CODES.get("\v");default:if(!ue.isalnum(r))return r;break}throw new $e(J.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new $e(J.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?J.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new U(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!U.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===U.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=U.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===U.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&oe.simpleFold(e.runes[0])===e.runes[2]&&oe.simpleFold(e.runes[2])===e.runes[0]||e.op===U.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&oe.simpleFold(e.runes[0])===e.runes[1]&&oe.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|Q.FOLD_CASE))return null;e.op=U.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|Q.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==U.Op.LITERAL||i.op!==U.Op.LITERAL||(s.flags&Q.FOLD_CASE)!==(i.flags&Q.FOLD_CASE)?!1:(i.runes=J.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(U.Op.LITERAL);return r.flags=t,(t&Q.FOLD_CASE)!==0&&(e=J.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,o){let a=this.flags;if((a&Q.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=Q.NON_GREEDY),o!==-1))throw new $e(J.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new $e(J.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const l=this.stack[u-1];if(U.isPseudoOp(l.op))throw new $e(J.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);h.min=t,h.max=r,h.flags=a,h.subs=[l],this.stack[u-1]=h}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(U.Op.EMPTY_MATCH)):this.push(this.collapse(e,U.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(U.Op.NO_MATCH)):this.push(this.collapse(e,U.Op.ALTERNATE))}cleanAlt(e){e.op===U.Op.CHAR_CLASS&&(e.runes=new wt(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===oe.MAX_RUNE?(e.runes=null,e.op=U.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===L.CODES.get(`
`)-1&&e.runes[2]===L.CODES.get(`
`)+1&&e.runes[3]===oe.MAX_RUNE&&(e.runes=null,e.op=U.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let a of e)r+=a.op===t?a.subs.length:1;let s=new Array(r).fill(null),i=0;for(let a of e)a.op===t?(s.splice(i,a.subs.length,...a.subs),i+=a.subs.length,this.reuse(a)):s[i++]=a;let o=this.newRegexp(t);if(o.subs=s,t===U.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,o=0,a=0,u=0;for(let h=0;h<=r;h++){let g=null,E=0,v=0;if(h<r){let S=e[t+h];if(S.op===U.Op.CONCAT&&S.subs.length>0&&(S=S.subs[0]),S.op===U.Op.LITERAL&&(g=S.runes,E=S.runes.length,v=S.flags&Q.FOLD_CASE),v===a){let q=0;for(;q<o&&q<E&&i[q]===g[q];)q++;if(q>0){o=q;continue}}}if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const S=this.newRegexp(U.Op.LITERAL);S.flags=a,S.runes=i.slice(0,o);for(let te=u;te<h;te++)e[t+te]=this.removeLeadingString(e[t+te],o);const q=this.collapse(e.slice(t+u,t+h),U.Op.ALTERNATE),G=this.newRegexp(U.Op.CONCAT);G.subs=[S,q],e[s++]=G}u=h,i=g,o=E,a=v}r=s,t=0,u=0,s=0;let l=null;for(let h=0;h<=r;h++){let g=null;if(!(h<r&&(g=J.leadingRegexp(e[t+h]),l!==null&&l.equals(g)&&(J.isCharClass(l)||l.op===U.Op.REPEAT&&l.min===l.max&&J.isCharClass(l.subs[0]))))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const E=l;for(let q=u;q<h;q++){const G=q!==u;e[t+q]=this.removeLeadingRegexp(e[t+q],G)}const v=this.collapse(e.slice(t+u,t+h),U.Op.ALTERNATE),S=this.newRegexp(U.Op.CONCAT);S.subs=[E,v],e[s++]=S}u=h,l=g}}r=s,t=0,u=0,s=0;for(let h=0;h<=r;h++)if(!(h<r&&J.isCharClass(e[t+h]))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{let g=u;for(let v=u+1;v<h;v++){const S=e[t+g],q=e[t+v];(S.op<q.op||S.op===q.op&&(S.runes!==null?S.runes.length:0)<(q.runes!==null?q.runes.length:0))&&(g=v)}const E=e[t+u];e[t+u]=e[t+g],e[t+g]=E;for(let v=u+1;v<h;v++)J.mergeCharClass(e[t+u],e[t+v]),this.reuse(e[t+v]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}h<r&&(e[s++]=e[t+h]),u=h+1}r=s,t=0,u=0,s=0;for(let h=0;h<r;++h)h+1<r&&e[t+h].op===U.Op.EMPTY_MATCH&&e[t+h+1].op===U.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===U.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===U.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=U.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===U.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=U.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===U.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=U.Op.EMPTY_MATCH,e.subs=U.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(U.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&Q.LITERAL)!==0)return J.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new A4(this.wholeRegexp);for(;s.more();){let o=-1;e:switch(s.peek()){case L.CODES.get("("):if((this.flags&Q.PERL_X)!==0&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(U.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case L.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case L.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case L.CODES.get("^"):(this.flags&Q.ONE_LINE)!==0?this.op(U.Op.BEGIN_TEXT):this.op(U.Op.BEGIN_LINE),s.skip(1);break;case L.CODES.get("$"):(this.flags&Q.ONE_LINE)!==0?this.op(U.Op.END_TEXT).flags|=Q.WAS_DOLLAR:this.op(U.Op.END_LINE),s.skip(1);break;case L.CODES.get("."):(this.flags&Q.DOT_NL)!==0?this.op(U.Op.ANY_CHAR):this.op(U.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case L.CODES.get("["):this.parseClass(s);break;case L.CODES.get("*"):case L.CODES.get("+"):case L.CODES.get("?"):{o=s.pos();let a=null;switch(s.pop()){case L.CODES.get("*"):a=U.Op.STAR;break;case L.CODES.get("+"):a=U.Op.PLUS;break;case L.CODES.get("?"):a=U.Op.QUEST;break}this.repeat(a,t,r,o,s,e);break}case L.CODES.get("{"):{o=s.pos();const a=J.parseRepeat(s);if(a<0){s.rewindTo(o),this.literal(s.pop());break}t=a>>16,r=(a&oe.MAX_BMP)<<16>>16,this.repeat(U.Op.REPEAT,t,r,o,s,e);break}case L.CODES.get("\\"):{const a=s.pos();if(s.skip(1),(this.flags&Q.PERL_X)!==0&&s.more())switch(s.pop()){case L.CODES.get("A"):this.op(U.Op.BEGIN_TEXT);break e;case L.CODES.get("b"):this.op(U.Op.WORD_BOUNDARY);break e;case L.CODES.get("B"):this.op(U.Op.NO_WORD_BOUNDARY);break e;case L.CODES.get("C"):throw new $e(J.ERR_INVALID_ESCAPE,"\\C");case L.CODES.get("Q"):{let g=s.rest();const E=g.indexOf("\\E");E>=0&&(g=g.substring(0,E)),s.skipString(g),s.skipString("\\E");let v=0;for(;v<g.length;){const S=g.codePointAt(v);this.literal(S),v+=ue.charCount(S)}break e}case L.CODES.get("z"):this.op(U.Op.END_TEXT);break e;default:s.rewindTo(a);break}const u=this.newRegexp(U.Op.CHAR_CLASS);if(u.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const h=new wt;if(this.parseUnicodeClass(s,h)){u.runes=h.toArray(),this.push(u);break e}}const l=new wt;if(this.parsePerlClassEscape(s,l)){u.runes=l.toArray(),this.push(u);break e}s.rewindTo(a),this.reuse(u),this.literal(J.parseEscape(s));break}default:this.literal(s.pop());break}e=o}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new $e(J.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const a=r.charAt(2)==="P"?4:3,u=r.indexOf(">");if(u<0)throw new $e(J.ERR_INVALID_NAMED_CAPTURE,r);const l=r.substring(a,u);if(e.skipString(l),e.skip(a+1),!J.isValidCaptureName(l))throw new $e(J.ERR_INVALID_NAMED_CAPTURE,r.substring(0,u+1));const h=this.op(U.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[l])throw new $e(J.ERR_DUPLICATE_NAMED_CAPTURE,l);this.namedGroups[l]=this.numCap,h.name=l;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case L.CODES.get("i"):s|=Q.FOLD_CASE,o=!0;break;case L.CODES.get("m"):s&=-17,o=!0;break;case L.CODES.get("s"):s|=Q.DOT_NL,o=!0;break;case L.CODES.get("U"):s|=Q.NON_GREEDY,o=!0;break;case L.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case L.CODES.get(":"):case L.CODES.get(")"):if(i<0){if(!o)break e;s=~s}a===L.CODES.get(":")&&this.op(U.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new $e(J.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(U.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===U.Op.VERTICAL_BAR&&J.isCharClass(this.stack[e-1])&&J.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return J.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===U.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new $e(J.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==U.Op.LEFT_PAREN)throw new $e(J.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=U.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if((this.flags&Q.PERL_X)===0||!e.more()||e.pop()!==L.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=Nd.has(s)?Nd.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&Q.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const o=Gd.has(i)?Gd.get(i):null;if(o===null)throw new $e(J.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&Q.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if((this.flags&Q.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===L.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new $e(J.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==L.CODES.get("{"))o=ue.runeToString(i);else{const h=e.rest(),g=h.indexOf("}");if(g<0)throw e.rewindTo(r),new $e(J.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,g),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===L.CODES.get("^")&&(s=0-s,o=o.substring(1));const a=J.unicodeTable(o);if(a===null)throw new $e(J.ERR_INVALID_CHAR_RANGE,e.from(r));const u=a.first,l=a.second;if((this.flags&Q.FOLD_CASE)===0||l===null)t.appendTableWithSign(u,s);else{const h=new wt().appendTable(u).appendTable(l).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(U.Op.CHAR_CLASS);r.flags=this.flags;const s=new wt;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&Q.CLASS_NL)===0&&s.appendRange(L.CODES.get(`
`),L.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==L.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&Q.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new $e(J.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(a);const u=J.parseClassChar(e,t);let l=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(l=J.parseClassChar(e,t),l<u)throw new $e(J.ERR_INVALID_CHAR_RANGE,e.from(a))}(this.flags&Q.FOLD_CASE)===0?s.appendRange(u,l):s.appendFoldedRange(u,l)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}};T(J,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),T(J,"ERR_INVALID_CHAR_RANGE","invalid character class range"),T(J,"ERR_INVALID_ESCAPE","invalid escape sequence"),T(J,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),T(J,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),T(J,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),T(J,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),T(J,"ERR_MISSING_BRACKET","missing closing ]"),T(J,"ERR_MISSING_PAREN","missing closing )"),T(J,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),T(J,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),T(J,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name");let ll=J;class v4{constructor(){this.inst=null,this.cap=[]}}class Wd{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class Ds{static fromRE2(e){const t=new Ds;return t.prog=e.prog,t.re2=e,t.q0=new Wd(t.prog.numInst()),t.q1=new Wd(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new Ds;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?ue.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new v4,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,s=this.poolSize+r;this.pool.length<s&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,s)));for(let i=t;i<e.size;i++){const o=e.denseThreads[i];o!==null&&(this.pool[this.poolSize]=o,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const s=this.re2.cond;if(s===ue.EMPTY_ALL||(r===Q.ANCHOR_START||r===Q.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let i=this.q0,o=this.q1,a=e.step(t),u=a>>3,l=a&7,h=-1,g=0;a!==Zn.EOF()&&(a=e.step(t+l),h=a>>3,g=a&7);let E;for(t===0?E=ue.emptyOpContext(-1,u):E=e.context(t);;){if(i.isEmpty()){if((s&ue.EMPTY_BEGIN_TEXT)!==0&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&h!==this.re2.prefixRune&&e.canCheckPrefix()){const q=e.index(this.re2,t);if(q<0)break;t+=q,a=e.step(t),u=a>>3,l=a&7,a=e.step(t+l),h=a>>3,g=a&7}}!this.matched&&(t===0||r===Q.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(i,this.prog.start,t,this.matchcap,E,null));const v=t+l;if(E=e.context(v),this.step(i,o,t,v,u,E,r,t===e.endPos()),l===0||this.ncap===0&&this.matched)break;t+=l,u=h,l=g,u!==-1&&(a=e.step(t+l),h=a>>3,g=a&7);const S=i;i=o,o=S}return this.freeQueue(o),this.matched}step(e,t,r,s,i,o,a,u){const l=this.re2.longest;for(let h=0;h<e.size;h++){let g=e.denseThreads[h];if(g===null)continue;if(l&&this.matched&&this.ncap>0&&this.matchcap[0]<g.cap[0]){this.freeThread(g);continue}const E=g.inst;let v=!1;switch(E.op){case le.MATCH:if(a===Q.ANCHOR_BOTH&&!u)break;this.ncap>0&&(!l||!this.matched||this.matchcap[1]<r)&&(g.cap[1]=r,this.matchcap=g.cap.slice(0,this.ncap)),l||this.freeQueue(e,h+1),this.matched=!0;break;case le.RUNE:v=E.matchRune(i);break;case le.RUNE1:v=i===E.runes[0];break;case le.RUNE_ANY:v=!0;break;case le.RUNE_ANY_NOT_NL:v=i!==L.CODES.get(`
`);break;default:throw new Error("bad inst")}v&&(g=this.add(t,E.out,s,g.cap,o,g)),g!==null&&(this.freeThread(g),e.denseThreads[h]=null)}e.clear()}add(e,t,r,s,i,o){if(t===0||e.contains(t))return o;const a=e.add(t),u=this.prog.inst[t];switch(u.op){case le.FAIL:break;case le.ALT:case le.ALT_MATCH:o=this.add(e,u.out,r,s,i,o),o=this.add(e,u.arg,r,s,i,o);break;case le.EMPTY_WIDTH:(u.arg&~i)===0&&(o=this.add(e,u.out,r,s,i,o));break;case le.NOP:o=this.add(e,u.out,r,s,i,o);break;case le.CAPTURE:if(u.arg<this.ncap){const l=s[u.arg];s[u.arg]=r,this.add(e,u.out,r,s,i,null),s[u.arg]=l}else o=this.add(e,u.out,r,s,i,o);break;case le.MATCH:case le.RUNE:case le.RUNE1:case le.RUNE_ANY:case le.RUNE_ANY_NOT_NL:o===null?o=this.alloc(u):o.inst=u,this.ncap>0&&o.cap!==s&&(o.cap=s.slice(0,this.ncap)),e.denseThreads[a]=o,o=null;break;default:throw new Error("unhandled")}return o}}class C4{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class Jn{static initTest(e){const t=Jn.compile(e),r=new Jn(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return Jn.compileImpl(e,Q.PERL,!1)}static compilePOSIX(e){return Jn.compileImpl(e,Q.POSIX,!0)}static compileImpl(e,t,r){let s=ll.parse(e,t);const i=s.maxCap();s=Xt.simplify(s);const o=Hi.compileRegexp(s),a=new Jn(e,o,i,r),[u,l]=o.prefix();return a.prefixComplete=u,a.prefix=l,a.prefixUTF8=ue.stringToUtf8ByteArray(a.prefix),a.prefix.length>0&&(a.prefixRune=a.prefix.codePointAt(0)),a.namedGroups=s.namedGroups,a}static match(e,t){return Jn.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new C4}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=Ds.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,s){let i=this.get(),o=!1;i?i.next!==null&&(i=Ds.fromMachine(i),o=!0):(i=Ds.fromRE2(this),o=!0),i.init(s);const a=i.match(e,t,r)?i.submatches():null;return this.put(i,o),a}match(e){return this.doExecute(Ge.fromUTF16(e),0,Q.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof _r||(e=$a.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const o=e.isUTF16Encoding()?Ge.fromUTF16(e.asCharSequence(),0,r):Ge.fromUTF8(e.asBytes(),0,r),a=this.doExecute(o,t,s,2*i);return a===null?[!1,null]:[!0,a]}matchUTF8(e){return this.doExecute(Ge.fromUTF8(e),0,Q.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,o="";const a=Ge.fromUTF16(e);let u=0;for(;i<=e.length;){const l=this.doExecute(a,i,Q.UNANCHORED,2);if(l===null||l.length===0)break;o+=e.substring(s,l[0]),(l[1]>s||l[0]===0)&&(o+=t(e.substring(l[0],l[1])),u++),s=l[1];const h=a.step(i)&7;if(i+h>l[1]?i+=h:i+1>l[1]?i++:i=l[1],u>=r)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,u=-1;for(;a<t&&o<=i;){const l=this.doExecute(e,o,Q.UNANCHORED,this.prog.numCap);if(l===null||l.length===0)break;let h=!0;if(l[1]===o){l[0]===u&&(h=!1);const g=e.step(o);g<0?o=i+1:o+=g&7}else o=l[1];u=l[1],h&&(s.push(r(this.pad(l))),a++)}return s}findUTF8(e){const t=this.doExecute(Ge.fromUTF8(e),0,Q.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(Ge.fromUTF8(e),0,Q.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(Ge.fromUTF16(e),0,Q.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(Ge.fromUTF16(e),0,Q.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(Ge.fromUTF8(e),0,Q.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(Ge.fromUTF8(e),0,Q.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(Ge.fromUTF16(e),0,Q.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(Ge.fromUTF16(e),0,Q.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(Ge.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(Ge.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(Ge.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(Ge.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(Ge.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(Ge.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(Ge.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(Ge.fromUTF16(e),t);return r.length===0?null:r}}const St=class St{static quote(e){return ue.quoteMeta(e)}static compile(e,t=0){let r=e;if((t&St.CASE_INSENSITIVE)!==0&&(r=`(?i)${r}`),(t&St.DOTALL)!==0&&(r=`(?s)${r}`),(t&St.MULTILINE)!==0&&(r=`(?m)${r}`),(t&-32)!==0)throw new y4("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let s=Q.PERL;(t&St.DISABLE_UNICODE_GROUPS)!==0&&(s&=-129);const i=new St(e,t);return i.re2Input=Jn.compileImpl(r,s,(t&St.LONGEST_MATCH)!==0),i}static matches(e,t){return St.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new St(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=$a.utf8(e)),new E4(this,e)}split(e,t=0){const r=this.matcher(e),s=[];let i=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(t>0&&s.length===t-1)break;if(o===r.start()){if(t===0){i+=1,o=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.start())),o=r.end()}if(t===0&&o!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.inputLength()))}return(t!==0||s.length===0)&&s.push(r.substring(o,r.inputLength())),s}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};T(St,"CASE_INSENSITIVE",1),T(St,"DOTALL",2),T(St,"MULTILINE",4),T(St,"DISABLE_UNICODE_GROUPS",8),T(St,"LONGEST_MATCH",16);let oo=St;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="12.15.0";function R4(n){ni=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new vc("@firebase/firestore");function Ps(){return Xr.logLevel}function Y(n,...e){if(Xr.logLevel<=_e.DEBUG){const t=e.map(Ql);Xr.debug(`Firestore (${ni}): ${n}`,...t)}}function Fn(n,...e){if(Xr.logLevel<=_e.ERROR){const t=e.map(Ql);Xr.error(`Firestore (${ni}): ${n}`,...t)}}function rn(n,...e){if(Xr.logLevel<=_e.WARN){const t=e.map(Ql);Xr.warn(`Firestore (${ni}): ${n}`,...t)}}function Ql(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_p(n,r,t)}function _p(n,e,t){let r=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Fn(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||_p(e,s,r)}function ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(It.UNAUTHENTICATED)))}shutdown(){}}class P4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class N4{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},a=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>a(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new yp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new It(e)}}class b4{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class x4{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new b4(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable((()=>t(It.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O4{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new jd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=k4(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ye(n,e){return n<e?-1:n>e?1:0}function hl(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return qu(s)===qu(i)?ye(s,i):qu(s)?1:-1}return ye(n.length,e.length)}const D4=55296,V4=57343;function qu(n){const e=n.charCodeAt(0);return e>=D4&&e<=V4}function $s(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="__name__";class dn{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=dn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ye(e.length,t.length)}static compareSegments(e,t){const r=dn.isNumericId(e),s=dn.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?dn.extractNumericId(e).compare(dn.extractNumericId(t)):hl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cr.fromString(e.substring(4,e.length-2))}}class Te extends dn{construct(e,t,r){return new Te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Te(t)}static emptyPath(){return new Te([])}}const L4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends dn{construct(e,t,r){return new tt(e,t,r)}static isValidIdentifier(e){return L4.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pn}static keyField(){return new tt([pn])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new K(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(t)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Te.fromString(e))}static fromName(e){return new Z(Te.fromString(e).popFirst(5))}static empty(){return new Z(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e,t){if(!t)throw new K(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function M4(n,e,t,r){if(e===!0&&r===!0)throw new K(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zd(n){if(!Z.isDocumentKey(n))throw new K(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Kd(n){if(Z.isDocumentKey(n))throw new K(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Pc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function sn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pc(n);throw new K(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function Lo(n,e){if(!Vo(n))throw new K(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=-62135596800,Qd=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Qd);return new Ve(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yd)throw new K(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qd}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lo(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:Ke("string",Ve._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Ve(0,0))}static max(){return new ae(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=-1;function F4(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new yr(s,Z.empty(),e)}function U4(n){return new yr(n.readTime,n.key,ao)}class yr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new yr(ae.min(),Z.empty(),ao)}static max(){return new yr(ae.max(),Z.empty(),ao)}}function B4(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:ye(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class H4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==q4)throw n;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,r)=>{t(e)}))}static reject(e){return new $(((t,r)=>{r(e)}))}static waitFor(e){return new $(((t,r)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&t()}),(u=>r(u)))})),o=!0,i===s&&t()}))}static or(e){let t=$.resolve(!1);for(const r of e)t=t.next((s=>s?$.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new $(((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const l=u;t(e[l]).next((h=>{o[l]=h,++a,a===i&&r(o)}),(h=>s(h)))}}))}static doWhile(e,t){return new $(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function $4(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function si(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Nc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=-1;function bc(n){return n==null}function co(n){return n===0&&1/n==-1/0}function G4(n){return typeof n=="number"&&Number.isInteger(n)&&!co(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function W4(n){return typeof n=="string"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="";function j4(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xd(e)),e=z4(n.get(t),e);return Xd(e)}function z4(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case wp:t+="";break;default:t+=i}}return t}function Xd(n){return n+wp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We=class dl{constructor(e,t){this.comparator=e,this.root=t||ur.EMPTY}insert(e,t){return new dl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ur.BLACK,null,null))}remove(e){return new dl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ur.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ea(this.root,e,this.comparator,!0)}},Ea=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ur=class Pn{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Pn.RED,this.left=s??Pn.EMPTY,this.right=i??Pn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Pn(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}};ur.EMPTY=null,ur.RED=!0,ur.BLACK=!1;ur.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ur(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jd(this.data.getIterator())}getIteratorFrom(e){return new Jd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ye(this.comparator);return t.data=e,t}}class Jd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ht([])}unionWith(e){let t=new Ye(tt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $s(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function K4(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Ip(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tp("Invalid base64 string: "+i):i}})(e);return new Qe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Y4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=Y4.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(n.seconds),nanos:Ue(n.nanos)}}function Ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wr(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="server_timestamp",vp="__type__",Cp="__previous_value__",Rp="__local_write_time__";function xc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[vp])==null?void 0:r.stringValue)===Ap}function Mo(n){const e=n.mapValue.fields[Cp];return xc(e)?Mo(e):e}function Gs(n){const e=Er(n.mapValue.fields[Rp].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e,t,r,s,i,o,a,u,l,h,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=h,this.apiKey=g}}const Wa="(default)";class uo{constructor(e,t){this.projectId=e,this.database=t||Wa}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database===Wa}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}function X4(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new K(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="__type__",J4="__max__",wa={mapValue:{}},Pp="__vector__",lo="value",Ws={nullValue:"NULL_VALUE"},Lt={booleanValue:!0},pt={booleanValue:!1};function Xe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xc(n)?4:Z4(n)?9007199254740991:ja(n)?10:11:ee(28295,{value:n})}function Qt(n,e,t){if(n===e)return!0;const r=Xe(n);if(r!==Xe(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Gs(n).isEqual(Gs(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Er(i.timestampValue),u=Er(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,o){return wr(i.bytesValue).isEqual(wr(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,o){return Ue(i.geoPointValue.latitude)===Ue(o.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(o.geoPointValue.longitude)})(n,e);case 2:return(function(i,o,a){if("integerValue"in i&&"integerValue"in o)return Ue(i.integerValue)===Ue(o.integerValue);let u,l;if("doubleValue"in i&&"doubleValue"in o)u=Ue(i.doubleValue),l=Ue(o.doubleValue);else{if(!(a!=null&&a.Ee))return!1;u=Ue(i.integerValue??i.doubleValue),l=Ue(o.integerValue??o.doubleValue)}return u===l?!!(a!=null&&a.he)||co(u)===co(l):!!(a===void 0||a.Te)&&isNaN(u)&&isNaN(l)})(n,e,t);case 9:return $s(n.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>Qt(s,i,t)));case 10:case 11:return(function(i,o,a){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ga(u)!==Ga(l))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(l[h]===void 0||!Qt(u[h],l[h],a)))return!1;return!0})(n,e,t);default:return ee(52216,{left:n})}}function ho(n,e){return(n.values||[]).find((t=>Qt(t,e)))!==void 0}function Mt(n,e){if(n===e)return 0;const t=Xe(n),r=Xe(e);if(t!==r)return ye(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ye(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Ue(i.integerValue||i.doubleValue),u=Ue(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1})(n,e);case 3:return Zd(n.timestampValue,e.timestampValue);case 4:return Zd(Gs(n),Gs(e));case 5:return hl(n.stringValue,e.stringValue);case 6:return(function(i,o){const a=wr(i),u=wr(o);return a.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const h=ye(a[l],u[l]);if(h!==0)return h}return ye(a.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=ye(Ue(i.latitude),Ue(o.latitude));return a!==0?a:ye(Ue(i.longitude),Ue(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ef(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var E,v,S,q;const a=i.fields||{},u=o.fields||{},l=(E=a[lo])==null?void 0:E.arrayValue,h=(v=u[lo])==null?void 0:v.arrayValue,g=ye(((S=l==null?void 0:l.values)==null?void 0:S.length)||0,((q=h==null?void 0:h.values)==null?void 0:q.length)||0);return g!==0?g:ef(l,h)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===wa.mapValue&&o===wa.mapValue)return 0;if(i===wa.mapValue)return 1;if(o===wa.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),l=o.fields||{},h=Object.keys(l);u.sort(),h.sort();for(let g=0;g<u.length&&g<h.length;++g){const E=hl(u[g],h[g]);if(E!==0)return E;const v=Mt(a[u[g]],l[h[g]]);if(v!==0)return v}return ye(u.length,h.length)})(n.mapValue,e.mapValue);default:throw ee(23264,{Pe:t})}}function Zd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ye(n,e);const t=Er(n),r=Er(e),s=ye(t.seconds,r.seconds);return s!==0?s:ye(t.nanos,r.nanos)}function ef(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Mt(t[s],r[s]);if(i!==void 0&&i!==0)return i}return ye(t.length,r.length)}function js(n){return fl(n)}function fl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Er(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return wr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=fl(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fl(t.fields[o])}`;return s+"}"})(n.mapValue):ee(61005,{value:n})}function Pa(n){switch(Xe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mo(n);return e?16+Pa(e):16;case 5:return 2*n.stringValue.length;case 6:return wr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Pa(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return xr(r.fields,((i,o)=>{s+=i.length+Pa(o)})),s})(n.mapValue);default:throw ee(13486,{value:n})}}function tf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gn(n){return!!n&&"integerValue"in n}function Hr(n){return!!n&&"doubleValue"in n}function Ir(n){return gn(n)||Hr(n)}function zs(n){return!!n&&"arrayValue"in n}function $t(n){return!!n&&"nullValue"in n}function Ft(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wr(n){return!!n&&"mapValue"in n}function ja(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sp])==null?void 0:r.stringValue)===Pp}function pl(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[lo])==null?void 0:t.arrayValue}function Gi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return xr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Gi(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gi(n.arrayValue.values[t]);return e}return{...n}}function Z4(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===J4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(t)}setAll(e){let t=tt.emptyPath(),r={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Gi(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Wr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Wr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){xr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Nt(Gi(this.value))}}function Np(n){const e=[];return xr(n.fields,((t,r)=>{const s=new tt([t]);if(Wr(r)){const i=Np(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:co(e)?"-0":e}}function Zl(n){return{integerValue:""+n}}function eh(n,e,t){return Number.isInteger(e)&&(t!=null&&t.preferIntegers)||G4(e)?Zl(e):Oc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function e_(n,e,t){return n instanceof fo?(function(s,i){const o={fields:{[vp]:{stringValue:Ap},[Rp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xc(i)&&(i=Mo(i)),i&&(o.fields[Cp]=i),{mapValue:o}})(t,e):n instanceof po?xp(n,e):n instanceof go?Op(n,e):n instanceof mo?(function(s,i){const o=bp(s,i),a=Ya(o)+Ya(s.Re);return gn(o)&&gn(s.Re)?Zl(a):Oc(s.serializer,a)})(n,e):n instanceof za?(function(s,i){return nf(s,i,Math.min)})(n,e):n instanceof Ka?(function(s,i){return nf(s,i,Math.max)})(n,e):void 0}function t_(n,e,t){return n instanceof po?xp(n,e):n instanceof go?Op(n,e):t}function bp(n,e){return n instanceof mo?Ir(e)?e:{integerValue:0}:null}class fo extends kc{}class po extends kc{constructor(e){super(),this.elements=e}}function xp(n,e){const t=kp(e);for(const r of n.elements)t.some((s=>Qt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class go extends kc{constructor(e){super(),this.elements=e}}function Op(n,e){let t=kp(e);for(const r of n.elements)t=t.filter((s=>!Qt(s,r)));return{arrayValue:{values:t}}}class th extends kc{constructor(e,t){super(),this.serializer=e,this.Re=t}}class mo extends th{}class za extends th{}class Ka extends th{}function nf(n,e,t){if(!Ir(e))return n.Re;const r=t(Ya(e),Ya(n.Re));return gn(e)&&gn(n.Re)?Zl(r):Oc(n.serializer,r)}function Ya(n){return Ue(n.integerValue||n.doubleValue)}function kp(n){return zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t){this.field=e,this.transform=t}}function r_(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof po&&s instanceof po||r instanceof go&&s instanceof go?$s(r.elements,s.elements,Qt):r instanceof mo&&s instanceof mo||r instanceof za&&s instanceof za||r instanceof Ka&&s instanceof Ka?Qt(r.Re,s.Re):r instanceof fo&&s instanceof fo})(n.transform,e.transform)}class s_{constructor(e,t){this.version=e,this.transformResults=t}}class Yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Na(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Dc{}function Dp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nh(n.key,Yt.none()):new Fo(n.key,n.data,Yt.none());{const t=n.data,r=Nt.empty();let s=new Ye(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Or(n.key,r,new Ht(s.toArray()),Yt.none())}}function i_(n,e,t){n instanceof Fo?(function(s,i,o){const a=s.value.clone(),u=sf(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,e,t):n instanceof Or?(function(s,i,o){if(!Na(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=sf(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Vp(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Wi(n,e,t,r){return n instanceof Fo?(function(i,o,a,u){if(!Na(i.precondition,o))return a;const l=i.value.clone(),h=of(i.fieldTransforms,u,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,e,t,r):n instanceof Or?(function(i,o,a,u){if(!Na(i.precondition,o))return a;const l=of(i.fieldTransforms,u,o),h=o.data;return h.setAll(Vp(i)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,o,a){return Na(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,e,t)}function o_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=bp(r.transform,s||null);i!=null&&(t===null&&(t=Nt.empty()),t.set(r.field,i))}return t||null}function rf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$s(r,s,((i,o)=>r_(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fo extends Dc{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Or extends Dc{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function sf(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,t_(o,a,t[s]))}return r}function of(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,e_(i,o,e))}return r}class nh extends Dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a_ extends Dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t){this.position=e,this.inclusive=t}}function af(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),t.key):r=Mt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{}class ze extends Lp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new u_(e,t,r):t==="array-contains"?new d_(e,r):t==="in"?new f_(e,r):t==="not-in"?new p_(e,r):t==="array-contains-any"?new g_(e,r):new ze(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new l_(e,r):new h_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mt(t,this.value)):t!==null&&Xe(this.value)===Xe(t)&&this.matchesComparison(Mt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends Lp{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new on(e,t)}matches(e){return Mp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function Mp(n){return n.op==="and"}function Fp(n){return c_(n)&&Mp(n)}function c_(n){for(const e of n.filters)if(e instanceof on)return!1;return!0}function gl(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+js(n.value);if(Fp(n))return n.filters.map((e=>gl(e))).join(",");{const e=n.filters.map((t=>gl(t))).join(",");return`${n.op}(${e})`}}function Up(n,e){return n instanceof ze?(function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)})(n,e):n instanceof on?(function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,a)=>i&&Up(o,s.filters[a])),!0):!1})(n,e):void ee(19439)}function Bp(n){return n instanceof ze?(function(t){return`${t.field.canonicalString()} ${t.op} ${js(t.value)}`})(n):n instanceof on?(function(t){return t.op.toString()+" {"+t.getFilters().map(Bp).join(" ,")+"}"})(n):"Filter"}class u_ extends ze{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class l_ extends ze{constructor(e,t){super(e,"in",t),this.keys=qp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class h_ extends ze{constructor(e,t){super(e,"not-in",t),this.keys=qp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function qp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>Z.fromName(r.referenceValue)))}class d_ extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zs(t)&&ho(t.arrayValue,this.value)}}class f_ extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ho(this.value.arrayValue,t)}}class p_ extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ho(this.value.arrayValue,t)}}class g_ extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ho(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t="asc"){this.field=e,this.dir=t}}function m_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Tt(e,0,ae.min(),ae.min(),ae.min(),Nt.empty(),0)}static newFoundDocument(e,t,r,s){return new Tt(e,1,t,ae.min(),r,s,0)}static newNoDocument(e,t){return new Tt(e,2,t,ae.min(),ae.min(),Nt.empty(),0)}static newUnknownDocument(e,t){return new Tt(e,3,t,ae.min(),ae.min(),Nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.de=null}}function uf(n,e=null,t=[],r=[],s=null,i=null,o=null){return new __(n,e,t,r,s,i,o)}function Hp(n){const e=ce(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>gl(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>js(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>js(r))).join(",")),e.de=t}return e.de}function $p(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!m_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Up(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cf(n.startAt,e.startAt)&&cf(n.endAt,e.endAt)}function qr(n){return!!n.isCorePipeline}function Gp(n){return!!n.path&&Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function y_(n,e,t,r,s,i,o,a){return new ii(n,e,t,r,s,i,o,a)}function rh(n){return new ii(n)}function lf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function E_(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Wp(n){return n.collectionGroup!==null}function ji(n){const e=ce(n);if(e.fe===null){e.fe=[];const t=new Set;for(const i of e.explicitOrderBy)e.fe.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(tt.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.fe.push(new _o(i,r))})),t.has(tt.keyField().canonicalString())||e.fe.push(new _o(tt.keyField(),r))}return e.fe}function _n(n){const e=ce(n);return e.me||(e.me=w_(e,ji(n))),e.me}function w_(n,e){if(n.limitType==="F")return uf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new _o(s.field,i)}));const t=n.endAt?new Qa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qa(n.startAt.position,n.startAt.inclusive):null;return uf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ml(n,e){const t=n.filters.concat([e]);return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function I_(n,e){const t=n.explicitOrderBy.concat([e]);return new ii(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function _l(n,e,t){return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function T_(n,e){return $p(_n(n),_n(e))&&n.limitType===e.limitType}function zi(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Bp(s))).join(", ")}]`),bc(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>js(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>js(s))).join(",")),`Target(${r})`})(_n(n))}; limitType=${n.limitType})`}function Vc(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ji(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,a,u){const l=af(o,a,u);return o.inclusive?l<=0:l<0})(r.startAt,ji(r),s)||r.endAt&&!(function(o,a,u){const l=af(o,a,u);return o.inclusive?l>=0:l>0})(r.endAt,ji(r),s))})(n,e)}function sh(n){return(e,t)=>{let r=!1;for(const s of ji(n)){const i=A_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function A_(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):(function(i,o,a){const u=o.data.field(i),l=a.data.field(i);return u!==null&&l!==null?Mt(u,l):ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,we;function C_(n){switch(n){case H.OK:return ee(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function jp(n){if(n===void 0)return Fn("GRPC error has no .code"),H.UNKNOWN;switch(n){case je.OK:return H.OK;case je.CANCELLED:return H.CANCELLED;case je.UNKNOWN:return H.UNKNOWN;case je.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case je.INTERNAL:return H.INTERNAL;case je.UNAVAILABLE:return H.UNAVAILABLE;case je.UNAUTHENTICATED:return H.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case je.NOT_FOUND:return H.NOT_FOUND;case je.ALREADY_EXISTS:return H.ALREADY_EXISTS;case je.PERMISSION_DENIED:return H.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case je.ABORTED:return H.ABORTED;case je.OUT_OF_RANGE:return H.OUT_OF_RANGE;case je.UNIMPLEMENTED:return H.UNIMPLEMENTED;case je.DATA_LOSS:return H.DATA_LOSS;default:return ee(39323,{code:n})}}(we=je||(je={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ip(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new We(Z.comparator);function xt(){return R_}const zp=new We(Z.comparator);function Ns(...n){let e=zp;for(const t of n)e=e.insert(t.key,t);return e}function Kp(n){let e=zp;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function er(){return Ki()}function Yp(){return Ki()}function Ki(){return new os((n=>n.toString()),((n,e)=>n.isEqual(e)))}const S_=new We(Z.comparator),P_=new Ye(Z.comparator);function ge(...n){let e=P_;for(const t of n)e=e.add(t);return e}const N_=new Ye(ye);function b_(){return N_}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new cr([4294967295,4294967295],0);function hf(n){const e=x_().encode(n),t=new lp;return t.update(e),new Uint8Array(t.digest())}function df(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cr([t,r],0),new cr([s,i],0)]}class ih{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ui(`Invalid padding: ${t}`);if(r<0)throw new Ui(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ui(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ui(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=cr.fromNumber(this.ge)}we(e,t,r){let s=e.add(t.multiply(cr.fromNumber(r)));return s.compare(O_)===1&&(s=new cr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=hf(e),[r,s]=df(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ih(i,s,t);return r.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const t=hf(e),[r,s]=df(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.ve(o)}}ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ui extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Bo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Uo(ae.min(),s,new We(ye),xt(),xt(),ge())}}class Bo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Bo(r,t,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Qp{constructor(e,t){this.targetId=e,this.xe=t}}class Xp{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ff{constructor(e){this.targetId=e,this.Ce=0,this.Fe=pf(),this.Oe=Qe.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=ge(),t=ge(),r=ge();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new Bo(this.Oe,this.Me,e,t,r)}qe(){this.Ne=!1,this.Fe=pf()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,X(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const bi="WatchChangeAggregator";class k_{constructor(e){this.ze=e,this.je=new Map,this.He=xt(),this.Je=Ia(),this.Ye=xt(),this.Ze=Ia(),this.Xe=new We(ye)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,(t=>{const r=this.je.get(t);if(r)switch(e.state){case 0:this.it(t)&&r.Ue(e.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(e.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.Ue(e.resumeToken));break;default:ee(56790,{state:e.state})}else Y(bi,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach(((r,s)=>{this.it(s)&&t(s)}))}_t(e){var t;return qr(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:Gp(e)}ot(e){const t=e.targetId,r=e.xe.count,s=this.ut(t);if(s){const i=s.target;if(this._t(i))if(r===0){const o=new Z(qr(i)?Te.fromString(i.getPipelineDocuments()[0]):i.path);this.nt(t,o,Tt.newNoDocument(o,ae.min()))}else X(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.ct(t);if(o!==r){const a=this.lt(e),u=a?this.Et(a,e,o):1;if(u!==0){this.st(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,l)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=wr(r).toUint8Array()}catch(u){if(u instanceof Tp)return rn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ih(o,s,i)}catch(u){return rn(u instanceof Ui?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}Et(e,t,r){return t.xe.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.ze.Tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.nt(t,i,null),s++)})),s}Rt(e){const t=new Map;this.je.forEach(((i,o)=>{const a=this.ut(o);if(a){if(i.current&&this._t(a.target)){const u=qr(a.target)?Te.fromString(a.target.getPipelineDocuments()[0]):a.target.path,l=new Z(u);this.It(l).has(o)||this.At(o,l)||this.nt(o,l,Tt.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let r=ge();this.Ze.forEach(((i,o)=>{let a=!0;o.forEachWhile((u=>{const l=this.ut(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(r=r.add(i))})),this.He.forEach(((i,o)=>o.setReadTime(e))),this.Ye.forEach(((i,o)=>o.setReadTime(e)));const s=new Uo(e,t,this.Xe,this.He,this.Ye,r);return this.He=xt(),this.Je=Ia(),this.Ye=xt(),this.Ze=Ia(),this.Xe=new We(ye),s}tt(e,t){const r=this.je.get(e);if(!r||!this.it(e))return void Y(bi,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.At(e,t.key)?2:0;r.$e(t.key,s),qr(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,r){const s=this.je.get(e);s&&this.it(e)?(this.At(e,t)?s.$e(t,1):s.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),r&&(qr(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,r):this.He=this.He.insert(t,r))):Y(bi,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const r=t.ke();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}We(e){let t=this.je.get(e);t||(Y(bi,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new ff(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new Ye(ye),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ye(ye),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||Y(bi,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new ff(e)),this.ze.getRemoteKeysForTarget(e).forEach((t=>{this.nt(e,t,null)}))}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Ia(){return new We(Z.comparator)}function pf(){return new We(Z.comparator)}const D_={asc:"ASCENDING",desc:"DESCENDING"},V_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},L_={and:"AND",or:"OR"};class M_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yl(n,e){return n.useProto3Json||bc(e)?e:{value:e}}function Xa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oh(n){const e=Er(n);return new Ve(e.seconds,e.nanos)}function Jp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xa(n,e){return Xa(n,e.toTimestamp())}function yn(n){return X(!!n,49232),ae.fromTimestamp(oh(n))}function ah(n,e){return El(n,e).canonicalString()}function El(n,e){const t=(function(s){return new Te(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Zp(n){const e=Te.fromString(n);return X(s6(e),10190,{key:e.toString()}),e}function Ja(n,e){return ah(n.databaseId,e.path)}function Hu(n,e){const t=Zp(e);if(t.get(1)!==n.databaseId.projectId)throw new K(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(t6(t))}function e6(n,e){return ah(n.databaseId,e)}function F_(n){const e=Zp(n);return e.length===4?Te.emptyPath():t6(e)}function wl(n){return new Te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function t6(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function gf(n,e,t){return{name:Ja(n,e),fields:t.value.mapValue.fields}}function U_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee(39313,{state:l})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(l,h){return l.useProto3Json?(X(h===void 0||typeof h=="string",58123),Qe.fromBase64String(h||"")):(X(h===void 0||h instanceof g4||h instanceof Uint8Array,16193),Qe.fromUint8Array(h||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(l){const h=l.code===void 0?H.UNKNOWN:jp(l.code);return new K(h,l.message||"")})(o);t=new Xp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hu(n,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):ae.min(),a=new Nt({mapValue:{fields:r.document.fields}}),u=Tt.newFoundDocument(s,i,o,a),l=r.targetIds||[],h=r.removedTargetIds||[];t=new ba(l,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hu(n,r.document),i=r.readTime?yn(r.readTime):ae.min(),o=Tt.newNoDocument(s,i),a=r.removedTargetIds||[];t=new ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hu(n,r.document),i=r.removedTargetIds||[];t=new ba([],i,s,null)}else{if(!("filter"in e))return ee(11601,{ft:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new v_(s,i),a=r.targetId;t=new Qp(a,o)}}return t}function B_(n,e){let t;if(e instanceof Fo)t={update:gf(n,e.key,e.value)};else if(e instanceof nh)t={delete:Ja(n,e.key)};else if(e instanceof Or)t={update:gf(n,e.key,e.data),updateMask:Q_(e.fieldMask)};else{if(!(e instanceof a_))return ee(16599,{gt:e.type});t={verify:Ja(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const a=o.transform;if(a instanceof fo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof mo)return{fieldPath:o.field.canonicalString(),increment:a.Re};if(a instanceof za)return{fieldPath:o.field.canonicalString(),minimum:a.Re};if(a instanceof Ka)return{fieldPath:o.field.canonicalString(),maximum:a.Re};throw ee(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:xa(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(n,e.precondition)),t}function q_(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(ae.min())&&(o=yn(i)),new s_(o,s.transformResults||[])})(t,e)))):[]}function H_(n,e){return{documents:[e6(n,e.path)]}}function $_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=e6(n,s);const i=(function(l){if(l.length!==0)return r6(on.create(l,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(l){if(l.length!==0)return l.map((h=>(function(E){return{field:bs(E.field),direction:z_(E.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=yl(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(e.endAt)),{yt:t,parent:s}}function G_(n){let e=F_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(g){const E=n6(g);return E instanceof on&&Fp(E)?E.getFilters():[E]})(t.where));let o=[];t.orderBy&&(o=(function(g){return g.map((E=>(function(S){return new _o(xs(S.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(E)))})(t.orderBy));let a=null;t.limit&&(a=(function(g){let E;return E=typeof g=="object"?g.value:g,bc(E)?null:E})(t.limit));let u=null;t.startAt&&(u=(function(g){const E=!!g.before,v=g.values||[];return new Qa(v,E)})(t.startAt));let l=null;return t.endAt&&(l=(function(g){const E=!g.before,v=g.values||[];return new Qa(v,E)})(t.endAt)),y_(e,s,o,i,a,"F",u,l)}function W_(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function j_(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function n6(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xs(t.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xs(t.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(t.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xs(t.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ze.create(xs(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return on.create(t.compositeFilter.filters.map((r=>n6(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(n):ee(30097,{filter:n})}function z_(n){return D_[n]}function K_(n){return V_[n]}function Y_(n){return L_[n]}function bs(n){return{fieldPath:n.canonicalString()}}function xs(n){return tt.fromServerFormat(n.fieldPath)}function r6(n){return n instanceof ze?(function(t){if(t.op==="=="){if(Ft(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NAN"}};if($t(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ft(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NOT_NAN"}};if($t(t.value))return{unaryFilter:{field:bs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(t.field),op:K_(t.op),value:t.value}}})(n):n instanceof on?(function(t){const r=t.getFilters().map((s=>r6(s)));return r.length===1?r[0]:{compositeFilter:{op:Y_(t.op),filters:r}}})(n):ee(54877,{filter:n})}function Q_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function s6(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function i6(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function yo(n,e){const t={fields:{}};return e.forEach(((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)})),{mapValue:t}}function o6(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n){return new M_(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(Qe.fromBase64String(e))}catch(t){throw new K(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Kt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lo(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Ke("string",Kt._jsonSchemaVersion),bytes:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function X_(){return new Mc(pn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(e){if(Lo(e,En._jsonSchema))return new En(e.latitude,e.longitude)}}function a6(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:Ke("string",En._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};class J_{bt(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="ConnectivityMonitor";class _f{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){Y(mf,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){Y(mf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta=null;function Il(){return Ta===null?Ta=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ta++,"0x"+Ta.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="RestConnection",Z_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class e3{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${s}`,this.Lt=this.databaseId.database===Wa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Bt(e,t,r,s,i){const o=Il(),a=this.Ut(e,t.toUriEncodedString());Y($u,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(u,s,i);const{host:l}=new URL(a),h=ss(l);return this.qt(e,a,u,r,h).then((g=>(Y($u,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw rn($u,`RPC '${e}' ${o} failed with error: `,g,"url: ",a,"request:",r),g}))}$t(e,t,r,s,i,o){return this.Bt(e,t,r,s,i)}kt(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ni})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Ut(e,t){const r=Z_[e];let s=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection",xi=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Vs extends e3{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!Vs.sn){const e=pp();xi(e,fp.STAT_EVENT,(t=>{t.stat===ul.PROXY?Y(yt,"STAT_EVENT: detected buffering proxy"):t.stat===ul.NOPROXY&&Y(yt,"STAT_EVENT: detected no buffering proxy")})),Vs.sn=!0}}qt(e,t,r,s,i){const o=Il();return new Promise(((a,u)=>{const l=new hp;l.setWithCredentials(!0),l.listenOnce(dp.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case Sa.NO_ERROR:const g=l.getResponseJson();Y(yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),a(g);break;case Sa.TIMEOUT:Y(yt,`RPC '${e}' ${o} timed out`),u(new K(H.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const E=l.getStatus();if(Y(yt,`RPC '${e}' ${o} failed with status:`,E,"response text:",l.getResponseText()),E>0){let v=l.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v==null?void 0:v.error;if(S&&S.status&&S.message){const q=(function(te){const he=te.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(he)>=0?he:H.UNKNOWN})(S.status);u(new K(q,S.message))}else u(new K(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new K(H.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{_n:e,streamId:o,an:l.getLastErrorCode(),un:l.getLastError()})}}finally{Y(yt,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(s);Y(yt,`RPC '${e}' ${o} sending request:`,s),l.send(t,"POST",h,r,15)}))}cn(e,t,r){const s=Il(),i=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.kt(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const l=i.join("");Y(yt,`Creating RPC '${e}' stream ${s}: ${l}`,a);const h=o.createWebChannel(l,a);this.En(h);let g=!1,E=!1;const v=new t3({Kt:S=>{E?Y(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(g||(Y(yt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),g=!0),Y(yt,`RPC '${e}' stream ${s} sending:`,S),h.send(S))},Wt:()=>h.close()});return xi(h,Fi.EventType.OPEN,(()=>{E||(Y(yt,`RPC '${e}' stream ${s} transport opened.`),v.Zt())})),xi(h,Fi.EventType.CLOSE,(()=>{E||(E=!0,Y(yt,`RPC '${e}' stream ${s} transport closed`),v.en(),this.hn(h))})),xi(h,Fi.EventType.ERROR,(S=>{E||(E=!0,rn(yt,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),v.en(new K(H.UNAVAILABLE,"The operation could not be completed")))})),xi(h,Fi.EventType.MESSAGE,(S=>{var q;if(!E){const G=S.data[0];X(!!G,16349);const te=G,he=(te==null?void 0:te.error)||((q=te[0])==null?void 0:q.error);if(he){Y(yt,`RPC '${e}' stream ${s} received error:`,he);const Ce=he.status;let st=(function(x){const A=je[x];if(A!==void 0)return jp(A)})(Ce),it=he.message;Ce==="NOT_FOUND"&&it.includes("database")&&it.includes("does not exist")&&it.includes(this.databaseId.database)&&rn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),st===void 0&&(st=H.INTERNAL,it="Unknown error status: "+Ce+" with message "+he.message),E=!0,v.en(new K(st,it)),h.close()}else Y(yt,`RPC '${e}' stream ${s} received:`,G),v.tn(G)}})),Vs.rn(),setTimeout((()=>{v.Xt()}),0),v}terminate(){this.nn.forEach((e=>e.close())),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter((t=>t===e))}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return gp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n3(n){return new Vs(n)}Vs.sn=!1;class c6{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=s,this.In=i,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),s=Math.max(0,t-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,s,(()=>(this.dn=Date.now(),e()))),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="PersistentStream";class u6{constructor(e,t,r,s,i,o,a,u){this.Tn=e,this.yn=r,this.wn=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new c6(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,(()=>this.Ln())))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Fn(t.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.bn===t&&this.Kn(r,s)}),(r=>{e((()=>{const s=new K(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(s)}))}))}Kn(e,t){const r=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt((()=>{r((()=>this.listener.Qt()))})),this.stream.zt((()=>{r((()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,(()=>(this.Fn()&&(this.state=3),Promise.resolve()))),this.listener.zt())))})),this.stream.Ht((s=>{r((()=>this.Wn(s)))})),this.stream.onMessage((s=>{r((()=>++this.Dn==1?this.Gn(s):this.onNext(s)))}))}On(){this.state=5,this.xn.mn((async()=>{this.state=0,this.start()}))}Wn(e){return Y(yf,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget((()=>this.bn===e?t():(Y(yf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class r3 extends u6{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=U_(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?yn(o.readTime):ae.min()})(e);return this.listener.zn(t,r)}jn(e){const t={};t.database=wl(this.serializer),t.addTarget=(function(i,o){let a;const u=o.target;if(a=qr(u)?{pipelineQuery:j_(i,u)}:Gp(u)?{documents:H_(i,u)}:{query:$_(i,u).yt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Jp(i,o.resumeToken);const l=yl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=Xa(i,o.snapshotVersion.toTimestamp());const l=yl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a})(this.serializer,e);const r=W_(this.serializer,e);r&&(t.labels=r),this.Bn(t)}Hn(e){const t={};t.database=wl(this.serializer),t.removeTarget=e,this.Bn(t)}}class s3 extends u6{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=q_(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.Xn(r,t)}er(){const e={};e.database=wl(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>B_(this.serializer,r)))};this.Bn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{}class o3 extends i3{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.tr=!1}nr(){if(this.tr)throw new K(H.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Bt(e,El(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(H.UNKNOWN,i.toString())}))}$t(e,t,r,s,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.$t(e,El(t,r),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(H.UNKNOWN,o.toString())}))}terminate(){this.tr=!0,this.connection.terminate()}}function a3(n,e,t,r){return new o3(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c3="ComponentProvider",Ef=new Map;function u3(n,e,t,r,s){return new Q4(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,a6(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},l6=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(l6,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="LruGarbageCollector",l3=1048576;function Tf([n,e],[t,r]){const s=ye(n,t);return s===0?ye(e,r):s}class h3{constructor(e){this.rr=e,this.buffer=new Ye(Tf),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Tf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class d3{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){Y(If,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){si(t)?Y(If,"Ignoring IndexedDB error during garbage collection: ",t):await ri(t)}await this.ur(3e5)}))}}class f3{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Nc.ce);const r=new h3(t);return this.cr.forEachTarget(e,(s=>r._r(s.sequenceNumber))).next((()=>this.cr.Er(e,(s=>r._r(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.cr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(wf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wf):this.hr(e,t)))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let r,s,i,o,a,u,l;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,a=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(l=Date.now(),Ps()<=_e.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${g} documents in `+(l-u)+`ms
Total Duration: ${l-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function p3(n,e){return new f3(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h6="firestore.googleapis.com",Af=!0;class vf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=h6,this.ssl=Af}else this.host=e.host,this.ssl=e.ssl??Af;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=l6;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<l3)throw new K(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}M4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=a6(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new S4;switch(r.type){case"firstParty":return new x4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ef.get(t);r&&(Y(c3,"Removing Datastore"),Ef.delete(t),r.terminate())})(this),Promise.resolve()}}function g3(n,e,t,r={}){var l;n=sn(n,Uc);const s=ss(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},a=`${e}:${t}`;s&&jl(`https://${a}`),i.host!==h6&&i.host!==a&&rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:r};if(!gr(u,o)&&(n._setSettings(u),r.mockUserToken)){let h,g;if(typeof r.mockUserToken=="string")h=r.mockUserToken,g=It.MOCK_USER;else{h=tp(r.mockUserToken,(l=n._app)==null?void 0:l.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new K(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new It(E)}n._authCredentials=new P4(new yp(h,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new as(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Lo(t,He._jsonSchema))return new He(e,r||null,new Z(Te.fromString(t.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:Ke("string",He._jsonSchemaVersion),referencePath:Ke("string")};class lr extends as{constructor(e,t,r){super(e,t,rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new Z(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function YT(n,e,...t){if(n=Le(n),Ep("collection","path",e),n instanceof Uc){const r=Te.fromString(e,...t);return Kd(r),new lr(n,null,r)}{if(!(n instanceof He||n instanceof lr))throw new K(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return Kd(r),new lr(n.firestore,null,r)}}function m3(n,e,...t){if(n=Le(n),arguments.length===1&&(e=Xl.newId()),Ep("doc","path",e),n instanceof Uc){const r=Te.fromString(e,...t);return zd(r),new He(n,null,new Z(r))}{if(!(n instanceof He||n instanceof lr))throw new K(H.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return zd(r),new He(n.firestore,n instanceof lr?n.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lo(e,Dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Dt(e.vectorValues);throw new K(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dt._jsonSchemaVersion="firestore/vectorValue/1.0",Dt._jsonSchema={type:Ke("string",Dt._jsonSchemaVersion),vectorValues:Ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _3=/^__.*__$/;class y3{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fo(e,this.data,t,this.fieldTransforms)}}class d6{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Or(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function f6(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:n})}}class ch{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ch({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Za(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(f6(this.dataSource)&&_3.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class E3{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Lc(e)}createContext(e,t,r,s=!1){return new ch({dataSource:e,methodName:t,targetDoc:r,path:tt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bc(n){const e=n._freezeSettings(),t=Lc(n._databaseId);return new E3(n._databaseId,!!e.ignoreUndefinedProperties,t)}function p6(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);lh("Data must be an object, but it was:",o,r);const a=g6(r,o);let u,l;if(i.merge)u=new Ht(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const g of i.mergeFields){const E=Ar(e,g,t);if(!o.contains(E))throw new K(H.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);y6(h,E)||h.push(E)}u=new Ht(h),l=o.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,l=o.fieldTransforms;return new y3(new Nt(a),u,l)}class qc extends Fc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qc}}class uh extends Fc{_toFieldTransform(e){return new n_(e.path,new fo)}isEqual(e){return e instanceof uh}}function w3(n,e,t,r){const s=n.createContext(1,e,t);lh("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();xr(r,((u,l)=>{const h=_6(e,u,t);l=Le(l);const g=s.childContextForFieldPath(h);if(l instanceof qc)i.push(h);else{const E=Tr(l,g);E!=null&&(i.push(h),o.set(h,E))}}));const a=new Ht(i);return new d6(o,a,s.fieldTransforms)}function I3(n,e,t,r,s,i){const o=n.createContext(1,e,t),a=[Ar(e,r,t)],u=[s];if(i.length%2!=0)throw new K(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)a.push(Ar(e,i[E])),u.push(i[E+1]);const l=[],h=Nt.empty();for(let E=a.length-1;E>=0;--E)if(!y6(l,a[E])){const v=a[E];let S=u[E];S=Le(S);const q=o.childContextForFieldPath(v);if(S instanceof qc)l.push(v);else{const G=Tr(S,q);G!=null&&(l.push(v),h.set(v,G))}}const g=new Ht(l);return new d6(h,g,o.fieldTransforms)}function T3(n,e,t,r=!1){return Tr(t,n.createContext(r?4:3,e))}function Tr(n,e,t){if(m6(n=Le(n)))return lh("Unsupported field value:",e,n),g6(n,e);if(n instanceof Fc)return(function(s,i){if(!f6(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const o=[];let a=0;for(const u of s){let l=Tr(u,i.childContextForArray(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}})(n,e)}return(function(s,i,o){if((s=Le(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return eh(i.serializer,s,o);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=Ve.fromDate(s);return{timestampValue:Xa(i.serializer,a)}}if(s instanceof Ve){const a=new Ve(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xa(i.serializer,a)}}if(s instanceof En)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Kt)return{bytesValue:Jp(i.serializer,s._byteString)};if(s instanceof He){const a=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(a))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:ah(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Dt)return(function(u,l){const h=u instanceof Dt?u.toArray():u;return{mapValue:{fields:{[Sp]:{stringValue:Pp},[lo]:{arrayValue:{values:h.map((E=>{if(typeof E!="number")throw l.createError("VectorValues must only contain numeric values.");return Oc(l.serializer,E)}))}}}}}})(s,i);if(i6(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Pc(s)}`)})(n,e,t)}function g6(n,e){const t={};return Ip(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(n,((r,s)=>{const i=Tr(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function m6(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof En||n instanceof Kt||n instanceof He||n instanceof Fc||n instanceof Dt||i6(n))}function lh(n,e,t){if(!m6(t)||!Vo(t)){const r=Pc(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Ar(n,e,t){if((e=Le(e))instanceof Mc)return e._internalPath;if(typeof e=="string")return _6(n,e);throw Za("Field path arguments must be of type string or ",n,!1,void 0,t)}const A3=new RegExp("[~\\*/\\[\\]]");function _6(n,e,t){if(e.search(A3)>=0)throw Za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mc(...e.split("."))._internalPath}catch{throw Za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Za(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(H.INVALID_ARGUMENT,a+n+u)}function y6(n,e){return n.some((t=>t.isEqual(e)))}function E6(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=Nt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let a;i.nestedOptions&&Vo(o)?a={mapValue:{fields:new Ct(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=Tr(o,t)??void 0),a&&r.set(tt.fromServerFormat(i.serverName),a)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(K4(r,((o,a)=>[tt.fromServerFormat(a),o!==void 0?Tr(o,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v3(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Vo(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function QT(){return new uh("serverTimestamp")}function C3(n){return new Dt(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n){let e;return n instanceof cs?n:(e=Vo(n)?b3(n):n instanceof Array?x3(n):w6(n,void 0),e)}function Gu(n){if(n instanceof cs)return n;if(n instanceof Dt)return Eo(n);if(Array.isArray(n))return Eo(C3(n));throw new Error("Unsupported value: "+typeof n)}function hh(n){return W4(n)?Oa(n):W(n)}class cs{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,W(e)],"add")}asBoolean(){if(this instanceof vr)return this;if(this instanceof ai)return new T6(this);if(this instanceof oi)return new N3(this);if(this instanceof F)return new I6(this);throw new K("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,W(e)],"subtract")}multiply(e){return new F("multiply",[this,W(e)],"multiply")}divide(e){return new F("divide",[this,W(e)],"divide")}mod(e){return new F("mod",[this,W(e)],"mod")}equal(e){return new F("equal",[this,W(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,W(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,W(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,W(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,W(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,W(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map((s=>W(s)));return new F("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,W(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Bi(e.map(W),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Bi(e.map(W),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Bi(e.map(W),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Bi(e.map(W),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,W(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,W(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,W(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,W(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,W(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,W(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,W(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,W(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(W(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(W(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(W(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,Eo(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(W);return new F("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,W(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,W(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,W(e),W(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,W(e),W(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(W);return new F("concat",[this,...r],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,W(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,W(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new F("array_transform",[this,W(e),W(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,W(e)];return t!==void 0&&r.push(W(t)),new F("array_slice",r,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,W(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,W(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,W(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,W(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,W(e),W("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,W(e),W("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,W(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,Eo(e)],"mapGet")}mapSet(e,t,...r){const s=[this,W(e),W(t),...r.map(W)];return new F("map_set",s,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,W(e)],"get_field")}count(){return qt._create("count",[this],"count")}sum(){return qt._create("sum",[this],"sum")}average(){return qt._create("average",[this],"average")}minimum(){return qt._create("minimum",[this],"minimum")}maximum(){return qt._create("maximum",[this],"maximum")}first(){return qt._create("first",[this],"first")}last(){return qt._create("last",[this],"last")}arrayAgg(){return qt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return qt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return qt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new F("maximum",[this,...r.map(W)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new F("minimum",[this,...r.map(W)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,Gu(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,Gu(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,Gu(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,W(e),W(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,W(e),W(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,hh(e),W(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,W(e)];return t&&r.push(W(t)),new F("timestamp_extract",r,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const r=W(e);return new F("substring",t===void 0?[this,r]:[this,r,W(t)],"substring")}arrayGet(e){return new F("array_get",[this,W(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,W(e)],"ifError");return e instanceof vr?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,W(e)],"mapRemove")}mapMerge(e,...t){const r=W(e),s=t.map(W);return new F("map_merge",[this,r,...s],"mapMerge")}pow(e){return new F("pow",[this,W(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,W(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,W(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,W(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,W(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,W(e),...t.map(W)],"coalesce")}join(e){return new F("join",[this,W(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,W(e)])}timestampTruncate(e,t){const r=[this,W(e)];return t&&r.push(W(t)),new F("timestamp_trunc",r)}ascending(){return O3(this)}descending(){return k3(this)}as(e){return new S3(this,e,"as")}}class qt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new qt(e,t);return s._methodName=r,s}as(e){return new R3(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class R3{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class S3{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Bi extends cs{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map((t=>t._toProto(e)))}}}_readUserData(e){this.Rr.forEach((t=>t._readUserData(e)))}}class oi extends cs{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,W(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Oa(n){return P3(n,"field")}function P3(n,e){return new oi(typeof n=="string"?pn===n?X_()._internalPath:Ar("field",n):n._internalPath,e)}class ai extends cs{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new ai(e,void 0);return t._protoValue=e,t}_toProto(e){return X(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,v3(this._protoValue)||(this._protoValue=Tr(this.value,e))}}function Eo(n,e){return w6(n,"constant")}function w6(n,e){const t=new ai(n,e);return typeof n=="boolean"?new T6(t):t}class F extends cs{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ct({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((r=>r._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class vr extends cs{get _methodName(){return this._expr._methodName}countIf(){return qt._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=W(e),r=new F("if_error",[this,t],"ifError");return t instanceof vr?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class I6 extends vr{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class T6 extends vr{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class N3 extends vr{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function b3(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(Eo(r)),t.push(W(s))}return new F("map",t,"map")}function x3(n){return(function(t,r){return new F("array",t.map((s=>W(s))),r)})(n,"array")}function O3(n){return new A6(hh(n),"ascending","ascending")}function k3(n){return new A6(hh(n),"descending","descending")}class A6{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:o6(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class v6 extends Gt{get _name(){return"add_fields"}get _optionsUtil(){return new Ct({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[yo(e,this.fields)]}}_readUserData(e){super._readUserData(e),Cr(this.fields,e)}}class C6 extends Gt{get _name(){return"aggregate"}get _optionsUtil(){return new Ct({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[yo(e,this.accumulators),yo(e,this.groups)]}}_readUserData(e){super._readUserData(e),Cr(this.groups,e),Cr(this.accumulators,e)}}class R6 extends Gt{get _name(){return"distinct"}get _optionsUtil(){return new Ct({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[yo(e,this.groups)]}}_readUserData(e){super._readUserData(e),Cr(this.groups,e)}}class Hc extends Gt{get _name(){return"collection"}get _optionsUtil(){return new Ct({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class $c extends Gt{get _name(){return"collection_group"}get _optionsUtil(){return new Ct({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class dh extends Gt{get _name(){return"database"}get _optionsUtil(){return new Ct({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class fh extends Gt{get _name(){return"documents"}get _optionsUtil(){return new Ct({})}constructor(e,t){if(super(t),!e||e.length===0)throw new K(H.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(r);if(s.size!==r.length)throw new K(H.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=s}_toProto(e){return{...super._toProto(e),args:this.dr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class Gc extends Gt{get _name(){return"where"}get _optionsUtil(){return new Ct({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Cr(this.condition,e)}}class Jr extends Gt{get _name(){return"limit"}get _optionsUtil(){return new Ct({})}constructor(e,t){X(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[eh(e,this.limit)]}}}class Cf extends Gt{get _name(){return"offset"}get _optionsUtil(){return new Ct({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[eh(e,this.offset)]}}}class D3 extends Gt{get _name(){return"select"}get _optionsUtil(){return new Ct({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[yo(e,this.selections)]}}_readUserData(e){super._readUserData(e),Cr(this.selections,e)}}class Nn extends Gt{get _name(){return"sort"}get _optionsUtil(){return new Ct({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),Cr(this.orderings,e)}}class ph extends Gt{get _name(){return"replace_with"}get _optionsUtil(){return new Ct({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),o6(ph.pr)]}}_readUserData(e){super._readUserData(e),Cr(this.map,e)}}ph.pr="full_replace";function Cr(n,e){return E6(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}// Copyright 2024 Google LLC* @license
class Pt{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Wc(this)}getPipelineCollectionGroup(){return gh(this)}getPipelineCollectionId(){return V3(this)}getPipelineDocuments(){return Tl(this)}getPipelineFlavor(){return(function(t){let r="exact";return t.stages.forEach(((s,i)=>{s._name!==R6.name&&s._name!==C6.name||(r="keyless"),s._name===D3.name&&r==="exact"&&(r="augmented"),s._name===v6.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")})),r})(this)}getPipelineSourceType(){return hr(this)}}function hr(n){const e=n.stages[0];return e instanceof Hc||e instanceof $c||e instanceof dh||e instanceof fh?e._name:"unknown"}function Wc(n){if(hr(n)==="collection")return n.stages[0].Vr}function gh(n){if(hr(n)==="collection_group")return n.stages[0].collectionId}function V3(n){switch(hr(n)){case"collection":return Te.fromString(Wc(n)).lastSegment();case"collection_group":return gh(n);default:return}}function Tl(n){if(hr(n)==="documents")return n.stages[0].dr}class Yi{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}wr(e,t){const r=this.userDataReader.createContext(3,e);return E6(t)?t._readUserData(r):Array.isArray(t)?t.forEach((s=>s._readUserData(r))):t.forEach((s=>s._readUserData(r))),t}where(e){const t=this.stages.map((r=>r));return this.wr("where",e),t.push(new Gc(e,{})),new Yi(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((r=>r));return t.push(new Jr(e,{})),new Yi(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map((s=>s));return"orderings"in e?r.push(new Nn(this.wr("sort",e.orderings),{})):r.push(new Nn(this.wr("sort",[e,...t]),{})),new Yi(this._db,this.userDataReader,this._userDataWriter,r)}br(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class P{constructor(e,t){this.type=e,this.value=t}static vr(){return new P("ERROR",void 0)}static Sr(){return new P("UNSET",void 0)}static Dr(){return new P("NULL",Ws)}static newValue(e){return $t(e)?new P("NULL",Ws):(function(r){return!!r&&"booleanValue"in r})(e)?new P("BOOLEAN",e):gn(e)?new P("INT",e):Hr(e)?new P("DOUBLE",e):(function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue})(e)?new P("TIMESTAMP",e):(function(r){return!!r&&"stringValue"in r})(e)?new P("STRING",e):(function(r){return!!r&&"bytesValue"in r})(e)?new P("BYTES",e):e.referenceValue?new P("REFERENCE",e):e.geoPointValue?new P("GEO_POINT",e):zs(e)?new P("ARRAY",e):ja(e)?new P("VECTOR",e):Wr(e)?new P("MAP",e):new P("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function Qi(n){if(!n.Cr())return n.value}function S6(n){return n instanceof vr?n._expr:n}function ne(n){if((n=S6(n))instanceof oi)return new L3(n);if(n instanceof ai)return new M3(n);if(n instanceof Bi)return new F3(n);if(n instanceof F){if(n.name==="add")return new q3(n);if(n.name==="subtract")return new H3(n);if(n.name==="multiply")return new $3(n);if(n.name==="divide")return new G3(n);if(n.name==="mod")return new W3(n);if(n.name==="and")return new j3(n);if(n.name==="equal")return new s8(n);if(n.name==="not_equal")return new i8(n);if(n.name==="less_than")return new o8(n);if(n.name==="less_than_or_equal")return new a8(n);if(n.name==="greater_than")return new c8(n);if(n.name==="greater_than_or_equal")return new u8(n);if(n.name==="array_concat")return new l8(n);if(n.name==="array_reverse")return new h8(n);if(n.name==="array_contains")return new d8(n);if(n.name==="array_contains_all")return new f8(n);if(n.name==="array_contains_any")return new p8(n);if(n.name==="array_length")return new g8(n);if(n.name==="array_element")return new m8(n);if(n.name==="equal_any")return new P6(n);if(n.name==="not_equal_any")return new K3(n);if(n.name==="is_nan")return new Y3(n);if(n.name==="is_not_nan")return new Q3(n);if(n.name==="is_null")return new X3(n);if(n.name==="is_not_null")return new J3(n);if(n.name==="is_error")return new Z3(n);if(n.name==="exists")return new e8(n);if(n.name==="not")return new jc(n);if(n.name==="or")return new z3(n);if(n.name==="xor")return new mh(n);if(n.name==="conditional")return new t8(n);if(n.name==="maximum")return new n8(n);if(n.name==="minimum")return new r8(n);if(n.name==="reverse")return new _8(n);if(n.name==="replace_first")return new y8(n);if(n.name==="replace_all")return new E8(n);if(n.name==="char_length")return new w8(n);if(n.name==="byte_length")return new I8(n);if(n.name==="like")return new T8(n);if(n.name==="regex_contains")return new A8(n);if(n.name==="regex_match")return new v8(n);if(n.name==="string_contains")return new C8(n);if(n.name==="starts_with")return new R8(n);if(n.name==="ends_with")return new S8(n);if(n.name==="to_lower")return new P8(n);if(n.name==="to_upper")return new N8(n);if(n.name==="trim")return new b8(n);if(n.name==="string_concat")return new x8(n);if(n.name==="map_get")return new O8(n);if(n.name==="cosine_distance")return new k8(n);if(n.name==="dot_product")return new D8(n);if(n.name==="euclidean_distance")return new V8(n);if(n.name==="vector_length")return new L8(n);if(n.name==="unix_micros_to_timestamp")return new q8(n);if(n.name==="timestamp_to_unix_micros")return new G8(n);if(n.name==="unix_millis_to_timestamp")return new H8(n);if(n.name==="timestamp_to_unix_millis")return new W8(n);if(n.name==="unix_seconds_to_timestamp")return new $8(n);if(n.name==="timestamp_to_unix_seconds")return new j8(n);if(n.name==="timestamp_add")return new z8(n);if(n.name==="timestamp_subtract")return new K8(n)}throw new Error(`Unknown Expr : ${n}`)}class L3{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===pn)return P.newValue({referenceValue:Ja(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return P.newValue({timestampValue:xa(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return P.newValue({timestampValue:xa(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?xc(r)?P.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:xa(i.serializer,ae.fromTimestamp(Gs(o)))};if(i.serverTimestampBehavior==="previous"){const a=Mo(o);if(a)return a}return{nullValue:"NULL_VALUE"}})(e,r)):P.newValue(r):P.Sr()}}class M3{constructor(e){this.expr=e}evaluate(e,t){return P.newValue(this.expr._getValue())}}class F3{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map((s=>ne(s).evaluate(e,t)));return r.some((s=>s.Cr()))?P.vr():P.newValue({arrayValue:{values:r.map((s=>s.value))}})}}function gt(n){return Hr(n)?Number(n.doubleValue):Number(n.integerValue)}function Tn(n){return BigInt(n.integerValue)}const U3=BigInt("0x7fffffffffffffff"),B3=-BigInt("0x8000000000000000");class qo{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length>=2,24778);const r=ne(this.expr.params[0]).evaluate(e,t),s=ne(this.expr.params[1]).evaluate(e,t);let i=this.Or(r,s);for(const o of this.expr.params.slice(2)){const a=ne(o).evaluate(e,t);i=this.Or(i,a)}return i}Or(e,t){if(e.Cr()||t.Cr())return P.vr();if(e.Fr()||t.Fr())return P.Dr();const r=e.value,s=t.value;if(!Hr(r)&&!gn(r)||!Hr(s)&&!gn(s))return P.vr();if(Hr(r)||Hr(s)){const i=this.Mr(r,s);return i?P.newValue(i):P.vr()}if(gn(r)&&gn(s)){const i=this.Nr(r,s);return i===void 0?P.vr():typeof i=="number"?P.newValue({doubleValue:i}):i<B3||i>U3?P.vr():P.newValue({integerValue:`${i}`})}return P.vr()}}function Un(n,e){return Xe(n)!==Xe(e)?"TYPE_MISMATCH":Ft(n)||Ft(e)?"NOT_EQ":$t(n)&&$t(e)?"EQ":$t(n)||$t(e)?"NULL":zs(n)&&zs(e)?(function(r,s){var o,a,u;if(((o=r.values)==null?void 0:o.length)!==((a=s.values)==null?void 0:a.length))return"NOT_EQ";let i=!1;for(let l=0;l<(((u=r.values)==null?void 0:u.length)??0);l++){const h=r.values[l],g=s.values[l];switch(Un(h,g)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:ee(44609,{Lr:h,Br:g})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):ja(n)&&ja(e)||Wr(n)&&Wr(e)?(function(r,s){const i=r.fields||{},o=s.fields||{};if(Ga(i)!==Ga(o))return"NOT_EQ";let a=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(Un(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(r,s){return Qt(r,s,{Te:!1,Ee:!0,he:!0})})(n,e)?"EQ":"NOT_EQ"}class q3 extends qo{Nr(e,t){return Tn(e)+Tn(t)}Mr(e,t){return{doubleValue:gt(e)+gt(t)}}}class H3 extends qo{constructor(e){super(e),this.expr=e}Nr(e,t){return Tn(e)-Tn(t)}Mr(e,t){return{doubleValue:gt(e)-gt(t)}}}class $3 extends qo{constructor(e){super(e),this.expr=e}Nr(e,t){return Tn(e)*Tn(t)}Mr(e,t){return{doubleValue:gt(e)*gt(t)}}}class G3 extends qo{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Tn(t);if(r!==BigInt(0))return Tn(e)/r}Mr(e,t){const r=gt(t);return r===0?{doubleValue:co(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:gt(e)/r}}}class W3 extends qo{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Tn(t);if(r!==BigInt(0))return Tn(e)%r}Mr(e,t){const r=gt(t);if(r!==0)return{doubleValue:gt(e)%r}}}class j3{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const a=ne(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!((i=a.value)!=null&&i.booleanValue))return P.newValue(pt);break;case"NULL":s=!0;break;default:r=!0}}return r?P.vr():s?P.Dr():P.newValue(Lt)}}class jc{constructor(e){this.expr=e}evaluate(e,t){var s;X(this.expr.params.length===1,9634);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return P.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return P.Dr();default:return P.vr()}}}class z3{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const a=ne(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if((i=a.value)!=null&&i.booleanValue)return P.newValue(Lt);break;case"NULL":s=!0;break;default:r=!0}}return r?P.vr():s?P.Dr():P.newValue(pt)}}class mh{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const a=ne(o).evaluate(e,t);switch(a.type){case"BOOLEAN":r=mh.xor(r,!!((i=a.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return P.vr()}}return s?P.Dr():P.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class P6{constructor(e){this.expr=e}evaluate(e,t){var o,a;X(this.expr.params.length===2,55094);let r=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return P.vr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return P.vr()}if(r)return P.Dr();for(const u of((a=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:a.values)??[])switch($t(s.value)&&$t(u)?"EQ":Un(s.value,u)){case"EQ":return P.newValue(Lt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:ee(44608,{value:s.value,candidate:u})}return r?P.Dr():P.newValue(pt)}}class K3{constructor(e){this.expr=e}evaluate(e,t){return new jc(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class Y3{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===1,23322);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return P.newValue(pt);case"DOUBLE":return P.newValue({booleanValue:isNaN(gt(r.value))});case"NULL":return P.Dr();default:return P.vr()}}}class Q3{constructor(e){this.expr=e}evaluate(e,t){return X(this.expr.params.length===1,50406),new jc(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class X3{constructor(e){this.expr=e}evaluate(e,t){switch(X(this.expr.params.length===1,23123),ne(this.expr.params[0]).evaluate(e,t).type){case"NULL":return P.newValue(Lt);case"UNSET":case"ERROR":return P.vr();default:return P.newValue(pt)}}}class J3{constructor(e){this.expr=e}evaluate(e,t){return X(this.expr.params.length===1,23167),new jc(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class Z3{constructor(e){this.expr=e}evaluate(e,t){return X(this.expr.params.length===1,5228),ne(this.expr.params[0]).evaluate(e,t).type==="ERROR"?P.newValue(Lt):P.newValue(pt)}}class e8{constructor(e){this.expr=e}evaluate(e,t){switch(X(this.expr.params.length===1,6877),ne(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return P.vr();case"UNSET":return P.newValue(pt);default:return P.newValue(Lt)}}}class t8{constructor(e){this.expr=e}evaluate(e,t){var s;X(this.expr.params.length===3,11706);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?ne(this.expr.params[1]).evaluate(e,t):ne(this.expr.params[2]).evaluate(e,t);case"NULL":return ne(this.expr.params[2]).evaluate(e,t);default:return P.vr()}}}class n8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>ne(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Mt(i.value,s.value)>0?i:s}return s===void 0?P.Dr():s}}class r8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>ne(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Mt(i.value,s.value)<0?i:s}return s===void 0?P.Dr():s}}class ci{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return P.vr()}const s=ne(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return P.vr()}return this.Ur(r,s)}}class s8 extends ci{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return P.newValue(Lt);if(e.Fr()||t.Fr()||Ft(e.value)||Ft(t.value)||Xe(e.value)!==Xe(t.value))return P.newValue(pt);switch(Un(e.value,t.value)){case"EQ":return P.newValue(Lt);case"NOT_EQ":return P.newValue(pt);case"NULL":return P.Dr();default:ee(44615,{left:e,right:t})}}}class i8 extends ci{constructor(e){super(e),this.expr=e}Ur(e,t){switch(Un(e.value,t.value)){case"EQ":return P.newValue(pt);case"NOT_EQ":case"TYPE_MISMATCH":return P.newValue(Lt);case"NULL":return P.Dr();default:ee(44614,{left:e,right:t})}}}class o8 extends ci{constructor(e){super(e),this.expr=e}Ur(e,t){return Xe(e.value)!==Xe(t.value)||Ft(e.value)||Ft(t.value)?P.newValue(pt):P.newValue({booleanValue:Mt(e.value,t.value)<0})}}class a8 extends ci{constructor(e){super(e),this.expr=e}Ur(e,t){return Xe(e.value)!==Xe(t.value)||Ft(e.value)||Ft(t.value)?P.newValue(pt):Un(e.value,t.value)==="EQ"?P.newValue(Lt):P.newValue({booleanValue:Mt(e.value,t.value)<0})}}class c8 extends ci{constructor(e){super(e),this.expr=e}Ur(e,t){return Xe(e.value)!==Xe(t.value)||Ft(e.value)||Ft(t.value)?P.newValue(pt):P.newValue({booleanValue:Mt(e.value,t.value)>0})}}class u8 extends ci{constructor(e){super(e),this.expr=e}Ur(e,t){return Xe(e.value)!==Xe(t.value)||Ft(e.value)||Ft(t.value)?P.newValue(pt):Un(e.value,t.value)==="EQ"?P.newValue(Lt):P.newValue({booleanValue:Mt(e.value,t.value)>0})}}class l8{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class h8{constructor(e){this.expr=e}evaluate(e,t){var s;X(this.expr.params.length===1,216);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return P.Dr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return P.newValue({arrayValue:{values:[...i].reverse()}})}default:return P.vr()}}}class d8{constructor(e){this.expr=e}evaluate(e,t){return X(this.expr.params.length===2,52884),new P6(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class f8{constructor(e){this.expr=e}evaluate(e,t){var u,l,h,g;X(this.expr.params.length===2,1392);let r=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return P.vr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return P.vr()}if(r)return P.Dr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],a=((g=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:g.values)??[];for(const E of o){let v=!1;r=!1;for(const S of a){switch($t(E)&&$t(S)?"EQ":Un(E,S)){case"EQ":v=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:ee(44613,{value:S,search:E})}if(v)break}if(!v)return P.newValue(pt)}return P.newValue(Lt)}}class p8{constructor(e){this.expr=e}evaluate(e,t){var u,l,h,g;X(this.expr.params.length===2,2680);let r=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return P.vr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return P.vr()}if(r)return P.Dr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],a=((g=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:g.values)??[];for(const E of a)for(const v of o)switch($t(E)&&$t(v)?"EQ":Un(E,v)){case"EQ":return P.newValue(Lt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:ee(44608,{value:E,search:v})}return r?P.Dr():P.newValue(pt)}}class g8{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;X(this.expr.params.length===1,38605);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return P.Dr();case"ARRAY":return P.newValue({integerValue:`${((o=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return P.vr()}}}class m8{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _8{constructor(e){this.expr=e}evaluate(e,t){var s,i;X(this.expr.params.length===1,1508);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return P.Dr();case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const a=Qe.fromBase64String(o).toUint8Array();return a.reverse(),P.newValue({bytesValue:Qe.fromUint8Array(a).toBase64()})}return P.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=r.value)==null?void 0:i.stringValue,a=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(a,(l=>l.segment)).reverse();return P.newValue({stringValue:u.join("")})}default:return P.vr()}}}class y8{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class E8{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class w8{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===1,19400);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return P.Dr();case"STRING":{const s=(function(o){let a=0;for(let u=0;u<o.length;u++){const l=o.codePointAt(u);if(l===void 0)return;if(l<=65535)if(l>=55296&&l<=57343)if(l<=56319){const h=o.codePointAt(u+1);h!==void 0&&h>=56320&&h<=57343?(a+=1,u++):a+=1}else a+=1;else a+=1;else{if(!(l<=1114111))return;a+=1,u++}}return a})(r.value.stringValue);return s===void 0?P.vr():P.newValue({integerValue:s})}default:return P.vr()}}}class I8{constructor(e){this.expr=e}evaluate(e,t){var s,i;X(this.expr.params.length===1,8486);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;return typeof o=="string"?P.newValue({integerValue:Qe.fromBase64String(o).toUint8Array().length}):P.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(u){let l=0;for(let h=0;h<u.length;h++){const g=u.codePointAt(h);if(g===void 0)return;if(g>=55296&&g<=57343){if(!(g<=56319))return;{const E=u.codePointAt(h+1);if(E===void 0||!(E>=56320&&E<=57343))return;l+=4,h++}}else if(g<=127)l+=1;else if(g<=2047)l+=2;else if(g<=65535)l+=3;else{if(!(g<=1114111))return;l+=4,h++}}return l})((i=r.value)==null?void 0:i.stringValue);return o===void 0?P.vr():P.newValue({integerValue:o})}case"NULL":return P.Dr();default:return P.vr()}}}class ui{constructor(e){this.expr=e}evaluate(e,t){var o,a;X(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return P.vr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return P.vr()}return r?P.Dr():this.kr((o=s.value)==null?void 0:o.stringValue,(a=i.value)==null?void 0:a.stringValue)}}class T8 extends ui{kr(e,t){try{const r=(function(o){let a="";for(let u=0;u<o.length;u++){const l=o.charAt(u);switch(l){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+l;break;default:a+=l}}return"^"+a+"$"})(t),s=oo.compile(r);return P.newValue({booleanValue:s.matches(e)})}catch(r){return rn(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),P.vr()}}}class A8 extends ui{kr(e,t){try{const r=oo.compile(t);return P.newValue({booleanValue:r.matcher(e).find()})}catch{return rn(`Invalid regex pattern found in regex_contains: ${t}, returning error`),P.vr()}}}class v8 extends ui{kr(e,t){try{return P.newValue({booleanValue:oo.compile(t).matches(e)})}catch{return rn(`Invalid regex pattern found in regex_match: ${t}, returning error`),P.vr()}}}class C8 extends ui{kr(e,t){return P.newValue({booleanValue:e.includes(t)})}}class R8 extends ui{kr(e,t){return P.newValue({booleanValue:e.startsWith(t)})}}class S8 extends ui{kr(e,t){return P.newValue({booleanValue:e.endsWith(t)})}}class P8{constructor(e){this.expr=e}evaluate(e,t){var s,i;X(this.expr.params.length===1,29079);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return P.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return P.Dr();default:return P.vr()}}}class N8{constructor(e){this.expr=e}evaluate(e,t){var s,i;X(this.expr.params.length===1,60487);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return P.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return P.Dr();default:return P.vr()}}}class b8{constructor(e){this.expr=e}evaluate(e,t){var s,i;X(this.expr.params.length===1,28544);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return P.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return P.Dr();default:return P.vr()}}}class x8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((o=>ne(o).evaluate(e,t)));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return P.vr()}return i?P.Dr():P.newValue({stringValue:s})}}class O8{constructor(e){this.expr=e}evaluate(e,t){var o,a,u,l;X(this.expr.params.length===2,4483);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return P.Sr();case"MAP":break;default:return P.vr()}const s=ne(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return P.vr();const i=(l=(a=(o=r.value)==null?void 0:o.mapValue)==null?void 0:a.fields)==null?void 0:l[(u=s.value)==null?void 0:u.stringValue];return i===void 0?P.Sr():P.newValue(i)}}class _h{constructor(e){this.expr=e}evaluate(e,t){var l,h;X(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return P.vr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return P.vr()}if(r)return P.Dr();const o=pl(s.value),a=pl(i.value);if(o===void 0||a===void 0||((l=o.values)==null?void 0:l.length)!==((h=a.values)==null?void 0:h.length))return P.vr();const u=this.qr(o,a);return u===void 0||isNaN(u)?P.vr():P.newValue({doubleValue:u})}}class k8 extends _h{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,o=0,a=0;for(let l=0;l<r.length;l++){if(!Ir(r[l])||!Ir(s[l]))return;const h=gt(r[l]),g=gt(s[l]);i+=h*g,o+=h*h,a+=g*g}const u=Math.sqrt(o)*Math.sqrt(a);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class D8 extends _h{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Ir(r[o])||!Ir(s[o]))return;i+=gt(r[o])*gt(s[o])}return i}}class V8 extends _h{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Ir(r[o])||!Ir(s[o]))return;const a=gt(r[o]),u=gt(s[o]);i+=Math.pow(a-u,2)}return Math.sqrt(i)}}class L8{constructor(e){this.expr=e}evaluate(e,t){var s;X(this.expr.params.length===1,39044);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=pl(r.value);return P.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return P.Dr();default:return P.vr()}}}const wo=BigInt(-62135596800),Io=BigInt(253402300799),ec=BigInt(1e3),dr=BigInt(1e6),M8=wo*ec,F8=Io*ec+BigInt(999),U8=wo*dr,B8=Io*dr+BigInt(999999);function yh(n){return n>=U8&&n<=B8}function N6(n){return n>=wo&&n<=Io}function To(n,e){const t=BigInt(n);return!(t<wo||t>Io)&&!(e<0||e>=1e9)&&(t!==wo||e===0)&&!(t===Io&&e>999999999)}function b6(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Eh(n){return BigInt(n.seconds)*dr+BigInt(Math.trunc(n.nanoseconds/1e3))}class wh{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return P.Dr();default:return P.vr()}}}class q8 extends wh{toTimestamp(e){if(!yh(e))return P.vr();let t=Number(e/dr),r=Number(e%dr*BigInt(1e3));const s=b6(t,r);return t=s.seconds,r=s.nanos,To(t,r)?P.newValue({timestampValue:{seconds:t,nanos:r}}):P.vr()}}class H8 extends wh{toTimestamp(e){if(!(function(o){return o>=M8&&o<=F8})(e))return P.vr();let t=Number(e/ec),r=Number(e%ec*BigInt(1e6));const s=b6(t,r);return t=s.seconds,r=s.nanos,To(t,r)?P.newValue({timestampValue:{seconds:t,nanos:r}}):P.vr()}}class $8 extends wh{toTimestamp(e){if(!N6(e))return P.vr();const t=Number(e);return P.newValue({timestampValue:{seconds:t,nanos:0}})}}class Ih{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return P.Dr();default:return P.vr()}const s=oh(r.value.timestampValue);return To(s.seconds,s.nanoseconds)?this.$r(s):P.vr()}}class G8 extends Ih{$r(e){const t=Eh(e);return yh(t)?P.newValue({integerValue:`${t.toString()}`}):P.vr()}}class W8 extends Ih{$r(e){const t=Eh(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?P.newValue({integerValue:r.toString()}):P.newValue({integerValue:(r-BigInt(1)).toString()})}}class j8 extends Ih{$r(e){const t=BigInt(e.seconds);return N6(t)?P.newValue({integerValue:t.toString()}):P.vr()}}class x6{constructor(e){this.expr=e}evaluate(e,t){X(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return P.vr()}const i=ne(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(he){switch(he){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return P.vr();break;case"NULL":r=!0;break;default:return P.vr()}const a=ne(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":r=!0;break;default:return P.vr()}if(r)return P.Dr();const u=BigInt(a.value.integerValue);let l;try{switch(o){case"microsecond":l=u;break;case"millisecond":l=u*BigInt(1e3);break;case"second":l=u*BigInt(1e6);break;case"minute":l=u*BigInt(6e7);break;case"hour":l=u*BigInt(36e8);break;case"day":l=u*BigInt(864e8);break;default:return P.vr()}if(o!=="microsecond"&&u!==BigInt(0)&&l/u!==BigInt(this.Kr(o)))return P.vr()}catch(te){return rn(`Error during timestamp arithmetic: ${te}`),P.vr()}const h=oh(s.value.timestampValue);if(!To(h.seconds,h.nanoseconds))return P.vr();const g=Eh(h),E=this.Wr(g,l);if(!yh(E))return P.vr();const v=Number(E/dr),S=E%dr,q=Number((S<0?S+dr:S)*BigInt(1e3)),G=S<0?v-1:v;return To(G,q)?P.newValue({timestampValue:{seconds:G,nanos:q}}):P.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class z8 extends x6{Wr(e,t){return e+t}}class K8 extends x6{Wr(e,t){return e-t}}function Ao(n){if((n=S6(n))instanceof oi)return`fld(${n.fieldName})`;if(n instanceof ai)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof He?`ref(${t.path})`:t instanceof Dt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof F)return`fn(${n.name},[${n.params.map(Ao).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(Ao).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function Y8(n){if(n instanceof v6)return`${n._name}(${Aa(n.fields)})`;if(n instanceof C6){let e=`${n._name}(${Aa(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Aa(n.groups)})`),e}if(n instanceof R6)return`${n._name}(${Aa(n.groups)})`;if(n instanceof Hc)return`${n._name}(${n.Vr})`;if(n instanceof $c)return`${n._name}(${n.collectionId})`;if(n instanceof dh)return`${n._name}()`;if(n instanceof fh)return`${n._name}(${n.dr.sort()})`;if(n instanceof Gc)return`${n._name}(${Ao(n.condition)})`;if(n instanceof Jr)return`${n._name}(${n.limit})`;if(n instanceof Nn)return`${n._name}(${(function(t){return t.map((r=>`${Ao(r.expr)}${r.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Aa(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${Ao(t)}`)).join(",")}`}function Vn(n){return n.stages.map((e=>Y8(e))).join("|")}function O6(n,e){return Vn(n)===Vn(e)}function nt(n){return n instanceof Pt}function Rf(n){return nt(n)?Vn(n):zi(n)}function k6(n){return nt(n)?Vn(n):(function(t){return`${Hp(_n(t))}|lt:${t.limitType}`})(n)}function zc(n,e){return n instanceof Pt&&e instanceof Pt?O6(n,e):!(n instanceof Pt&&!(e instanceof Pt)||!(n instanceof Pt)&&e instanceof Pt)&&T_(n,e)}function D6(n){return qr(n)?Vn(n):Hp(n)}function V6(n,e){return n instanceof Pt&&e instanceof Pt?O6(n,e):!(n instanceof Pt&&!(e instanceof Pt)||!(n instanceof Pt)&&e instanceof Pt)&&$p(n,e)}function Q8(n,e){const t=(function(s){let i=!1;const o=[];for(const a of s)if(a instanceof Nn)if(i=!0,a.orderings.some((u=>u.expr instanceof oi&&u.expr.fieldName===pn)))o.push(a);else{const u=a.orderings.map((l=>l));u.push(Oa(pn).ascending()),o.push(new Nn(u,{}))}else a instanceof Jr&&(i||(o.push(new Nn([Oa(pn).ascending()],{})),i=!0)),o.push(a);return i||o.push(new Nn([Oa(pn).ascending()],{})),o})(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach((s=>s._readUserData(r)))}return new Pt(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X8{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&i_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Wi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Wi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Yp();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const u=Dp(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ae.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ge())}isEqual(e){return this.batchId===e.batchId&&$s(this.mutations,e.mutations,((t,r)=>rf(t,r)))&&$s(this.baseMutations,e.baseMutations,((t,r)=>rf(t,r)))}}class Th{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{Qr:e.mutations.length,Gr:r.length});let s=(function(){return S_})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Th(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J8{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,r,s,i=ae.min(),o=ae.min(),a=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z8{constructor(e){this.zr=e}}function e9(n){const e=G_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_l(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t9{constructor(){this.Hi=new n9}addToCollectionParentIndex(e,t){return this.Hi.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(yr.min())}updateCollectionGroup(e,t,r){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class n9{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ye(Te.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new Rr(0)}static Cs(){return new Rr(-1)}}// Copyright 2024 Google LLC* @license
function L6(n,e){var r;let t=e;for(const s of n.stages)t=s9({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function Kc(n,e){return L6(n,[e]).length>0}function r9(n,e){return nt(n)?Kc(n,e):Vc(n,e)}function s9(n,e,t){if(e instanceof Hc)return(function(s,i,o){return o.filter((a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.Vr))})(0,e,t);if(e instanceof Gc)return(function(s,i,o){return o.filter((a=>{const u=Qi(ne(i.condition).evaluate(s,a));return u!==void 0&&Qt(u,Lt)}))})(n,e,t);if(e instanceof $c)return(function(s,i,o){return o.filter((a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof dh)return(function(s,i,o){return o.filter((a=>a.isFoundDocument()))})(0,0,t);if(e instanceof fh)return(function(s,i,o){return o.filter((a=>a.isFoundDocument()&&i.mr.has(a.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Jr)return(function(s,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof Nn)return(function(s,i,o){const a=i.orderings.map((u=>({ks:ne(u.expr),direction:u.direction})));return[...o].sort(((u,l)=>{for(const{ks:h,direction:g}of a){const E=Qi(h.evaluate(s,u)),v=Qi(h.evaluate(s,l)),S=Mt(E??Ws,v??Ws);if(S!==0)return g==="ascending"?S:-S}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Al(n){const e=(function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Nn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,r)=>{for(const s of e){const i=Qi(ne(s.expr).evaluate({serializer:n.serializer},t)),o=Qi(ne(s.expr).evaluate({serializer:n.serializer},r)),a=Mt(i||Ws,o||Ws);if(a!==0)return s.direction==="ascending"?a:-a}return 0}}function Wu(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Jr)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(){this.changes=new os((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?$.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Wi(r.mutation,s,Ht.empty(),Ve.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ge()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ge()){const s=er();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Ns();return i.forEach(((a,u)=>{o=o.insert(a,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=er();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ge())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,r,s){let i=xt();const o=Ki(),a=(function(){return Ki()})();return t.forEach(((u,l)=>{const h=r.get(l.key);s.has(l.key)&&(h===void 0||h.mutation instanceof Or)?i=i.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),Wi(h.mutation,l,h.mutation.getFieldMask(),Ve.now())):o.set(l.key,Ht.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((l,h)=>o.set(l,h))),t.forEach(((l,h)=>a.set(l,new o9(h,o.get(l)??null)))),a)))}recalculateAndSaveOverlays(e,t){const r=Ki();let s=new We(((o,a)=>o-a)),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((u=>{const l=t.get(u);if(l===null)return;let h=r.get(u)||Ht.empty();h=a.applyToLocalView(l,h),r.set(u,h);const g=(s.get(a.batchId)||ge()).add(u);s=s.insert(a.batchId,g)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,h=u.value,g=Yp();h.forEach((E=>{if(!i.has(E)){const v=Dp(t.get(E),r.get(E));v!==null&&g.set(E,v),i=i.add(E)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,g))}return $.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return nt(t)?this.getDocumentsMatchingPipeline(e,t,r,s):E_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):$.resolve(er());let a=ao,u=i;return o.next((l=>$.forEach(l,((h,g)=>(a<g.largestBatchId&&(a=g.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next((E=>{u=u.insert(h,E)}))))).next((()=>this.populateOverlays(e,l,i))).next((()=>this.computeViews(e,u,l,ge()))).next((h=>({batchId:a,changes:Kp(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next((r=>{let s=Ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,i).next((a=>$.forEach(a,(u=>{const l=(function(g,E){return new ii(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next((h=>{h.forEach(((g,E)=>{o=o.insert(g,E)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Vc(t,a)))))}getDocumentsMatchingPipeline(e,t,r,s){if(hr(t)==="collection_group"){const i=gh(t);let o=Ns();return this.indexManager.getCollectionParents(e,i).next((a=>$.forEach(a,(u=>{const l=(function(g,E){const v=g.stages.map((S=>S instanceof $c?new Hc(E.canonicalString(),{}):S));return new Pt(g.serializer,v)})(t,u.child(i));return this.getDocumentsMatchingPipeline(e,l,r,s).next((h=>{h.forEach(((g,E)=>{o=o.insert(g,E)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next((o=>{switch(i=o,hr(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let a=ge();for(const u of Tl(t))a=a.add(Z.fromPath(u));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new K("invalid-argument",`Invalid pipeline source to execute offline: ${Vn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Kc(t,a)))))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach(((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,Tt.newInvalidDocument(a)))}));let s=Ns();return t.forEach(((i,o)=>{const a=e.get(i);a!==void 0&&Wi(a.mutation,o,Ht.empty(),Ve.now()),r(o)&&(s=s.insert(i,o))})),s}getOverlaysForPipeline(e,t,r){switch(hr(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Te.fromString(Wc(t)),r);case"collection_group":throw new K("invalid-argument",`Unexpected collection group pipeline: ${Vn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Tl(t).map((s=>Z.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new K("invalid-argument",`Failed to get overlays for pipeline: ${Vn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c9{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return $.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,(function(s){return{name:s.name,query:e9(s.bundledQuery),readTime:yn(s.readTime)}})(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(){this.overlays=new We(Z.comparator),this.Ys=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const r=er();return $.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}getAllOverlays(e,t){const r=er();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&r.set(s,i)})),$.resolve(r)}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.Hr(e,t,i)})),$.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ys.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ys.delete(r)),$.resolve()}getOverlaysForCollection(e,t,r){const s=er(),i=t.length+1,o=new Z(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return $.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new We(((l,h)=>l-h));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let h=i.get(l.largestBatchId);h===null&&(h=er(),i=i.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=er(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((l,h)=>a.set(l,h))),!(a.size()>=s)););return $.resolve(a)}Hr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ys.get(s.largestBatchId).delete(r.key);this.Ys.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new J8(t,r));let i=this.Ys.get(t);i===void 0&&(i=ge(),this.Ys.set(t,i)),this.Ys.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l9{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.Zs=new Ye(lt.Xs),this.e_=new Ye(lt.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new lt(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.r_(new lt(e,t))}i_(e,t){e.forEach((r=>this.removeReference(r,t)))}s_(e){const t=new Z(new Te([])),r=new lt(t,e),s=new lt(t,e+1),i=[];return this.e_.forEachInRange([r,s],(o=>{this.r_(o),i.push(o.key)})),i}__(){this.Zs.forEach((e=>this.r_(e)))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new Z(new Te([])),r=new lt(t,e),s=new lt(t,e+1);let i=ge();return this.e_.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new lt(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return Z.comparator(e.key,t.key)||ye(e.a_,t.a_)}static t_(e,t){return ye(e.a_,t.a_)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h9{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new Ye(lt.Xs)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new X8(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.u_=this.u_.add(new lt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,t){return $.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.l_(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Jl:this.gs-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new lt(t,0),s=new lt(t,Number.POSITIVE_INFINITY),i=[];return this.u_.forEachInRange([r,s],(o=>{const a=this.c_(o.a_);i.push(a)})),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ye(ye);return t.forEach((s=>{const i=new lt(s,0),o=new lt(s,Number.POSITIVE_INFINITY);this.u_.forEachInRange([i,o],(a=>{r=r.add(a.a_)}))})),$.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new lt(new Z(i),0);let a=new Ye(ye);return this.u_.forEachWhile((u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(u.a_)),!0)}),o),$.resolve(this.E_(a))}E_(e){const t=[];return e.forEach((r=>{const s=this.c_(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){X(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return $.forEach(t.mutations,(s=>{const i=new lt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.u_=r}))}bs(e){}containsKey(e,t){const r=new lt(t,0),s=this.u_.firstAfterOrEqual(r);return $.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d9{constructor(e){this.T_=e,this.docs=(function(){return new We(Z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return $.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(t))}getEntries(e,t){let r=xt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))})),$.resolve(r)}getAllEntries(e){let t=xt();return this.docs.forEach(((r,s)=>{t=t.insert(r,s.document)})),$.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;nt(t)?(i=Te.fromString(Wc(t)),o=h=>Kc(t,h)):(i=t.path,o=h=>Vc(t,h));let a=xt();const u=new Z(i.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:h,value:{document:g}}=l.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||B4(U4(g),r)<=0||(s.has(g.key)||o(g))&&(a=a.insert(g.key,g.mutableCopy()))}return $.resolve(a)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}P_(e,t){return $.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new f9(this)}getSize(e){return $.resolve(this.size)}}class f9 extends i9{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.zs.addEntry(e,s)):this.zs.removeEntry(r)})),$.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p9{constructor(e){this.persistence=e,this.R_=new os((t=>D6(t)),V6),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.I_=0,this.A_=new Ah,this.targetCount=0,this.V_=Rr.xs()}forEachTarget(e,t){return this.R_.forEach(((r,s)=>t(s))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),$.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new Rr(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Ms(t),$.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.R_.forEach(((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.R_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),$.waitFor(i).next((()=>s))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return $.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),$.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),$.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),$.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return $.resolve(r)}containsKey(e,t){return $.resolve(this.A_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(e,t){this.d_={},this.overlays={},this.f_=new Nc(0),this.m_=!1,this.m_=!0,this.p_=new l9,this.referenceDelegate=e(this),this.g_=new p9(this),this.indexManager=new t9,this.remoteDocumentCache=(function(s){return new d9(s)})((r=>this.referenceDelegate.y_(r))),this.serializer=new Z8(t),this.w_=new c9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new u9,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new h9(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){Y("MemoryPersistence","Starting transaction:",e);const s=new g9(this.f_.next());return this.referenceDelegate.b_(),r(s).next((i=>this.referenceDelegate.v_(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}S_(e,t){return $.or(Object.values(this.d_).map((r=>()=>r.containsKey(e,t))))}}class g9 extends H4{constructor(e){super(),this.currentSequenceNumber=e}}class vh{constructor(e){this.persistence=e,this.D_=new Ah,this.x_=null}static C_(e){return new vh(e)}get F_(){if(this.x_)return this.x_;throw ee(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),$.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),$.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach((s=>this.F_.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.F_.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.F_,(r=>{const s=Z.fromPath(r);return this.O_(e,s).next((i=>{i||t.removeEntry(s,ae.min())}))})).next((()=>(this.x_=null,t.apply(e))))}updateLimboDocument(e,t){return this.O_(e,t).next((r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())}))}y_(e){return 0}O_(e,t){return $.or([()=>$.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class tc{constructor(e,t){this.persistence=e,this.M_=new os((r=>j4(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=p3(this,t)}static C_(e,t){return new tc(e,t)}b_(){}v_(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}Ls(e){let t=0;return this.Er(e,(r=>{t++})).next((()=>t))}Er(e,t){return $.forEach(this.M_,((r,s)=>this.Us(e,r,s).next((i=>i?$.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.P_(e,(o=>this.Us(e,o,t).next((a=>{a||(r++,i.removeEntry(o,ae.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),$.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pa(e.data.value)),t}Us(e,t,r){return $.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.M_.get(t);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=s}static vo(e,t){let r=ge(),s=ge();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ch(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m9(n,e){return Z.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y9{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=(function(){return Um()?8:$4(vt())>0?6:4})()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Oo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Mo(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new _9;return this.No(e,t,o).next((a=>{if(i.result=a,this.Do)return this.Lo(e,t,o,a.size)}))})).next((()=>i.result))}Lo(e,t,r,s){return nt(t)?$.resolve():r.documentReadCount<this.xo?(Ps()<=_e.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",zi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),$.resolve()):(Ps()<=_e.DEBUG&&Y("QueryEngine","Query:",zi(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Co*s?(Ps()<=_e.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",zi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(t))):$.resolve())}Oo(e,t){if(nt(t))return $.resolve(null);let r=t;if(lf(r))return $.resolve(null);let s=_n(r);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(r.limit!==null&&i===1&&(r=_l(r,null,"F"),s=_n(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const a=ge(...o);return this.Fo.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,s).next((l=>{const h=this.Bo(r,u);return this.Uo(r,h,a,l.readTime)?this.Oo(e,_l(r,null,"F")):this.ko(e,h,r,l)}))))})))))}Mo(e,t,r,s){return(nt(t)?(function(o){for(const a of o.stages){if(a instanceof Jr||a instanceof Cf)return!1;if(a instanceof Gc){if(a.condition instanceof I6&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof oi&&a.condition._expr.params[0].fieldName===pn)continue;return!1}}return!0})(t):lf(t))||s.isEqual(ae.min())?$.resolve(null):this.Fo.getDocuments(e,r).next((i=>{const o=this.Bo(t,i);return this.Uo(t,o,r,s)?$.resolve(null):(Ps()<=_e.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rf(t)),this.ko(e,o,t,F4(s,ao)).next((a=>a)))}))}Bo(e,t){let r,s;return nt(e)?(r=new Ye(m9),s=i=>Kc(e,i)):(r=new Ye(sh(e)),s=i=>Vc(e,i)),t.forEach(((i,o)=>{s(o)&&(r=r.add(o))})),r}Uo(e,t,r,s){if(nt(e))return(function(a){return a.stages.some((u=>u instanceof Jr||u instanceof Cf))})(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}No(e,t,r){return Ps()<=_e.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Rf(t)),this.Fo.getDocumentsMatchingQuery(e,t,yr.min(),r)}ko(e,t,r,s){return this.Fo.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="LocalStore",E9=3e8;class w9{constructor(e,t,r,s){this.persistence=e,this.qo=t,this.serializer=s,this.$o=new We(ye),this.Ko=new os((i=>D6(i)),V6),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new a9(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$o)))}}function I9(n,e,t,r){return new w9(n,e,t,r)}async function F6(n,e){const t=ce(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Go(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],a=[];let u=ge();for(const l of s){o.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}for(const l of i){a.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next((l=>({zo:l,removedBatchIds:o,addedBatchIds:a})))}))}))}function T9(n,e){const t=ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Qo.newChangeBuffer({trackRemovals:!0});return(function(a,u,l,h){const g=l.batch,E=g.keys();let v=$.resolve();return E.forEach((S=>{v=v.next((()=>h.getEntry(u,S))).next((q=>{const G=l.docVersions.get(S);X(G!==null,48541),q.version.compareTo(G)<0&&(g.applyToRemoteDocument(q,l),q.isValidDocument()&&(q.setReadTime(l.commitVersion),h.addEntry(q)))}))})),v.next((()=>a.mutationQueue.removeMutationBatch(u,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(a){let u=ge();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function U6(n){const e=ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.g_.getLastRemoteSnapshotVersion(t)))}function A9(n,e){const t=ce(n),r=e.snapshotVersion;let s=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Qo.newChangeBuffer({trackRemovals:!0});s=t.$o;const a=[];e.targetChanges.forEach(((h,g)=>{const E=s.get(g);if(!E)return;a.push(t.g_.removeMatchingKeys(i,h.removedDocuments,g).next((()=>t.g_.addMatchingKeys(i,h.addedDocuments,g))));let v=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?v=v.withResumeToken(Qe.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),s=s.insert(g,v),(function(q,G,te){return q.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=E9?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0})(E,v,h)&&a.push(t.g_.updateTargetData(i,v))}));let u=xt(),l=ge();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(v9(i,o,e.documentUpdates).next((h=>{u=h.jo,l=h.Ho}))),!r.isEqual(ae.min())){const h=t.g_.getLastRemoteSnapshotVersion(i).next((g=>t.g_.setTargetsMetadata(i,i.currentSequenceNumber,r)));a.push(h)}return $.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,l))).next((()=>u))})).then((i=>(t.$o=s,i)))}function v9(n,e,t){let r=ge(),s=ge();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=xt();return t.forEach(((a,u)=>{const l=i.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(ae.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Y(Rh,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)})),{jo:o,Ho:s}}))}function C9(n,e){const t=ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Jl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function R9(n,e){const t=ce(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.g_.getTargetData(r,e).next((i=>i?(s=i,$.resolve(s)):t.g_.allocateTargetId(r).next((o=>(s=new bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.g_.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.$o.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.$o=t.$o.insert(r.targetId,r),t.Ko.set(e,r.targetId)),r}))}async function vl(n,e,t){const r=ce(n),s=r.$o.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!si(o))throw o;Y(Rh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.$o=r.$o.remove(e),r.Ko.delete(s.target)}function Sf(n,e,t){const r=ce(n);let s=ae.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,l,h){const g=ce(u),E=g.Ko.get(h);return E!==void 0?$.resolve(g.$o.get(E)):g.g_.getTargetData(l,h)})(r,o,nt(e)?e:_n(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(o,a.targetId).next((u=>{i=u}))})).next((()=>r.qo.getDocumentsMatchingQuery(o,e,t?s:ae.min(),t?i:ge()))).next((a=>(S9(r,a),{documents:a,Jo:i})))))}function S9(n,e){e.forEach(((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Wo.get(s)||ae.min();r.readTime.compareTo(i)>0&&n.Wo.set(s,r.readTime)}))}class Pf{constructor(){this.activeTargetIds=b_()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class P9{constructor(){this.Ua=new Pf,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new Pf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function ju(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N9{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve()))))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(Fn(t),this.Ka=!1):Y("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="RemoteStore";class b9{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new Rr(1e3),this.eu=new Rr(1001),this.tu=new Set,this.nu=[],this.ru=i,this.ru.bt((o=>{r.enqueueAndForget((async()=>{us(this)&&(Y(An,"Restarting streams for network reachability change."),await(async function(u){const l=ce(u);l.tu.add(4),await Ho(l),l.iu.set("Unknown"),l.tu.delete(4),await Yc(l)})(this))}))})),this.iu=new N9(r,s)}}async function Yc(n){if(us(n))for(const e of n.nu)await e(!0)}async function Ho(n){for(const e of n.nu)await e(!1)}function Cl(n,e){return n.Ya.get(e)||void 0}function B6(n,e){const t=ce(n),r=Cl(t,e.targetId);if(r!==void 0&&t.Ja.has(r))return;const s=(function(a,u){const l=Cl(a,u);l!==void 0&&a.Za.delete(l);const h=(function(E,v){return v%2!=0?E.eu.next():E.Xa.next()})(a,u);return a.Ya.set(u,h),a.Za.set(h,u),h})(t,e.targetId);Y(An,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new bn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(s,i),bh(t)?Nh(t):li(t).Fn()&&Ph(t,i)}function Sh(n,e){const t=ce(n),r=li(t),s=Cl(t,e);Y(An,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ja.delete(s),t.Ya.delete(e),t.Za.delete(s),r.Fn()&&q6(t,s),t.Ja.size===0&&(r.Fn()?r.Nn():us(t)&&t.iu.set("Unknown"))}function Ph(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void Y(An,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}li(n).jn(e)}function q6(n,e){n.su.We(e),li(n).Hn(e)}function Nh(n){n.su=new k_({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ge()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),li(n).start(),n.iu.Wa()}function bh(n){return us(n)&&!li(n).Cn()&&n.Ja.size>0}function us(n){return ce(n).tu.size===0}function H6(n){n.su=void 0}async function x9(n){n.iu.set("Online")}async function O9(n){n.Ja.forEach(((e,t)=>{Ph(n,e)}))}async function k9(n,e){H6(n),bh(n)?(n.iu.za(e),Nh(n)):n.iu.set("Unknown")}async function D9(n,e,t){if(n.iu.set("Online"),e instanceof Xp&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds){if(s.Ja.has(a)){const u=s.Za.get(a);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ya.delete(u),s.Za.delete(a)),s.Ja.delete(a)}s.su.removeTarget(a)}})(n,e)}catch(r){Y(An,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nc(n,r)}else if(e instanceof ba?n.su.et(e):e instanceof Qp?n.su.ot(e):n.su.rt(e),!t.isEqual(ae.min()))try{const r=await U6(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const a=i.su.Rt(o);a.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const g=i.Ja.get(h);g&&i.Ja.set(h,g.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,h)=>{const g=i.Ja.get(l);if(!g)return;i.Ja.set(l,g.withResumeToken(Qe.EMPTY_BYTE_STRING,g.snapshotVersion)),q6(i,l);const E=new bn(g.target,l,h,g.sequenceNumber);Ph(i,E)}));const u=(function(h,g){const E=new Map;g.targetChanges.forEach(((S,q)=>{const G=h.Za.get(q);G!==void 0&&E.set(G,S)}));let v=new We(ye);return g.targetMismatches.forEach(((S,q)=>{const G=h.Za.get(S);G!==void 0&&(v=v.insert(G,q))})),new Uo(g.snapshotVersion,E,v,g.documentUpdates,g.augmentedDocumentUpdates,g.resolvedLimboDocuments)})(i,a);return i.remoteSyncer.applyRemoteEvent(u)})(n,t)}catch(r){Y(An,"Failed to raise snapshot:",r),await nc(n,r)}}async function nc(n,e,t){if(!si(e))throw e;n.tu.add(1),await Ho(n),n.iu.set("Offline"),t||(t=()=>U6(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{Y(An,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await Yc(n)}))}function $6(n,e){return e().catch((t=>nc(n,t,e)))}async function Qc(n){const e=ce(n),t=Sr(e);let r=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:Jl;for(;V9(e);)try{const s=await C9(e.localStore,r);if(s===null){e.Ha.length===0&&t.Nn();break}r=s.batchId,L9(e,s)}catch(s){await nc(e,s)}G6(e)&&W6(e)}function V9(n){return us(n)&&n.Ha.length<10}function L9(n,e){n.Ha.push(e);const t=Sr(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function G6(n){return us(n)&&!Sr(n).Cn()&&n.Ha.length>0}function W6(n){Sr(n).start()}async function M9(n){Sr(n).er()}async function F9(n){const e=Sr(n);for(const t of n.Ha)e.Yn(t.mutations)}async function U9(n,e,t){const r=n.Ha.shift(),s=Th.from(r,e,t);await $6(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Qc(n)}async function B9(n,e){e&&Sr(n).Jn&&await(async function(r,s){if((function(o){return C_(o)&&o!==H.ABORTED})(s.code)){const i=r.Ha.shift();Sr(r).Mn(),await $6(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Qc(r)}})(n,e),G6(n)&&W6(n)}async function Nf(n,e){const t=ce(n);t.asyncQueue.verifyOperationInProgress(),Y(An,"RemoteStore received new credentials");const r=us(t);t.tu.add(3),await Ho(t),r&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await Yc(t)}async function q9(n,e){const t=ce(n);e?(t.tu.delete(2),await Yc(t)):e||(t.tu.add(2),await Ho(t),t.iu.set("Unknown"))}function li(n){return n._u||(n._u=(function(t,r,s){const i=ce(t);return i.nr(),new r3(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Qt:x9.bind(null,n),zt:O9.bind(null,n),Ht:k9.bind(null,n),zn:D9.bind(null,n)}),n.nu.push((async e=>{e?(n._u.Mn(),bh(n)?Nh(n):n.iu.set("Unknown")):(await n._u.stop(),H6(n))}))),n._u}function Sr(n){return n.ou||(n.ou=(function(t,r,s){const i=ce(t);return i.nr(),new s3(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:M9.bind(null,n),Ht:B9.bind(null,n),Zn:F9.bind(null,n),Xn:U9.bind(null,n)}),n.nu.push((async e=>{e?(n.ou.Mn(),await Qc(n)):(await n.ou.stop(),n.Ha.length>0&&(Y(An,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))}))),n.ou}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new xh(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oh(n,e){if(Fn("AsyncQueue",`${e}: ${n}`),si(n))return new K(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{static emptySet(e){return new jr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Ns(),this.sortedSet=new We(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.au=new We(Z.comparator)}track(e){const t=e.doc.key,r=this.au.get(t);r?e.type!==0&&r.type===3?this.au=this.au.insert(t,e):e.type===3&&r.type!==1?this.au=this.au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.au=this.au.remove(t):e.type===1&&r.type===2?this.au=this.au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):ee(63341,{ft:e,uu:r}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ks{constructor(e,t,r,s,i,o,a,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Ks(e,t,jr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H9{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some((e=>e.Tu()))}}class $9{constructor(){this.queries=xf(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const s=ce(t),i=s.queries;s.queries=xf(),i.forEach(((o,a)=>{for(const u of a.Eu)u.onError(r)}))})(this,new K(H.ABORTED,"Firestore shutting down"))}}function xf(){return new os((n=>k6(n)),zc)}async function j6(n,e){const t=ce(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.hu()&&e.Tu()&&(r=2):(i=new H9,r=e.Tu()?0:1);try{switch(r){case 0:i.lu=await t.onListen(s,!0);break;case 1:i.lu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Oh(o,`Initialization of query '${nt(e.query)?Vn(e.query):zi(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.Eu.push(e),e.Ru(t.onlineState),i.lu&&e.Iu(i.lu)&&kh(t)}async function z6(n,e){const t=ce(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Eu.indexOf(e);o>=0&&(i.Eu.splice(o,1),i.Eu.length===0?s=e.Tu()?0:1:!i.hu()&&e.Tu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function G9(n,e){const t=ce(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.Eu)a.Iu(s)&&(r=!0);o.lu=s}}r&&kh(t)}function W9(n,e,t){const r=ce(n),s=r.queries.get(e);if(s)for(const i of s.Eu)i.onError(t);r.queries.delete(e)}function kh(n){n.Pu.forEach((e=>{e.next()}))}var Rl;(function(n){n.Default="default",n.Cache="cache"})(Rl||(Rl={}));class K6{constructor(e,t,r){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==Rl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y6{constructor(e){this.key=e}}class Q6{constructor(e){this.key=e}}class j9{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=ge(),this.mutatedKeys=ge(),this.Lu=nt(e)?Al(e):sh(e),this.Bu=new jr(this.Lu)}get Uu(){return this.Ou}ku(e,t){const r=t?t.qu:new bf,s=t?t.Bu:this.Bu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const[u,l]=this.$u(this.query,s);e.inorderTraversal(((g,E)=>{const v=s.get(g),S=r9(this.query,E)?E:null,q=!!v&&this.mutatedKeys.has(v.key),G=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let te=!1;v&&S?v.data.isEqual(S.data)?q!==G&&(r.track({type:3,doc:S}),te=!0):this.Ku(v,S)||(r.track({type:2,doc:S}),te=!0,(u&&this.Lu(S,u)>0||l&&this.Lu(S,l)<0)&&(a=!0)):!v&&S?(r.track({type:0,doc:S}),te=!0):v&&!S&&(r.track({type:1,doc:v}),te=!0,(u||l)&&(a=!0)),te&&(S?(o=o.add(S),i=G?i.add(g):i.delete(g)):(o=o.delete(g),i=i.delete(g)))}));const h=this.Wu(this.query);if(h)if(nt(this.query)){const g=[];o.forEach((S=>g.push(S)));const E=L6(this.query,g);let v=new jr(Al(this.query));for(const S of E)v=v.add(S);o.forEach((S=>{v.has(S.key)||(i=i.delete(S.key),r.track({type:1,doc:S}))})),o=v}else{const g=this.Qu(this.query);for(;o.size>h;){const E=g==="F"?o.last():o.first();o=o.delete(E.key),i=i.delete(E.key),r.track({type:1,doc:E})}}return{Bu:o,qu:r,Uo:a,mutatedKeys:i}}Wu(e){var t;return nt(e)?(t=Wu(e))==null?void 0:t.limit:e.limit||void 0}Qu(e){if(nt(e)){const t=Wu(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){var r;if(nt(e)){const s=(r=Wu(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const o=e.qu.cu();o.sort(((h,g)=>(function(v,S){const q=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{ft:G})}};return q(v)-q(S)})(h.type,g.type)||this.Lu(h.doc,g.doc))),this.Gu(r),s=s??!1;const a=t&&!s?this.zu():[],u=this.Nu.size===0&&this.current&&!s?1:0,l=u!==this.Mu;return this.Mu=u,o.length!==0||l?{snapshot:new Ks(this.query,e.Bu,i,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:a}:{ju:a}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new bf,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach((t=>this.Ou=this.Ou.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ou=this.Ou.delete(t))),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=ge(),this.Bu.forEach((r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))}));const t=[];return e.forEach((r=>{this.Nu.has(r)||t.push(new Q6(r))})),this.Nu.forEach((r=>{e.has(r)||t.push(new Y6(r))})),t}Ju(e){this.Ou=e.Jo,this.Nu=ge();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Ks.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const Dh="SyncEngine";class z9{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class K9{constructor(e){this.key=e,this.Zu=!1}}class Y9{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Xu={},this.ec=new os((a=>k6(a)),zc),this.tc=new Map,this.nc=new Set,this.rc=new We(Z.comparator),this.sc=new Map,this._c=new Ah,this.oc={},this.ac=new Map,this.uc=Rr.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function Q9(n,e,t=!0){const r=n0(n);let s;const i=r.ec.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Yu()):s=await X6(r,e,t,!0),s}async function X9(n,e){const t=n0(n);await X6(t,e,!0,!1)}async function X6(n,e,t,r){const s=await R9(n.localStore,nt(e)?e:_n(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await J9(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&B6(n.remoteStore,s),a}async function J9(n,e,t,r,s){n.lc=(g,E,v)=>(async function(q,G,te,he){let Ce=G.view.ku(te);Ce.Uo&&(Ce=await Sf(q.localStore,G.query,!1).then((({documents:x})=>G.view.ku(x,Ce))));const st=he&&he.targetChanges.get(G.targetId),it=he&&he.targetMismatches.get(G.targetId)!=null,Je=G.view.applyChanges(Ce,q.isPrimaryClient,st,it);return kf(q,G.targetId,Je.ju),Je.snapshot})(n,g,E,v);const i=await Sf(n.localStore,e,!0),o=new j9(e,i.Jo),a=o.ku(i.documents),u=Bo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,u);kf(n,t,l.ju);const h=new z9(e,t,o);return n.ec.set(e,h),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),l.snapshot}async function Z9(n,e,t){const r=ce(n),s=r.ec.get(e),i=r.tc.get(s.targetId);if(i.length>1)return r.tc.set(s.targetId,i.filter((o=>!zc(o,e)))),void r.ec.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Sh(r.remoteStore,s.targetId),Sl(r,s.targetId)})).catch(ri)):(Sl(r,s.targetId),await vl(r.localStore,s.targetId,!0))}async function e5(n,e){const t=ce(n),r=t.ec.get(e),s=t.tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Sh(t.remoteStore,r.targetId))}async function t5(n,e,t){const r=c5(n);try{const s=await(function(o,a){const u=ce(o),l=Ve.now(),h=a.reduce(((v,S)=>v.add(S.key)),ge());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let S=xt(),q=ge();return u.Qo.getEntries(v,h).next((G=>{S=G,S.forEach(((te,he)=>{he.isValidDocument()||(q=q.add(te))}))})).next((()=>u.localDocuments.getOverlayedDocuments(v,S))).next((G=>{g=G;const te=[];for(const he of a){const Ce=o_(he,g.get(he.key).overlayedDocument);Ce!=null&&te.push(new Or(he.key,Ce,Np(Ce.value.mapValue),Yt.exists(!0)))}return u.mutationQueue.addMutationBatch(v,l,te,a)})).next((G=>{E=G;const te=G.applyToLocalDocumentSet(g,q);return u.documentOverlayCache.saveOverlays(v,G.batchId,te)}))})).then((()=>({batchId:E.batchId,changes:Kp(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,a,u){let l=o.oc[o.currentUser.toKey()];l||(l=new We(ye)),l=l.insert(a,u),o.oc[o.currentUser.toKey()]=l})(r,s.batchId,t),await $o(r,s.changes),await Qc(r.remoteStore)}catch(s){const i=Oh(s,"Failed to persist write");t.reject(i)}}async function J6(n,e){const t=ce(n);try{const r=await A9(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.sc.get(i);o&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Zu=!0:s.modifiedDocuments.size>0?X(o.Zu,14607):s.removedDocuments.size>0&&(X(o.Zu,42227),o.Zu=!1))})),await $o(t,r,e)}catch(r){await ri(r)}}function Of(n,e,t){const r=ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ec.forEach(((i,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const u=ce(o);u.onlineState=a;let l=!1;u.queries.forEach(((h,g)=>{for(const E of g.Eu)E.Ru(a)&&(l=!0)})),l&&kh(u)})(r.eventManager,e),s.length&&r.Xu.zn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function n5(n,e,t){const r=ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.sc.get(e),i=s&&s.key;if(i){let o=new We(Z.comparator);o=o.insert(i,Tt.newNoDocument(i,ae.min()));const a=ge().add(i),u=new Uo(ae.min(),new Map,new We(ye),o,xt(),a);await J6(r,u),r.rc=r.rc.remove(i),r.sc.delete(e),Vh(r)}else await vl(r.localStore,e,!1).then((()=>Sl(r,e,t))).catch(ri)}async function r5(n,e){const t=ce(n),r=e.batch.batchId;try{const s=await T9(t.localStore,e);e0(t,r,null),Z6(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await $o(t,s)}catch(s){await ri(s)}}async function s5(n,e,t){const r=ce(n);try{const s=await(function(o,a){const u=ce(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let h;return u.mutationQueue.lookupMutationBatch(l,a).next((g=>(X(g!==null,37113),h=g.keys(),u.mutationQueue.removeMutationBatch(l,g)))).next((()=>u.mutationQueue.performConsistencyCheck(l))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(l,h,a))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h))).next((()=>u.localDocuments.getDocuments(l,h)))}))})(r.localStore,e);e0(r,e,t),Z6(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await $o(r,s)}catch(s){await ri(s)}}function Z6(n,e){(n.ac.get(e)||[]).forEach((t=>{t.resolve()})),n.ac.delete(e)}function e0(n,e,t){const r=ce(n);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function Sl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.tc.get(e))n.ec.delete(r),t&&n.Xu.Ec(r,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach((r=>{n._c.containsKey(r)||t0(n,r)}))}function t0(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(Sh(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),Vh(n))}function kf(n,e,t){for(const r of t)r instanceof Y6?(n._c.addReference(r.key,e),i5(n,r)):r instanceof Q6?(Y(Dh,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,e),n._c.containsKey(r.key)||t0(n,r.key)):ee(19791,{hc:r})}function i5(n,e){const t=e.key,r=t.path.canonicalString();n.rc.get(t)||n.nc.has(r)||(Y(Dh,"New document in limbo: "+t),n.nc.add(r),Vh(n))}function Vh(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new Z(Te.fromString(e)),r=n.uc.next();n.sc.set(r,new K9(t)),n.rc=n.rc.insert(t,r),B6(n.remoteStore,new bn(_n(rh(t.path)),r,"TargetPurposeLimboResolution",Nc.ce))}}async function $o(n,e,t){const r=ce(n),s=[],i=[],o=[];r.ec.isEmpty()||(r.ec.forEach(((a,u)=>{o.push(r.lc(u,e,t).then((l=>{var h;if((l||t)&&r.isPrimaryClient){const g=l?!l.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(l){s.push(l);const g=Ch.vo(u.targetId,l);i.push(g)}})))})),await Promise.all(o),r.Xu.zn(s),await(async function(u,l){const h=ce(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>$.forEach(l,(E=>$.forEach(E.wo,(v=>h.persistence.referenceDelegate.addReference(g,E.targetId,v))).next((()=>$.forEach(E.bo,(v=>h.persistence.referenceDelegate.removeReference(g,E.targetId,v)))))))))}catch(g){if(!si(g))throw g;Y(Rh,"Failed to update sequence numbers: "+g)}for(const g of l){const E=g.targetId;if(!g.fromCache){const v=h.$o.get(E),S=v.snapshotVersion,q=v.withLastLimboFreeSnapshotVersion(S);h.$o=h.$o.insert(E,q)}}})(r.localStore,i))}async function o5(n,e){const t=ce(n);if(!t.currentUser.isEqual(e)){Y(Dh,"User change. New user:",e.toKey());const r=await F6(t.localStore,e);t.currentUser=e,(function(i,o){i.ac.forEach((a=>{a.forEach((u=>{u.reject(new K(H.CANCELLED,o))}))})),i.ac.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $o(t,r.zo)}}function a5(n,e){const t=ce(n),r=t.sc.get(e);if(r&&r.Zu)return ge().add(r.key);{let s=ge();const i=t.tc.get(e);if(!i)return s;for(const o of i??[]){const a=t.ec.get(o);s=s.unionWith(a.view.Uu)}return s}}function n0(n){const e=ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=J6.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=a5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=n5.bind(null,e),e.Xu.zn=G9.bind(null,e.eventManager),e.Xu.Ec=W9.bind(null,e.eventManager),e}function c5(n){const e=ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=r5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=s5.bind(null,e),e}class rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lc(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return I9(this.persistence,new y9,e.initialUser,this.serializer)}Ic(e){return new M6(vh.C_,this.serializer)}Rc(e){return new P9}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rc.provider={build:()=>new rc};class u5 extends rc{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){X(this.persistence.referenceDelegate instanceof tc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new d3(r,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new M6((r=>tc.C_(r,t)),this.serializer)}}class Pl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Of(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=o5.bind(null,this.syncEngine),await q9(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $9})()}createDatastore(e){const t=Lc(e.databaseInfo.databaseId),r=n3(e.databaseInfo);return a3(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,a){return new b9(r,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Of(this.syncEngine,t,0)),(function(){return _f.C()?new _f:new J_})())}createSyncEngine(e,t){return(function(s,i,o,a,u,l,h){const g=new Y9(s,i,o,a,u,l);return h&&(g.cc=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ce(s);Y(An,"RemoteStore shutting down."),i.tu.add(5),await Ho(i),i.ru.shutdown(),i.iu.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Pl.provider={build:()=>new Pl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="FirestoreClient";class l5{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Xl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Y(Pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Y(Pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Oh(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function zu(n,e){n.asyncQueue.verifyOperationInProgress(),Y(Pr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await F6(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Df(n,e){n.asyncQueue.verifyOperationInProgress();const t=await h5(n);Y(Pr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Nf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Nf(e.remoteStore,s))),n._onlineComponents=e}async function h5(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Y(Pr,"Using user provided OfflineComponentProvider");try{await zu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;rn("Error using user provided cache. Falling back to memory cache: "+t),await zu(n,new rc)}}else Y(Pr,"Using default OfflineComponentProvider"),await zu(n,new u5(void 0));return n._offlineComponents}async function s0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Y(Pr,"Using user provided OnlineComponentProvider"),await Df(n,n._uninitializedComponentsProvider._online)):(Y(Pr,"Using default OnlineComponentProvider"),await Df(n,new Pl))),n._onlineComponents}function d5(n){return s0(n).then((e=>e.syncEngine))}async function i0(n){const e=await s0(n),t=e.eventManager;return t.onListen=Q9.bind(null,e.syncEngine),t.onUnlisten=Z9.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=X9.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=e5.bind(null,e.syncEngine),t}function f5(n,e,t={}){const r=new Dn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,l){const h=new r0({next:E=>{h.gc(),o.enqueueAndForget((()=>z6(i,g)));const v=E.docs.has(a);!v&&E.fromCache?l.reject(new K(H.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&E.fromCache&&u&&u.source==="server"?l.reject(new K(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(E)},error:E=>l.reject(E)}),g=new K6(rh(a.path),h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return j6(i,g)})(await i0(n),n.asyncQueue,e,t,r))),r.promise}function p5(n,e,t={}){const r=new Dn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,l){const h=new r0({next:E=>{h.gc(),o.enqueueAndForget((()=>z6(i,g))),E.fromCache&&u.source==="server"?l.reject(new K(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(E)},error:E=>l.reject(E)}),g=new K6(a instanceof Yi?Q8(a):a,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return j6(i,g)})(await i0(n),n.asyncQueue,e,t,r))),r.promise}function g5(n,e){const t=new Dn;return n.asyncQueue.enqueueAndForget((async()=>t5(await d5(n),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="AsyncQueue";class Lf{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new c6(this,"async_queue_retry"),this.jc=()=>{const r=ju();r&&Y(Vf,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=ju();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=ju();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise((()=>{}));const t=new Dn;return this.Yc((()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.qc.push(e),this.Zc())))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!si(e))throw e;Y(Vf,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn((()=>this.Zc()))}}Yc(e){const t=this.Hc.then((()=>(this.Qc=!0,e().catch((r=>{throw this.Wc=r,this.Qc=!1,Fn("INTERNAL UNHANDLED ERROR: ",Mf(r)),r})).then((r=>(this.Qc=!1,r))))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=xh.createAndSchedule(this,e,t,r,(i=>this.Xc(i)));return this.Kc.push(s),s}Jc(){this.Wc&&ee(47125,{el:Mf(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then((()=>{this.Kc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()}))}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Mf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ls extends Uc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Lf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lf(e),this._firestoreClient=void 0,await e}}}function XT(n,e){const t=typeof n=="object"?n:Kl(),r=typeof n=="string"?n:Wa,s=Cc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=J2("firestore");i&&g3(s,...i)}return s}function Lh(n){if(n._terminated)throw new K(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||m5(n),n._firestoreClient}function m5(n){var r,s,i,o;const e=n._freezeSettings(),t=u3(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new l5(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _5{convertValue(e,t="none"){switch(Xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return xr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[lo].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>Ue(o.doubleValue)));return new Dt(t)}convertGeoPoint(e){return new En(Ue(e.latitude),Ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Mo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Gs(e));default:return null}}convertTimestamp(e){const t=Er(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Te.fromString(e);X(s6(r),9688,{name:e});const s=new uo(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0 extends _5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}const Ff="@firebase/firestore",Uf="4.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ar("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class y5 extends a0{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mh{}class c0 extends Mh{}function JT(n,e,...t){let r=[];e instanceof Mh&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((u=>u instanceof Fh)).length,a=i.filter((u=>u instanceof Xc)).length;if(o>1||o>0&&a>0)throw new K(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Xc extends c0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Xc(e,t,r)}_apply(e){const t=this._parse(e);return u0(e._query,t),new as(e.firestore,e.converter,ml(e._query,t))}_parse(e){const t=Bc(e.firestore);return(function(i,o,a,u,l,h,g){let E;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new K(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){qf(g,h);const S=[];for(const q of g)S.push(Bf(u,i,q));E={arrayValue:{values:S}}}else E=Bf(u,i,g)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||qf(g,h),E=T3(a,o,g,h==="in"||h==="not-in");return ze.create(l,h,E)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ZT(n,e,t){const r=e,s=Ar("where",n);return Xc._create(s,r,t)}class Fh extends Mh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fh(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:on.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)u0(o,u),o=ml(o,u)})(e._query,t),new as(e.firestore,e.converter,ml(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uh extends c0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Uh(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new K(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _o(i,o)})(e._query,this._field,this._direction);return new as(e.firestore,e.converter,I_(e._query,t))}}function eA(n,e="asc"){const t=e,r=Ar("orderBy",n);return Uh._create(r,t)}function Bf(n,e,t){if(typeof(t=Le(t))=="string"){if(t==="")throw new K(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wp(e)&&t.indexOf("/")!==-1)throw new K(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Te.fromString(t));if(!Z.isDocumentKey(r))throw new K(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tf(n,new Z(r))}if(t instanceof He)return tf(n,t._key);throw new K(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pc(t)}.`)}function qf(n,e){if(!Array.isArray(n)||n.length===0)throw new K(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function u0(n,e){const t=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new K(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function l0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class qi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zr extends a0{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ar("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=zr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",zr._jsonSchema={type:Ke("string",zr._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class ka extends zr{data(e={}){return super.data(e)}}class Ls{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ka(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{nt(s._snapshot.query)?Al(s._snapshot.query):sh(s.query._query);const u=new ka(s._firestore,s._userDataWriter,a.doc.key,a.doc,new qi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const u=new ka(s._firestore,s._userDataWriter,a.doc.key,a.doc,new qi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,h=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:w5(a.type),doc:u,oldIndex:l,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ls._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function w5(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ls._jsonSchemaVersion="firestore/querySnapshot/1.0",Ls._jsonSchema={type:Ke("string",Ls._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(n){n=sn(n,He);const e=sn(n.firestore,ls),t=Lh(e);return f5(t,n._key).then((r=>I5(e,n,r)))}function nA(n){n=sn(n,as);const e=sn(n.firestore,ls),t=Lh(e),r=new o0(e);return E5(n._query),p5(t,n._query).then((s=>new Ls(e,r,n,s)))}function rA(n,e,t){n=sn(n,He);const r=sn(n.firestore,ls),s=l0(n.converter,e,t),i=Bc(r);return Jc(r,[p6(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Yt.none())])}function sA(n,e,t,...r){n=sn(n,He);const s=sn(n.firestore,ls),i=Bc(s);let o;return o=typeof(e=Le(e))=="string"||e instanceof Mc?I3(i,"updateDoc",n._key,e,t,r):w3(i,"updateDoc",n._key,e),Jc(s,[o.toMutation(n._key,Yt.exists(!0))])}function iA(n){return Jc(sn(n.firestore,ls),[new nh(n._key,Yt.none())])}function oA(n,e){const t=sn(n.firestore,ls),r=m3(n),s=l0(n.converter,e),i=Bc(n.firestore);return Jc(t,[p6(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then((()=>r))}function Jc(n,e){const t=Lh(n);return g5(t,e)}function I5(n,e,t){const r=t.docs.get(e._key),s=new o0(n);return new zr(n,s,e._key,r,new qi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){R4(is),Qr(new mr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ls(new N4(r.getProvider("auth-internal")),new O4(o,r.getProvider("app-check-internal")),X4(o,s),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),mn(Ff,Uf,e),mn(Ff,Uf,"esm2020")})();var T5="firebase",A5="12.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(T5,A5,"app");var Hf={};const $f="@firebase/database",Gf="1.1.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h0="";function v5(n){h0=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ft(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:so(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R5{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new C5(e)}}catch{}return new R5},$r=d0("localStorage"),S5=d0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new vc("@firebase/database"),f0=(function(){let n=1;return function(){return n++}})(),p0=function(n){const e=Xm(n),t=new zm;t.update(e);const r=t.digest();return $l.encodeByteArray(r)},Go=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Go.apply(null,r):typeof r=="object"?e+=ft(r):e+=r,e+=" "}return e};let Xi=null,Wf=!0;const P5=function(n,e){j(!0,"Can't turn on custom loggers persistently."),Ms.logLevel=_e.VERBOSE,Xi=Ms.log.bind(Ms)},At=function(...n){if(Wf===!0&&(Wf=!1,Xi===null&&S5.get("logging_enabled")===!0&&P5()),Xi){const e=Go.apply(null,n);Xi(e)}},Wo=function(n){return function(...e){At(n,...e)}},Nl=function(...n){const e="FIREBASE INTERNAL ERROR: "+Go(...n);Ms.error(e)},Bn=function(...n){const e=`FIREBASE FATAL ERROR: ${Go(...n)}`;throw Ms.error(e),new Error(e)},Vt=function(...n){const e="FIREBASE WARNING: "+Go(...n);Ms.warn(e)},N5=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bh=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},b5=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ys="[MIN_NAME]",Zr="[MAX_NAME]",hi=function(n,e){if(n===e)return 0;if(n===Ys||e===Zr)return-1;if(e===Ys||n===Zr)return 1;{const t=jf(n),r=jf(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},x5=function(n,e){return n===e?0:n<e?-1:1},Oi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ft(e))},qh=function(n){if(typeof n!="object"||n===null)return ft(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=ft(e[r]),t+=":",t+=qh(n[e[r]]);return t+="}",t},g0=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function Ut(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const m0=function(n){j(!Bh(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,u;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const l=[];for(u=t;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(s?1:0),l.reverse();const h=l.join("");let g="";for(u=0;u<64;u+=8){let E=parseInt(h.substr(u,8),2).toString(16);E.length===1&&(E="0"+E),g=g+E}return g.toLowerCase()},O5=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},k5=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function D5(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const V5=new RegExp("^-?(0*)\\d{1,10}$"),L5=-2147483648,M5=2147483647,jf=function(n){if(V5.test(n)){const e=Number(n);if(e>=L5&&e<=M5)return e}return null},di=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Vt("Exception was thrown by user callback.",t),e},Math.floor(0))}},F5=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ji=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U5{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,zt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(At("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class Da{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Da.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="5",_0="v",y0="s",E0="r",w0="f",I0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,T0="ls",A0="p",bl="ac",v0="websocket",C0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,t,r,s,i=!1,o="",a=!1,u=!1,l=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function q5(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function S0(n,e,t){j(typeof e=="string","typeof type must == string"),j(typeof t=="object","typeof params must == object");let r;if(e===v0)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===C0)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);q5(n)&&(t.ns=n.namespace);const s=[];return Ut(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(){this.counters_={}}incrementCounter(e,t=1){cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Pm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku={},Yu={};function $h(n){const e=n.toString();return Ku[e]||(Ku[e]=new H5),Ku[e]}function $5(n,e){const t=n.toString();return Yu[t]||(Yu[t]=e()),Yu[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G5{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&di(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="start",W5="close",j5="pLPCommand",z5="pRTLPCB",P0="id",N0="pw",b0="ser",K5="cb",Y5="seg",Q5="ts",X5="d",J5="dframe",x0=1870,O0=30,Z5=x0-O0,ey=25e3,ty=3e4;class Os{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wo(e),this.stats_=$h(t),this.urlFn=u=>(this.appCheckToken&&(u[bl]=this.appCheckToken),S0(t,C0,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new G5(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ty)),b5(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gh((...i)=>{const[o,a,u,l,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zf)this.id=a,this.password=u;else if(o===W5)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[zf]="t",r[b0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[K5]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_0]=Hh,this.transportSessionId&&(r[y0]=this.transportSessionId),this.lastSessionId&&(r[T0]=this.lastSessionId),this.applicationId&&(r[A0]=this.applicationId),this.appCheckToken&&(r[bl]=this.appCheckToken),typeof location<"u"&&location.hostname&&I0.test(location.hostname)&&(r[E0]=w0);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Os.forceAllow_=!0}static forceDisallow(){Os.forceDisallow_=!0}static isAvailable(){return Os.forceAllow_?!0:!Os.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!O5()&&!k5()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ft(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Y2(t),s=g0(r,Z5);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[J5]="t",r[P0]=e,r[N0]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ft(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Gh{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=f0(),window[j5+this.uniqueCallbackIdentifier]=e,window[z5+this.uniqueCallbackIdentifier]=t,this.myIFrame=Gh.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){At("frame writing exception"),a.stack&&At(a.stack),At(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||At("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[P0]=this.myID,e[N0]=this.myPW,e[b0]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+O0+r.length<=x0;){const o=this.pendingSegs.shift();r=r+"&"+Y5+s+"="+o.seg+"&"+Q5+s+"="+o.ts+"&"+X5+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(ey)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{At("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=16384,ry=45e3;let sc=null;typeof MozWebSocket<"u"?sc=MozWebSocket:typeof WebSocket<"u"&&(sc=WebSocket);class Jt{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wo(this.connId),this.stats_=$h(t),this.connURL=Jt.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[_0]=Hh,typeof location<"u"&&location.hostname&&I0.test(location.hostname)&&(o[E0]=w0),t&&(o[y0]=t),r&&(o[T0]=r),s&&(o[bl]=s),i&&(o[A0]=i),S0(e,v0,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$r.set("previous_websocket_failure",!0);try{let r;Fm(),this.mySock=new sc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&sc!==null&&!Jt.forceDisallow_}static previouslyFailed(){return $r.isInMemoryStorage||$r.get("previous_websocket_failure")===!0}markConnectionHealthy(){$r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=so(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=ft(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=g0(t,ny);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ry))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2;Jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{static get ALL_TRANSPORTS(){return[Os,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Jt&&Jt.isAvailable();let r=t&&!Jt.previouslyFailed();if(e.webSocketOnly&&(t||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Jt];else{const s=this.transports_=[];for(const i of vo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);vo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=6e4,iy=5e3,oy=10*1024,ay=100*1024,Qu="t",Kf="d",cy="s",Yf="r",uy="e",Qf="o",Xf="a",Jf="n",Zf="p",ly="h";class hy{constructor(e,t,r,s,i,o,a,u,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wo("c:"+this.id+":"),this.transportManager_=new vo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ay?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qu in e){const t=e[Qu];t===Xf?this.upgradeIfSecondaryHealthy_():t===Yf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Qf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Oi("t",e),r=Oi("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Oi("t",e),r=Oi("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Oi(Qu,e);if(Kf in e){const r=e[Kf];if(t===ly){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Jf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===cy?this.onConnectionShutdown_(r):t===Yf?this.onReset_(r):t===uy?Nl("Server Error: "+r):t===Qf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Hh!==r&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){j(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends D0{static getInstance(){return new ic}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=32,t2=768;class xe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ae(){return new xe("")}function pe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Nr(n){return n.pieces_.length-n.pieceNum_}function Oe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new xe(n.pieces_,e)}function V0(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function dy(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function L0(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function M0(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new xe(e,0)}function rt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof xe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new xe(t,0)}function Ee(n){return n.pieceNum_>=n.pieces_.length}function Ot(n,e){const t=pe(n),r=pe(e);if(t===null)return e;if(t===r)return Ot(Oe(n),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Wh(n,e){if(Nr(n)!==Nr(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Zt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Nr(n)>Nr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class fy{constructor(e,t){this.errorPrefix_=t,this.parts_=L0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ac(this.parts_[r]);F0(this)}}function py(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ac(e),F0(n)}function gy(n){const e=n.parts_.pop();n.byteLength_-=Ac(e),n.parts_.length>0&&(n.byteLength_-=1)}function F0(n){if(n.byteLength_>t2)throw new Error(n.errorPrefix_+"has a key path longer than "+t2+" bytes ("+n.byteLength_+").");if(n.parts_.length>e2)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+e2+") or object contains a cycle "+Br(n))}function Br(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends D0{static getInstance(){return new jh}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=1e3,my=300*1e3,n2=30*1e3,_y=1.3,yy=3e4,Ey="server_kill",r2=3;class Ln extends k0{constructor(e,t,r,s,i,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Ln.nextPersistentConnectionId_++,this.log_=Wo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=my,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ic.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(ft(i)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new ei,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const u=a.d,l=a.s;Ln.warnOnListenWarnings_(u,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(l,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&cn(e,"w")){const r=Yr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=n2)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Wm(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ft(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Nl("Unrecognized action received from server: "+ft(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yy&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_y)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ln.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},l=function(g){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(g)};this.realtime_={close:u,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[g,E]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?At("getToken() completed but was canceled"):(At("getToken() completed. Creating connection."),this.authToken_=g&&g.accessToken,this.appCheckToken_=E&&E.token,a=new hy(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,v=>{Vt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ey)},i))}catch(g){this.log_("Failed to get token: "+g),o||(this.repoInfo_.nodeAdmin&&Vt(g),u())}}}interrupt(e){At("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){At("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rl(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>qh(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new xe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){At("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=r2&&(this.reconnectDelay_=n2,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){At("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=r2&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+h0.replace(/\./g,"-")]=1,Gl()?e["framework.cordova"]=1:np()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ic.getInstance().currentlyOnline();return rl(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0;Ln.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new me(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new me(Ys,e),s=new me(Ys,t);return this.compare(r,s)!==0}minPost(){return me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;class U0 extends Zc{static get __EMPTY_NODE(){return va}static set __EMPTY_NODE(e){va=e}compare(e,t){return hi(e.name,t.name)}isDefinedOn(e){throw Zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return me.MIN}maxPost(){return new me(Zr,va)}makePost(e,t){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,va)}toString(){return".key"}}const Fs=new U0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ht.RED,this.left=s??kt.EMPTY_NODE,this.right=i??kt.EMPTY_NODE}copy(e,t,r,s,i){return new ht(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return kt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class wy{copy(e,t,r,s,i){return this}insert(e,t,r){return new ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kt{constructor(e,t=kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ca(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ca(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ca(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ca(this.root_,null,this.comparator_,!0,e)}}kt.EMPTY_NODE=new wy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(n,e){return hi(n.name,e.name)}function zh(n,e){return hi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl;function Ty(n){xl=n}const B0=function(n){return typeof n=="number"?"number:"+m0(n):"string:"+n},q0=function(n){if(n.isLeafNode()){const e=n.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cn(e,".sv"),"Priority must be a string or number.")}else j(n===xl||n.isEmpty(),"priority of unexpected type.");j(n===xl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s2;class ut{static set __childrenNodeConstructor(e){s2=e}static get __childrenNodeConstructor(){return s2}constructor(e,t=ut.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),q0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ut(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:pe(e)===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ut.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=pe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(j(r!==".priority"||Nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ut.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+B0(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=m0(this.value_):e+=this.value_,this.lazyHash_=p0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ut.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ut.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=ut.VALUE_TYPE_ORDER.indexOf(t),i=ut.VALUE_TYPE_ORDER.indexOf(r);return j(s>=0,"Unknown leaf type: "+t),j(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H0,$0;function Ay(n){H0=n}function vy(n){$0=n}class Cy extends Zc{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?hi(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return me.MIN}maxPost(){return new me(Zr,new ut("[PRIORITY-POST]",$0))}makePost(e,t){const r=H0(e);return new me(t,new ut("[PRIORITY-POST]",r))}toString(){return".priority"}}const Be=new Cy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=Math.log(2);class Sy{constructor(e){const t=i=>parseInt(Math.log(i)/Ry,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oc=function(n,e,t,r){n.sort(e);const s=function(u,l){const h=l-u;let g,E;if(h===0)return null;if(h===1)return g=n[u],E=t?t(g):g,new ht(E,g.node,ht.BLACK,null,null);{const v=parseInt(h/2,10)+u,S=s(u,v),q=s(v+1,l);return g=n[v],E=t?t(g):g,new ht(E,g.node,ht.BLACK,S,q)}},i=function(u){let l=null,h=null,g=n.length;const E=function(S,q){const G=g-S,te=g;g-=S;const he=s(G+1,te),Ce=n[G],st=t?t(Ce):Ce;v(new ht(st,Ce.node,q,null,he))},v=function(S){l?(l.left=S,l=S):(h=S,l=S)};for(let S=0;S<u.count;++S){const q=u.nextBitIsOne(),G=Math.pow(2,u.count-(S+1));q?E(G,ht.BLACK):(E(G,ht.BLACK),E(G,ht.RED))}return h},o=new Sy(n.length),a=i(o);return new kt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;const Ss={};class xn{static get Default(){return j(Ss&&Be,"ChildrenNode.ts has not been loaded"),Xu=Xu||new xn({".priority":Ss},{".priority":Be}),Xu}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Yr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof kt?t:null}hasIndex(e){return cn(this.indexSet_,e.toString())}addIndex(e,t){j(e!==Fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(me.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=oc(r,e.getCompare()):a=Ss;const u=e.toString(),l={...this.indexSet_};l[u]=e;const h={...this.indexes_};return h[u]=a,new xn(h,l)}addToIndexes(e,t){const r=qa(this.indexes_,(s,i)=>{const o=Yr(this.indexSet_,i);if(j(o,"Missing index implementation for "+i),s===Ss)if(o.isDefinedOn(e.node)){const a=[],u=t.getIterator(me.Wrap);let l=u.getNext();for(;l;)l.name!==e.name&&a.push(l),l=u.getNext();return a.push(e),oc(a,o.getCompare())}else return Ss;else{const a=t.get(e.name);let u=s;return a&&(u=u.remove(new me(e.name,a))),u.insert(e,e.node)}});return new xn(r,this.indexSet_)}removeFromIndexes(e,t){const r=qa(this.indexes_,s=>{if(s===Ss)return s;{const i=t.get(e.name);return i?s.remove(new me(e.name,i)):s}});return new xn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;class ie{static get EMPTY_NODE(){return Di||(Di=new ie(new kt(zh),null,xn.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&q0(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Di}updatePriority(e){return this.children_.isEmpty()?this:new ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Di:t}}getChild(e){const t=pe(e);return t===null?this:this.getImmediateChild(t).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(j(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new me(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Di:this.priorityNode_;return new ie(s,o,i)}}updateChild(e,t){const r=pe(e);if(r===null)return t;{j(pe(e)!==".priority"||Nr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Oe(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(Be,(o,a)=>{t[o]=a.val(e),r++,i&&ie.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+B0(this.getPriority().val())+":"),this.forEachChild(Be,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":p0(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new me(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new me(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,me.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jo?-1:0}withIndex(e){if(e===Fs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Be),s=t.getIterator(Be);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fs?null:this.indexMap_.get(e.toString())}}ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Py extends ie{constructor(){super(new kt(zh),ie.EMPTY_NODE,xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ie.EMPTY_NODE}isEmpty(){return!1}}const jo=new Py;Object.defineProperties(me,{MIN:{value:new me(Ys,ie.EMPTY_NODE)},MAX:{value:new me(Zr,jo)}});U0.__EMPTY_NODE=ie.EMPTY_NODE;ut.__childrenNodeConstructor=ie;Ty(jo);vy(jo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=!0;function dt(n,e=null){if(n===null)return ie.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ut(t,dt(e))}if(!(n instanceof Array)&&Ny){const t=[];let r=!1;if(Ut(n,(o,a)=>{if(o.substring(0,1)!=="."){const u=dt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),t.push(new me(o,u)))}}),t.length===0)return ie.EMPTY_NODE;const i=oc(t,Iy,o=>o.name,zh);if(r){const o=oc(t,Be.getCompare());return new ie(i,dt(e),new xn({".priority":o},{".priority":Be}))}else return new ie(i,dt(e),xn.Default)}else{let t=ie.EMPTY_NODE;return Ut(n,(r,s)=>{if(cn(n,r)&&r.substring(0,1)!=="."){const i=dt(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(dt(e))}}Ay(dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by extends Zc{constructor(e){super(),this.indexPath_=e,j(!Ee(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?hi(e.name,t.name):i}makePost(e,t){const r=dt(e),s=ie.EMPTY_NODE.updateChild(this.indexPath_,r);return new me(t,s)}maxPost(){const e=ie.EMPTY_NODE.updateChild(this.indexPath_,jo);return new me(Zr,e)}toString(){return L0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy extends Zc{compare(e,t){const r=e.node.compareTo(t.node);return r===0?hi(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,t){const r=dt(e);return new me(t,r)}toString(){return".value"}}const Oy=new xy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(n){return{type:"value",snapshotNode:n}}function Qs(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Co(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ro(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function ky(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.index_=e}updateChild(e,t,r,s,i,o){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Co(t,a)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qs(t,r)):o.trackChildChange(Ro(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Be,(s,i)=>{t.hasChild(s)||r.trackChildChange(Co(s,i))}),t.isLeafNode()||t.forEachChild(Be,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ro(s,i,o))}else r.trackChildChange(Qs(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.indexedFilter_=new Kh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=So.getStartPost_(e),this.endPost_=So.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,i,o){return this.matches(new me(t,r))||(r=ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,i,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ie.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(ie.EMPTY_NODE);const i=this;return t.forEachChild(Be,(o,a)=>{i.matches(new me(o,a))||(s=s.updateImmediateChild(o,ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new So(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,i,o){return this.rangedFilter_.matches(new me(t,r))||(r=ie.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,i,o):this.fullLimitUpdateChild_(e,t,r,i,o)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=ie.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(ie.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,i){let o;if(this.reverse_){const g=this.index_.getCompare();o=(E,v)=>g(v,E)}else o=this.index_.getCompare();const a=e;j(a.numChildren()===this.limit_,"");const u=new me(t,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(t)){const g=a.getImmediateChild(t);let E=s.getChildAfterChild(this.index_,l,this.reverse_);for(;E!=null&&(E.name===t||a.hasChild(E.name));)E=s.getChildAfterChild(this.index_,E,this.reverse_);const v=E==null?1:o(E,u);if(h&&!r.isEmpty()&&v>=0)return i!=null&&i.trackChildChange(Ro(t,r,g)),a.updateImmediateChild(t,r);{i!=null&&i.trackChildChange(Co(t,g));const q=a.updateImmediateChild(t,ie.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(i!=null&&i.trackChildChange(Qs(E.name,E.node)),q.updateImmediateChild(E.name,E.node)):q}}else return r.isEmpty()?e:h&&o(l,u)>=0?(i!=null&&(i.trackChildChange(Co(l.name,l.node)),i.trackChildChange(Qs(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(l.name,ie.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ys}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new Yh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vy(n){return n.loadsAllData()?new Kh(n.getIndex()):n.hasLimit()?new Dy(n):new So(n)}function i2(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Be?t="$priority":n.index_===Oy?t="$value":n.index_===Fs?t="$key":(j(n.index_ instanceof by,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ft(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=ft(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+ft(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=ft(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+ft(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function o2(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Be&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends k0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Wo("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ac.getListenId_(e,r),a={};this.listens_[o]=a;const u=i2(e._queryParams);this.restRequest_(i+".json",u,(l,h)=>{let g=h;if(l===404&&(g=null,l=null),l===null&&this.onDataUpdate_(i,g,!1,r),Yr(this.listens_,o)===a){let E;l?l===401?E="permission_denied":E="rest_error:"+l:E="ok",s(E,null)}})}unlisten(e,t){const r=ac.getListenId_(e,t);delete this.listens_[r]}get(e){const t=i2(e._queryParams),r=e._path.toString(),s=new ei;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ti(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=so(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.rootNode_=ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){return{value:null,children:new Map}}function W0(n,e,t){if(Ee(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=pe(e);n.children.has(r)||n.children.set(r,cc());const s=n.children.get(r);e=Oe(e),W0(s,e,t)}}function Ol(n,e,t){n.value!==null?t(e,n.value):My(n,(r,s)=>{const i=new xe(e.toString()+"/"+r);Ol(s,i,t)})}function My(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Ut(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=10*1e3,Uy=30*1e3,By=300*1e3;class qy{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Fy(e);const r=a2+(Uy-a2)*Math.random();Ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Ut(e,(s,i)=>{i>0&&cn(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),Ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*By))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var en;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(en||(en={}));function j0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xh(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=en.ACK_USER_WRITE,this.source=j0()}operationForChild(e){if(Ee(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new xe(e));return new uc(Ae(),t,this.revert)}}else return j(pe(this.path)===e,"operationForChild called for unrelated child."),new uc(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){this.source=e,this.path=t,this.type=en.LISTEN_COMPLETE}operationForChild(e){return Ee(this.path)?new Po(this.source,Ae()):new Po(this.source,Oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=en.OVERWRITE}operationForChild(e){return Ee(this.path)?new es(this.source,Ae(),this.snap.getImmediateChild(e)):new es(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=en.MERGE}operationForChild(e){if(Ee(this.path)){const t=this.children.subtree(new xe(e));return t.isEmpty()?null:t.value?new es(this.source,Ae(),t.value):new No(this.source,Ae(),t)}else return j(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new No(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const t=pe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $y(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(ky(o.childName,o.snapshotNode))}),Vi(n,s,"child_removed",e,r,t),Vi(n,s,"child_added",e,r,t),Vi(n,s,"child_moved",i,r,t),Vi(n,s,"child_changed",e,r,t),Vi(n,s,"value",e,r,t),s}function Vi(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,u)=>Wy(n,a,u)),o.forEach(a=>{const u=Gy(n,a,i);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(u,n.query_))})})}function Gy(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Wy(n,e,t){if(e.childName==null||t.childName==null)throw Zs("Should only compare child_ events.");const r=new me(e.childName,e.snapshotNode),s=new me(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n,e){return{eventCache:n,serverCache:e}}function Zi(n,e,t,r){return eu(new ts(e,t,r),n.serverCache)}function z0(n,e,t,r){return eu(n.eventCache,new ts(e,t,r))}function kl(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ns(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju;const jy=()=>(Ju||(Ju=new kt(x5)),Ju);class De{static fromObject(e){let t=new De(null);return Ut(e,(r,s)=>{t=t.set(new xe(r),s)}),t}constructor(e,t=jy()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ae(),value:this.value};if(Ee(e))return null;{const r=pe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Oe(e),t);return i!=null?{path:rt(new xe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ee(e))return this;{const t=pe(e),r=this.children.get(t);return r!==null?r.subtree(Oe(e)):new De(null)}}set(e,t){if(Ee(e))return new De(t,this.children);{const r=pe(e),i=(this.children.get(r)||new De(null)).set(Oe(e),t),o=this.children.insert(r,i);return new De(this.value,o)}}remove(e){if(Ee(e))return this.children.isEmpty()?new De(null):new De(null,this.children);{const t=pe(e),r=this.children.get(t);if(r){const s=r.remove(Oe(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new De(null):new De(this.value,i)}else return this}}get(e){if(Ee(e))return this.value;{const t=pe(e),r=this.children.get(t);return r?r.get(Oe(e)):null}}setTree(e,t){if(Ee(e))return t;{const r=pe(e),i=(this.children.get(r)||new De(null)).setTree(Oe(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new De(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(rt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Ae(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Ee(e))return null;{const i=pe(e),o=this.children.get(i);return o?o.findOnPath_(Oe(e),rt(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ae(),t)}foreachOnPath_(e,t,r){if(Ee(e))return this;{this.value&&r(t,this.value);const s=pe(e),i=this.children.get(s);return i?i.foreachOnPath_(Oe(e),rt(t,s),r):new De(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(rt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.writeTree_=e}static empty(){return new nn(new De(null))}}function eo(n,e,t){if(Ee(e))return new nn(new De(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Ot(s,e);return i=i.updateChild(o,t),new nn(n.writeTree_.set(s,i))}else{const s=new De(t),i=n.writeTree_.setTree(e,s);return new nn(i)}}}function c2(n,e,t){let r=n;return Ut(t,(s,i)=>{r=eo(r,rt(e,s),i)}),r}function u2(n,e){if(Ee(e))return nn.empty();{const t=n.writeTree_.setTree(e,new De(null));return new nn(t)}}function Dl(n,e){return hs(n,e)!=null}function hs(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ot(t.path,e)):null}function l2(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Be,(r,s)=>{e.push(new me(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new me(r,s.value))}),e}function fr(n,e){if(Ee(e))return n;{const t=hs(n,e);return t!=null?new nn(new De(t)):new nn(n.writeTree_.subtree(e))}}function Vl(n){return n.writeTree_.isEmpty()}function Xs(n,e){return K0(Ae(),n.writeTree_,e)}function K0(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(j(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=K0(rt(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(rt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n,e){return J0(e,n)}function zy(n,e,t,r,s){j(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=eo(n.visibleWrites,e,t)),n.lastWriteId=r}function Ky(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Yy(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);j(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Qy(a,r.path)?s=!1:Zt(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Xy(n),!0;if(r.snap)n.visibleWrites=u2(n.visibleWrites,r.path);else{const a=r.children;Ut(a,u=>{n.visibleWrites=u2(n.visibleWrites,rt(r.path,u))})}return!0}else return!1}function Qy(n,e){if(n.snap)return Zt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Zt(rt(n.path,t),e))return!0;return!1}function Xy(n){n.visibleWrites=Y0(n.allWrites,Jy,Ae()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Jy(n){return n.visible}function Y0(n,e,t){let r=nn.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)Zt(t,o)?(a=Ot(t,o),r=eo(r,a,i.snap)):Zt(o,t)&&(a=Ot(o,t),r=eo(r,Ae(),i.snap.getChild(a)));else if(i.children){if(Zt(t,o))a=Ot(t,o),r=c2(r,a,i.children);else if(Zt(o,t))if(a=Ot(o,t),Ee(a))r=c2(r,Ae(),i.children);else{const u=Yr(i.children,pe(a));if(u){const l=u.getChild(Oe(a));r=eo(r,Ae(),l)}}}else throw Zs("WriteRecord should have .snap or .children")}}return r}function Q0(n,e,t,r,s){if(!r&&!s){const i=hs(n.visibleWrites,e);if(i!=null)return i;{const o=fr(n.visibleWrites,e);if(Vl(o))return t;if(t==null&&!Dl(o,Ae()))return null;{const a=t||ie.EMPTY_NODE;return Xs(o,a)}}}else{const i=fr(n.visibleWrites,e);if(!s&&Vl(i))return t;if(!s&&t==null&&!Dl(i,Ae()))return null;{const o=function(l){return(l.visible||s)&&(!r||!~r.indexOf(l.writeId))&&(Zt(l.path,e)||Zt(e,l.path))},a=Y0(n.allWrites,o,e),u=t||ie.EMPTY_NODE;return Xs(a,u)}}}function Zy(n,e,t){let r=ie.EMPTY_NODE;const s=hs(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Be,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=fr(n.visibleWrites,e);return t.forEachChild(Be,(o,a)=>{const u=Xs(fr(i,new xe(o)),a);r=r.updateImmediateChild(o,u)}),l2(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=fr(n.visibleWrites,e);return l2(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function eE(n,e,t,r,s){j(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=rt(e,t);if(Dl(n.visibleWrites,i))return null;{const o=fr(n.visibleWrites,i);return Vl(o)?s.getChild(t):Xs(o,s.getChild(t))}}function tE(n,e,t,r){const s=rt(e,t),i=hs(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=fr(n.visibleWrites,s);return Xs(o,r.getNode().getImmediateChild(t))}else return null}function nE(n,e){return hs(n.visibleWrites,e)}function rE(n,e,t,r,s,i,o){let a;const u=fr(n.visibleWrites,e),l=hs(u,Ae());if(l!=null)a=l;else if(t!=null)a=Xs(u,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],g=o.getCompare(),E=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=E.getNext();for(;v&&h.length<s;)g(v,r)!==0&&h.push(v),v=E.getNext();return h}else return[]}function sE(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function lc(n,e,t,r){return Q0(n.writeTree,n.treePath,e,t,r)}function Zh(n,e){return Zy(n.writeTree,n.treePath,e)}function h2(n,e,t,r){return eE(n.writeTree,n.treePath,e,t,r)}function hc(n,e){return nE(n.writeTree,rt(n.treePath,e))}function iE(n,e,t,r,s,i){return rE(n.writeTree,n.treePath,e,t,r,s,i)}function e1(n,e,t){return tE(n.writeTree,n.treePath,e,t)}function X0(n,e){return J0(rt(n.treePath,e),n.writeTree)}function J0(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;j(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),j(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,Ro(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,Co(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,Qs(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ro(r,e.snapshotNode,s.oldSnap));else throw Zs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Z0=new aE;class t1{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ts(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return e1(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ns(this.viewCache_),i=iE(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(n){return{filter:n}}function uE(n,e){j(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function lE(n,e,t,r,s){const i=new oE;let o,a;if(t.type===en.OVERWRITE){const l=t;l.source.fromUser?o=Ll(n,e,l.path,l.snap,r,s,i):(j(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Ee(l.path),o=dc(n,e,l.path,l.snap,r,s,a,i))}else if(t.type===en.MERGE){const l=t;l.source.fromUser?o=dE(n,e,l.path,l.children,r,s,i):(j(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ml(n,e,l.path,l.children,r,s,a,i))}else if(t.type===en.ACK_USER_WRITE){const l=t;l.revert?o=gE(n,e,l.path,r,s,i):o=fE(n,e,l.path,l.affectedTree,r,s,i)}else if(t.type===en.LISTEN_COMPLETE)o=pE(n,e,t.path,r,i);else throw Zs("Unknown operation type: "+t.type);const u=i.getChanges();return hE(e,o,u),{viewCache:o,changes:u}}function hE(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=kl(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(G0(kl(e)))}}function eg(n,e,t,r,s,i){const o=e.eventCache;if(hc(r,t)!=null)return e;{let a,u;if(Ee(t))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=ns(e),h=l instanceof ie?l:ie.EMPTY_NODE,g=Zh(r,h);a=n.filter.updateFullNode(e.eventCache.getNode(),g,i)}else{const l=lc(r,ns(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,i)}else{const l=pe(t);if(l===".priority"){j(Nr(t)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const g=h2(r,t,h,u);g!=null?a=n.filter.updatePriority(h,g):a=o.getNode()}else{const h=Oe(t);let g;if(o.isCompleteForChild(l)){u=e.serverCache.getNode();const E=h2(r,t,o.getNode(),u);E!=null?g=o.getNode().getImmediateChild(l).updateChild(h,E):g=o.getNode().getImmediateChild(l)}else g=e1(r,l,e.serverCache);g!=null?a=n.filter.updateChild(o.getNode(),l,g,h,s,i):a=o.getNode()}}return Zi(e,a,o.isFullyInitialized()||Ee(t),n.filter.filtersNodes())}}function dc(n,e,t,r,s,i,o,a){const u=e.serverCache;let l;const h=o?n.filter:n.filter.getIndexedFilter();if(Ee(t))l=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const v=u.getNode().updateChild(t,r);l=h.updateFullNode(u.getNode(),v,null)}else{const v=pe(t);if(!u.isCompleteForPath(t)&&Nr(t)>1)return e;const S=Oe(t),G=u.getNode().getImmediateChild(v).updateChild(S,r);v===".priority"?l=h.updatePriority(u.getNode(),G):l=h.updateChild(u.getNode(),v,G,S,Z0,null)}const g=z0(e,l,u.isFullyInitialized()||Ee(t),h.filtersNodes()),E=new t1(s,g,i);return eg(n,g,t,s,E,a)}function Ll(n,e,t,r,s,i,o){const a=e.eventCache;let u,l;const h=new t1(s,e,i);if(Ee(t))l=n.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Zi(e,l,!0,n.filter.filtersNodes());else{const g=pe(t);if(g===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),r),u=Zi(e,l,a.isFullyInitialized(),a.isFiltered());else{const E=Oe(t),v=a.getNode().getImmediateChild(g);let S;if(Ee(E))S=r;else{const q=h.getCompleteChild(g);q!=null?V0(E)===".priority"&&q.getChild(M0(E)).isEmpty()?S=q:S=q.updateChild(E,r):S=ie.EMPTY_NODE}if(v.equals(S))u=e;else{const q=n.filter.updateChild(a.getNode(),g,S,E,h,o);u=Zi(e,q,a.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function d2(n,e){return n.eventCache.isCompleteForChild(e)}function dE(n,e,t,r,s,i,o){let a=e;return r.foreach((u,l)=>{const h=rt(t,u);d2(e,pe(h))&&(a=Ll(n,a,h,l,s,i,o))}),r.foreach((u,l)=>{const h=rt(t,u);d2(e,pe(h))||(a=Ll(n,a,h,l,s,i,o))}),a}function f2(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ml(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,l;Ee(t)?l=r:l=new De(null).setTree(t,r);const h=e.serverCache.getNode();return l.children.inorderTraversal((g,E)=>{if(h.hasChild(g)){const v=e.serverCache.getNode().getImmediateChild(g),S=f2(n,v,E);u=dc(n,u,new xe(g),S,s,i,o,a)}}),l.children.inorderTraversal((g,E)=>{const v=!e.serverCache.isCompleteForChild(g)&&E.value===null;if(!h.hasChild(g)&&!v){const S=e.serverCache.getNode().getImmediateChild(g),q=f2(n,S,E);u=dc(n,u,new xe(g),q,s,i,o,a)}}),u}function fE(n,e,t,r,s,i,o){if(hc(s,t)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(Ee(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return dc(n,e,t,u.getNode().getChild(t),s,i,a,o);if(Ee(t)){let l=new De(null);return u.getNode().forEachChild(Fs,(h,g)=>{l=l.set(new xe(h),g)}),Ml(n,e,t,l,s,i,a,o)}else return e}else{let l=new De(null);return r.foreach((h,g)=>{const E=rt(t,h);u.isCompleteForPath(E)&&(l=l.set(h,u.getNode().getChild(E)))}),Ml(n,e,t,l,s,i,a,o)}}function pE(n,e,t,r,s){const i=e.serverCache,o=z0(e,i.getNode(),i.isFullyInitialized()||Ee(t),i.isFiltered());return eg(n,o,t,r,Z0,s)}function gE(n,e,t,r,s,i){let o;if(hc(r,t)!=null)return e;{const a=new t1(r,e,s),u=e.eventCache.getNode();let l;if(Ee(t)||pe(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=lc(r,ns(e));else{const g=e.serverCache.getNode();j(g instanceof ie,"serverChildren would be complete if leaf node"),h=Zh(r,g)}h=h,l=n.filter.updateFullNode(u,h,i)}else{const h=pe(t);let g=e1(r,h,e.serverCache);g==null&&e.serverCache.isCompleteForChild(h)&&(g=u.getImmediateChild(h)),g!=null?l=n.filter.updateChild(u,h,g,Oe(t),a,i):e.eventCache.getNode().hasChild(h)?l=n.filter.updateChild(u,h,ie.EMPTY_NODE,Oe(t),a,i):l=u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lc(r,ns(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,i)))}return o=e.serverCache.isFullyInitialized()||hc(r,Ae())!=null,Zi(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Kh(r.getIndex()),i=Vy(r);this.processor_=cE(i);const o=t.serverCache,a=t.eventCache,u=s.updateFullNode(ie.EMPTY_NODE,o.getNode(),null),l=i.updateFullNode(ie.EMPTY_NODE,a.getNode(),null),h=new ts(u,o.isFullyInitialized(),s.filtersNodes()),g=new ts(l,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=eu(g,h),this.eventGenerator_=new Hy(this.query_)}get query(){return this.query_}}function _E(n){return n.viewCache_.serverCache.getNode()}function yE(n,e){const t=ns(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ee(e)&&!t.getImmediateChild(pe(e)).isEmpty())?t.getChild(e):null}function p2(n){return n.eventRegistrations_.length===0}function EE(n,e){n.eventRegistrations_.push(e)}function g2(n,e,t){const r=[];if(t){j(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function m2(n,e,t,r){e.type===en.MERGE&&e.source.queryId!==null&&(j(ns(n.viewCache_),"We should always have a full cache before handling merges"),j(kl(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=lE(n.processor_,s,e,t,r);return uE(n.processor_,i.viewCache),j(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,tg(n,i.changes,i.viewCache.eventCache.getNode(),null)}function wE(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Be,(i,o)=>{r.push(Qs(i,o))}),t.isFullyInitialized()&&r.push(G0(t.getNode())),tg(n,r,t.getNode(),e)}function tg(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return $y(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;class IE{constructor(){this.views=new Map}}function TE(n){j(!fc,"__referenceConstructor has already been defined"),fc=n}function AE(){return j(fc,"Reference.ts has not been loaded"),fc}function vE(n){return n.views.size===0}function n1(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return j(i!=null,"SyncTree gave us an op for an invalid query."),m2(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(m2(o,e,t,r));return i}}function CE(n,e,t,r,s){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=lc(t,s?r:null),u=!1;a?u=!0:r instanceof ie?(a=Zh(t,r),u=!1):(a=ie.EMPTY_NODE,u=!1);const l=eu(new ts(a,u,!1),new ts(r,s,!1));return new mE(e,l)}return o}function RE(n,e,t,r,s,i){const o=CE(n,e,r,s,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),EE(o,t),wE(o,t)}function SE(n,e,t,r){const s=e._queryIdentifier,i=[];let o=[];const a=br(n);if(s==="default")for(const[u,l]of n.views.entries())o=o.concat(g2(l,t,r)),p2(l)&&(n.views.delete(u),l.query._queryParams.loadsAllData()||i.push(l.query));else{const u=n.views.get(s);u&&(o=o.concat(g2(u,t,r)),p2(u)&&(n.views.delete(s),u.query._queryParams.loadsAllData()||i.push(u.query)))}return a&&!br(n)&&i.push(new(AE())(e._repo,e._path)),{removed:i,events:o}}function ng(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Us(n,e){let t=null;for(const r of n.views.values())t=t||yE(r,e);return t}function rg(n,e){if(e._queryParams.loadsAllData())return tu(n);{const r=e._queryIdentifier;return n.views.get(r)}}function sg(n,e){return rg(n,e)!=null}function br(n){return tu(n)!=null}function tu(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;function PE(n){j(!pc,"__referenceConstructor has already been defined"),pc=n}function NE(){return j(pc,"Reference.ts has not been loaded"),pc}let bE=1;class _2{constructor(e){this.listenProvider_=e,this.syncPointTree_=new De(null),this.pendingWriteTree_=sE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function r1(n,e,t,r,s){return zy(n.pendingWriteTree_,e,t,r,s),s?zo(n,new es(j0(),e,t)):[]}function Gr(n,e,t=!1){const r=Ky(n.pendingWriteTree_,e);if(Yy(n.pendingWriteTree_,e)){let i=new De(null);return r.snap!=null?i=i.set(Ae(),!0):Ut(r.children,o=>{i=i.set(new xe(o),!0)}),zo(n,new uc(r.path,i,t))}else return[]}function nu(n,e,t){return zo(n,new es(Qh(),e,t))}function xE(n,e,t){const r=De.fromObject(t);return zo(n,new No(Qh(),e,r))}function OE(n,e){return zo(n,new Po(Qh(),e))}function kE(n,e,t){const r=s1(n,t);if(r){const s=i1(r),i=s.path,o=s.queryId,a=Ot(i,e),u=new Po(Xh(o),a);return o1(n,i,u)}else return[]}function Fl(n,e,t,r,s=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||sg(o,e))){const u=SE(o,e,t,r);vE(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const l=u.removed;if(a=u.events,!s){const h=l.findIndex(E=>E._queryParams.loadsAllData())!==-1,g=n.syncPointTree_.findOnPath(i,(E,v)=>br(v));if(h&&!g){const E=n.syncPointTree_.subtree(i);if(!E.isEmpty()){const v=LE(E);for(let S=0;S<v.length;++S){const q=v[S],G=q.query,te=ag(n,q);n.listenProvider_.startListening(to(G),gc(n,G),te.hashFn,te.onComplete)}}}!g&&l.length>0&&!r&&(h?n.listenProvider_.stopListening(to(e),null):l.forEach(E=>{const v=n.queryToTagMap.get(su(E));n.listenProvider_.stopListening(to(E),v)}))}ME(n,l)}return a}function DE(n,e,t,r){const s=s1(n,r);if(s!=null){const i=i1(s),o=i.path,a=i.queryId,u=Ot(o,e),l=new es(Xh(a),u,t);return o1(n,o,l)}else return[]}function VE(n,e,t,r){const s=s1(n,r);if(s){const i=i1(s),o=i.path,a=i.queryId,u=Ot(o,e),l=De.fromObject(t),h=new No(Xh(a),u,l);return o1(n,o,h)}else return[]}function y2(n,e,t,r=!1){const s=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(s,(E,v)=>{const S=Ot(E,s);i=i||Us(v,S),o=o||br(v)});let a=n.syncPointTree_.get(s);a?(o=o||br(a),i=i||Us(a,Ae())):(a=new IE,n.syncPointTree_=n.syncPointTree_.set(s,a));let u;i!=null?u=!0:(u=!1,i=ie.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((v,S)=>{const q=Us(S,Ae());q&&(i=i.updateImmediateChild(v,q))}));const l=sg(a,e);if(!l&&!e._queryParams.loadsAllData()){const E=su(e);j(!n.queryToTagMap.has(E),"View does not exist, but we have a tag");const v=FE();n.queryToTagMap.set(E,v),n.tagToQueryMap.set(v,E)}const h=Jh(n.pendingWriteTree_,s);let g=RE(a,e,t,h,i,u);if(!l&&!o&&!r){const E=rg(a,e);g=g.concat(UE(n,e,E))}return g}function ru(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const u=Ot(o,e),l=Us(a,u);if(l)return l});return Q0(s,e,i,t,!0)}function zo(n,e){return ig(e,n.syncPointTree_,null,Jh(n.pendingWriteTree_,Ae()))}function ig(n,e,t,r){if(Ee(n.path))return og(n,e,t,r);{const s=e.get(Ae());t==null&&s!=null&&(t=Us(s,Ae()));let i=[];const o=pe(n.path),a=n.operationForChild(o),u=e.children.get(o);if(u&&a){const l=t?t.getImmediateChild(o):null,h=X0(r,o);i=i.concat(ig(a,u,l,h))}return s&&(i=i.concat(n1(s,n,r,t))),i}}function og(n,e,t,r){const s=e.get(Ae());t==null&&s!=null&&(t=Us(s,Ae()));let i=[];return e.children.inorderTraversal((o,a)=>{const u=t?t.getImmediateChild(o):null,l=X0(r,o),h=n.operationForChild(o);h&&(i=i.concat(og(h,a,u,l)))}),s&&(i=i.concat(n1(s,n,r,t))),i}function ag(n,e){const t=e.query,r=gc(n,t);return{hashFn:()=>(_E(e)||ie.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?kE(n,t._path,r):OE(n,t._path);{const i=D5(s,t);return Fl(n,t,null,i)}}}}function gc(n,e){const t=su(e);return n.queryToTagMap.get(t)}function su(n){return n._path.toString()+"$"+n._queryIdentifier}function s1(n,e){return n.tagToQueryMap.get(e)}function i1(n){const e=n.indexOf("$");return j(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new xe(n.substr(0,e))}}function o1(n,e,t){const r=n.syncPointTree_.get(e);j(r,"Missing sync point for query tag that we're tracking");const s=Jh(n.pendingWriteTree_,e);return n1(r,t,s,null)}function LE(n){return n.fold((e,t,r)=>{if(t&&br(t))return[tu(t)];{let s=[];return t&&(s=ng(t)),Ut(r,(i,o)=>{s=s.concat(o)}),s}})}function to(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(NE())(n._repo,n._path):n}function ME(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=su(r),i=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(i)}}}function FE(){return bE++}function UE(n,e,t){const r=e._path,s=gc(n,e),i=ag(n,t),o=n.listenProvider_.startListening(to(e),s,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(r);if(s)j(!br(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((l,h,g)=>{if(!Ee(l)&&h&&br(h))return[tu(h).query];{let E=[];return h&&(E=E.concat(ng(h).map(v=>v.query))),Ut(g,(v,S)=>{E=E.concat(S)}),E}});for(let l=0;l<u.length;++l){const h=u[l];n.listenProvider_.stopListening(to(h),gc(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new a1(t)}node(){return this.node_}}class c1{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=rt(this.path_,e);return new c1(this.syncTree_,t)}node(){return ru(this.syncTree_,this.path_)}}const BE=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},E2=function(n,e,t){if(!n||typeof n!="object")return n;if(j(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return qE(n[".sv"],e,t);if(typeof n[".sv"]=="object")return HE(n[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},qE=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:j(!1,"Unexpected server value: "+n)}},HE=function(n,e,t){n.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&j(!1,"Unexpected increment value: "+r);const s=e.node();if(j(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},$E=function(n,e,t,r){return l1(e,new c1(t,n),r)},u1=function(n,e,t){return l1(n,new a1(e),t)};function l1(n,e,t){const r=n.getPriority().val(),s=E2(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=E2(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ut(a,dt(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ut(s))),o.forEachChild(Be,(a,u)=>{const l=l1(u,e.getImmediateChild(a),t);l!==u&&(i=i.updateImmediateChild(a,l))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function iu(n,e){let t=e instanceof xe?e:new xe(e),r=n,s=pe(t);for(;s!==null;){const i=Yr(r.node.children,s)||{children:{},childCount:0};r=new h1(s,r,i),t=Oe(t),s=pe(t)}return r}function ds(n){return n.node.value}function d1(n,e){n.node.value=e,Ul(n)}function cg(n){return n.node.childCount>0}function GE(n){return ds(n)===void 0&&!cg(n)}function ou(n,e){Ut(n.node.children,(t,r)=>{e(new h1(t,n,r))})}function ug(n,e,t,r){t&&e(n),ou(n,s=>{ug(s,e,!0)})}function WE(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ko(n){return new xe(n.parent===null?n.name:Ko(n.parent)+"/"+n.name)}function Ul(n){n.parent!==null&&jE(n.parent,n.name,n)}function jE(n,e,t){const r=GE(t),s=cn(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Ul(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ul(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=/[\[\].#$\/\u0000-\u001F\u007F]/,KE=/[\[\].#$\u0000-\u001F\u007F]/,Zu=10*1024*1024,lg=function(n){return typeof n=="string"&&n.length!==0&&!zE.test(n)},hg=function(n){return typeof n=="string"&&n.length!==0&&!KE.test(n)},YE=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hg(n)},QE=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Bh(n)||n&&typeof n=="object"&&cn(n,".sv")},dg=function(n,e,t,r){r&&e===void 0||au(Wl(n,"value"),e,t)},au=function(n,e,t){const r=t instanceof xe?new fy(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Br(r));if(typeof e=="function")throw new Error(n+"contains a function "+Br(r)+" with contents = "+e.toString());if(Bh(e))throw new Error(n+"contains "+e.toString()+" "+Br(r));if(typeof e=="string"&&e.length>Zu/3&&Ac(e)>Zu)throw new Error(n+"contains a string greater than "+Zu+" utf8 bytes "+Br(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ut(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!lg(o)))throw new Error(n+" contains an invalid key ("+o+") "+Br(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);py(r,o),au(n,a,r),gy(r)}),s&&i)throw new Error(n+' contains ".value" child '+Br(r)+" in addition to actual children.")}},fg=function(n,e,t,r){if(!hg(t))throw new Error(Wl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XE=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fg(n,e,t)},f1=function(n,e){if(pe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},JE=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!YE(t))throw new Error(Wl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function p1(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!Wh(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function pg(n,e,t){p1(n,t),gg(n,r=>Wh(r,e))}function vn(n,e,t){p1(n,t),gg(n,r=>Zt(r,e)||Zt(e,r))}function gg(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(ew(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ew(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Xi&&At("event: "+t.toString()),di(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="repo_interrupt",nw=25;class rw{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cc(),this.transactionQueueTree_=new h1,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sw(n,e,t){if(n.stats_=$h(n.repoInfo_),n.forceRestClient_||F5())n.server_=new ac(n.repoInfo_,(r,s,i,o)=>{w2(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>I2(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ft(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Ln(n.repoInfo_,e,(r,s,i,o)=>{w2(n,r,s,i,o)},r=>{I2(n,r)},r=>{iw(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=$5(n.repoInfo_,()=>new qy(n.stats_,n.server_)),n.infoData_=new Ly,n.infoSyncTree_=new _2({startListening:(r,s,i,o)=>{let a=[];const u=n.infoData_.getNode(r._path);return u.isEmpty()||(a=nu(n.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),g1(n,"connected",!1),n.serverSyncTree_=new _2({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,u)=>{const l=o(a,u);vn(n.eventQueue_,r._path,l)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function mg(n){const t=n.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function cu(n){return BE({timestamp:mg(n)})}function w2(n,e,t,r,s){n.dataUpdateCount++;const i=new xe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const u=qa(t,l=>dt(l));o=VE(n.serverSyncTree_,i,u,s)}else{const u=dt(t);o=DE(n.serverSyncTree_,i,u,s)}else if(r){const u=qa(t,l=>dt(l));o=xE(n.serverSyncTree_,i,u)}else{const u=dt(t);o=nu(n.serverSyncTree_,i,u)}let a=i;o.length>0&&(a=hu(n,i)),vn(n.eventQueue_,a,o)}function I2(n,e){g1(n,"connected",e),e===!1&&aw(n)}function iw(n,e){Ut(e,(t,r)=>{g1(n,t,r)})}function g1(n,e,t){const r=new xe("/.info/"+e),s=dt(t);n.infoData_.updateSnapshot(r,s);const i=nu(n.infoSyncTree_,r,s);vn(n.eventQueue_,r,i)}function m1(n){return n.nextWriteId_++}function ow(n,e,t,r,s){uu(n,"set",{path:e.toString(),value:t,priority:r});const i=cu(n),o=dt(t,r),a=ru(n.serverSyncTree_,e),u=u1(o,a,i),l=m1(n),h=r1(n.serverSyncTree_,e,u,l,!0);p1(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(E,v)=>{const S=E==="ok";S||Vt("set at "+e+" failed: "+E);const q=Gr(n.serverSyncTree_,l,!S);vn(n.eventQueue_,e,q),lw(n,s,E,v)});const g=wg(n,e);hu(n,g),vn(n.eventQueue_,g,[])}function aw(n){uu(n,"onDisconnectEvents");const e=cu(n),t=cc();Ol(n.onDisconnect_,Ae(),(s,i)=>{const o=$E(s,i,n.serverSyncTree_,e);W0(t,s,o)});let r=[];Ol(t,Ae(),(s,i)=>{r=r.concat(nu(n.serverSyncTree_,s,i));const o=wg(n,s);hu(n,o)}),n.onDisconnect_=cc(),vn(n.eventQueue_,Ae(),r)}function cw(n,e,t){let r;pe(e._path)===".info"?r=y2(n.infoSyncTree_,e,t):r=y2(n.serverSyncTree_,e,t),pg(n.eventQueue_,e._path,r)}function T2(n,e,t){let r;pe(e._path)===".info"?r=Fl(n.infoSyncTree_,e,t):r=Fl(n.serverSyncTree_,e,t),pg(n.eventQueue_,e._path,r)}function uw(n){n.persistentConnection_&&n.persistentConnection_.interrupt(tw)}function uu(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),At(t,...e)}function lw(n,e,t,r){e&&di(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function hw(n,e,t,r,s,i){uu(n,"transaction on "+e);const o={path:e,update:t,onComplete:r,status:null,order:f0(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=_1(n,e,void 0);o.currentInputSnapshot=a;const u=o.update(a.val());if(u===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{au("transaction failed: Data returned ",u,o.path),o.status=0;const l=iu(n.transactionQueueTree_,e),h=ds(l)||[];h.push(o),d1(l,h);let g;typeof u=="object"&&u!==null&&cn(u,".priority")?(g=Yr(u,".priority"),j(QE(g),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):g=(ru(n.serverSyncTree_,e)||ie.EMPTY_NODE).getPriority().val();const E=cu(n),v=dt(u,g),S=u1(v,a,E);o.currentOutputSnapshotRaw=v,o.currentOutputSnapshotResolved=S,o.currentWriteId=m1(n);const q=r1(n.serverSyncTree_,e,S,o.currentWriteId,o.applyLocally);vn(n.eventQueue_,e,q),lu(n,n.transactionQueueTree_)}}function _1(n,e,t){return ru(n.serverSyncTree_,e,t)||ie.EMPTY_NODE}function lu(n,e=n.transactionQueueTree_){if(e||du(n,e),ds(e)){const t=yg(n,e);j(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&dw(n,Ko(e),t)}else cg(e)&&ou(e,t=>{lu(n,t)})}function dw(n,e,t){const r=t.map(l=>l.currentWriteId),s=_1(n,e,r);let i=s;const o=s.hash();for(let l=0;l<t.length;l++){const h=t[l];j(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const g=Ot(e,h.path);i=i.updateChild(g,h.currentOutputSnapshotRaw)}const a=i.val(!0),u=e;n.server_.put(u.toString(),a,l=>{uu(n,"transaction put response",{path:u.toString(),status:l});let h=[];if(l==="ok"){const g=[];for(let E=0;E<t.length;E++)t[E].status=2,h=h.concat(Gr(n.serverSyncTree_,t[E].currentWriteId)),t[E].onComplete&&g.push(()=>t[E].onComplete(null,!0,t[E].currentOutputSnapshotResolved)),t[E].unwatcher();du(n,iu(n.transactionQueueTree_,e)),lu(n,n.transactionQueueTree_),vn(n.eventQueue_,e,h);for(let E=0;E<g.length;E++)di(g[E])}else{if(l==="datastale")for(let g=0;g<t.length;g++)t[g].status===3?t[g].status=4:t[g].status=0;else{Vt("transaction at "+u.toString()+" failed: "+l);for(let g=0;g<t.length;g++)t[g].status=4,t[g].abortReason=l}hu(n,e)}},o)}function hu(n,e){const t=_g(n,e),r=Ko(t),s=yg(n,t);return fw(n,s,r),r}function fw(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],l=Ot(t,u.path);let h=!1,g;if(j(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,g=u.abortReason,s=s.concat(Gr(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=nw)h=!0,g="maxretry",s=s.concat(Gr(n.serverSyncTree_,u.currentWriteId,!0));else{const E=_1(n,u.path,o);u.currentInputSnapshot=E;const v=e[a].update(E.val());if(v!==void 0){au("transaction failed: Data returned ",v,u.path);let S=dt(v);typeof v=="object"&&v!=null&&cn(v,".priority")||(S=S.updatePriority(E.getPriority()));const G=u.currentWriteId,te=cu(n),he=u1(S,E,te);u.currentOutputSnapshotRaw=S,u.currentOutputSnapshotResolved=he,u.currentWriteId=m1(n),o.splice(o.indexOf(G),1),s=s.concat(r1(n.serverSyncTree_,u.path,he,u.currentWriteId,u.applyLocally)),s=s.concat(Gr(n.serverSyncTree_,G,!0))}else h=!0,g="nodata",s=s.concat(Gr(n.serverSyncTree_,u.currentWriteId,!0))}vn(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(E){setTimeout(E,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(g==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(g),!1,null))))}du(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)di(r[a]);lu(n,n.transactionQueueTree_)}function _g(n,e){let t,r=n.transactionQueueTree_;for(t=pe(e);t!==null&&ds(r)===void 0;)r=iu(r,t),e=Oe(e),t=pe(e);return r}function yg(n,e){const t=[];return Eg(n,e,t),t.sort((r,s)=>r.order-s.order),t}function Eg(n,e,t){const r=ds(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);ou(e,s=>{Eg(n,s,t)})}function du(n,e){const t=ds(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,d1(e,t.length>0?t:void 0)}ou(e,r=>{du(n,r)})}function wg(n,e){const t=Ko(_g(n,e)),r=iu(n.transactionQueueTree_,e);return WE(r,s=>{el(n,s)}),el(n,r),ug(r,s=>{el(n,s)}),t}function el(n,e){const t=ds(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(j(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(j(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Gr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?d1(e,void 0):t.length=i+1,vn(n.eventQueue_,Ko(e),s);for(let o=0;o<r.length;o++)di(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function gw(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vt(`Invalid query segment '${t}' in query '${n}'`)}return e}const A2=function(n,e){const t=mw(n),r=t.namespace;t.domain==="firebase.com"&&Bn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||N5();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new R0(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new xe(t.pathString)}},mw=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",u=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let h=n.indexOf("/");h===-1&&(h=n.length);let g=n.indexOf("?");g===-1&&(g=n.length),e=n.substring(0,Math.min(h,g)),h<g&&(s=pw(n.substring(h,g)));const E=gw(n.substring(Math.min(n.length,g)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(l+1),10)):l=e.length;const v=e.slice(0,l);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const S=e.indexOf(".");r=e.substring(0,S).toLowerCase(),t=e.substring(S+1),i=r}"ns"in E&&(i=E.ns)}return{host:e,port:u,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_w=(function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=v2.charAt(t%64),t=Math.floor(t/64);j(t===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=v2.charAt(e[s]);return j(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ft(this.snapshot.exportVal())}}class Ew{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Ee(this._path)?null:V0(this._path)}get ref(){return new $n(this._repo,this._path)}get _queryIdentifier(){const e=o2(this._queryParams),t=qh(e);return t==="{}"?"default":t}get _queryObject(){return o2(this._queryParams)}isEqual(e){if(e=Le(e),!(e instanceof y1))return!1;const t=this._repo===e._repo,r=Wh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+dy(this._path)}}class $n extends y1{constructor(e,t){super(e,t,new Yh,!1)}get parent(){const e=M0(this._path);return e===null?null:new $n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bo{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new xe(e),r=xo(this.ref,e);return new bo(this._node.getChild(t),r,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new bo(s,xo(this.ref,r),Be)))}hasChild(e){const t=new xe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function aA(n,e){return n=Le(n),n._checkNotDeleted("ref"),e!==void 0?xo(n._root,e):n._root}function xo(n,e){return n=Le(n),pe(n._path)===null?XE("child","path",e):fg("child","path",e),new $n(n._repo,rt(n._path,e))}function cA(n,e){n=Le(n),f1("push",n._path),dg("push",e,n._path,!0);const t=mg(n._repo),r=_w(t),s=xo(n,r),i=xo(n,r);let o;return e!=null?o=Iw(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Iw(n,e){n=Le(n),f1("set",n._path),dg("set",e,n._path,!1);const t=new ei;return ow(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class E1{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new yw("value",this,new bo(e.snapshotNode,new $n(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ew(this,e,t):null}matches(e){return e instanceof E1?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Tw(n,e,t,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const u=t,l=(h,g)=>{T2(n._repo,n,a),u(h,g)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new ww(t,i||void 0),a=new E1(o);return cw(n._repo,n,a),()=>T2(n._repo,n,a)}function Aw(n,e,t,r){return Tw(n,"value",e,t,r)}TE($n);PE($n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="FIREBASE_DATABASE_EMULATOR_HOST",Bl={};let Cw=!1;function Rw(n,e,t,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=ss(i);n.repoInfo_=new R0(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function Sw(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),At("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=A2(i,s),a=o.repoInfo,u;typeof j2<"u"&&Hf&&(u=Hf[vw]),u?(i=`http://${u}?ns=${a.namespace}`,o=A2(i,s),a=o.repoInfo):o.repoInfo.secure;const l=new B5(n.name,n.options,e);JE("Invalid Firebase Database URL",o),Ee(o.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Nw(a,n,l,new U5(n,t));return new bw(h,n)}function Pw(n,e){const t=Bl[e];(!t||t[n.key]!==n)&&Bn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),uw(n),delete t[n.key]}function Nw(n,e,t,r){let s=Bl[e.name];s||(s={},Bl[e.name]=s);let i=s[n.toURLString()];return i&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new rw(n,Cw,t,r),s[n.toURLString()]=i,i}class bw{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $n(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Pw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function uA(n=Kl(),e){const t=Cc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=J2("database");r&&xw(t,...r)}return t}function xw(n,e,t,r={}){n=Le(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&gr(r,i.repoInfo_.emulatorOptions))return;Bn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Da(Da.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:tp(r.mockUserToken,n.app.options.projectId);o=new Da(a)}ss(e)&&jl(e),Rw(i,s,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(n){v5(is),Qr(new mr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Sw(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),mn($f,Gf,n),mn($f,Gf,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw={".sv":"timestamp"};function lA(){return kw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function hA(n,e,t){if(n=Le(n),f1("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const r=!0,s=new ei,i=(a,u,l)=>{let h=null;a?s.reject(a):(h=new bo(l,new $n(n._repo,n._path),Be),s.resolve(new Dw(u,h)))},o=Aw(n,()=>{});return hw(n._repo,n._path,e,i,o,r),s.promise}Ln.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ln.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ow();function Ig(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vw=Ig,Tg=new Do("auth","Firebase",Ig());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new vc("@firebase/auth");function Lw(n,...e){mc.logLevel<=_e.WARN&&mc.warn(`Auth (${is}): ${n}`,...e)}function Va(n,...e){mc.logLevel<=_e.ERROR&&mc.error(`Auth (${is}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n,...e){throw w1(n,...e)}function wn(n,...e){return w1(n,...e)}function Ag(n,e,t){const r={...Vw(),[e]:t};return new Do("auth","Firebase",r).create(e,{appName:n.name})}function pr(n){return Ag(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w1(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Tg.create(n,...e)}function se(n,e,...t){if(!n)throw w1(e,...t)}function On(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Va(e),new Error(e)}function qn(n,e){n||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Mw(){return C2()==="http:"||C2()==="https:"}function C2(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mw()||Lm()||"connection"in navigator)?navigator.onLine:!0}function Uw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t){this.shortDelay=e,this.longDelay=t,qn(t>e,"Short delay should be less than long delay!"),this.isMobile=Gl()||np()}get(){return Fw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(n,e){qn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hw=new Yo(3e4,6e4);function fs(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function kr(n,e,t,r,s={}){return Cg(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ti({...o,key:n.config.apiKey}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:u,...i};return Vm()||(l.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&ss(n.emulatorConfig.host)&&(l.credentials="include"),vg.fetch()(await Rg(n,n.config.apiHost,t,a),l)})}async function Cg(n,e,t){n._canInitEmulator=!1;const r={...Bw,...e};try{const s=new Gw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ra(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ra(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ag(n,h,l);an(n,h)}}catch(s){if(s instanceof Hn)throw s;an(n,"network-request-failed",{message:String(s)})}}async function fu(n,e,t,r,s={}){const i=await kr(n,e,t,r,s);return"mfaPendingCredential"in i&&an(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Rg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?I1(n.config,s):`${n.config.apiScheme}://${s}`;return qw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function $w(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),Hw.get())})}}function Ra(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=wn(n,e,r);return s.customData._tokenResponse=t,s}function R2(n){return n!==void 0&&n.enterprise!==void 0}class Ww{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $w(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function jw(n,e){return kr(n,"GET","/v2/recaptchaConfig",fs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(n,e){return kr(n,"POST","/v1/accounts:delete",e)}async function _c(n,e){return kr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kw(n,e=!1){const t=Le(n),r=await t.getIdToken(e),s=T1(r);se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:no(tl(s.auth_time)),issuedAtTime:no(tl(s.iat)),expirationTime:no(tl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tl(n){return Number(n)*1e3}function T1(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ba(t);return s?JSON.parse(s):(Va("Failed to decode base64 JWT payload"),null)}catch(s){return Va("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function S2(n){const e=T1(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Hn&&Yw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Yw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(n){var g;const e=n.auth,t=await n.getIdToken(),r=await Oo(n,_c(e,{idToken:t}));se(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?Sg(s.providerUserInfo):[],o=Jw(n.providerData,i),a=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),l=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Hl(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function Xw(n){const e=Le(n);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(n,e){const t=await Cg(n,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Rg(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return n.emulatorConfig&&ss(n.emulatorConfig.host)&&(u.credentials="include"),vg.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function eI(n,e){return kr(n,"POST","/v2/accounts:revokeToken",fs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):S2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=S2(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Zw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Bs;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tn{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Qw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Oo(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Kw(this,e)}reload(){return Xw(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await yc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Oo(this,zw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,u=t._redirectEventId??void 0,l=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:v,providerData:S,stsTokenManager:q}=t;se(g&&q,e,"internal-error");const G=Bs.fromJSON(this.name,q);se(typeof g=="string",e,"internal-error"),Xn(r,e.name),Xn(s,e.name),se(typeof E=="boolean",e,"internal-error"),se(typeof v=="boolean",e,"internal-error"),Xn(i,e.name),Xn(o,e.name),Xn(a,e.name),Xn(u,e.name),Xn(l,e.name),Xn(h,e.name);const te=new tn({uid:g,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:G,createdAt:l,lastLoginAt:h});return S&&Array.isArray(S)&&(te.providerData=S.map(he=>({...he}))),u&&(te._redirectEventId=u),te}static async _fromIdTokenResponse(e,t,r=!1){const s=new Bs;s.updateFromServerResponse(t);const i=new tn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yc(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Bs;a.updateFromIdToken(r);const u=new tn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,l),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=new Map;function kn(n){qn(n instanceof Function,"Expected a class definition");let e=P2.get(n);return e?(qn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,P2.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pg.type="NONE";const N2=Pg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n,e,t){return`firebase:${n}:${e}:${t}`}class qs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=La(this.userKey,s.apiKey,i),this.fullPersistenceKey=La("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await _c(this.auth,{idToken:e}).catch(()=>{});return t?tn._fromGetAccountInfoResponse(this.auth,t,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new qs(kn(N2),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||kn(N2);const o=La(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){let g;if(typeof h=="string"){const E=await _c(e,{idToken:h}).catch(()=>{});if(!E)break;g=await tn._fromGetAccountInfoResponse(e,E,h)}else g=tn._fromJSON(e,h);l!==i&&(a=g),i=l;break}}catch{}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new qs(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new qs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dg(e))return"Blackberry";if(Vg(e))return"Webos";if(bg(e))return"Safari";if((e.includes("chrome/")||xg(e))&&!e.includes("edge/"))return"Chrome";if(kg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ng(n=vt()){return/firefox\//i.test(n)}function bg(n=vt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xg(n=vt()){return/crios\//i.test(n)}function Og(n=vt()){return/iemobile/i.test(n)}function kg(n=vt()){return/android/i.test(n)}function Dg(n=vt()){return/blackberry/i.test(n)}function Vg(n=vt()){return/webos/i.test(n)}function A1(n=vt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tI(n=vt()){var e;return A1(n)&&!!((e=window.navigator)!=null&&e.standalone)}function nI(){return Mm()&&document.documentMode===10}function Lg(n=vt()){return A1(n)||kg(n)||Vg(n)||Dg(n)||/windows phone/i.test(n)||Og(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n,e=[]){let t;switch(n){case"Browser":t=b2(vt());break;case"Worker":t=`${b2(vt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(n,e={}){return kr(n,"GET","/v2/passwordPolicy",fs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=6;class oI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??iI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new x2(this),this.idTokenSubscription=new x2(this),this.beforeStateQueue=new rI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _c(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(pr(this));const t=e?Le(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sI(this),t=new oI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Do("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await eI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kn(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[kn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Lw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fi(n){return Le(n)}class x2{constructor(e){this.auth=e,this.observer=null,this.addObserver=Km(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cI(n){pu=n}function Fg(n){return pu.loadJS(n)}function uI(){return pu.recaptchaEnterpriseScript}function lI(){return pu.gapiScript}function hI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class dI{constructor(){this.enterprise=new fI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const pI="recaptcha-enterprise",Ug="NO_RECAPTCHA",O2="onFirebaseAuthREInstanceReady";class tr{constructor(e){this.type=pI,this.auth=fi(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{jw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ww(u);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;R2(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ug)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async a=>{if(!t&&R2(window.grecaptcha)&&tr.scriptInjectionDeferred)await tr.scriptInjectionDeferred.promise,s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=uI();u.length!==0&&(u+=a+`&onload=${O2}`),tr.scriptInjectionDeferred=new ei,window[O2]=()=>{var l;(l=tr.scriptInjectionDeferred)==null||l.resolve()},Fg(u).then(()=>{var l;return(l=tr.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}tr.scriptInjectionDeferred=null;async function k2(n,e,t,r=!1,s=!1){const i=new tr(n);let o;if(s)o=Ug;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function D2(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await k2(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await k2(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n,e){const t=Cc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(gr(i,e??{}))return s;an(s,"already-initialized")}return t.initialize({options:e})}function mI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(kn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _I(n,e,t){const r=fi(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Bg(e),{host:o,port:a}=yI(e),u=a===null?"":`:${a}`,l={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(gr(l,r.config.emulator)&&gr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ss(o)?jl(`${i}//${o}${u}`):EI()}function Bg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yI(n){const e=Bg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:V2(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:V2(o)}}}function V2(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function EI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,t){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function wI(n,e){return kr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(n,e){return fu(n,"POST","/v1/accounts:signInWithPassword",fs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(n,e){return fu(n,"POST","/v1/accounts:signInWithEmailLink",fs(n,e))}async function AI(n,e){return fu(n,"POST","/v1/accounts:signInWithEmailLink",fs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends v1{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ko(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ko(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return D2(e,t,"signInWithPassword",II);case"emailLink":return TI(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return D2(e,r,"signUpPassword",wI);case"emailLink":return AI(e,{idToken:t,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(n,e){return fu(n,"POST","/v1/accounts:signInWithIdp",fs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="http://localhost";class rs extends v1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):an("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Hs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Hs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hs(e,t)}buildRequest(){const e={requestUri:vI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ti(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RI(n){const e=Li(Mi(n)).link,t=e?Li(Mi(e)).deep_link_id:null,r=Li(Mi(n)).deep_link_id;return(r?Li(Mi(r)).link:null)||r||t||e||n}class C1{constructor(e){const t=Li(Mi(e)),r=t.apiKey??null,s=t.oobCode??null,i=CI(t.mode??null);se(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=RI(e);try{return new C1(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,t){return ko._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=C1.parseLink(t);return se(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends qg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Qo{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rr.credential(t,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Qo{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Qo{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ir.credential(t,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=L2(r);return new Js({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=L2(r);return new Js({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function L2(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends Hn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ec.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ec(e,t,r,s)}}function Hg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(n,i,e,r):i})}async function SI(n,e,t=!1){const r=await Oo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Js._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(n,e,t=!1){const{auth:r}=n;if(zt(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await Oo(n,Hg(r,s,e,n),t);se(i.idToken,r,"internal-error");const o=T1(i.idToken);se(o,r,"internal-error");const{sub:a}=o;return se(n.uid===a,r,"user-mismatch"),Js._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(n,e,t=!1){if(zt(n.app))return Promise.reject(pr(n));const r="signIn",s=await Hg(n,r,e),i=await Js._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function NI(n,e){return $g(fi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(n){const e=fi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dA(n,e,t){return zt(n.app)?Promise.reject(pr(n)):NI(Le(n),pi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bI(n),r})}function xI(n,e,t,r){return Le(n).onIdTokenChanged(e,t,r)}function OI(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function fA(n,e,t,r){return Le(n).onAuthStateChanged(e,t,r)}function pA(n){return Le(n).signOut()}const wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=1e3,DI=10;class Wg extends Gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);nI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},kI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wg.type="LOCAL";const VI=Wg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends Gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jg.type="SESSION";const zg=jg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new gu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,i)),u=await LI(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const l=R1("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===l)switch(E.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(E.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function FI(n){In().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function UI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function qI(){return Kg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="firebaseLocalStorageDb",HI=1,Ic="firebaseLocalStorage",Qg="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mu(n,e){return n.transaction([Ic],e?"readwrite":"readonly").objectStore(Ic)}function $I(){const n=indexedDB.deleteDatabase(Yg);return new Xo(n).toPromise()}function Xg(){const n=indexedDB.open(Yg,HI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ic,{keyPath:Qg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ic)?e(r):(r.close(),await $I(),e(await Xg()))})})}async function M2(n,e,t){const r=mu(n,!0).put({[Qg]:e,value:t});return new Xo(r).toPromise()}async function GI(n,e){const t=mu(n,!1).get(e),r=await new Xo(t).toPromise();return r===void 0?null:r.value}function F2(n,e){const t=mu(n,!0).delete(e);return new Xo(t).toPromise()}const WI=800,jI=3;class Jg{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Xg(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jI)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gu._getInstance(qI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await UI(),!this.activeServiceWorker)return;this.sender=new MI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await M2(e,wc,"1"),await F2(e,wc)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>M2(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>GI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>F2(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mu(s,!1).getAll();return new Xo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jg.type="LOCAL";const zI=Jg;new Yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(n,e){return e?kn(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1 extends v1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function YI(n){return $g(n.auth,new S1(n),n.bypassAuthState)}function QI(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),PI(t,new S1(n),n.bypassAuthState)}async function XI(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),SI(t,new S1(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YI;case"linkViaPopup":case"linkViaRedirect":return XI;case"reauthViaPopup":case"reauthViaRedirect":return QI;default:an(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new Yo(2e3,1e4);class ks extends Zg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=R1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JI.get())};e()}}ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="pendingRedirect",Ma=new Map;class eT extends Zg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await tT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tT(n,e){const t=sT(e),r=rT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function nT(n,e){Ma.set(n._key(),e)}function rT(n){return kn(n._redirectPersistence)}function sT(n){return La(ZI,n.config.apiKey,n.name)}async function iT(n,e,t=!1){if(zt(n.app))return Promise.reject(pr(n));const r=fi(n),s=KI(r,e),o=await new eT(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=600*1e3;class aT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!em(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(wn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oT&&this.cachedEventUids.clear(),this.cachedEventUids.has(U2(e))}saveEventToCache(e){this.cachedEventUids.add(U2(e)),this.lastProcessedEventTime=Date.now()}}function U2(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function em({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return em(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(n,e={}){return kr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hT=/^https?/;async function dT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uT(n);for(const t of e)try{if(fT(t))return}catch{}an(n,"unauthorized-domain")}function fT(n){const e=ql(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!hT.test(t))return!1;if(lT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=new Yo(3e4,6e4);function B2(){const n=In().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function gT(n){return new Promise((e,t)=>{var s,i,o;function r(){B2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{B2(),t(wn(n,"network-request-failed"))},timeout:pT.get()})}if((i=(s=In().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=In().gapi)!=null&&o.load)r();else{const a=hI("iframefcb");return In()[a]=()=>{gapi.load?r():t(wn(n,"network-request-failed"))},Fg(`${lI()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function mT(n){return Fa=Fa||gT(n),Fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new Yo(5e3,15e3),yT="__/auth/iframe",ET="emulator/auth/iframe",wT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TT(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?I1(e,ET):`https://${n.config.authDomain}/${yT}`,r={apiKey:e.apiKey,appName:n.name,v:is},s=IT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ti(r).slice(1)}`}async function AT(n){const e=await mT(n),t=In().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:TT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wn(n,"network-request-failed"),a=In().setTimeout(()=>{i(o)},_T.get());function u(){In().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CT=500,RT=600,ST="_blank",PT="http://localhost";class q2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NT(n,e,t,r=CT,s=RT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...vT,width:r.toString(),height:s.toString(),top:i,left:o},l=vt().toLowerCase();t&&(a=xg(l)?ST:t),Ng(l)&&(e=e||PT,u.scrollbars="yes");const h=Object.entries(u).reduce((E,[v,S])=>`${E}${v}=${S},`,"");if(tI(l)&&a!=="_self")return bT(e||"",a),new q2(null);const g=window.open(e||"",a,h);se(g,n,"popup-blocked");try{g.focus()}catch{}return new q2(g)}function bT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="__/auth/handler",OT="emulator/auth/handler",kT=encodeURIComponent("fac");async function H2(n,e,t,r,s,i){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:is,eventId:s};if(e instanceof qg){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",rl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,g]of Object.entries({}))o[h]=g}if(e instanceof Qo){const h=e.getScopes().filter(g=>g!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await n._getAppCheckToken(),l=u?`#${kT}=${encodeURIComponent(u)}`:"";return`${DT(n)}?${ti(a).slice(1)}${l}`}function DT({config:n}){return n.emulator?I1(n,OT):`https://${n.authDomain}/${xT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="webStorageSupport";class VT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zg,this._completeRedirectFn=iT,this._overrideRedirectResult=nT}async _openPopup(e,t,r,s){var o;qn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await H2(e,t,r,ql(),s);return NT(e,i,R1())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await H2(e,t,r,ql(),s);return FI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await AT(e),r=new aT(e);return t.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nl,{type:nl},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[nl];i!==void 0&&t(!!i),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lg()||bg()||A1()}}const LT=VT;var $2="@firebase/auth",G2="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UT(n){Qr(new mr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mg(n)},l=new aI(r,s,i,u);return mI(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new mr("auth-internal",e=>{const t=fi(e.getProvider("auth").getImmediate());return(r=>new MT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn($2,G2,FT(n)),mn($2,G2,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=300,qT=ep("authIdTokenMaxAge")||BT;let W2=null;const HT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>qT)return;const s=t==null?void 0:t.token;W2!==s&&(W2=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gA(n=Kl()){const e=Cc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gI(n,{popupRedirectResolver:LT,persistence:[zI,VI,zg]}),r=ep("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=HT(i.toString());OI(t,o,()=>o(t.currentUser)),xI(t,a=>o(a))}}const s=X2("auth");return s&&_I(t,`http://${s}`),t}function $T(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}cI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=wn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",$T().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UT("Browser");export{g4 as B,XT as a,uA as b,YT as c,nA as d,m3 as e,oA as f,gA as g,iA as h,Q7 as i,tA as j,rA as k,fA as l,pA as m,dA as n,eA as o,Aw as p,JT as q,aA as r,QT as s,hA as t,sA as u,cA as v,ZT as w,lA as x};

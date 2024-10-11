"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[62402],{442279:(e,t)=>{function i(e,t){return e===t}t.P1=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var s=0,o=r.pop(),l=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e}))throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t.map(function(e){return typeof e}).join(", ")+"]");return t}(r),a=e.apply(void 0,[function(){return s++,o.apply(void 0,arguments)}].concat(i)),d=function(e,t){for(var i=arguments.length,r=Array(i>2?i-2:0),n=2;n<i;n++)r[n-2]=arguments[n];var s=l.map(function(i){return i.apply(void 0,[e,t].concat(r))});return a.apply(void 0,function(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}(s))};return d.resultFunc=o,d.recomputations=function(){return s},d.resetRecomputations=function(){return s=0},d}}(function(e){var t=arguments.length<=1||void 0===arguments[1]?i:arguments[1],r=null,n=null;return function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];return null!==r&&r.length===s.length&&s.every(function(e,i){return t(e,r[i])})||(n=e.apply(void 0,s)),r=s,n}})},853771:(e,t,i)=>{/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=i(667294),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useSyncExternalStore,o=r.useRef,l=r.useEffect,a=r.useMemo,d=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,i,r,c){var u=o(null);if(null===u.current){var p={hasValue:!1,value:null};u.current=p}else p=u.current;var h=s(e,(u=a(function(){function e(e){if(!l){if(l=!0,s=e,e=r(e),void 0!==c&&p.hasValue){var t=p.value;if(c(t,e))return o=t}return o=e}if(t=o,n(s,e))return t;var i=r(e);return void 0!==c&&c(t,i)?t:(s=e,o=i)}var s,o,l=!1,a=void 0===i?null:i;return[function(){return e(t())},null===a?void 0:function(){return e(a())}]},[t,i,r,c]))[0],u[1]);return l(function(){p.hasValue=!0,p.value=h},[h]),d(h),h}},331103:(e,t,i)=>{e.exports=i(853771)},901855:(e,t,i)=>{i.d(t,{Hv:()=>a,aX:()=>u,nK:()=>p});var r=i(667294),n=i(616550),s=i(342513),o=i(785893);let{Provider:l,useHook:a}=(0,s.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),d=e=>e&&e.pathname?e.pathname+(e.search||""):"";function c(e,t){let i={action:t.type,location:t.location,match:t.match};if(t.location===e.current?.location)return e;switch(t.type){case"POP":if(e.forward.length>0&&d(e.forward[0].location)===d(i.location))return{...e,forward:e.forward.slice(1),current:{...e.forward[0],action:t.type},previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};return{...e,forward:e.current?[{action:e.current.action,location:e.current.location,match:e.current.match},...e.forward]:e.forward,current:{...e.previous.slice(-1)[0],action:t.type},previous:e.previous.slice(0,-1)};case"PUSH":return{...e,forward:e.forward.length>0?[]:e.forward,current:i,previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};case"REPLACE":return{...e,current:i};default:return e}}function u(){let{current:e,previous:t}=a();return(0,r.useMemo)(()=>e?t.concat(e):t,[e,t])}function p({children:e}){let t=(0,n.k6)(),i=(0,n.TH)(),s=(0,n.$B)(),a={forward:[],current:{action:t.action,location:i,match:s},previous:[]},[d,u]=(0,r.useReducer)(c,a);return(0,r.useEffect)(()=>{let{action:e}=t;u({type:e,location:i,match:s})},[i]),(0,o.jsx)(l,{value:d,children:e})}},35908:(e,t,i)=>{i.d(t,{Z:()=>o});let r=`
  <div
    class="Y1l- MIasw Hbd7 ad657"
    data-grid-item="true"
    aria-hidden="false"
    role="contentinfo"
    title="ad657"
    aria-label="ad657"
    style="top: 0px; left: 0px; transform: translateX(765px) translateY(330px); width: 236px; height: 454px; background: repeating-linear-gradient(rgb(230, 115, 112) 0px, rgb(230, 115, 112) 9px, rgb(255, 255, 255) 9px, rgb(255, 255, 255) 10px); outline: rgb(255, 0, 0) solid;"
  >
    <div class="zdI7 izyn Hsdu">
      <div
        class="zdI7 izyn Hsdu"
        data-test-id="pin"
        data-test-pin-id="AaotmqT8C48ZQT-Pqb9GnBfCpEo0xZNeybVMIeuKlYSnj7ossqweasdfjGoV8ufWyLT1iRAP9SB_rJu9fZM"
      >
        <div class="zdI7 izyn Hsdu" data-test-id="pinRepPresentation2" style="height: 100%;">
          <div
            class="Jea XiG jzS sLG zdI7 izyn Hsdu"
            data-test-id="pinWrapper2"
            style="border-radius: 16px; mask-image: -webkit-radial-gradient(center, white, black); height: 100%;"
          >
            <div aria-hidden="false" class="zdI7 izyn Hsdu">
              <div
                class="XiG sLG zdI7 izyn Hsdu"
                style="border-radius: 16px; mask-image: -webkit-radial-gradient(center, white, black);"
              >
                <div class="zdI7 izyn Hsdu" style="height: 100%;">
                  <div class="zdI7 izyn Hsdu" data-test-id="otpp2">
                    <div class="zdI7 izyn Hsdu" data-test-id="one-tap-desktop2">
                      <a
                        aria-label="build.com"
                        href="https://www.build.com/hansgrohe/c1092919?utm_source=pinterest&utm_medium=psa&utm_campaign=0_bld_nati3onal_convert_grow_3707_hansgrohe_product_psa_2024vmfhansgrohe_plumbing&utm_content=j1uly2024promotedpins3"
                        rel="nofollow"
                        style="color: inherit; text-decoration: none; outline: none; cursor: pointer; display: block;"
                      >
                        <div class="Pj7 sLG XiG eEj m1e">
                          <div class="zdI7 izyn Hsdu" data-test-id="pinrep-image2" style="min-height: 55px;">
                            <div class="KS5 hs0 un8 C9i TB_" style="min-height: 120px;">
                              <div class="ujU zdI7 izyn Hsdu">
                                <div class="">
                                  <div class="zdI7 izyn Hsdu" data-test-id="non-story-pin-image2">
                                    <div
                                      class="XiG zdI7 izyn Hsdu"
                                      style="background-color: rgb(191, 187, 184); padding-bottom: 150%;"
                                    >
                                      <img
                                        alt="Indulge in true relaxation with the Pulsify E Bath Collection, which offers sleek modern style lines, chic finishes and technologies that will transform any bathroom into a spa experience."
                                        class="hCL kVc L4E MIw"
                                        src="https://i.pinimg.com/236x/bc/7c/9d/bc7c9d8feea9c1f317309fbe61c8b904.jpg"
                                        srcset="https://i.pinimg.com/236x/bc/7c/9d/bc7c9d8feea9c1f317309fbe61c8b904.jpg 1x, https://i.pinimg.com/474x/bc/7c/9d/bc7c9d8feea9c1f317309fbe61c8b904.jpg 2x, https://i.pinimg.com/736x/bc/7c/9d/bc7c9d8feea9c1f317309fbe61c8b904.jpg 3x, https://i.pinimg.com/originals/bc/7c/9d/bc7c9d8feea9c1f317309fbe61c8b904.png 4x"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="KPc MIw ojN Rym p6V QLY"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="zdI7 izyn Hsdu" style="opacity: 1;">
              <div
                class="MIw QLY Rym ojN p6V zdI7 izyn Hsdu"
                data-test-id="contentLayer2"
                style="pointer-events: none;"
              >
                <div class="JME VxL hjj wc1 zdI7 izyn Hsdu"></div>
              </div>
            </div>
            <div class="zdI7 izyn Hsdu" style="opacity: 1;">
              <div
                class="MIw QLY Rym ojN p6V zdI7 izyn Hsdu"
                data-test-id="contentLayer2"
                style="pointer-events: none;"
              >
                <div class="JME MIw Rym fma ojN zdI7 izyn Hsdu"></div>
              </div>
            </div>
            <div class="hs0 ujU un8 C9i TB_">
              <div
                class="zdI7 izyn Hsdu"
                data-test-id="pointer-events-wrapper2"
                style="pointer-events: auto; width: 100%;"
              >
                <div
                  class="zdI7 izyn Hsdu"
                  data-test-id="pinrep-footer2"
                  style="padding: 8px 6px 16px;"
                >
                  <div class="hs0 un8 C9i TB_">
                    <div class="jzS ujU un8 C9i TB_">
                      <div class="KS5 hs0 un8 C9i TB_">
                        <div class="X6t zdI7 izyn Hsdu">
                          <div
                            class="tBJ dyH iFc j1A X8m zDA IZT H2s CKL"
                            style="WebkitLineClamp: 3;"
                          >
                            <div class="zdI7 izyn Hsdu" data-test-id="otpp2">
                              <div class="zdI7 izyn Hsdu" data-test-id="one-tap-desktop2">
                                <a
                                  aria-label="build.com"
                                  href="https://www.build.com/hansgrohe/c109299?utm_source=pinterest&utm_medium=psa&utm_campaign=0_bld_national_convert_grow_3707_hansgrohe_product_psa_2024vmfhansgrohe_plumbing&utm_content=july2024promotedpins3"
                                  rel="nofollow"
                                  style="color: inherit; text-decoration: none; outline: none; cursor: pointer; display: block;"
                                >
                                  Pamper Yourself with the Pulsify E Collection
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="KS5 hs0 un8 C9i TB_">
                        <div class="ujU zdI7 izyn Hsdu">
                          <a
                            aria-label="Promoted by"
                            class="Wk9 xQ4 CCY S9z eEj kVc Tbt L4E e8F BG7"
                            href="/build/"
                            rel=""
                            tabindex="0"
                          >
                            <div
                              class="Jea KS5 zdI7 izyn Hsdu"
                              style="margin-left: -3px; margin-right: -3px;"
                            >
                              <div
                                class="a3i mQ8 sLG ujU zdI7 izyn Hsdu"
                                style="margin-left: 3px; margin-right: 3px;"
                              >
                                <div class="tBJ dyH iFc j1A X8m zDA IZT swG">
                                  Build with Ferguson
                                </div>
                                <div class="zdI7 izyn Hsdu" style="margin-bottom: 2px;">
                                  <div class="hs0 un8 P29 TB_">
                                    <div class="xuA">
                                      <div class="hDW zdI7 izyn Hsdu">
                                        <div class="zdI7 izyn Hsdu">
                                          <div
                                            class="tBJ dyH iFc j1A JlN zDA IZT swG CKL"
                                            style="WebkitLineClamp: 1;"
                                            title="Sponsored"
                                          >
                                            Sponsored
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="Jea QLY jzS p6V zdI7 izyn Hsdu">
                      <div class="zdI7 izyn Hsdu" data-test-id="feedback-button2">
                        <button
                          aria-label="More information"
                          class="HEm adn yQo lnZ wsz"
                          tabindex="0"
                          type="button"
                        >
                          <div class="rYa kVc adn yQo S9z qrs BG7">
                            <div
                              class="x8f INd _O1 KS5 mQ8 OGJ"
                              style="height: 32px; width: 32px;"
                            >
                              <svg
                                aria-hidden="true"
                                aria-label=""
                                class="Uvi gUZ U9O kVc"
                                height="16"
                                role="img"
                                viewBox="0 0 24 24"
                                width="16"
                              >
                                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m18 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"></path>
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zdI7 izyn Hsdu" style="height: 100%;"></div>
      </div>
    </div>
  </div>
`,n=e=>0===e.offsetHeight||!document.body.contains(e)||"none"===e.style.display||"hidden"===e.style.visibility,s=()=>{let e=document.createElement("div");return e.style.height="10px",e.style.position="absolute",e.style.zIndex="-9999",e.style.top="-10000px",e.style.left="-10000px",e.style.pointerEvents="none",e.innerHTML=r,document.body.appendChild(e),e},o=e=>{if("undefined"!=typeof Cypress){e(!1);return}let t=s(),i=0,r=!1,o=setInterval(()=>{i+=1,((r=n(t))||4===i)&&(clearInterval(o),t.parentNode&&t.parentNode.removeChild(t),e(r))},51)}},259866:(e,t,i)=>{i.d(t,{Z:()=>r});function r(e){return function e(t,i){let r;if(null==t||"object"!=typeof t&&"function"!=typeof t)return t;let n=i.find(e=>e.value===t);if(n)return n.result;let s=Object.prototype.toString.call(t);switch(s){case"[object Array]":r=Array(t.length);break;case"[object Set]":r=new Set;break;case"[object Object]":case"[object Arguments]":r={};break;case"[object Map]":r=new Map;break;default:return t}let o=[...i,{value:t,result:r}];switch(s){case"[object Array]":t.forEach((t,i)=>{r[i]=e(t,o)});break;case"[object Set]":t.forEach(t=>{r.add(e(t,o))});break;case"[object Object]":case"[object Arguments]":Object.entries(t).forEach(([t,i])=>{r[t]=e(i,o)});break;case"[object Map]":t.forEach((t,i)=>{r.set(i,e(t,o))})}return r}(e,[])}},401429:(e,t,i)=>{i.d(t,{Z:()=>v});var r=i(667294),n=i(545007),s=i(587703),o=i(25919),l=i(216167);let a=(e,t,i,r)=>(n,s)=>a=>{if(n&&n.id){let d=l.Z.create(e,{placed_experience_id:n.id,extra_context:{}});switch(t){case"dismissed":d.callDelete().then(()=>{a((0,o.fO)()),i&&r&&i({event_type:r,object_id_str:n.id.toString()})});break;case"completed":d.callUpdate().then(()=>{s||a((0,o.fO)()),i&&r&&i({event_type:r,object_id_str:n.id.toString()})});break;case"viewed":d.callUpdate().then(()=>{i&&r&&i({event_type:r,object_id_str:n.id.toString()})})}}},d=e=>a("UserExperienceCompletedResource","completed",e,6567),c=a("UserExperienceResource","dismissed"),u=e=>a("UserExperienceViewedResource","viewed",e,4503);var p=i(785893);function h(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class m extends r.Component{constructor(...e){super(...e),h(this,"state",{hasCompleted:[],hasDismissed:[]}),h(this,"view",()=>{let{experience:e,isBackendExperience:t,targeting:i,viewExperience:r,viewExperienceObject:n}=this.props;e&&"viewed"!==e.status&&(t?(e.status="viewed",n(e)):i?r(e.placement_id,e.experience_id,i):r(e.placement_id,e.experience_id))}),h(this,"complete",e=>{let{completeExperience:t,completeExperienceObject:i,experience:r,isBackendExperience:n,preventRemoval:s,targeting:o}=this.props,l=e||1;if(r&&!this.state.hasCompleted.includes(r.experience_id)){let{placement_id:e,experience_id:a}=r||{},d=s||2===l;(1===l||d)&&e&&a&&(n?i(r,d):o?t(e,a,d,o):t(e,a,d),this.setState(e=>({hasCompleted:[...e.hasCompleted,a]})))}}),h(this,"dismiss",()=>{let{dismissExperience:e,dismissExperienceObject:t,experience:i,isBackendExperience:r,preventRemoval:n,targeting:s}=this.props,{placement_id:o,experience_id:l}=i||{};i&&!this.state.hasDismissed.includes(l)&&(r?t(i):s?e(o,l,!!n,s):e(o,l,!!n),this.setState(e=>({hasDismissed:[...e.hasDismissed,l]})))}),h(this,"isEligibleExperience",()=>{let{experience:e}=this.props;if(!e)return!1;let{eligibleIds:t,eligibleTypes:i,predicate:r}=this.props,{experience_id:n,type:s}=e;return t&&t.length?t.includes(n):i&&i.length?i.includes(s):!r||r(e)})}componentDidMount(){if(this.props.disableAutoView)return;let{experience:e}=this.props;e&&this.isEligibleExperience()&&this.view()}componentDidUpdate(e){if(this.props.disableAutoView)return;let t=e.experience,i=this.props.experience;i&&this.isEligibleExperience()&&(t&&t.experience_id===i.experience_id||this.view())}render(){let{children:e,experience:t,disableAutoView:i}=this.props;return t&&this.isEligibleExperience()?"function"==typeof e?e({experience:t,complete:this.complete,dismiss:this.dismiss,...i?{view:this.view}:Object.freeze({})}):r.Children.only(e):null}}function v(e){let t=(0,n.v9)(({experiences:t})=>e.experience||(e.placementId?t[e.placementId]:void 0)),i=(0,n.I0)(),r=(0,o.be)(),l=(0,o.Am)(),a=(0,o.Ig)(),h=(0,s.Z)();return(0,p.jsx)(m,{...e,completeExperience:(e,t,n,s)=>i(r(e,t,n,!1,{},s)),completeExperienceObject:(e,t)=>i(d(h)(e,t)),dismissExperience:(e,t,r,n)=>i(l(e,t,r,void 0,n)),dismissExperienceObject:e=>i(c(e)),experience:t,viewExperience:(e,t,r)=>i(a(e,t,!1,!1,void 0,r)),viewExperienceObject:e=>i(u(h)(e))})}h(m,"defaultProps",{eligibleIds:[],eligibleTypes:[]})},619370:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var r=i(667294),n=i(883119),s=i(401429),o=i(785893);function l(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class a extends r.PureComponent{constructor(...e){super(...e),l(this,"onScroll",()=>{let{dismiss:e}=this.props;this.dismissed||this.timer||(this.timer=setTimeout(()=>{e(),this.dismissed=!0,this.timer=void 0},3e3))}),l(this,"dismissed",!1)}componentDidMount(){window.addEventListener("scroll",this.onScroll)}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}render(){let{anchor:e,text:t,thumbnails:i,idealDirection:r}=this.props,s=i.slice(-3);return(0,o.jsx)(n.J2,{anchor:e,color:"white",idealDirection:r,onDismiss:this.onScroll,shouldFocus:!1,size:"md",children:(0,o.jsxs)(n.xu,{alignContent:"center",display:"flex",justifyContent:"between",padding:3,width:"100%",children:[(0,o.jsx)(n.xu,{alignItems:"center",display:"flex",flex:"grow",justifyContent:"center",marginStart:-3,paddingX:3,children:(0,o.jsx)(n.xv,{color:"default",weight:"bold",children:t})}),(0,o.jsx)(n.xu,{display:"flex",marginEnd:-2,paddingX:2,children:s.map(e=>(0,o.jsx)(n.xu,{height:60,paddingX:1,width:50,children:(0,o.jsx)(n.zd,{height:60,rounding:2,children:(0,o.jsx)(n.Ee,{alt:"More Ideas Thumbnail",color:"rgb(86, 152, 239)",fit:"cover",naturalHeight:60,naturalWidth:60,src:e})})},e))})]})})}}var d=i(76561);function c(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class u extends r.Component{constructor(...e){super(...e),c(this,"dismissRef",(0,r.createRef)()),c(this,"state",{paused:!1}),c(this,"dismissCb",()=>{this.dismissRef.current?.()}),c(this,"handlePulsarClick",(e,t)=>{e?this.setState({paused:!0}):t()})}componentWillUnmount(){let{anchor:e}=this.props;this.timer&&clearTimeout(this.timer),e?.removeEventListener("click",this.dismissCb)}setDefaultPulsarTooltip(e){e.has_pulsar=null==e.has_pulsar||e.has_pulsar,e.has_tooltip=null==e.has_tooltip||e.has_tooltip}getText(e,t,i){return(t&&e.text.replace("{boardName}",t),i)?i(e):e.text}render(){let{anchor:e,customWrapper:t,experienceIds:i,boardTextOverride:l,fontSize:c,hasFullWidthButton:u=!0,idealDirection:p,useMasonryFlyout:h,noClickToDismiss:m,onClickComplete:v,onClickDismiss:f,placementId:y,shouldTimeoutDismiss:x,textAlign:b,textOverflow:g,textOverrideFn:_,textWeight:w,customizedComplete:j,pulsarZIndex:z,advertiserId:k,dismissButtonLocation:E,dismissButtonMarginTop:S}=this.props,C=t||(({children:e})=>h?(0,o.jsx)(n.mh,{children:e}):e);return(0,o.jsx)(s.Z,{eligibleIds:i,eligibleTypes:[8],placementId:y,targeting:k?{advertiserId:parseInt(k,10)}:null,children:({complete:t,dismiss:i,experience:s})=>{let{display_data:{scroll_to_dismiss:h,scroll_to_dismiss_delay_in_seconds:y=0,...k}}=s,I=h&&e,Z=()=>{H(),this.timer||(this.timer=setTimeout(i,1e3*y))},H=()=>{I&&(window.removeEventListener("scroll",Z),window.removeEventListener("touchmove",Z))},P=()=>{H(),t()};if(I&&(window.addEventListener("scroll",Z),window.addEventListener("touchmove",Z)),this.setDefaultPulsarTooltip(k),!k.has_pulsar&&!k.has_tooltip)return P(),null;x&&k.disappearTime&&k.disappearTime>0&&(this.timer=setTimeout(()=>(Z(),null),k.disappearTime));let T=501041===s.experience_id||505086===s.experience_id;return k.has_tooltip&&!k.has_pulsar&&(this.dismissRef.current=Z,e?.addEventListener("click",this.dismissCb)),(0,o.jsxs)(r.Fragment,{children:[k.has_pulsar&&(0,o.jsx)(d.Z,{anchor:e,leftOverride:T?342:void 0,onTouch:()=>this.handlePulsarClick(k.has_tooltip,P),paused:this.state.paused,topOverride:T?-5:void 0,zIndex:z&&z.index()}),k.has_tooltip&&(!k.has_pulsar||this.state.paused)&&(k.thumbnail_urls?(0,o.jsx)(a,{anchor:e,dismiss:Z,idealDirection:p||"down",text:k.text,thumbnails:k.thumbnail_urls}):(0,o.jsx)(C,{children:(0,o.jsx)(n.Li,{anchor:e,idealDirection:p||"down",onDismiss:m?()=>{}:Z,shouldFocus:!1,size:"sm",children:(0,o.jsxs)(n.xu,{column:12,padding:3,children:[(0,o.jsxs)(n.xv,{align:"right"===b?"end":b,color:"light",overflow:g,size:c,weight:w||"bold",children:[this.getText(k,l,_),k.secondary_cta_link&&(0,o.jsx)(n.xu,{display:"inlineBlock",marginStart:1,children:(0,o.jsx)(n.xv,{color:"light",size:c,weight:"bold",children:(0,o.jsx)(n.rU,{display:"inlineBlock",href:k.secondary_cta_link.url,target:"blank",underline:"hover",children:k.secondary_cta_link.text})})})]}),k.sub_text&&(0,o.jsx)(n.xu,{paddingY:2,children:(0,o.jsx)(n.xv,{color:"light",size:c,children:k.sub_text})}),(k.dismiss_button_text||k.complete_button_text)&&(0,o.jsxs)(n.xu,{alignItems:"center",display:"flex",justifyContent:E||"start",marginTop:S||2,children:[k.dismiss_button_text&&(0,o.jsx)(n.xu,{column:6,marginEnd:1,children:(0,o.jsx)(n.zx,{color:"white",fullWidth:u,onClick:()=>{f&&f(),Z()},size:"md",text:k.dismiss_button_text})}),k.complete_button_text&&(0,o.jsx)(n.xu,{column:k.dismiss_button_text?6:12,children:j?(0,o.jsx)(n.iP,{fullHeight:!0,onTap:()=>{P(),v&&v()},rounding:2,children:(0,o.jsx)(n.xu,{color:"default",dangerouslySetInlineStyle:{__style:{padding:"10px"}},display:"flex",justifyContent:"center",padding:2,rounding:2,children:(0,o.jsx)(n.xv,{color:"light",weight:"bold",children:k.complete_button_text})})}):(0,o.jsxs)(n.kC,{justifyContent:"center",children:[k.complete_button_cta_url&&(0,o.jsx)(n.ZP,{color:"white",fullWidth:u,href:k.complete_button_cta_url,onClick:({event:e})=>{e.preventDefault(),e.stopPropagation(),P(),v&&v()},size:"md",target:k.complete_button_cta_url?"blank":null,text:k.complete_button_text}),!k.complete_button_cta_url&&(0,o.jsx)(n.zx,{color:"white",fullWidth:u,onClick:()=>{P(),v&&v()},size:"md",text:k.complete_button_text})]})})]})]})})}))]})}})}}c(u,"defaultProps",{fontSize:"300",positionRelativeToAnchor:!0})},25919:(e,t,i)=>{let r;i.d(t,{Am:()=>y,Ig:()=>v,N:()=>_,Sd:()=>x,YX:()=>g,be:()=>f,fO:()=>p,kd:()=>b,pz:()=>h});var n=i(667294),s=i(216167),o=i(587703),l=i(703404),a=i(957753),d=i(372085),c=i(953565);let u=(e,t,i={})=>(0,c.nP)(`${e}.${t}`,{sampleRate:1,tags:i}),p=(e,t)=>i=>s.Z.create("UserExperiencePlatformResource",t?{extra_context:e,targeting:t}:{extra_context:e}).callGet().then(e=>e.resource_response?i((0,a.OD)(e.resource_response.data)):void 0),h=(e,t,i,n)=>(o,d)=>{if(t)return Promise.resolve();if(n&&(r=n),1===e.length){let t=e[0],r=d().experiences[t];if(JSON.stringify(r?.extraContext||null)===JSON.stringify(i)||(0,l.E3)(r)&&!(i&&Object.keys(i).length>0))return Promise.resolve()}return s.Z.create("UserExperienceResource",{placement_ids:e,extra_context:i||null,targeting:n}).callGet().then(e=>e.resource_response?o((0,a.cL)(e.resource_response.data)):void 0)},m=(e,t,i,n)=>(o,l,d,c=!1,u,h)=>(m,v)=>{let{experiences:f,experiencesMulti:y}=v(),x=null,b=!0;if(c||(x=(b=!!f[o]&&f[o].experience_id===l)?f[o]:Array.isArray(y[o])&&y[o]?.find(e=>e.experience_id===l)),x&&x.experience_id===l||c&&o&&l){let c=s.Z.create(e,{placed_experience_id:`${o}%3A${l}`,extra_context:u??{},targeting:h}),v=b?a.Yb:a.xW;switch(t){case"dismissed":return c.callDelete().then(()=>{m(v(o,l,t)),m(p(void 0,r)),i&&n&&i({event_type:n,object_id_str:l.toString()})});case"completed":return c.callUpdate().then(()=>{!d&&(m(v(o,l,t)),m(p(void 0,r)),i&&n&&i({event_type:n,object_id_str:l.toString()}))});case"viewed":return m(v(o,l,t)),c.callUpdate().then(()=>{1000162===o&&m(p()),i&&n&&i({event_type:n,object_id_str:l.toString()})});case"completedWithoutHomefeed":return c.callUpdate().then(()=>{d||m(v(o,l,t)),i&&n&&i({event_type:n,object_id_str:l.toString()})})}}return Promise.resolve()},v=()=>{let e=(0,o.Z)();return(0,n.useCallback)(m("UserExperienceViewedResource","viewed",e,4503),[e])},f=()=>{let e=(0,o.Z)();return(0,n.useCallback)(m("UserExperienceCompletedResource","completed",e,6567),[e])},y=()=>{let e=(0,o.Z)();return(0,n.useCallback)(m("UserExperienceResource","dismissed",e,6568),[e])},x=()=>{let e=(0,o.Z)();return(0,n.useCallback)(m("UserExperienceCompletedResource","completedWithoutHomefeed",e,6567),[e])},b=(e,t)=>(i,r)=>{let{experiences:n}=r(),s=n[e];s&&s.triggerable_placed_exps&&s.triggerable_placed_exps.length&&s.triggerable_placed_exps.forEach(i=>{let[,r]=i.split(":"),n=t;s.metadata&&s.metadata[r]&&(n={...t,...s.metadata[r]}),(0,d.Z)({url:`/v3/experiences/${i.replace(":","%3A")}/trigger/`,method:"PUT",data:n?{extra_context:JSON.stringify(n,null,1)}:{}}).then(()=>{u("experienceservice","experimentTriggerCall.1",{placement_id:e,experience_id:r})})})},g=e=>(t,i)=>{t(b(e));let{experiences:r}=i();return r[e]},_=(e,t,i)=>n=>{i&&(r=i),n(b(e,t)),t&&Object.keys(t).length>0&&n(h([e],!1,t,i))}},703404:(e,t,i)=>{i.d(t,{A0:()=>a,E3:()=>o,MQ:()=>l,fL:()=>d});var r=i(883119),n=i(862249),s=i(785893);function o(e){return!!e&&0!==e.type}let l=(e,t,i)=>{let r=e[i];return t[i]&&o(r)?r:null};function a(e){return e.display_data?.anchor}let d=e=>{let t=new DOMParser().parseFromString(e,"text/html"),i=[...t.body?.childNodes||[]].map(e=>{if("A"!==e.nodeName)return(0,s.jsx)(r.xv,{inline:!0,children:e.textContent});{let t=e.href||"",i=(0,n.Z)({url:t});return(0,s.jsx)(r.rU,{display:"inline",externalLinkIcon:i?"default":"none",href:t,rel:i?"nofollow":"none",target:"blank",children:e.textContent})}});return(0,s.jsx)(r.xv,{inline:!0,children:i})}},957753:(e,t,i)=>{i.d(t,{NW:()=>l,OD:()=>d,Yb:()=>a,cL:()=>c,xW:()=>o});var r=i(216167),n=i(26616);let s=e=>({type:n.$S,payload:{experiencesMulti:e}}),o=(e,t,i)=>({type:n.V$,payload:{placementId:e,experienceId:t,status:i}}),l=e=>t=>r.Z.create("UserExperiencePlatformResource",{extra_context:e,multiExperiencePlatform:!0}).callGet().then(e=>e.resource_response?t(s(e.resource_response.data)):void 0),a=(e,t,i)=>({type:n.iY,payload:{placementId:e,experienceId:t,status:i}}),d=e=>({type:n._4,payload:{experiences:e}}),c=e=>({type:n.mR,payload:{experiences:e}})},76561:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(883119),n=i(667294),s=i(785893);let o=(e,t,i,r)=>({horizontalOffset:-(r/2-t/2),verticalOffset:-(i/2-e/2)});function l({anchor:e,children:t,zIndex:i,leftOverride:l,topOverride:a}){let d=(0,n.useRef)(null),[c,u]=(0,n.useState)(0),[p,h]=(0,n.useState)(0),{height:m,width:v}=e.getBoundingClientRect();return(0,n.useEffect)(()=>{let{current:t}=d;if(e&&t){let{height:e,width:i}=t.getBoundingClientRect(),{horizontalOffset:r,verticalOffset:n}=o(m,v,e,i);u(r),h(n)}}),(0,s.jsx)(r.xu,{ref:d,dangerouslySetInlineStyle:{__style:{left:l||c,top:a||p}},"data-test-id":"center-box",position:"absolute",zIndex:i?new r.Ry(i):void 0,children:t})}let a=function(e){let{anchor:t,leftOverride:i,onTouch:n,onMouseEnter:o,paused:a,size:d,topOverride:c,zIndex:u}=e;return t?(0,s.jsx)(l,{anchor:t,leftOverride:i,topOverride:c,zIndex:u,children:(0,s.jsx)(r.iP,{fullWidth:!1,onMouseEnter:o,onTap:({event:e})=>n(e),rounding:"circle",children:(0,s.jsx)(r.o3,{paused:a,size:d})})}):null}},839391:(e,t,i)=>{i.d(t,{L:()=>r,Z:()=>s});let{Provider:r,useHook:n}=(0,i(342513).Z)("ExperienceContext"),s=n},172203:(e,t,i)=>{i.d(t,{Z:()=>p});var r=i(667294),n=i(545007),s=i(442279),o=i(839391),l=i(5859),a=i(953565);let d=(0,s.P1)(e=>e.experiences,(e,t)=>t,(e,t)=>e[t]),c=(e,t,i={})=>(0,a.nP)(`${e}.${t}`,{sampleRate:1,tags:i}),u=(e,t)=>"function"==typeof t?t(e):t,p=(e,t={},i=!1)=>{let[s,a]=(0,r.useReducer)(u,t),{isBot:p}=(0,l.B)(),{fetchExperienceForPlacements:h,mountPlacement:m,triggerExperimentsForPlacement:v,unmountPlacement:f}=(0,o.Z)();(0,r.useDebugValue)(`Placement Hook ID - ${e}`),(0,r.useEffect)(()=>{let t={...s},r=i&&t?.advertiser_id?{advertiserId:t.advertiser_id}:void 0;return m(e,t,r),()=>{f(e)}},[]),(0,r.useEffect)(()=>{Object.keys(s).length>0&&h([e],p,s)},[s]);let y=(0,n.v9)(t=>d(t,e)),x=(0,n.v9)(t=>t.experiencesMulti[e]),b=y?y.triggerable_placed_exps:[];return(0,r.useEffect)(()=>{c("experienceservice","placementHookExperimentTrigger.1",{platform:"web",placement_id:e,...b}),v(e,s)},[JSON.stringify(b)]),{experience:y,experiencesMulti:x,setExtraContext:a}}},454514:(e,t,i)=>{i.d(t,{UZ:()=>d,Vg:()=>a,ZP:()=>c});var r=i(667294),n=i(883119),s=i(554786),o=i(494125),l=i(785893);let a=200,d=({deviceType:e,hiding:t,visible:i})=>{let r="desktop"===e,n=0,s=r?"translateY(200px)":"translateY(-200px)",o="opacity 0.1s ease-in-out",l="hidden";return i&&!t&&(n=1,s="translateY(0)",o="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",l="visible"),i&&t&&(s="scale(1.1)",o="opacity transform 0.2s"),{opacity:n,pointerEvents:"auto",position:"relative",marginTop:r?10:0,transform:s,transition:o,visibility:l}};function c({_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:t,text:i,primaryAction:c,dismissButton:u,helperLink:p,thumbnail:h,type:m,dataTestId:v,duration:f=2e3,onHide:y,href:x,onClick:b,openNewPage:g,imageUrl:_}){let w;let j=(0,s.ZP)(),[z,k]=(0,r.useState)(!1),[E,S]=(0,r.useState)(!1),C=(0,r.useRef)(),I=()=>{k(!0),C.current=setTimeout(y,a)},Z=()=>{C.current=setTimeout(I,f)},H=()=>{C.current&&clearTimeout(C.current)};(0,o.Z)(()=>(setTimeout(()=>S(!0),100),Z(),H)),_&&(w={image:(0,l.jsx)(n.Ee,{alt:"string"==typeof i?i:`${i[0]} ${i[1]}`,fit:"cover",naturalHeight:1,naturalWidth:1,src:_})});let P=(0,l.jsx)(n.FN,{_dangerouslySetPrimaryAction:t,_dangerouslySetThumbnail:e,dismissButton:u,helperLink:p,primaryAction:c,text:i,thumbnail:w??h,type:m}),{marginTop:T,opacity:A,pointerEvents:L,position:D,transform:O,transition:R,visibility:U}=d({deviceType:j,hiding:z,visible:E});return(0,l.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{transform:O,transition:R,visibility:U,pointerEvents:L}},"data-test-id":v??"toast",display:"flex",marginTop:T,onMouseEnter:H,onMouseLeave:Z,opacity:A,position:D,children:x?(0,l.jsx)(n.Tg,{href:x,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{x.startsWith("#")&&(e.preventDefault(),t()),b?.(e)},rounding:"pill",target:g?"blank":null,children:P}):P})}},140017:(e,t,i)=>{i.d(t,{ZP:()=>o,oz:()=>n,q6:()=>r});let{Provider:r,Consumer:n,useHook:s}=(0,i(342513).Z)("i18n"),o=s},588664:(e,t,i)=>{i.d(t,{Z:()=>r});function r(e,t,i=28){let n;if(!(e||{}).resurrection_info&&!(t||{}).resurrectionInfo)return!1;n=t?((t||{}).resurrectionInfo||{}).resurrectionDate:((e||{}).resurrection_info||{}).resurrection_dt;let s=new Date,o=n?new Date(n):s;return o.setDate(o.getDate()+i),new Date().getTime()<o.getTime()}},227258:(e,t,i)=>{i.d(t,{U:()=>u,b:()=>p});var r=i(216167),n=i(259866),s=i(288240),o=i(839967),l=i(827625),a=i(197036),d=i(838458);function c({addSuspenseResourceSSRData:e,fetchOptions:t,resource:i,resourceCreator:u,retry:p}){return async(h,m)=>{let{bookmark:v,headers:f,options:y,refresh:x,schema:b}=t,g=(0,s.Z)(y);if(m().resources?.[i]?.[g]?.fetching&&!p)return Promise.resolve();let _=p?p.bookmark:v,w=(0,n.Z)(y),j=_?{...w,bookmarks:[_]}:w;h((0,l.LQ)(i,y,!0));try{let n=u??r.Z.create,s=await n(i,j).callGet(void 0,f);e&&s.resource&&e(i,j,s);let[m]=s.bookmarks||[],{data:g}=s.resource_response,{normalizedResponse:_,resourceSchema:w}=(0,d.f)({data:g,opts:{bookmark:v,options:y,schema:b},resource:i})||{normalizedResponse:null,resourceSchema:void 0},z=s.resource?null:s;if(s.resource){m=s.resource_response.bookmark||"";let e=(0,a.Z)(s);_=e.normalizedResponse,w=e.schema,z=e.response}if(Array.isArray(g)&&0===g.length&&m&&m!==o.qx){let e=p?p.count:0;if(!(e>=o.s9))return h(c({resource:i,fetchOptions:t,retry:{count:e+1,bookmark:m},resourceCreator:u}))}z&&(v?(h((0,l.Dm)(i,y,z,_,w)),r.Z.fetchMoreCompleteCallback&&r.Z.fetchMoreCompleteCallback({resource:i,options:y,response:z,normalizedResponse:_,refresh:x,resourceSchema:w})):(h((0,l.Sr)(i,y,z,_,x,w)),r.Z.fetchCompleteCallback&&r.Z.fetchCompleteCallback({resource:i,options:y,response:z,normalizedResponse:_,refresh:x,resourceSchema:w})))}catch(t){if(e){let r=t.http_status??500;e(i,y,{resource:{name:i,options:y},resource_response:{data:null,error:t,http_status:r,status:"failure"}})}h((0,l.Tl)(i,y,t))}}}let u=(e,{bookmark:t,headers:i,options:r,schema:n},s,o)=>c({resource:e,fetchOptions:{bookmark:t,headers:i,options:r,refresh:!1,schema:n},resourceCreator:s,addSuspenseResourceSSRData:o}),p=(e,{headers:t,options:i,schema:r},n)=>c({resource:e,fetchOptions:{headers:t,options:i,refresh:!0,schema:r},resourceCreator:n})},827625:(e,t,i)=>{i.d(t,{Dm:()=>a,LQ:()=>s,Sr:()=>l,Tl:()=>o,XM:()=>n,jB:()=>d});var r=i(419821);function n(e,t,i,n){return{type:r.AF,payload:{resource:e,options:t,response:i,normalizedResponse:n}}}function s(e,t,i){return{type:r.KK,payload:{resource:e,options:t,isFetching:i}}}let o=(e,t,i)=>({type:r.cR,payload:{resource:e,options:t,error:i}});function l(e,t,i,n,s,o){return{type:r.zP,payload:{isRefresh:s,normalizedResponse:n,options:t,resource:e,response:i,schema:o}}}function a(e,t,i,n,s){return{type:r.aW,payload:{resource:e,options:t,response:i,normalizedResponse:n,schema:s}}}function d(e,t){return{type:r.se,payload:{resource:e,optionsOrOptionsKey:t}}}},197036:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(782677),n=i(888037),s=i(838458);function o(e){let{resource:t,resource_response:i}=e,{name:o,options:l}=t,a=(0,n.Z)(i),{data:d,error:c}=i,u=(0,s.J)(o,{options:l});return{error:c,isRefresh:!1,normalizedResponse:u&&d?(0,r.Fv)(d,u):null,options:l,resource:o,response:{auxData:a,bookmarks:i.bookmark?[i.bookmark]:void 0,resource_response:{data:d,error:c}},schema:u}}},598228:(e,t,i)=>{i.d(t,{Ag:()=>s,C0:()=>a,L1:()=>p,Vi:()=>o,YD:()=>u,kS:()=>n,oo:()=>l,p3:()=>h,vC:()=>d,vI:()=>c});var r=i(244413);let n="https://www.pinterest.com/business/hub/",s="https://www.pinterest.com/homefeed/",o="www.pinterest.com",l="https://help.pinterest.com",a=`${(0,r.Z)({site:"www"})}`,d=(0,r.Z)({site:"developers"}),c=`${(0,r.Z)({site:"sterling"})}`,u=`${(0,r.Z)({site:"analytics"})}`,p=`${(0,r.Z)({site:"trends"})}`,h=`${(0,r.Z)({site:"www",path:"/product-catalogs/data-source/?advertiserId="})}`},862249:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(968946);let n=({url:e})=>!!(e&&e.match(/^https{0,1}:\/\//)&&!(0,r.Z)(e))},494125:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(667294);let n=e=>{(0,r.useEffect)(e,[])}},149722:(e,t,i)=>{i.d(t,{$:()=>r,Z:()=>s});let{Provider:r,useHook:n}=(0,i(342513).Z)("viewer"),s=n},357803:(e,t,i)=>{i.d(t,{Z:()=>r});let r=(0,i(667294).createContext)([null,()=>{}])},838458:(e,t,i)=>{i.d(t,{J:()=>s,f:()=>o});var r=i(782677),n=i(539426);let s=(e,{bookmark:t,options:i,schema:r})=>{let s=r||n.Z[e];return"function"==typeof s?s({resource:e,options:i,bookmark:t}):s};function o({data:e,opts:{bookmark:t,options:i,schema:n},resource:o}){let l=s(o,{bookmark:t,options:i,schema:n});return{normalizedResponse:l&&e?(0,r.Fv)(e,l):null,resourceSchema:l}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/62402-8473f7e1763ed2f5.mjs.map
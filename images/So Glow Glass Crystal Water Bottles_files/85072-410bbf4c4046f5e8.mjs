"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[85072],{240684:(e,t,n)=>{n.d(t,{TA:()=>w,ZP:()=>A});var r=n(667294),a=n(263366),i=n(487462),o=n(497326),s=n(894578),l=n(659864),u=n(108679),c=n.n(u);function d(e){console.warn("loadable: "+e)}var p=r.createContext(),h={initialChunks:{}},f="PENDING",y="REJECTED",m=function(e){return e};function v(e){var t=e.defaultResolveComponent,n=void 0===t?m:t,u=e.render,d=e.onLoad;function v(e,t){void 0===t&&(t={});var m,v="function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e,_={};function b(e){return t.cacheKey?t.cacheKey(e):v.resolve?v.resolve(e):"static"}function E(e,r,a){var i=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!(0,l.isValidElementType)(i))throw Error("resolveComponent returned something that is not a React component!");return c()(a,i,{preload:!0}),i}var x=(m=function(e){function n(n){var r;return((r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:b(n)},function(e,t){if(!e){var n=Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}(!n.__chunkExtractor||v.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor)?(!1===t.ssr||(v.requireAsync(n).catch(function(){return null}),r.loadSync(),n.__chunkExtractor.addChunk(v.chunkName(n))),(0,o.Z)(r)):(!1!==t.ssr&&(v.isReady&&v.isReady(n)||v.chunkName&&h.initialChunks[v.chunkName(n)])&&r.loadSync(),r)}(0,s.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=b(e);return(0,i.Z)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===y&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return b(this.props)},r.getCache=function(){return _[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),_[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;d&&setTimeout(function(){d(e.state.result,e.props)})},r.loadSync=function(){if(this.state.loading)try{var e=v.requireSync(this.props),t=E(e,this.props,S);this.state.result=t,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:v.resolve(this.props),chunkName:v.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then(function(t){var n=E(t,e.props,{Loadable:S});e.safeSetState({result:n,loading:!1},function(){return e.triggerOnLoad()})}).catch(function(t){return e.safeSetState({error:t,loading:!1})}),t},r.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,(0,a.Z)(t,["__chunkExtractor","forwardedRef"])),r=this.getCache();return r||((r=v.requireAsync(n)).status=f,this.setCache(r),r.then(function(){r.status="RESOLVED"},function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:v.resolve(e.props),chunkName:v.chunkName(e.props),error:t?t.message:t}),r.status=y})),r},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,o=(e.__chunkExtractor,(0,a.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,l=s.error,c=s.loading,d=s.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===f)throw this.loadAsync();if(l)throw l;var p=r||t.fallback||null;return c?p:u({fallback:p,result:d,options:t,props:(0,i.Z)({},o,{ref:n})})},n}(r.Component),function(e){return r.createElement(p.Consumer,null,function(t){return r.createElement(m,Object.assign({__chunkExtractor:t},e))})}),S=r.forwardRef(function(e,t){return r.createElement(x,Object.assign({forwardedRef:t},e))});return S.preload=function(e){v.requireAsync(e)},S.load=function(e){return v.requireAsync(e)},S}return{loadable:v,lazy:function(e,t){return v(e,(0,i.Z)({},t,{suspense:!0}))}}}var _=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.createElement(t,n)}}),b=_.loadable,E=_.lazy,x=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),S=x.loadable,Z=x.lazy,g="undefined"!=typeof window;function w(e,t){void 0===e&&(e=function(){});var n=(void 0===t?{}:t).namespace;if(!g)return d("`loadableReady()` must be called in browser only"),e(),Promise.resolve();var r=null;if(g){var a=""+(void 0===n?"":n)+"__LOADABLE_REQUIRED_CHUNKS__",i=document.getElementById(a);if(i){r=JSON.parse(i.textContent);var o=document.getElementById(a+"_ext");if(o)JSON.parse(o.textContent).namedChunks.forEach(function(e){h.initialChunks[e]=!0});else throw Error("loadable-component: @loadable/server does not match @loadable/component")}}if(!r)return d("`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side"),e(),Promise.resolve();var s=!1;return new Promise(function(e){window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[];var t=window.__LOADABLE_LOADED_CHUNKS__,n=t.push.bind(t);function a(){r.every(function(e){return t.some(function(t){return t[0].indexOf(e)>-1})})&&!s&&(s=!0,e())}t.push=function(){n.apply(void 0,arguments),a()},a()}).then(e)}b.lib=S,E.lib=Z;let A=b},83146:(e,t,n)=>{n.d(t,{CV:()=>x,E8:()=>Z,JN:()=>i,K0:()=>p,Nk:()=>S,OY:()=>a,Rr:()=>l,TK:()=>h,Ts:()=>c,WC:()=>d,XE:()=>o,Zu:()=>v,af:()=>A,al:()=>u,c9:()=>s,fL:()=>w,hg:()=>m,ig:()=>E,kW:()=>y,ou:()=>r,tr:()=>f,vq:()=>g,wY:()=>_,xJ:()=>b});let r="show_pmp_survey",a="smb_marketing_plan",i=1300,o=15,s=["ADVERTISER_LOW_LEAD_SCORE","ADVERTISER_HIGH_LEAD_SCORE","ADVERTISER_SPENDING"],l=["ADVERTISER_SPENDING","SHOPIFY_SPENDER","MERCHANT_SPENDER"],u=["SHOPIFY_BUSINESS","SHOPIFY_SPENDER"],c={USD:100,AUD:153,CAD:135,CHF:93,CLP:91355,COP:502200,CZK:2437,DKK:753,EUR:99,GBP:82,HUF:40750,JPY:13680,MXN:2020,NOK:1050,NZD:155,PLN:467,RON:508,SEK:1064,ARS:10500,UNK:0},d=1000567,p=506403,h=506429,f=505471,y=506430,m=506432,v=506461,_=506441,b=506445,E=506446,x=506447,S=506448,Z=506454,g=506455,w=506456,A=506464},822311:(e,t,n)=>{n.d(t,{Z:()=>L});var r=n(667294),a=n(883119),i=n(83146),o=n(29156),s=n(401429),l=n(930837),u=n(256683),c=n(608516),d=n(325362),p=n(244413),h=n(118923),f=n(832853),y=n(785893);let m=(0,r.lazy)(()=>n.e(74826).then(n.bind(n,457805))),v=(0,f.Z)(()=>n.e(74826).then(n.bind(n,457805)),{ssr:!1}),_=(0,r.lazy)(()=>n.e(65468).then(n.bind(n,765468))),b=(0,f.Z)(()=>n.e(65468).then(n.bind(n,765468)),{ssr:!1}),E=(0,r.lazy)(()=>n.e(29087).then(n.bind(n,629087))),x=(0,f.Z)(()=>n.e(29087).then(n.bind(n,629087)),{ssr:!1}),S=(0,r.lazy)(()=>Promise.all([n.e(50427),n.e(34436)]).then(n.bind(n,250427))),Z=(0,f.Z)(()=>Promise.all([n.e(50427),n.e(34436)]).then(n.bind(n,250427)),{ssr:!1}),g=(0,r.lazy)(()=>n.e(52190).then(n.bind(n,752190))),w=(0,f.Z)(()=>n.e(52190).then(n.bind(n,752190)),{ssr:!1}),A=(0,r.lazy)(()=>Promise.all([n.e(64254),n.e(18656)]).then(n.bind(n,394966))),C=(0,f.Z)(()=>Promise.all([n.e(64254),n.e(18656)]).then(n.bind(n,394966)),{ssr:!1}),D=(0,r.lazy)(()=>n.e(77804).then(n.bind(n,77804))),I=(0,f.Z)(()=>n.e(77804).then(n.bind(n,77804)),{ssr:!1}),P=(0,r.lazy)(()=>n.e(11408).then(n.bind(n,311408))),R=(0,f.Z)(()=>n.e(11408).then(n.bind(n,311408)),{ssr:!1}),k=(0,r.lazy)(()=>n.e(64996).then(n.bind(n,264996))),T=(0,f.Z)(()=>n.e(64996).then(n.bind(n,264996)),{ssr:!1}),O=(0,r.lazy)(()=>n.e(12e3).then(n.bind(n,612e3))),j=(0,f.Z)(()=>n.e(12e3).then(n.bind(n,612e3)),{ssr:!1}),N=[505420,i.xJ,506249,i.ig,505933,i.CV,506173,506124,506436];function L({placementId:e}){let t=(0,h.b)();return(0,y.jsx)(r.Fragment,{children:(0,y.jsx)(s.Z,{eligibleIds:[501312,500331,i.Zu,502271,504032,504569,i.vq,504721,505039,i.fL,505093,505420,i.xJ,506249,i.ig,505933,i.CV,506173,506124,506436],placementId:e,children:({complete:n,dismiss:r,experience:{experience_id:s,display_data:h}})=>{let f=t?function(e){switch(e){case 504721:return R;case i.vq:case 504569:return I;case 504032:return T;case 502271:return b;case i.fL:case 505039:return x;case 505093:return j;default:return v}}(s):function(e){switch(e){case 504721:return P;case i.vq:case 504569:return D;case 504032:return k;case 502271:return _;case i.fL:case 505039:return E;case 505093:return O;default:return m}}(s),L=function(e){switch(e){case 504721:return 660;case i.Zu:case 500331:return"md";default:return"sm"}}(s);return(0,y.jsxs)(a.xu,{children:[!N.includes(s)&&(0,y.jsx)(l.ZP,{accessibilityModalLabel:"",onDismiss:r,size:L,children:t?(0,y.jsx)(f,{...(0,u.Z)(d.Z)(h),experienceId:s,handleComplete:n,handleDismiss:r,placementId:e}):(0,y.jsx)(c.Z,{children:(0,y.jsx)(f,{...(0,u.Z)(d.Z)(h),experienceId:s,handleComplete:n,handleDismiss:r,placementId:e})})}),506124===s&&(t?(0,y.jsx)(Z,{handleComplete:n,handleDismiss:r,isDesktop:!0,isGooglePrimary:!0,...(0,u.Z)(d.Z)(h)}):(0,y.jsx)(c.Z,{children:(0,y.jsx)(S,{handleComplete:n,handleDismiss:r,isDesktop:!0,isGooglePrimary:!0,...(0,u.Z)(d.Z)(h)})})),(506173===s||506436===s)&&(t?(0,y.jsx)(Z,{handleComplete:n,handleDismiss:r,isDesktop:!0,isGooglePrimary:!1,...(0,u.Z)(d.Z)(h)}):(0,y.jsx)(c.Z,{children:(0,y.jsx)(S,{handleComplete:n,handleDismiss:r,isDesktop:!0,isGooglePrimary:!1,...(0,u.Z)(d.Z)(h)})})),505420===s&&(t?(0,y.jsx)(C,{experienceId:505420,onSubmitSurvey:async()=>{(0,o.Z)((0,p.Z)({site:"www",path:"/business/marketing-plan"}))},placementId:e,viewType:251}):(0,y.jsx)(c.Z,{children:(0,y.jsx)(A,{experienceId:505420,onSubmitSurvey:async()=>{(0,o.Z)((0,p.Z)({site:"www",path:"/business/marketing-plan"}))},placementId:e,viewType:251})})),s===i.xJ&&(t?(0,y.jsx)(C,{experienceId:i.xJ,onSubmitSurvey:async()=>{(0,o.Z)((0,p.Z)({site:"www",path:"/business/marketing-plan"}))},placementId:e,viewType:251}):(0,y.jsx)(c.Z,{children:(0,y.jsx)(A,{experienceId:i.xJ,onSubmitSurvey:async()=>{(0,o.Z)((0,p.Z)({site:"www",path:"/business/marketing-plan"}))},placementId:e,viewType:251})})),506249===s&&(t?(0,y.jsx)(C,{experienceId:506249,onSubmitSurvey:async()=>{(0,o.Z)((0,p.Z)({site:"www",path:"/business/marketing-plan"}))},placementId:e,viewType:251}):(0,y.jsx)(c.Z,{children:(0,y.jsx)(A,{experienceId:506249,onSubmitSurvey:async()=>{(0,o.Z)((0,p.Z)({site:"www",path:"/business/marketing-plan"}))},placementId:e,viewType:251})})),s===i.ig&&(t?(0,y.jsx)(C,{experienceId:i.ig,onSubmitSurvey:async()=>{(0,o.Z)((0,p.Z)({site:"www",path:"/business/marketing-plan"}))},placementId:e,viewType:251}):(0,y.jsx)(c.Z,{children:(0,y.jsx)(A,{experienceId:i.ig,onSubmitSurvey:async()=>{(0,o.Z)((0,p.Z)({site:"www",path:"/business/marketing-plan"}))},placementId:e,viewType:251})})),505933===s&&(t?(0,y.jsx)(w,{handleComplete:()=>{n(),(0,o.Z)((0,p.Z)({site:"sterling",path:"/reporting/"}))},handleDismiss:r,onAdsReportingSurface:!1}):(0,y.jsx)(c.Z,{children:(0,y.jsx)(g,{handleComplete:()=>{n(),(0,o.Z)((0,p.Z)({site:"sterling",path:"/reporting/"}))},handleDismiss:r,onAdsReportingSurface:!1})})),s===i.CV&&(t?(0,y.jsx)(w,{handleComplete:()=>{n(),(0,o.Z)((0,p.Z)({site:"sterling",path:"/reporting/"}))},handleDismiss:r,onAdsReportingSurface:!1}):(0,y.jsx)(c.Z,{children:(0,y.jsx)(g,{handleComplete:()=>{n(),(0,o.Z)((0,p.Z)({site:"sterling",path:"/reporting/"}))},handleDismiss:r,onAdsReportingSurface:!1})}))]})}})})}},549629:(e,t,n)=>{n.d(t,{Q:()=>l,Z:()=>u});var r=n(667294),a=n(587703),i=n(525364),o=n(996523),s=n(5859);function l(e,t){let{setViewContextData:n}=(0,i.sV)(),{requestIdentifier:l}=(0,s.B)(),u=(0,a.Z)(),{viewData:c}=(0,i.SU)();(0,r.useEffect)(()=>{e&&(n({viewType:e.view_type??1,viewParameter:e.view_parameter,viewData:e.view_data?(0,o.Z)(c,e.view_data):c,component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),u({...e,event_type:13,request_identifier:l}))},[t])}function u(e){let{children:t,log:n}=e;return l(n),t||null}},510989:(e,t,n)=>{n.d(t,{Z:()=>r});let r=n(103322).Z},357744:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(401429),a=n(785893);let i=[502312,502320,502321,502322],o=({placementId:e})=>(0,a.jsx)(r.Z,{eligibleIds:i,placementId:e,preventRemoval:!0,children:({complete:e})=>(e(),null)})},970521:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(667294),a=n(545007),i=n(105737),o=n(25919),s=n(703404),l=n(839391),u=n(5859),c=n(785893);function d(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let p={dispatchMountActionDuringSSR:!1,isAdvertiserPlacement:!1},h=(e,t={},n)=>h=>{let f=function(e,t,n=!0,p=!1,h){class f extends r.Component{constructor(e){super(e),d(this,"state",{extraContext:void 0}),d(this,"setExtraContextState",e=>{(0,i.ZP)(this.state.extraContext,e)||this.setState({extraContext:e})})}componentDidMount(){this.dispatchPlacementMount()}componentDidUpdate(n,r){let{dispatch:a,experience:s,requestContext:l}=this.props,u=r.extraContext,c=this.state.extraContext||t||{};"function"==typeof t&&(u=t(n,r.extraContext||{}),c=t(this.props,this.state.extraContext||{})),c&&Object.keys(c).length>0&&!(0,i.ZP)(u,c)&&a((0,o.pz)([e],l.isBot,c)),s&&(!n.experience||s.id!==n.experience.id)&&a((0,o.kd)(e,c))}componentWillUnmount(){this.props.unmountPlacement(e)}dispatchPlacementMount(){let n="function"==typeof t?t(this.props,this.state.extraContext||{}):{...t},r=p&&n?.advertiser_id?{advertiserId:n.advertiser_id}:void 0;this.props.mountPlacement(e,n,r)}render(){let{experience:e,experiencesMulti:t}=this.props,n={[p?"advertiserExperience":"experience"]:(0,s.E3)(e)?e:null};return(0,c.jsx)(h,{...this.props,setPlacementExtraContext:this.setExtraContextState,...n,experiencesMulti:t})}}function y(e){let t=(0,u.B)(),n=(0,a.I0)(),{mountPlacement:r,unmountPlacement:i}=(0,l.Z)();return(0,c.jsx)(f,{...e,dispatch:n,mountPlacement:r,requestContext:t,unmountPlacement:i})}return y.displayName=`withPlacement(${h.displayName||h.name||"Component"})`,y}(e,t,(n={...p,...n}).dispatchMountActionDuringSSR,n.isAdvertiserPlacement,h),y=t=>{let n=(0,a.v9)(t=>t.experiences[e]),r=(0,a.v9)(t=>t.experiencesMulti?t.experiencesMulti[e]:void 0);return(0,c.jsx)(f,{...t,experience:n,experiencesMulti:r})};return y.displayName=f.displayName,y}},422210:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e){if(!e)return!1;let t=new Date(e);return t.setDate(t.getDate()+28),new Date().getTime()<t.getTime()}},201417:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e){return"object"==typeof e&&null!==e&&e.constructor===Object&&"[object Object]"===Object.prototype.toString.call(e)}},588664:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e,t,n=28){let a;if(!(e||{}).resurrection_info&&!(t||{}).resurrectionInfo)return!1;a=t?((t||{}).resurrectionInfo||{}).resurrectionDate:((e||{}).resurrection_info||{}).resurrection_dt;let i=new Date,o=a?new Date(a):i;return o.setDate(o.getDate()+n),new Date().getTime()<o.getTime()}},483085:(e,t,n)=>{n.d(t,{Z:()=>function e(t,n=!1){return a=>{if(!(0,r.Z)(a))return n&&Array.isArray(a)?a.map(e(t,n)):a;let i={};return Object.keys(a).forEach(o=>{let s=t(a[o],o);(0,r.Z)(a[o])||n&&Array.isArray(a[o])?i[s]=e(t,n)(a[o]):i[s]=a[o]}),i}}});var r=n(201417)},256683:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(483085);function a(e,t=!1){let n=(t,n)=>e(n);return e=>(0,r.Z)(n,t)(e)}},996523:(e,t,n)=>{n.d(t,{Z:()=>function e(t,n,r=()=>void 0){let a=r(t,n);return void 0!==a?a:void 0===n?t:Array.isArray(t)&&Array.isArray(n)?n.reduce((t,a,i)=>(t[i]=e(t[i],n[i],r),t),[...t]):t&&"object"==typeof t&&n&&"object"==typeof n?Object.keys(n).reduce((t,a)=>(t[a]=e(t[a],n[a],r),t),{...t}):n}})},340523:(e,t,n)=>{n.d(t,{F:()=>a,a:()=>r});let{Provider:r,useHook:a}=(0,n(342513).Z)("ExperimentContext")},14583:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(667294),a=n(340523),i=n(908734),o=n(785893);function s({children:e,fallback:t}){return(0,o.jsx)(r.Suspense,{fallback:t||null,children:e})}function l({children:e,fallback:t}){let{checkExperiment:n}=(0,a.F)();return n("web_throw_error_on_client_only_suspense").anyEnabled?(0,o.jsx)(r.Suspense,{fallback:t,children:(0,o.jsx)(i.Z,{children:e})}):(0,o.jsx)(s,{fallback:t,children:e})}},554786:(e,t,n)=>{n.d(t,{HG:()=>d,Kf:()=>o,Mq:()=>a,Wb:()=>c,ZP:()=>p,dA:()=>s,ds:()=>l,ml:()=>u});var r=n(5859);function a(e){let{isMobile:t,isTablet:n}=e.userAgent;return n?"tablet":t?"phone":"desktop"}let i=()=>a((0,r.B)()),o=e=>"phone"===e,s=e=>"tablet"===e,l=e=>"desktop"===e,u=()=>o(i()),c=()=>s(i()),d=()=>l(i()),p=i},149722:(e,t,n)=>{n.d(t,{$:()=>r,Z:()=>i});let{Provider:r,useHook:a}=(0,n(342513).Z)("viewer"),i=a},239821:(e,t,n)=>{n.d(t,{g:()=>p,I:()=>d});var r=n(667294),a=n(342513),i=n(705895),o=n(259866);let s={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},l=(e=s,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type&&e.showTypeaheadOverlay!==t.payload)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){let{payload:n}=t,{pinId:r,isPromoted:a,currentTime:i}=n,{videosAutoplaying:s}=e,{currentlyPlayingOrganicVideoId:l,promotedVideosAutoplaying:u,organicVideosAutoplaying:c}=s,d=(0,o.Z)(u),p=(0,o.Z)(c);return!a&&l?e:(a?d[r]={pinId:r,currentTime:i,paused:!1}:p[r]={pinId:r,currentTime:i,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:a?l:r,promotedVideosAutoplaying:d,organicVideosAutoplaying:p}})}if("SET_IS_AUTOPLAY"===t.type&&e.isAutoplay!==t.payload)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){let{payload:n}=t,{pinId:r,isPromoted:a,currentTime:i}=n,{videosAutoplaying:s}=e,{promotedVideosAutoplaying:l,organicVideosAutoplaying:u}=s,c=(0,o.Z)(l),d=(0,o.Z)(u);return a?c[r]={...c[r],paused:!0,currentTime:i}:d[r]={...d[r],paused:!0,currentTime:i},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:c,organicVideosAutoplaying:d}}}if("SET_APP_FOCUS_STATE"===t.type&&e.appInFocus!==t.payload)return{...e,appInFocus:t.payload};if("SET_VIEWPORT_SIZE"===t.type&&e.viewportSize!==t.payload)return{...e,viewportSize:t.payload};if("SET_FOOTER_VISIBILITY_STATE"===t.type&&e.footerPlusButtonVisible!==t.payload)return{...e,footerPlusButtonVisible:t.payload};return e};var u=n(785893);let{Provider:c,useHook:d}=(0,a.Z)("AppUI");function p({children:e}){let[t,n]=(0,r.useReducer)(l,s),a=(0,r.useCallback)(e=>n({type:"PAUSE_CURRENT_VIDEO",payload:e}),[]),o=(0,r.useCallback)(e=>n({type:"SET_APP_FOCUS_STATE",payload:e}),[]),d=(0,r.useCallback)(e=>n({type:"SET_CURRENT_VIDEO",payload:e}),[]),p=(0,r.useCallback)(e=>n({type:"SET_FOOTER_VISIBILITY_STATE",payload:e}),[]),h=(0,r.useCallback)(e=>n({type:"SET_IS_AUTOPLAY",payload:e}),[]),f=(0,r.useCallback)(e=>n({type:"SET_VIEWPORT_SIZE",payload:e}),[]),y=(0,r.useCallback)(e=>n({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e}),[]),m=(0,r.useMemo)(()=>({pauseAutoplay:a,setCurrentVideo:d,setFooterPlusButtonVisible:p,setIsAutoplay:h,setViewportSize:f,toggleTypeaheadOverlay:y,setAppFocusState:o,appUI:t}),[a,d,p,h,f,y,o,t]);return(0,r.useEffect)(()=>{i.Z.onSessionResume(()=>{o(!0)}).onSessionPause(()=>{o(!1)})},[o]),(0,u.jsx)(c,{value:m,children:e})}},190149:(e,t,n)=>{n.d(t,{Z:()=>i,k:()=>r});let{Provider:r,useHook:a}=(0,n(342513).Z)("Conversations"),i=a},706196:(e,t,n)=>{function r(e){let[t,n]=e.split(/\/(.*)+/);return{filepath:n||"",site:t||""}}function a(e,t){return t?`${e||""}/${t}`:`/${e||""}`}n.d(t,{ac:()=>r,ke:()=>a})},908734:(e,t,n)=>{n.d(t,{Z:()=>i,d:()=>a});let r="HIDDEN_ON_SERVER_ERROR",a=e=>e instanceof Object&&"message"in e&&e.message===r;function i({children:e}){if("undefined"==typeof window)throw Error(r);return e}},118923:(e,t,n)=>{n.d(t,{b:()=>o});var r=n(340523),a=n(5859),i=n(528252);function o(){let{checkExperiment:e}=(0,r.F)(),{isAuthenticated:t}=(0,a.B)();return function({checkExperiment:e,isAuthenticated:t,isEarlyHydrationEnabled:n}){return n||!!e&&e(t?"web_auth_lazy_component":"web_unauth_lazy_component").anyEnabled}({checkExperiment:e,isAuthenticated:t,isEarlyHydrationEnabled:(0,i.z5)()})}},832853:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(667294),a=n(14583);let{Provider:i,useMaybeHook:o}=(0,n(342513).Z)("LazyComponent");var s=n(785893);function l(e,t,n){let i,l,u;let c=t?.ssr??!0?r.Suspense:a.Z,d=n=>{o(),t?.dynamicRequestKey,l||(l=(0,r.lazy)(()=>e(n)));let a=(0,r.useRef)(i??l).current;return(0,s.jsx)(c,{fallback:n.fallback||t?.fallback,children:(0,s.jsx)(a,{...n})})};function p(t){return u||(u=(async()=>i=(await e(t)).default)()),u}return d.preload=e=>{p(e)},d.load=e=>p(e),d}},528252:(e,t,n)=>{n.d(t,{DB:()=>u,SS:()=>s,WP:()=>i,z5:()=>l});var r=n(667294),a=n(706196);let i=(0,r.createContext)({anyEnabled:!1,group:""}),o={anyEnabled:!1,group:""};function s({experimentsClient:e,isAuthenticated:t,handlerId:n}){let{site:r}=(0,a.ac)(n??"");return"www"!==r?o:e?.checkExperiment(t?"web_early_hydration_auth":"web_early_hydration_unauth")??o}function l(){return(0,r.useContext)(i).anyEnabled}function u(){return(0,r.useContext)(i)}},497326:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/85072-410bbf4c4046f5e8.mjs.map
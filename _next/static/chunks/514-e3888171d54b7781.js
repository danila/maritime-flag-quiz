"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{8030:function(e,t,r){r.d(t,{Z:function(){return s}});var o=r(2265);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,o.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:d="",children:c,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:t,...i,width:n,height:n,stroke:r,strokeWidth:s?24*Number(a)/Number(n):a,className:l("lucide",d),...p},[...u.map(e=>{let[t,r]=e;return(0,o.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),s=(e,t)=>{let r=(0,o.forwardRef)((r,i)=>{let{className:s,...d}=r;return(0,o.createElement)(a,{ref:i,iconNode:t,className:l("lucide-".concat(n(e)),s),...d})});return r.displayName="".concat(e),r}},3231:function(e,t,r){r.d(t,{Z:function(){return o}});let o=(0,r(8030).Z)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},1935:function(e,t,r){r.d(t,{Z:function(){return o}});let o=(0,r(8030).Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},3274:function(e,t,r){r.d(t,{Z:function(){return o}});let o=(0,r(8030).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},6706:function(e,t,r){r.d(t,{Z:function(){return o}});let o=(0,r(8030).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},6648:function(e,t,r){r.d(t,{default:function(){return n.a}});var o=r(5601),n=r.n(o)},8173:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let o=r(9920),n=r(1452),l=r(7437),i=n._(r(2265)),a=o._(r(4887)),s=o._(r(8321)),d=r(497),c=r(7103),u=r(3938);r(2301);let p=r(291),f=o._(r(1241)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/maritime-flag-quiz/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,o,n,l,i){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}}))}function b(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let h=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:o,sizes:n,height:a,width:s,decoding:d,className:c,style:u,fetchPriority:p,placeholder:f,loading:m,unoptimized:h,fill:y,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:k,sizesInput:j,onLoad:z,onError:_,...C}=e;return(0,l.jsx)("img",{...C,...b(p),loading:m,width:s,height:a,decoding:d,"data-nimg":y?"fill":"1",className:c,style:u,sizes:n,srcSet:o,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&g(e,f,v,w,x,h,j))},[r,f,v,w,x,_,h,j,t]),onLoad:e=>{g(e.currentTarget,f,v,w,x,h,j)},onError:e=>{k(!0),"empty"!==f&&x(!0),_&&_(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,o={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,o),null):(0,l.jsx)(s.default,{children:(0,l.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...o},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(p.RouterContext),o=(0,i.useContext)(u.ImageConfigContext),n=(0,i.useMemo)(()=>{let e=m||o||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[o]),{onLoad:a,onLoadingComplete:s}=e,g=(0,i.useRef)(a);(0,i.useEffect)(()=>{g.current=a},[a]);let b=(0,i.useRef)(s);(0,i.useEffect)(()=>{b.current=s},[s]);let[v,w]=(0,i.useState)(!1),[x,k]=(0,i.useState)(!1),{props:j,meta:z}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:v,showAltText:x});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{...j,unoptimized:z.unoptimized,placeholder:z.placeholder,fill:z.fill,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:k,sizesInput:e.sizes,ref:t}),z.priority?(0,l.jsx)(y,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let o=r(9920)._(r(2265)).default.createContext({})},687:function(e,t){function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:o=!1}=void 0===e?{}:e;return t||r&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},497:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(2301);let o=r(1564),n=r(7103);function l(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,d,{src:c,sizes:u,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:b,width:h,height:y,fill:v=!1,style:w,overrideSrc:x,onLoad:k,onLoadingComplete:j,placeholder:z="empty",blurDataURL:_,fetchPriority:C,layout:S,objectFit:P,objectPosition:O,lazyBoundary:E,lazyRoot:M,...I}=e,{imgConf:R,showAltText:A,blurComplete:N,defaultLoader:G}=t,D=R||n.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=I.loader||G;delete I.loader,delete I.srcSet;let W="__next_img_default"in L;if(W){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...o}=t;return e(o)}}if(S){"fill"===S&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!u&&(u=t)}let T="",$=i(h),U=i(y);if("object"==typeof(r=c)&&(l(r)||void 0!==r.src)){let e=l(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,_=_||e.blurDataURL,T=e.src,!v){if($||U){if($&&!U){let t=$/e.width;U=Math.round(e.height*t)}else if(!$&&U){let t=U/e.height;$=Math.round(e.width*t)}}else $=e.width,U=e.height}}let Z=!f&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:T)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,Z=!1),a.unoptimized&&(p=!0),W&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(p=!0),f&&(C="high");let B=i(b),F=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:O}:{},A?{}:{color:"transparent"},w),V=N||"empty"===z?null:"blur"===z?'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:$,heightInt:U,blurWidth:s,blurHeight:d,blurDataURL:_||"",objectFit:F.objectFit})+'")':'url("'+z+'")',q=V?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},H=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:l,sizes:i,loader:a}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:o,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,i),c=s.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:s.map((e,o)=>a({config:t,src:r,quality:l,width:e})+" "+("w"===d?e:o+1)+d).join(", "),src:a({config:t,src:r,quality:l,width:s[c]})}}({config:a,src:c,unoptimized:p,width:$,quality:B,sizes:u,loader:L});return{props:{...I,loading:Z?"lazy":m,fetchPriority:C,width:$,height:U,decoding:"async",className:g,style:{...F,...q},sizes:H.sizes,srcSet:H.srcSet,src:x||H.src},meta:{unoptimized:p,priority:f,placeholder:z,fill:v}}}},8321:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return u}});let o=r(9920),n=r(1452),l=r(7437),i=n._(r(2265)),a=o._(r(5960)),s=r(2901),d=r(6590),c=r(687);function u(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2301);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,o={};return n=>{let l=!0,i=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){i=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?l=!1:t.add(n.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=n.props[t],r=o[t]||new Set;("name"!==t||!i)&&r.has(e)?l=!1:(r.add(e),o[t]=r)}}}}return l}}()).reverse().map((e,t)=>{let o=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:o})})}let g=function(e){let{children:t}=e,r=(0,i.useContext)(s.AmpStateContext),o=(0,i.useContext)(d.HeadManagerContext);return(0,l.jsx)(a.default,{reduceComponentsToState:m,headManager:o,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function r(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:l,objectFit:i}=e,a=o?40*o:t,s=n?40*n:r,d=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3938:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let o=r(9920)._(r(2265)),n=r(7103),l=o.default.createContext(n.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return o}});let r=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5601:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let o=r(9920),n=r(497),l=r(8173),i=o._(r(1241));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/maritime-flag-quiz/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=l.Image},1241:function(e,t){function r(e){let{config:t,src:r,width:o,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+o+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),r.__next_img_default=!0;let o=r},291:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return o}});let o=r(9920)._(r(2265)).default.createContext(null)},5960:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let o=r(2265),n="undefined"==typeof window,l=n?()=>{}:o.useLayoutEffect,i=n?()=>{}:o.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let n=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}if(n){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),a()}return l(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),l(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2974:function(e,t,r){r.d(t,{g7:function(){return l}});var o=r(2265),n=r(7437),l=o.forwardRef((e,t)=>{let{children:r,...l}=e,a=o.Children.toArray(r),d=a.find(s);if(d){let e=d.props.children,r=a.map(t=>t!==d?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,n.jsx)(i,{...l,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,r):null})}return(0,n.jsx)(i,{...l,ref:t,children:r})});l.displayName="Slot";var i=o.forwardRef((e,t)=>{let{children:r,...n}=e;if(o.isValidElement(r)){let e,l;let i=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref;return o.cloneElement(r,{...function(e,t){let r={...t};for(let o in t){let n=e[o],l=t[o];/^on[A-Z]/.test(o)?n&&l?r[o]=(...e)=>{l(...e),n(...e)}:n&&(r[o]=n):"style"===o?r[o]={...n,...l}:"className"===o&&(r[o]=[n,l].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,i):i})}return o.Children.count(r)>1?o.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});function s(e){return o.isValidElement(e)&&e.type===a}},2218:function(e,t,r){r.d(t,{j:function(){return l}});let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(o&&(o+=" "),o+=t);return o},l=(e,t)=>r=>{var l;if((null==t?void 0:t.variants)==null)return n(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:a}=t,s=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],n=null==a?void 0:a[e];if(null===t)return null;let l=o(t)||o(n);return i[e][l]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return n(e,s,null==t?void 0:null===(l=t.compoundVariants)||void 0===l?void 0:l.reduce((e,t)=>{let{class:r,className:o,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...d}[t]):({...a,...d})[t]===r})?[...e,r,o]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},4839:function(e,t,r){r.d(t,{W:function(){return o}});function o(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=t);return o}},6164:function(e,t,r){r.d(t,{m6:function(){return J}});let o=e=>{let t=a(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),n(r,t)||i(e)},getConflictingClassGroupIds:(e,t)=>{let n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}},n=(e,t)=>{if(0===e.length)return t.classGroupId;let r=e[0],o=t.nextPart.get(r),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let i=e.join("-");return t.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let t=l.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},a=e=>{let{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),r).forEach(([e,r])=>{s(r,o,e,t)}),o},s=(e,t,r,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?t:d(t,e)).classGroupId=r;return}if("function"==typeof e){if(c(e)){s(e(o),t,r,o);return}t.validators.push({validator:e,classGroupId:r});return}Object.entries(e).forEach(([e,n])=>{s(n,d(t,e),r,o)})})},d=(e,t)=>{let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r},c=e=>e.isThemeGetter,u=(e,t)=>t?e.map(([e,r])=>[e,r.map(e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[t+e,r])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map,n=(n,l)=>{r.set(n,l),++t>e&&(t=0,o=r,r=new Map)};return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}},f=e=>{let{separator:t,experimentalParseClassName:r}=e,o=1===t.length,n=t[0],l=t.length,i=e=>{let r;let i=[],a=0,s=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===a){if(c===n&&(o||e.slice(d,d+l)===t)){i.push(e.slice(s,d)),s=d+l;continue}if("/"===c){r=d;continue}}"["===c?a++:"]"===c&&a--}let d=0===i.length?e:e.substring(s),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:i,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:r&&r>s?r-s:void 0}};return r?e=>r({className:e,parseClassName:i}):i},m=e=>{if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t},g=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),b=/\s+/,h=(e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,l=[],i=e.trim().split(b),a="";for(let e=i.length-1;e>=0;e-=1){let t=i[e],{modifiers:s,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=r(t),p=!!u,f=o(p?c.substring(0,u):c);if(!f){if(!p||!(f=o(c))){a=t+(a.length>0?" "+a:a);continue}p=!1}let g=m(s).join(":"),b=d?g+"!":g,h=b+f;if(l.includes(h))continue;l.push(h);let y=n(f,p);for(let e=0;e<y.length;++e){let t=y[e];l.push(b+t)}a=t+(a.length>0?" "+a:a)}return a};function y(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=v(e))&&(o&&(o+=" "),o+=t);return o}let v=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=v(e[o]))&&(r&&(r+=" "),r+=t);return r},w=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,j=new Set(["px","full","screen"]),z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,S=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,P=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,O=e=>M(e)||j.has(e)||k.test(e),E=e=>B(e,"length",F),M=e=>!!e&&!Number.isNaN(Number(e)),I=e=>B(e,"number",M),R=e=>!!e&&Number.isInteger(Number(e)),A=e=>e.endsWith("%")&&M(e.slice(0,-1)),N=e=>x.test(e),G=e=>z.test(e),D=new Set(["length","size","percentage"]),L=e=>B(e,D,V),W=e=>B(e,"position",V),T=new Set(["image","url"]),$=e=>B(e,T,H),U=e=>B(e,"",q),Z=()=>!0,B=(e,t,r)=>{let o=x.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))},F=e=>_.test(e)&&!C.test(e),V=()=>!1,q=e=>S.test(e),H=e=>P.test(e),J=function(e,...t){let r,o,n;let l=function(a){return o=(r=g(t.reduce((e,t)=>t(e),e()))).cache.get,n=r.cache.set,l=i,i(a)};function i(e){let t=o(e);if(t)return t;let l=h(e,r);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=w("colors"),t=w("spacing"),r=w("blur"),o=w("brightness"),n=w("borderColor"),l=w("borderRadius"),i=w("borderSpacing"),a=w("borderWidth"),s=w("contrast"),d=w("grayscale"),c=w("hueRotate"),u=w("invert"),p=w("gap"),f=w("gradientColorStops"),m=w("gradientColorStopPositions"),g=w("inset"),b=w("margin"),h=w("opacity"),y=w("padding"),v=w("saturate"),x=w("scale"),k=w("sepia"),j=w("skew"),z=w("space"),_=w("translate"),C=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",N,t],D=()=>[N,t],T=()=>["",O,E],B=()=>["auto",M,N],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",N],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>[M,N];return{cacheSize:500,separator:":",theme:{colors:[Z],spacing:[O,E],blur:["none","",G,N],brightness:Y(),borderColor:[e],borderRadius:["none","","full",G,N],borderSpacing:D(),borderWidth:T(),contrast:Y(),grayscale:J(),hueRotate:Y(),invert:J(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[A,E],inset:P(),margin:P(),opacity:Y(),padding:D(),saturate:Y(),scale:Y(),sepia:J(),skew:Y(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",N]}],container:["container"],columns:[{columns:[G]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),N]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",R,N]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",N]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",R,N]}],"grid-cols":[{"grid-cols":[Z]}],"col-start-end":[{col:["auto",{span:["full",R,N]},N]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[Z]}],"row-start-end":[{row:["auto",{span:[R,N]},N]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",N]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",N]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",N,t]}],"min-w":[{"min-w":[N,t,"min","max","fit"]}],"max-w":[{"max-w":[N,t,"none","full","min","max","fit","prose",{screen:[G]},G]}],h:[{h:[N,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[N,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[N,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[N,t,"auto","min","max","fit"]}],"font-size":[{text:["base",G,E]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[Z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",N]}],"line-clamp":[{"line-clamp":["none",M,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",O,N]}],"list-image":[{"list-image":["none",N]}],"list-style-type":[{list:["none","disc","decimal",N]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",O,E]}],"underline-offset":[{"underline-offset":["auto",O,N]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",N]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",N]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),W]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",L]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:V()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[O,N]}],"outline-w":[{outline:[O,E]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:T()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[O,E]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",G,U]}],"shadow-color":[{shadow:[Z]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",G,N]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",N]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",N]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",N]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[R,N]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",N]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",N]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",N]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[O,E,I]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);
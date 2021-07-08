(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[131],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return g}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(i),g=n,f=m["".concat(c,".").concat(g)]||m[g]||d[g]||o;return i?r.createElement(f,a(a({ref:t},u),{},{components:i})):r.createElement(f,a({ref:t},u))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4491:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=i(2122),n=i(9756),o=(i(7294),i(3905)),a=["components"],l={id:"tutorials-mining-tokens-check-eligibility",title:"Check Eligibility",sidebar_label:"Check Eligibility"},c=void 0,s={unversionedId:"tutorials/tutorials-mining-tokens-check-eligibility",id:"tutorials/tutorials-mining-tokens-check-eligibility",isDocsHomePage:!1,title:"Check Eligibility",description:"How do off-chain workers and oracles gather samples to determine your eligibility for Token Mining rewards?",source:"@site/docs/tutorials/tutorials-mining-tokens-check-eligibility.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-mining-tokens-check-eligibility",permalink:"/docs/tutorials/tutorials-mining-tokens-check-eligibility",editUrl:"https://github.com/DataHighway-DHX/documentation/docs/tutorials/tutorials-mining-tokens-check-eligibility.md",version:"current",frontMatter:{id:"tutorials-mining-tokens-check-eligibility",title:"Check Eligibility",sidebar_label:"Check Eligibility"},sidebar:"tutorialSidebar",previous:{title:"Setup Hardware Mining",permalink:"/docs/tutorials/tutorials-mining-hardware-setup"},next:{title:"Claim Rewards",permalink:"/docs/tutorials/tutorials-mining-tokens-claim-rewards"}},u=[{value:"How do off-chain workers and oracles gather samples to determine your eligibility for Token Mining rewards?",id:"how-do-off-chain-workers-and-oracles-gather-samples-to-determine-your-eligibility-for-token-mining-rewards",children:[]},{value:"How do you check your eligibility to claim Token Mining rewards?",id:"how-do-you-check-your-eligibility-to-claim-token-mining-rewards",children:[]}],d={toc:u};function m(e){var t=e.components,i=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-do-off-chain-workers-and-oracles-gather-samples-to-determine-your-eligibility-for-token-mining-rewards"},"How do off-chain workers and oracles gather samples to determine your eligibility for Token Mining rewards?"),(0,o.kt)("p",null,"Off-chain workers and oracles will take a random number of samples to determine the extent that the tokens have been remained online during the commitment period of time. "),(0,o.kt)("h2",{id:"how-do-you-check-your-eligibility-to-claim-token-mining-rewards"},"How do you check your eligibility to claim Token Mining rewards?"),(0,o.kt)("p",null,"Connect to the DataHighway using Settings in the Polkadot.js Apps UI and check the Chain State of the Token Mining Eligibility Runtime Module."))}m.isMDXComponent=!0}}]);
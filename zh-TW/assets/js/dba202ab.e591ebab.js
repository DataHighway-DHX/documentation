(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[125],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return h}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(a),h=o,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||n;return a?r.createElement(d,i(i({ref:t},l),{},{components:a})):r.createElement(d,i({ref:t},l))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4598:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=a(2122),o=a(9756),n=(a(7294),a(3905)),i=["components"],p={id:"tutorials-mining-tokens-topup-supernodes",title:"Topup Supernodes",sidebar_label:"Topup Supernodes"},s=void 0,u={unversionedId:"tutorials/tutorials-mining-tokens-topup-supernodes",id:"tutorials/tutorials-mining-tokens-topup-supernodes",isDocsHomePage:!1,title:"Topup Supernodes",description:"How community may propose to transfer DHX tokens from Treasury to a Multisig Proxy account for transfer to topup a Supernode",source:"@site/docs/tutorials/tutorials-mining-tokens-topup-supernodes.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-mining-tokens-topup-supernodes",permalink:"/zh-TW/docs/tutorials/tutorials-mining-tokens-topup-supernodes",editUrl:"https://github.com/DataHighway-DHX/documentation/edit/master/docs/tutorials/tutorials-mining-tokens-topup-supernodes.md",version:"current",frontMatter:{id:"tutorials-mining-tokens-topup-supernodes",title:"Topup Supernodes",sidebar_label:"Topup Supernodes"},sidebar:"tutorialSidebar",previous:{title:"Create Account",permalink:"/zh-TW/docs/tutorials/tutorials-accounts-create-account"},next:{title:"Setup Rococo Parachain Testnet (Spreehafen)",permalink:"/zh-TW/docs/tutorials/tutorials-nodes-polkadot-launch-datahighway-rococo-local"}},l=[{value:"How community may propose to transfer DHX tokens from Treasury to a Multisig Proxy account for transfer to topup a Supernode",id:"how-community-may-propose-to-transfer-dhx-tokens-from-treasury-to-a-multisig-proxy-account-for-transfer-to-topup-a-supernode",children:[{value:"Step 1: Check the DataHighway runtime parameters are reasonable values and modify them if necessary",id:"step-1-check-the-datahighway-runtime-parameters-are-reasonable-values-and-modify-them-if-necessary",children:[]},{value:"Step 2: Submit a Preimage Hash of the Proposal to transfer Treasury funds to the Multisig Proxy account",id:"step-2-submit-a-preimage-hash-of-the-proposal-to-transfer-treasury-funds-to-the-multisig-proxy-account",children:[]},{value:"Step 3: Submit the Proposal",id:"step-3-submit-the-proposal",children:[]},{value:"Step 4: Seconding the Proposal",id:"step-4-seconding-the-proposal",children:[]},{value:"Step 5: Voting on the Proposal",id:"step-5-voting-on-the-proposal",children:[]},{value:"Step 6: Transfer from the Multisig Proxy account to the Supernode",id:"step-6-transfer-from-the-multisig-proxy-account-to-the-supernode",children:[]},{value:"Reference",id:"reference",children:[]}]}],c={toc:l};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-community-may-propose-to-transfer-dhx-tokens-from-treasury-to-a-multisig-proxy-account-for-transfer-to-topup-a-supernode"},"How community may propose to transfer DHX tokens from Treasury to a Multisig Proxy account for transfer to topup a Supernode"),(0,n.kt)("h3",{id:"step-1-check-the-datahighway-runtime-parameters-are-reasonable-values-and-modify-them-if-necessary"},"Step 1: Check the DataHighway runtime parameters are reasonable values and modify them if necessary"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important:")," It may be necessary to use the democracy runtime module to propose to modify the current runtime configuration so that the Minimum Deposit, Launch Period, and Voting Period are reasonable values. If they were set with unreasonable values at genesis, then it may be necessary to modify them using Sudo. "),(0,n.kt)("h3",{id:"step-2-submit-a-preimage-hash-of-the-proposal-to-transfer-treasury-funds-to-the-multisig-proxy-account"},"Step 2: Submit a Preimage Hash of the Proposal to transfer Treasury funds to the Multisig Proxy account"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add the Multisig Proxy account and the DHX DAO Unlocked Reserves (Treasury) account (4LTFqiD6H6g8a7ur9WH4RxhWx2givWfK7o5EDed3ai1nYTvk) to your ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://tanganika.datahighway.com#/addresses"},"Address book")," on the Tanganika Network"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note: The Treasury account for each chain is specified in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/DataHighway-DHX/DataHighway-Parachain/blob/main/node/src/chain_spec.rs"},"chain_spec.rs")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("em",{parentName:"p"},"Democracy")," page ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://tanganika.datahighway.com#/democracy"},"https://polkadot.js.org/apps/?rpc=wss://tanganika.datahighway.com#/democracy"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The first step is to submit a preimage of the proposal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("em",{parentName:"p"},"Submit preimage"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose for ",(0,n.kt)("em",{parentName:"p"},"send_from_account")," an account (with sufficient balance to pay any fees)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose for ",(0,n.kt)("em",{parentName:"p"},"propose")," an extrinsic ",(0,n.kt)("em",{parentName:"p"},"balances")," and select ",(0,n.kt)("em",{parentName:"p"},"forceTransfer")," as function")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose for ",(0,n.kt)("em",{parentName:"p"},"source")," the account of the Treasury (DHX DAO Unlocked Reserves).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose for ",(0,n.kt)("em",{parentName:"p"},"dest")," the account of the Multisig Proxy.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose for ",(0,n.kt)("em",{parentName:"p"},"value")," the value in DHX that you propose to be transferred to the Multisig Proxy that will perform the subsequent transfer to the Supernode account")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copy the preimage hash that represents the proposal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Leave the value for the _weight parameter at the default of 0.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click "Submit Transaction" and then "Sign and Submit".'))),(0,n.kt)("h3",{id:"step-3-submit-the-proposal"},"Step 3: Submit the Proposal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the account from which you want to submit the proposal (with sufficient balance to pay any fees)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter the preimage hash related to the proposal (copied in the previous step)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set the locked balance. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("em",{parentName:"p"},"Submit proposal")," button and sign the transaction"))),(0,n.kt)("h3",{id:"step-4-seconding-the-proposal"},"Step 4: Seconding the Proposal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("em",{parentName:"p"},"Second")," button associated with the Proposal from the previous steps.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose an account to second the proposal with the required deposit."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note: The ",(0,n.kt)("inlineCode",{parentName:"li"},"MinimumDeposit")," is specified in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/DataHighway-DHX/DataHighway-Parachain/blob/main/runtime/src/lib.rs#L941"},'DataHighway\'s runtime configuration under "democracy"')))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click "Second" to broadcast the transaction.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Repeat the above steps with other accounts that wish to second the proposal until it is tabled (brought to a referendum vote at an upcoming launch period).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wait until the ",(0,n.kt)("inlineCode",{parentName:"p"},"LaunchPeriod")," ends, which is specified in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/DataHighway-DHX/DataHighway-Parachain/blob/main/runtime/src/lib.rs#L937"},'DataHighway\'s runtime configuration under "democracy"')))),(0,n.kt)("h3",{id:"step-5-voting-on-the-proposal"},"Step 5: Voting on the Proposal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("em",{parentName:"p"},"Democracy")," page ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://tanganika.datahighway.com#/democracy"},"https://polkadot.js.org/apps/?rpc=wss://tanganika.datahighway.com#/democracy"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Go to the "Referenda" column')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click the "Vote" button to cast a vote for or against the proposal and optionally lock up tokens longer to increase the weight of the vote.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click the "Vote" button to submit the transaction')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Repeat the above steps with other accounts that wish to vote on the referenda.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wait until the ",(0,n.kt)("inlineCode",{parentName:"p"},"VotingPeriod")," ends, which is specified in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/DataHighway-DHX/DataHighway-Parachain/blob/main/runtime/src/lib.rs#L938"},'DataHighway\'s runtime configuration under "democracy"')))),(0,n.kt)("h3",{id:"step-6-transfer-from-the-multisig-proxy-account-to-the-supernode"},"Step 6: Transfer from the Multisig Proxy account to the Supernode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check that the recipient Supernode is able to receive and interpret transactions received from a Multisig account.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Multisig Proxy account signaturies create a transfer to topup the Supernode with the DHX tokens that it received as a result of the referendum passing from approval voting by the community."))),(0,n.kt)("h3",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/maintain-guides-democracy/#proposing-an-action"},"Participating in Democracy on Kusama and Polkadot"))))}m.isMDXComponent=!0}}]);
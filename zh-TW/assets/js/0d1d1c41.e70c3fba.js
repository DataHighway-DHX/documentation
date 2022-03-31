(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[518],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||h[u]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2790:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),l=["components"],i={id:"tutorials-node-hardspoon",title:"Create Hard Spoon",sidebar_label:"Create Hard Spoon"},p=void 0,s={unversionedId:"archives/tutorials-node-hardspoon",id:"archives/tutorials-node-hardspoon",isDocsHomePage:!1,title:"Create Hard Spoon",description:"How to create a Hard Spoon",source:"@site/docs/archives/tutorials-nodes-hardspoon.md",sourceDirName:"archives",slug:"/archives/tutorials-node-hardspoon",permalink:"/zh-TW/docs/archives/tutorials-node-hardspoon",editUrl:"https://github.com/DataHighway-DHX/documentation/edit/master/docs/archives/tutorials-nodes-hardspoon.md",version:"current",frontMatter:{id:"tutorials-node-hardspoon",title:"Create Hard Spoon",sidebar_label:"Create Hard Spoon"}},c=[{value:"How to create a Hard Spoon",id:"how-to-create-a-hard-spoon",children:[{value:'ChainSpecUtils Script <a id="chain-spec-utils"></a>',id:"chainspecutils-script",children:[]},{value:'Fork-Off-RelayChain Approach <a id="fork-off-relaychain"></a>',id:"fork-off-relaychain-approach",children:[]}]}],h={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-create-a-hard-spoon"},"How to create a Hard Spoon"),(0,o.kt)("h4",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#chain-spec-utils"},"ChainSpecUtils Script")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#fork-off-relaychain"},"Fork-Off-RelayChain Approach"))),(0,o.kt)("h3",{id:"chainspecutils-script"},"ChainSpecUtils Script ",(0,o.kt)("a",{id:"chain-spec-utils"})),(0,o.kt)("h4",{id:"create-forked-chain-spec"},"Create Forked Chain Spec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup local files ready to make local copy of script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git init; git add .; git commit -m "init commit"; touch .gitignore\nmkdir hardspoon && cd hardspoon\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy to local folder the contents of modified hardspoon script with changes shown in this PR ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ltfschoen/phala-blockchain/pull/1"},"https://github.com/ltfschoen/phala-blockchain/pull/1"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -O chainSpecUtils.js https://raw.githubusercontent.com/ltfschoen/phala-blockchain/6ed6eff054c0c71ca1c95d45e60da3e035ee25ad/scripts/js/src/bin/chainSpecUtils.js\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy original utils from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Phala-Network/phala-blockchain/blob/master/scripts/js/src/utils/common.js"},"https://github.com/Phala-Network/phala-blockchain/blob/master/scripts/js/src/utils/common.js"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir utils && cd utils\nwget -O common.js https://raw.githubusercontent.com/Phala-Network/phala-blockchain/master/scripts/js/src/utils/common.js\ncd ..\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Stop "live" validator on remote server for less than one epoch if using Babe and export its state to .json file:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," /home/deployer/node/target/release/datahighway export-state --base-path /home/deployer/chain-base/node-0 --chain /home/deployer/chain_def_westlake.json --keep-blocks 4827957 --log -l=debug --pruning 'archive' --tracing-receiver Log --tracing-targets debug -- 4827957 > /home/deployer/backup/exported_state_keep_blocks_4827957.json\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Restart the "live" validator again'),(0,o.kt)("li",{parentName:"ul"},"Copy the exported state .json file to local machine")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scp -J username@ip_address_jump username@ip_address:/home/deployer/backup/exported_state_keep_blocks_4827957.json .\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Move it into orig-spec/ folder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mv exported_state_keep_blocks_4827957.json orig-spec/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install compatible dependencies including the latest Node.js version")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn init\nnvm use v16.3.0\nyarn add @polkadot/util-crypto bn.js commander\nyarn install\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the following start script to package.json:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"scripts": {\n  "start": "node chainSpecUtils.js orig-spec/exported_state_keep_blocks_4827957.json"\n},\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the script to generate an fork.json file in the current directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn run start\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the fork.json file to the 1st validator on a remote server")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scp -J username@ip_address_jump fork.json username@ip_address:/home/username\n")),(0,o.kt)("h4",{id:"run-forked-chain-spec"},"Run Forked Chain Spec ",(0,o.kt)("a",{id:"run-fork"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the old chain keystore into the ",(0,o.kt)("strong",{parentName:"li"},"new")," chain keystore directory")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cp /home/deployer/chain-base/node-0/chains/westlake/keystore /home/deployer/chain-base/node-0-fork/chains/local-fork/keystore/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check that you have checked out the correct Git commit before running the binary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Change the base path to be used for the ",(0,o.kt)("strong",{parentName:"p"},"new")," chain so it is different from the old chain (i.e. /home/deployer/chain-base/node-fork) and so the old database is not overwritten if using the same server.\n",(0,o.kt)("strong",{parentName:"p"},"Important Note"),": Remove ",(0,o.kt)("strong",{parentName:"p"},"new")," database if restart with a different chain specification .json file"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/home/deployer/node/target/release/datahighway --validator \\\n  --base-path /home/deployer/chain-base/node-fork \\\n  --node-key <INSERT_NODE_KEY> \\\n  --chain /home/deployer/fork.json \\\n  --name \"DataHighway Westlake Mainnet - Fork - Validator 1\" \\\n  --port 30777\n  --pruning 'archive'\n  --rpc-port 9966\n  --ws-port 9977\n  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \\\n  --unsafe-ws-external \\\n  --unsafe-rpc-external \\\n  --rpc-cors=all \\\n  --rpc-methods=Unsafe \\\n  --keep-blocks 4827957 \\\n  --keystore-path /home/deployer/chain-base/node-fork/chains/local-fork/keystore\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Review the logs and check that the chain specification .json file has the same bootnode address as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Local node identity")," that is fork in the logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy the fork.json file to the 2nd, 3rd, 4th, and 5th validator remote servers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Repeat the process of copying the old keystore to the new keystore directory, and use a different base path than was used for the old chain for the 2nd, 3rd, 4th, and 5th validator remote servers, and then run each of them.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check logs to see if they are generating and finalizing blocks"))),(0,o.kt)("h3",{id:"fork-off-relaychain-approach"},"Fork-Off-RelayChain Approach ",(0,o.kt)("a",{id:"fork-off-relaychain"})),(0,o.kt)("h4",{id:"create-forked-chain-spec-1"},"Create Forked Chain Spec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Following the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Phala-Network/fork-off-relaychain"},"https://github.com/Phala-Network/fork-off-relaychain"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clone the repo on a remote server used for Validator 1 of old chain"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone git@github.com:DataHighway-DHX/fork-off-relaychain.git\ncd fork-off-relaychain\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install dependencies")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install npm\nnpm install\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy files into relevant parts of data/ directory per the instructions")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir ./data\ncp /home/deployer/node/target/release/datahighway ./data\nmv ./data/datahighway ./data/binary\ncp /home/deployer/node/target/release/wbuild/datahighway-runtime/datahighway_runtime.compact.wasm ./data\nmv ./data/datahighway_runtime.compact.wasm ./data/runtime.wasm\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the DataHighway custom types from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/DataHighway-DHX/node/blob/master/custom_types.json"},"https://github.com/DataHighway-DHX/node/blob/master/custom_types.json")," into a schema.json file, then wrap them inside an outer key as shown ",(0,o.kt)("inlineCode",{parentName:"li"},'{ "types": { <YOUR_TYPES> } }'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"touch ./data/schema.json\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run the Validator 1 of the old blockchain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run the fork-off-relaychain script to generate the fork chain spec from it called ./data/fork.json"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTP_RPC_ENDPOINT=http://127.0.0.1:9933 FORK_CHAIN=westlake npm start\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try running development chain using fork.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./data/binary --chain fork.json --alice\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the fork.json file to your local machine ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scp -J username@ip_address_jump username@ip_address:/home/deployer/fork-off-relaychain/data/fork.json .\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then copy the fork.json file to each of the other 2nd, 3rd, 4th, and 5th validators on remote servers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scp -J username@ip_address_jump fork.json username@ip_address:/home/username\nsudo cp /home/username/fork.json /home/deployer/fork.json\n")),(0,o.kt)("h4",{id:"run-forked-chain-spec-1"},"Run Forked Chain Spec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the same steps described in ChainSpecUtils's ",(0,o.kt)("a",{parentName:"li",href:"#run-fork"},"Run Forked Chain Spec")," to run the 1st, 2nd, 3rd, 4th and 5th Validators using this forked chain specification file.")))}d.isMDXComponent=!0}}]);
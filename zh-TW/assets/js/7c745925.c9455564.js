(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[321],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7796:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),l=["components"],i={id:"tutorials-nodes-collators-setup",title:"Setup Collator Node",sidebar_label:"Setup Collator Node"},s=void 0,p={unversionedId:"tutorials/tutorials-nodes-collators-setup",id:"tutorials/tutorials-nodes-collators-setup",isDocsHomePage:!1,title:"Setup Collator Node",description:"How do you setup a Collator Node?",source:"@site/docs/tutorials/tutorials-nodes-collators-setup.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-nodes-collators-setup",permalink:"/zh-TW/docs/tutorials/tutorials-nodes-collators-setup",editUrl:"https://github.com/DataHighway-DHX/documentation/edit/master/docs/tutorials/tutorials-nodes-collators-setup.md",version:"current",frontMatter:{id:"tutorials-nodes-collators-setup",title:"Setup Collator Node",sidebar_label:"Setup Collator Node"},sidebar:"tutorialSidebar",previous:{title:"Setup Rococo Parachain Testnet (Spreehafen)",permalink:"/zh-TW/docs/tutorials/tutorials-nodes-polkadot-launch-datahighway-rococo-local"},next:{title:"Runtime Upgrade",permalink:"/zh-TW/docs/tutorials/tutorials-runtime-upgrade"}},c=[{value:"How do you setup a Collator Node?",id:"how-do-you-setup-a-collator-node",children:[{value:"Provisioning a server",id:"provisioning-a-server",children:[]},{value:"Installing DataHighway and setting it up as a system service",id:"installing-datahighway-and-setting-it-up-as-a-system-service",children:[]},{value:"<strong>NOTE</strong>: If you&#39;re running a v3.6.0 node and want to upgrade to v3.7.1, please be sure to check the GRANDPA ISSUE.",id:"note-if-youre-running-a-v360-node-and-want-to-upgrade-to-v371-please-be-sure-to-check-the-grandpa-issue",children:[]},{value:"Set up the node as a system service.",id:"set-up-the-node-as-a-system-service",children:[]},{value:"Set Session Keys",id:"set-session-keys",children:[]},{value:"Register as a Collator candidate",id:"register-as-a-collator-candidate",children:[]}]}],u={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-do-you-setup-a-collator-node"},"How do you setup a Collator Node?"),(0,o.kt)("p",null,"This guide covers how to set up a DataHighway Collator Node on the Tanganika Network."),(0,o.kt)("h3",{id:"provisioning-a-server"},"Provisioning a server"),(0,o.kt)("p",null,"Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc."),(0,o.kt)("p",null,"We recommend a node with at least 4GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions."),(0,o.kt)("p",null,"SSH into the server."),(0,o.kt)("h3",{id:"installing-datahighway-and-setting-it-up-as-a-system-service"},"Installing DataHighway and setting it up as a system service"),(0,o.kt)("h4",{id:"building-the-binary-from-source"},"Building the binary from source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install -y gcc libc6-dev\napt install -y cmake pkg-config libssl-dev git clang libclang-dev\n")),(0,o.kt)("p",null,"Prefetch SSH publickeys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keyscan -H github.com >> ~/.ssh/known_hosts\n")),(0,o.kt)("p",null,"Install rustup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://sh.rustup.rs -sSf | sh -s -- -y\nsource $HOME/.cargo/env\nexport PATH=$HOME/.cargo/bin:$PATH\n")),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DataHighway-DHX/DataHighway-Parachain"},"DataHighway-DHX/DataHighway-Parachain")," repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/DataHighway-DHX/DataHighway-Parachain\ncd DataHighway-Parachain\n")),(0,o.kt)("p",null,"Checkout to latest release tag. At the time of updating this document, latest release is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DataHighway-DHX/DataHighway-Parachain/releases/tag/v3.7.1"},(0,o.kt)("inlineCode",{parentName:"a"},"3.7.1"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout v3.7.1\n")),(0,o.kt)("p",null,"Build packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://getsubstrate.io -sSf | bash -s -- --fast && \\\n./scripts/init.sh\n")),(0,o.kt)("h4",{id:"download-a-prebuilt-binary"},"Download a prebuilt binary"),(0,o.kt)("p",null,"Instead of building from source, you can download a prebuilt binary from the official DHX Parachain Github release. To get the prebuilt binary with the chainspec definitions:"),(0,o.kt)("p",null,"Create a datahighway folder in opt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir /opt/datahighway\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Datahighway binary")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/DataHighway-DHX/DataHighway-Parachain/releases/download/v3.7.1/datahighway-collator -O /opt/datahighway/datahighway-collator-v3.7.1\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kusama relay chainspec file ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://github.com/DataHighway-DHX/DataHighway-Parachain/releases/download/v3.7.1/kusama.json -O /opt/datahighway/kusama.json\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Datahighway chainspec file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/DataHighway-DHX/DataHighway-Parachain/v3.6.0/res/kusama/kusama-parachain-raw.json -O /opt/datahighway/kusama-parachain-raw.json\n")),(0,o.kt)("h3",{id:"note-if-youre-running-a-v360-node-and-want-to-upgrade-to-v371-please-be-sure-to-check-the-grandpa-issue"},(0,o.kt)("strong",{parentName:"h3"},"NOTE"),": If you're running a v3.6.0 node and want to upgrade to v3.7.1, please be sure to check the ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/DataHighway-DHX/DataHighway-Parachain/wiki/%5BWIP%5D-2022-11-12-GRANDPA-ISSUE"},"GRANDPA ISSUE"),"."),(0,o.kt)("h3",{id:"set-up-the-node-as-a-system-service"},"Set up the node as a system service."),(0,o.kt)("p",null,"To do this, navigate into the root directory of the DataHighway-DHX/DataHighway-Parachain repo and execute the following to create the service configuration file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": If any command throws something like ",(0,o.kt)("inlineCode",{parentName:"p"},"Permission denied"),", run it with ",(0,o.kt)("em",{parentName:"p"},"sudo"),"."),(0,o.kt)("p",null,"Create a new script at ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/datahighway/start.sh")," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nNAME="Datahighway_mainnet_server_3"\nRELAY_SPEC="/opt/datahighway/kusama.json"\nPARA_SPEC="/opt/datahighway/kusama-parachain-raw.json"\nCOLLATOR_PATH="/opt/datahighway/datahighway-collator-v3.7.1"\nRELAY_PORT="40444"\nRELAY_RPC_PORT="7676"\nRELAY_WS_PORT="8787"\nPARA_RPC_PORT="7677"\nPARA_WS_PORT="8788"\nPARA_PORT="50555"\nPARA_DATABASE_BASE="~/.chains/datahighway-mainnet/para"\nRELAY_DATABASE_BASE="~/.chains/datahighway-mainnet/relay/"\nPARA_BOOTNODE="/ip4/3.127.123.230/tcp/40333/p2p/12D3KooWHJ9NwkCNJ8BFD4BptJybQQSyBJm1mtr3XRpfqWR5vjaj"\n\nCMD="$COLLATOR_PATH --collator \\\n    --chain $PARA_SPEC \\\n    --force-authoring \\\n    --unsafe-ws-external \\\n    --unsafe-rpc-external \\\n    --rpc-cors=all \\\n    --rpc-methods=Unsafe \\\n    --name "\\"$NAME\\"" \\\n    --port $PARA_PORT \\\n    --rpc-port $PARA_RPC_PORT \\\n    --ws-port $PARA_WS_PORT \\\n    --bootnodes $PARA_BOOTNODE \\\n    --base-path $PARA_DATABASE_BASE \\\n    -- \\\n    --chain $RELAY_SPEC\n    --execution wasm \\\n    --port $RELAY_PORT \\\n    --rpc-port $RELAY_RPC_PORT \\\n    --ws-port $RELAY_WS_PORT \\\n    --base-path $RELAY_DATABASE_BASE \\\n"\n\necho "-----------------------"\necho "Executing: $CMD"\necho "----------------------"\n\n$CMD\n')),(0,o.kt)("p",null,"Notes on the parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NAME - name of your node"),(0,o.kt)("li",{parentName:"ul"},"RELAY_SPEC - chain spec file of the relay chain (download from the Github Release page)"),(0,o.kt)("li",{parentName:"ul"},"PARA_SPEC - chain spec file of the parachain (download from the Github Release page)"),(0,o.kt)("li",{parentName:"ul"},"PARA_DATABASE_BASE - path to the parachain database"),(0,o.kt)("li",{parentName:"ul"},"RELAY_DATABASE_BASE - path to the relay database")),(0,o.kt)("p",null,"Grant execute permissions to the start script and collator executable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x /opt/datahighway/start.sh\nchmod +x /opt/datahighway/datahighway-collator-v3.7.1\n")),(0,o.kt)("p",null,"To start the collator as a service, run the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  echo '[Unit]'\n  echo 'Description=DataHighway'\n  echo '[Service]'\n  echo 'Type=simple'\n  echo 'ExecStart=/opt/datahighway/start.sh'\n  echo '[Install]'\n  echo 'WantedBy=multi-user.target'\n} > /etc/systemd/system/datahighway.service\n")),(0,o.kt)("p",null,"Double check that the config has been written to /etc/systemd/system/datahighway.service correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat /etc/systemd/system/datahighway.service\n")),(0,o.kt)("p",null,"Each time you change the service file you need to reload it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\n")),(0,o.kt)("p",null,"Then enable the service so it runs on startup, and then try to start it now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable datahighway\nsystemctl start datahighway\n")),(0,o.kt)("p",null,"Check the status of the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status datahighway\n")),(0,o.kt)("p",null,"You should see the Tanganika parachain collator node connecting to Kusama relay chain and other collator node peers and syncing the latest blocks. If you like to follow the log output, you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u datahighway.service -f\n")),(0,o.kt)("p",null,"Generate and add your Aura session keys (author ID) for your collator node to sign blocks with on Tanganika:"),(0,o.kt)("p",null,"From ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/datahighway")," directory you can run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:7677 -H "Content-Type:application/json;charset=utf-8" -d   \'{\n    "jsonrpc":"2.0",\n    "id":1,\n    "method":"author_insertKey",\n    "params": ["aura", "$suri", "$pkey"]\n  }\'\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"$suri")," with your node key secret word, eg: ",(0,o.kt)("inlineCode",{parentName:"p"},"same jelly ceiling beauty tunnel delay exile science three winner balance minute")),(0,o.kt)("p",null,"And replace ",(0,o.kt)("inlineCode",{parentName:"p"},"$pkey")," with the public key generated from ",(0,o.kt)("inlineCode",{parentName:"p"},"$suri"),", eg: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x6849bcd876d48609c6d38a6511f53873d571aaece8a73923c1488d496d3f2510")),(0,o.kt)("h3",{id:"set-session-keys"},"Set Session Keys"),(0,o.kt)("p",null,"DataHighway is using ",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/cumulus/pallet_collator_selection/index.html"},"Collator Selection")," pallet for registering collators."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer"},"Tanganika Polkadot.js portal"),": ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Developer > Extrinsic"))),(0,o.kt)("li",{parentName:"ol"},"Select your ",(0,o.kt)("em",{parentName:"li"},"collator account")," and extrinsic type: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"session / setKeys"))),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"session keys"))," and set proof to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"0x00"))),(0,o.kt)("li",{parentName:"ol"},"Submit the transaction.")),(0,o.kt)("h3",{id:"register-as-a-collator-candidate"},"Register as a Collator candidate"),(0,o.kt)("p",null,"To start collating, you need to have 10 DHX tokens "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer"},"Tanganika Polkadot.js portal"),": ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Developer > Extrinsic")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your ",(0,o.kt)("em",{parentName:"p"},"collator account")," and extrinsic type: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"parachainStaking / joinAsCandidate")),". Provide the amount of GIANT you want to stake. This should be in full denomation, For example if you want to stake 50 GIANT, enter 50000000000000000000")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit the transaction."))),(0,o.kt)("p",null,"Onboarding takes place at ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"n+1"))," session."))}h.isMDXComponent=!0}}]);
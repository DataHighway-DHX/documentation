(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[5706],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2502:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=["components"],i={id:"tutorials-nodes-validator-setup",title:"Setup Validator Node",sidebar_label:"Setup Validator Node"},l=void 0,u={unversionedId:"tutorials/tutorials-nodes-validator-setup",id:"tutorials/tutorials-nodes-validator-setup",isDocsHomePage:!1,title:"Setup Validator Node",description:"How do you setup a Validator Node?",source:"@site/docs/tutorials/tutorials-nodes-validator-setup.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-nodes-validator-setup",permalink:"/zh-CN/docs/tutorials/tutorials-nodes-validator-setup",editUrl:"https://github.com/DataHighway-DHX/documentation/docs/tutorials/tutorials-nodes-validator-setup.md",version:"current",frontMatter:{id:"tutorials-nodes-validator-setup",title:"Setup Validator Node",sidebar_label:"Setup Validator Node"},sidebar:"tutorialSidebar",previous:{title:"Setup Full Node",permalink:"/zh-CN/docs/tutorials/tutorials-nodes-full-node-setup"},next:{title:"Runtime Upgrade",permalink:"/zh-CN/docs/tutorials/tutorials-runtime-upgrade"}},c=[{value:"How do you setup a Validator Node?",id:"how-do-you-setup-a-validator-node",children:[{value:"Provisioning a server",id:"provisioning-a-server",children:[]},{value:"Installing DataHighway and setting it up as a system service",id:"installing-datahighway-and-setting-it-up-as-a-system-service",children:[]},{value:"Set up the node as a system service.",id:"set-up-the-node-as-a-system-service",children:[]},{value:"Set Session Keys (WiP)",id:"set-session-keys-wip",children:[]},{value:"Generating the Session Keys",id:"generating-the-session-keys",children:[]},{value:"Submitting the <code>setKeys</code> Transaction",id:"submitting-the-setkeys-transaction",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-you-setup-a-validator-node"},"How do you setup a Validator Node?"),(0,r.kt)("p",null,"This guide covers how to set up a DataHighway Validator Node."),(0,r.kt)("h3",{id:"provisioning-a-server"},"Provisioning a server"),(0,r.kt)("p",null,"Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc."),(0,r.kt)("p",null,"We recommend a node with at least 4GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions."),(0,r.kt)("p",null,"SSH into the server."),(0,r.kt)("h3",{id:"installing-datahighway-and-setting-it-up-as-a-system-service"},"Installing DataHighway and setting it up as a system service"),(0,r.kt)("p",null,"First, clone the DataHighway-DHX/node repo, install any dependencies, and run the required build scripts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install -y gcc libc6-dev\napt install -y cmake pkg-config libssl-dev git clang libclang-dev\n")),(0,r.kt)("p",null,"Prefetch SSH publickeys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keyscan -H github.com >> ~/.ssh/known_hosts\n")),(0,r.kt)("p",null,"Install rustup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://sh.rustup.rs -sSf | sh -s -- -y\nsource $HOME/.cargo/env\nexport PATH=$HOME/.cargo/bin:$PATH\n")),(0,r.kt)("p",null,"Get packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/DataHighway-DHX/node.git\ncd node\n")),(0,r.kt)("p",null,"Build packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://getsubstrate.io -sSf | bash -s -- --fast && \\\n./scripts/init.sh\n")),(0,r.kt)("p",null,"Build runtime code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),(0,r.kt)("h3",{id:"set-up-the-node-as-a-system-service"},"Set up the node as a system service."),(0,r.kt)("p",null,"To do this, navigate into the root directory of the DataHighway-DHX/node repo and execute the following to create the service configuration file and make specific configuration updates for your node as detailed below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  echo '[Unit]'\n  echo 'Description=DataHighway'\n  echo '[Service]'\n  echo 'Type=simple'\n  echo 'WorkingDirectory=/home/foo/node'\n  echo 'ExecStart=/home/foo/node/target/release/datahighway --chain CHAIN_NAME --bootnodes BOOT_NODE --name YOUR_NODE_NAME --validator --unsafe-ws-external --unsafe-rpc-external --rpc-cors=all --rpc-methods=Unsafe --execution=native -lruntime=debug'\n  echo '[Install]'\n  echo 'WantedBy=multi-user.target'\n} > /etc/systemd/system/datahighway.service\n")),(0,r.kt)("p",null,"WorkingDirectory=needs to be the full path to your node project which you cloned. eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/home/foo/node\n")),(0,r.kt)("p",null,"ExecStart=needs to include the full path to the datahighway binary, eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/home/foo/node/target/release/datahighway \n")),(0,r.kt)("p",null,"CHAIN_NAME=Specify the chain name where you want to connect your node to, eg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--chain harbour\n")),(0,r.kt)("p",null,"YOUR_NODE_NAME=Name your node with the --name option which will be shown on telemetry, eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--name MyAwesomeNode\n")),(0,r.kt)("p",null,"BOOT_NODE=specify one of our chain specific bootnodes, its IP and Peer-ID can be provided thru a discord request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--bootnodes /ip4/GET_IP_FROM_DISCORD/tcp/30333/p2p/GET_PEER_ID_FROM_DISCORD\n")),(0,r.kt)("p",null,"Note1: The Startup argument '--rpc-methods=Unsafe' is required to workaround ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/issues/6100"},'"Method not found"')),(0,r.kt)("p",null,"Note2: This will create an DataHighway server that accepts incoming connections from anyone on the internet. If you are using the node as a validator, you should instead remove the unsafe-ws-external flag, so DataHighway does not accept outside connections."),(0,r.kt)("p",null,"Double check that the config has been written to /etc/systemd/system/datahighway.service correctly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat /etc/systemd/system/datahighway.service\n")),(0,r.kt)("p",null,"Then enable the service so it runs on startup, and then try to start it now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable datahighway\nsystemctl start datahighway\n")),(0,r.kt)("p",null,"Check the status of the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status datahighway\n")),(0,r.kt)("p",null,"You should see the node connecting to the network and syncing the latest blocks. If you need to tail the latest output, you can use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u datahighway.service -f\n")),(0,r.kt)("h3",{id:"set-session-keys-wip"},"Set Session Keys (WiP)"),(0,r.kt)("p",null,"Once your node is fully synced, stop the process by pressing Ctrl-C. At your terminal prompt, you\nwill now start running the node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'./target/release/datahighway --validator --name "name on telemetry"\n')),(0,r.kt)("p",null,"You can give your validator any name that you like, but note that others will be able to see it, and\nit will be included in the list of all servers using the same telemetry server. Since numerous\npeople are using telemetry, it is recommended that you choose something likely to be unique.\nThe telemetry URLs are:\n|Environment|Telemetry URL|\n|-----------|-------------|\n|Harbour testnet|",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/DataHighway%20Harbour%20Testnet%7C"},"https://telemetry.polkadot.io/#list/DataHighway%20Harbour%20Testnet|"),"\n|Mainnet||"),(0,r.kt)("h3",{id:"generating-the-session-keys"},"Generating the Session Keys"),(0,r.kt)("p",null,"You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what\nassociates your validator node with your Controller account on DaaHighway."),(0,r.kt)("h4",{id:"option-1-polkadotjs-apps"},"Option 1: PolkadotJS-APPS"),(0,r.kt)("p",null,"You can generate your\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/en/latest/polkadot/learn/keys/#session-key"},"Session keys")," in the\nclient via the apps RPC. If you are doing this, make sure that you have the PolkadotJS-Apps explorer\nattached to your validator node. You can configure the apps dashboard to connect to the endpoint of\nyour validator in the Settings tab. If you are connected to a default endpoint hosted by Parity of\nWeb3 Foundation, you will not be able to use this method since making RPC requests to this node\nwould effect the local keystore hosted on a ",(0,r.kt)("em",{parentName:"p"},"public node")," and you want to make sure you are\ninteracting with the keystore for ",(0,r.kt)("em",{parentName:"p"},"your node"),"."),(0,r.kt)("p",null,"Once ensuring that you have connected to your node, the easiest way to set session keys for your\nnode is by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"author_rotateKeys")," RPC request to create new keys in your validator's\nkeystore. Navigate to Toolbox tab and select RPC Calls then select the author > rotateKeys() option\nand remember to save the output that you get back for a later step."),(0,r.kt)("h4",{id:"option-2-cli"},"Option 2: CLI"),(0,r.kt)("p",null,"If you are on a remote server, it is easier to run this command on the same machine (while the node\nis running with the default HTTP RPC port configured):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n')),(0,r.kt)("p",null,'The output will have a hex-encoded "result" field. The result is the concatenation of the four\npublic keys. Save this result for a later step.'),(0,r.kt)("p",null,"You can restart your node at this point."),(0,r.kt)("h3",{id:"submitting-the-setkeys-transaction"},"Submitting the ",(0,r.kt)("inlineCode",{parentName:"h3"},"setKeys")," Transaction"),(0,r.kt)("p",null,"You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what\nassociates your validator with your Controller account."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Staking > Account Actions"),', and click "Set\nSession Key" on the bonding account you generated earlier. Enter the output from ',(0,r.kt)("inlineCode",{parentName:"p"},"author_rotateKeys"),'\nin the field and click "Set Session Key".'),(0,r.kt)("p",null,"Submit this extrinsic and you are now ready to start validating."))}p.isMDXComponent=!0}}]);
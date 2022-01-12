---
id: tutorials-node-hardspoon
title: Create Hard Spoon
sidebar_label: Create Hard Spoon
---

## How to create a Hard Spoon

#### Table of Contents

* [ChainSpecUtils Script](#chain-spec-utils)
* [Fork-Off-RelayChain Approach](#fork-off-relaychain)

### ChainSpecUtils Script <a id="chain-spec-utils"></a>

#### Create Forked Chain Spec

* Setup local files ready to make local copy of script
```
git init; git add .; git commit -m "init commit"; touch .gitignore
mkdir hardspoon && cd hardspoon
```
* Copy to local folder the contents of modified hardspoon script with changes shown in this PR https://github.com/ltfschoen/phala-blockchain/pull/1. 
```
wget -O chainSpecUtils.js https://raw.githubusercontent.com/ltfschoen/phala-blockchain/6ed6eff054c0c71ca1c95d45e60da3e035ee25ad/scripts/js/src/bin/chainSpecUtils.js
```
* Copy original utils from https://github.com/Phala-Network/phala-blockchain/blob/master/scripts/js/src/utils/common.js
```
mkdir utils && cd utils
wget -O common.js https://raw.githubusercontent.com/Phala-Network/phala-blockchain/master/scripts/js/src/utils/common.js
cd ..
```

* Stop "live" validator on remote server for less than one epoch if using Babe and export its state to .json file:
```
 /home/deployer/node/target/release/datahighway export-state --base-path /home/deployer/chain-base/node-0 --chain /home/deployer/chain_def_westlake.json --keep-blocks 4827957 --log -l=debug --pruning 'archive' --tracing-receiver Log --tracing-targets debug -- 4827957 > /home/deployer/backup/exported_state_keep_blocks_4827957.json
```
* Restart the "live" validator again
* Copy the exported state .json file to local machine
```
scp -J username@ip_address_jump username@ip_address:/home/deployer/backup/exported_state_keep_blocks_4827957.json .
```
* Move it into orig-spec/ folder
```
mv exported_state_keep_blocks_4827957.json orig-spec/
```
* Install compatible dependencies including the latest Node.js version
```
yarn init
nvm use v16.3.0
yarn add @polkadot/util-crypto bn.js commander
yarn install
```

* Add the following start script to package.json:
```
"scripts": {
  "start": "node chainSpecUtils.js orig-spec/exported_state_keep_blocks_4827957.json"
},
```

* Run the script to generate an fork.json file in the current directory.
```
yarn run start
```

* Copy the fork.json file to the 1st validator on a remote server
```
scp -J username@ip_address_jump fork.json username@ip_address:/home/username
```

#### Run Forked Chain Spec <a id="run-fork"></a>

* Copy the old chain keystore into the **new** chain keystore directory
```
cp /home/deployer/chain-base/node-0/chains/westlake/keystore /home/deployer/chain-base/node-0-fork/chains/local-fork/keystore/
```

* Check that you have checked out the correct Git commit before running the binary

* Change the base path to be used for the **new** chain so it is different from the old chain (i.e. /home/deployer/chain-base/node-fork) and so the old database is not overwritten if using the same server.
**Important Note**: Remove **new** database if restart with a different chain specification .json file
```
/home/deployer/node/target/release/datahighway --validator \
  --base-path /home/deployer/chain-base/node-fork \
  --node-key <INSERT_NODE_KEY> \
  --chain /home/deployer/fork.json \
  --name "DataHighway Westlake Mainnet - Fork - Validator 1" \
  --port 30777
  --pruning 'archive'
  --rpc-port 9966
  --ws-port 9977
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  --unsafe-ws-external \
  --unsafe-rpc-external \
  --rpc-cors=all \
  --rpc-methods=Unsafe \
  --keep-blocks 4827957 \
  --keystore-path /home/deployer/chain-base/node-fork/chains/local-fork/keystore
```

* Review the logs and check that the chain specification .json file has the same bootnode address as the `Local node identity` that is fork in the logs

* Copy the fork.json file to the 2nd, 3rd, 4th, and 5th validator remote servers

* Repeat the process of copying the old keystore to the new keystore directory, and use a different base path than was used for the old chain for the 2nd, 3rd, 4th, and 5th validator remote servers, and then run each of them.

* Check logs to see if they are generating and finalizing blocks

### Fork-Off-RelayChain Approach <a id="fork-off-relaychain"></a>

#### Create Forked Chain Spec

* Following the instructions https://github.com/Phala-Network/fork-off-relaychain

* Clone the repo on a remote server used for Validator 1 of old chain
```
git clone git@github.com:DataHighway-DHX/fork-off-relaychain.git
cd fork-off-relaychain
```

* Install dependencies
```
sudo apt install npm
npm install
```

* Copy files into relevant parts of data/ directory per the instructions
```
mkdir ./data
cp /home/deployer/node/target/release/datahighway ./data
mv ./data/datahighway ./data/binary
cp /home/deployer/node/target/release/wbuild/datahighway-runtime/datahighway_runtime.compact.wasm ./data
mv ./data/datahighway_runtime.compact.wasm ./data/runtime.wasm
```
* Copy the DataHighway custom types from https://github.com/DataHighway-DHX/node/blob/master/custom_types.json into a schema.json file, then wrap them inside an outer key as shown `{ "types": { <YOUR_TYPES> } }`
```
touch ./data/schema.json
```

* Run the Validator 1 of the old blockchain

* Run the fork-off-relaychain script to generate the fork chain spec from it called ./data/fork.json
```
HTTP_RPC_ENDPOINT=http://127.0.0.1:9933 FORK_CHAIN=westlake npm start
```

* Try running development chain using fork.json
```
./data/binary --chain fork.json --alice
```

* Copy the fork.json file to your local machine 
```
scp -J username@ip_address_jump username@ip_address:/home/deployer/fork-off-relaychain/data/fork.json .
```

* Then copy the fork.json file to each of the other 2nd, 3rd, 4th, and 5th validators on remote servers
```
scp -J username@ip_address_jump fork.json username@ip_address:/home/username
sudo cp /home/username/fork.json /home/deployer/fork.json
```

#### Run Forked Chain Spec

* Use the same steps described in ChainSpecUtils's [Run Forked Chain Spec](#run-fork) to run the 1st, 2nd, 3rd, 4th and 5th Validators using this forked chain specification file.
 
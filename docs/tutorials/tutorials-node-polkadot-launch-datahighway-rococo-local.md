---
id: tutorials-nodes-polkadot-launch-datahighway-rococo-local
title: Setup parachain testnet for Datahighway on 'rococo-local' using Polkadot-Launch
sidebar_label: Setup parachain testnet for Datahighway on 'rococo-local' using Polkadot-Launch
---

## How do you setup a DataHighway Parachain testnet on 'rococo-local' using Polkadot-Launch?

The following is based on using an Apple macOS 11.2.2 with M1 processor. It generally follows the steps here https://docs.substrate.io/tutorials/v3/cumulus/start-relay/.
The versions used are specified here https://docs.substrate.io/tutorials/v3/cumulus/start-relay/#software-versioning, including:
* polkadot branch 'v0.9.16' from https://github.com/paritytech/polkadot/tree/v0.9.16
* substrate-parachain-template branch 'polkadot-v0.9.16' from https://github.com/substrate-developer-hub/substrate-parachain-template/tree/polkadot-v0.9.16
* Polkadot-JS Apps v0.103.2-8 from https://github.com/polkadot-js/apps/commit/0b6e52733181392e823f7c37e833f4f5fd6b16ef)

create the following shell scripts and `chmod 777 <FILENAME>` each of them, and then run `./run_polkadot_launch.sh`

### Install Substrate

setup_substrate.sh
```
#!/bin/bash

curl https://getsubstrate.io -sSf | bash -s -- --fast
```

### Install Rust

setup_rust.sh
```
#!/bin/bash

wget -O - https://sh.rustup.rs | sh -s -- -y
PATH=$PATH:/root/.cargo/bin
rustup update stable
rustup update nightly
```

### Clone Polkadot-Launch. Note that this forked repository already includes a config.json file that has been preconfigured.

setup_datahighway_polkadot_launch.sh
```
#!/bin/bash

mkdir -p ~/parachains
cd ~/parachains
git clone https://github.com/DataHighway-DHX/polkadot-launch
cd ~/parachains/polkadot-launch
mkdir -p ~/parachains/polkadot-launch/bin
```

### Build the Polkadot repository using v0.9.16

This is for the the relay chain node on the Rococo network, generated the relay chain specification, and convert it to a SCALE encoded raw chain spec for use when starting nodes. Then copy across the Polkadot binary and the chain specifications to the Polkadot-Launch folder.

Note that stable-aarch64-apple-darwin is required for an Apple M1 processor (otherwise you get illegal hardware instruction error) https://github.com/paritytech/subport/issues/242#issuecomment-923678332

setup_polkadot_relaychain.sh
```
#!/bin/bash

cd ~/parachains
git clone https://github.com/paritytech/polkadot
cd polkadot
git checkout v0.9.16
. ~/.cargo/env
PATH=$PATH:/root/.cargo/bin
rustup update stable
rustup toolchain install nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
rustup install stable-aarch64-apple-darwin
rustup default stable-aarch64-apple-darwin
rustup override set stable-aarch64-apple-darwin
cargo build --release
cp ./target/release/polkadot ~/parachains/polkadot-launch/bin
./target/release/polkadot build-spec --chain=rococo-local --disable-default-bootnode > rococo-local.json
./target/release/polkadot build-spec --chain rococo-local.json --raw --disable-default-bootnode > rococo-local-raw.json
cp ./rococo-local.json ~/parachains/polkadot-launch
cp ./rococo-local-raw.json ~/parachains/polkadot-launch
```

### [OPTION 1] Build the DataHighway-Parachain codebase

setup_datahighway_parachain.sh
```
#!/bin/bash

cd ~/parachains
git clone https://github.com/DataHighway-DHX/DataHighway-Parachain
cd DataHighway-Parachain
git checkout main
./scripts/init.sh
cargo build --release
cp ./target/release/datahighway-collator ~/parachains/polkadot-launch/bin
```

### [OPTION 2] Build the Substrate-Parachain-Template

Instead of building the DataHighway-Parachain codebase, you can alternatively build a fork of Substrate-Parachain-Template instead using v0.9.16 for the Cumulus-based parachain collators on the Rococo network.
Change the parachain id values in the chain_spec.rs file from 1000 to 2000 (i.e. find/replace `"1000.into(),"` with `"2000.into(),"`, and find/replace `"para_id: 1000,"` with `"para_id: 2000,`").
Also change `"" | "local"` to `"" | "local" | "rococo-local"` in command.rs, so it would run in Polkadot-Launch. After building it then copy across the Substrate-Parachain-Template binary to the Polkadot-Launch folder.

```
git clone https://github.com/ltfschoen/substrate-parachain-template
cd substrate-parachain-template
git remote add upstream https://github.com/substrate-developer-hub/substrate-parachain-template
git fetch upstream polkadot-v0.9.16:polkadot-v0.9.16
git checkout polkadot-v0.9.16
. ~/.cargo/env
PATH=$PATH:/root/.cargo/bin
rustup update stable
rustup toolchain install nightly-2021-11-07-x86_64-apple-darwin
rustup target add wasm32-unknown-unknown --toolchain nightly-2021-11-07-x86_64-apple-darwin
rustup default nightly-2021-11-07-x86_64-apple-darwin
rustup override set nightly-2021-11-07-x86_64-apple-darwin
cargo build --release
cp ./target/release/parachain-collator ~/parachains/polkadot-launch/bin
```

Then install dependencies including Node.js. Modify the Polkadot-Launch config.json file by changing `./bin/datahighway-collator` to `./bin/parachain-collator` in both places in the config.json file.

Note that the example config.json file that is included in https://github.com/ltfschoen/substrate-parachain-template is likely the same as the config.json file in 
https://github.com/DataHighway-DHX/polkadot-launch/blob/master/config.json

### [SKIP] Build Cumulus codebase

setup_cumulus_parachain.sh
```
#!/bin/bash

cd ~/parachains
git clone https://github.com/paritytech/cumulus
cd cumulus
git checkout polkadot-v0.9.16
cargo build --release -p polkadot-collator
cp ./target/release/polkadot-collator ~/parachains/polkadot-launch/bin
```

* Change the `"bin": ` location of the binary executables to point to the files in the polkadot-launch/bin/ subfolder (i.e. `"bin": "./datahighway-collator",` rather than `./target/release/datahighway-collator`)

### Run Polkadot-Launch

Run Polkadot-Launch and the other scripts

run_polkadot_launch.sh
```
#!/bin/bash

./setup_substrate.sh
./setup_rust.sh
./change_rustup_toolchain.sh
./setup_datahighway_polkadot_launch.sh
./setup_datahighway_parachain.sh
# ./setup_cumulus_parachain.sh
./setup_polkadot_relaychain.sh

cd ~/parachains/polkadot-launch
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install v16.3.0
nvm use v16.3.0
npm install -g yarn
yarn
yarn start config.json
```

### Manually add further DataHighway collator nodes

See https://docs.substrate.io/tutorials/v3/cumulus/connect-parachain/#connecting-additional-parachain-nodes

Note: If you used [OPTION 2] instead of [OPTION 1] then the below commands should start with `./target/release/parachain-collator` instead of `./target/release/datahighway-collator` and you will be making the commands from the substrate-parachain-template folder instead of the DataHighway-Parachain folder.

Build the raw chain specification for the "rococo-local" chain from the DataHighway-Parachain chain_spec.rs file. Note that we need to generate it from the binary that we copied across into Polkadot-Launch since that is the binary that we are using to run the other collator nodes. The files we need will be added into the DataHighway-Parachain folder. Then we use that raw chain specification to export the genesis state and genesis WASM file for use in running further DataHighway collator nodes. See https://docs.substrate.io/tutorials/v3/cumulus/connect-parachain/

```
cd DataHighway-Parachain
~/parachains/polkadot-launch/bin/datahighway-collator build-spec --chain "rococo-local" --disable-default-bootnode > rococo-local-parachain-2000-plain.json
~/parachains/polkadot-launch/bin/datahighway-collator build-spec --chain rococo-local-parachain-2000-plain.json --raw --disable-default-bootnode > rococo-local-parachain-2000-raw.json
~/parachains/polkadot-launch/bin/datahighway-collator export-genesis-wasm --chain rococo-local-parachain-2000-raw.json > para-2000-wasm
~/parachains/polkadot-launch/bin/datahighway-collator export-genesis-state --chain rococo-local-parachain-2000-raw.json > para-2000-genesis
```

Copy the "rococo" relay chain specification into the main DataHighway-Parachain directory.

```
cd DataHighway-Parachain
cp ./res/rococo.json .
```

If you are using a chain specification with custom keys rather than defaults like Alice, and running the node without the flag `--alice` then it is necessary to add the keys to the keystore.
```
~/parachains/polkadot-launch/bin/datahighway-collator key insert --base-path /home/deployer/.local/share/datahighway-collator \
--chain rococo-local-parachain-2000-raw.json \
--scheme Sr25519 \
--suri <Secret Seed> \
--key-type aura
```

Try to run another DataHighway collator node manually on your local machine with the following:
Important note: Remove `--alice` if you are using custom session keys that have been added to the keystore.

```
rm -rf /tmp/parachain/alice

./target/release/datahighway-collator \
	--collator \
	--alice \
	--chain rococo-local-parachain-2000-raw.json \
  --base-path /tmp/parachain/alice \
  --bootnodes <INSERT_EXISTING_COLLATOR_BOOTNODE_FROM_POLKADOT_LAUNCH_LOGS> \
	--name DataHighway-Collator-Alice \
	--force-authoring \
	--port 31400 \
	--rpc-port 9933 \
  --ws-port 9977 \
	--unsafe-ws-external \
	--unsafe-rpc-external \
	--rpc-cors=all \
	--rpc-methods=Unsafe \
	-- \
  --execution wasm \
	--chain rococo-local-raw.json \
	--port 30342 \
	--rpc-port 9942 \
	--ws-port 9953
```

Note: Obtain <INSERT_EXISTING_COLLATOR_BOOTNODE_FROM_POLKADOT_LAUNCH_LOGS> from the Polkadot-Launch logs. An example of what it outputs is the following, but the Local Node Identities may be different:

```
Added Boot Nodes: /ip4/127.0.0.1/tcp/30336/p2p/12D3KooWRxTiM5vAPZ9RNSgd7Uqwfa8bpx4MoNo2M1m4f34nrCot,/ip4/127.0.0.1/tcp/30337/p2p/12D3KooWAWqYpvBZvvmPJ8wQ5PeiCcv8XuFzjVQrT6JGyXyU72Fu
```

Check it works in the UI

```
git clone https://github.com/polkadot-js/apps
git checkout 0b6e52733181392e823f7c37e833f4f5fd6b16ef
nvm use v16.3.0
yarn
yarn start
```

Go to http://localhost:3000/?rpc=ws%3A%2F%2F127.0.0.1%3A9988#/accounts and verify that you can transfer 1 UNIT from Alice to Bob

### Additional Notes: 

* Previously DataHighway standalone chain required these dependencies:
```
rustup toolchain install nightly-2020-10-06
rustup target add wasm32-unknown-unknown --toolchain nightly-2020-10-06
rustup default nightly-2020-10-06
rustup override set nightly-2020-10-06
```

* On macOS the version required for Rustup is for example `stable-x86_64-apple-darwin`, whereas on Linux it is `stable-aarch64-unknown-linux-gnu`


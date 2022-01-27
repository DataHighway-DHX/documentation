---
id: tutorials-nodes-polkadot-launch-setup
title: Setup parachain testnet
sidebar_label: Setup parachain testnet
---

**DRAFT**

## How do you setup a Parachain testnet?

create the following shell scripts and `chmod 777 <FILENAME>` each of them, and then run `./run_polkadot_launch.sh`

* setup_substrate.sh
```
#!/bin/bash

curl https://getsubstrate.io -sSf | bash -s -- --fast
```

* setup_rust.sh
```
#!/bin/bash

wget -O - https://sh.rustup.rs | sh -s -- -y
PATH=$PATH:/root/.cargo/bin
rustup update stable
rustup update nightly
cargo version
which cargo
rustc --version
```

* change_rustup_toolchain.sh
```
#!/bin/bash

rustup toolchain install nightly-2021-11-07
rustup target add wasm32-unknown-unknown --toolchain nightly-2021-11-07
rustup default nightly-2021-11-07
rustup override set nightly-2021-11-07
```

* setup_datahighway_polkadot_launch.sh
```
#!/bin/bash

mkdir -p ~/parachains
cd ~/parachains
git clone https://github.com/DataHighway-DHX/polkadot-launch
cd ~/parachains/polkadot-launch
mkdir -p ~/parachains/polkadot-launch/bin
```

* setup_datahighway_parachain.sh
```
#!/bin/bash

cd ~/parachains
git clone https://github.com/DataHighway-DHX/node
cd node
git fetch origin polkadotv0.9.11:polkadotv0.9.11
git stash
git checkout polkadotv0.9.11
cargo build --release -p datahighway-collator
cp ./target/release/datahighway-collator ~/parachains/polkadot-launch/bin
cp ./config.json ~/parachains/polkadot-launch
```

* setup_cumulus_parachain.sh
```
#!/bin/bash

cd ~/parachains
git clone https://github.com/paritytech/cumulus
cd cumulus
git checkout polkadot-v0.9.13
cargo build --release -p polkadot-collator
cp ./target/release/polkadot-collator ~/parachains/polkadot-launch/bin
```

* setup_polkadot_relaychain.sh
```
#!/bin/bash

cd ~/parachains
git clone https://github.com/paritytech/polkadot
cd polkadot
git checkout v0.9.13
cargo build --release
cp ./target/release/polkadot ~/parachains/polkadot-launch/bin
```

* Change the `"bin": ` location of the binary executables to point to the files in the polkadot-launch/bin/ subfolder (i.e. `"bin": "./datahighway-collator",` rather than `./target/release/datahighway-collator`)

* run_polkadot_launch.sh
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

Note: 

* Previously DataHighway standalone chain required these dependencies:
```
rustup toolchain install nightly-2020-10-06
rustup target add wasm32-unknown-unknown --toolchain nightly-2020-10-06
rustup default nightly-2020-10-06
rustup override set nightly-2020-10-06
```

* On macOS the version required for Rustup is for example `stable-x86_64-apple-darwin`, whereas on Linux it is `stable-aarch64-unknown-linux-gnu`


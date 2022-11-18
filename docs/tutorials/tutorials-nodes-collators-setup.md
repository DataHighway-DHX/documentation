---
id: tutorials-nodes-collators-setup
title: Setup Collator Node
sidebar_label: Setup Collator Node
---

## How do you setup a Collator Node?

This guide covers how to set up a DataHighway Collator Node on the Tanganika Network.

### Provisioning a server

Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc.

We recommend a node with at least 4GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions.

SSH into the server.

### Installing DataHighway and setting it up as a system service

#### Building the binary from source

```bash
apt update
apt install -y gcc libc6-dev
apt install -y cmake pkg-config libssl-dev git clang libclang-dev
```

Prefetch SSH publickeys

```bash
ssh-keyscan -H github.com >> ~/.ssh/known_hosts
```

Install rustup

```bash
curl https://sh.rustup.rs -sSf | sh -s -- -y
source $HOME/.cargo/env
export PATH=$HOME/.cargo/bin:$PATH
```

Clone the [DataHighway-DHX/DataHighway-Parachain](https://github.com/DataHighway-DHX/DataHighway-Parachain) repository

```bash
git clone https://github.com/DataHighway-DHX/DataHighway-Parachain
cd DataHighway-Parachain
```

Checkout to latest release tag. At the time of updating this document, latest release is [`3.7.1`](https://github.com/DataHighway-DHX/DataHighway-Parachain/releases/tag/v3.7.1)

```bash
git checkout v3.7.1
```

Build packages

```bash
curl https://getsubstrate.io -sSf | bash -s -- --fast && \
./scripts/init.sh
```

#### Download a prebuilt binary

Instead of building from source, you can download a prebuilt binary from the official DHX Parachain Github release. To get the prebuilt binary with the chainspec definitions:

Create a datahighway folder in opt:
```sh
mkdir /opt/datahighway
```

- Datahighway binary
```sh
wget https://github.com/DataHighway-DHX/DataHighway-Parachain/releases/download/v3.7.1/datahighway-collator -O /opt/datahighway/datahighway-collator-v3.7.1
```

- Kusama relay chainspec file 
```
wget https://github.com/DataHighway-DHX/DataHighway-Parachain/releases/download/v3.7.1/kusama.json -O /opt/datahighway/kusama.json
```

- Datahighway chainspec file
```
wget https://raw.githubusercontent.com/DataHighway-DHX/DataHighway-Parachain/v3.6.0/res/kusama/kusama-parachain-raw.json -O /opt/datahighway/kusama-parachain-raw.json
```

### **NOTE**: If you're running a v3.6.0 node and want to upgrade to v3.7.1, please be sure to check the [GRANDPA ISSUE](https://github.com/DataHighway-DHX/DataHighway-Parachain/wiki/%5BWIP%5D-2022-11-12-GRANDPA-ISSUE).

### Set up the node as a system service.

To do this, navigate into the root directory of the DataHighway-DHX/DataHighway-Parachain repo and execute the following to create the service configuration file.

**NOTE**: If any command throws something like `Permission denied`, run it with *sudo*.

Create a new script at `/opt/datahighway/start.sh` with the following content:

```bash
#!/bin/bash

NAME="Datahighway_mainnet_server_3"
RELAY_SPEC="/opt/datahighway/kusama.json"
PARA_SPEC="/opt/datahighway/kusama-parachain-raw.json"
COLLATOR_PATH="/opt/datahighway/datahighway-collator-v3.7.1"
RELAY_PORT="40444"
RELAY_RPC_PORT="7676"
RELAY_WS_PORT="8787"
PARA_RPC_PORT="7677"
PARA_WS_PORT="8788"
PARA_PORT="50555"
PARA_DATABASE_BASE="~/.chains/datahighway-mainnet/para"
RELAY_DATABASE_BASE="~/.chains/datahighway-mainnet/relay/"
PARA_BOOTNODE="/ip4/3.127.123.230/tcp/40333/p2p/12D3KooWHJ9NwkCNJ8BFD4BptJybQQSyBJm1mtr3XRpfqWR5vjaj"

CMD="$COLLATOR_PATH --collator \
	--chain $PARA_SPEC \
	--force-authoring \
	--unsafe-ws-external \
	--unsafe-rpc-external \
	--rpc-cors=all \
	--rpc-methods=Unsafe \
	--name "\"$NAME\"" \
	--port $PARA_PORT \
	--rpc-port $PARA_RPC_PORT \
	--ws-port $PARA_WS_PORT \
	--bootnodes $PARA_BOOTNODE \
	--base-path $PARA_DATABASE_BASE \
	-- \
	--chain $RELAY_SPEC
	--execution wasm \
	--port $RELAY_PORT \
	--rpc-port $RELAY_RPC_PORT \
	--ws-port $RELAY_WS_PORT \
	--base-path $RELAY_DATABASE_BASE \
"

echo "-----------------------"
echo "Executing: $CMD"
echo "----------------------"

$CMD
```

Notes on the parameters:
- NAME - name of your node
- RELAY_SPEC - chain spec file of the relay chain (download from the Github Release page)
- PARA_SPEC - chain spec file of the parachain (download from the Github Release page)
- PARA_DATABASE_BASE - path to the parachain database
- RELAY_DATABASE_BASE - path to the relay database

Grant execute permissions to the start script and collator executable:
```bash
chmod +x /opt/datahighway/start.sh
chmod +x /opt/datahighway/datahighway-collator-v3.7.1
```

To start the collator as a service, run the following script:

```bash
{
  echo '[Unit]'
  echo 'Description=DataHighway'
  echo '[Service]'
  echo 'Type=simple'
  echo 'ExecStart=/opt/datahighway/start.sh'
  echo '[Install]'
  echo 'WantedBy=multi-user.target'
} > /etc/systemd/system/datahighway.service
```

Double check that the config has been written to /etc/systemd/system/datahighway.service correctly.
```
cat /etc/systemd/system/datahighway.service
```

Each time you change the service file you need to reload it
```bash
systemctl daemon-reload
```

Then enable the service so it runs on startup, and then try to start it now:

```bash
systemctl enable datahighway
systemctl start datahighway
```

Check the status of the service:

```bash
systemctl status datahighway
```

You should see the Tanganika parachain collator node connecting to Kusama relay chain and other collator node peers and syncing the latest blocks. If you like to follow the log output, you can use:

```bash
journalctl -u datahighway.service -f
```

Generate and add your Aura session keys (author ID) for your collator node to sign blocks with on Tanganika:

From `/opt/datahighway` directory you can run this command:
```bash
curl http://127.0.0.1:7677 -H "Content-Type:application/json;charset=utf-8" -d   '{
    "jsonrpc":"2.0",
    "id":1,
    "method":"author_insertKey",
    "params": ["aura", "$suri", "$pkey"]
  }'
```
Replace `$suri` with your node key secret word, eg: `same jelly ceiling beauty tunnel delay exile science three winner balance minute`

And replace `$pkey` with the public key generated from `$suri`, eg: `0x6849bcd876d48609c6d38a6511f53873d571aaece8a73923c1488d496d3f2510`

### Set Session Keys

DataHighway is using [Collator Selection](https://paritytech.github.io/cumulus/pallet_collator_selection/index.html) pallet for registering collators.

1. Go to the [Tanganika Polkadot.js portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer): **_Developer > Extrinsic_**
2. Select your _collator account_ and extrinsic type: **_session / setKeys_**
3. Enter the **_session keys_** and set proof to **_0x00_**
4. Submit the transaction.

### Register as a Collator candidate

To start collating, you need to have 10 DHX tokens 

1. Go to the [Tanganika Polkadot.js portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer): **_Developer > Extrinsic_**

2. Select your _collator account_ and extrinsic type: **_parachainStaking / joinAsCandidate_**. Provide the amount of GIANT you want to stake. This should be in full denomation, For example if you want to stake 50 GIANT, enter 50000000000000000000

3. Submit the transaction.

Onboarding takes place at **_n+1_** session.

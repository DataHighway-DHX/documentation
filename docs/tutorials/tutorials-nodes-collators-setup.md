---
id: tutorials-nodes-collators-setup
title: Setup Collator Node
sidebar_label: Setup Collator Node
---

## How do you setup an Collator Node?

This guide covers how to set up a DataHighway Collator Node on the Tanganika Network.

### Provisioning a server

Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc.

We recommend a node with at least 4GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions.

SSH into the server.

### Installing DataHighway and setting it up as a system service

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

Checkout to latest release tag. At the time of updating this document, latest release was `3.6.0`

```bash
git checkout v3.6.0
```

Build packages

```bash
curl https://getsubstrate.io -sSf | bash -s -- --fast && \
./scripts/init.sh
```


To start your collator node you need to use the same binary that was used to start the first collator node, which has been stored in the $fullprojectpath/res/kusama/datahighway-collator.tar.gz.

Unzip that file into the root directory of the DataHighway-DHX/DataHighway-Parachain
```
gunzip -c ./res/kusama/datahighway-collator.tar.gz | tar xopf -
mv datahighway-collator ./res/kusama
```

### Set up the node as a system service.

To do this, navigate into the root directory of the DataHighway-DHX/DataHighway-Parachain repo and execute the following to create the service configuration file.
Replace the values for keys starting with $ to suit your own collator node

```bash
{
  echo '[Unit]'
  echo 'Description=DataHighway'
  echo '[Service]'
  echo 'Type=simple'
  echo 'WorkingDirectory=$fullprojectpath'
  echo 'ExecStart=$fullprojectpath/res/kusama/datahighway-collator --collator --base-path $fullprojectpath/.local/share/datahighway-collator --chain $fullprojectpath/res/kusama/kusama-parachain-raw.json --name $nameofyourcollatornode  --force-authoring --port 40333 --rpc-port 9933 --ws-port 9744 --bootnodes $dhxbootnode --unsafe-ws-external --unsafe-rpc-external --rpc-cors=all --rpc-methods=Unsafe -- --execution wasm --chain $fullprojectpath/res/kusama/kusama.json --port 30333 --ws-port 9944'
  echo '[Install]'
  echo 'WantedBy=multi-user.target'
} > /etc/systemd/system/datahighway.service
```

Where: 
* $dhxbootnode = Request it from our DHX admins via Discord, Telegram, or Twitter
* $fullprojectpath = needs to be the full path to your DataHighway-Parachain project which you cloned. eg:
```
/home/foo/DataHighway-Parachain
```
* $nameofyourcollatornode = name of your collator node with the --name option which will be shown on telemetry (if supported), eg:
```
--name "My collator"
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

```bash
$fullprojectpath/res/kusama/datahighway-collator key insert --base-path $fullprojectpath/.local/share/datahighway-collator --chain $fullprojectpath/res/kusama/kusama-parachain-raw.json --scheme Sr25519 --suri $youraurasecretseed --key-type aura
```

### Set Session Keys

DataHighway is using [Collator Selection](https://paritytech.github.io/cumulus/pallet_collator_selection/index.html) pallet for registering collators.

1. Go to the [Tanganika Polkadot.js portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer): **_Developer > Extrinsic_**
2. Select your _collator account_ and extrinsic type: **_session / setKeys_**
3. Enter the **_session keys_** and set proof to **_0x00_**
4. Submit the transaction.

### Register as a Collator candidate

To start collating, you need to have 10 DHX tokens

1. Go to the [Tanganika Polkadot.js portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer): **_Developer > Extrinsic_**
2. Select your _collator account_ and extrinsic type: **_CollatorSelection / registerAsCandidate_**
3. Submit the transaction.

Onboarding takes place at **_n+1_** session. Once your collator is active, you will see your collator inside **Network** tab every time you produce a block.
You will also see your collator in **_Network > Collators_**. 





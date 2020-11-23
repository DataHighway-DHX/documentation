---
id: tutorials-nodes-validator-setup
title: Setup Validator Node
sidebar_label: Setup Validator Node
---

**DRAFT**

## How do you setup an Validator Node?

This guide covers how to set up a DataHighway Validator Node.


### Provisioning a server

Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc.

We recommend a node with at least 4GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions.

SSH into the server.

### Installing DataHighway and setting it up as a system service

First, clone the DataHighway-DHX/node repo, install any dependencies, and run the required build scripts.

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

Get packages

```bash
git clone https://github.com/DataHighway-DHX/node.git
cd node
```

Build packages

```bash
curl https://getsubstrate.io -sSf | bash -s -- --fast && \
./scripts/init.sh
```

Build runtime code

```bash
cargo build --release
```


### Set up the node as a system service.
To do this, navigate into the root directory of the DataHighway-DHX/node repo and execute the following to create the service configuration file (harbour):

```bash
{
  echo '[Unit]'
  echo 'Description=DataHighway'
  echo '[Service]'
  echo 'Type=simple'
  echo 'WorkingDirectory='`pwd`
  echo 'ExecStart='`pwd`'/target/release/datahighway --chain=`pwd`/node/src/chain-definition-custom/chain_def_harbour.json --validator --ws-external --rpc-cors=all --rpc-methods=Unsafe'
  echo '[Install]'
  echo 'WantedBy=multi-user.target'
} > /etc/systemd/system/datahighway.service
```
Note1: The Startup argument '--rpc-methods=Unsafe' is required to workaround ["Method not found"](https://github.com/paritytech/substrate/issues/6100)

Note2: This will create an DataHighway server that accepts incoming connections from anyone on the internet. If you are using the node as a validator, you should instead remove the ws-external flag, so DataHighway does not accept outside connections.

Double check that the config has been written to /etc/systemd/system/datahighway.service correctly. If so, enable the service so it runs on startup, and then try to start it now:

```bash
systemctl enable datahighway
systemctl start datahighway
```

Check the status of the service:

```bash
systemctl status datahighway
```

You should see the node connecting to the network and syncing the latest blocks. If you need to tail the latest output, you can use:

```bash
journalctl -u datahighway.service -f
```

### Set Session Keys (WiP)

Once your node is fully synced, stop the process by pressing Ctrl-C. At your terminal prompt, you will now start running the node.

```sh
./target/release/datahighway --validator --name "name on telemetry"
```

You can give your validator any name that you like, but note that others will be able to see it, and it will be included in the list of all servers using the same telemetry server. Since numerous people are using telemetry, it is recommended that you choose something likely to be unique. The telemetry URLs are:
| Environment     | Telemetry URL                                                       |
| --------------- | ------------------------------------------------------------------- |
| Harbour testnet | https://telemetry.polkadot.io/#list/DataHighway%20Harbour%20Testnet |
| Mainnet         |                                                                     |

### Generating the Session Keys

You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator node with your Controller account on DaaHighway.

#### Option 1: PolkadotJS-APPS

You can generate your [Session keys](https://wiki.polkadot.network/en/latest/polkadot/learn/keys/#session-key) in the client via the apps RPC. If you are doing this, make sure that you have the PolkadotJS-Apps explorer attached to your validator node. You can configure the apps dashboard to connect to the endpoint of your validator in the Settings tab. If you are connected to a default endpoint hosted by Parity of Web3 Foundation, you will not be able to use this method since making RPC requests to this node would effect the local keystore hosted on a _public node_ and you want to make sure you are interacting with the keystore for _your node_.

Once ensuring that you have connected to your node, the easiest way to set session keys for your node is by calling the `author_rotateKeys` RPC request to create new keys in your validator's keystore. Navigate to Toolbox tab and select RPC Calls then select the author > rotateKeys() option and remember to save the output that you get back for a later step.

#### Option 2: CLI

If you are on a remote server, it is easier to run this command on the same machine (while the node is running with the default HTTP RPC port configured):

```sh
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

The output will have a hex-encoded "result" field. The result is the concatenation of the four public keys. Save this result for a later step.

You can restart your node at this point.

### Submitting the `setKeys` Transaction

You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator with your Controller account.

Go to [Staking > Account Actions](https://polkadot.js.org/apps/#/staking/actions), and click "Set Session Key" on the bonding account you generated earlier. Enter the output from `author_rotateKeys` in the field and click "Set Session Key".

Submit this extrinsic and you are now ready to start validating.

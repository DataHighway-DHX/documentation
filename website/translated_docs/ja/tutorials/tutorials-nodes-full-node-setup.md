---
id: tutorials-nodes-full-node-setup
title: Setup Full Node
sidebar_label: Setup Full Node
---

## How do you setup a Full Node?

This guide covers how to set up a DataHighway Full Node.


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
To do this, navigate into the root directory of the DataHighway-DHX/node repo and execute the following to create the service configuration file and make specific configuration updates for your node as detailed below:

```bash
{
  echo '[Unit]'
  echo 'Description=DataHighway'
  echo '[Service]'
  echo 'Type=simple'
  echo 'WorkingDirectory=/home/foo/node'
  echo 'ExecStart=/home/foo/node/target/release/datahighway --chain CHAIN_NAME  --bootnodes BOOT_NODE --name YOUR_NODE_NAME'
  echo '[Install]'
  echo 'WantedBy=multi-user.target'
} > /etc/systemd/system/datahighway.service
```

WorkingDirectory=needs to be the full path to your node project which you cloned. eg:
```
/home/foo/node
```

ExecStart=needs to include the full path to the datahighway binary, eg:
```
/home/foo/node/target/release/datahighway 
```

CHAIN_NAME=Specify the chain name where you want to connect your node to, eg
```
--chain harbour
```

YOUR_NODE_NAME=Name your node with the --name option which will be shown on telemetry, eg:
```
--name MyAwesomeNode
```
BOOT_NODE=specify one of our chain specific bootnodes, its IP and Peer-ID can be provided thru a discord request
```
--bootnodes /ip4/GET_IP_FROM_DISCORD/tcp/30333/p2p/GET_PEER_ID_FROM_DISCORD
```


Double check that the config has been written to /etc/systemd/system/datahighway.service correctly.
```
cat /etc/systemd/system/datahighway.service
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

You should see the node connecting to the network and syncing the latest blocks. If you need to tail the latest output, you can use:

```bash
journalctl -u datahighway.service -f
```
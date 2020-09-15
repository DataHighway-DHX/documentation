---
id: tutorials-nodes-authorities-setup
title: Setup Authority Node
sidebar_label: Setup Authority Node
---

**DRAFT**

## How do you setup an Authority Node?

This guide covers how to set up a DataHighway Authority Node.


### Provisioning a server

Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc.

We recommend a node with at least 2GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions.

SSH into the server.

Installing DataHighway and setting it up as a system service

First, clone the DataHighway-DHX/node repo, install any dependencies, and run the required build scripts.

```bash
sudo apt update
sudo apt install -y gcc libc6-dev
sudo apt install -y cmake pkg-config libssl-dev git clang libclang-dev
```

Prefetch SSH publickeys

```bash
ssh-keyscan -H github.com >> ~/.ssh/known_hosts
```

Install rustup

```bash
curl https://sh.rustup.rs -sSf | sh -s -- -y
source $HOME/.cargo/env
export PATH=$HOME/.cargo//bin:$PATH
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

Target a known working nightly toolchain release

```bash
rustup toolchain install nightly-2020-02-17
rustup target add wasm32-unknown-unknown --toolchain nightly-2020-02-17
rustup default nightly-2020-02-17
rustup override set nightly-2020-02-17
```

Build runtime code

```bash
cargo build --release
```

Set up the node as a system service. To do this, navigate into the root directory of the DataHighway-DHX/node repo and execute the following to create the service configuration file:

```bash
{
  echo '[Unit]'
  echo 'Description=DataHighway'
  echo '[Service]'
  echo 'Type=exec'
  echo 'WorkingDirectory='`pwd`
  echo 'ExecStart='`pwd`'/target/release/datahighway --chain=datahighway --ws-external --rpc-cors "*"'
  echo '[Install]'
  echo 'WantedBy=multi-user.target'
} > /etc/systemd/system/datahighway.service
```

Note: This will create an DataHighway server that accepts incoming connections from anyone on the internet. If you are using the node as a validator, you should instead remove the ws-external flag, so DataHighway does not accept outside connections.

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

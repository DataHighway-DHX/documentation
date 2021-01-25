---
id: tutorials-nodes-collators-setup
title: Setup collator Node
sidebar_label: Setup collator Node
---

**DRAFT**

## How do you setup an Collator Node?

This guide covers how to set up a DataHighway Collator Node.


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
To do this, navigate into the root directory of the DataHighway-DHX/node repo and execute the following to create the service configuration file. Replace the values for keys starting with $ to suit your own collator node

```bash
{
  echo '[Unit]'
  echo 'Description=DataHighway'
  echo '[Service]'
  echo 'Type=simple'
  echo 'WorkingDirectory=$fullprojectpath'
  echo 'ExecStart=$fullprojectpath/target/release/parachain-collator --collator --name $nameofyournode -
parachain-id 2 --port 40334 --ws-port 9845 --bootnodes $dhxbootnode -- --chain rococo --port 30333 --ws-port 9978 --bootnodes $dhxbootnode'
  echo '[Install]'
  echo 'WantedBy=multi-user.target'
} > /etc/systemd/system/datahighway.service
```

$dhxbootnode= requst this from DHX team thru discord

$fullprojectpath=needs to be the full path to your node project which you cloned. eg:
```
/home/foo/node
```

$nameofyournode=name your node with the --name option which will be shown on telemetry (not supported yet), eg:
```
--name Mycollator
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

You should see the node connecting to the network and syncing the latest blocks. If you like to follow the log output, you can use:

```bash
journalctl -u datahighway.service -f
```
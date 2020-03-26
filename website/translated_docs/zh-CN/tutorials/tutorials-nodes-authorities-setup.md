---
id: 教程-节点-授权-设置
title: 设置 授权 节点
sidebar_label: 设置 授权 节点
---

**草案**

## 您如何设置一个授权节点？

本指南涵盖如何设置数据高速公路授权节点。


### 配置服务器

Provision an appropriately sized server from a reputable VPS provider, e.g.: Vultr, DigitalOcean, Linode, OVH, Contabo, Scaleway, Amazon AWS, etc.

We recommend a node with at least 2GB of RAM, and Ubuntu 18.04 x64. Other operating systems will require adjustments to these instructions.

SSH into the server.

Installing DataHighway and setting it up as a system service

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
source /root/.cargo/env
export PATH=/root/.cargo/bin:$PATH
```

Get packages

```bash
git clone https://github.com/DataHighway-DHX/node.git
cd node
```

Build packages

```bash
./setup.sh
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

检查服务状态：

```bash
systemctl status datahighway
```

您应该看到该节点连接到网络并同步最新的区块。 If you need to tail the latest output, you can use:

```bash
journalctl -u datahighway.service -f
```

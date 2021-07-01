---
id: tutorials-runtime-upgrade
title: Runtime Upgrade
sidebar_label: Runtime Upgrade
---

## How to perform runtime-upgrade

* Clone <a href="https://github.com/DataHighway-DHX/node" target="_blank" class="pretty-link pretty-link-colored">node</a> repo

* `cd node`

* `cargo build --release`

* Import the Sudo account on the https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestlake.datahighway.com#/accounts

* Go to _Extrinsics_ page https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestlake.datahighway.com#/extrinsics

* Choose the _Sudo_ account as selected account

* Choose _sudo_ as extrinsic and select _sudoUncheckedWeight_ as function

* Choose _system_ as call and _setCode_ as function 

* Click the _code_ input field, and select the Wasm binary that defines the upgraded runtime: 
  `target/release/wbuild/datahighway-runtime/datahighway_runtime.compact.wasm`
  
* Leave the value for the _weight parameter at the default of 0. Click "Submit Transaction" and then "Sign and Submit".

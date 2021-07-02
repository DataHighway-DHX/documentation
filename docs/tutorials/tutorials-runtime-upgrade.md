---
id: tutorials-runtime-upgrade
title: Runtime Upgrade
sidebar_label: Runtime Upgrade
---

## How to propose a forkless runtime upgrade

### Step 1: Prepare WASM binary 

* Clone <a href="https://github.com/DataHighway-DHX/node" target="_blank" class="pretty-link pretty-link-colored">node</a> repo

* Switch to the root directory of the cloned project

`cd node`

* Build the Wasm bytecode

`cargo build --release`


### Step 2: Generate a Preimage Hash of the Proposal for a forkless runtime upgrade

* Go to _Democracy_ page https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestlake.datahighway.com#/democracy

* The first step is to submit a preimage of the proposal. Click on _Submit preimage_

* Choose _sudo_ as extrinsic and select _sudoUncheckedWeight_ as function

* Choose _system_ as call and _setCode_ as function 

* Click the _code_ input field, and select the Wasm binary that defines the upgraded runtime: 
  `target/release/wbuild/datahighway-runtime/datahighway_runtime.compact.wasm`
  
* Copy the preimage hash. This represents the proposal. You will use this hash when submitting the actual proposal.

* Leave the value for the _weight parameter at the default of 0.

* Click "Submit Transaction" and then "Sign and Submit".


### Step 3: Submit the Proposal

* Select the account from which you want to submit the proposal. 

* Enter the preimage hash related to the proposal. 

* Set the locked balance. 

* Click the _Submit proposal_ button and sign the transaction


### Reference
* [Participating in Democracy on Kusama and Polkadot](https://wiki.polkadot.network/docs/maintain-guides-democracy/#proposing-an-action)

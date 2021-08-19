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


### Step 2: Submit a Preimage Hash of the Proposal for a forkless runtime upgrade

* Go to _Democracy_ page https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestlake.datahighway.com#/democracy

* The first step is to submit a preimage of the proposal. Click on _Submit preimage_

* Choose _system_ as call and _setCode_ as function 

* Click the _code_ input field, and select the Wasm binary that defines the upgraded runtime: 
  `target/release/wbuild/datahighway-runtime/datahighway_runtime.compact.wasm`
  
* Copy the preimage hash. This represents the proposal. You will use this hash when submitting the actual proposal.

* Leave the value for the _weight parameter at the default of 0.

* Click "Submit Transaction" and then "Sign and Submit".

![Submit Preimage](/static/img/tutorial/submit_preimage.png "Submit Preimage")

### Step 3: Submit the Proposal

* Select the account from which you want to submit the proposal. 

* Enter the preimage hash related to the proposal. 

* Set the locked balance. 

* Click the _Submit proposal_ button and sign the transaction

![Submit Proposal](/static/img/tutorial/submit_proposal.png "Submit Proposal")

### Step 4: Seconding the Proposal

* Select the account to second the proposal

* Verify the number of tokens required to second the proposal and Click the "Second" button and sign the transaction

![Second Proposal1](/static/img/tutorial/second_proposal1.png "Second Proposal1")

![Second Proposal2](/static/img/tutorial/second_proposal2.png "Second Proposal2")

![Second Proposal3](/static/img/tutorial/second_proposal3.png "Second Proposal3")

### Step 5: Voting on the Proposal

* The most seconded proposal moves to public referendum

* Once in referendum, token holders vote "Aye" or "Nay" on the proposal by locking tokens. Two factors account the vote weight: amount locked and locking period

* If the proposal passes, it is enacted after a certain amount of time

![Vote1](/static/img/tutorial/vote1.png "Vote1")

![Vote2](/static/img/tutorial/vote2.png "Vote2")

![Vote3](/static/img/tutorial/vote3.png "Vote3")

### Step 6: Dispatch

* After the voting period has expired, the proposal will be visible under the "Dispatch" tab if approved.

![Dispatch](/static/img/tutorial/dispatch.png "Dispatch")

After the dispatch period has expired, Runtime_upgrade will start and you can see upgraded version on top left corner.

![Runtime](/static/img/tutorial/runtime.png "Runtime")


### Reference
* [Participating in Democracy on Kusama and Polkadot](https://wiki.polkadot.network/docs/maintain-guides-democracy/#proposing-an-action)

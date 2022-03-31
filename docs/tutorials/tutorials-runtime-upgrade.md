---
id: tutorials-runtime-upgrade
title: Runtime Upgrade
sidebar_label: Runtime Upgrade
---

## How to propose a forkless runtime upgrade

### Step 1: Prepare WASM binary 

* Clone the <a href="https://github.com/DataHighway-DHX/DataHighway-Parachain" target="_blank" className="pretty-link pretty-link-colored">DataHighway-Parachain</a> repo

* Switch to the root directory of the cloned project

`cd DataHighway-Parachain`

* Build the Wasm bytecode

`cargo build --release`


### Step 2: Submit a Preimage Hash of the Proposal for a forkless runtime upgrade

* Go to _Democracy_ page https://polkadot.js.org/apps/?rpc=wss://tanganika.datahighway.com#/democracy

* The first step is to submit a preimage of the proposal. Click on _Submit preimage_

* Choose _system_ as call and _setCode_ as function 

* Click the _code_ input field, and select the Wasm binary that defines the upgraded runtime: 
  `target/release/wbuild/datahighway-parachain-runtime/datahighway_parachain_runtime.compact.compact.wasm`
  * Note: Ensure that you use the "compact" file

* Copy the preimage hash. This represents the proposal. You will use this hash when submitting the actual proposal.

* Leave the value for the _weight parameter at the default of 0.

* Click "Submit Transaction" and then "Sign and Submit".

![Submit Preimage](/img/tutorial/submit_preimage.png "Submit Preimage")

**Important** If you forgot to copy the preimage hash, you can easily regenerate and copy it again by choosing the same extrinsic (it won't allow to submit it again but you can get preimage hash).

### Step 3: Submit the Proposal

* Select the account from which you want to submit the proposal. 

* Enter the preimage hash related to the proposal. 

* Set the locked balance. 

* Click the _Submit proposal_ button and sign the transaction

![Submit Proposal](/img/tutorial/submit_proposal.png "Submit Proposal")

### Step 4: Seconding the Proposal

* Select the account to second the proposal

* Verify the number of tokens required to second the proposal and Click the "Second" button and sign the transaction

![Second Proposal1](/img/tutorial/second_proposal1.png "Second Proposal1")

![Second Proposal2](/img/tutorial/second_proposal2.png "Second Proposal2")

![Second Proposal3](/img/tutorial/second_proposal3.png "Second Proposal3")

**Important** By seconding a proposal you will move it higher up the rank of proposals. The most seconded proposal — in value, not number of supporters — will be brought to a referendum every launch period. If nobody seconds a proposal, it would still reach to referendum.

### Step 5: Voting on the Proposal

* The most seconded proposal moves to public referendum

* Once in referendum, token holders vote "Aye" or "Nay" on the proposal by locking tokens. Two factors account the vote weight: amount locked (i.e. conviction) and locking period

* If the proposal passes, it is enacted after a certain amount of time

![Vote1](/img/tutorial/vote1.png "Vote1")

![Vote2](/img/tutorial/vote2.png "Vote2")

![Vote3](/img/tutorial/vote3.png "Vote3")

**Important** If referendum does not pass due to any reason (either nobody votes or more `Nay` and less `Aye`), you can re-submit proposal using same preimage hash.

### Step 6: Dispatch

* After the voting period has expired, the proposal will be visible under the "Dispatch" tab if approved.

![Dispatch](/img/tutorial/dispatch.png "Dispatch")

After the dispatch period has expired, Runtime_upgrade will start and you can see upgraded version on top left corner.

![Runtime](/img/tutorial/runtime.png "Runtime")


### Reference
* [Participating in Democracy on Kusama and Polkadot](https://wiki.polkadot.network/docs/maintain-guides-democracy/#proposing-an-action)

**Important:** If you want to test locally, you may need to modify the current runtime configuration of democracy module such as Launch Period, EnactmentPeriod and Voting Period.

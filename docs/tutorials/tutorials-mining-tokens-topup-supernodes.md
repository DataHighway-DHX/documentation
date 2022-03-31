---
id: tutorials-mining-tokens-topup-supernodes
title: Topup Supernodes
sidebar_label: Topup Supernodes
---

## How community may propose to transfer DHX tokens from Treasury to a Multisig Proxy account for transfer to topup a Supernode

### Step 1: Check the DataHighway runtime parameters are reasonable values and modify them if necessary

**Important:** It may be necessary to use the democracy runtime module to propose to modify the current runtime configuration so that the Minimum Deposit, Launch Period, and Voting Period are reasonable values. If they were set with unreasonable values at genesis, then it may be necessary to modify them using Sudo. 

### Step 2: Submit a Preimage Hash of the Proposal to transfer Treasury funds to the Multisig Proxy account

* Add the Multisig Proxy account and the DHX DAO Unlocked Reserves (Treasury) account (4LTFqiD6H6g8a7ur9WH4RxhWx2givWfK7o5EDed3ai1nYTvk) to your [Address book](https://polkadot.js.org/apps/?rpc=wss://tanganika.datahighway.com#/addresses) on the Tanganika Network
	* Note: The Treasury account for each chain is specified in the [chain_spec.rs](https://github.com/DataHighway-DHX/DataHighway-Parachain/blob/main/node/src/chain_spec.rs)

* Go to _Democracy_ page https://polkadot.js.org/apps/?rpc=wss://tanganika.datahighway.com#/democracy

* The first step is to submit a preimage of the proposal.

* Click on _Submit preimage_

* Choose for _send_from_account_ an account (with sufficient balance to pay any fees)

* Choose for _propose_ an extrinsic _balances_ and select _forceTransfer_ as function

* Choose for _source_ the account of the Treasury (DHX DAO Unlocked Reserves).

* Choose for _dest_ the account of the Multisig Proxy.

* Choose for _value_ the value in DHX that you propose to be transferred to the Multisig Proxy that will perform the subsequent transfer to the Supernode account

* Copy the preimage hash that represents the proposal.

* Leave the value for the _weight parameter at the default of 0.

* Click "Submit Transaction" and then "Sign and Submit".

### Step 3: Submit the Proposal

* Select the account from which you want to submit the proposal (with sufficient balance to pay any fees)

* Enter the preimage hash related to the proposal (copied in the previous step)

* Set the locked balance. 

* Click the _Submit proposal_ button and sign the transaction

### Step 4: Seconding the Proposal

* Click the _Second_ button associated with the Proposal from the previous steps.

* Choose an account to second the proposal with the required deposit.
	* Note: The `MinimumDeposit` is specified in the [DataHighway's runtime configuration under "democracy"](https://github.com/DataHighway-DHX/DataHighway-Parachain/blob/main/runtime/src/lib.rs#L941)

* Click "Second" to broadcast the transaction.

* Repeat the above steps with other accounts that wish to second the proposal until it is tabled (brought to a referendum vote at an upcoming launch period).

* Wait until the `LaunchPeriod` ends, which is specified in the [DataHighway's runtime configuration under "democracy"](https://github.com/DataHighway-DHX/DataHighway-Parachain/blob/main/runtime/src/lib.rs#L937)

### Step 5: Voting on the Proposal

* Go to _Democracy_ page https://polkadot.js.org/apps/?rpc=wss://tanganika.datahighway.com#/democracy

* Go to the "Referenda" column

* Click the "Vote" button to cast a vote for or against the proposal and optionally lock up tokens longer to increase the weight of the vote.

* Click the "Vote" button to submit the transaction

* Repeat the above steps with other accounts that wish to vote on the referenda.

* Wait until the `VotingPeriod` ends, which is specified in the [DataHighway's runtime configuration under "democracy"](https://github.com/DataHighway-DHX/DataHighway-Parachain/blob/main/runtime/src/lib.rs#L938)

### Step 6: Transfer from the Multisig Proxy account to the Supernode

* Check that the recipient Supernode is able to receive and interpret transactions received from a Multisig account.

* Multisig Proxy account signaturies create a transfer to topup the Supernode with the DHX tokens that it received as a result of the referendum passing from approval voting by the community.

### Reference

* [Participating in Democracy on Kusama and Polkadot](https://wiki.polkadot.network/docs/maintain-guides-democracy/#proposing-an-action)

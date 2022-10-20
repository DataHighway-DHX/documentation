---
id: tutorials-become-delegator
title: How to become a Delegator
sidebar_label: Become Delegator
---

## How can the community participate in the daily block generation by participating as a delegator?
Delegators are community participants that contribute resources, (in this case DHX) to a certain node in order to get rewards.

To be a delegator please follow this steps:

1) To start, you need a Polkadot account, with a linked crypto wallet and a minimum balance of 10 DHX on it.

2) Go to this website: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer

3) In the upper bar click on Developer -> Extrinsic

4) On the field: “using the selected account” select the linked wallet

5) On the field: “submit the following extrinsic” select parachainStaking

6) On the field on the right, select joinDelegators(collator, amount)
 
7) On the field “collator”, Enter the address of collator node that you want to delegate upon

8)  On the field “amount”, write the amount you want to transfer to the collator. Important note: the amount needs to be in atto units. For example:
If you want to deposit 10 DHX, then you need to write 10.000.000.000.000.000
1DHX = 1.000.000.000.000.000 attoDHX

9) At the end, it should looks like this:

![Delegator01](/img/tutorial/Delegator01.png)

Where CHARLIE is the wallet, ALICE is the collator node and the deposit is 15DHX = 15.000.000.000.000.000.000 attoDHX (18 zeros)

## How can I see the list of active collators

1) Go to explorer chain state: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/chainstate

2) Select “parachainStaking” and “CandidatePool(AccountId32)”

3) Uncheck “Include option”

4) Submit the query

5) You should get the list of collators in node in detail


![Delegator02](/img/tutorial/Delegator02.png)

## How can I check the winner?

Every 12 seconds one block is produced on the DHX blockchain, which means that every 12 seconds there’s a winning collator that claims a reward. All the rewards claimed by the collator are shared between the Collator Node and their Delegators in proportion to their contribution.

So see the blockchain follow this steps:

1) Go to this website: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explorer

2) Make sure you are in the “explorer” tab
3) Let's break down the page:

![Delegator03](/img/tutorial/Delegator03.png)

* *Last block*: seconds count to get the next block. When it reaches the target, a new block is released
* *Target*: Interval of time between block releases
* *Total insurance*: total currency in circulation
* *Session*: every 50 blocks we start a new session

On the left side, there is the “recent blocks” module, which shows the recently added blocks to the blockchain. For example, in the block 678,560, the winner collator node was *C6Ek*

On the left side there is the ID of the event happening on real time.

*(3x)678.560-1* is the eventID. The *3x* part refers to the quantity of accounts that are contributing to the collator in that current block. 

In this case: 

$1 Collator Node + 2 Delegator = 3 Accounts$

## How can I check the rewards?

Every time a node is pushed to the blockchain by a collator node, the supporters of that node can claim rewards.

So check how much rewards are being distributed, follow this steps:

1) Go to this website: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftanganika.datahighway.com#/explore

2) On the left side, click on the event ID you want to check
Examples:
    * *(5x)683,210-1*
    * *(3x)683,213-1*
    * *(5x)683,216-1*
    * *(3x)683,222-1*

To continue the example, we pickup the *(3x)683,222-1*, which has 3 participants, 

$1 Collator Node + 2 Delegators$

It should looks like this:

![Delegator04](/img/tutorial/Delegator04.png)

On the middle left of the page, you will find *“system events”*. Click on the *“parachainStaking.Rewarded”*. There will be three lines with this title (because there are 3 contributors), click them all. It will looks like this:

![Delegator05](/img/tutorial/Delegator05.png)

5) The first entry, is the Collator Node, and its rewards are: 331,160,917,713,130 atto DHX

6) The second entry, is the one of the Delegators, and its rewards are: 52,555,237,641,073,731 atto DHX

7) The Third entry, is the second Delegators, and its rewards are: 16,558,045,885,656,500 atto DHX

8) If you sum all the rewards of that block, it will be 69.444.444.444.444.444 attoDHX, which is the total reward per block. Please check the Rewards article to learn more about how the rewards are calculated

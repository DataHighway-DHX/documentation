---
id: tutorials-bounties-create-bounty
title: Create Bounty
sidebar_label: Create Bounty
---

## How to propose a Bounty funded by a Treasury

#### Table of Contents

* [Treasury Spending Proposal Process](#treasury-spending-proposal-process)
* [Bounty Spending Proposal Process](#bounty-spending-proposal-process)

### Treasury Spending Proposal Process <a id="treasury-spending-proposal-process"></a>

##### Create Treasury Spending Proposal

* Proponent shall begin the process by issuing the Treasury's `proposeSpend` extrinsic.
  Note: Since the extrinsic does not allow an argument with a reason field so we could include a link to a URL posted on Polkassembly, we will have to includes the [Treasury Spending Proposal](#treasury-spending-proposal) together in the [Bounty Spending Proposal](#bounty-spending-proposal) on Polkassembly.
* Choose _Treasury_ extrinsic https://polkadot.js.org/apps/#/extrinsics
* Choose _proposeSpend_ >
  * Submitting account
  * Beneficiary account
  * <SPENDING_PROPOSAL_AMOUNT> (i.e. 100+ DOT)
  * Note: It automatically calculates the required deposit (i.e. highest of either 100 DOT or 5% of the above amount)

##### Deposit for Council Review of Treasury Spending Proposal

* Stakeholders requesting this treasury spending proposal shall reserve a deposit of 5% of the proposed spend (or the minimum of 100 DOT tokens) that are understand shall be refunded if the proposal is accepted, as mentioned here in the Polkadot Wiki https://wiki.polkadot.network/docs/learn-treasury

##### Submit Treasury Spending Proposal and Request Council Review

* Stakeholders request judgement from the Council of Polkadot's governance system to kindly consider accepting the treasury spending proposal for the distribution of funding (when available in an upcoming spend period) from the treasury after the current spend (waiting) period of 24 days.

##### Announce Scope of Treasury Spending Proposal

The scope of the treasury spending proposal described in [Template Treasury Spending Proposal](#template-treasury-spending-proposal) shall be announced along with the [Template Bounty Spending Proposal Work](#template-bounty-spending-proposal-work) using the following methods:

* [Polkassembly](https://polkassembly.io/)
* Polkadot Watercooler channel on Element - https://matrix.to/#/#polkadot-watercooler:web3.foundation

##### Prepare Template of the Treasury Spending Proposal <a id="template-treasury-spending-proposal-work"></a>

* Treasury Proposal: [TITLE OF PROPOSAL]

* Proponent: [DOT Address]

> HINT: Use the identity module on the address before submission of proposal to allow more certainty on the voting process

* Date: DD.MM.YYYY

* Bounty Spending Proposal ID: [INPUT HERE]

* Beneficiaries: [INPUT HERE]

> HINT: List the beneficiaries, how they will each contribute to the treasury spending proposal or the associated bounty spending proposal, and the proportion of the funds that will be distributed to them.

### Bounty Spending Proposal Process <a id="bounty-spending-proposal-process"></a>

A bounty spending proposal serves to allow delegation of the curation activity associated with a [Treasury Spending Proposal](#treasury-spending-proposal) from Council Members to Curators that are granted agency over a bounty-specific portion of the approved Treasury funds instead.

##### Prepare and Publish Bounty Spending Proposal

* Curators prepare the bounty spending proposal using [Template Bounty Spending Proposal Work](#template-bounty-spending-proposal-work), which uses the bouny spending proposal checklist template to ensure all information necessary for Council to make an informed decision is provided https://docs.google.com/document/d/1-IBz_owspV5OcvezWXpksWDQReWowschD0TFuaVKKcU/edit?usp=sharing
* Curator publishes the [Template Bounty Spending Proposal Work](#template-bounty-spending-proposal-work) on Polkassembly
* Curator must mention the [Treasury Spending Proposal](#treasury-spending-proposal) associated with the [Bounty Spending Proposal](#bounty-spending-proposal), since the Polkadot.js Apps UI does not currently allow propers of the treasury spending proposal to mention the associated bounty spending proposal.
* Curators request the help of a Councillor to open a bounty spending proposal

##### Create Bounty Spending Proposal

* Use Polkadot.js at https://polkadot.js.org/apps/#/bounties, click "Add Bounty"
* Explanation of bounty spending proposal is stored off-chain using a UTF-8 encoded URL that has been  posted on Polkassembly that includes the [Template Bounty Spending Proposal Work](#template-bounty-spending-proposal-work) and mentions the associated treasury spending proposal.
* Request assistance from a Council member to assist in passing the bounty proposal for vote as a motion, perhaps using Polkadot Governance Element room

##### Submit Bounty Spending Proposal for Acceptance

* Proponent (who may also be the Curator) with assistance from a Councillor, shall then:
  * Propose the bounty spending proposal by submitting it to the Council for acceptance
* Council activates the bounty and delegates the work that requires expertise to the Curator

##### Invite Curators for the Bounty Spending Proposal

* Assess Curators and choose those that have the following attributes to be capable of determining when the task is complete to ensure that the recommendations by the bounty applicants are an effective use of the mechanism:
  * Background and expertise to overseeing completion of the task by the bounty workers (well-balanced track record related to the issues the bounty tries to resolve, they should be at least knowledgeable on the topics the bounty touches and show project management skills or experience)

##### Submit Curator for the Bounty Spending Proposal

* Curator for the bounty spending proposal is put forward to the Council
* Council selects the Curator after the bounty proposal is accepted
* Curator makes an upfront deposit payment to take the position of Curator for the bounty spending proposal that shall be returned as part of the bounty reward if they successfull get someone to complete the bounty work

##### Tender Applications for the Bounty Spending Proposal

* Bounty applicants submit their tenders that addresses the [Template Bounty Spending Proposal Work](#template-bounty-spending-proposal-work) described below.

##### Assess the Tender Applications

* Curator assesses the bounty activities submitted by multiple applicants in their tender applications against the [Template Bounty Spending Proposal Work](#template-bounty-spending-proposal-work) with consideration for:
  * Bounty applicant experience, feasibility of bounty solutions proposed, value for money requested to perform the bounty work so as to solve the problem whilst benefiting the broader Polkadot ecosystem
* Curator publishes the outcomes of their tender assessment on behalf of the Council
* Curator approves the completion of the bounty spending proposal tasks.

##### Extend Lifetime of Bounty Spending Proposal (Optional)

* Curator may extend the default 90 days life of a bounty by amending the expiry block number of the bounty to stay active

##### Payout of Reward and Closure of Bounty Spending Proposal

* Curator assigns payout addresses for distribution of rewards to the selected bounty workers and curators that complete the specified [Template Bounty Spending Proposal Work](#template-bounty-spending-proposal-work) that needs to be executed for a predefined treasury amount to be paid out.
* Curator closes the active bounty to enact delayed payout (allows Council to act if issues arise) to the payout address of the Bounty Worker and payout to the Curator. See steps in https://wiki.polkadot.network/docs/learn-treasury#closing-a-bounty

##### Claim Rewards by Bounty Workers and Curators

* See steps in https://wiki.polkadot.network/docs/learn-treasury#closing-a-bounty

##### Prepare Template of the Bounty Spending Proposal Work <a id="template-bounty-spending-proposal-work"></a>

* Bounty Spending Proposal: [TITLE OF PROPOSAL]
> HINT: (i.e. Request Funding for Bounty Proposal #???)

* Proponent: [DOT Address]

> HINT: Use the identity module on the address before submission of proposal to allow more certainty on the voting process

* Date: DD.MM.YYYY

* Requested allocation value: [INPUT HERE]

* Proposed Curator reward: [INPUT HERE]

> HINT: Curators receive a percentage proportion of the the chosen bounty applicant value. The percentage is determined by the Proponent. CURATORS_FEE = TOTAL_BOUNTY_VALUE - BOUNTY_WORKERS_FEE 

* Short description:
  * Context of the bounty:
    * Context: [INPUT HERE]

    > HINT: Add context of any points discussed in advance in any channel related to the bounty proposal and background research for your project.

  * Topic and categories of the bounty:
    * Topic: [INPUT HERE]
    * Categories: [INPUT HERE]

    > HINT: Add the central topic of the bounty, and the general categories and topics it should be included in.

  * Problem statement:
    * Problem Statement: [INPUT HERE]
    * Topic Details: [INPUT HERE]
    * Category Details: [INPUT HERE]

    > HINT:
      * Explain using bullet points what problem the proposal is trying to solve
      * Detail the topics and categories that the bounty covers in granular detail to allow token holders to understand the logic behind it. 

  * Proposal objective and solution(s):
    * Goals: [INPUT HERE]
    * Success Criteria: [INPUT HERE]
    * Objectives: [INPUT HERE]
    * Success Factors: [INPUT HERE]
    * Milestones & Budgets & Tools: [INPUT HERE]
    * Solution Details: [INPUT HERE]

    > HINT:
      * Explain what the goal of the bounty is?
      * Explain what 'success' looks like in terms of solving the "Problem Statement"?
      * Add high level objectives and corresponding success factors.
      * Assign an informed budget cost breakdown to each bounty milestone, task, or specific goals
        * Quantify the milestones to increase the accuracy of the total allocation being requested
        * Add tools that may be used to develop the tasks, if any
        * Add an estimated timeframe and anticipated personnel to be involved in each task (i.e. Curator, Bounty Applicant)
      * Explain what your solution is after taking into consideration the "Context" and the "Problem Statement". Ensure all points included in the "Problem Statement" are addressed in granular detail to ensure a complete and balanced scope.
      * Describe how the propose solution option(s) shall benefit the broader Polkadot ecosystem
      * Describe the risks and benefits of each propose solution option(s) and the steps required for each.
      * Demonstrate the feasibility of each propose solution option(s)
      * Describe how the propose solution option(s) represent value for money

### References

* [Polkassembly Bounties](http://polkadot.polkassembly.io/bounties)
* [Polkadot Wiki - Bounties and Treasury](https://wiki.polkadot.network/docs/learn-treasury)

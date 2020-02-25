---
id: whitepaper
title: DataHighway's Whitepaper
sidebar_label: Whitepaper
---

<!-- Onn the Whitepaper page we need to show the left sidebar, otherwise on smaller
responsive views the Docusaurus-generated Table of Contents does not turn into
a hanburger menu. But when the left sidebar is shown it only shows a link "Whitepaper"
and uses up a large column space. So we want to hide it, but only on the Whitepaper
page, otherwise other pages won't display their left sidebar. Since this is a static
site we don't have access to the `window` object to conditioally apply globally defined
styles that are defined in website/static/css folder to only certain pages, so we're
using an alternative of defining a styles tag here where its styles will only apply to this
page -->
<style>
@media only screen and (min-width: 1024px) {
  .docsNavContainer {
    display: none !important;
  }
}
</style>

<span style="font-size: 2em; font-weight: 700;!important" class="pdf-only">DataHighway's Whitepaper</span>
<br />

<div class="background-custom"></div>

<div class="margin-sm"></div>

<span class="language-options" style='font-style: italic;'><span class="download-whitepaper">Read this in other languages:</span> <a href="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/docs/whitepaper.md" class="download-whitepaper" style="font-weight: 400; color: #00aaff !important;">English</a> <a href="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/docs/whitepaper.ko.md" class="download-whitepaper pretty-link-colored">한국어</a> <a href="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/docs/whitepaper.ja.md" class="download-whitepaper pretty-link-colored">日本語</a> <a href="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/docs/whitepaper.zh-cn.md" class="download-whitepaper pretty-link-colored">简体中文</a> <a href="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/docs/whitepaper.zh-tw.md" class="download-whitepaper pretty-link-colored">正體中文</a></span>
<!-- https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes -->
<br />

<span class="btn-download-wrapper">
    <a href="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/v1/whitepaper.pdf" class="btn-download button-color-1">DOWNLOAD WHITEPAPER</a>
</span>
<br /><br />

## Contributions

To contribute edits to this whitepaper, please submit pull requests to this repository with your changes. Refer to steps outlined in <a href="https://github.com/DataHighway-DHX/documentation/blob/master/CONTRIBUTING.md" target="_blank" class="pretty-link-colored">CONTRIBUTING</a> on how to Creating Issues and Pull Requests.

<div class="margin-sm"></div>

## Questions

If you have any questions, please join the <a href="https://discord.gg/KGTbv9Z" target="_blank" class="pretty-link-colored">DataHighway Discord</a> and ask in the #general channel.

<div class="page-break"></div>

<div class="pdf-only">
    <span style="font-size: 1.5em; font-weight: 700;" class="pdf-only">Table of Contents</span>
    <!-- INSERT TOC BELOW HERE -->
    <ul>
    <li><a href="#contributions">Contributions</a></li>
    <li><a href="#questions">Questions</a></li>
    <li><a href="#table-of-contents">Table of Contents</a></li>
    <li><a href="#introduction">Introduction</a>
    <ul>
    <li><a href="#dao">DAO</a></li>
    <li><a href="#mining">Mining</a></li>
    <li><a href="#inter-chain-data-market">Inter-Chain Data Market</a></li>
    <li><a href="#lpwan">LPWAN</a></li>
    <li><a href="#roaming">Roaming</a></li>
    </ul></li>
    <li><a href="#goals">Goals</a>
    <ul>
    <li><a href="#fair-distribution--decentralisation-model">Fair Distribution &amp; Decentralisation Model</a></li>
    <li><a href="#equal-participation-opportunity">Equal Participation Opportunity</a></li>
    <li><a href="#inter-chain-data-market-1">Inter-Chain Data Market</a></li>
    <li><a href="#roaming-1">Roaming</a>
    <ul>
    <li><a href="#fully-decentralized-roaming-solution">Fully Decentralized Roaming Solution</a></li>
    <li><a href="#compatibility-with-the-lora-alliance">Compatibility with the LoRa Alliance</a></li>
    <li><a href="#integrates-with-other-roaming-hubs">Integrates with other Roaming Hubs</a></li>
    <li><a href="#automated-billing--charging">Automated Billing &amp; Charging</a></li>
    <li><a href="#competitive-low-cost-fair-access-and-consumer-protection">Competitive (Low-Cost), Fair Access, and Consumer Protection</a></li>
    <li><a href="#interfaces">Interfaces</a></li>
    <li><a href="#intuitive-ux">Intuitive UX</a></li>
    </ul></li>
    <li><a href="#external-oracle">External Oracle</a></li>
    <li><a href="#scalability">Scalability</a></li>
    <li><a href="#security">Security</a></li>
    <li><a href="#auditable">Auditable</a></li>
    <li><a href="#plugins">Plugins</a></li>
    <li><a href="#dex">DEX</a></li>
    <li><a href="#api">API</a></li>
    </ul></li>
    <li><a href="#roadmap">Roadmap</a>
    <ul>
    <li><a href="#january-2020">January 2020</a></li>
    <li><a href="#february-2020">February 2020</a></li>
    <li><a href="#march-2020">March 2020</a></li>
    <li><a href="#april-2020">April 2020</a></li>
    <li><a href="#june-2020">June 2020</a></li>
    <li><a href="#july-2020">July 2020</a></li>
    </ul></li>
    <li><a href="#economic-configuration">Economic Configuration</a>
    <ul>
    <li><a href="#economic-variables">Economic Variables</a>
    <ul>
    <li><a href="#genesis-total-symbol">Genesis Total Symbol</a></li>
    <li><a href="#genesis-total-supply">Genesis Total Supply</a></li>
    <li><a href="#block-production--mining-time">Block Production / Mining Time</a>
    <ul>
    <li><a href="#comparison-with-other-networks">Comparison with Other Networks</a></li>
    </ul></li>
    <li><a href="#exchange-rate">Exchange Rate</a></li>
    <li><a href="#future-changes">Future Changes</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#token-issuance">Token Issuance</a>
    <ul>
    <li><a href="#token-issuance-options">Token Issuance Options</a>
    <ul>
    <li><a href="#block-authoring--production-rewards">Block Authoring / Production Rewards</a>
    <ul>
    <li><a href="#token-issuance-initial-rate">Token Issuance Initial Rate</a></li>
    <li><a href="#block-reward-issuance-rate">Block Reward Issuance Rate</a></li>
    <li><a href="#transactions-per-block">Transactions Per Block</a></li>
    <li><a href="#collators">Collators</a>
    <ul>
    <li><a href="#collator-pool-size">Collator Pool Size</a></li>
    </ul></li>
    <li><a href="#block-reward-treasury-fees">Block Reward Treasury Fees</a></li>
    </ul></li>
    <li><a href="#allocating-dao-treasury-unlocked-reserves">Allocating DAO Treasury Unlocked Reserves</a></li>
    </ul></li>
    <li><a href="#token-issuance-halving-inflation-strategy">Token Issuance Halving Inflation Strategy</a>
    <ul>
    <li><a href="#about-halving">About Halving</a></li>
    <li><a href="#impact--benefits">Impact &amp; Benefits</a></li>
    <li><a href="#frequency">Frequency</a></li>
    <li><a href="#longevity">Longevity</a></li>
    <li><a href="#transparency">Transparency</a></li>
    <li><a href="#comparison-with-halving-on-the-bitcoin-network">Comparison with Halving on the Bitcoin Network</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#token-acquisition">Token Acquisition</a></li>
    <li><a href="#dao-1">DAO</a>
    <ul>
    <li><a href="#treasury">Treasury</a>
    <ul>
    <li><a href="#unlocked-reserves">Unlocked Reserves</a></li>
    </ul></li>
    <li><a href="#future-monetary--fiscal-policies">Future Monetary &amp; Fiscal Policies</a></li>
    <li><a href="#financial-model">Financial Model</a>
    <ul>
    <li><a href="#balance-sheet">Balance Sheet</a></li>
    <li><a href="#cash-flow-statement">Cash Flow Statement</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#mining-1">Mining</a>
    <ul>
    <li><a href="#benefits">Benefits</a></li>
    <li><a href="#reward-options">Reward Options</a></li>
    <li><a href="#reward-types">Reward Types</a></li>
    <li><a href="#fixed-term-periods">Fixed Term Periods</a></li>
    <li><a href="#random-sampling-dates">Random Sampling Dates</a></li>
    <li><a href="#reward-spending--reinvestment">Reward Spending &amp; Reinvestment</a></li>
    <li><a href="#rules">Rules</a></li>
    <li><a href="#mining-speed-boost-msb">Mining Speed Boost (MSB)</a></li>
    <li><a href="#mining-loyalty-bonus-mlb">Mining Loyalty Bonus (MLB)</a></li>
    <li><a href="#mining-diversity-threshold-mdt">Mining Diversity Threshold (MDT)</a></li>
    <li><a href="#initial-asset-distribution">Initial Asset Distribution</a></li>
    <li><a href="#financial-model-1">Financial Model</a></li>
    <li><a href="#token-mining">Token Mining</a>
    <ul>
    <li><a href="#goals-1">Goals</a></li>
    <li><a href="#background--benefits">Background &amp; Benefits</a></li>
    <li><a href="#rights">Rights</a>
    <ul>
    <li><a href="#compounding-rewards">Compounding Rewards</a></li>
    </ul></li>
    <li><a href="#costs">Costs</a></li>
    <li><a href="#registration">Registration</a></li>
    <li><a href="#reward-calculation">Reward Calculation</a></li>
    <li><a href="#example-pop-icbam-combo-mining-for-voting-power">Example: PoP ICBAM Combo Mining for Voting Power</a></li>
    <li><a href="#transfer-bridge">Transfer Bridge</a></li>
    <li><a href="#inter-chain-asset-mappings">Inter-Chain Asset Mappings</a></li>
    </ul></li>
    <li><a href="#token-dex">Token DEX</a></li>
    <li><a href="#hardware-mining-hardware-as-collateral">Hardware Mining (Hardware as Collateral)</a>
    <ul>
    <li><a href="#background--benefits-1">Background &amp; Benefits</a></li>
    <li><a href="#goals-2">Goals</a></li>
    <li><a href="#costs-1">Costs</a></li>
    <li><a href="#registration-1">Registration</a></li>
    <li><a href="#reward-calculation-1">Reward Calculation</a></li>
    <li><a href="#rights-1">Rights</a></li>
    <li><a href="#financial-model-2">Financial Model</a>
    <ul>
    <li><a href="#example-pop-hardware-assets-combo-mining-for-voting-power">Example: PoP Hardware Assets Combo Mining for Voting Power</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#development-mining-runtimes--dapps-as-collateral">Development Mining (Runtimes &amp; DApps as Collateral)</a>
    <ul>
    <li><a href="#background--benefits-2">Background &amp; Benefits</a></li>
    <li><a href="#goals-3">Goals</a></li>
    <li><a href="#costs-2">Costs</a></li>
    <li><a href="#tags">Tags</a></li>
    <li><a href="#registration-2">Registration</a></li>
    <li><a href="#reward-calculation-2">Reward Calculation</a></li>
    <li><a href="#rights-2">Rights</a></li>
    <li><a href="#financial-model-3">Financial Model</a></li>
    </ul></li>
    <li><a href="#advocacy-mining-marketing-as-collateral">Advocacy Mining (Marketing as Collateral)</a>
    <ul>
    <li><a href="#background--benefits-3">Background &amp; Benefits</a></li>
    <li><a href="#goals-4">Goals</a></li>
    <li><a href="#costs-3">Costs</a></li>
    <li><a href="#tags-1">Tags</a></li>
    <li><a href="#registration-3">Registration</a></li>
    <li><a href="#reward-calculation-3">Reward Calculation</a></li>
    <li><a href="#rights-3">Rights</a></li>
    <li><a href="#financial-model-4">Financial Model</a></li>
    </ul></li>
    <li><a href="#governance-mining-governance-as-collateral">Governance Mining (Governance as Collateral)</a>
    <ul>
    <li><a href="#background--benefits-4">Background &amp; Benefits</a></li>
    <li><a href="#goals-5">Goals</a></li>
    <li><a href="#costs-4">Costs</a></li>
    <li><a href="#registration-4">Registration</a></li>
    <li><a href="#reward-calculation-4">Reward Calculation</a></li>
    <li><a href="#rights-4">Rights</a></li>
    <li><a href="#financial-model-5">Financial Model</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#roaming-2">Roaming</a>
    <ul>
    <li><a href="#economics">Economics</a>
    <ul>
    <li><a href="#payment-and-monthly-audit-process">Payment and Monthly Audit Process</a></li>
    <li><a href="#transaction-fees-subscription-based-or-ad-hoc-usage">Transaction Fees (Subscription-based or Ad-Hoc Usage)</a></li>
    <li><a href="#operations-fees">Operations Fees</a>
    <ul>
    <li><a href="#subscription">Subscription</a></li>
    <li><a href="#ad-hoc">Ad-Hoc</a></li>
    </ul></li>
    <li><a href="#default-roaming-fees">Default Roaming Fees</a></li>
    <li><a href="#changes-to-roaming-fees">Changes to Roaming Fees</a></li>
    <li><a href="#risks--mitigation-measures">Risks &amp; Mitigation Measures</a></li>
    <li><a href="#token-acquisition-dhx">Token Acquisition (DHX)</a></li>
    </ul></li>
    <li><a href="#data-storage">Data Storage</a>
    <ul>
    <li><a href="#storage-requirements">Storage Requirements</a></li>
    <li><a href="#storage-periodic-maintenance-and-migration">Storage Periodic Maintenance and Migration</a>
    <ul>
    <li><a href="#data-pruning">Data Pruning</a></li>
    <li><a href="#data-retention-and-periodic-migration">Data Retention and Periodic Migration</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#architecture">Architecture</a>
    <ul>
    <li><a href="#class-diagrams">Class Diagrams</a>
    <ul>
    <li><a href="#aggregations-of-smb-and-forwarding">Aggregations (of SMB and Forwarding)</a></li>
    </ul></li>
    <li><a href="#class-diagram-simplified">Class Diagram (Simplified)</a></li>
    <li><a href="#swimlane-flowchart-diagrams">Swimlane (Flowchart) Diagrams</a>
    <ul>
    <li><a href="#lpwan-supernode-network-setup-shared-identity--staking">LPWAN Supernode Network Setup, Shared Identity &amp; Staking</a></li>
    <li><a href="#gateway-setup--staking">Gateway Setup &amp; Staking</a></li>
    <li><a href="#end-device-setup--staking">End Device Setup &amp; Staking</a></li>
    <li><a href="#end-device-roaming-setup">End Device Roaming Setup</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#use-cases">Use Cases</a>
    <ul>
    <li><a href="#roaming-with-mxc-end-device-between-supernodes-registered-on-mxc-network">Roaming with MXC End Device between Supernodes Registered on MXC Network</a></li>
    <li><a href="#roaming-at-a-supernode-that-is-registered-on-the-mxc-network-using-an-end-device-from-a-different-network-operator-that-is-registered-on-thingpark-exchange-tex">Roaming at a Supernode that is registered on the MXC Network using an End Device from a different Network Operator that is registered on ThingPark Exchange (TEX)</a></li>
    <li><a href="#flowchart-diagrams">Flowchart Diagrams</a></li>
    <li><a href="#roaming-at-a-swisscom-network-server-ns-using-an-end-device-from-a-different-network-operator-eg-mxc-swisscom-that-is-registered-on-thingpark-exchange-tex">Roaming at a Swisscom Network Server (NS) using an End Device from a different Network Operator (e.g. MXC, Swisscom) that is registered on ThingPark Exchange (TEX)</a></li>
    </ul></li>
    <li><a href="#ux-design">UX Design</a>
    <ul>
    <li><a href="#proposed-roaming-integration-into-mxprotocol-of-lpwan-supernodes">Proposed Roaming Integration into MXProtocol of LPWAN Supernodes</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#inter-chain-data-market-2">Inter-Chain Data Market</a>
    <ul>
    <li><a href="#data-trading">Data Trading</a>
    <ul>
    <li><a href="#ux-design-1">UX Design</a></li>
    <li><a href="#class-diagram">Class Diagram</a>
    <ul>
    <li><a href="#data-item-end-device-data-listed-on-inter-chain-data-market--purchase-order-granting-access-with-data-validated--certified">Data Item (End Device Data) Listed on Inter-Chain Data Market &amp; Purchase Order Granting Access with Data Validated &amp; Certified</a></li>
    </ul></li>
    <li><a href="#swimlane-flowchart-diagrams-1">Swimlane (Flowchart) Diagrams</a>
    <ul>
    <li><a href="#data-seller-configures-end-device-sensor-data-frames-for-graphs-on-m2m-portal">Data Seller configures End Device (Sensor) Data Frames for Graphs on M2M Portal</a></li>
    <li><a href="#data-seller-configures-end-device-sensor-data-visualizations--monitoring-for-dashboard-on-inter-chain-data-market">Data Seller configures End Device (Sensor) Data Visualizations &amp; Monitoring for Dashboard on Inter-Chain Data Market</a></li>
    <li><a href="#data-seller-configures-sale--auction-of-end-device-sensor-data-listing-on-inter-chain-data-market">Data Seller configures Sale / Auction of End Device (Sensor) Data Listing on Inter-Chain Data Market</a>
    <ul>
    <li><a href="#data-buyer-requirements">Data Buyer Requirements</a></li>
    <li><a href="#data-buyer-choices">Data Buyer Choices</a></li>
    </ul></li>
    <li><a href="#data-buyer-purchases--bids-for-access-grant-to-end-device-sensor-data-listing-on-inter-chain-data-market">Data Buyer Purchases / Bids for Access Grant to End Device (Sensor) Data Listing on Inter-Chain Data Market</a>
    <ul>
    <li><a href="#data-buyer-payment-options">Data Buyer Payment Options</a></li>
    </ul></li>
    <li><a href="#data-buyer-accesses-sensor-data-frames-from-inter-chain-decentralized-app-dapp">Data Buyer Accesses Sensor Data Frames from Inter-Chain Decentralized App (DApp)</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#data-validation">Data Validation</a>
    <ul>
    <li><a href="#external-oracles">External Oracles</a>
    <ul>
    <li><a href="#purpose">Purpose</a></li>
    <li><a href="#definition">Definition</a></li>
    <li><a href="#types">Types</a></li>
    <li><a href="#risk-ratings">Risk Ratings</a></li>
    <li><a href="#example">Example</a></li>
    </ul></li>
    <li><a href="#swimlane-flowchart-diagrams-2">Swimlane (Flowchart) Diagrams</a>
    <ul>
    <li><a href="#validate--certify--store-external-data-frames-retrieved-using-oracles-notaries--data-storage-backend">Validate &amp; Certify &amp; Store External Data Frames Retrieved using Oracles, Notaries &amp; Data Storage Backend</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#data-monitoring">Data Monitoring</a>
    <ul>
    <li><a href="#business-concept-diagram">Business Concept Diagram</a></li>
    </ul></li>
    </ul></li>
    <li><a href="#application-ecosystem">Application Ecosystem</a></li>
    <li><a href="#technical-model">Technical Model</a>
    <ul>
    <li><a href="#consensus">Consensus</a></li>
    <li><a href="#custom-substrate-runtime-modules">Custom Substrate Runtime Modules</a></li>
    <li><a href="#node">Node</a></li>
    <li><a href="#other-infrastructure">Other Infrastructure</a></li>
    </ul></li>
    <li><a href="#glossary">Glossary</a>
    <ul>
    <li><a href="#mining-2">Mining</a></li>
    <li><a href="#roaming-3">Roaming</a></li>
    </ul></li>
    <li><a href="#abbreviations">Abbreviations</a>
    <ul>
    <li><a href="#mining-3">Mining</a></li>
    <li><a href="#roaming-4">Roaming</a></li>
    </ul></li>
    <li><a href="#references">References</a></li>
    <li><a href="#appendices">Appendices</a>
    <ul>
    <li><a href="#appendix-1-general---technical-model-of-substrate">Appendix 1: General - Technical Model of Substrate</a>
    <ul>
    <li><a href="#integration-of-the-data-highway-parachain-into-the-polkadot-network">Integration of the DataHighway Parachain into the Polkadot network</a></li>
    </ul></li>
    <li><a href="#appendix-2-roaming---lorawan-technology">Appendix 2: Roaming - LoRaWAN Technology</a></li>
    <li><a href="#appendix-3-roaming---use-case-alice-and-bob">Appendix 3: Roaming - Use Case (Alice and Bob)</a>
    <ul>
    <li><a href="#assumptions">Assumptions</a></li>
    <li><a href="#user-personas">User Personas</a></li>
    <li><a href="#user-story">User Story</a></li>
    </ul></li>
    </ul></li>
    </ul>
</div>

<div class="page-break"></div>

## Introduction

The decentralised DataHighway (DH) economic system for the future of IoT will have a monetary system of the DHX token.

#### DAO

It will not have a central authority to regulate its monetary base and fiscal policy, instead it will be regulated by the DHX DAO, which will govern future growth strategies.

#### Mining

It will allow users to be rewarded in return for participation.

#### Inter-Chain Data Market

The DataHighway's (DHX) Inter-Chain Data Market allows participants to become data providers and to share IoT data from their devices to application developers in exchange for DHX tokens.

#### LPWAN

A category of devices that run on low bandwidths (less than 125kHz, 200bps) with low power consumption (less than 2W when transmitting). Typically the technologies involved include LoRaWAN, Sigfox, Weightless, NB-IoT.

#### Roaming

Devices (LPWAN IoT End Devices) are owned by Data Providers and registered at a "home" Network Server (or Supernode that has purchased a specific Network ID) that belongs to a specific Network Operator (such as the MXC Network).

Data Consumers may request to be granted access to receive packets of data that have been uplinked from a device, which may require purchasing ad-hoc access or a subscription from the DataHighway's Inter-Chain Data Market (see separate "Inter-Chain Data Market" Whitepaper).

Device owners may enable or disable roaming and associated payments via the LPWAN Supernode Portal.

Supernode owners may also choose to restrict access to roaming devices via the LPWAN Supernode Portal.

DataHighway (DH) is an implementation of an open-source and fully decentralised roaming service that allows LPWAN IoT End Devices that have enabled roaming to move out of the network coverage area of their "home" Network Server and into the network coverage area of a "visited" Network Server, where the "visited" Network Server may query the DataHighways distributed ledger (database storage) to retrieve information such as whether the device has enabled roaming, and whether an individual party to party (bilateral) roaming agreement has been established between the Network Operator of the "visited" Network Server and the Network Operator of the "home" Network Server. If the roaming join request is accepted then the packets of data that are uplinked when roaming will be forwarded such that Data Consumers gain continuous access to the data.

The Network Server's are referred to as MXC Supernodes if they have purchased a Network ID and belong to the MXC Network. Other technologies like Sigfox and NB-IoT can also participate through Network ID based roaming.

It will be compatible with the latest LoRaWAN Backend Interface Specification <a href="#reference-d7d9a7" class="pretty-link-colored">[d7d9a7]</a>. A public API will be exposed that anyone (including but not limited to LoRa Alliance DNS Operators and LoRa Alliance members) may access to allow them to setup and immutably store and retrieve information about roaming network operators (decentralized LPWAN DNS Service), networks (decentralised LPWAN Roaming Service, including purchase price for network ids), users (and their priveleges), organizations, roaming policies (accounting, billing, charging, adjustments), and profiles (routing, service).

Supernodes implement the MXProtocol and provide a user-interface (UI). This UI shall be updated to allow Supernode owners and stakeholders to interact with this API, as shown in these <a href="#Proposed-Roaming-Integration-into-MXProtocol-of-LPWAN-Supernodes" class="pretty-link-colored">proposed changes</a>.

Other roaming hubs that choose to store their roaming policies and agreements on the DataHighway will be supported in their efforts. Alternatively the MXC Foundation gGmbH, Lora Alliance, Sigfox and 3GPP will facilitate the bridge between other centralized and decentralized roaming hubs and the DataHighway. See Page 22 of MXC Technical Paper <a href="#reference-dd4565" class="pretty-link-colored">[dd4565]</a>

<div class="page-break"></div>

## Goals

### Fair Distribution & Decentralisation Model

* No pre-mining (no DHX coins in circulation before announcement to achieve the concept of decentralisation)
* No ICO

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-dhx.png">
</div>

<div class="figure-text">Figure: Overview of Mining in the DataHighway</div>

<div class="page-break"></div>

### Equal Participation Opportunity

MXC has designed a low barrier to entry to allow anyone to participate in the DH.

### Inter-Chain Data Market

* Integrates with other traditional data platforms such as IoTA, Streamr, Waltanchain, and Mobius.
* Live data streams shared by IoT data providers are purchasable.

### Roaming

#### Fully Decentralized Roaming Solution

The goal is to create a fully decentralized LPWAN Roaming hub solution that uses the Parachain Operator layer of the MXProtocol Architecture and provides a decentralized LPWAN Roaming Packet Forwarding Service.

Refer to the proposed implementation of the DataHighway on Page 2 of MXC's Data Economy Whitepaper <a href="#reference-7c63ac" class="pretty-link-colored">[7c63ac]</a>.

MXProtocol Architecture is implemented into the LPWAN App Server and LPWAN Server codebases, which are based on ChirpStack's LoRa App Server and LoRa Server respectively. Refer to the summary of <a href="#Appendix-2-LoRaWAN-Technology" class="pretty-link-colored">LoRaWAN Technology</a>

<div class="image-wrapper">
    <img src= 'https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-architecture-lorawan.png' />
</div>

<div class="figure-text">
    Figure LoRa App Server Architecture <a href="#reference-a90861" class="pretty-link-colored">[a90861]</a>
</div>

#### Compatibility with the LoRa Alliance

It will be compatible with the LoRa Alliance DNS Service Requirement (both the LoRa Alliance Roaming Service and OTAA Service) and the latest LoRaWAN Backend Interfaces Specification (see Section 20).

Implementations of the LPWAN App Server and LPWAN Server will be updated to be compatible with the latest implementation of Chirpstack.

#### Integrates with other Roaming Hubs

* Integrates with other existing and upcoming:
  * Centralized roaming hubs such as ThingPark Exchange.
  * Decentralized roaming hubs (if any).

#### Automated Billing & Charging

* Financial settlement of exchanged roaming-specific data handled on the DataHighway

#### Competitive (Low-Cost), Fair Access, and Consumer Protection

* The exposed API will be public so anyone may access it.
* Competition across a growing number of Supernodes will drive roaming fees down to democratise access to roaming so it is affordable for everyday users
* Roaming Agreements shall be negotiated between Network Operators
* Standards shall be established so there is logic and consistency between these bilateral agreements that will be openly accessible, which will drive Network Operators to seek other means to remain competitive. This is a remarkably better than the approach that is taken in mobile phone roaming, where there is a lack of transparency and insight available surrounding such similar agreements that are argued to be commercially sensitive based on the grounds that this is necessary for Network Operators to remain competitive, and whether the market strength of the parties involved are known to influence the terms of the agreements <a href="#reference-4948eb" class="pretty-link-colored">[4948eb]</a>.

#### Interfaces

* Telemetry
  * Polkascan
* LoRa Implementation
  * ChirpStack

#### Intuitive UX

The LPWAN Supernode Hub has a modern and intuitive interface that allows IoT End Device and Gateway owners to easily toggle whether their device will participate in roaming. See MXC SMB Whitepaper <a href="#reference-c63390" class="pretty-link-colored">[c63390]</a>.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/ui-supernode-gateway.png">
</div>

<div class="figure-text">Figure: Toggle Roaming participation in Gateway User Panel (example implementation with DataHighway)</div>

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/ui-supernode-device.png">
</div>

<div class="figure-text">Figure: Toggle Roaming participation in End Device User Panel (example implementation with DataHighway)</div>

### External Oracle

Refer to <a href="#Data-Validation" class="pretty-link-colored">Data Validation</a> section.

### Scalability

The DataHighway will be a Polkadot parachain that is forecast to support at least 10 TPS. Refer to quote from reference document below, which was reviewed by Dr Gavin Wood. Quote from the blog post:

*"Depending on the block production algorithm and parameters, the transaction throughput of each chain can vary, and thus the overall throughput of the Polkadot network can only be estimated. The first version of Polkadot will allow up to 100 parachains, and assuming each can support at least 10 transactions per second (TPS), a lower bound on throughput would be about 1000 TPS."*

Only a limited amount of End Devices will be roaming initially, but scalability is still important for future proofing. In contrast the DataHighway's Inter-Chain Data Market (separate section under this Whitepaper) will require a higher TPS since it includes a DEX. See Smart Contract Platforms Blogpost <a href="#reference-2c6aa0" class="pretty-link-colored">[2c6aa0]</a>.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-dhx-scaling.png">
</div>

<div class="figure-text">Figure: DataHighway Scaling Solutions</div>

### Security

* Secure End2End mechanism to ensure data streams may be copied and transmitted sequentially from Data Providers (owners of IoT End Devices) to Data Buyers (consumers).

### Auditable

* Generation and flow of data may be tracked and verified publicly on-chain to solve security issue of trustworthiness.

### Plugins

* Plugin architecture offering compatibility with third-party tools (see Data Monitoring). Example: Grafana <a href="#reference-5fa3e9" class="pretty-link-colored">[5fa3e9]</a> with Alibaba Cloud <a href="#reference-7a1075" class="pretty-link-colored">[7a1075]</a> (or similar equivalent)
* Data stacked in bundles and purchasable in future

### DEX

* Financial settlement of exchanged data may be handled by the DataHighway for roaming payments.

### API

* Expose API endpoints, such as to access data from the data market, which may be roaming-specific. Refer to the <a href="#Technical-Model" class="pretty-link-colored">API Section</a>.

<div class="page-break"></div>

## Roadmap

### January 2020

- DataHighway Initial Website Published
- DataHighway Combined (Mining, Inter-Chain Data Market, and Roaming) Whitepaper Released (Open-Source)
- DataHighway Roaming Preliminary Design Implementation Published on Github (Open-Source)

### February 2020
- DataHighway Testnet (Mining Only) on Substrate-based chain using PoA collators
- DataHighway Roaming Draft Implementation Reviewed by Parity (Substrate Builders Program)
- DataHighway Roaming Detailed Design Implementation Published on Github (Open-Source)
- DataHighway Parachain Slot Auction on Polkadot Testnet
- DataHighway Blockchain ported to Polkadot Parachain using Cumulus

### March 2020
- DataHighway Roaming Final Design (integration of Backend Interface 1.0 Specification)
- DataHighway Testnet (Mining Only) on Substrate-based chain using NPoS collators

### April 2020
- Polkadot Mainnet Launch. See <a href="https://cdn.discordapp.com/attachments/664878094846525440/667004774062751770/unknown.png" target="_blank" class="pretty-link-colored">Extract from Discord Discussion</a>
- Data Highway Mainnet (Mining Only) on Polkadot-compatible Parachain using Substrate's Cumulus Framework <a href="#reference-4330ba" class="pretty-link-colored">[4330ba]</a> or the Parachain Development Kit (PDK) with a Polkadot Parachain Slot <a href="#reference-3b726b" class="pretty-link-colored">[3b726b]</a>
- Data Highway Testnet (Roaming + Mining) on Substrate-based chain using PoA collators

### June 2020
- DataHighway Mainnet Upgrade (Roaming + Mining)
- DataHighway Testnet (Roaming + Mining + Inter-Chain Data Market) on Substrate-based chain using PoA collators

### July 2020
- DataHighway Mainnet Upgrade (Roaming + Mining + Inter-Chain Data Market)

<div class="page-break"></div>

## Economic Configuration

### Economic Variables

The initial economic variables shown in the table below were decided upon through optioneering and may be configured:

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/table-dhx-economic-variables.png">
</div>

<div class="figure-text">Table: DataHighway Economic Variables</div>

#### Genesis Total Symbol

DHX

#### Genesis Total Supply

It was deemed safer to choose a larger supply incase DHX needs to be deflated, and incase the DAO does not elect to increase it through a chain upgrade.

#### Block Production / Mining Time

* DH's estimated block time: 9 seconds

##### Comparison with Other Networks

* ChainX's estimated block time: 10 sec
* Ethereum's estimated block time: 10-19 seconds
* Bitcoin's estimated block time: 10 mins

* References:
    * Mystery Behind Blocktime <a href="#reference-180b38" class="pretty-link-colored">[180b38]</a>
    * Bitcoin Block Halving <a href="#reference-305bf5" class="pretty-link-colored">[305bf5]</a>

#### Exchange Rate

In the calculations the example exchange rate for the DHX/USD pair is 1.0.

#### Future Changes

The DHX DAO may elect to make a protocol change these economic variables.

<div class="page-break"></div>

## Token Issuance

### Token Issuance Options

The issuance of the DHX token is through either:
* Block Authoring / Production Rewards - DHX to NPoS Collators for producing a block
* Unfreezing DAO Treasury Unlocked Reserves - DHX entitlements claimed through DAO approval in a democratic way
* Decentralised/Centralized Exchange - DHX exchanged for other assets

#### Block Authoring / Production Rewards

The initial token issuance halving inflation strategy cycle (halving of the block production reward) shall occur every four (4) years using the "Decreasing-Supply Algorithm".

<div class="image-wrapper">
    <img style="width: 75%;" src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/table-dhx-token-issuance-halving.png" />
</div>

<div class="figure-text">Table: Token Issuance Halving</div>

Note: Calculations after 2030 are not shown for brevity.

##### Token Issuance Initial Rate

The BAT impacts the rate of inflation, and is a measure of the frequency of block production and distribution <a href="#reference-fa094e" class="pretty-link-colored">[fa094e]</a> of block rewards to collators and nominators.

A faster block time may increase the hardware cost to run a collator node.

##### Block Reward Issuance Rate

The target block reward issuance rate is below one (1) DHX per minute, which depends on the following:
* Block reward size (in DHX)
* BAT
* BPT
* TPB
* Max. TPB
* Block production consensus algorithm (i.e. Aura)

In a Substrate-based network using Proof of Authority (PoA) the only available consensus algorithm is Aura <a href="#reference-903282" class="pretty-link-colored">[903282]</a>.

Using Aura consensus the block producer when constructing a block must not take longer than the block time to inject transactions, otherwise the block production will stall and that block proposal will be discarded with error `block production took too long`.

##### Transactions Per Block

The maximum transactions that may be injected per block in a Substrate-based chain has been tested to be approximately 90 <a href="#reference-37cb7c" class="pretty-link-colored">[37cb7c]</a> because with Aura consensus block production cannot take longer than the BAT to produce. This increases the BAT to 9 seconds, and equates to a supported throughput of 10 TPS per parachain.

* Reference
    * On the Origin of Polkadot <a href="#reference-c18c08" class="pretty-link-colored">[c18c08]</a>

##### Collators

###### Collator Pool Size

The preferred collator pool size to secure the blockchain at genesis and prior to switching from the soft launch testnet to mainnet is over fifty (50) and the target collator pool size is 100-200 to provide contingency incase of collator misbehaviour.

The maximum collator pool size depends on the BPT and should avoid negatively impacting the BAT.

The proportion of collators that should always be online to secure the blockchain is 80-90%.

The forecast collator pool size staking at genesis is 100.

The consensus node capacity shall be 1000 (same as ChainX).

<div class="image-wrapper">
    <img style="width: 75%;" src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/table-dhx-block-production-rate-reward.png"/>
</div>

<div class="figure-text">Table: Block Production Rate & Block Reward</div>

Note: Block reward treasury and collator fees have been calculated using the treasury and collator fee rates respectively.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/table-collator-estimate-roi.png" />
</div>

<div class="figure-text">Table: Collator Estimated ROI</div>

<div class="image-wrapper">
    <img style="width: 75%;" src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/table-block-reward-distribution.png" />
</div>

<div class="figure-text">Table: Block Reward Distribution</div>

<!-- Reference https://docs.google.com/spreadsheets/d/1W2AzOH9Cs9oCR8UYfYCbpmd9X7hp-USbYXL7AuwMY_Q/edit#gid=267871386 -->

##### Block Reward Treasury Fees

The block reward treasury fees is the amount remaining after collator fees. They are transferred into the DHX DAO Treasury and a proportion is used to satisfy the Monetary Reserve Ratio <a href="#reference-89198f" class="pretty-link-colored">[89198f]</a>.

#### Allocating DAO Treasury Unlocked Reserves

* The DHX DAO's Treasury Unlocked Reserves will be allocated 30% (as shown in Table 1) of the Total Supply at the genesis block. DHX DAO community approval will be required to allocate and distribute the DHX DAO's Treasury Unlocked Reserves as rewards based on the MSB and/or MLB they are entitled to whilst staking DHX as a collator or nominator:
    * Proof of Participation (PoP)
        * MSB
            * Max. 20% MSB Per Proposal
                * Token Mining (ICBAM)
                    * Locking of assets that are supported
                    * Signalling
                        * Token Miners that wish to only signal (rather than locking) attract **10%** of the lowest locking MSBs
            * Max. 40% MSB Per Proposal
                * Hardware Assets Mining
                    * Partially subsidising new setup costs of Secure LPWAN hardware through the DHX DAO Treasury for "early majority adopters" in new regions incase hardware and cloud costs have not reduced despite a halving, and to subsidise upgrade costs for "early adopters" incase hardware and cloud costs have not reduced despite a halving.
                * Development Mining
                    * To improve DApps
                * Advocacy Mining
                    * Creating standards and patterns to satisfy community expectations, and discovering ways to maintain low transaction fees (that collators may rely on) to maintain a low barrier to entry for new DataHighway users (unless an increase in DHX price and transaction fees is supported due to rapid adoption) and prevent causing IoT fees to become prohibitively expensive, and to reduce hardware and hosting costs to maintain ROI
                * Governance Mining
        * MLB
            * Max. 20% MLB Per Proposal
                * Proof of Loyalty (PoL)
* The remaining genesis supply shall be used for block production rewards (excluding MSB and MLB).
* Max. PoP Distribution Approval:
    * < 1000 DHX approved max. once per day.
    * >= 1000 DHX approved max. once per week.

### Token Issuance Halving Inflation Strategy

#### About Halving

#### Impact & Benefits

The DH's monetary policy may apply a halving to encourage early production (collator BAT) sparking an inflation strategy, where after each halving period the size of the block reward that is given to a collator for producing a block is halved, and the collator may share the block reward with its nominators.

* An event where the number of generated DHX rewards earned by miners per block will be halved (divided by 2). The number of DHX found per block will become more scarce. The halving reward ensures that DHX total supply will reach its target cap.
* Traditionally in Bitcoin the expected block time was set at a constant value to make sure miners could not impact the security of the network by adding more computational power.
* DHX miners may proposed the DHX DAO to have a dynamic block time.
* Each DHX halving lowers DHX's inflation rate.
* DHX miners would be incentivized to maintain the network even when the reward becomes very small because they would have a say in the direction of the DH and may still be collecting fees for:
    * Automatic Governance Voting power
    * Manual PoP

The initial halvings have higher reward per block that provides a higher potential Return on Investment (ROI) to early collators, nominators, and PoP participants (those eligible for a MSB and/or MLB that is approved by the DHX DAO) in order to incentivise adoption and adequately fund early adopters' onboarding setup and contribution costs where the following may be apparent:
* Steeper learning curve costs
* Higher software and hardware costs
* More frequent upgrades and volatility

Additionally there should be an incentive for collators to:
* Lower transaction fees to reduce the barrier to entry for new DataHighway users, which is also an overarching IoT goal.

#### Frequency

Halving is the initial strategy that was chosen through optioneering to be used for the issuance of DHX through block rewards, and will be defined in the blockchain genesis configuration. The criteria was for halving to occur more frequently that every seven (7) years and less frequently than two (2) years to allow sufficient time for initial adoption.

#### Longevity

Halving will continue until the total supply is issued or unless a protocol upgrade is made to change the strategy.

#### Transparency

It is important for the market to know the halving dates upfront (when the supply is scheduled to reduce) to allow gradual adaption and to avoid sharp volatility in the DHX price.

#### Comparison with Halving on the Bitcoin Network

Historically, the Bitcoin network adopted the halving strategy as follows:

* Block #210,000 on November 28th, 2012. Block reward halving from 50 BTC to 25 BTC. At this block, 10,500,000 BTC had been mined, 50% of the target cap
* Block #420,000 on July 9th, 2016. Block reward halving from 25 BTC to 12.5 BTC.
* Block #630,000 on May 21th, 2020.

* All 21 million bitcoins (BTC) will be mined by 2140. But more than 98% will be mined by 2030.

<div class="page-break"></div>

## Token Acquisition

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-dhx-reward-types.png" />
</div>

<div class="figure-text">Figure: Rewards Types on the Data Highway</div>

In addition to Data Traders earning through the savings they make as a result of the democratisation of data using the decentralised DataHighway, the Inter-Chain Data Market incentives users to participate in order to potentially earn more DHX tokens, as follows:

* Data Trading Transaction Fees
    * 1% from each trade is pooled into the DHX DAO Treasury and may be automatically distributed to eligible candidates each month that must have initiated at least one trade above 0 DHX that was executed that month.
* Data Validation Transaction Fees
    * 1% toward Data Validation (Oracle Services) that may be automated to prove to the DHX DAO that they validated at least one transaction that was committed to the blockchain and was not disputed as being invalid data for at least 3 months. Preferred providers may arrange to have their proofs submitted automatically.
* Data Certification Transaction Fees
    * 1% toward Data Certification (Notary Services) that may be automated to prove to the DHX DAO that they certified at least one transaction that was committed to the blockchain and was not disputed as being invalid data for at least 3 months.

Other means of acquiring DHX tokens at through participating as follows:

* Network-related Rewards
    * NetID Fixed Fees
        * DHX DAO earns DHX by charging a fee each time an organisation buys a NetID to operate a Supernode on the MXC network.
    * Supernode Transaction Fees
        * Organisations that register a Gateway or End Device need to top up their MXC balance and stake it on a Supernode. Supernodes must have MXC staked with them since they rely on using that MXC for making Contour Payments based on the outputs of Smart Machine Bidding (SMB). Supernodes may only earn a 0.8% transaction fee on each Smart Machine Bidding (SMB) output (paid to them in MXC) when there is MXC staked with them. Supernodes may then exchange that MXC for DHX if they wish. Supernodes may also run a Collator node on the same host machine.
    * Supernode Staking Rewards (Quarterly)
        * Organisations that own Supernodes, Gateway and End Devices or just stake MXC on Supernodes will earn staking rewards that are distributed quarterly from 10% of Supernode staking returns (staking benefits come from the Supernode Transaction Fees pool).

* Data-related Rewards
    * DHX DAO Treasury Fees
        * Proportion of block rewards.
    * Collator Node Block Rewards & Nominator's Proportion
        * Network Server hosts that earn DHX from running Collator node, staking DHX on it, and earning DHX from block rewards that are split equally amongst the Collators, and may be shared with their Nominators.
    * Supernode Data Market Purchase Fee
        * Supernodes earn a proportion of each Inter-Chain Data Market Purchase (e.g. 0.1%)
    * Roaming Fees
        * Network Operators benefit from interoperability through decentralised DNS and earn DHX from roaming fees.
        * Supernodes that earn DHX from roaming fees.
    * Mining Base (Voting Power) Rewards
        * Data participants that earn interest in DHX from just holding DHX, MXC, IOTA, and DOT (without even locking it) that may be paid for using a proportion of the Token Mining boost of up to 1.2x their DHX staking profits (if they are also staking DHX as a Collator Node or Nominator), and where the MSB is always issued through DHX DAO approval. Mining Base (Voting Power) is paid for using a proportion of the MSB (if any), where MSB is always issued through DAO approval.
    * Mining-Speed Boosts (MSB)
        * Token Mining by registering that any of the following tokens have been locked for a period of time: DHX, MXC, IOTA, or DOT. Paid for using DHX DAO Treasury's Unlocked Reserves.
        * Token Mining by Signalling, where they just hold DHX, MXC, IOTA, and DOT (without even locking it) and may be eligible to claim **10%** of the lowest locking MSBs rates and apply it to their DHX staking profits (if they are also staking DHX as a Collator Node or Nominator), and where the MSB is always issued through DHX DAO approval.
        * Hardware Mining owners (i.e. End Devices, Gateway owners, Supernode owners, Collator Nodes), DHX DAO Governance participants (from the Council that audit referendums or other participants that vote on Council elections or help to organise resolution of other proposals such as categorising, proposing financial impact, disputes) where they may earn the Non-Token Mining boost of up to 1.4x their DHX staking profits through MSB.
        * Data buyers such as Inter-Chain Data Market buyers that use DataHighway data in DApps that may be from other chains (e.g. IOTA) and increase adoption in the IoT data economy overall, thereby participate in Development Mining and/or Advocacy Mining through API referrals which contributes to the potential Non-Token Mining boost of up to 1.4x their DHX staking profits through MSB.
    * Mining Loyalty Boost (MLB)
        * Loyal MXC holders that held MXC prior to the launch of the DataHighway may earn a boost of up to 1.2x their DHX staking profits through the MLB. Paid for using DHX DAO Treasury's Unlocked Reserves.
    * Combo Boost
        * Up to 1.2x their DHX staking profits (a proportion of the Token Mining boost) by both staking MXC and either staking DHX or Token Mining at the same time.

<div class="page-break"></div>

## DAO

The DHX DAO allows for distributed community membership, governance, and funding.

It shall be based upon Sunshine DAO <a href="#reference-effe0d" class="pretty-link-colored">[effe0d]</a>, which ProtoShine <a href="#reference-aa9e13" class="pretty-link-colored">[aa9e13]</a> is based upon.

### Treasury

#### Unlocked Reserves

The unlocked reserves are 30% of the genesis total supply of DHX.

### Future Monetary & Fiscal Policies

In future the community-governed DHX DAO may elect to make protocol changes.

The goal is to issue DHX at a rate matching growth in assets exchanged so that the assets may be traded at stable prices.

The DHX DAO may approve proposals to adopt strategies such as:
* Regulating the total supply (monetary base)
* Incentivising spending (transactions), borrowing, and investment (staking) through:
    * Lowering interest rates, DHX DAO Treasury fees, and Collator fees
    * Quantitative easing <a href="#reference-3bbaf1" class="pretty-link-colored">[3bbaf1]</a> using the DHX DAO Treasury's Unlocked Reserves to stimulate spending and the DH's economic growth by encouraging lenders such as the DHX DAO to lower their interest rates in order to increase overall lending and investment from borrowers without directly increasing the total supply in circulation.
* Restricting spending to slow inflation in an overheating economy

A rise in the DHX price is anticipated to occur gradually after each halving since it forces an increase in demand for obtaining DHX from the market when there is a reduction in new supply from block rewards and transaction fees.

If the DHX DAO does not step in and change the initial halving strategy then the ROI for collators, nominators, and ICBAMs may reduce and they may decide to stop securing the network.

The DHX DAO is recommended to introduce disruption by trying different strategies (similar to the MDT) to encourage collators, nominators, and ICBAMs to diversify their investments and also reap rewards via other means of participation (i.e. PoP Non-ICBAM instead of just PoP ICBAM) to grow adoption of the network.

They should be incentivised to participate in DHX DAO on-chain governance to promote innovation and growth in adoption through proposals to upgrade the chain, and to distribute rewards using the DHX DAO genesis allocation for future PoP.

After genesis whenever the DHX DAO Treasury (i.e. MXC Foundation) collators get the block production reward, they will request from the DHX DAO Treasury to allocate part of the DHX DAO Treasury's Unlocked Reserves (that were minted by the Monetary Reserves and stored in the DHX DAO Treasury) that corresponds to their stake and MSB entitlement (likely the full 20%), and they will store them in the DHX DAO Treasury's Unlocked Reserves (to be used for quantitative easing <a href="#reference-3bbaf1" class="pretty-link-colored">[3bbaf1]</a> purposes).

The DHX DAO Treasury may in future at any time, when interest rates from lenders are low, adopt that strategy by requesting DHX DAO approval to reinvest a proportion of their Unlocked Reserves into the target assets <a href="#reference-c98d3f" class="pretty-link-colored">[c98d3f]</a> (i.e. MXC, IOTA, DOT) that will then be locked for PoP ICBAM to maintain the highest MSB (since the minimum inter-chain asset holding amount that is required to achieve the highest MSB may increase over time) for their stake to further increase the DHX DAO Treasury's liquidity and the DHX supply (by allocating Entitlement Fees from the Unlocked Reserves to be used for MSB).

<div class="page-break"></div>

### Financial Model

#### Balance Sheet

The Balance Sheet reports for a specific moment in time the DHX DAOs statement of financial balances position, including assets, liabilities, and shareholder's equity, to reflect the equation `Assets = Liabilities + Stockholders' Equity`, where the working capital `Assets - Liabilities` may be compared with the `Stockholders' Equity`.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/table-dhx-balance-sheet.png" />
</div>

<div class="figure-text">Table: DataHighway Balance Sheet</div>

<!-- Reference https://docs.google.com/spreadsheets/d/1W2AzOH9Cs9oCR8UYfYCbpmd9X7hp-USbYXL7AuwMY_Q/edit#gid=267871386 -->

#### Cash Flow Statement

The DH's Cash Flow Statement reports for a period of time how changes in the Financial Balance Sheet affect its monetary position.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/table-dhx-cashflow-statement-part1of3.png" />
</div>

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/table-dhx-cashflow-statement-part2of3.png" />
</div>

<div class="image-wrapper">
    <img src ="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/table-dhx-cashflow-statement-part3of3.png" />
</div>

<div class="figure-text">Table: DataHighway Cash Flow Statement</div>

<!-- Reference: https://docs.google.com/spreadsheets/d/1pVp7wXq_CxZEmt-5jHVSd1oO1txPCq_U1_drMIceTiw/edit#gid=0 -->

<div class="page-break"></div>

## Mining

### Benefits

* Token mining is similar to Edgeware's lockdrop and ChainX's virtual mining where participants are token holders that are rewarded for increasing the security, robustness, and liquidity of the ecosystem by locking them.
* Other forms of mining (hardware, development, advocacy, and governance mining) provide rewards for participation by allowing more users to access the network and improving user adoption, and are analogous to token mining.
* Early adopters that invest in DH infrastructure get exposed to a variety of Mining Reward Types.
    * Higher token mining base rewards prior to halving.
    * Loyalty reward MSBs are available.
    * Higher reputation to influence the future of the DHX DAO.

### Reward Options

* Users will have a variety of options to acquire DHX tokens on the DH, without having to purchase them from a DEX
* Users may participate in token mining to earn mining base rewards in DHX automatically depending on the type and quantity of their token holding in return for becoming stakeholders in the DHX DAO by locking native tokens (e.g. DHX, DOT) and bridged tokens (e.g. MXC, IOTA) that are not already staked elsewhere. Mining base rewards are funded by block reward transaction fees.
* Users may participate in other means of mining (hardware, development, advocacy, or governance) to earn mining speed boost (MSB) rewards in DHX either automatically or manually that depend on the how they participate. MSB rewards are funded by the DHX DAO Treasury's Unlocked Reserves.

Initially only automatic rewards shall be offered, which requires mining registration. In future, the DHX DAO community may choose to offer rewards that allow users to manually claim unregistered mining rewards via DHX DAO governance, but with a lower reward than registered mining.

### Reward Types

* Mining base (MB) rewards
    * Only for token mining
    * Indefinite or fixed term
* Mining speed boost (MSB) rewards
    * Only for hardware, development, advocacy, and governance mining
    * Indefinite or fixed term
* Mining speed boost (MSB) combo rewards
    * Only for mining plus staking
* Mining speed boost (MSB) loyalty rewards
    * Only for pre-DH launch holders of MXC tokens or Secure LPWAN hardware (e.g. MatchX or similar equivalent)
* Mining reputation rewards on the DHX DAO

### Fixed Term Periods

* Mining fixed term periods available include:
    * 3, 6, 9, 12, 24, 36 months
* Locking for a fixed term period attracts a higher return than indefinite terms (higher MB for token mining, and higher MSB for other forms of mining) since when users make commitments its easier to forecast the overall ecosystem.
* Locking requires a minimum uptime to be maintained to remain eligible for the reward to incentivise users to maintain its availability.

### Random Sampling Dates

* Random sampling dates that are chosen and used for the subsequent calculation of the sampled average balance or uptime should differ between users and are generated randomly on the start date of the fixed term period and are not revealed until the end of the fixed term period. The goal is to avoid using a single sampling date that may be gamed or may cause unnecessary congestion.

### Reward Spending & Reinvestment

* Users may use their rewards in DHX in a variety of ways:
    * Locking them on the DH as a form or reinvestment to compound their rewards for an indefinite period of time or a predefined period of time to gain exposure to Fixed Term Bonus Rewards.
    * Stake them on the DH as a form of diversifying their reinvestment to compound their rewards and also gain exposure to Combo Bonus Rewards.
    * Spend them to purchase roaming for their End Devices.
    * Spend them to purchase data from the DHX Data Market.
    * Spend them to purchase Secure LPWAN hardware (e.g. MatchX or similar equivalent) as a form of diversifying their reinvestment to compound their rewards.

### Rules

* Users may not participate in token mining using the MXC balances already staked at MXC Supernodes in the "Supernode Layer" from which they already receive quarterly rewards (see section "2.0 Staking Participation" in MXC's Data Economy Whitepaper <a href="#reference-2f6302" class="pretty-link-colored">[2f6302]</a>).
* User mining base rewards and MSB rewards depend on the type and amount of their token holding.
* It is a goal to avoid users that only need a single organisation from creating multiple organisations instead unnecessarily just in order to obtain a higher MSB.

### Mining Speed Boost (MSB)

* PoP ICBAM MSB Periods Available
    * MXC ICBAM MSB is calculated using a linear regression formula `1.025*0.00015*days_mxc_held` of the form `y=a+bx`, where `y` is the dependent variable on the y axis, `x` is the independent variable plotted on the x axis, `b` is the slope of the line, and `a` is the y-intercept
    * IOTA and DOT ICBAM MSB Locking is calculated using a linear regression formula `1.0125*0.000075*days_mxc_held` of the form `y=a+bx`
    * 3, 6, 9, 12, 24, 36 months (maximum)
        * MXC corresponding MSBs are approx. 1.025, 1.05, 1.075, 1.10, 1.15, 1.2
        * IOTA, DOT corresponding lower MSBs are approx. 1.0125, 1.025, 1.0375, 1.05, 1.075, 1.1
    * Signalling when Token Mining receives 10% of the lower MSBs (those that apply to IOTA and DOT)

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/chart-dhx-msb.png" />
</div>

<div class="figure-text">Chart: DataHighway Mining Speed Boosts</div>

* PoP ICBAM Supported Cryptocurrencies/Tokens and MSB
    * MXC, IOTA, or DOT
* PoP ICBAM MSB Range for Locking. Signalling receives 10% of the lowest MSB.
    * 1.0-1.2
* PoP MDT Qualifying Level of PoP MSB required to unlock PoP ICBAM MSB
    * Greater than 1.1
* PoP MDT Limitation on PoP ICBAM MSB unless unlocked
    * 1.1
* PoP MLB (Mining Loyalty Bonus)
    * MXC MLB
        * PoP MLB MSB Range for MXC
            * 1.005-1.2
        * MXC MLB rewards are between 0.005 (one day prior) and a maximum of 0.2 (2 years prior)
        * MXC MLB is calculated using an exponential regression formula 0.005*EXP(0.005*days_mxc_held_prior) of the form y=a*e^(bx)
        * Sample of MXC MLB rewards: 0-3, 3-6, 6-12, 12-24 months (maximum)
            * MXC corresponding MSBs are approx. 1.005-1.0078, 1.0078-1.012, 1.012-1.03, 1.03-1.2
    * IOTA or DOT MLB
        * PoP MLB MSB Range for IOTA or DOT
            * 1.0025-1.1
        * IOTA or DOT MLB rewards are between 0.0025 (one day prior) and a maximum of 0.1 (2 years prior)
        * IOTA or DOT MLB is calculated using an exponential regression formula 0.0025*EXP(0.005*days_mxc_held_prior) of the form y=a*e^(bx)
        * Sample IOTA or DOT MLB rewards: 0-3, 3-6, 6-12, 12-24 months (maximum)
            * IOTA, DOT corresponding MSBs are approx. 1.0025-1.0039, 1.0039-1.006, 1.006-1.015, 1.015-1.1
        * IOTA or DOT MLB is only valid since the respective chain existed
        <!-- Reference: Creating chart https://stackoverflow.com/a/32250025/3208553 -->
        <!-- Reference: https://docs.google.com/spreadsheets/d/1W2AzOH9Cs9oCR8UYfYCbpmd9X7hp-USbYXL7AuwMY_Q/edit#gid=1483475332 -->

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/chart-dhx-mlb.png" />
</div>

<div class="figure-text">Chart: DataHighway Mining Loyalty Bonus</div>

* PoP Non-ICBAM MSB Range
    * 1.0-1.4

The ICBAM assets that are supported include IoT specific tokens including MXC and IOTA, and the Polkadot networks' native DOT token. In future, the DHX DAO may approve support of additional cryptocurrencies through a runtime upgrade.

Polkadot provides support for fork-less blockchain runtime upgrades by using the Sudo module to call exposed privileged functions to set the on-chain Wasm runtime code.

An identity may earn an MSB factor through PoP.

MXC receives a PoP MSB approx. twice as high as using IOTA or DOT.

* Example - MSB: If a user stakes as a collator or a nominator and receives a proportion of the block reward of `4` DHX for producing a block at the same time as they are participating in PoP ICBAM by Locking with IOTA for 36 months that gives a `1.1` PoP ICBAM MSB, and they also received a `1.4` PoP Non-ICBAM MSB, then they will instead receive a block reward of `4 * (1.1 + 1.4) = 6 DHX`. Note: If they only Signalled instead of Locking then they would receive 10% (i.e. `1.01` PoP ICBAM MSB) instead.

### Mining Loyalty Bonus (MLB)

MLB is introduced to reward long-term holders of MXC, IOTA, or DOT for their loyalty.

* Example - MLB: If a user stakes as a collator or a nominator and receives a proportion of the block reward of `4` DHX for producing a block and they were a holder of MXC for 6 months before the launch of the DH and before the time they started participating in PoP ICBAM where they locked MXC assets for 24 months, and they participated fully in PoP Non-ICBAM to receive its maximum `1.4` MSB (exceeding the PoP MDT), then their block reward's PoP ICBAM proportion would not be limited, and the total MSB would be `4 * (1.15 + 0.4 + 0.012) = 6.248 DHX per block`.

### Mining Diversity Threshold (MDT)

MDT is introduced to incentivise miners to diversify their means of participation to include other means of PoP instead of just ICBAM, and to maintain longevity of such diversity.

The "MDT Qualifying Level of PoP Non-ICBAM MSB" is the minimum level of PoP Non-ICBAM MSB that must be achieved in order to "unlock a PoP ICBAM MSB" greater than the "MDT Limitation on PoP ICBAM MSB".

* Example - MDT: If a user stakes as a collator or a nominator and receives a proportion of the block reward of `4` DHX for producing a block at the same time as they are participating in PoP ICBAM where they lock MXC assets for 24 months, and they do not participate in PoP Non-ICBAM, then their block reward's PoP ICBAM proportion would be limited to `1.10` of their block reward and the total MSB would be `4 * (1.10 + 0) = 4.11 DHX per block`. Whereas if they participated in and received a PoP Non-ICBAM of at least `1.1` then they would unlock the PoP ICBAM of `1.15` (the PoP MDT limitation would be removed) and their block reward using the total MSB would be `4 * (1.15 + 1.1) = 4.6 DHX per block`.

### Initial Asset Distribution

Prior to genesis, or before the MXC Foundation's collators and/or nominators receive their first block reward, the MXC Foundation may target and purchase a specific amount of supported assets (i.e. MXC, IOTA, DOT) from the market with a capital injection that corresponds to the amount required to be entitled (as are other PoP ICBAM participants) to receive the maximum 20% MSB on their initial stake when the associated collators get block rewards.

### Financial Model

Mining rewards are financed from the following sources that may be either processed automatically or through requiring manual proposals to be submitted requesting approval of funding from the DH DAO Hub:

* DAO Treasury Unlocked Reserves
* System Fees from users (in addition to Anti-DDoS Transaction Fees) that vary depending on the complexity of the operation

### Token Mining

#### Goals

Token mining goals include incentivizing participants to hold tokens and to reward them for increasing the security, robustness, and liquidity of the ecosystem by locking them.

#### Background & Benefits

Token mining is a proven technique used by ChainX Whitepaper <a href="#reference-b31f7c" class="pretty-link-colored">[b31f7c]</a>. In the DH we calculate a user's "virtual" voting power and "real" voting power based on each of their native and ICBAs, and then reward them with a proportion of the daily block reward as mining revenue in DHX. In addition to this on the DH we provide a MSB for combining different means of PoP such as ICBA on top of their block authoring rewards (when validating or nominating).

Allows users from other chains to participate and profit in DHX, even if they want to keep their holding in the other chain. Initially users will be able to connect the following assets they hold with the DH:

* "non-blockchain" networks
    * IOTA (IOTA network native token)
* "blockchain" networks
    * DOT (Polkadot network native token)
    * MXC (Ethereum network ERC-20 token)

Note: Users may use MXC that has already be staked on a Supernode for obtaining MSB through PoP ICBAM too.

#### Rights

The type of ICBA corresponds to different MSB to provide the highest incentive to users to hold MXC or DHX.

The MSB depends on the asset type and quantity of ICBAM collateral used, which may be used to increase the governance voting power.

##### Compounding Rewards

A higher quantity of ICBA tokens "reserved" in a locked deposit corresponds to higher possible PoP ICBAM MSB "mining-staking-combo" rewards and governance collateral (in DHX) whilst the user is also staking DHX collateral that may be claimed through DAO approval. The DHX may be used later for participating as a voter in governance decisions or reinvested as stake to compound the likelihood of being selected as a collator and receiving future block rewards.

#### Costs

* Risk or opportunity of:
    * Purchasing tokens (if necessary)
    * Choosing a plan to lock the tokens for a fixed period (optional for native tokens), where the tokens have a USD-equivalent exchange rate value that may change over time.

#### Registration

* Native tokens
    * Optionally locking native tokens (DHX, DOT) of at least 25-USD equivalent to be exposed to a higher fixed term MB.
    * Communicating the desired fixed term period for locking the tokens from their address via the DH UI.
* Bridged tokens
    * Locking bridged tokens (required) of at least 50-USD equivalent.
    * Proving bridged token ownership (send a transaction of 0-USD equivalent tokens that is signed by their address that contains the MXC or IOTA tokens).
    * Communicating the desired fixed term period for locking (if any) the tokens by including their DHX address in the transaction message.

#### Reward Calculation

* Reward entitlements of Token Mining for a Fixed Term Period are calculated from:
    * Check the account balance at the start of a fixed period.
    * Check the account balance at "random sampling dates".
    * Calculate the "sampled average" account balance over the period to determine eligibility.
    * Eligibility for reward and reputation requires the "sampled average" account balance to be at least 90% of the start balance.
    * Adjustment resulting from governance audits

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-use-case-token-mining.png" />
</div>

<div class="figure-text">Figure: Token Mining Use Case Diagram</div>

#### Example: PoP ICBAM Combo Mining for Voting Power

* Assumptions:
    * Date: June 2020
    * Exchange Rate (Average Daily according to the price of DHX)
        * 1 USD <-> 1 DHX
        * 1 MXC <-> 1 DHX
        * 1 IOTA <-> 0.25 DHX
        * 1 DOT -> 200 DHX
        * Note
            * DOT holders only have a mining right, but cannot withdraw for real DOT)
    * Circulating Supply (of DHX)
        * 500,000 (excludes DAO Treasury Unlocked Reserves)
        * Note
            * Assumes 100 collators with a combined holding of 6 million DHX, no nominators, and no other DHX token holders for simplification
    * Block Reward Issuance (of DHX) Daily
        * 2,400
        * Note
            * Assumes Halving Factor of 1, Block Reward of 0.25, and Block Time of 9 seconds 
                <!-- Reference: https://docs.google.com/spreadsheets/d/1W2AzOH9Cs9oCR8UYfYCbpmd9X7hp-USbYXL7AuwMY_Q/edit?usp=sharing -->
    * Users
        * User 1
            * Assets
                * DH assets ("real power")
                    * 100 DHX (some already staked on DH collator nodes)
                * ICBAs ("virtual power")
                    * 500 MXC (some already staked on a Supernode, some in AXS wallet not staked)
                    * 200 IOTA
                    * 4 DOT
                * Note
                    * Assume all assets purchased after DH launch so not eligible for MLB
    * Virtual Mining Factors (to calculate Voting Power)
        * MXC
            * 1.0
        * IOTA
            * 0.5
        * DOT
            * 0.1

* Process
    * Convert
        * Calculate Voting Power
            * Convert to Market value
                * Market value in DHX of ICBAs
                    ```
                    1 * 500 = 500 DHX // Market value of ICBA MXC
                    500 * 1.0 = 500 DHX // Less Virtual Mining Factor for MXC

                    0.25 * 200 = 50 DHX // Market value of ICBA IOTA
                    50 * 0.25 = 12.5 DHX // Less Virtual Mining Factor

                    200 * 4 = 800 DHX // Market value of ICBA DOT
                    800 * 0.1 = 80 DHX // Less Virtual Mining Factor
                    ```
                * Market value in DHX of native assets
                    ```
                    1 * 100 = 100 DHX // Market value of native assets
                    ```
            * Calculate Total "real mining power"
                ```
                (icba_market_value * virtual_mining_factor) + native_assets_assets_value = real_mining_power
                592.5 + 100 = 692.5 DHX
                ```
            * Calculate Proportion of Total "real mining power" of All users
                ```
                692.5 DHX / 500,000 DHX = 0.001385 // 0.1385%
                ```
            * Possible proportion of staking (collator or nominator block rewards) reward distribution received by User No. 1 per day
                ```
                0.001385 * 2400 DHX = 3.324 DHX per day
                ```
            * Voting Power granted based on Proportion of daily mining revenue from all user transactions for User No. 1 per day
                ```
                TAX * <DAILY_MINING_REVENUE_FROM_ALL_USER_TX_PER_DAY> DHX
                0.1 * <DAILY_MINING_REVENUE_FROM_ALL_USER_TX_PER_DAY> DHX
            ```
        * Calculate MLB
            * N/A
        * Calculate MSB
            * Not shown for brevity
            * Since the user is staking `100 DHX` as a collator and receives a proportion of the block reward (after fees) of `4` DHX for producing a block at the same time as they are participating in PoP ICBAM with MXC for 3 months that gives a MAX `1.025` PoP ICBAM MSB (for 200 DHX), and where they their "real mining power" is `0.1385%` of all users, so it becomes `0.001385 * 1.025 ==> 1.00142`, and they also received a `0.0` PoP Non-ICBAM MSB, then they will instead receive a block reward of `4 * (1.00142 + 0.0) = 4.0057 DHX`.

        * References
            * Page 6 of ChainX Whitepaper [[b31f7c]](#reference-b31f7c){.pretty-link-colored}.

### Token DEX

* Users will have a variety of options to acquire DHX tokens through mining and staking on the DH, without having to purchase them from a DEX.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-use-case-dex.png" />
</div>

<div class="figure-text">Figure: DEX Use Case Diagram</div>

### Hardware Mining (Hardware as Collateral)

#### Background & Benefits

* Allows users who participate in the MXC network by contributing hardware (e.g. Secure or Insecure LPWAN Hardware Gateways or End Devices) collateral to profit in DHX.

#### Goals

* Hardware reward goals are to incentivize participation and the purchase or upgrade (if necessary) to secure hardware on the DH.

#### Costs

* Risk or opportunity of:
    * Purchasing Secure LPWAN hardware (if necessary)
    * Choosing a plan to lock the hardware for a fixed period, where the hardware has an average RRP that may depreciate over time.

#### Registration

* Integration with the M2M Wallet of the MXProtocol Server
    * Shared identity of the organisation is linked between the DH and M2M Portal.
    * Record on the DH hardware that is registered with the identity on the M2M Portal (e.g. end devices, gateways, or other supernodes).
    * Verify the type of hardware being used (e.g. Secure LPWAN or Insecure LPWAN hardware).
    * Record on the DH whether the identity runs hardware associated with any DH consensus nodes (e.g. collator).
    * Communicate the desired fixed term period for locking the hardware associated with their identity via the DH UI.

#### Reward Calculation

* Reward entitlements for Hardware Mining for a Fixed Term Period are calculated from:
    * Check the hardware's online status and at the start of a fixed period.
    * Check the hardware's online status at "random sampling dates".
    * Verify the type of hardware being used (e.g. secure or insecure).
    * Calculate the "sampled average" hardware online status over the period to determine eligibility.
    * Eligibility for reward and reputation requires the "sampled average" hardware online status to be at least 90% and the hardware type to be verified. In addition to checking the online status, data driven pattern recognition methods may be used to confirm if a Supernode, LPWAN gateway or LPWAN end device is working properly.
    * Adjustment resulting from governance audits.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-use-case-hardware-mining.png" />
</div>

<div class="figure-text">Figure: Hardware Mining Use Case Diagram</div>

#### Rights

Same as Token Asset Mining using "real mining power" equivalent in DHX

#### Financial Model

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/chart-dhx-msb-hardware-mining.png" />
</div>

<div class="figure-text">Table: Hardware Assets Mining MSB</div>

##### Example: PoP Hardware Assets Combo Mining for Voting Power

* Assumptions:
    * Date: June 2020
    * Exchange Rate (Average Daily according to the price of DHX)
        * 1 USD <-> 1 DHX
        * 1 MXC <-> 1 DHX
        * 1 IOTA <-> 0.25 DHX
        * 1 DOT -> 200 DHX
        * Note
            * DOT holders only have a mining right, but cannot withdraw for real DOT)
    * Users
        * User 1 - Alice
            * Assets
                * DH assets ("real power")
                    * 100 DHX (some already staked on DH collator nodes)
                * ICBAs ("virtual power")
                    * 500 MXC (some already staked on a Supernode, some in AXS wallet not staked)
                    * 200 IOTA
                    * 4 DOT
            * Hardware Assets (registered in M2M Wallet of the MXProtocol Server and registered with 3 month locking commitment)
                * 1x Supernode
                * 1x Consensus Node (Collator)
                * 3x Secure Gateways
                * 50x Secure End Devices
* Process
    * Calculate Voting Power
    * Calculate ICBAM MSB from Locking
    * Calculate ICBAM MSB from Signalling
    * Calculate Hardware MSB (using Table 1.5)
        * 1x Supernode => 1.24 MSB
        * 1x Consensus Node => 1.15 MSB
        * 3x Secure Gateways => 1.05 MSB
        * 20x Secure End Devices => 1.008 MSB

        * Total MSB: 1.4 (total is 1.448 but max. is 1.4)
    * Check Sample Dates during their lock bonus period to determine whether they are eligible for any Voting Power and MSB. If they had at least 80% of their lock balance in the respective accounts on each of the "sampling" dates in a speed bonus period (at the start and a random date during the period), then the Hardware MSB will apply to the period
    * Calculate Overall Bonus (i.e. max capped at 1.2 for Voting Power/ICBAM, max capped at 1.4 for PoP)
    * Show how may use the earned DHX and how more likely to earn bonus than other users

### Development Mining (Runtimes & DApps as Collateral)

#### Background & Benefits

* Incubate Runtime & DApp development on DataHighway through DHX funding (e.g. DApps, Bounties)

#### Goals

* Development reward goals are to incentivize diversity and innovation of UX interactions and standards to grow participation on the DH.

#### Costs

* Risk or opportunity of:
    * Automated reward claims:
        * Building DApp
        * Marketing the DApp to attract users
        * Purchasing hosting and domain name registration (if necessary)
        * Choosing a plan to lock the DApp for monitoring user activity over a fixed period.
    * Manual reward claims
        * Questions raised on the DH Development Hub that are accepted.
        * Proposals that tag issues and opportunities on the DH Development Hub that are accepted.
        * Reviews that tag issues and opportunities on the DH Development Hub that are accepted.
        * Updates that tag issues and opportunities on the DH Development Hub that are accepted.

#### Tags

* Tags
    * Task Category
    * Task Size
    * Code Type (e.g. bug, hotfix, feature)
    * Bounty Size
    * Reputation Reward Level
    * Breaking Changes
    * Documentation
    * Tests
    * Refactor

#### Registration

* Integrate DH Identity Authentication into the DApp
* Register the DApp in the list within the DH UI
* Communicating the desired fixed term period for monitoring user activity from their DApp via the DH UI.

#### Reward Calculation

* Reward entitlements for Development Mining for a Fixed Term Period are calculated from:
    * Check the DApp's uptime status and at the start of a fixed period.
    * Check the DApps's uptime status at "random sampling dates".
    * Verify the type of DApp (e.g. Data Market, Mining, or Staking).
    * Calculate the "sampled average" DApp uptime status over the period to determine eligibility.
    * Eligibility for level of reward and reputation is influenced by:
        * "Sampled average" DApp user activity using their API keys exceeding predefined thresholds
            * Data Market API activity including data seller sale levels or data buyer purchase levels
            * Mining API activity
            * Staking API activity
    * Adjustment resulting from governance audits.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-use-case-development-mining.png" />
</div>

<div class="figure-text">Figure: Development Mining Use Case Diagram</div>

#### Rights

Same as Token Mining

#### Financial Model

Same as Token Mining

### Advocacy Mining (Marketing as Collateral)

#### Background & Benefits

* Incubate Runtime & DApp development on DataHighway through DHX funding (e.g. Referrals, Publications, Presentations, Ambassadors, Sponsors)

#### Goals

* Advocacy reward goals are to incentivize strategic marketing planning and activities to grow participation on the DH.

#### Costs

* Risk or opportunity of:
    * Automated reward claims
        * Referrals linking to their DH identity when shared with other users that sign up to the DH.
    * Manual rewardable claims
        * Creating a question or proposal on the DH DAO Hub
        * Reviewing, updating or approving questions, proposals, or deliverables on the DH DAO Hub

#### Tags

* Tags
    * Task Category
    * Task Size
    * Medium
    * Report Type (e.g. blogpost, critique, feedback, suggestions, guide)
    * Bounty Size
    * Reputation Reward Level
    * Difficulty Level
    * Priority Level

#### Registration

* Automated reward claims
    * Share referral link to their DH identity with other users that sign up to the DH.
* Manual rewardable claims
    * Authenticate DH identity and link to their interactions on the DH DAO Hub
    * Register intention to advocate in the user list within the DH UI.
    * Communicating the desired fixed term period they intend to advocate on the DH DAO Hub via the DH UI.

#### Reward Calculation

* Automated and manual rewardable claims
    * Reward entitlements for Advocacy Mining for a Fixed Term Period are calculated from:
        * Checking referral links that result in new DH accounts being activated and used.
        * Checking questions raised on the DH Development Hub that are accepted.
        * Checking proposals that tag issues and opportunities on the DH Development Hub that are accepted.
        * Checking reviews that tag issues and opportunities on the DH Development Hub that are accepted.
        * Checking updates that tag issues and opportunities on the DH Development Hub that are accepted.
        * Eligibility for level of reward and reputation is determined.
        * Adjustment resulting from governance audits.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-use-case-advocacy-mining.png" />
</div>

<div class="figure-text">Figure: Advocacy Mining Use Case Diagram</div>

#### Rights

Same as Token Mining

#### Financial Model

Same as Token Mining

### Governance Mining (Governance as Collateral)

#### Background & Benefits

* Incubate Runtime & DApp development on DataHighway through DHX funding (e.g. Governance, Voting)

#### Reward Calculation

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-use-case-governance-mining-council.png" />
</div>

<div class="figure-text">Figure: Governance (Council Election) Mining Use Case Diagram</div>

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-use-case-governance-mining-democracy.png" />
</div>

<div class="figure-text">Figure: Governance (Democracy) Mining Use Case Diagram</div>

#### Rights

Same as Token Mining

#### Financial Model

Same as Token Mining

<div class="page-break"></div>

## Roaming

### Economics

#### Payment and Monthly Audit Process

DHX tokens may be used to purchase access to roaming.

End Device owner user of an organization chooses a roaming payment plan in the UI of the LPWAN Server depending on their usage requirements (or recommendations may be suggested based on their prior usage).
* Subscription (monthly)
* Ad Hoc (per packet)

End Device owner user of an organization agrees on payment conditions such as:
* Max. bid to offer to join networks when roaming in M2M Wallet (in case they choose an Ad Hoc plan or their Subscription plan expires and they fallback to the Ad Hoc plan) Supernode owner user establishes payment conditions for roaming, such as:
* Min. bid required to join for roaming End Devices

End Device owner user of an organization exchanges a money type (e.g. another token or fiat) for sufficient MXC.

Supernode information is stored on the DataHighway (i.e. IP address that may change later, min. bid required)

End Device owner turns on roaming in the UI of the LPWAN Server and their information (i.e. roaming enabled) is stored on the DataHighway.

End Device moves from its Home NS to another NS, and the NS queries the Data Highway to find out the End Devices JS IP address and Home NS. SMB occurs (agreement automated based on quantity of packets sent, min. bid required by SN/GW, max. bid by End Device), join request is forwarded to JS via Home NS, then accept/reject whether the End Device is allowed to roam with the other NS (packets are forwarded without having to frequently agree). See presentation on Activation Passive Roaming <a href="#reference-6fe50e" class="pretty-link-colored">[6fe50e]</a>

No agreement is established or payment required if join is rejected, since the packets are dropped.

End Device owners are sent an email notification recommending that they top-up with a sufficient balance to pay for roaming network access when their balance drops too low, otherwise it will be disabled.

End Device roaming packets and associated Network Servers that forward them are stored in a counter that is reset to 0 each week, sufficiently after associated roaming fees and payments were made so it may be reverted if the counter value is found to be incorrect. Otherwise the list of changing IP addresses may get too long. The finalized transaction is used to prove whether the counter value is legitimate.

Monthly payments are calculated on the DataHighway (for subscription payment plan) and DHX billing, charging, and payments are done automatically.

#### Transaction Fees (Subscription-based or Ad-Hoc Usage)

Each of the initial 21 Supernodes (SNs) need to top-up MXC to get a sufficient amount in their SN to be able achieve a threshold holding that will allow them to generate a unique NetID (Network ID) that's associated with their SN and will be recorded on-chain.

End Devices that is activated at their "home" Supernode, once activated, will have had a DevAddr stored on the End Device, which contains a NwkAddr (which is derived from the "home" Supernode's unique Network ID). The LPWAN Server (Supernode powered by MXProtocol) will then make one or more POST request from the LPWAN App Server codebase to the Data Highway to store roaming related information about that End Device on the distributed ledger database (under the RoamingBaseProfile class's `devAddr` and `homeNet` properties of the EndDevice class), as shown in the <a href="#Class-Diagrams" class="pretty-link-colored">Roaming Class Diagram</a>.

End Device owners may subscribe to roaming or pay ad-hoc roaming fees in DHX to gain sufficient balance to roam. This will be recorded under the RoamingBaseProfile class's `expiry` date property of the EndDevice class).

Supernodes earn DHX from these Roaming Transaction Fees and are responsible distributing a cut in accordance with **Roaming Operations Fees**.

End Devices may only be allowed to roam at a "visited" Network Server (or Supernode) when:

* End Device owner subscribes to roaming or pays ad-hoc roaming fees in DHX and has sufficient balance.
* Roaming policies and agreements have been executed between the Network Operator of the End Device's "home" network server (or Supernode) and the Network Operator of the "visited" network server (or Supernode).
* End Device behaviour satisfies the relevant roaming policies and agreements
* The "visited" network server (if not a Supernode) supports the MXProtocol (i.e. supports querying decentralized DNS of the DataHighway to find the "home" network server or Supernode, and retrieving the roaming policies and agreements, if any) or similar equivalent.

In the situation where the End Device tries to roam by attempting to join a "visited" Supernode, that "visited" Supernode will check for the DevAddr in the uplinked packets, then make a query from the LPWAN App Server codebase (written in GoLang and powered by MXProtocol) to the DataHighway to lookup whether roaming fees have been paid by that End Device (stored under the RoamingBaseProfile class's `expiry` date property of the EndDevice class), and if so it will return "home" Supernode's IP address (if the Network ID is recognizable), otherwise it will just drop the uplinked packets.

If the End Device owner changed it's roaming configuration (in the UI, see <a href="#Intuitive-UX" class="pretty-link-colored">Intuitive-UX</a>) but the transaction was still pending, then the Supernode could still find out if that's the case by querying the `pending_extrinsics` of the Data Highway parachain.

Note that this is separate from staking where a user who is an MXC holder chooses one of the 21 Supernodes and participates in staking by depositing their MXC in it to earn DHX depending on how much data that Supernode processes.

Network Operators may benefit from interoperability through decentralised DNS and earn DHX from roaming fees. Network Operators outside of the MXC network may always access the MXC network's decentralised DNS that is provided by the DataHighway, and they may choose to either establish publicly accessible decentralized roaming policies directly on the DataHighway or to update existing roaming policies (e.g. on ThingPark Exchange) and create new agreements (e.g. with MXC Foundation on ThingPark Exchange)

#### Operations Fees

Supernodes earn DHX from these Roaming Transaction Fees and are responsible for **distributing** a cut toward different **Roaming Operations Fees** depending on whether the owner of the End Device pays a Subscription or just pays for Ad-Hoc usage of roaming.

##### Subscription

These fees will be based on a Subscription-based model for users that sign-up to a roaming subscription payment.

##### Ad-Hoc

The DHX DAOs Treasury will be funded with a proportion of the block reward or a proportion of the fees, and may be used to fund lotteries to incentivise new users, where the winners may be given a discounted roaming subscription.

- TreasuryParachainSlotTax - to contribute to the Treasury, which may exchange MXC for DOT solely for the purpose of having sufficient deposit to secure renewal of MXC's Parachain slot
- RoamingDeposit - redeemable deposit for a user to use roaming (mechanism to prevent spam). If the user is found to be roaming maliciously (i.e. congesting networks by trying to repeatedly connect and disconnect from GWs prior to payment without cause) then this deposit is not returned.
- RoamingJoinFee - Fee charged the first time that an End Device tries to join to a new "visited" NS. This would be used to fund the DHX DAOs Treasury.
- RoamingRejoinFee - Fee charged when an End Device tries to join a "visited" NS that it has joined previously. This would be used to fund the DHX DAOs Treasury.
- RoamingGatewayTransactionBaseFee - Gateway transaction fee charged for each uplink and downlink between End Device and Supernode ("visited" NS)
- RoamingGatewayTransactionByteFee - per-byte portion of a Gateway transaction fee
- RoamingSupernodeTransactionBaseFee - Supernode transaction fee charged for each uplink and downlink between a GW/VisitedSN and HomeNS/ServerNS/JoinServer/ApplicationServer
- RoamingSupernodeTransactionByteFee - per-byte portion of a Supernode transaction fee
- RoamingApplicationServerTransactionBaseFee - Application Server transaction fee charged for each uplink and downlink
- RoamingApplicationServerTransactionByteFee - per-byte portion of an Application Server transaction fee
- RoamingParachainValidatorFee - fee for resolving a roaming end-device's HomeNS <a href="#reference-fa094e" class="pretty-link-colored">[fa094e]</a>
- RoamingParachainStorageRentDepositOffsetFee - fee to cover the cost of storing roaming state on-chain (i.e. we need to fund and maintain a deposit large enough such that its earnings from staking cover the amount of ongoing on-chain storage costs, which may vary over time, since we need to store whether a end-device is roaming or not, and storing the mapping to its HomeNS, and store a counter that gets updated with packets processed by each entity, which resets say each month after bulk calculation of how much is owed between different parties and ultimate MXC payment exchange so still able to revert if required

* References:
  * Polkadot Crowdfunding for Parachain Slots <a href="#reference-038640" class="pretty-link-colored">[038640]</a>

#### Default Roaming Fees

The default fee values that MXC would use would be defined in the Roaming SRML, and may be similar to those used by Substrate's Balances SRML as shown below:

The default fee values for the below are defined in the Balances SRML module when creating a parachain:
- ExistentialDeposit - minimum amount to keep an account open.
- TransferFee - fee to make a transfer.
- CreationFee - fee to create an account.
- TransactionBaseFee - base transaction fee
- TransactionByteFee - per-byte portion of a transaction fee

#### Changes to Roaming Fees

The fees may be changed by upgrading the DataHighway parachain by using the Sudo SRML. The stakeholders of the parachain may wish to vote on how the fees should change, which would require use of the Democracy SRML (governance module).

* References:
  * Substrate Balances Runtime Module <a href="#reference-49f7f0" class="pretty-link-colored">[49f7f0]</a>
  * Polkadot Token Economics NPoS Payments and Inflation <a href="#reference-411c31" class="pretty-link-colored">[411c31]</a>
  * Polkadot Token Economics Relay Chain Transaction Fees <a href="#reference-b05a57" class="pretty-link-colored">[b05a57]</a>
  * Polkadot Token Economics Inflation Model <a href="#reference-46767b" class="pretty-link-colored">[46767b]</a>

#### Risks & Mitigation Measures

Potential spammers of the public transaction pool that may cause congestion shall be mitigated by using a fee-based spam prevention mechanism as a deterrent.

End Devices should be cautious of roaming where "visited" network servers (or Supernodes) have been flagged using the DHX DAO as being malicious, such as having allowed End Devices to join them and uplink their data, but repeatedly fail to adequately forward packets of data back to the "home" network server (or Supernode) even after payment (i.e. with limited corruption, and in a timely fashion).

Refer to Roaming Operations Fees.

#### Token Acquisition (DHX)

The new DHX token is only used for:
1. Roaming fees
2. Mining of the IoT data (separate Mining Whitepaper)
3. Payment for IoT data (separate Inter-Chain Data Market Whitepaper)

* MXC tokens may already be obtained from various DEXs
* DHX tokens may be obtained initially through DataHighway Mining & Governance (see Mining Whitepaper)
* DHX tokens may be also be obtained in future for MXC tokens through a DEX (see Inter-Chain Data Market Whitepaper)
* See the "DHX Token Acquisition" section of the Inter-Chain Data Market Whitepaper for further details.

### Data Storage

#### Storage Requirements

End Device information that should be stored on the DataHighway includes:

* Roaming Configuration
  * Mapping of whether an End Device has enabled roaming and its expiry date
  * "home" Network Server's DNS resolution information
  * Owner Account ID on the DataHighway and their User ID and Organization ID on the LPWAN Server
* Owner Information
  * M2M Wallet User ID (which may be associated with multiple Organisation IDs, and the End Device may be part of one of its Organisation IDs).
  * Organization ID should have an MXC "network" balance so the owner of the End Device may exchange them for the DataHighway's "data" tokens (DHX) to pay for roaming
* Smart Machine Bidding (SMB) and Forwarding Parameters:
  * Packets of data (count/nonce) that the End Device and Network Servers have exchanged, who else was party to the exchange and owes or is owed DHX for roaming.

#### Storage Periodic Maintenance and Migration

DataHighway nodes should be able to be run on servers without storing unnecessary data.

##### Data Pruning

On Polkadot, all data related to an account is pruned when the account's balance drops below an existential deposit value (avoids dust accounts). The DataHighway will include this feature.

DataHighway nodes may be run with `pruning=1000000` to discard historical data prior to a certain block 1000000 (not with `pruning=archive`). This will be useful on the DataHighway, since the DataHighway will be a public chain with an initial database size of 0 GB. After 1 year its database size could be over 5Gb, and over 10Gb after 2 years. The payment related roaming data stored in the database is for audit purposes, where an audit of payments and disputes of payment transactions may occur for up to 1 year after the payment occurred, such that no payments in the first year can be reverted by lodging proposal through governance, and as such those historical records are no longer required.

##### Data Retention and Periodic Migration

Other data that was stored in historic blocks (e.g. whether there is sufficient balance to be a Supernode, and the "home" NS associated with an End Device, etc) may still be required and should be migrated to a newer block that is not part of the historic blocks that are to be pruned.

### Architecture

#### Class Diagrams

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-class-roaming.jpg" />
</div>

<div class="figure-text">Figure: Class Diagram Roaming</div>

##### Aggregations (of SMB and Forwarding)

Aggregations associated with Smart Machine Bidding (SMB) and packet forwarding from "visited" Network Servers back to the roaming End Device's "home" Network Server may also be stored on the DataHighway, if necessary.

<div class="image-wrapper">
    <img style="width: 50%" src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-class-roaming-aggregation.png" />
</div>

<div class="figure-text">Figure: Class Diagram Roaming Aggregation</div>

<!-- Source (Visual Paradigm): roaming_class_diagram -->

#### Class Diagram (Simplified)

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-class-roaming-simplified.png" />
</div>

<div class="figure-text">Figure: Class Diagram Roaming Simplified</div>

<!-- Source (Visual Paradigm): roaming_class -->

#### Swimlane (Flowchart) Diagrams

##### LPWAN Supernode Network Setup, Shared Identity & Staking

1. Register Organisations ID at MXC’s M2M Portal.
2. Generate DataHighway (DH) Parachain Account ID.
3. Store mapping of Organisation ID, Supernode ID and Shared Identity (Parachain Account ID) on parachain.
4. Store Staking requirements for Supernodes on the parachain.
5. Obtain Network ID for Supernode by locking the minimum MXC tokens to Stake on a Supernode ready for Contour Payments. Pay fee for Network ID.
6. Store mapping of current Staked amount and Network ID to the Supernode ID on the parachain.
7. Show Supernode Stake.
8. Note that Join Servers and Application Servers must be associated with an Organisation ID to be rewarded.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-swimlane-setup-network.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram Roaming Setup Network</div>

<!-- Source (Visual Paradigm): register_supernode -->

##### Gateway Setup & Staking

* Store mapping of Organisation ID to Gateway ID (MAC) on the parachain.
* Store Staking and Regional Duty Cycle (DC) requirements for Gateways on the parachain.
* Lock the minimum MXC tokens for a Gateway to Stake on a Supernode ready for Contour Payments.
* Store mapping of current Gateway ID Staked amount to Supernode ID on the parachain.
* Show updated Supernode Stake after adding Gateway Stake to existing Supernode Stake.

Gateway ID must be associated with both its Organisation ID and its “Home” Supernode ID on the parachain since the Organisation ID that owns the Gateway ID that is used for the roaming Join Procedure at a “Visited” Supernode may differ from the Organisation ID that owns that “Visited” Supernode, and rewards should be distributed to the overarching Organisation IDs. It is not possible to determine the Organisation ID of a Gateway ID if the Gateway ID is only associated with its “Home” Supernode.

Organisation ID may stake across multiple Supernodes.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-swimlane-setup-gateway.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram Roaming Setup Gateway</div>

<!-- Source (Visual Paradigm): register_supernode -->

##### End Device Setup & Staking

* Store mapping of Organisation ID to End Device ID (DevEUI) on the parachain.
* Store Staking and Regional Duty Cycle (DC) requirements for End Devices on the parachain.
* Lock the minimum MXC tokens for an End Device to Stake on a Supernode ready for Contour Payments.
* Store mapping of current End Device ID Staked amount to Supernode ID on the parachain.
* Store mapping of End Device ID, “Home” Supernode IP, and Join Server IP for resolving when roaming.
* Show updated Supernode Stake after adding End Device Stake to existing Supernode Stake.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-swimlane-setup-device.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram Roaming Setup End Device</div>

<!-- Source (Visual Paradigm): register_supernode -->

##### End Device Roaming Setup

* Store min. Roaming Fee requirement for End Devices on parachain.
* Lock the minimum MXC tokens for an End Device to deduct the Roaming Fee from their Stake on a Supernode ready for Contour Payments.
* Deduct the Roaming Fee from the Stake of an End Device’s Supernode
* Store mapping of the Roaming Status for an End Device ID and its expiry timestamp on the parachain.
* Store mapping for resolving when roaming (see previous slide).
* Show updated Supernode Stake after deducting End Device Roaming Fee from existing Supernode Stake.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-swimlane-setup-device-roaming.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram Roaming Setup End Device Roaming</div>

<!-- Source (Visual Paradigm): register_supernode -->

### Use Cases

#### Roaming with MXC End Device between Supernodes Registered on MXC Network

* Data Buyer (Dashboard User)
* Data Provider (End Device Owner)
* Collator Nodes (CN) receive Share of roaming fees.
* Gateway (GW) at Visited Supernode (VSN) does not get share of roaming fees
* Shows simple version of Data Market where End Devices data may be traded but not tokenized.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-use-case-roaming-mxc-device-mxc-network-supernodes.png" />
</div>

<div class="figure-text">Figure: Use Case Roaming MXC End Device using MXC Network Supernodes</div>

<!-- Source (Visual Paradigm): register_supernode -->

#### Roaming at a Supernode that is registered on the MXC Network using an End Device from a different Network Operator that is registered on ThingPark Exchange (TEX)

* MXProtocol Policy Integrated into ThingPark Partners UI
* Roaming Policy stored on DataHighway
* IT Integration Setup Whitelisting stored on DataHighway
* Store Profile Of End Device on DataHighway so no request required to to Home NS
* Periodic Billing & Payments via MXC Service
* Roaming API

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-roaming-between-network-operators.png" />
</div>

<div class="figure-text">Figure: Flow of Roaming between Network Operators</div>

* Connect & Register LoRaWAN End Devices & Gateways on ThingPark Exchange Hub (TEX)
* Roaming with an End Device (from a Network Operator that is registered on TEX) at a Supernode (MXC Network Operator)

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-roaming-actility.png" />
</div>

<div class="figure-text">Figure: Flow of Roaming with Actility</div>

<!-- Source (Visual Paradigm): datahighway-interrelationship-diagram -->

#### Flowchart Diagrams

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-roaming-integration-test.png" />
</div>

<div class="figure-text">Figure: Flow of Roaming in Integration Tests</div>

<!-- Source (Visual Paradigm): roaming_class_diagram -->

#### Roaming at a Swisscom Network Server (NS) using an End Device from a different Network Operator (e.g. MXC, Swisscom) that is registered on ThingPark Exchange (TEX)

* Create MXProtocol Policies for roaming on ThingPark Exchange (between MXC Network Operator and others on ThingPark Exchange e.g. Swisscom, Orange)
* Optionally the Swisscom Network Server (NS) may also support MXProtocol.
* Use DataHighway Parachain Roaming API to check Roaming Agreement Policy for network associated with End Device (MXC)
* Use Roaming API to check Roaming Whitelisting
* Use Roaming API to accept the Roaming Policy and start Roaming Accounting
* Use MXProtocol Policy that is integrated into ThingPark Partners UI to audit periodic (i.e. monthly) payments from MXC, which queries the Roaming API for Billing & Payments
* Conflict Resolution associated with payments is resolved using the MXProtocol Policy

### UX Design

#### Proposed Roaming Integration into MXProtocol of LPWAN Supernodes

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-roaming-integration-supernode.png" />
</div>

<div class="figure-text">Figure: Flow of Roaming when Integrating into a Supernode</div>

<!-- Source (Visual Paradigm): roaming_ux -->

<div class="page-break"></div>

## Inter-Chain Data Market

### Data Trading

#### UX Design

MXC's DataHighway.com that is mentioned on Page 2 of MXC's Data Economy Whitepaper <a href="#reference-7c63ac" class="pretty-link-colored">[7c63ac]</a> will provide a User Interface (UI) with the following features:

* Data Wallet
  * Shows balance in DHX that is to be used for inter-chain data trading
  * Shows claimable DHX earned from staking across bridges (i.e. IOTA)
  * Show balance of VMXC and MXC that are available for exchange
    * Link to the AXS Wallet
    * Link to the M2M Wallet
  * In-built DEX
* Data Marketplace
  * Manage DHX for users of an organisation, or an individual

<!-- Source (Visual Paradigm): visualization_brainstorm -->

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-datahighway-datamarket-sketch.jpg" />
</div>

<div class="figure-text">Figure: Inter-Chain Data Market Use Flow Sketch</div>

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-datahighway-ux-sketch.jpg" />
</div>

<div class="figure-text">Figure: Inter-Chain Data Market UX Ideation Sketch</div>

#### Class Diagram

##### Data Item (End Device Data) Listed on Inter-Chain Data Market & Purchase Order Granting Access with Data Validated & Certified

> Important Note: Detailed attributes and functions of classes that are coloured in "grey" have been omitted for brevity. Refer to Roaming Class Diagram (in the Roaming Whitepaper) for the details.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-class-datamarket.png" />
</div>

<div class="figure-text">Figure: Class Diagram Inter-Chain Data Market</div>

#### Swimlane (Flowchart) Diagrams

##### Data Seller configures End Device (Sensor) Data Frames for Graphs on M2M Portal

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-swimlane-dataseller-configure-frames.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram Inter-Chain Data Market Data Seller Configuration of Frames</div>

##### Data Seller configures End Device (Sensor) Data Visualizations & Monitoring for Dashboard on Inter-Chain Data Market

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-swimlane-dataseller-configure-visualizations.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram Inter-Chain Data Market Data Seller Configuration of Visualizations</div>

##### Data Seller configures Sale / Auction of End Device (Sensor) Data Listing on Inter-Chain Data Market

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-swimlane-dataseller-configure-listing.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram Inter-Chain Data Market Data Seller Configuration of Listing</div>

###### Data Buyer Requirements

A Data Buyer may need access to an End Device's sensor data for a Weather Application. They would visit DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> that offers the following:
* Data Marketplace
* Data Wallet & Exchange

###### Data Buyer Choices

Data Buyers may be presented with a variety of paths to be onboarded, such as a fly-through demo of how to use the website, and to optionally trial usage with a testnet simulation.

After visiting the Data Marketplace, choosing a region and specifying their roaming requirements if any, they will be presented with a list of bundled plans that have been pre-packaged by organizations from various Supernodes that are competing for business.

Data Buyers may search, filter, and select a pre-packaged bundle. An advanced option may be provided for users that would prefer to choose a specific combination of their favourite End Devices, dedicated Gateways, and Supernodes, such as only those from specific hardware manufacturers or specifications (i.e. MatchX), or only from specific “Data Producer” organisations, or only from those with a certain level of reputation (i.e. only Supernodes with an amount of MXC staked by stakeholders on their "home" Supernode that exceeds a certain threshold) that is proven to have been obtained by a broad diversity of different stakeholders, and that has historical records demonstrating proven reliability of uptime (of the Supernode and/or the recommended or chosen devices), whether they've enabled roaming or not, and whether they have invested in backup devices to try to guarantee a level of service uptime incase they have limited historical records (fallback device details that are offered by the same Supernode and other Supernodes from other networks incase the chosen Supernode or device fails).

Lastly, the Data Buyer adds items to their shopping cart and chooses to go to checkout for payment. The Data Buyer may optionally be offered insurance coverage incase of roaming network failure or failure of their chosen or similar equivalent device.

##### Data Buyer Purchases / Bids for Access Grant to End Device (Sensor) Data Listing on Inter-Chain Data Market

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-swimlane-databuyer-purchase-listing.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram Inter-Chain Data Market Data Buyer Purchase Listing</div>

###### Data Buyer Payment Options

The Data Buyer (i.e. an Application Developer) is given payment options that include:
* Direct payment in DHX from their “Data Wallet”.

They may choosing to pay in DHX, which they may have obtained from either:
* Earning DHX through:
  * Staking payments in DHX from running a DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> parachain validator node or from nominating a validator
  * Staking payments in DHX from running a Mining bridge (i.e. IOTA, etc)
  * Royalty payments in DHX from offering End Devices or Gateways as a Data Provider that other users choose to use on the Inter-Chain Data Market of DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a>
  * Royalty payments in DHX from running a Supernode
  * Rewards for participating in the DHX DAO
* Credit card payment in fiat (i.e. USD or EUR) in exchange for DHX
* Exchanging DHX for MXC, or other currency or token using MXC's DEX
* Transferring DHX from another user

##### Data Buyer Accesses Sensor Data Frames from Inter-Chain Decentralized App (DApp)

The Data Buyer is then granted access to the data from the Data Provider's IoT End Device. API Keys are provided for the Application Developer to configure their Inter-Chain (i.e. IOTA or MXC) DApp to perform queries on the data.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-swimlane-databuyer-access-frames.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram Inter-Chain Data Market Data Buyer Purchase Listing</div>

### Data Validation

#### External Oracles

##### Purpose

External Oracles <a href="#reference-459cee" class="pretty-link-colored">[459cee]</a> validate external data that can change frequently as part of Quality of Service (QoS) framework.

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-oracles.png" />
</div>

<div class="figure-text">Figure: Flow Diagram of External Oracles</div>

##### Definition

External Oracle definition:

* Second-layer third-party services (e.g. ChainLink or similar equivalent)
* Audited using an Oracle Rating System
* Detect compromised data sources that need to be trustworthy (i.e. GPS location and Certificate of Authenticity of Hardware such as IoT End Device or IoT Gateway):
    * Check the legitimacy (not fake), accuracy (not lower quality) of input data sources
        * Certificates of Authenticity associated with IoT End Devices that provide data that is traded in the Inter-Chain Data Marketplace
    * Check that input data source IoT End Devices are actually feeding data from the GPS location that was promised in the Inter-Chain Data Marketplace
* Determine the trustworthiness of data sources through a diversity of information sources to reduce the risk of the data being unreliable.

##### Types

External Oracle types:

* Software Oracles - feed information that originates online into the DataHighway parachain runtime
* Hardware Oracles - feeds IoT sensor data from the physical world into the DataHighway parachain runtime
* Inbound Oracles - feeds data from the external world
* Outbound Oracles - listen and respond to on-chain data events such as payment events prior to triggering IoT devices
* Consensus-based Oracles - DAO data (human consensus) or prediction markets (e.g. Augur, Gnosis) that implement a rating system for Oracles and for security they require a combination of the Oracles to all agree in order to gain confidence as to the outcome of an event.

##### Risk Ratings

External Oracle Risk Ratings are necessary to mitigate risks such as "man-in-the-middle attacks" between parachain runtimes or smart contracts and the Oracles themselves by using different trusted computing techniques.

##### Example

Data Buyer purchases from the Inter-Chain Data Market access to IoT data from a specific End Device that is at a specific location and is owned by a Data Seller (Provider). The Inter-Chain Data Market module of the DataHighway parachain or smart contract specifies that the promised data needs to be available via the API and shall not be compromised.

External Oracles validate the IoT data that is stored in a Data Storage Backend (e.g. Alibaba Cloud or similar equivalent) and Notaries <a href="#reference-702f3f" class="pretty-link-colored">[702f3f]</a> certify a hash of the data that is committed on-chain. IoT data that must be validated includes but is not limited to that comprising the agreement between the Data Provider and Data Buyer, such as:

* Price feed data for financial aspects that show USD-equivalent value of token assets
* GPS location data of the IoT End Device and the Gateway
* Checksum that acts as a fingerprint or a unique identifier for the data being sent from the IoT End Device over the network to ensure the received data is genuine and free of errors and losses and has not been maliciously tampered with.
* Certificate of Authenticity of the IoT End Device and Gateway (i.e. MatchX or similar equivalent).

Refer to Swimlane (Flowchart) Diagrams.

#### Swimlane (Flowchart) Diagrams

##### Validate & Certify & Store External Data Frames Retrieved using Oracles, Notaries & Data Storage Backend

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-oracles-validate.png" />
</div>

<div class="figure-text">Figure: Swimlane Diagram of Validation, Certification, and Storage Data from Oracles and Notaries</div>

### Data Monitoring

Example combinations of cloud-based services (or similar equivalent):

* Grafana <a href="#reference-f05938" class="pretty-link-colored">[f05938]</a> + Alibaba Cloud
* Grafana + AWS CloudWatch

#### Business Concept Diagram

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-business-concept-datamarket-oracles.png" />
</div>

<div class="figure-text">Figure: Business Concept Diagram Inter-Chain Data Market Oracles</div>

<div class="page-break"></div>

## Technical Model

The DH is a Substrate-based chain.

The custom Substrate Core Design is as follows:

### Consensus

* Consensus node capacity (future):
    * Initial
        * 200
    * Future
        * 1000 (same as ChainX)
* Protocol (pluggable):
    * Initial
        * Block production protocol: Aura
        * Block finality protocol: Aura
        * Block production time: 9 seconds (same as ChainX)
        * BPT: < 10 seconds (same as ChainX)
    * Future
        * Block production protocol: BABE
        * Block finality protocol: GRANDPA
            * Note: Future BABE runtime has 6 seconds (0.1 minutes) per block (see substrate > node > runtime > src > constants.rs). See Aura <a href="#reference-b26ba7" class="pretty-link-colored">[b26ba7]</a>.
        * Block production time: 2 seconds (same as ChainX)

### Custom Substrate Runtime Modules

In addition to the Substrate Core Runtime Modules, the DH will have the following runtime modules that leverage the Substrate Runtime Module (Palette) Library:

* Roaming
    * API
        * Refer to current implementation of DataHighway Roaming Runtime Modules <a href="#reference-2961f6" class="pretty-link-colored">[2961f6]</a>

* Staking (NPoS) <a href="#reference-7fd55a" class="pretty-link-colored">[7fd55a]</a>:
    * Reward
        * Recipients
            * Collators (Consensus nodes) that secure block rewards
            * Nominators that lent their stake to the Collators that secure block rewards
    * Punishment
        * Punishment of who
            * Staking collators and their nominators due to bad collator behaviour
            * Potentially other staking participants using the same Virtual Private Server (VPS)
        * Punishment types
            * Offences committed by collators (e.g. offline with missing heartbeat causing block delay) during a session may be reported
        * Punishment penalty fund recipients
            * Offence penalty (e.g. slash the stake of a collators and its nominators, or just their potential rewards) transferred to treasury
* Mining ("Virtual" Mining + PoP)
    * Note: Sufficient "reserve" is required in the multi-signed address of Trustee Nodes to support user withdrawal.
    * General
        * API
            * Configuration Changes
                * Governance (DHX DAO)
            * Code Snippet
                ```rust
                // GENERAL MINING

                // Mining Speed (Base + Boosts).
                // Applies to DHX Profits from Staking on DataHighway
                pub MiningSpeedOf get (parachainAccount): map(T: ParachainAccountId) => (T: Speed);

                pub enum MiningSpeedBaseForTokenType {
                    DHX = 1, // Real voting/mining power
                    MXC = 1, // Special Virtual voting/mining power
                    IOTA = 0.5, // Virtual voting/mining power
                    DOT = 0.1 // Virtual voting/mining power
                };
                ```
    * Token Mining (ICBA)
        * API
            * Configuration Changes
                * Governance (DHX DAO)
            * Code Snippet
                ```rust
                // TOKEN MINING

                // Update Inter-Chain Bridged Asset Collateral that is currently locked that is used to determine DHX entitlement
                pub InterChainBridgeAssetCollateralOf get (parachainAccount): map(T: ParachainAccountId) => (AssetID, AssetBalance)

                // Token Mining Speed Boost
                // (per 50 USD-equivalent of Inter-Chain Bridged Assets)
                pub enum MiningSpeedBoostForTokenType {
                    DHX = 0.025, // Real voting power
                    MXC = 0.025, // Virtual voting power
                    IOTA = 0,
                    DOT = 0
                };
                ```
    * Hardware Mining
        * API
            * Configuration Changes
                * Governance (DHX DAO)
            * Code Snippet
                ```rust
                // HARDWARE MINING

                // Hardware Security Mining Speed Boost
                pub enum MiningSpeedBoostForHardwareSecurity {
                    SecureHardware = 0.05, // MatchX
                    InsecureHardware = 0.025
                };

                // Hardware Type Mining Speed Boost
                pub enum MiningSpeedBoostForHardwareType {
                    Gateway = 0.25,
                    EndDevice = 0.15
                };
                ```
     * Development Mining
        * API
            * Configuration Changes
                * Governance (DHX DAO)
            * Code Snippet
                ```rust
                // DEVELOPMENT MINING

                // DApp Mining Boost Approval Status resulting from Governance Vote
                pub DevMiningBoostApprovalStatusOf get (parachainAccount): map(T: ParachainAccountId) => (DAppID, MiningBoostRequestID, ApprovalStatus)

                // DApp Proposal Mining Speed Boost
                pub enum MiningSpeedBoostForDAppProposal {
                    ProposalApproved = 0.25, // Evidence of first proposal
                };

                // DApp Adoption Mining Speed Boost
                pub enum MiningSpeedBoostForDAppAdoptionLevel {
                    AdoptionApproved = 0.25, // Evidence of >50 unique users
                };

                // Bounty Contribution Mining Boost Amount Requested & Approval Status resulting from Governance Vote
                pub BountyMiningBoostAmountApprovalStatusOf get (parachainAccount): map(T: ParachainAccountId) => (BountyID, MiningBoostRequestID, Amount, ApprovalStatus)
                ```
    * Advocacy Mining
        * API
            * Configuration Changes
                * Governance (DHX DAO)
            * Code Snippet
                ```rust
                // ADVOCACY MINING

                // Advocacy Referral Adoption Mining Speed Boost
                pub enum MiningSpeedBoostForAdvocacyReferral {
                    ReferralAdoptionApproved = 0.01
                };

                // Advocacy Type (i.e. Publication, Presentation, Ambassador, Sponsor) Contribution Mining Boost Amount Requested & Approval Status resulting from Governance Vote
                pub AdvocacyMiningBoostAmountApprovalStatusOf get (parachainAccount): map(T: ParachainAccountId) => (AdvocacyID, AdvocacyType, MiningBoostRequestID, Amount, ApprovalStatus)
                ```
    * Governance Mining
        * API
            * Configuration Changes
                * Governance (DHX DAO)
            * Code Snippet
                ```rust
                // GOVERNANCE MINING

                // Governance Type (i.e. Voter, Approver) Mining Boost Amount Requested & Approval Status resulting from Governance Vote
                pub GovernanceMiningBoostAmountApprovalStatusOf get (parachainAccount): map(T: ParachainAccountId) => (GovernanceID, GovernanceType, MiningBoostRequestID, Amount, ApprovalStatus)
                ```
* DHX DAO
    * Reputation
        * Record of reputation per user.
            * Automatically updates based on certain actions.
            * Manual DHX DAO approval to obtain reputation for other actions.
    * Crowdfund
        * Polkadot Crowdfunding for Parachain Slots <a href="#reference-038640" class="pretty-link-colored">[038640]</a>
    * Democracy
        * Proposals & Referendums
            * Vote purpose
                * General
                    * Treasury fund usage
                    * Staking rewards for collators (i.e. Profit Model)
                * DHX DAO Specific
                    * PoP Collaboration Schemes
                        * Benefits Modification (i.e. modify mining speed for "Development" Collaboration Scheme, or add new token to "Token" Collaboration Scheme)
                    * Reputation request (manual)
                    * Approver (with sufficient reputation) to releasing DHX DAO Treasury Unlocked Reserves
            * Voter entitlement
                * DHX tokens may be used
    * Council
        * Elections
            * Candidates
                * Consensus (collator) nodes
            * Cycle
                * 1 hour per Consensus node election
            * Voters
                * Entitlement
                    * DHX tokens may be used by any user
                * Rules
                    * One-asset-one-vote model (eliminate node conspiracy)
            * Candidate Ranking
                * Vote quantity
            * Reward recipients
                * Relay Chain
                    * Consensus (validator) nodes
                    * "Candidate" nodes
                * Parachain
                    * Consensus (collator) nodes
                    * "Candidate" nodes
                * PoP Mining users
                * Other user participants
    * Treasury
        * Funds
            * Sources (e.g. offence slashing penalties)

* Allow collators to donate rewards in return for other governance tokens.
* Allow further lockdrop/airdrop to holders of other assets (like DOTs) to be processed through a Democracy Runtime Module vote or a Treasury Runtime Module spend proposal. The proposal will need to include either a roadmap of how payouts will be handled or an implementation of a DHX DAO/module that can sustain a distribution of tokens to participants with those specific assets.

### Node

* Consensus node hardware requirements:
    * ~2 CPU, ~>4GB RAM, ~8GB swap

### Other Infrastructure

* Polkadot Telemetry Service <a href="#reference-d38e97" class="pretty-link-colored">[d38e97]</a>
* Polkascan <a href="#reference-57f381" class="pretty-link-colored">[57f381]</a>
* Monitor Slashable Offences <a href="#reference-128e60" class="pretty-link-colored">[128e60]</a> on Substrate-based chains.
* Notifications
    * DataHighway Discord Bot (similar to Polkabot)
* UI
    * Inter-Chain Data Market Dashboard
    * "Virtual" Mining using ICBA
    * PoP Mining DHX DAO Approaches
        * ICBAM
        * Hardware Assets
        * Development
        * Advocacy
        * Governance
    * Substrate Full Client UI
        * Block Explorer (based on Polkadot.js Apps for interacting with Polkadot.js Apps <a href="#reference-34e740" class="pretty-link-colored">[34e740]</a> and Substrate-based chains)
    * Other
        * Speckle <a href="#reference-836a2f" class="pretty-link-colored">[836a2f]</a>
        * Substrate Light Client UI <a href="#reference-81db2d" class="pretty-link-colored">[81db2d]</a>

<div class="page-break"></div>

## Glossary

### Mining

* Halving Period - Frequency that the block reward is halved. It is measured in years.
* Insecure LPWAN Hardware - End Devices and Gateways that may just be a MAC address that has been faked programmatically with a script.
* Mining Speed Boost (MSB) - The MSB is granted to identities through DHX DAO approval only when they are granted through DHX DAO approval of a PoP. If the identity participates in staking as a collator or nominator on the DH, where the likelihood that they will validate block transactions is at a hashrate that is proportional to the amount of stake they have bonded (since in NPoS the hashrate is based on the percentage of tokens held by a collator, whereas in PoW the hashrate is based on the computing power of the miner), and they receive a block reward for producing a block, and this happens when they are already participating in a PoP, then they will receive an additional MSB reward.
* Secure LPWAN Hardware - End Devices and Gateways (e.g. LoRaWAN MatchX or similar equivalent) that have a security chip and certificate to certify that they are a real gateway that was manufactured by a trusted entity.

### Roaming

* DevEUI - is globally unique, whereas there may be two devices with same DevAddr (differentiated through the session information)
* Network ID - NetID assigned to LoRa Alliance members. NetID is 32 bit DevAddr comprising: `Fixed Prefix + NwkID + NwkAddr`. NetID generates NwkID
* NwkID - Identifies your network when your devices send uplinks in Visited Networks. NwkID is scarce resource. NwkAddr size is:
  * 25 bit for NetID Type 0.
  * 17 bit for NetID Type 3
  * 10 bit for NetID Type 6
* Join Request is comprised of `JoinEUI/AppEUI + DevEUI + DevNonce`, where the JoinEUI/AppEUI identifies the Join Server and helps the Visited Network discover the Home Network of an “activating” device. Note that when you have a random DevAddr or when a JoinEUI/AppEUI is present, it indicates that the device has lost its Home Network whilst Roaming.
* Network Server - It may belong to an NetID, with a channel plan, a FNS URL and SNS URL, and IP address, HTTP auth credentials, JS URLs, JS IP address, JS HTTP auth credentials, and roaming policy
* Roaming Hub - Star Interconnection where a Roaming Hub is inserted using a Serving Network Server, since configuration and management of Mesh Interconnection (of Network Servers and Join Servers) does not scale
* SNS - Serving Network Server

<div class="page-break"></div>

## Abbreviations

### Mining

* BAT - Block Authoring / Production Time ("Block Time")
* BPT - Block Propagation Time (Network Latency)
* DAO - Decentralized Autonomous Organization
* DH - DataHighway
* DHX - DataHighway Asset Token
* DHX DAO - DataHighway DAO
* ICBA - Inter-Chain Bridged Asset
* ICBAM - Inter-Chain Bridged Asset Mining
* MDT - PoP Mining Diversity Threshold
* MLB - PoP Mining Loyalty Boost
* MSB - PoP Mining Speed Boost
* NPoS - Nominated Proof of Stake
* PoS - Proof of Stake
* PoW - Proof of Work
* ROI - Return on Investment
* TPB - Transactions Per Block
* TPS - Transactions Per Second
* USD - United States Dollar

### Roaming

* AS - Application Server
* DH - DataHighway
* ED - End Device
* FNS - Forwarding Network Server
* IoT - Internet of Things
* HNS - Home Network Server
* JS - Join Server
* NwkID - Network ID
* NS - Network Server
* TPS - Transactions Per Second
* VNS - Visited Network Server

<div class="page-break"></div>

## Appendices

### Appendix 1: General - Technical Model of Substrate

#### Integration of the DataHighway Parachain into the Polkadot network

<div class="image-wrapper">
    <img src="https://raw.githubusercontent.com/DataHighway-DHX/documentation/master/assets/images/diagram-flow-polkadot-network.png" />
</div>
(View image by right-clicking and choosing to "Open Image in New Tab" or "Save Image As")

<div class="figure-text">Table: Polkadot Relay Chain and the DataHighway (DH) Parachain</div>

### Appendix 2: Roaming - LoRaWAN Technology

* **LoRa** - physical layer technology that modulates the signals in sub-GHZ unlicensed ISM bands (i.e. 868 MHz in Europe (same as a wireless doorbell), 915 MHz in North America, and 433 MHz in Asia) using a proprietary chirp spread spectrum (CSS) modulation technique
* **Trade-Off between Channel Bandwidth and Data Rate** - CSS is bi-directional communication that spreads a narrow-band signal over a wider channel bandwidth using six spreading factors from lowest SF7 (shorter range but higher data rate up to 50kbps) to highest SF12 (longer range at the expense of data rate as low as 300 bps) to adapt the data rate and range trade.
* **Noise impacting the Signal** - SNR of resulting signals is low
* **Resilience to Signal Interference** - High interference resilience of the signal
* **Uptime Reliability** - Difficult to detect or jam the signal
* **Message Payload Max. Length** - 243 Bytes
* **Data Rate Max.** - 27 kbps LoRa (or 50 kbps using FSK)
* **Bandwidth** - 250 kHz and 125 kHz
* **Messages (per day) Max.** - Unlimited
* **LoRaWAN Protocol** - LoRa-based communication protocol called LoRaWAN was standardized by LoRa-Alliance (first version in 2015)
* **LoRaWAN Protocol Benefits**
  * **Multiple Gateway Reception from End Devices of Messages Simultaneously** - Multiple base stations (Gateways) in a neighborhood (at higher network deployment cost in the IoT “gig” data economy) may exploit redundant reception, whereby messages transmitted by an end device using different spreading factors can be received simultaneously by all LoRa Gateways in the range, thereby improving the successfully received messages ratio. LoRa Supernodes (backend system network servers) filter the duplicate receptions, whilst also checking security, sending acknowledgments to the end device, and sending the message to the corresponding LoRa Application Server (application server).
  * **Multiple Gateway Reception from End Devices of Localizing End Devices** - Multiple receptions of the same message by different base stations are exploited by LoRaWAN using the time difference of arrival (TDOA)-based localization technique supported by very accurate time synchronization between multiple base stations for localizing end devices.
  * **Multiple Gateway Reception from End Devices for Avoids Roaming Handover** - Multiple receptions of the same message at different Gateways avoids the need for handover in a LoRaWAN network (i.e. if a node is mobile or moving, handover is not needed between the base stations).
  * **Multiple types (Classes) of End Device** - LoRaWAN provides various classes of end devices to address the different requirements of a wide range of IoT applications, e.g., latency requirements.
    * **Class A** - Bidirectional communication between end-device and Gateway for the lowest power usage, where each end-device’s uplink transmission is followed by two short downlink receive windows (for applications requiring only a short downlink communication after the end device has sent an uplink message). Transmissions slots are scheduled by the end device is based on its own communication needs with a small variation based on a random time basis.
    * **Class B** - Same as Class A, but with extra receive windows at scheduled times. End devices receive a time-synchronized beacon from the Gateway to open receive windows at the scheduled time and allow the Supernode to know when the end device is listening.
    * **Class C** - Bidirectional end devices with almost continuously open receive slots, and only close when transmitting at the expense of excessive energy consumption.

* **LoRaWAN Gateways (Base Stations)**
  * Gateway may have 8-channels, but only has a single channel for sending data, the rest are for receiving messages from Sensors.
  * Gateways send a max payload size of 243 Bytes, but usually around 20 Bytes each
  * Connection to a Gateway is possible if you have line-of-sight or only a few structures in the way
  * **Messages from Gateways to Sensors** - Gateways with 8-channels may only send data to Sensors on 1 of those channels, and should be carefully managed since its subject to limitations (see section “LoRaWAN Network Usage (Bandwidth & Duration) Limitations”).

* **LoRaWAN End Devices (Sensors)**
  * **Device Provisioning & Joining (of Sensors)**
    * OTAA recommended since assigns new encryption key on each connection or renewed by rebooting the device to force reconnection and relies on confirmation response from a Gateway (better security than ABP whose encryption keys never change and may be compromised over a period of time)
  * **Messages from Sensors to Gateways** - Gateways with 8-channels may receive data from Sensors on 7 of those channels. Data throughput depends on how often Sensors are sending messages, data size of each message, signal strength between Sensor and Gateway (Sensors with a weak signal need more time to transmit the data so they use a receive channel on the Gateway longer). See LoRaWAN Gateways What Does it Do <a href="#reference-6091f0" class="pretty-link-colored">[6091f0]</a>.

  * **Throughput** - Max. throughput decreases as the number of Sensors increases. See Understanding the Limits of LoRaWAN <a href="#reference-7c412d" class="pretty-link-colored">[7c412d]</a>.

* **LoRaWAN Network Usage (Bandwidth & Duration) Estimation**
  * Assumptions
    * Gateway average message payload size: 50 Bytes (20 Bytes + 30 Bytes overhead added to application payload by LoRaWAN Protocol)
    * Gateway max. Message payload size: 243 Bytes
    * 250 Sensors @ 50 Bytes payload. See Understanding the Limits of LoRaWAN <a href="#reference-7c412d" class="pretty-link-colored">[7c412d]</a>.
      * **Max. Sensor Throughput** - 150 Packets/hr, 7850 Bytes/hr
        * Note: 50 Packets per Byte
  * Estimates
    * Average Usage
      * Assumption - Each Sensor sends a message 10 times per hour)
      * 1x Sensor
        * 1x Sensor sends per hour: 300 Bytes (50 Bytes x 6)
        * 1x Sensors send per month: 0.2 MB / ~10000 Packets (720 hrs in a month, 720 x 0.3 / 1000)
          * 7200 messages per month (i.e. 1 Sensors x 10 times per hour x 720 hrs per month)
    * Max. Usage
      * Assumption - Each Sensor sends a message 10 times per hour)
      * 1x Sensor sends per hour: 1.4 kB (243 Bytes x 6, since 10 times per hour)
      * 1x Sensors send per month: 1 MB / ~50000 Packets (720 hrs, 720 x 1.45 / 1000)
  * References
    * See LoRaWAN Gateways What Does it Do <a href="#reference-6091f0" class="pretty-link-colored">[6091f0]</a>.
* **LoRaWAN Network Usage (Bandwidth & Duration) Limitations**
  * **Data Bandwidth Limits to send data from Gateway to Sensors**
    * Gateway’s single channel for sending data is only allowed to send data to Sensors 5% of the time daily (European regulation for use of ISM band radio devices).
      * 1% Duty Cycle? prevents Sensors from increasing data rate to stabilize and maximize the throughput. See Understanding the Limits of LoRaWAN <a href="#reference-7c412d" class="pretty-link-colored">[7c412d]</a>.
  * **Fair Access Policy (airtime transmission limits)**
    * End Device Usage Duration Limits
      * Uplinks
        * 30 sec uplink per 24 hr period
        * Note:
          * Min. Spreading Factor (SF7) (SF7BW125) - sending 2 byte payload consumes 45ms of airtime (total tx of 1s airtime per day)
          * Max. SF (SF12 with longest range) - total of 27.6s of airtime per day (exhausting the Supernode's limit)
      * Downlinks
        * 10 downlink messages per 24 hr period (QUESTION: Should this be per day or only per Hour? If per hour I have to update all the pricing plans in this document) (including ACKs for confirmed uplinks)
        * Note: This also helps to limit tx downlink events (from timing loop) to avoid spamming the End Device's Transceiver such that it denies downlink tx requests
        * Note:
          * **Network Compliance Service**
            * Each Application accessing API's to access data from End Devices need to limit the usage of specific End Devices, and the amount of join requests from each End Device. Transmit an accumulated unconfirmed count every 60 mins. Reset the count every 24 hours by sending a downlink and receiving a confirmed uplink. See LoRaWAN Enable Sensor <a href="#reference-eaff82" class="pretty-link-colored">[eaff82]</a>.
    * Note:
      * The above limits to apply to Gateways and End Devices such as LoRaWAN Wireless Transceivers (i.e. RN2483)
      * Gateways must comply with these limitations, however a Gateway reply is not guaranteed
      * The Supernode's must account for the different in SF in LoRaWAN and not just assume only SF7 will be used by each End Devices.
      * Goals:
        * Application Payload under 12 Bytes
        * Interval between messages of several minutes

### Appendix 3: Roaming - Use Case (Alice and Bob)

#### Assumptions

* Existing MXC Supernodes are already deployed in Germany and Poland
* Existing M2M Wallet Gateway Discovery feature shows that there’s a Gateway device every 20km between the Supernodes
* Existing M2M Wallet allows user to exchange fiat for MXC and convert to VMXC to initially pay for M2M IoT payments and to regularly earn from staking on a Supernode
* Existing DataHighway Data Wallet allows existing BTC or IOTA holders to stake across a bridge to earn and claim DHX
* Existing DataHighway Data Wallet provides a DEX to exchange BTC or IOTA for DHX or VMXC
* Existing DataHighways Data Marketplace lists offers from IoT devices and data buyers may purchase a plan to access the data from and API

#### User Personas

* Alice
  * Role - Data Buyer (Watersports website builder)
  * Funds - 0.01 BTC, 1 IOTA
  * Time Available - Minimal, enough to follow simple guide to mine cryptocurrency, and enough to purchase a subscription to data
  * Location - Krakow, Poland, OR Remote
  * Scope - Website builder of Krakow Sailing Club is interested in gathering real-time readings from different remote locations (lakes and coastlines) to assess the weather conditions and visitor count.
  * Constraints
    * Do not want to purchase (up to €59), obtain property permission, and install IoT devices, since they mostly work remotely.
    * Do not want to purchase non-site specific regional readings from a government weather tower’s online reseller
    * Do not want to rely on low-quality webcams videos from nearby locations
  * Expectations
    * Free or low-cost access to sensor data (if possible)
    * Location-specific real-time readings data
    * Low-cost IoT devices to be managed by others
    * Mine using a disused proportion of their web server (earn cryptocurrency in exchange for providing computing power to  process decentralised transactions) enough to pay for data costs
* Bob
  * Role - Data Provider (Weather units built from IoT devices)
  * Funds - €300
  * Time Available - Medium, they have a routine of visiting different flower gardens for photography at home in Krakow, and on some weekends they go sailing in Spandau. They’re willing to obtain permission from flower gardens and waterfront locations to install and advertise what their Weather unit is doing during the periods of their visits
  * Location - Krakow, Poland (Home) OR Spandau, Berlin, Germany
  * Scope - Hobbyist flower photographer and windsurfer is interested in creating an organisation that gathers real-time readings using MatchX IoT devices from different remote locations (lakes and coastlines) and public parks (flower gardens). They have built a mobile Weather monitoring station with various IoT devices.
  * Applications - Watersport Conditions, Flower Garden Tourism
  * Deployed Equipment Kits
    * Fixed Gateway (near favourite sailing location)
      * Gateways - 1x ~€400 Gateway (with onboard GPS)
    * Fixed Weather Unit #1 (South end of favorite sailing location)
      * IoT Devices (Sensors)
        * 1x €6 Water Sensor
          * Usage - estimate wave height, or rainfall
        * 1x €9 Temperature & Humidity Sensor
          * Usage - compare locations, recommend wetsuit
        * 1x €9 Piezo Vibration Sensor
          * Usage - estimate the wind speed
        * 1x €17 Sunlight Sensor
          * Usage - recommend blue-sky location and photos
        * 1x €9 PIR Motion Sensor
          * Usage - measure foot traffic at the location
    * Fixed Weather Unit #2 (North end favorite sailing location)
      * IoT Devices (Sensors)
        * Same as for Fixed Weather Unit #1
    * Mobile Weather Unit #3 (transported around in backpack to different sailing locations or flower gardens)
      * IoT Devices (Sensors)
        * 1x €6 Water Sensor
          * Usage
            * Watersport Conditions - estimate wave height, or rainfall
            * Flower Garden Tourism - estimate rainfall
        * 1x €9 Temperature & Humidity Sensor
          * Usage
            * Watersport Conditions - compare locations, recommend wetsuit
            * Flower Garden Tourism - how much to water plants
        * 1x €9 Piezo Vibration Sensor
          * Usage
            * Watersport Conditions - estimate the wind speed
        * 1x €17 Sunlight Sensor
          * Usage
            * Watersport Conditions - recommend blue-sky location and photos
            * Flower Garden Tourism- recommend for taking photo
        * 1x €9 PIR Motion Sensor
          * Usage
            * Watersport Tourism - measure foot traffic at the location
            * Flower Garden Tourism - measure foot traffic at the location
        * 1x €9 Loudness Sensor
          * Usage
            * Flower Garden Tourism - estimate if too noisy (tourists)
  * Operating Costs
    * Estimated €40 annually (20x €3 per device per year). See Comparative Study of LPWAN Technologies <a href="#reference-c57f47" class="pretty-link-colored">[c57f47]</a>.

  * Expectations
    * Free or low-cost to share sensor data (if possible)
    * Location-specific real-time data readings provided
    * Purchase and manage low-cost IoT devices using simple portal
    * Stake with Supernodes (earn cryptocurrency in exchange for the opportunity cost of locking away their excess unused funds, where the used proportion of their locked funds make contour payments to pay for their M2M transactions) enough to pay for data cost

#### User Story

* Bob’s Setup
  * Bob purchases the IoT devices (Sensors) from Matchx.io <a href="#reference-9d4c5f" class="pretty-link-colored">[a0320e]</a> and assembles them into a Weather unit. He then drives to a lake in Berlin and connects them to his laptop to check that the quality of the data is adequate for sharing.
  * Bob, signs up to the M2M Wallet (MXC’s implementation of the LoRa App Server) as the admin user of his organisation
  * Bob enables and uses the M2M Wallet’s Gateway Discovery feature, which sends periodical pings to identify the coverage of where the Supernodes and Gateways are located in the same MXC network and makes a 6-month plan of lakes, coastlines, and flower gardens that he will visit that are within range of them.
  * Bob configures the M2M Wallet’s Gateway Discovery daily ping broadcast interval, transmission frequency (channel), and data rate, so they are compliant with the region of the Supernode that’s associated with the Gateway.
  * Bob identifies that his favourite sailing location is 30km away from an edge Gateway, and so purchases his own Gateway (with onboard GPS) that he will install in the vicinity. He configures it to use a “home” Supernode and the LoRaWAN active channels of the region
  * Bob adds his Sensors in the M2M Wallet’s “Devices” section and associates them with a new Service Profile. He chooses the “home” Supernode in the M2M Wallet where each of his Sensors and Gateways will be provisioned. He also toggles that all the Sensors need to go through a Join Procedure to be Activated since they all support OTAA. He configures how frequently each date to initiate Sensor status requests, and their min/max allowed Data Rate. He defines a Custom Payload Codec to allow the Supernode (LoRa App Server) to encode and decode the binary device payload for the user by using a Custom Payload Decoder Script with signature `function Decode(fPort, bytes)` that the Supernode uses to convert the encoded payload object to JSON format, and a Custom Payload Encoder Script with signature `function Encode(fPort, obj)`, which encodes the given payload into an array of Bytes
  * Bob updates the firmware of his Sensors and Gateways in the M2M “Applications” section called “Fuota Deployment”
  * Bob uploads PEM file TLS and CA Certificates (including those for the routing profile) to enable TLS in the M2M “Applications” section called “TLS Certificates” for the connection between the Supernode (MXProtocol Server that’s based on LoRa Server) and the Application Server (LoRa App Server)
  * Bob configures the M2M “Service Profile” section to connect his organisation to the “home” Supernode. He toggles enabling the attachment of metadata to uplink packets processed by his Gateways (i.e. geolocation). He also toggles allowing the Supernode to geolocate all his Sensors and Gateways to support roaming
  * Bob configures the M2M “Applications” section to associate the Sensors in his Service Profile with real-world applications including: Watersport Tourism and Flower Garden Photography Tourism.
  * Bob configures in the M2M “Applications” section under "HTTP Integration Headers" an endpoint URL of a Data Service (including associated HTTP headers for authorization) so that uplink data packets received in the current session by the Supernode (LoRa App Server) from Sensors may be automatically forwarded in JSON format by HTTP POST request and then parsed, stored, and served to authorised Data Buyers from the DataHighway. He uses Mockbin <a href="#reference-1d41a4" class="pretty-link-colored">[1d41a4]</a>
and Request Logger Bin <a href="#reference-92e7f1" class="pretty-link-colored">[92e7f1]</a> to preview the data.
  * Bob configures in the M2M “Multicast Groups” section by adding Fixed Weather Unit #1 and Fixed Weather Unit #2 (that each comprise of Sensors from a Service Profile and Application) to a new Multicast Group, and configures the Multicast address, the session and application session keys, the frame counter, data rate and frequency to transmit the Multicast frames, chooses the Multicast Group Type to schedule Multicast frames from the Supernode only during daylight hours
  * Bob finds the following M2M Wallets sections most useful for monitoring his Sensors and Gateways:
    * “Devices” section, where it lists each device, its Device EUI, GPS map location, activation status, battery level, last online status, downlink queue list and confirmation status, frames, device data collected (collect from devices via Websockets API), and firmware details.
    * “Gateways” section, where it shows things like its GPS map location, altitude, last online status, and activity of his Gateway over the past 30 days (downlinks/uplinks), data rate, geolocation concentrator board config, live frames data log (of toggled uplink and downlink frame’s attached metadata transmitted and received info including LoRaWAN PHYPayload) (collect via Websockets API)
  * Bob chooses a “data” plan based on outcomes of using the Estimated Data Usage Calculator (a software product idea for convenience that’s yet to be built).
    * Sensors - Since he has 15x Sensors (each needing 1 MB per month with max 10 messages per hour), and only needs during daylight hours, he needs ~7.5 MB per month, so he chooses the Ad-Hoc offer of 20 MB (~1,000,000 Packets) for 200 MXC (1 USD), which expires after 1 month.
    * Gateway - Since he has 1x Gateway that will be located in a remote edge location, so whilst he may only use ~10 MB per month from his two nearby Sensors, he may earn VMXC from other users that connect to it, as well as from Staking earnings, which may cover the initial outlay to purchase the Gateway, so he chooses the Ad-Hoc offer of 20 MB (~1,000,000 Packets) for 500 MXC (2.5 USD), which expires after 1 month
  * Bob chooses an “access” plan for data processing and roaming resources
    * Toggles “Roaming Participation” in the Devices User Panel to activate roaming for the 6x Sensors used in his Mobile Weather Unit #3
      * Note: When roaming his transaction fees will be higher
  * Bob makes payment and chooses Supernodes to stake against to earn
    * Top-up MXC in exchange for ETH in AXS Wallet
    * Supernode #1
      * 500 MXC Staked (for his Gateway)
      * 125 MXC Staked (from 10x Sensors)
    * Supernode #2
      * 75 MXC Staked (from 6x Sensors)
  * Bob’s final configuration and allocation to Supernode’s
    * Supernode #1 (Berlin)
      * Gateway - fixed near his favourite sailing location
        * Fixed Weather Unit #1 - at South end of lake
          * 5x Sensors included
        * Fixed Weather Unit #2 - at North end of lake
          * 5x Sensors included
    * Supernode #2 (Poland)
      * Gateway - any available nearby
        * Mobile Weather Unit #3 - transported around in backpack
  * Bob goes to DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> and adds his Gateway and Sensors to the data market
    * Location - Spandau Lake, Berlin
      * Gateway #1 - fixed near his favourite sailing location
      * Roaming - Yes
      * “Home” Supernode #1 (Berlin)
      * Price - Price not shown on DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> - Bob knows he’s the only Gateway near his devices, so if anyone purchases access to the Sensors in one of his Fixed Weather Unit #1 or #2, he’ll be paying off the price of his investment in buying the Gateway
    * Location - Spandau Lake (North), Berlin
      * 5x Sensors (Fixed Weather Unit #1)
      * Roaming - No
      * “Home” Supernode - Supernode #1 (Berlin)
      * Gateway - Gateway #1
      * DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> Market Price - 5 MB (~250,000 Packets) for 200 DHX (200 MXC, 1 USD) with max. 10 messages per hour per Sensor, which expires after 1 month.
      * Note: Bob knows in this case he’s only selling a fraction of his bandwidth, and if he obtains one customer per month he’s covering his whole monthly “data” costs, and if he had more than one customer he’ll start paying off his Sensors, and eventually just make profit to reinvest into purchasing more devices. He could also sell access only to individual Sensors.
    * Location - Spandau Lake (South), Berlin
      * 5x Sensors (Fixed Weather Unit #2)
      * Roaming: No
      * “Home” Supernode - Supernode #1 (Berlin)
      * Gateway - Gateway #1
      * DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> Market Price - Same as at Fixed Weather Unit #1
    * Location - Krakow, Poland
      * 6x Sensors (Mobile Weather Unit #3)
      * Roaming - Yes
      * “Home” Supernode - Supernode #2 (Poland)
      * Gateway - any available
      * DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> Market Price - Same as at Fixed Weather Unit #1
    * Supernode #1
      * 500 MXC Staked (for his Gateway)
      * 125 MXC Staked (from 10x Sensors)
    * Supernode #2
      * 75 MXC Staked (from 6x Sensors)

* Alice’s Setup
  * Alice has heard about the IoT “gig” economy where anyone can sell device data, and she’s heard about MXC’s DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a>
  * Alice wants to update the Krakow Sailing Club’s website with a map of holiday destinations at popular lakes in Poland and Germany.
  * Alice goes to DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a>, and searches for “Watersport” applications in the Data Market. It lists Bob’s different fixed and mobile Weather Units. She’s wants to buy access to the “data” bundle from Bob’s Mobile Weather Unit #3, since it has roaming enabled, and there’s evidence that it has sufficient uptime
  * Alice finds out that she could earn DHX by staking some of her IOTA over a bridge, but she doesn’t have time and she doesn’t want to miss out on Bob’s cheap offer.
  * Alice also finds out that she could run DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> Parachain Validator node to earn DHX, but she doesn’t have time for that yet either.
  * Alice finds out she could earn DHX by buying more DHX than she needs and staking it against an existing DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> Parachain Validator by Nominating them.
  * Alice decides to use the DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> In-built DEX to exchange all her BTC for DHX.
  * Alice purchases Bob’s Mobile Weather Unit #3 and and stakes the remaining DHX on a DataHighway.com <a href="#reference-8f85ec" class="pretty-link-colored">[8f85ec]</a> Parachain Validator, so 200 DHX are converted to 200 VMXC internally and transferred to Bob’s “Home” Supernode #2 (Poland) associated with Bob’s organisation, since the Supernode will handle calculating the transaction costs and earnings over the month, and any roaming that’s involved and then make monthly payments
  * Alice is granted access to the data provider’s API Keys so her Application may perform queries

<div class="page-break"></div>

## References

Note: Generate a new reference with `openssl rand -hex 2`

* Blockchain
  * [588d36] <a id="reference-588d36"></a><a href="https://royalsocietypublishing.org/doi/full/10.1098/rsos.180298" target="_blank" class="pretty-link-colored">Towards open data blockchain analytics: a Bitcoin perspective</a>
  * [f53865] <a id="reference-f53865"></a><a href="https://arxiv.org/abs/1805.02707" target="_blank" class="pretty-link-colored">A Survey on Consensus Mechanisms and Mining Strategy Management in Blockchain Networks</a>
  * [57117e] <a id="reference-57117e"></a><a href="https://hackernoon.com/will-bitcoins-price-rise-following-the-halving-in-2020-4885f9dcffb0" target="_blank" class="pretty-link-colored">Will Bitcoins price rise following the Halving in 2020</a>
  * [fe834b] <a id="reference-fe834b"></a><a href="https://en.bitcoin.it/wiki/Controlled_supply" target="_blank" class="pretty-link-colored">Bitcoin Controlled Supply</a>
  * [c98d3f] <a id="reference-c98d3f"></a><a href="https://blog.ethereum.org/2016/07/27/inflation-transaction-fees-cryptocurrency-monetary-policy/" target="_blank" class="pretty-link-colored">Ethereum Inflation Transaction Fees Cryptocurrency Monetary Policy</a>
  * [c8b270] <a id="reference-c8b270"></a><a href="https://en.bitcoin.it/wiki/Proof_of_Stake" target="_blank" class="pretty-link-colored">Proof of Stake</a>
  * [180b38] <a id="reference-180b38"></a><a href="https://medium.facilelogin.com/" target="_blank" class="pretty-link-colored">Mystery Behind Blocktime</a>
  * [305bf5] <a id="reference-305bf5"></a><a href="https://www.bitcoinblockhalf.com/" target="_blank" class="pretty-link-colored">Bitcoin Block Halving</a>
* DataHighway
  * [8f85ec] <a id="reference-8f85ec"></a><a href="https://datahighway.com" target="_blank" class="pretty-link-colored">DataHighway.com</a>
* DataHighway Runtime Modules (Palettes) [2961f6] <a id="reference-2961f6"></a>

  * <a href="https://github.com/DataHighway-com/node/tree/master/packages/roaming" target="_blank" class="pretty-link-colored">Roaming</a>
* DAO
  * [33d593] <a id="reference-33d593"></a><a href="https://web3.garden/" target="_blank" class="pretty-link-colored">Web3.Garden</a>
  * [effe0d] <a id="reference-effe0d"></a><a href="https://github.com/web3garden/sunshine" target="_blank" class="pretty-link-colored">Web3.Garden SunshineDAO</a>
  * [aa9e13] <a id="reference-aa9e13"></a><a href="https://github.com/web3garden/sunshine-runtime-module-library" target="_blank" class="pretty-link-colored">Web3.Garden ProtoShine</a>
* Finance
  * [3bbaf1] <a id="reference-3bbaf1"></a><a href="https://www.investopedia.com/terms/q/quantitative-easing.asp" target="_blank" class="pretty-link-colored">Quantitative Easing</a>
  * [89198f] <a id="reference-89198f"></a><a href="https://www.investopedia.com/ask/answers/100314/whats-difference-between-monetary-policy-and-fiscal-policy.asp" target="_blank" class="pretty-link-colored">Difference between Monetary Policy and Fiscal Policy</a>
* Hardware
  * [a0320e] <a id="reference-a0320e"></a><a href="https://matchx.io" target="_blank" class="pretty-link-colored">Matchx.io</a>
* LoRaWAN
  * [d7d9a7] <a id="reference-d7d9a7"></a><a href="https://lora-alliance.org/sites/default/files/2018-04/lorawantm-backend-interfaces-v1.0.pdf" target="_blank" class="pretty-link-colored">LoRaWAN Backend Interface Specification</a>
  * [6091f0] <a id="reference-6091f0"></a><a href="https://www.alliot.uk/lorixone-lorawan-gateway-what-does-it-do/" target="_blank" class="pretty-link-colored">LoRaWAN Gateways What Does it Do</a>
  * [7c412d] <a id="reference-7c412d"></a><a href="https://arxiv.org/pdf/1607.08011.pdf" target="_blank" class="pretty-link-colored">Understanding the Limits of LoRaWAN</a>
  * [eaff82] <a id="reference-eaff82"></a><a href="https://www.rs-online.com/designspark/lorawan-enable-a-sensor" target="_blank" class="pretty-link-colored">LoRaWAN Enable Sensor</a>
  * [c57f47] <a id="reference-c57f47"></a><a href="https://www.sciencedirect.com/science/article/pii/S2405959517302953" target="_blank" class="pretty-link-colored">Comparative Study of LPWAN Technologies</a>
  * [9d4c5f] <a id="reference-9d4c5f"></a><a href="https://www.thethingsnetwork.org/forum/t/limitations-data-rate-packet-size-30-seconds-uplink-and-10-messages-downlink-per-day-fair-access-policy/1300" target="_blank" class="pretty-link-colored">LoRaWAN Fair Access Policy Limitations</a>
  * [90b149] <a id="reference-90b149"></a><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5038744/" target="_blank" class="pretty-link-colored">A Study of LoRa: Long Range & Low Power Networks for the Internet of Things</a>
  * [a90861] <a id="reference-a90861"></a><a href="https://www.loraserver.io/lora-app-server/overview/" target="_blank" class="pretty-link-colored">LoRa App Server Architecture</a>
* Mining
  * [b31f7c] <a id="reference-b31f7c"></a><a href="https://chainx.org/chainx_en.pdf" target="_blank" class="pretty-link-colored">ChainX Whitepaper</a>
* Miscellaneous
  * [1d41a4] <a id="reference-1d41a4"></a><a href="http://mockbin.org" target="_blank" class="pretty-link-colored">Mockbin</a>
  * [92e7f1] <a id="reference-92e7f1"></a><a href="https://requestloggerbin.herokuapp.com" target="_blank" class="pretty-link-colored">Request Logger Bin</a>
* Monitoring
  * [f05938] <a id="reference-f05938"></a><a href="https://www.loomsystems.com/blog/single-post/2017/06/07/prometheus-vs-grafana-vs-graphite-a-feature-comparison" target="_blank" class="pretty-link-colored">Prometheus vs Grafana vs Graphite</a>
  * [5fa3e9] <a id="reference-5fa3e9"></a><a href="https://grafana.com" target="_blank" class="pretty-link-colored">Grafana</a>
  * [7a1075] <a id="reference-7a1075"></a><a href="https://www.alibabacloud.com/product/iot" target="_blank" class="pretty-link-colored">Alibaba Cloud</a>
* MXC
  * [dd4565] <a id="reference-dd4565"></a><a href="https://www.mxc.org/hubfs/WP/MXC_technical_whitepaper.pdf" target="_blank" class="pretty-link-colored">MXC Technical Paper, Page 22</a>
  * [7c63ac] <a id="reference-7c63ac"></a><a href="https://www.mxc.org/hubfs/WP/MXC_data_economy_whitepaper.pdf" target="_blank" class="pretty-link-colored">MXC's Data Economy Whitepaper</a>
  * [c63390] <a id="reference-c63390"></a><a href="https://www.mxc.org/hubfs/downloads/mxc_smb_whitepaper.pdf" target="_blank" class="pretty-link-colored">MXC SMB Whitepaper</a>
* Notaries [702f3f] <a id="reference-702f3f"></a>

  * <a href="https://medium.com/@kctheservant/notarization-in-blockchain-part-1-a9795f19e28d" target="_blank" class="pretty-link-colored">Notarization in Blockchain</a>
* Oracles [459cee] <a id="reference-459cee"></a>

  * <a href="https://blockchainhub.net/blockchain-oracles/" target="_blank" class="pretty-link-colored">Blockchain Oracles</a>
  * <a href="https://docs.chain.link/docs/contract-creators-overview" target="_blank" class="pretty-link-colored">ChainLink Contact Creators Overview</a>
  * <a href="https://github.com/JohannEid/awesome-chainlink" target="_blank" class="pretty-link-colored">Awesome ChainLink</a>
  * <a href="https://lankydan.dev/2019/01/01/validating-external-data-with-an-oracle" target="_blank" class="pretty-link-colored">Validating External Data with an Oracle</a>
  * <a href="https://medium.com/@SharesChainITO/what-is-an-oracle-and-how-can-it-be-used-on-and-off-the-blockchain-fb585d53fa2b" target="_blank" class="pretty-link-colored">What is an Oracle and how can it be used On and Off the Blockchain</a>
* Polkadot / Substrate / W3F
  * [b26ba7] <a id="reference-b26ba7"></a><a href="https://substrate.dev/docs/en/overview/glossary#aura-aka-authority-round" target="_blank" class="pretty-link-colored">Aura</a>
  * [7fd55a] <a id="reference-7fd55a"></a><a href="https://substrate.dev/docs/en/overview/glossary#nominated-proof-of-stake-npos" target="_blank" class="pretty-link-colored">NPoS</a>
  * [d71631] <a id="reference-d71631"></a><a href="https://substrate.dev/substrate-verifiable-credentials" target="_blank" class="pretty-link-colored">Substrate Verifiable Credentials</a>
  * [128e60] <a id="reference-128e60"></a><a href="https://github.com/w3f/offences-monitor" target="_blank" class="pretty-link-colored">Monitor Slashable Offences</a>
  * [34e740] <a id="reference-34e740"></a><a href="https://polkadot.js.org/apps" target="_blank" class="pretty-link-colored">Polkadot.js Apps</a>
  * [836a2f] <a id="reference-836a2f"></a><a href="https://twitter.com/get_speckle" target="_blank" class="pretty-link-colored">Speckle</a>
  * [81db2d] <a id="reference-81db2d"></a><a href="https://github.com/paritytech/substrate-light-ui" target="_blank" class="pretty-link-colored">Substrate Light Client UI</a>
  * [0ec873] <a id="reference-0ec873"></a><a href="https://substrate.dev/rustdocs/v1.0/srml_sudo/index.html#executing-privileged-functions" target="_blank" class="pretty-link-colored">Substrate Executing Privileged Functions</a>
  * [fa094e] <a id="reference-fa094e"></a><a href="https://research.web3.foundation/en/latest/polkadot/Token%20Economics/#payment-details" target="_blank" class="pretty-link-colored">Polkadot Token Economics Payment Details</a>
  * [903282] <a id="reference-903282"></a><a href="https://wiki.parity.io/Proof-of-Authority-Chains#chain-engine-specification" target="_blank" class="pretty-link-colored">Parity Proof of Authority (PoA) Chains</a>
  * [37cb7c] <a id="reference-37cb7c"></a><a href="https://github.com/paritytech/substrate/issues/1354" target="_blank" class="pretty-link-colored">Polkadot Transaction Limitations per Block</a>
  * [3b726b] <a id="reference-3b726b"></a><a href="https://medium.com/polkadot-network/polkadot-parachain-slots-f3f051d41699" target="_blank" class="pretty-link-colored">Polkadot Parachain Slot</a>
  * [4330ba] <a id="reference-4330ba"></a><a href="https://wiki.polkadot.network/en/latest/polkadot/build/cumulus/" target="_blank" class="pretty-link-colored">Cumulus Framework</a>
  * [038640] <a id="reference-038640"></a><a href="https://github.com/paritytech/polkadot/blob/a169ae5a449814e2c34223c1b504c3f947c74b67/runtime/common/src/crowdfund.rs#L16" target="_blank" class="pretty-link-colored">Polkadot Crowdfunding for Parachain Slots</a>
  * [49f7f0] <a id="reference-49f7f0"></a><a href="https://github.com/paritytech/substrate/blob/master/srml/balances/src/lib.rs" target="_blank" class="pretty-link-colored">Substrate Balances Runtime Module</a>
  * [411c31] <a id="reference-411c31"></a><a href="https://research.web3.foundation/en/latest/polkadot/Token%20Economics/#npos-payments-and-inflation" target="_blank" class="pretty-link-colored">Polkadot Token Economics NPoS Payments and Inflation</a>
  * [b05a57] <a id="reference-b05a57"></a><a href="https://research.web3.foundation/en/latest/polkadot/Token%20Economics/#relay-chain-transaction-fees" target="_blank" class="pretty-link-colored">Polkadot Token Economics Relay Chain Transaction Fees</a>
  * [46767b] <a id="reference-46767b"></a><a href="http://research.web3.foundation/en/latest/polkadot/Token%20Economics/#inflation-model" target="_blank" class="pretty-link-colored">Polkadot Token Economics Inflation Model</a>
  * [d38e97] <a id="reference-d38e97"></a><a href="https://telemetry.polkadot.io" target="_blank" class="pretty-link-colored">Polkadot Telemetry Service</a>
  * [57f381] <a id="reference-57f381"></a><a href="https://polkascan.io" target="_blank" class="pretty-link-colored">Polkascan</a>
  * [2c6aa0] <a id="reference-2c6aa0"></a><a href="https://medium.com/on-the-origin-of-smart-contract-platforms/on-the-origin-of-polkadot-c7750e2fc5ff" target="_blank" class="pretty-link-colored">Smart Contract Platforms Blogpost</a>
  * [c18c08] <a id="reference-c18c08"></a><a href="https://medium.com/on-the-origin-of-smart-contract-platforms/on-the-origin-of-polkadot-c7750e2fc5ff" target="_blank" class="pretty-link-colored">On the Origin of Polkadot</a>
* Roaming
  * [4948eb] <a id="reference-4948eb"></a><a href="http___www.aphref.aph.gov.au_house_committee_coms_mobileroaming_report_chapter2.pdf" target="_blank" class="pretty-link-colored">Roaming Report, Page 12</a>
  * [6fe50e] <a id="reference-6fe50e"></a><a href="https://drive.google.com/file/d/17vyq7nVhb_fQ0a4opLI4TEKDK5laUqqq/view?usp=sharing" target="_blank" class="pretty-link-colored">MXC Roaming Presentation by Aslan on 6th August 2019 including Activation Passive Roaming</a>


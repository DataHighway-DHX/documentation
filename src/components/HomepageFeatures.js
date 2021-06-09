import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from "@docusaurus/core/lib/client/exports/Translate";

const FeatureList = [
  {
      title: <Translate>DataHighway Mining</Translate>,
    Svg: require('../../static/img/undraw_investment_xv9d.svg').default,
    description: (
      <>
          <Translate>Token mining is a form of participation that adds value to the entire blockchain ecosystem. Locking DataHighway authorized IoT tokens or other value added tokens is a form of participating, and is referred to as token mining.</Translate>
      </>
    ),
  },
  {
      title: <Translate>DataHighway Roaming</Translate>,
    Svg: require('../../static/img/undraw_connected_world_wuay.svg').default,
    description: (
      <>
          <Translate>DataHighway's IoT parachain is to provide a decentralized LPWAN roaming hub, including decentralized DNS for LoRaWAN roaming, which allows any LoRaWAN network operator to store and retrieve roaming agreements on the DataHighway blockchain's secure distributed database.</Translate>
      </>
    ),
  },
    {
        title: <Translate>DataHighway DAO</Translate>,
        Svg: require('../../static/img/undraw_conference_call_b0w6.svg').default,
        description: (
            <>
                <Translate>DataHighway is a decentralized autonomous organization (DAO), meaning that your participation determines the future of the DataHighway.</Translate>
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

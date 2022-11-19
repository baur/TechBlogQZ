import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const dict = [{ar: 'ar1',qz: 'qz1'},{ar: 'ar2',qz: 'qz2'},{ar: 'ar3',qz: 'qz3'}];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomWord() {
  return dict[getRandomInt(3)].ar;
}



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
		
		<p>{getRandomWord()}</p>
		
		<div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/markdown-page">
            Page - 5min ⏱️
          </Link>
        </div>
		

		
		
		
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [wordNum, setWordNum] = useState(0);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
	  <button onClick={()=>setWordNum(getRandomInt(3))}>clic</button>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

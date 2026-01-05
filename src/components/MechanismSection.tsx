import React from 'react';
import styles from './MechanismSection.module.css';

interface Props {
  bookingUrl?: string;
}

export default function MechanismSection({ bookingUrl = '#book' }: Props) {
  const pillars = [
    {
      number: '01',
      title: 'Strategy Setup',
      subtitle: 'The Foundation',
      description: 'Deep-dive diagnosis of your market, ICP, and positioning. We architect your offer, messaging, and funnel structure before touching a single tool.',
      points: [
        'ICP & market analysis',
        'Offer architecture',
        'Messaging frameworks',
        'Funnel blueprints'
      ]
    },
    {
      number: '02',
      title: 'Authority Gen',
      subtitle: 'The Trust Layer',
      description: 'We tune your digital footprint so you show up as the established, credible player you actually are. LinkedIn, Google, and everywhere that matters.',
      points: [
        'LinkedIn profile & company optimization',
        'Google Business & reviews strategy',
        'Website authority signals',
        'Content positioning'
      ]
    },
    {
      number: '03',
      title: 'Outbound Engine',
      subtitle: 'The Pipeline',
      description: 'Domain warmup, waterfall enrichment, multi-channel sequences. We build the machine that consistently puts qualified opportunities on your calendar.',
      points: [
        'Domain infrastructure & warmup',
        'Lead enrichment pipelines',
        'Multi-channel outreach',
        'Paid amplification'
      ]
    },
    {
      number: '04',
      title: 'Stack & Automations',
      subtitle: 'The Operating System',
      description: 'Tools, analytics, and automations that make the system run with minimal manual effort. n8n workflows, custom apps, and tight integrations.',
      points: [
        'CRM & pipeline automation',
        'n8n workflow builds',
        'Custom dashboards',
        'Tool integrations'
      ]
    }
  ];

  return (
    <section className={styles.mechanism}>
      <div className={styles.gradientBg} aria-hidden="true" />
      
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">The Strategy & Stack System</span>
          <h2 className={styles.headline}>
            Not services. <span className={styles.accent}>A system.</span>
          </h2>
          <p className={styles.subheadline}>
            We don't run random campaigns or install tools and disappear. We deploy a 
            complete acquisition and authority system—tested frameworks, proven blueprints, 
            and the best technology in the world, tuned specifically for your business.
          </p>
        </div>
        
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.pillar}>
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>{pillar.number}</span>
                <span className={styles.pillarSubtitle}>{pillar.subtitle}</span>
              </div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
              <ul className={styles.pillarPoints}>
                {pillar.points.map((point, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={styles.differentiator}>
          <div className={styles.diffContent}>
            <h3>Why systems beat services</h3>
            <p>
              Agencies run campaigns. We install infrastructure. The difference? 
              When campaigns end, results stop. When a system is built, it compounds.
              Our blueprints have been refined across 50+ engagements—you get the 
              methodology and the meticulous implementation that makes it work.
            </p>
          </div>
          <div className={styles.diffCta}>
            <a href={bookingUrl} className="btn btn-primary">
              See How It Works For You
              <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



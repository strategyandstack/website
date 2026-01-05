import React from 'react';
import styles from './ProcessSection.module.css';

interface Props {
  bookingUrl?: string;
}

export default function ProcessSection({ bookingUrl = '#book' }: Props) {
  const steps = [
    {
      number: '01',
      title: 'Diagnose & Direction',
      description: 'We start with a strategy call. We review your current funnel, channels, and stack. We define targets, constraints, and the fastest path to predictable acquisition.',
      outcome: 'Clear roadmap and scope for your engagement',
      duration: 'Week 1'
    },
    {
      number: '02',
      title: 'Build the Stack & System',
      description: 'We install and configure your outbound and authority system. Domains, warmup, enrichment, sequences, CRM, tracking, landing pages—everything gets wired up properly.',
      outcome: 'Complete infrastructure ready to deploy',
      duration: 'Weeks 2–4'
    },
    {
      number: '03',
      title: 'Launch, Measure, Refine',
      description: 'Campaigns go live. We gather data, tune targeting, test messaging, and optimize offers. This is where the system starts generating real opportunities.',
      outcome: 'First qualified opportunities and data-driven insights',
      duration: 'Weeks 4–8'
    },
    {
      number: '04',
      title: 'Stabilize & Scale',
      description: 'Once the system is performing, you have options: take over with our playbooks, move to a maintenance retainer, or scale up with additional channels and automation.',
      outcome: 'Predictable, repeatable acquisition engine',
      duration: 'Week 8+'
    }
  ];

  return (
    <section className={styles.process}>
      <div className={styles.bgAccent} aria-hidden="true" />
      
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">The Process</span>
          <h2 className={styles.headline}>
            How we <span className={styles.accent}>work together</span>
          </h2>
          <p className={styles.subheadline}>
            From first call to live system in 60–90 days. Here's what to expect.
          </p>
        </div>
        
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepConnector}>
                <span className={styles.stepNumber}>{step.number}</span>
                {index < steps.length - 1 && <div className={styles.stepLine} />}
              </div>
              
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <span className={styles.stepDuration}>{step.duration}</span>
                </div>
                <p className={styles.stepDescription}>{step.description}</p>
                <div className={styles.stepOutcome}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>{step.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <a href={bookingUrl} className="btn btn-primary">
            Start With a Strategy Call
            <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 18, height: 18 }}>
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}



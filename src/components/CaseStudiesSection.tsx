import React from 'react';
import styles from './CaseStudiesSection.module.css';

interface Props {
  bookingUrl?: string;
}

export default function CaseStudiesSection({ bookingUrl = '#book' }: Props) {
  const caseStudies = [
    {
      vertical: 'Staffing & Recruiting',
      verticalIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      scenario: 'Remote staffing agency relying on inbound referrals and LinkedIn posts. Inconsistent pipeline, no predictable acquisition system.',
      implemented: 'Complete Strategy & Stack setup: ICP refinement, LinkedIn authority positioning for founder and company, multi-channel outbound system, and automated pipeline tracking.',
      metrics: [
        { value: '71+', label: 'Placements in 6 months' },
        { value: '3x', label: 'Pipeline increase' },
        { value: '< 90 days', label: 'Time to stable system' }
      ],
      transformation: 'From referral-dependent to a predictable placement machine. Calendar consistently booked weeks in advance.'
    },
    {
      vertical: 'Premium Services / Local B2C',
      verticalIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      scenario: 'High-end local service business with strong word-of-mouth but weak digital presence. No reviews strategy, minimal authority signals online.',
      implemented: 'Authority Gen package: Google Business optimization, reviews acceleration system, local SEO foundations, and conversion-focused landing page.',
      metrics: [
        { value: '900+', label: '5-star reviews generated' },
        { value: '#1', label: 'Local category ranking' },
        { value: '40%', label: 'Increase in qualified leads' }
      ],
      transformation: 'From "best kept secret" to the obvious choice in their market. Digital presence now matches their actual reputation.'
    },
    {
      vertical: 'B2B Services / Consulting',
      verticalIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      scenario: 'Growing consulting firm with strong expertise but founder-dependent sales. No systematic outbound, relying on conference networking and past clients.',
      implemented: 'Full system deployment: positioning and messaging overhaul, LinkedIn thought leadership strategy, cold outreach infrastructure, and CRM automation.',
      metrics: [
        { value: '$850K+', label: 'Pipeline generated in 5 months' },
        { value: '12', label: 'New enterprise clients' },
        { value: '2.5x', label: 'Deal velocity improvement' }
      ],
      transformation: 'From founder-as-rainmaker to a scalable acquisition engine. Now expanding team with predictable demand.'
    }
  ];

  return (
    <section className={styles.caseStudies}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Proof</span>
          <h2 className={styles.headline}>
            Representative <span className={styles.accent}>client outcomes</span>
          </h2>
          <p className={styles.subheadline}>
            These results came from combining strategy, authority, stack, and execution. 
            Every engagement is unique, but the methodology is proven.
          </p>
        </div>
        
        <div className={styles.grid}>
          {caseStudies.map((study, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.verticalBadge}>
                  {study.verticalIcon}
                  <span>{study.vertical}</span>
                </div>
              </div>
              
              <div className={styles.section}>
                <h4 className={styles.sectionLabel}>The Situation</h4>
                <p>{study.scenario}</p>
              </div>
              
              <div className={styles.section}>
                <h4 className={styles.sectionLabel}>What We Built</h4>
                <p>{study.implemented}</p>
              </div>
              
              <div className={styles.metricsGrid}>
                {study.metrics.map((metric, i) => (
                  <div key={i} className={styles.metric}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.transformation}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
                <p>{study.transformation}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <p>See what this system could do for your business</p>
          <a href={bookingUrl} className="btn btn-primary">
            Book Your Strategy Call
            <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 18, height: 18 }}>
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}



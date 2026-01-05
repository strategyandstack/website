import React from 'react';
import styles from './OffersSection.module.css';

interface Props {
  bookingUrl?: string;
}

export default function OffersSection({ bookingUrl = '#book' }: Props) {
  const offers = [
    {
      featured: true,
      badge: 'Most Popular',
      title: 'Strategy & Stack Setup',
      tagline: 'The complete diagnostic + implementation package',
      bestFor: 'Businesses ready to move from word-of-mouth to a systematized acquisition engine in 60–90 days.',
      includes: [
        'Deep-dive on ICP, positioning, and messaging architecture',
        'Offer design and irresistible core proposition',
        'Authority Gen setup: LinkedIn (founder + company), Google Business',
        'Conversion-focused landing page blueprint or build',
        'CRM and tracking setup: pipeline stages, dashboards, lead scoring',
        'Initial outbound stack: domains, warmup, tracking, first campaign wave',
        'Email nurturing framework and sequences',
        'Playbooks and scripts for your internal team'
      ],
      ctaLabel: 'Book Setup Call'
    },
    {
      title: 'Campaign Management & Maintenance',
      tagline: 'Keep your system tuned and scaling',
      bestFor: 'Clients who want Strategy & Stack to continuously optimize the system after setup.',
      includes: [
        'Ongoing campaign optimization (outbound + paid)',
        'Lead and pipeline management routines',
        'Weekly or bi-weekly report cadence',
        'Data-driven experiments on messaging, offers, audiences',
        'Slack/async access to the Strategy & Stack team',
        'Monthly strategy reviews with Eddie'
      ],
      ctaLabel: 'Book Strategy Call'
    },
    {
      title: 'Authority Gen & Funnel Build',
      tagline: 'Trust-building assets that convert',
      bestFor: 'Businesses that need to level up their digital presence and conversion infrastructure.',
      includes: [
        'Full website or landing page design and build',
        'LinkedIn profile and company page optimization',
        'Google Business and reviews strategy',
        'Copywriting for buyer-trust-building funnels',
        'Visual direction and brand authority signals',
        'SEO foundations and technical setup'
      ],
      ctaLabel: 'Book Strategy Call'
    },
    {
      title: 'Custom Build & Automations',
      tagline: 'Your bespoke growth operating system',
      bestFor: 'Tech-forward businesses that need custom infrastructure to support scale.',
      includes: [
        'n8n automation workflows (any complexity)',
        'Custom web app builds and internal tools',
        'Mobile app development when needed',
        'API integrations and data pipelines',
        'Custom dashboards and reporting',
        'Ongoing technical support and iteration'
      ],
      ctaLabel: 'Book Strategy Call'
    }
  ];

  return (
    <section className={styles.offers}>
      <div className={styles.bgPattern} aria-hidden="true" />
      
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">How We Work Together</span>
          <h2 className={styles.headline}>
            Choose your <span className={styles.accent}>engagement</span>
          </h2>
          <p className={styles.subheadline}>
            Every engagement starts with a strategy call. We diagnose where you are, 
            define where you need to be, and build the fastest path to get there. 
            No cookie-cutter packages—just the right solution for your business.
          </p>
        </div>
        
        <div className={styles.grid}>
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${offer.featured ? styles.featured : ''}`}
            >
              {offer.badge && (
                <div className={styles.badge}>{offer.badge}</div>
              )}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{offer.title}</h3>
                <p className={styles.cardTagline}>{offer.tagline}</p>
              </div>
              
              <div className={styles.bestFor}>
                <span className={styles.bestForLabel}>Best for:</span>
                <p>{offer.bestFor}</p>
              </div>
              
              <ul className={styles.includes}>
                {offer.includes.map((item, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={bookingUrl} 
                className={`btn ${offer.featured ? 'btn-primary' : 'btn-secondary'} ${styles.cardCta}`}
              >
                {offer.ctaLabel}
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className={styles.note}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p>
            <strong>Not sure which package?</strong> That's exactly what the strategy call is for. 
            We'll diagnose your situation and recommend the right path—no pressure, no obligation.
          </p>
        </div>
      </div>
    </section>
  );
}



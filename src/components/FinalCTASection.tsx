import React from 'react';
import styles from './FinalCTASection.module.css';

interface Props {
  bookingUrl?: string;
}

export default function FinalCTASection({ bookingUrl = '#book' }: Props) {
  return (
    <section className={styles.finalCta}>
      <div className={styles.bgElements} aria-hidden="true">
        <div className={styles.gridBg} />
        <div className={styles.glowOrb} />
        <div className={styles.glowOrbSecondary} />
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Limited Capacity
        </div>
        
        <h2 className={styles.headline}>
          Ready to stop leaving growth to chance?
        </h2>
        
        <p className={styles.subheadline}>
          From word-of-mouth and scattered tools to a systematized, 
          data-backed acquisition engine. That's the transformation.
        </p>
        
        <ul className={styles.benefits}>
          <li>
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Proven methodology refined across 50+ engagements</span>
          </li>
          <li>
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Meticulous implementation—no half-installed tools</span>
          </li>
          <li>
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Boutique attention from specialists who've shipped real systems</span>
          </li>
        </ul>
        
        <a href={bookingUrl} className={`btn btn-primary ${styles.cta}`}>
          Book Your Strategy Call
          <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 18, height: 18 }}>
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
        
        <p className={styles.note}>
          Free 30-minute consultation with Eddie. No obligation.
        </p>
      </div>
    </section>
  );
}



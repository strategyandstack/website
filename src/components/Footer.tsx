import React from 'react';
import styles from './Footer.module.css';

interface Props {
  bookingUrl?: string;
}

export default function Footer({ bookingUrl = '#book' }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>S&S</span>
              <span className={styles.logoText}>Strategy & Stack</span>
            </div>
            <p className={styles.tagline}>
              Boutique growth & RevOps collective. We install proven acquisition 
              systems into already-successful businesses.
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navigate</h4>
              <a href="#system">The System</a>
              <a href="#packages">Packages</a>
              <a href="#results">Results</a>
              <a href="#process">Process</a>
              <a href="#faq">FAQ</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:hello@strategyandstack.com">Email</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Start</h4>
              <a href={bookingUrl} className={styles.ctaLink}>Book a Strategy Call</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Strategy & Stack. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



import React from 'react';
import styles from './HeroSection.module.css';

interface Props {
  bookingUrl?: string;
}

export default function HeroSection({ bookingUrl = '#book' }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.gradientOverlay} aria-hidden="true" />
      
      {/* Animated System Visualization */}
      <div className={styles.visualContainer} aria-hidden="true">
        <div className={styles.systemVisual}>
          {/* Central core */}
          <div className={styles.core}>
            <div className={styles.coreInner} />
            <div className={styles.corePulse} />
            <div className={styles.corePulse2} />
          </div>
          
          {/* Orbiting rings */}
          <div className={styles.orbit1}>
            <div className={styles.orbitRing} />
            <div className={styles.node} style={{ '--delay': '0s' } as React.CSSProperties} />
            <div className={styles.node} style={{ '--delay': '2s' } as React.CSSProperties} />
          </div>
          
          <div className={styles.orbit2}>
            <div className={styles.orbitRing} />
            <div className={styles.node} style={{ '--delay': '1s' } as React.CSSProperties} />
            <div className={styles.node} style={{ '--delay': '3s' } as React.CSSProperties} />
            <div className={styles.node} style={{ '--delay': '5s' } as React.CSSProperties} />
          </div>
          
          <div className={styles.orbit3}>
            <div className={styles.orbitRing} />
            <div className={styles.nodeLarge} style={{ '--delay': '0.5s' } as React.CSSProperties} />
            <div className={styles.nodeLarge} style={{ '--delay': '2.5s' } as React.CSSProperties} />
          </div>
          
          {/* Floating particles */}
          <div className={styles.particles}>
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className={styles.particle}
                style={{ 
                  '--angle': `${i * 30}deg`,
                  '--delay': `${i * 0.3}s`,
                  '--distance': `${140 + (i % 3) * 40}px`
                } as React.CSSProperties}
              />
            ))}
          </div>
          
          {/* Connection lines */}
          <svg className={styles.connections} viewBox="0 0 400 400">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(212, 168, 83, 0.4)" />
                <stop offset="50%" stopColor="rgba(212, 168, 83, 0.1)" />
                <stop offset="100%" stopColor="rgba(212, 168, 83, 0.4)" />
              </linearGradient>
            </defs>
            <line className={styles.connectionLine} x1="200" y1="200" x2="200" y2="60" stroke="url(#lineGradient)" />
            <line className={styles.connectionLine} x1="200" y1="200" x2="340" y2="200" stroke="url(#lineGradient)" />
            <line className={styles.connectionLine} x1="200" y1="200" x2="200" y2="340" stroke="url(#lineGradient)" />
            <line className={styles.connectionLine} x1="200" y1="200" x2="60" y2="200" stroke="url(#lineGradient)" />
            <line className={styles.connectionLine} x1="200" y1="200" x2="300" y2="100" stroke="url(#lineGradient)" />
            <line className={styles.connectionLine} x1="200" y1="200" x2="100" y2="300" stroke="url(#lineGradient)" />
          </svg>
        </div>
        
        {/* Labels floating around */}
        <div className={styles.floatingLabels}>
          <span className={styles.label} style={{ '--x': '-120px', '--y': '-80px', '--delay': '0.5s' } as React.CSSProperties}>Strategy</span>
          <span className={styles.label} style={{ '--x': '100px', '--y': '-60px', '--delay': '1s' } as React.CSSProperties}>Authority</span>
          <span className={styles.label} style={{ '--x': '120px', '--y': '70px', '--delay': '1.5s' } as React.CSSProperties}>Outbound</span>
          <span className={styles.label} style={{ '--x': '-100px', '--y': '80px', '--delay': '2s' } as React.CSSProperties}>Stack</span>
        </div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Boutique Growth & RevOps Collective
        </div>
        
        <h1 className={styles.headline}>
          From word-of-mouth to a{' '}
          <span className={styles.accent}>predictable acquisition machine</span>
        </h1>
        
        <p className={styles.subheadline}>
          We install a proven outbound and authority system into already-successful businesses. 
          Strategy, stack, and execution—built by specialists who have shipped growth systems 
          for 50+ brands.
        </p>
        
        <div className={styles.trustBullets}>
          <div className={styles.bullet}>
            <svg className={styles.bulletIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>For businesses with $1K+ average ticket</span>
          </div>
          <div className={styles.bullet}>
            <svg className={styles.bulletIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Already generating consistent sales</span>
          </div>
          <div className={styles.bullet}>
            <svg className={styles.bulletIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Ready to scale beyond referrals</span>
          </div>
        </div>
        
        <div className={styles.ctaWrapper}>
          <a href={bookingUrl} className={`btn btn-primary ${styles.cta}`}>
            Book Your Strategy Call
            <svg className={styles.ctaArrow} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <span className={styles.ctaNote}>Free 30-min consultation with Eddie</span>
        </div>
        
        <div className={styles.metricsStrip}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>50+</span>
            <span className={styles.metricLabel}>Systems Shipped</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricValue}>$2.4M+</span>
            <span className={styles.metricLabel}>Pipeline Generated</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricValue}>90 Days</span>
            <span className={styles.metricLabel}>To Stable System</span>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

interface Props {
  bookingUrl?: string;
}

export default function Header({ bookingUrl = '#book' }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoMark}>S&S</span>
          <span className={styles.logoText}>Strategy & Stack</span>
        </a>
        
        <nav className={styles.nav}>
          <a href="#system" className={styles.navLink}>System</a>
          <a href="#packages" className={styles.navLink}>Packages</a>
          <a href="#results" className={styles.navLink}>Results</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
        </nav>
        
        <a href={bookingUrl} className={`btn btn-primary ${styles.cta}`}>
          Book a Call
        </a>
      </div>
    </header>
  );
}



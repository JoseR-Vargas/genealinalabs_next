'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import genealinaLogo from '@/app/img/Genealina_logo.jpeg';

const NAV_LINKS = [
  { id: 'home', label: 'Inicio' },
  { id: 'services', label: 'Servicios' },
  { id: 'pricing', label: 'Precios' },
  { id: 'contact', label: 'Contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src={genealinaLogo}
            alt="GenealinaLabs"
            className={styles.logoImage}
            width={28}
            height={28}
            priority
          />
          <span className={styles.logoText}>GenealinaLabs</span>
        </div>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={styles.navLink}
            >
              {link.label}
            </button>
          ))}

        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>
      </div>
    </header>
  );
}

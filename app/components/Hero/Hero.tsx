'use client';

import styles from './Hero.module.css';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="home">
      {/* Animated Background */}
      <div className={styles.heroBg}>
        <div className={`${styles.bgOrb} ${styles.bgOrb1}`}></div>
        <div className={`${styles.bgOrb} ${styles.bgOrb2}`}></div>
        <div className={`${styles.bgOrb} ${styles.bgOrb3}`}></div>
        <div className={styles.grid}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Disponible para nuevos proyectos</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>Transformamos ideas en</span>
            <span className={styles.titleGradient}>Soluciones Digitales</span>
          </h1>

          <p className={styles.description}>
            Creamos aplicaciones web modernas, escalables y optimizadas que impulsan 
            el crecimiento de tu negocio. Tecnología de vanguardia al servicio de tus objetivos.
          </p>

          <div className={styles.buttons}>
            <button 
              onClick={() => scrollToSection('contact')}
              className={styles.primaryBtn}
            >
              Comenzar Proyecto
              <span className={styles.btnIcon}>→</span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={styles.secondaryBtn}
            >
              Ver Servicios
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Proyectos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Satisfacción</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Soporte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

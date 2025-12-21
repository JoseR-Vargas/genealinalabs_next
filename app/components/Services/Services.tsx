import styles from './Services.module.css';

const SERVICES = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, responsivos y optimizados para todos los dispositivos.',
    features: ['Landing Pages', 'E-commerce', 'Portfolios'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Aplicaciones Web',
    description: 'Aplicaciones escalables y robustas con las tecnologías más modernas.',
    features: ['React / Next.js', 'Node.js', 'APIs REST'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  },

  {
    id: 3,
    title: 'Mantenimiento',
    description: 'Soporte continuo para mantener tu sitio actualizado y seguro.',
    features: ['Updates', 'Seguridad', 'Soporte 24/7'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Nuestros Servicios</span>
          <h2 className={styles.title}>
            Soluciones digitales
            <span className={styles.titleGradient}> para tu negocio</span>
          </h2>
          <p className={styles.subtitle}>
            Ofrecemos soluciones completas de desarrollo web para hacer crecer tu negocio
          </p>
        </header>

        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <article 
              key={service.id} 
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

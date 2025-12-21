'use client';

import styles from './Pricing.module.css';

const PLANS = [
  {
    id: 1,
    tag: 'Pagos mensuales',
    title: 'Plan Flexible',
    description: 'Divide el costo de tu proyecto en cómodas cuotas mensuales sin intereses.',
    features: [
      'Sin intereses',
      'Hasta 12 cuotas',
      'Inicio inmediato',
      'Soporte incluido',
    ],
    popular: false,
  },
  {
    id: 2,
    tag: 'Alquiler',
    title: 'Plataformas en Renta',
    description: 'Alquila tu plataforma web por una cuota mensual que incluye hosting y mantenimiento.',
    features: [
      'Hosting incluido',
      'Mantenimiento 24/7',
      'Actualizaciones gratis',
      'Sin compromiso largo',
    ],
    popular: true,
  },
  {
    id: 3,
    tag: 'Compra',
    title: 'Aplicaciones a Medida',
    description: 'Adquiere tu aplicación web personalizada.',
    features: [
      'Diseño exclusivo',
      'Documentación completa',
      'Garantía de 6 meses',
    ],
    popular: false,
  }
];

export default function Pricing() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Planes</span>
          <h2 className={styles.title}>
            Elige la opción
            <span className={styles.titleGradient}> ideal para tu proyecto</span>
          </h2>
          <p className={styles.subtitle}>
            Tres formas de trabajar juntos: financia, renta o compra tu solución.
          </p>
        </header>

        <div className={styles.grid}>
          {PLANS.map((plan, index) => (
            <article 
              key={plan.id} 
              className={`${styles.card} ${plan.popular ? styles.cardPopular : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <span>MÁS POPULAR</span>
                </div>
              )}

              <div className={styles.cardHeader}>
                <p className={styles.planTag}>{plan.tag}</p>
                <h3 className={styles.planTitle}>{plan.title}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`${styles.ctaButton} ${plan.popular ? styles.ctaButtonPrimary : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Consultar <span className={styles.ctaIcon}>→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

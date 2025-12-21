'use client';

import { useState } from 'react';
import styles from './Pricing.module.css';

const PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: '499',
    description: 'Perfecto para pequeños proyectos y startups',
    features: [
      'Landing Page Responsive',
      'Hasta 5 secciones',
      'Formulario de contacto',
      'Optimización SEO básica',
      '2 revisiones incluidas',
      'Entrega en 7 días'
    ],
    popular: false,
    gradient: 'var(--gradient-success)'
  },
  {
    id: 2,
    name: 'Professional',
    price: '1299',
    description: 'Ideal para negocios en crecimiento',
    features: [
      'Sitio Web Multi-página',
      'Hasta 10 secciones',
      'Sistema de gestión de contenido',
      'Integración con APIs',
      'SEO avanzado',
      '5 revisiones incluidas',
      'Entrega en 14 días',
      'Soporte 30 días'
    ],
    popular: true,
    gradient: 'var(--gradient-primary)'
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '2999',
    description: 'Soluciones completas a medida',
    features: [
      'Aplicación Web Completa',
      'Secciones ilimitadas',
      'Panel de administración',
      'Integraciones avanzadas',
      'Analytics y reportes',
      'Revisiones ilimitadas',
      'Entrega personalizada',
      'Soporte 90 días',
      'Mantenimiento incluido'
    ],
    popular: false,
    gradient: 'var(--gradient-warm)'
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Planes y Precios</span>
          <h2 className={styles.title}>
            Elige el plan
            <span className={styles.titleGradient}> perfecto para ti</span>
          </h2>
          <p className={styles.subtitle}>
            Precios transparentes y sin sorpresas. Todas las funcionalidades esenciales incluidas.
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
                  <span>Más Popular</span>
                </div>
              )}

              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceWrapper}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>USD</span>
                </div>
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
                style={plan.popular ? { background: plan.gradient } : {}}
              >
                Comenzar Ahora
              </button>
            </article>
          ))}
        </div>

        <div className={styles.guarantee}>
          <svg className={styles.guaranteeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <p className={styles.guaranteeText}>
            Garantía de satisfacción del 100%. Si no estás satisfecho, te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </section>
  );
}

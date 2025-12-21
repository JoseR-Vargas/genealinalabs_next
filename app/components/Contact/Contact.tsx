'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

const WHATSAPP_PHONE = '59898115693';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const text = `¡Hola! Me contacto desde la web.

Nombre: ${formData.name}
Email: ${formData.email}

Mensaje:
${formData.message}`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={`${styles.container} container`}>
        <header className={styles.header}>
          <span className={styles.label}>Contacto</span>
          <h2 className={styles.title}>
            ¿Listo para comenzar
            <span className={styles.titleGradient}> tu proyecto?</span>
          </h2>
          <p className={styles.subtitle}>
            Cuéntanos sobre tu idea y te responderemos en menos de 24 horas
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={5}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Enviar por WhatsApp
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

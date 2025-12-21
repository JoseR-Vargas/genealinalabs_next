import styles from './WhatsAppFab.module.css';

const WHATSAPP_PHONE = '59898115693';
const DEFAULT_TEXT = 'Hola GenealinaLabs, quiero información.';

export default function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(DEFAULT_TEXT)}`;

  return (
    <a
      href={href}
      className={styles.fab}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      title="WhatsApp"
    >
      <span className={styles.badge} aria-hidden="true">1</span>
      <svg className={styles.icon} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.1 17.2c-.3-.2-1.9-.9-2.2-1s-.6-.2-.9.2-.9 1-1.1 1.2-.5.2-.8 0c-.3-.2-1.4-.5-2.7-1.7-1-1-1.7-2.3-1.9-2.6s0-.6.2-.8c.2-.2.3-.5.5-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7s-.9-2.1-1.3-2.9c-.3-.8-.7-.7-.9-.7H7.5c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3s1.2 3.5 1.4 3.8c.2.3 2.4 3.7 5.9 5.2.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.5Z"
        />
        <path
          fill="currentColor"
          d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.6 1.8 6.6L3 29l6.6-1.7c1.9 1 4.1 1.6 6.4 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3Zm0 23.5c-2.1 0-4.1-.6-5.9-1.7l-.4-.2-3.9 1 1-3.8-.3-.4A10.4 10.4 0 0 1 5.6 16C5.6 10.2 10.2 5.6 16 5.6S26.4 10.2 26.4 16 21.8 26.5 16 26.5Z"
        />
      </svg>
    </a>
  );
}


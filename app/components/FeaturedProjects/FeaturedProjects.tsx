import styles from './FeaturedProjects.module.css';

// SVG Icons como componentes
const Icons = {
  external: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  barber: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a8 8 0 0 0-8 8c0 2.5 2 4 2 4v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6s2-1.5 2-4a8 8 0 0 0-8-8z"/>
      <path d="M12 10v2"/>
      <path d="M8 14h8"/>
    </svg>
  ),
  gift: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12"/>
      <rect x="2" y="7" width="20" height="5"/>
      <line x1="12" y1="22" x2="12" y2="7"/>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  )
};

interface Project {
  id: number;
  icon: keyof typeof Icons;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  url?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    icon: 'barber',
    name: 'Big Ligas Barber Studio',
    description: 'Sitio web moderno para barbería profesional con sistema de reservas en línea, galería de estilos y promociones especiales.',
    category: 'Negocio Local',
    technologies: ['React', 'Tailwind', 'Firebase'],
    url: '#'
  },
  {
    id: 2,
    icon: 'gift',
    name: 'Nice Surprise',
    description: 'Plataforma de comercio electrónico para regalos personalizados con catálogo interactivo y proceso de compra optimizado.',
    category: 'E-commerce',
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
    url: '#'
  },
  {
    id: 3,
    icon: 'tools',
    name: 'Tecnicservice',
    description: 'Portal web para servicios técnicos especializados con sistema de cotizaciones, seguimiento de órdenes y atención al cliente.',
    category: 'Servicios',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    url: '#'
  }
];

const FeaturedProjects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={`${styles.projects__container} container`}>
        {/* Section Header */}
        <header className={styles.projects__header}>
          <span className={styles.projects__label}>Proyectos Destacados</span>
          <h2 className={styles.projects__title}>
            Cada proyecto contiene su propio
            <span className={styles.projects__titleGradient}> caso de estudio</span>
          </h2>
          <p className={styles.projects__subtitle}>
            Transformando ideas en experiencias digitales exitosas
          </p>
        </header>

        {/* Projects Grid */}
        <div className={styles.projects__grid}>
          {PROJECTS.map((project, index) => (
            <article 
              key={project.id} 
              className={styles.project__card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.project__iconWrapper}>
                {Icons[project.icon]}
              </div>
              
              <div className={styles.project__badge}>
                {project.category}
              </div>
              
              <h3 className={styles.project__title}>{project.name}</h3>
              <p className={styles.project__description}>{project.description}</p>
              
              <ul className={styles.project__technologies}>
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className={styles.project__tech}>
                    {tech}
                  </li>
                ))}
              </ul>

              {project.url && (
                <a 
                  href={project.url} 
                  className={styles.project__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Ver caso de estudio</span>
                  {Icons.external}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

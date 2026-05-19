import styles from "./projects.module.css";

const projects = [
  {
    title: "Unleashed Utterances",
    description: "This site — a multi-author blog platform with per-post visual identity, built on Next.js, Tina CMS, and Vercel.",
    tags: ["Next.js", "TinaCMS", "Vercel", "TypeScript"],
    href: "https://github.com/enemyatgates/UnleashedUtterances",
    status: "Active",
  },
];

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.lead}>Things built, shipped, and in progress.</p>
      </header>

      <section className={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <span className={styles.status} data-status={project.status.toLowerCase()}>
                {project.status}
              </span>
            </div>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}

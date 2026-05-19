import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.lead}>Get in touch or find us elsewhere on the web.</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Email</h2>
          <a href="mailto:hello@example.com" className={styles.link}>
            hello@example.com
          </a>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>GitHub</h2>
          <a
            href="https://github.com/enemyatgates"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            github.com/enemyatgates
          </a>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Want to contribute?</h2>
          <p className={styles.text}>
            Unleashed Utterances is open to guest authors. If you have something to say and want a platform that lets your writing look as distinctive as it sounds, reach out.
          </p>
        </section>
      </div>
    </main>
  );
}

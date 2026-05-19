import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.lead}>
            Unleashed Utterances is a multi-author blog where every post has its own visual identity.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What is this?</h2>
          <p>
            A space for ideas, projects, and writing — not constrained to a single look. Each author and each post can express itself through a distinct template and theme, turning the act of reading into a visual experience as much as an intellectual one.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who writes here?</h2>
          <p>
            Multiple contributors, each bringing their own perspective and style. Posts are published across templates ranging from clean documents to slide-deck presentations to notebook-style layouts.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Built with</h2>
          <ul className={styles.techList}>
            <li>Next.js — framework</li>
            <li>Tina CMS — content management</li>
            <li>Supabase — auth and database (coming soon)</li>
            <li>Vercel — hosting</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

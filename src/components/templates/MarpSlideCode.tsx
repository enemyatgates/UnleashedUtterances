import React from "react";
import styles from "./MarpSlideCode.module.css";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
  children: React.ReactNode;
}

export default function MarpSlideCode({ title, author, date, excerpt, cover_image, children }: Props) {
  return (
    <div className={styles.deck}>
      <header className={styles.titleSlide}>
        <div className={styles.terminalBar}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
          <span className={styles.terminalTitle}>{author} — {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
        </div>
        <div className={styles.titleBody}>
          {cover_image && <img src={cover_image} alt={title} className={styles.coverImage} />}
          <h1 className={styles.title}><span className={styles.prompt}>$ </span>{title}</h1>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        </div>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
}

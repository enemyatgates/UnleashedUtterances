import React from "react";
import styles from "./JoplinNoteCompact.module.css";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
  children: React.ReactNode;
}

export default function JoplinNoteCompact({ title, author, date, excerpt, cover_image, children }: Props) {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>Note</div>
        <div className={styles.sidebarMeta}>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarKey}>Author</span>
            <span className={styles.sidebarValue}>{author}</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarKey}>Date</span>
            <span className={styles.sidebarValue}>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
          </div>
        </div>
      </aside>
      <main className={styles.content}>
        {cover_image && <img src={cover_image} alt={title} className={styles.coverImage} />}
        <h1 className={styles.title}>{title}</h1>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        <hr className={styles.divider} />
        <div className={styles.body}>{children}</div>
      </main>
    </div>
  );
}

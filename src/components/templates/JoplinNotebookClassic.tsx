import React from "react";
import styles from "./JoplinNotebookClassic.module.css";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
  children: React.ReactNode;
}

export default function JoplinNotebookClassic({ title, author, date, excerpt, cover_image, children }: Props) {
  return (
    <div className={styles.notebook}>
      <div className={styles.spine} />
      <div className={styles.page}>
        <div className={styles.header}>
          {cover_image && <img src={cover_image} alt={title} className={styles.coverImage} />}
          <h1 className={styles.title}>{title}</h1>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
          <div className={styles.meta}>
            <span>{author}</span>
            <span>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

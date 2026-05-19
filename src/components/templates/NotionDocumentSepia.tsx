import React from "react";
import styles from "./NotionDocumentSepia.module.css";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
  children: React.ReactNode;
}

export default function NotionDocumentSepia({ title, author, date, excerpt, cover_image, children }: Props) {
  return (
    <div className={styles.page}>
      {cover_image && (
        <div className={styles.cover}>
          <img src={cover_image} alt={title} />
        </div>
      )}
      <div className={styles.pageContent}>
        <h1 className={styles.title}>{title}</h1>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        <div className={styles.meta}>
          <span>{author}</span>
          <span>·</span>
          <span>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
        <hr className={styles.divider} />
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./NotionDocumentLight.module.css";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
  children: React.ReactNode;
}

export default function NotionDocumentLight({ title, author, date, excerpt, cover_image, children }: Props) {
  return (
    <div className={styles.page}>
      {cover_image && (
        <div className={styles.cover}>
          <img src={cover_image} alt={title} />
        </div>
      )}
      <div className={styles.pageContent}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>{title}</h1>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
          <div className={styles.properties}>
            <div className={styles.property}>
              <span className={styles.propertyKey}>Author</span>
              <span className={styles.propertyValue}>{author}</span>
            </div>
            <div className={styles.property}>
              <span className={styles.propertyKey}>Date</span>
              <span className={styles.propertyValue}>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
          </div>
          <hr className={styles.divider} />
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

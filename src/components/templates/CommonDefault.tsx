import React from "react";
import styles from "./CommonDefault.module.css";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
  children: React.ReactNode;
}

export default function CommonDefault({
  title,
  author,
  date,
  excerpt,
  cover_image,
  children,
}: Props) {
  return (
    <article className={styles.container}>
      {cover_image && (
        <div className={styles.cover}>
          <img src={cover_image} alt={title} />
        </div>
      )}
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        <div className={styles.meta}>
          <span>{author}</span>
          <span>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
      </header>
      <div className={styles.body}>{children}</div>
    </article>
  );
}


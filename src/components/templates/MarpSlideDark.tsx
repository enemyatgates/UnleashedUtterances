import React from "react";
import styles from "./MarpSlideDark.module.css";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
  children: React.ReactNode;
}

export default function MarpSlideDark({ title, author, date, excerpt, cover_image, children }: Props) {
  return (
    <div className={styles.deck}>
      <section className={styles.titleSlide}>
        {cover_image && <img src={cover_image} alt={title} className={styles.coverImage} />}
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{title}</h1>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        </div>
        <div className={styles.meta}>
          <span className={styles.author}>{author}</span>
          <span className={styles.date}>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
      </section>
      <section className={styles.content}>{children}</section>
    </div>
  );
}

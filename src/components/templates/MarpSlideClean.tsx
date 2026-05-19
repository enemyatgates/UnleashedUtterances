import React from "react";
import styles from "./MarpSlideClean.module.css";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
  children: React.ReactNode;
}

export default function MarpSlideClean({ title, author, date, excerpt, cover_image, children }: Props) {
  return (
    <div className={styles.deck}>
      <section className={styles.titleSlide}>
        {cover_image && <img src={cover_image} alt={title} className={styles.coverImage} />}
        <h1 className={styles.title}>{title}</h1>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        <div className={styles.meta}>
          <span>{author}</span>
          <span>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
      </section>
      <section className={styles.content}>{children}</section>
    </div>
  );
}

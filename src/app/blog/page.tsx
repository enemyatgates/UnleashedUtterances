import Link from "next/link";
import client from "../../../tina/__generated__/client";
import styles from "./blog.module.css";

export default async function BlogPage() {
  const posts = await client.queries.postConnection();
  const edges = posts.data.postConnection.edges ?? [];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Blog</h1>
        <p className={styles.subheading}>Thoughts, ideas and utterances.</p>
      </header>
      <section className={styles.grid}>
        {edges.map((edge) => {
          const post = edge?.node;
          if (!post) return null;
          return (
            <Link
              key={post._sys.filename}
              href={`/blog/${post._sys.filename}`}
              className={styles.card}
            >
              {post.cover_image && (
                <div className={styles.cardImage}>
                  <img src={post.cover_image} alt={post.title} />
                </div>
              )}
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.template}>{post.template ?? "CommonDefault"}</span>
                  <span className={styles.tier} data-tier={post.tier ?? "free"}>{post.tier ?? "free"}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                {post.excerpt && <p className={styles.cardExcerpt}>{post.excerpt}</p>}
                <div className={styles.cardFooter}>
                  <span>{post.author}</span>
                  <span>{post.date ? new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : ""}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}

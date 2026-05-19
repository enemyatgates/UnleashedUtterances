import Link from "next/link";
import client from "../../tina/__generated__/client";
import styles from "./page.module.css";

export default async function HomePage() {
  const posts = await client.queries.postConnection();
  const recentPosts = (posts.data.postConnection.edges ?? []).slice(0, 3);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Unleashed Utterances</h1>
        <p className={styles.heroSub}>
          A multi-author space for ideas, projects and writing — each post with its own visual identity.
        </p>
        <div className={styles.heroActions}>
          <Link href="/blog" className={styles.btnPrimary}>Read the Blog</Link>
          <Link href="/projects" className={styles.btnSecondary}>View Projects</Link>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className={styles.recent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent Posts</h2>
            <Link href="/blog" className={styles.seeAll}>See all →</Link>
          </div>
          <div className={styles.recentGrid}>
            {recentPosts.map((edge) => {
              const post = edge?.node;
              if (!post) return null;
              return (
                <Link
                  key={post._sys.filename}
                  href={`/blog/${post._sys.filename}`}
                  className={styles.recentCard}
                >
                  {post.cover_image && (
                    <div className={styles.recentCardImage}>
                      <img src={post.cover_image} alt={post.title} />
                    </div>
                  )}
                  <div className={styles.recentCardBody}>
                    <span className={styles.recentCardTemplate}>{post.template ?? "CommonDefault"}</span>
                    <h3 className={styles.recentCardTitle}>{post.title}</h3>
                    {post.excerpt && <p className={styles.recentCardExcerpt}>{post.excerpt}</p>}
                    <span className={styles.recentCardAuthor}>{post.author}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}

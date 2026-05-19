import { notFound } from "next/navigation";
import { getTemplate } from "@/components/templates";
import { getThemeVars, ThemeName } from "@/components/themes";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../../tina/__generated__/client";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;

  try {
    const result = await client.queries.post({
      relativePath: `${slug}.md`,
    });
    post = result.data.post;
  } catch (e) {
    console.error("Tina query failed:", e);
    notFound();
  }

  const Template = getTemplate(post.template ?? "CommonDefault");
  const themeVars = getThemeVars((post.theme ?? "light") as ThemeName);

  const styleVars = Object.entries(themeVars)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");

  return (
    <div style={{ cssText: styleVars } as React.CSSProperties}>
      {post.custom_css && (
        <link rel="stylesheet" href={`/styles/posts/${post.custom_css}`} />
      )}
      <Template
        title={post.title}
        author={post.author ?? ""}
        date={post.date ?? ""}
        excerpt={post.excerpt ?? ""}
        cover_image={post.cover_image ?? ""}
      >
        <TinaMarkdown content={post.body} />
      </Template>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await client.queries.postConnection();
  return (
    posts.data.postConnection.edges?.map((edge) => ({
      slug: edge?.node?._sys.filename,
    })) ?? []
  );
}

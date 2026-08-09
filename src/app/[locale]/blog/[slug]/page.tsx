import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPosts } from "@/src/lib/posts";
import Image from "next/image";
import remarkGfm from "remark-gfm";

interface BlogPostPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.flatMap((post) =>
    ["es", "en"].map((locale) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="py-20 text-foreground font-sans md:mt-32 mt-24 md:px-16 px-2 w-screen">
      <Image
        src={post.cover}
        alt={post.title}
        width={1200}
        height={800}
        className="w-full md:w-125 lg:w-200 h-auto"
      />
      <article>
        {/* Header */}
        <header className="mb-12">
          {post.date && (
            <time
              dateTime={post.date}
              className="text-sm text-muted-foreground"
            >
              {post.date}
            </time>
          )}

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          {post.description && (
            <p className="mt-5 text-xl text-muted-foreground">
              {post.description}
            </p>
          )}

          {post.tags && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag: string, i) => (
                <span
                  key={i}
                  className="rounded-full bg-muted px-3 py-1 text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}

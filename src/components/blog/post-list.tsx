import { getPosts } from "@/src/lib/posts";
import PostPreview from "./post-preview";

export default function PostList() {
  const posts = getPosts();

  if (posts.length === 0) {
    return (
      <section className="py-20 text-foreground  flex flex-col md:mt-32 mt-24 items-center font-sans md:mr-8 md:ml-8">
        <h1 className="text-2xl font-bold">
          No hay publicaciones disponibles.
        </h1>
      </section>
    );
  }

  return (
    <section className="py-20 text-foreground  flex flex-col md:mt-32 mt-24 items-center font-sans md:mr-8 md:ml-8">
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </section>
  );
}

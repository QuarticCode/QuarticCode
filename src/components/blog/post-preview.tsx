import { TBlog } from "@/src/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function PostPreview({ post }: { post: TBlog }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block max-w-md">
      <article className="mb-8 rounded-2xl border border-gray-800 p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          src={post.cover}
          alt={post.title}
          width={300}
          height={400}
          className="rounded-lg"
        />
        <h2 className="text-xl font-bold mt-4">{post.title}</h2>
        <p className="text-gray-600">{post.description}</p>
        <p className="text-gray-500 text-sm">{post.date}</p>
      </article>
    </Link>
  );
}

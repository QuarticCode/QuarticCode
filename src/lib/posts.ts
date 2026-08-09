import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { TBlog } from "../types/blog";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getPosts() {
  try {
    const files = fs.readdirSync(postsDirectory);

    if (files.length === 0) {
      return [];
    }

    return files.map((file) => {
      const slug = file.replace(".mdx", "");

      const fullPath = path.join(postsDirectory, file);

      const source = fs.readFileSync(fullPath, "utf-8");

      const { data , content} = matter(source);

      return {
        slug,
        ...data,
        content,
      } as TBlog;
    });
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

export function getPostBySlug(slug: string) {
  const posts = getPosts();

  return posts.find((post) => post.slug === slug);
}

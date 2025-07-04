import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author?: string;
  tags?: string[];
  readTime?: string;
  published: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  content: MDXRemoteSerializeResult;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(contentDirectory)) {
    console.log("❌ Blog directory not found:", contentDirectory);
    return [];
  }

  const folders = fs.readdirSync(contentDirectory);
  console.log("📁 Found blog folders:", folders);

  const posts = await Promise.all(
    folders.map(async (folder) => {
      const filePath = path.join(contentDirectory, folder, "index.mdx");

      if (!fs.existsSync(filePath)) {
        console.warn(`⚠️ Skipping ${folder}: index.mdx not found`);
        return null;
      }

      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      const published = data.published !== false;
      console.log(`✅ Loaded: ${folder} (published: ${published})`);

      return {
        slug: folder,
        title: data.title || "Untitled",
        excerpt: data.excerpt || "",
        date: data.date || new Date().toISOString(),
        category: data.category || "Uncategorized",
        author: data.author,
        tags: data.tags || [],
        readTime: data.readTime,
        published,
      } as BlogPost;
    })
  );

  const filtered = posts
    .filter((post): post is BlogPost => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log(
    "📝 Final post list:",
    filtered.map((p) => p.slug)
  );
  return filtered;
}

export async function getBlogPost(
  slug: string
): Promise<BlogPostWithContent | null> {
  const filePath = path.join(contentDirectory, slug, "index.mdx");

  if (!fs.existsSync(filePath)) {
    console.warn("❌ Blog post not found for slug:", slug);
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  try {
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    });

    return {
      slug,
      title: data.title || "Untitled",
      excerpt: data.excerpt || "",
      date: data.date || new Date().toISOString(),
      category: data.category || "Uncategorized",
      author: data.author,
      tags: data.tags || [],
      readTime: data.readTime,
      published: data.published !== false,
      content: mdxSource,
    };
  } catch (error) {
    console.error("❌ MDX serialization failed for:", slug, error);
    return null;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

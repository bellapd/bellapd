import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const portfolioDirectory = path.join(process.cwd(), "content/portfolio");

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  published: boolean;
}

export interface ProjectWithContent extends Project {
  content: MDXRemoteSerializeResult;
}

export async function getAllProjects(): Promise<Project[]> {
  if (!fs.existsSync(portfolioDirectory)) {
    console.warn(
      "❌ Portfolio content directory not found:",
      portfolioDirectory
    );
    return [];
  }

  const folders = fs.readdirSync(portfolioDirectory);
  console.log("📁 Found project folders:", folders);

  const projects = await Promise.all(
    folders.map(async (folder) => {
      const filePath = path.join(portfolioDirectory, folder, "index.mdx");

      if (!fs.existsSync(filePath)) {
        console.warn(`⚠️ Skipping ${folder}: index.mdx not found`);
        return null;
      }

      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      const published = data.published !== false;

      return {
        slug: folder,
        title: data.title || "Untitled",
        description: data.description || "",
        technologies: data.technologies || [],
        date: data.date || new Date().toISOString(),
        published,
      } as Project;
    })
  );

  return projects
    .filter(
      (project): project is Project => project !== null && project.published
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getProject(
  slug: string
): Promise<ProjectWithContent | null> {
  const filePath = path.join(portfolioDirectory, slug, "index.mdx");

  if (!fs.existsSync(filePath)) {
    console.warn("❌ Project not found for slug:", slug);
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
      description: data.description || "",
      technologies: data.technologies || [],
      date: data.date || new Date().toISOString(),
      published: data.published !== false,
      content: mdxSource,
    };
  } catch (err) {
    console.error(`❌ Error serializing MDX for ${slug}:`, err);
    return null;
  }
}

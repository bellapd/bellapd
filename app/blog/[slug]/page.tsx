import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { getBlogPost, getAllBlogPosts, formatDate } from "@/lib/mdx";
import { MdxContent } from "@/components/MdxContent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  console.log(
    "Generated slugs:",
    posts.map((p) => p.slug)
  );
  return posts.map((post) => ({
    slug: post.slug,
  }));
}


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Bellapd Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container px-4 md:px-6 max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm mb-8 animated-underline"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
          </Link>

          <div className="space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.category}</span>
              {post.readTime && (
                <>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </>
              )}
              {post.author && (
                <>
                  <span>•</span>
                  <span>By {post.author}</span>
                </>
              )}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* <div className="aspect-[16/9] bg-muted mb-8" /> */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MdxContent content={post.content} />
          </div>
        </article>
      </main>
    </>
  );
}

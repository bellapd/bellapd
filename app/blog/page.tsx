import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { getAllBlogPosts, formatDate } from "@/lib/mdx";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-8 md:space-y-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-[700px]">
                My thoughts on everything that I read.
              </p>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Stay Tuned! I haven't written any blog posts yet, but I'm working on it.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {posts.map((post) => (
                  <article key={post.slug} className="space-y-4 group">
                    <div className="aspect-[16/9] bg-muted" />
                    <div className="space-y-2">
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
                      </div>
                      <h2 className="text-2xl font-bold group-hover:underline underline-offset-4">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-muted-foreground">{post.excerpt}</p>
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
                      <Link
                        href={`/blog/${post.slug}`}
                        className="animated-underline inline-flex items-center pt-2"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

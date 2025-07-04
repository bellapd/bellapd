import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { getAllBlogPosts, formatDate } from "@/lib/mdx";
import { getAllProjects } from "@/lib/portfolio";

export default async function Page() {
  const posts = await getAllBlogPosts();
  const projects = await getAllProjects();

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 md:px-12 py-16 mt-20 max-w-3xl mx-auto font-sans">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold inline-block mb-2">Bellapd.</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Inquisitive thinker. Lifelong learner. Tea-fueled reader.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center text-lg font-medium hover:underline underline-offset-4 mt-4"
          >
            Read more about me <ArrowRight className="ml-2" />
          </Link>
        </header>

        {/* Projects Section */}
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Projects</h3>
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">On Progress!</p>
          </div>
        ) : (
          <div className="space-y-6 mb-16">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm text-gray-500">
                  {formatDate(project.date)}
                </span>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-lg font-medium hover:underline underline-offset-4 text-right"
                >
                  {project.title}
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Blog Section */}
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Blog</h3>
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Stay Tuned! I haven't written any blog posts yet, but I'm working
              on it.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm text-gray-500">
                  {formatDate(post.date)}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-medium hover:underline underline-offset-4 text-right"
                >
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Contact */}
        <section className="mt-20 py-10">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's work together
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <Link
                href="mailto:belladirgo@gapp.nthu.edu.tw"
                className="inline-flex items-center justify-center px-6 py-3 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="border-t border-border py-12 relative overflow-hidden mt-24">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="h-full w-full grid grid-cols-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="border-r border-black dark:border-white h-full"
                ></div>
              ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-black/10 dark:border-white/10">
                <Image
                  src="/bella_avatar.png"
                  alt="Bellapd Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl tracking-tight font-medium">
                Bellapd
              </span>
            </div>
            <div className="flex flex-wrap gap-8">
              <Link href="/" className="animated-link">
                Home
              </Link>
              <Link href="/about" className="animated-link">
                About
              </Link>
              <Link href="/portfolio" className="animated-link">
                Projects
              </Link>
              <Link href="/blog" className="animated-link">
                Blog
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:belladirgo@gapp.nthu.edu.tw"
                    className="animated-link"
                  >
                    belladirgo@gapp.nthu.edu.tw
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/bellapd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-link"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/annabellapd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-link"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Location</h3>
              <p>Hsinchu City, Taiwan</p>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bellapd. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

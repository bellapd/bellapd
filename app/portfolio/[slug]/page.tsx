import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { getAllProjects, getProject } from "@/lib/portfolio";
import { MdxContent } from "@/components/MdxContent"; // ← assumes you already have this

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container px-4 md:px-6 max-w-4xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm mb-8 animated-underline"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
          </Link>

          <div className="space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              {project.title}
            </h1>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MdxContent content={project.content} />
          </div>
        </article>
      </main>
    </>
  );
}

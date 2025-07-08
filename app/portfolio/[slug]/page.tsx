import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { getAllProjects, getProject } from "@/lib/portfolio";
import Image from "next/image";
import MdxContentClient from "@/components/MdxContentClient";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

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

          {project.image && (
            <div className="flex justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={360}
                className="aspect-[16/9] object-cover rounded-lg"
              />
            </div>
          )}

          {project.content ? (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MdxContentClient content={project.content} />
            </div>
          ) : (
            <p className="text-muted-foreground">No content available.</p>
          )}
        </article>
      </main>
    </>
  );
}

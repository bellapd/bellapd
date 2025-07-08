import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { getAllProjects } from "@/lib/portfolio";
import Image from "next/image";

export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-8 md:space-y-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-[700px]">
                A collection of my projects and experiments.
              </p>
            </div>

            {projects.length === 0 ? (
              <div className="text-muted-foreground text-center py-12">
                On Progress!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.slug}
                    className="group border border-border overflow-hidden"
                  >
                    <div className="p-4 space-y-2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={640}
                        height={360}
                        className="aspect-[16/9] object-cover w-full"
                      />

                      <h2 className="text-xl font-bold">{project.title}</h2>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
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
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="animated-underline inline-flex items-center pt-2"
                      >
                        View Project →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

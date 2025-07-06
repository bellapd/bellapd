import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Annabella Putri Dirgo</h2>
                  <p className="text-muted-foreground">Graduate Student</p>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      className="justify-start rounded-none"
                    >
                      <Link href="https://shorturl.at/Q2YjC"> Download CV</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start rounded-none"
                    >
                      <Link href="mailto:belladirgo@gapp.nthu.edu.tw">
                        {" "}
                        Contact Me
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-12">
              <section className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter">
                  About Me
                </h1>
                <div className="space-y-4 text-lg">
                  <p>
                    I am a graduate student at National Tsing Hua University,
                    Taiwan, majoring in Computer Science in Institute of
                    Institute of Information Systems and Applications. I focus
                    on analyzing massive datasets, building deep learning
                    models, and contributing to the development of data-driven
                    health systems. I’m particularly passionate about the
                    intersection of human language and technology—especially in
                    the fields of Natural Language Processing (NLP) and Large
                    Language Models (LLMs).
                  </p>
                  <p>
                    With a background that blends computer science and an
                    interest in cognitive psychology, I approach my projects
                    from a multidisciplinary perspective. I'm especially
                    fascinated by how language shapes human thought and
                    interaction, and how we can design intelligent systems that
                    enhance human capabilities rather than replace them.
                  </p>
                  <p>
                    Outside of academics, I find balance through yoga, and I
                    love exploring new places and cuisines. Whether it’s a
                    hidden food stall or a local market abroad, I’m always up
                    for a good food trip.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-bold">Masters</h3>
                    <p>
                      Major: Computer Science, Institute of Information Systems
                      and Applications
                    </p>
                    <p className="text-muted-foreground">
                      National Tsing Hua University (國立清華大學), Taiwan 台灣,
                      2025-present
                    </p>
                  </div>
                  <div className="border-l-2 border-border pl-4 py-1">
                    <h3 className="font-bold">B.S. in Science</h3>
                    <p>
                      Major: Interdisciplinary Program of Electrical Engineering
                      and Computer Science, College of Electrical Engineering
                      and Computer Science
                    </p>
                    <p className="text-muted-foreground">
                      National Tsing Hua University (國立清華大學), Taiwan 台灣,
                      2020-2024
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">
                  Research Interests
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>
                    Natural Language Processing (NLP) & Large Language Models
                    (LLMs)
                  </li>
                  <li>Deep Learning & Neural Networks</li>
                  <li>Health Informatics & Digital Health</li>
                  <li>Big Data Analytics & Scalable Machine Learning</li>
                  <li>Human-Centered AI & Cognitive Systems</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold">Programming</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "JavaScript", "TypeScript", "R", "Ruby"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded-sm"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Web Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "Heroku",
                        "HTML/CSS",
                        "Tailwind CSS",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Data Science</h3>
                    <div className="flex flex-wrap gap-2">
                      {["PyTorch", "TensorFlow", "Pandas", "Matplotlib"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded-sm"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

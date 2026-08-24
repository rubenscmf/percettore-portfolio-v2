import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="container pt-28 sm:pt-40 pb-10 sm:pb-16">
        <SectionLabel index="01" className="mb-4 sm:mb-6">Portfólio Editorial</SectionLabel>
        <h1 className="font-display font-extrabold text-3xl sm:text-6xl md:text-8xl tracking-tighter leading-[0.9] uppercase text-balance">
          OBRAS QUE <span className="text-primary">SUSTENTAM</span><br /> O HORIZONTE.
        </h1>
        <p className="mt-6 sm:mt-8 max-w-2xl text-concrete-700 text-base sm:text-lg md:text-xl leading-relaxed text-pretty">
          Uma seleção rigorosa de projetos onde aplicamos engenharia de ponta em concreto armado — do cálculo de fundações profundas à superestrutura de edifícios de alta complexidade.
        </p>
      </section>

      {/* CATEGORY FILTER BAR WITH MOBILE SCROLL */}
      <div className="sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-md border-y border-foreground/10 py-4 sm:py-5 my-6 sm:my-8">
        <div className="container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((c) => {
              const count = c === "Todos" ? projects.length : projects.filter((p) => p.category === c).length;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`font-sans text-xs uppercase tracking-wider px-3.5 sm:px-4 py-2 sm:py-2.5 whitespace-nowrap transition-all duration-300 border ${
                    active === c
                      ? "bg-foreground text-background border-foreground font-bold shadow-md"
                      : "bg-transparent text-concrete-700 border-foreground/15 hover:border-foreground/50 hover:text-foreground"
                  }`}
                >
                  {c} <span className="text-[10px] opacity-70 ml-1">({count})</span>
                </button>
              );
            })}
          </div>

          <span className="font-sans text-xs uppercase tracking-wider text-concrete-500 font-medium self-start sm:self-center">
            Exibindo {filtered.length} de {projects.length} Obras
          </span>
        </div>
      </div>

      {/* EDITORIAL GRID */}
      <section className="container pb-32 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {filtered.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <ProjectCard project={p} totalProjects={projects.length} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

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
      <div className="relative pt-36 md:pt-48 pb-32 overflow-hidden">
        {/* GIANT WATERMARK TYPOGRAPHY BACKGROUND */}
        <div className="absolute top-24 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
          <span className="block font-display font-black text-[clamp(4.5rem,14vw,14rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
            portfolio de obras
          </span>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          {/* HEADER */}
          <div className="space-y-6 max-w-3xl mb-14">
            <SectionLabel index="01">
              Portfólio de Engenharia Estrutural
            </SectionLabel>
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase leading-[0.92] text-balance">
              Obras que <span className="text-primary">sustentam</span> o horizonte.
            </h1>
            <p className="text-concrete-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Seleção de empreendimentos verticais, comerciais e residenciais calculados com rigor
              milimétrico e total conformidade com as normas ABNT NBR 6118 e 14931.
            </p>
          </div>

          {/* CATEGORY FILTER BAR (EDITORIAL PILL STYLE) */}
          <div className="sticky top-20 z-20 bg-background/90 backdrop-blur-md border-y border-foreground/[0.08] py-4 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
                {categories.map((c) => {
                  const count = c === "Todos" ? projects.length : projects.filter((p) => p.category === c).length;
                  const isActive = active === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setActive(c)}
                      className={`font-sans text-xs uppercase tracking-wider px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 border ${
                        isActive
                          ? "bg-foreground text-background border-foreground font-bold shadow-sm"
                          : "bg-transparent text-concrete-600 border-foreground/15 hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {c} <span className="text-[10px] opacity-70 ml-1">({count})</span>
                    </button>
                  );
                })}
              </div>

              <span className="font-sans text-xs uppercase tracking-wider text-concrete-500 font-medium shrink-0">
                {filtered.length} de {projects.length} Obras Reais
              </span>
            </div>
          </div>

          {/* GRID OF PROJECTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} totalProjects={projects.length} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

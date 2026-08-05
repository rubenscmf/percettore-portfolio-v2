import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { SpringCard } from "@/components/SpringCard";
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
      <section className="container pt-40 pb-16">
        <SectionLabel index="01" className="mb-6">Portfólio</SectionLabel>
        <h1 className="font-display text-5xl md:text-8xl tracking-tighter leading-[0.92] text-balance">
          Obras que <span className="text-primary">sustentam</span><br /> o horizonte.
        </h1>
        <p className="mt-8 max-w-2xl text-concrete-500 text-lg text-pretty">
          Uma seleção de projetos onde aplicamos nossa expertise em concreto armado — da
          fundação ao acabamento aparente.
        </p>
      </section>

      <div className="container border-t border-foreground/15 pt-6 pb-12">
        <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em]">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`transition-colors ${active === c ? "text-primary font-bold" : "text-concrete-500 hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-concrete-500">{filtered.length} projetos</span>
        </div>
      </div>

      <section className="container pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20">
          {filtered.map((p, i) => (
            <SpringCard key={p.slug} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <Link
                to={`/projetos/${p.slug}`}
                className="group block"
              >
                <div className="overflow-hidden bg-concrete-100 aspect-[4/3] relative">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest px-2 py-1">
                    {p.status}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-12 gap-3">
                  <div className="col-span-9">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-concrete-500 mb-2">
                      {p.category} · {p.year}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-concrete-500 italic">{p.type} · {p.location}</p>
                  </div>
                  <div className="col-span-3 text-right font-mono text-[11px] text-primary">{p.index} / {String(projects.length).padStart(2, "0")}</div>
                </div>
              </Link>
            </SpringCard>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

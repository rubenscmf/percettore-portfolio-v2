import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { getProject, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug || "");

  if (!project) {
    return (
      <Layout>
        <section className="container pt-40 pb-32">
          <h1 className="font-display text-5xl">Projeto não encontrado</h1>
          <Link to="/projetos" className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <ArrowLeft className="h-4 w-4" /> Voltar ao portfólio
          </Link>
        </section>
      </Layout>
    );
  }

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  const specs = [
    { k: "Localização", v: project.location },
    { k: "Área", v: project.area },
    { k: "Tipo de Estrutura", v: project.type },
    { k: "Conclusão", v: project.year },
    { k: "Status", v: project.status },
    { k: "Categoria", v: project.category },
  ];

  return (
    <Layout>
      <section className="container pt-32 pb-12">
        <Link to="/projetos" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-concrete-500 hover:text-primary">
          <ArrowLeft className="h-3.5 w-3.5" /> Portfólio
        </Link>
      </section>

      <section className="container pb-16">
        <SectionLabel index={project.index} className="mb-6">{project.category}</SectionLabel>
        <h1 className="font-display text-5xl md:text-8xl tracking-tighter leading-[0.92] text-balance">
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-concrete-500 text-lg text-pretty">{project.summary}</p>
      </section>

      <section className="container pb-24">
        <div className="aspect-[16/9] overflow-hidden bg-concrete-100">
          <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="container pb-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <SectionLabel className="mb-6">Dados Técnicos</SectionLabel>
        </div>
        <dl className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
          {specs.map((s) => (
            <div key={s.k} className="bg-background p-6">
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-concrete-500 mb-2">
                {s.k}
              </dt>
              <dd className="font-display text-xl">{s.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container pb-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <SectionLabel className="mb-6">Desafio</SectionLabel>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight">O contexto do projeto.</h3>
        </div>
        <p className="col-span-12 md:col-span-8 text-lg text-concrete-700 text-pretty leading-relaxed">
          {project.challenge}
        </p>
      </section>

      <section className="container pb-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <SectionLabel className="mb-6">Solução</SectionLabel>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight">Engenharia aplicada.</h3>
        </div>
        <div className="col-span-12 md:col-span-8 space-y-8">
          <p className="text-lg text-concrete-700 text-pretty leading-relaxed">{project.solution}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.scope.map((item) => (
              <li key={item} className="flex items-start gap-3 font-mono text-xs uppercase tracking-widest">
                <span className="text-primary mt-1">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.gallery.length > 1 && (
        <section className="container pb-32">
          <SectionLabel className="mb-8">Galeria</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <div key={i} className={`aspect-[4/3] overflow-hidden bg-concrete-100 ${i === 0 ? "md:col-span-2 aspect-[16/9]" : ""}`}>
                <img src={img} alt={`${project.title} — imagem ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {project.testimonial && (
        <section className="bg-foreground text-background py-32">
          <div className="container grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel className="text-background/60">Depoimento</SectionLabel>
            </div>
            <div className="col-span-12 md:col-span-9">
              <blockquote className="font-display text-3xl md:text-5xl tracking-tight leading-[1.1] text-balance">
                <span className="text-primary">"</span>{project.testimonial.quote}<span className="text-primary">"</span>
              </blockquote>
              <footer className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-concrete-300">
                {project.testimonial.author} — {project.testimonial.role}
              </footer>
            </div>
          </div>
        </section>
      )}

      <section className="container py-24 border-t border-foreground/15">
        <Link to={`/projetos/${next.slug}`} className="group flex items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-concrete-500">Próximo projeto</div>
            <div className="font-display text-3xl md:text-5xl tracking-tighter mt-2 group-hover:text-primary transition-colors">
              {next.title}
            </div>
          </div>
          <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>
    </Layout>
  );
};

export default ProjectDetail;

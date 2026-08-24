import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Maximize2, X, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { getProject, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug || "");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <Layout>
        <section className="container pt-40 pb-32">
          <h1 className="font-display text-5xl uppercase font-bold">Projeto não encontrado</h1>
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
    { k: "Área Construída", v: project.area },
    { k: "Prazo Executivo", v: project.timeline },
    { k: "Tipologia Estrutural", v: project.structuralTypology },
    { k: "Complexidade Técnica", v: project.complexity },
    { k: "Localização", v: project.location },
    { k: "Ano de Projeto", v: project.year },
    { k: "Status Atual", v: project.status },
    { k: "Categoria", v: project.category },
  ];

  return (
    <Layout>
      {/* HEADER & NAV */}
      <section className="container pt-36 pb-8">
        <Link to="/projetos" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-concrete-500 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Portfólio Percettore
        </Link>
      </section>

      {/* HERO SECTION OF PROJECT */}
      <section className="container pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <SectionLabel index={project.index}>{project.category}</SectionLabel>
          <span className={`font-mono text-xs uppercase tracking-widest px-3 py-1 border ${
            project.status === "Executado" ? "bg-primary/10 border-primary text-primary font-bold" : "bg-amber-500/10 border-amber-500 text-amber-600 font-bold"
          }`}>
            {project.status}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-5xl md:text-8xl tracking-tighter leading-[0.88] uppercase text-balance">
          {project.title}
        </h1>
        <p className="mt-8 max-w-3xl text-concrete-700 text-lg md:text-xl leading-relaxed text-pretty font-normal">
          {project.summary}
        </p>
      </section>

      {/* MAIN COVER IMAGE */}
      <section className="container pb-24">
        <div 
          onClick={() => setSelectedImage(project.cover)}
          className="group relative aspect-[16/9] overflow-hidden bg-concrete-900/10 border border-foreground/10 cursor-pointer rounded-sm"
        >
          <img src={project.cover} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-concrete-900/90 text-white font-mono text-xs uppercase tracking-widest px-4 py-2 flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-primary" /> Expandir Imagem
            </span>
          </div>
        </div>
      </section>

      {/* BLOCO 1: DADOS TÉCNICOS */}
      <section className="container pb-32">
        <div className="border-t border-foreground/15 pt-8 mb-12">
          <SectionLabel index="01" className="mb-2">Especificações Executivas</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight">
            Dados Técnicos de Engenharia
          </h2>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
          {specs.map((s) => (
            <div key={s.k} className="bg-background p-6 flex flex-col justify-between min-h-[120px]">
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-concrete-500 mb-3 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                {s.k}
              </dt>
              <dd className="font-display font-bold text-xl md:text-2xl text-foreground uppercase tracking-tight leading-tight">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* BLOCO 2: DESAFIO ESTRUTURAL */}
      <section className="relative py-24 bg-background border-y border-foreground/10 mb-32">
        <div className="container grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-4">
            <SectionLabel index="02" className="mb-3">Contexto & Restrições</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight">
              Desafio Estrutural
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="pl-6 border-l-2 border-primary">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed text-pretty">
                "{project.challenge}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 3: SOLUÇÃO DE ENGENHARIA */}
      <section className="container pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <SectionLabel index="03" className="mb-3">Metodologia & Projeto</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight">
              Solução de Engenharia
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-10">
            <p className="text-lg text-concrete-700 leading-relaxed text-pretty">
              {project.solution}
            </p>

            <div className="pt-6 border-t border-foreground/15">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-concrete-500 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Escopo de Atuação Técnica
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-concrete-100/50 p-4 border border-foreground/10">
                    <span className="text-primary font-mono font-bold">›</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 4: GALERIA EDITORIAL */}
      {project.gallery.length > 0 && (
        <section className="container pb-32">
          <div className="border-t border-foreground/15 pt-8 mb-12">
            <SectionLabel index="04" className="mb-2">Documentação Visual</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight">
              Galeria da Obra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImage(img)}
                className={`group relative overflow-hidden bg-concrete-900/10 border border-foreground/10 cursor-pointer rounded-sm ${
                  i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <img src={img} alt={`${project.title} — Imagem ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-concrete-900/90 text-white font-mono text-xs uppercase tracking-widest px-4 py-2 flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-primary" /> Visualizar em Alta Resolução
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LIGHTBOX MODAL FOR GALLERY */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImage} alt="Visualização expandida" className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10" />
        </div>
      )}

      {/* TESTIMONIAL IF AVAILABLE */}
      {project.testimonial && (
        <section className="bg-concrete-900 text-background py-32 border-t border-white/10">
          <div className="container grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel className="text-background/60">Reconhecimento</SectionLabel>
            </div>
            <div className="col-span-12 md:col-span-9">
              <blockquote className="font-display font-medium text-3xl md:text-5xl tracking-tight leading-snug text-balance">
                <span className="text-primary font-bold">"</span>{project.testimonial.quote}<span className="text-primary font-bold">"</span>
              </blockquote>
              <footer className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
                {project.testimonial.author} — <span className="text-background/70 font-normal">{project.testimonial.role}</span>
              </footer>
            </div>
          </div>
        </section>
      )}

      {/* NEXT PROJECT NAVIGATION */}
      <section className="container py-24 border-t border-foreground/15">
        <Link to={`/projetos/${next.slug}`} className="group flex items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-concrete-500 mb-2">Próxima Obra em Destaque</div>
            <div className="font-display font-bold text-4xl md:text-6xl tracking-tight uppercase group-hover:text-primary transition-colors">
              {next.title}
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-concrete-500 mt-1">{next.type} · {next.location}</p>
          </div>
          <ArrowRight className="h-10 w-10 text-foreground group-hover:text-primary group-hover:translate-x-3 transition-all shrink-0" />
        </Link>
      </section>
    </Layout>
  );
};

export default ProjectDetail;

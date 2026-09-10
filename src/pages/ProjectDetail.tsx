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
        <div className="max-w-[1440px] mx-auto px-6 pt-40 pb-32">
          <h1 className="font-display text-5xl uppercase font-bold">Projeto não encontrado</h1>
          <Link
            to="/projetos"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao portfólio
          </Link>
        </div>
      </Layout>
    );
  }

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  const specs = [
    { k: "Área Construída", v: project.area },
    { k: "Tipologia Estrutural", v: project.type },
    { k: "Localização", v: project.location },
    { k: "Ano de Execução", v: project.year },
    { k: "Status Atual", v: project.status },
    { k: "Segmento", v: project.category },
    { k: "Normas Técnicas", v: "NBR 6118 / 14931" },
    { k: "Controle Tecnológico", v: "FCK 50-60 MPa" },
  ];

  return (
    <Layout>
      <div className="relative pt-36 md:pt-48 pb-32 space-y-20 overflow-hidden">
        {/* WATERMARK BACKGROUND TYPOGRAPHY */}
        <div className="absolute top-24 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
          <span className="block font-display font-black text-[clamp(4.5rem,14vw,14rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
            {project.title}
          </span>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 space-y-16">
          {/* TOP NAV & BREADCRUMB */}
          <div>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-concrete-500 hover:text-primary transition-colors font-semibold"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao Portfólio de Obras
            </Link>
          </div>

          {/* PROJECT HEADER */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel index={project.index}>{project.category}</SectionLabel>
              <span className="bg-primary/10 border border-primary/20 text-primary font-sans text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {project.status}
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.92] text-balance">
              {project.title}
            </h1>

            <p className="text-concrete-700 text-lg sm:text-xl md:text-2xl leading-relaxed text-pretty font-normal">
              {project.summary}
            </p>
          </div>

          {/* MAIN COVER IMAGE */}
          <div
            onClick={() => setSelectedImage(project.cover)}
            className="group relative aspect-[16/9] overflow-hidden bg-concrete-100 border border-foreground/[0.08] cursor-pointer rounded-sm shadow-xl"
          >
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-background/90 backdrop-blur-sm text-foreground font-sans text-xs uppercase tracking-wider px-5 py-3 rounded-full flex items-center gap-2 font-bold shadow-lg">
                <Maximize2 className="w-4 h-4 text-primary" /> Ampliar Fotografia
              </span>
            </div>
          </div>

          {/* DADOS TÉCNICOS DE ENGENHARIA */}
          <div className="space-y-8">
            <div className="border-b border-foreground/[0.08] pb-4">
              <SectionLabel index="01">Especificações Executivas</SectionLabel>
              <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-foreground mt-2">
                Ficha Técnica da Estrutura
              </h2>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {specs.map((s) => (
                <div
                  key={s.k}
                  className="p-6 bg-card border border-foreground/[0.08] rounded-sm flex flex-col justify-between"
                >
                  <dt className="font-sans text-[11px] uppercase tracking-wider text-concrete-500 font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                    {s.k}
                  </dt>
                  <dd className="font-display font-bold text-lg sm:text-xl text-foreground uppercase tracking-tight">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* DESAFIO & SOLUÇÃO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-foreground/[0.08]">
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel index="02">Contexto & Restrições</SectionLabel>
              <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-foreground">
                Desafio Estrutural
              </h2>
              <blockquote className="p-6 bg-card border-l-4 border-primary border-y border-r border-foreground/[0.08] text-base sm:text-lg text-concrete-700 leading-relaxed italic">
                "{project.challenge}"
              </blockquote>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <SectionLabel index="03">Metodologia & Projeto</SectionLabel>
              <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-foreground">
                Solução de Engenharia
              </h2>
              <p className="text-base sm:text-lg text-concrete-700 leading-relaxed">
                {project.solution}
              </p>

              <div className="pt-4 space-y-3">
                <div className="font-sans text-xs uppercase tracking-wider text-concrete-500 font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Escopo de Atuação Técnica:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="p-3 bg-card border border-foreground/[0.06] text-xs font-sans font-semibold uppercase tracking-wider text-foreground flex items-center gap-2"
                    >
                      <span className="text-primary font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* GALERIA DE FOTOS */}
          {project.gallery.length > 0 && (
            <div className="space-y-8 pt-8 border-t border-foreground/[0.08]">
              <div className="border-b border-foreground/[0.08] pb-4">
                <SectionLabel index="04">Documentação Visual</SectionLabel>
                <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-foreground mt-2">
                  Galeria da Obra
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className="group relative aspect-[4/3] overflow-hidden bg-concrete-100 border border-foreground/[0.08] cursor-pointer rounded-sm"
                  >
                    <img
                      src={img}
                      alt={`${project.title} — Foto ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-background/90 text-foreground font-sans text-xs uppercase tracking-wider px-4 py-2 rounded-full font-bold shadow-md">
                        Ampliar
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODAL LIGHTBOX */}
          {selectedImage && (
            <div
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Visualização expandida"
                className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10"
              />
            </div>
          )}

          {/* DEPOIMENTO SE DISPONÍVEL */}
          {project.testimonial && (
            <div className="p-10 md:p-14 bg-foreground text-background rounded-sm">
              <div className="font-sans text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4">
                [RECONHECIMENTO DO CLIENTE]
              </div>
              <blockquote className="font-display font-medium text-2xl sm:text-3xl md:text-4xl leading-snug">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="mt-6 font-sans text-xs uppercase tracking-wider text-concrete-300">
                <span className="font-bold text-white">{project.testimonial.author}</span> — {project.testimonial.role}
              </div>
            </div>
          )}

          {/* PRÓXIMA OBRA */}
          <div className="pt-12 border-t border-foreground/[0.08]">
            <Link
              to={`/projetos/${next.slug}`}
              className="group p-8 sm:p-12 bg-card border border-foreground/[0.08] hover:border-primary/40 rounded-sm flex items-center justify-between gap-6 transition-all"
            >
              <div>
                <div className="font-sans text-xs uppercase tracking-[0.2em] text-concrete-500 font-bold mb-2">
                  Próxima Obra em Destaque
                </div>
                <div className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {next.title}
                </div>
                <div className="text-xs sm:text-sm text-concrete-600 mt-2">
                  {next.type} · {next.location}
                </div>
              </div>
              <ArrowRight className="w-8 h-8 text-foreground group-hover:text-primary group-hover:translate-x-2 transition-all shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

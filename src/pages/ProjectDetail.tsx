import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Maximize2, X, CheckCircle2 } from "lucide-react";
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
          <h1 className="font-display text-4xl uppercase font-bold">Projeto não encontrado</h1>
          <Link
            to="/projetos"
            className="mt-6 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao portfólio
          </Link>
        </div>
      </Layout>
    );
  }

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <Layout>
      <div className="relative pt-32 sm:pt-44 pb-28 space-y-16 md:space-y-24 overflow-hidden">
        {/* SUBTLE WATERMARK TYPOGRAPHY */}
        <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
          <span className="block font-display font-black text-[clamp(4rem,12vw,12rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
            {project.title}
          </span>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 space-y-12 sm:space-y-16">
          {/* TOP BREADCRUMB */}
          <div>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-concrete-500 hover:text-primary transition-colors font-semibold"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao Portfólio de Obras
            </Link>
          </div>

          {/* PROJECT HEADER (CLEAN & NON-POLLUTED) */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel index={project.index}>
                {project.category} · {project.location}
              </SectionLabel>
              <span className="inline-block bg-foreground text-background font-sans text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                {project.status}
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.94] text-foreground">
              {project.title}
            </h1>

            <p className="text-concrete-700 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-pretty max-w-3xl pt-2">
              {project.summary}
            </p>
          </div>

          {/* HERO MAIN IMAGE SHOWCASE */}
          <div
            onClick={() => setSelectedImage(project.cover)}
            className="group relative aspect-[16/9] overflow-hidden bg-concrete-100 border border-foreground/[0.08] cursor-pointer rounded-sm shadow-xl"
          >
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-background/90 backdrop-blur-sm text-foreground font-sans text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-2 font-bold shadow-lg">
                <Maximize2 className="w-3.5 h-3.5 text-primary" /> Ampliar Fotografia
              </span>
            </div>
          </div>

          {/* CLEAN MINIMALIST SPECS STRIP (REPLACES THE CLUTTERED 8-BOX GRID) */}
          <div className="bg-card border border-foreground/[0.08] rounded-sm p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-foreground/[0.08]">
              <div className="space-y-1">
                <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-concrete-500 font-bold">
                  Área Construída
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-foreground">
                  {project.area}
                </div>
              </div>

              <div className="space-y-1 pt-4 md:pt-0 md:pl-8">
                <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-concrete-500 font-bold">
                  Estrutura / Altura
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-foreground">
                  {project.type}
                </div>
              </div>

              <div className="space-y-1 pt-4 md:pt-0 md:pl-8">
                <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-concrete-500 font-bold">
                  Ano de Execução
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-foreground">
                  {project.year}
                </div>
              </div>

              <div className="space-y-1 pt-4 md:pt-0 md:pl-8">
                <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-concrete-500 font-bold">
                  Normas & Rigor
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-primary">
                  ABNT NBR 6118
                </div>
              </div>
            </div>
          </div>

          {/* EDITORIAL 2-COLUMN SPLIT: DESAFIO & SOLUÇÃO (CLEAN & AIRY) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
            {/* O DESAFIO */}
            <div className="lg:col-span-6 space-y-5">
              <SectionLabel index="01">O Desafio Estrutural</SectionLabel>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-foreground">
                Complexidade & Restrições
              </h2>
              <div className="border-l-2 border-primary pl-6 py-1">
                <p className="text-base sm:text-lg text-concrete-700 leading-relaxed italic">
                  "{project.challenge}"
                </p>
              </div>
            </div>

            {/* A SOLUÇÃO */}
            <div className="lg:col-span-6 space-y-5">
              <SectionLabel index="02">Solução & Metodologia</SectionLabel>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-foreground">
                Engenharia de Cálculo
              </h2>
              <p className="text-base sm:text-lg text-concrete-700 leading-relaxed">
                {project.solution}
              </p>

              {/* SCOPE CHECKLIST */}
              <div className="pt-4 space-y-3">
                <div className="font-sans text-xs uppercase tracking-[0.2em] text-concrete-500 font-bold">
                  Escopo de Atuação Técnica:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.scope.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs font-sans font-semibold uppercase tracking-wider text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DOCUMENTAÇÃO VISUAL / FOTOS DE CONSTRUÇÃO EM CONCRETO ARMADO */}
          {project.gallery.length > 0 && (
            <div className="space-y-8 pt-10 border-t border-foreground/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <SectionLabel index="03">Documentação Visual</SectionLabel>
                  <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-foreground mt-2">
                    Execução & Concreto Armado
                  </h2>
                </div>
                <span className="font-mono text-xs text-concrete-500 uppercase tracking-widest">
                  {project.gallery.length} Fotografias Técnicas
                </span>
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
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-background/90 text-foreground font-sans text-xs uppercase tracking-wider px-4 py-2 rounded-full font-bold shadow-md">
                        Ampliar Foto
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RECONHECIMENTO / DEPOIMENTO SE DISPONÍVEL */}
          {project.testimonial && (
            <div className="p-8 sm:p-12 bg-card border border-foreground/[0.08] rounded-sm space-y-4">
              <div className="font-sans text-xs uppercase tracking-[0.25em] text-primary font-bold">
                [RECONHECIMENTO DO CLIENTE]
              </div>
              <blockquote className="font-display font-medium text-xl sm:text-2xl md:text-3xl text-foreground leading-snug">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="text-xs sm:text-sm text-concrete-600 font-sans">
                <span className="font-bold text-foreground">{project.testimonial.author}</span> — {project.testimonial.role}
              </div>
            </div>
          )}

          {/* NAVEGAÇÃO PARA PRÓXIMA OBRA */}
          <div className="pt-8 border-t border-foreground/[0.08]">
            <Link
              to={`/projetos/${next.slug}`}
              className="group p-8 sm:p-10 bg-card border border-foreground/[0.08] hover:border-primary/40 rounded-sm flex items-center justify-between gap-6 transition-all"
            >
              <div>
                <div className="font-sans text-xs uppercase tracking-[0.2em] text-concrete-500 font-bold mb-1">
                  Próxima Obra em Destaque
                </div>
                <div className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {next.title}
                </div>
                <div className="text-xs sm:text-sm text-concrete-600 mt-1">
                  {next.type} · {next.location} · {next.area}
                </div>
              </div>
              <ArrowRight className="w-7 h-7 text-foreground group-hover:text-primary group-hover:translate-x-2 transition-all shrink-0" />
            </Link>
          </div>
        </div>

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
      </div>
    </Layout>
  );
};

export default ProjectDetail;

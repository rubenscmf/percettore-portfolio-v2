import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const partners = [
  { name: "Construtora Santa Maria", location: "Chapecó · SC", project: "Légacy Corporate & 21 Urban" },
  { name: "Construtora Embraed", location: "Itapema · SC", project: "L'atelier Concept Homes" },
  { name: "Construtora Plaenge", location: "Campinas · SP", project: "Obra Tay & Obra Authentic" },
  { name: "FG Empreendimentos", location: "Balneário Camboriú · SC", project: "Iconi Tower" },
];

const Index = () => {
  const featured = projects.slice(0, 3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle watermark text parallax
      gsap.utils.toArray<HTMLElement>(".watermark-text").forEach((el) => {
        gsap.to(el, {
          xPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Section fade-in reveals
      gsap.utils.toArray<HTMLElement>(".reveal-on-scroll").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={containerRef} className="space-y-24 md:space-y-36 pb-20">
        {/* =========================================================================
            BLOCO 1: HERO ARQUITETÔNICO EDITORIAL (REFERÊNCIA TELA 1)
        ========================================================================= */}
        <section className="relative pt-36 md:pt-48 overflow-hidden">
          {/* GIANT WATERMARK TYPOGRAPHY BACKGROUND */}
          <div className="absolute top-20 md:top-24 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
            <span className="watermark-text block font-display font-black text-[clamp(4.5rem,14vw,14rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
              estruturas de rigor materia inspired
            </span>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              {/* LEFT: EDITORIAL STATEMENT */}
              <div className="lg:col-span-7 space-y-6">
                <SectionLabel index="01">
                  Engenharia Estrutural de Alto Padrão
                </SectionLabel>

                <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.92] text-foreground uppercase">
                  Estruturas <br />
                  de <span className="text-primary">Rigor</span>.
                </h1>
              </div>

              {/* RIGHT: POSITIONING & ACTIONS */}
              <div className="lg:col-span-5 space-y-6 pb-2">
                <p className="text-base sm:text-lg text-concrete-600 font-normal leading-relaxed">
                  Atuamos como seu departamento estrutural de alta precisão:
                  eliminamos o caos de compatibilização, assumimos a responsabilidade
                  técnica do cálculo à execução e garantimos que sua obra seja entregue com máxima segurança.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-3 bg-primary hover:bg-foreground text-white px-7 py-3.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow"
                  >
                    Falar com a Percettore
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/projetos"
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary font-sans text-xs font-semibold uppercase tracking-wider px-3 py-3 transition-colors"
                  >
                    Ver Obras Entregues
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* WIDE CINEMATIC ARCHITECTURAL BANNER (INTEGRADO, ELIMINANDO O FORMATO QUADRADO) */}
            <div className="mt-12 md:mt-16 relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-sm overflow-hidden border border-foreground/[0.08] bg-concrete-900 group shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={hero}
                className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-1000"
              >
                <source src="/A_high_end_architectural_visua.mp4" type="video/mp4" />
                <img
                  src={hero}
                  alt="Estrutura de concreto armado Percettore"
                  className="w-full h-full object-cover"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8 right-5 sm:right-8 flex items-center justify-between text-white text-xs font-mono tracking-widest uppercase">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="truncate">SISTEMA ESTRUTURAL // EXECUÇÃO EM CONCRETO ARMADO</span>
                </div>
                <span className="text-primary font-bold hidden md:inline">MÁXIMA DURABILIDADE · NBR 6118</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            BLOCO 2: EFICIÊNCIA EM NÚMEROS (REFERÊNCIA TELA 1)
        ========================================================================= */}
        <section className="relative overflow-hidden reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto px-6">
            {/* SPATIAL SECTION HEADER */}
            <div className="border-b border-foreground/[0.08] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <SectionLabel index="02">
                Eficiência em Números
              </SectionLabel>
              <span className="font-mono text-xs text-concrete-500 uppercase tracking-widest">
                Indicadores Executivos · CREA Registrado
              </span>
            </div>

            {/* 4 GRAND NUMBERS GRID (BIMAT STYLE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <div className="space-y-3 border-l-2 border-primary/80 pl-6">
                <div className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tighter">
                  540k<span className="text-primary text-3xl md:text-4xl font-normal ml-1">m²</span>
                </div>
                <p className="text-sm text-concrete-600 font-medium leading-relaxed">
                  calculados e projetados em concreto armado de alta complexidade.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-foreground/20 pl-6">
                <div className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tighter">
                  128<span className="text-primary text-3xl md:text-4xl font-normal ml-1">+</span>
                </div>
                <p className="text-sm text-concrete-600 font-medium leading-relaxed">
                  obras estruturais e projetos entregues rigorosamente no prazo.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-foreground/20 pl-6">
                <div className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tighter">
                  42<span className="text-primary text-3xl md:text-4xl font-normal ml-1">eng</span>
                </div>
                <p className="text-sm text-concrete-600 font-medium leading-relaxed">
                  engenheiros calculistas e especialistas em compatibilização BIM.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-foreground/20 pl-6">
                <div className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tighter">
                  99.8<span className="text-primary text-3xl md:text-4xl font-normal ml-1">%</span>
                </div>
                <p className="text-sm text-concrete-600 font-medium leading-relaxed">
                  de precisão orçamentária e fidelidade geométrica aos projetos.
                </p>
              </div>
            </div>

            {/* SUMMARY CALLOUT BOX */}
            <div className="mt-14 p-6 sm:p-8 bg-card border border-foreground/[0.08] rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="font-display font-bold text-lg text-foreground">
                  Junte-se ao resultado de alta performance:
                </div>
                <div className="text-sm text-concrete-600">
                  Otimização de consumo de aço e fôrmas, previsibilidade para o incorporador e máxima durabilidade normativa.
                </div>
              </div>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors shrink-0"
              >
                Solicitar Estudo de Viabilidade <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            BLOCO 3: POR QUE A PERCETTORE? COM BANNER PANORÂMICO INTEGRADO (EXATO ANEXO)
        ========================================================================= */}
        <section className="relative overflow-hidden reveal-on-scroll">
          {/* GIANT WATERMARK TYPOGRAPHY */}
          <div className="absolute top-6 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
            <span className="watermark-text block font-display font-black text-[clamp(4.5rem,13vw,13rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
              por que percettore?
            </span>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 relative z-10 space-y-12">
            <div className="border-b border-foreground/[0.08] pb-6">
              <SectionLabel index="03">
                Sobre a Companhia · Manifesto Técnico
              </SectionLabel>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.98] text-foreground text-balance uppercase">
                  Concreto não perdoa <span className="text-primary">erro de cálculo</span>.
                </h2>
                <p className="text-xl sm:text-2xl text-concrete-700 font-medium leading-snug">
                  Por isso tratamos cada estrutura com máxima precisão geométrica e conformidade normativa.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-6 text-concrete-600 text-base leading-relaxed">
                <p>
                  Na base da Percettore está um background técnico real de canteiro e cálculo computacional avançado.
                  Do estudo geotécnico de fundações à última concretagem em altura, transformamos complexidade arquitetônica
                  em segurança matemática.
                </p>
                <div className="pt-2">
                  <Link
                    to="/sobre"
                    className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-primary hover:text-foreground border-b border-primary/40 pb-1 transition-all"
                  >
                    Conheça Nossa História e Valores <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* INTEGRATED PANORAMIC ARCHITECTURAL BANNER (EXATAMENTE COMO NA TELA SUPERIOR DO ANEXO) */}
            <div className="relative aspect-[21/9] sm:aspect-[24/8] w-full rounded-sm overflow-hidden border border-foreground/[0.08] shadow-sm bg-concrete-100">
              <img
                src="/architectural-panorama.jpg"
                alt="Modelagem e perspectiva estrutural urbana Percettore"
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 sm:bottom-6 sm:left-8 right-6 flex items-center justify-between text-white text-xs font-mono tracking-widest uppercase">
                <span>MODELAGEM ESTRUTURAL URBANA // BIM 4D</span>
                <span className="text-primary font-bold hidden sm:inline">ABNT NBR 6118 / 14931</span>
              </div>
            </div>

            {/* CLIENT / PARTNERS ARCHITECTURAL GRID */}
            <div className="pt-8 border-t border-foreground/[0.08]">
              <div className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-concrete-500">
                Construtoras & Parceiros que Confiam no Nosso Cálculo:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className="p-5 bg-card border border-foreground/[0.08] rounded-sm flex flex-col justify-between hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{p.location}</span>
                    </div>
                    <div className="font-display font-bold text-base text-foreground mb-1">
                      {p.name}
                    </div>
                    <div className="text-xs text-concrete-500">
                      {p.project}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            BLOCO 4: PROJETOS SELECIONADOS (REFERÊNCIA TELA 3)
        ========================================================================= */}
        <section className="relative overflow-hidden reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="border-b border-foreground/[0.08] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <SectionLabel index="04">
                  Portfólio de Engenharia
                </SectionLabel>
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-foreground mt-2">
                  Obras de Referência
                </h2>
              </div>
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors"
              >
                Ver Todas as 6 Obras <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 EDITORIAL PROJECT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            BLOCO 5: NOSSO DNA & VALORES COM ELEMENTO ESCULTURAL INTEGRADO (EXATO ANEXO INFERIOR)
        ========================================================================= */}
        <section className="relative overflow-hidden reveal-on-scroll">
          {/* GIANT WATERMARK TYPOGRAPHY */}
          <div className="absolute top-6 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
            <span className="watermark-text block font-display font-black text-[clamp(4.5rem,14vw,14rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
              nosso dna tecnico
            </span>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 relative z-10 space-y-12">
            <div className="border-b border-foreground/[0.08] pb-6">
              <SectionLabel index="05">
                Valores Inegociáveis · Nosso DNA
              </SectionLabel>
            </div>

            {/* 2-COLUMN SPLIT: TEXT/PRINCIPLES ON LEFT + FLOATING CONCRETE SCULPTURE ON RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* LEFT: EDITORIAL THESIS & 3 VALUES */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-foreground leading-[1.02]">
                    Desafios{" "}
                    <span className="inline-flex items-center align-middle mx-1 px-3 py-1 rounded-full bg-concrete-100 border border-foreground/10 text-[11px] font-mono font-bold tracking-widest text-primary shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                      BIM 4D
                    </span>{" "}
                    complexos <br />
                    moldaram nosso <span className="text-primary">DNA</span>.
                  </h2>
                  <p className="text-concrete-600 text-base md:text-lg leading-relaxed max-w-xl">
                    Nosso caminho é uma história de consistência técnica: quando o mercado impôs estruturas mais altas,
                    grandes vãos livres e solicitações dinâmicas de vento, desenvolvemos soluções de cálculo com tolerância zero para falhas.
                  </p>
                </div>

                {/* 3 CORE VALUES AS ELEGANT ROWS */}
                <div className="space-y-4 pt-2">
                  <div className="p-5 bg-card border border-foreground/[0.08] rounded-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg uppercase tracking-tight text-foreground">
                        Rigor Absoluto no Cálculo
                      </h3>
                      <p className="text-xs sm:text-sm text-concrete-600 leading-relaxed mt-1">
                        Cada modelo computacional e diagrama de armadura é revisado por uma segunda equipe sênior antes da emissão.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-card border border-foreground/[0.08] rounded-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg uppercase tracking-tight text-foreground">
                        Transparência em Canteiro
                      </h3>
                      <p className="text-xs sm:text-sm text-concrete-600 leading-relaxed mt-1">
                        O cliente e o incorporador acompanham ensaios de rompimento e evolução em ambiente BIM 4D colaborativo.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-card border border-foreground/[0.08] rounded-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg uppercase tracking-tight text-foreground">
                        Durabilidade e Desempenho Normativo
                      </h3>
                      <p className="text-xs sm:text-sm text-concrete-600 leading-relaxed mt-1">
                        Especificamos traços de concreto, cura e recobrimentos focando na máxima longevidade e durabilidade exigidas pelas normas NBR 6118 e 14931.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: FLOATING CONCRETE ARCHITECTURAL SCULPTURE (SEM QUADRO, SEM BORDA, TOTALMENTE INTEGRADA CONFORME ANEXO) */}
              <div className="lg:col-span-5 relative flex items-center justify-center py-4">
                {/* Elementos sutis de profundidade de campo (depth-of-field) do mockup */}
                <div className="absolute top-2 left-6 w-16 h-12 rounded-full bg-concrete-300/30 blur-xl pointer-events-none" />
                <div className="absolute bottom-4 right-6 w-24 h-16 rounded-full bg-concrete-400/25 blur-2xl pointer-events-none" />

                {/* Escultura orgânica de concreto integrada diretamente na página */}
                <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                  <img
                    src="/concrete-sculpture.jpg"
                    alt="Escultura em concreto estrutural bruto - Rigor Percettore"
                    className="w-full h-full object-contain mix-blend-multiply filter contrast-110 drop-shadow-sm select-none pointer-events-none"
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center pointer-events-none whitespace-nowrap">
                    <span className="font-mono text-[10px] text-concrete-500 uppercase tracking-[0.25em]">
                      [ FORMA ESTRUTURAL · CONCRETO ARMADO ]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            BLOCO 6: CTA EDITORIAL LEVE (SEM QUADRO PRETO PESADO)
        ========================================================================= */}
        <section className="relative overflow-hidden reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="p-10 sm:p-14 md:p-16 bg-card border border-foreground/[0.08] rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-sm">
              <div className="space-y-3 max-w-2xl">
                <div className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  [INICIAR DIÁLOGO TÉCNICO]
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-foreground leading-[0.98]">
                  É o momento ideal para calcular sua <span className="text-primary">estrutura</span>.
                </h2>
                <p className="text-concrete-600 text-base leading-relaxed">
                  Converse diretamente com nossos engenheiros calculistas. Analisamos seu projeto de arquitetura e fornecemos diretrizes estruturais de viabilidade.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-foreground text-white px-8 py-4 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Falar com a Percettore
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

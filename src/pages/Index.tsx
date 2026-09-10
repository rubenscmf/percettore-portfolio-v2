import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import hero from "@/assets/hero.jpg";
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
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
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
      <div ref={containerRef} className="space-y-24 md:space-y-36 pb-24">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* LEFT COLUMN: EDITORIAL STATEMENT & CTA */}
              <div className="lg:col-span-6 space-y-8">
                <SectionLabel index="01">
                  Engenharia Estrutural de Alto Padrão
                </SectionLabel>

                <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.94] text-foreground text-balance uppercase">
                  Estruturas <br />
                  de <span className="text-primary">Rigor</span>.
                </h1>

                <p className="text-lg md:text-xl text-concrete-700 font-normal leading-relaxed max-w-xl text-pretty">
                  Atuamos como seu departamento estrutural de alta precisão:
                  eliminamos o caos de compatibilização, assumimos a responsabilidade
                  técnica do cálculo à execução e garantimos que sua obra seja entregue rigorosamente no prazo.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-3 bg-primary hover:bg-foreground text-white px-7 py-4 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Calcular Meu Projeto
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/projetos"
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary font-sans text-xs font-semibold uppercase tracking-wider px-4 py-4 transition-colors"
                  >
                    Ver Obras Entregues
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: HIGH-END VIDEO / RENDER SHOWCASE */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-foreground/10 bg-concrete-100 shadow-xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={hero}
                    className="w-full h-full object-cover grayscale contrast-110"
                  >
                    <source src="/A_high_end_architectural_visua.mp4" type="video/mp4" />
                    <img
                      src={hero}
                      alt="Estrutura de concreto armado Percettore"
                      className="w-full h-full object-cover"
                    />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs font-mono tracking-wider">
                    <span>SISTEMA ESTRUTURAL // NBR 6118</span>
                    <span className="text-primary font-bold">100 ANOS DE VIDA ÚTIL</span>
                  </div>
                </div>
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
                  Otimização de consumo de aço e fôrmas, previsibilidade para o incorporador e segurança de 100 anos.
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
            BLOCO 3: POR QUE A PERCETTORE? (REFERÊNCIA TELA 2)
        ========================================================================= */}
        <section className="relative overflow-hidden reveal-on-scroll">
          {/* GIANT WATERMARK TYPOGRAPHY */}
          <div className="absolute top-8 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
            <span className="watermark-text block font-display font-black text-[clamp(4.5rem,13vw,13rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
              por que percettore?
            </span>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <div className="border-b border-foreground/[0.08] pb-6 mb-12">
              <SectionLabel index="03">
                Sobre a Companhia · Manifesto
              </SectionLabel>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.98] text-foreground text-balance uppercase">
                  Concreto não perdoa <span className="text-primary">erro de cálculo</span>.
                </h2>
                <p className="text-xl sm:text-2xl text-concrete-700 font-medium leading-snug">
                  Por isso tratamos cada estrutura como patrimônio de vida útil secular.
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

            {/* CLIENT / PARTNERS ARCHITECTURAL GRID (REFERÊNCIA TELA 2 BOTTOM) */}
            <div className="mt-16 pt-12 border-t border-foreground/[0.08]">
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
            BLOCO 5: NOSSO DNA & PRINCÍPIOS (REFERÊNCIA TELAS 4 & 5)
        ========================================================================= */}
        <section className="relative overflow-hidden reveal-on-scroll">
          {/* GIANT WATERMARK TYPOGRAPHY */}
          <div className="absolute top-8 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
            <span className="watermark-text block font-display font-black text-[clamp(4.5rem,14vw,14rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
              nosso dna tecnico
            </span>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <div className="border-b border-foreground/[0.08] pb-6 mb-12">
              <SectionLabel index="05">
                Valores Inegociáveis · Princípios
              </SectionLabel>
            </div>

            <div className="max-w-3xl mb-12 space-y-4">
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-foreground">
                Desafios complexos formaram nosso <span className="text-primary">DNA</span>.
              </h2>
              <p className="text-concrete-600 text-base md:text-lg leading-relaxed">
                Nosso caminho é uma história de consistência técnica: quando o mercado impôs estruturas mais altas,
                grandes vãos livres e solicitações dinâmicas de vento, desenvolvemos metodologias de cálculo de padrão internacional.
              </p>
            </div>

            {/* 3 PRINCIPLES CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-card border border-foreground/[0.08] rounded-sm space-y-4 hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-sm font-bold">
                  01
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground">
                  Rigor Absoluto
                </h3>
                <p className="text-sm text-concrete-600 leading-relaxed">
                  Cada modelo tridimensional e armadura é revisada por uma segunda equipe sênior antes de ser liberada para a fôrma na obra.
                </p>
              </div>

              <div className="p-8 bg-card border border-foreground/[0.08] rounded-sm space-y-4 hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-sm font-bold">
                  02
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground">
                  Transparência
                </h3>
                <p className="text-sm text-concrete-600 leading-relaxed">
                  O cliente e a construtora acompanham a evolução dos ensaios tecnológicos e a compatibilização em ambiente BIM 4D colaborativo.
                </p>
              </div>

              <div className="p-8 bg-card border border-foreground/[0.08] rounded-sm space-y-4 hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-sm font-bold">
                  03
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground">
                  Vida Útil 100 Anos
                </h3>
                <p className="text-sm text-concrete-600 leading-relaxed">
                  Especificamos traços, cura e recobrimentos focando na durabilidade centenária exigida pelas normas NBR 6118 e 14931.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            BLOCO 6: CTA DE COOPERAÇÃO (REFERÊNCIA TELA 3 BOTTOM)
        ========================================================================= */}
        <section className="relative overflow-hidden reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="p-10 md:p-16 bg-foreground text-background rounded-sm relative overflow-hidden">
              <div className="relative z-10 max-w-2xl space-y-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  [INICIAR DIÁLOGO TÉCNICO]
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-[0.95]">
                  É o momento ideal para calcular sua <span className="text-primary">estrutura</span>.
                </h2>
                <p className="text-concrete-300 text-base md:text-lg leading-relaxed">
                  Converse diretamente com nossos engenheiros estruturais. Analisamos seu projeto arquitetônico e entregamos um diagnóstico de viabilidade.
                </p>
                <div className="pt-4">
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-3 bg-primary hover:bg-white hover:text-foreground text-white px-8 py-4 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xl"
                  >
                    Falar com Engenheiro
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* WATERMARK ACCENT INSIDE CTA */}
              <div className="absolute right-[-5%] bottom-[-20%] pointer-events-none select-none opacity-5 font-display font-black text-[16rem] uppercase tracking-tighter">
                PERCETTORE
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

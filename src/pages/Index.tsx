import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedStatCounter } from "@/components/AnimatedStatCounter";
import { projects } from "@/data/projects";
import hero from "@/assets/hero.jpg";
import { animate, stagger } from "animejs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Index = () => {
  const featured = projects.slice(0, 3);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroListRef = useRef<HTMLDivElement>(null);
  const heroSvgGridRef = useRef<SVGSVGElement>(null);
  const credIndicatorsRef = useRef<HTMLDivElement>(null);

  const manifestoRef = useRef<HTMLDivElement>(null);
  const manifestoTitleRef = useRef<HTMLHeadingElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. ANIME.JS: Interactive Blueprint SVG Grid Lines & Hero Text Stagger
    if (heroSvgGridRef.current) {
      animate(heroSvgGridRef.current.querySelectorAll("path, line"), {
        strokeDashoffset: [1000, 0],
        opacity: [0, 0.4],
        duration: 2000,
        delay: stagger(150),
        ease: "outQuad",
      });
    }

    if (heroListRef.current) {
      animate(heroListRef.current.children, {
        opacity: [0, 1],
        translateX: [40, 0],
        delay: stagger(120, { start: 500 }),
        duration: 900,
        ease: "outExpo",
      });
    }

    if (heroTitleRef.current) {
      animate(heroTitleRef.current, {
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.98, 1],
        duration: 1200,
        ease: "outExpo",
      });
    }

    // 2. HERO CREDIBILITY INDICATORS SEQUENTIAL FADE-IN
    if (credIndicatorsRef.current) {
      animate(credIndicatorsRef.current.children, {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(200, { start: 1000 }),
        duration: 1000,
        ease: "outExpo",
      });
    }

    // 3. GSAP SCROLLTRIGGER: High-Impact Video Parallax & Smooth Concrete Transition
    const ctx = gsap.context(() => {
      if (heroVideoRef.current && heroSectionRef.current) {
        gsap.to(heroVideoRef.current, {
          yPercent: 18,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Manifesto high-impact reveal with smooth concrete backdrop transition
      if (manifestoRef.current) {
        gsap.fromTo(
          manifestoRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: manifestoRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Featured projects section reveal
      if (featuredRef.current) {
        gsap.fromTo(
          featuredRef.current.children,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* HERO WITH HIGH-END ARCHITECTURAL VIDEO BACKGROUND & ANIME.JS SVG BLUEPRINT */}
      <section
        ref={heroSectionRef}
        className="relative pt-20 min-h-[100vh] flex flex-col bg-concrete-900 text-background overflow-hidden"
      >
        {/* VIDEO BACKGROUND */}
        <video
          ref={heroVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={hero}
          className="absolute inset-0 w-full h-full object-cover opacity-60 will-change-transform"
        >
          <source src="/A_high_end_architectural_visua.mp4" type="video/mp4" />
          <img
            src={hero}
            alt="Estrutura de concreto armado em construção pela Percettore"
            className="w-full h-full object-cover"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-concrete-900 via-concrete-900/40 to-transparent" />

        {/* ANIME.JS VECTOR CAD/BIM BLUEPRINT OVERLAY */}
        <svg
          ref={heroSvgGridRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="5%" y1="0" x2="5%" y2="100%" stroke="#e52e3d" strokeWidth="1" strokeDasharray="1000" />
          <line x1="95%" y1="0" x2="95%" y2="100%" stroke="#ffffff" strokeWidth="1" strokeDasharray="1000" />
          <line x1="0" y1="85%" x2="100%" y2="85%" stroke="#ffffff" strokeWidth="1" strokeDasharray="1000" />
          <circle cx="5%" cy="85%" r="6" fill="none" stroke="#e52e3d" strokeWidth="1.5" />
          <circle cx="95%" cy="85%" r="6" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        </svg>

        <div className="relative z-20 container flex-1 flex flex-col justify-end pb-12 pt-32">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-9">
              <SectionLabel index="01" className="text-background/70 mb-6">
                Estruturas de Concreto Armado
              </SectionLabel>
              <h1
                ref={heroTitleRef}
                className="font-display font-extrabold text-[clamp(3rem,9vw,9rem)] leading-[0.88] tracking-tighter uppercase text-balance"
              >
                ESTRUTURAS<br />DE <span className="text-primary">RIGOR</span>.
              </h1>
            </div>
            <div className="hidden lg:block col-span-3 relative h-32">
              <div className="absolute right-0 top-0 w-px h-full bg-primary animate-line" />
              <div
                ref={heroListRef}
                className="pl-6 pt-2 font-mono text-xs uppercase tracking-[0.2em] text-background/70 leading-loose"
              >
                <div>[01] Fundação</div>
                <div>[02] Superestrutura</div>
                <div>[03] Protendido</div>
                <div>[04] Consultoria</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-12 gap-6 items-end">
            <p className="col-span-12 md:col-span-6 lg:col-span-5 text-background/80 text-lg max-w-md text-pretty">
              Engenharia de precisão em concreto armado para projetos que desafiam a gravidade e
              definem o horizonte urbano.
            </p>
            <div className="hidden md:block col-span-2 lg:col-span-4 h-px bg-background/20" />
            <Link
              to="/projetos"
              className="col-span-12 md:col-span-4 lg:col-span-3 group inline-flex items-center justify-between gap-4 bg-primary text-primary-foreground px-6 py-5 font-mono text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-concrete-900 transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              Ver Portfólio
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* CREDIBILITY INDICATORS OVERLAY WITH SEQUENTIAL FADE-IN */}
          <div
            ref={credIndicatorsRef}
            className="mt-14 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex flex-col border-l-2 border-primary pl-4">
              <span className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                15+ ANOS
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-background/80 mt-1 font-medium">
                Atuação em Projetos Estruturais
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-white/30 pl-4">
              <span className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                +540.000 m²
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-background/80 mt-1 font-medium">
                Área Total Calculada & Projetada
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-white/30 pl-4">
              <span className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                128+ OBRAS
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-background/80 mt-1 font-medium">
                Alto Padrão & Infraestrutura
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO MANIFESTO WITH CLEAN ELEGANT BACKGROUND */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-background border-b border-foreground/10 overflow-hidden">
        <div ref={manifestoRef} className="container relative z-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel index="02">Manifesto</SectionLabel>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              ref={manifestoTitleRef}
              className="font-display font-bold text-3xl sm:text-5xl md:text-6xl uppercase leading-[0.95] tracking-tight text-balance"
            >
              Concreto não perdoa <span className="text-primary">erro de cálculo</span>. Por isso
              tratamos cada estrutura como obra única.
            </h2>
            <p className="mt-6 sm:mt-8 max-w-2xl text-concrete-700 text-base sm:text-lg md:text-xl leading-relaxed text-pretty font-normal">
              A Percettore é especialista em projetar e executar estruturas de concreto armado
              de alta complexidade. Trabalhamos com construtoras, incorporadoras e indústrias que
              exigem rigor técnico, previsibilidade de prazo e durabilidade comprovada.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS (EDITORIAL GRID WITH PROJECTCARD) */}
      <section className="container py-16 sm:py-24 md:py-32">
        <div className="flex items-end justify-between border-b border-foreground/15 pb-6 mb-12 sm:mb-16">
          <div>
            <SectionLabel index="03" className="mb-3">Selecionados</SectionLabel>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight">
              Obras de Referência
            </h2>
          </div>
          <Link to="/projetos" className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors">
            Portfólio Completo <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div ref={featuredRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} totalProjects={projects.length} />
          ))}
        </div>
      </section>

      {/* TECHNICAL STATS (GSAP SCROLLTRIGGER + REACT SPRING ANIMATED COUNTERS) */}
      <section className="bg-foreground text-background py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="container grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <SectionLabel index="04" className="text-background/60 mb-4 sm:mb-6">Excelência Normativa</SectionLabel>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1] text-balance">
              Engenharia que <span className="text-primary">resiste</span> ao tempo.
            </h2>
            <p className="mt-6 sm:mt-8 text-concrete-300 max-w-md text-pretty text-sm sm:text-base">
              Atuamos rigorosamente dentro das normas NBR 6118 e NBR 14931. Cada metro cúbico de
              concreto despejado pela Percettore carrega nossa garantia de durabilidade e segurança.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-background/15 border border-background/15">
            {[
              { k: "540k", l: "Metros quadrados projetados", idx: "01" },
              { k: "128", l: "Projetos entregues", idx: "02" },
              { k: "42", l: "Engenheiros especialistas", idx: "03" },
              { k: "99.8%", l: "Precisão de escopo", idx: "04" },
            ].map((s) => (
              <AnimatedStatCounter key={s.idx} value={s.k} label={s.l} index={s.idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl tracking-tight leading-[0.95] text-balance">
              Tem um projeto que exige <span className="text-primary">rigor estrutural</span>?
            </h2>
          </div>
          <Link
            to="/contato"
            className="col-span-12 md:col-span-4 group inline-flex items-center justify-between gap-4 bg-foreground text-background px-6 py-5 sm:py-6 font-mono text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300 shadow-xl"
          >
            Iniciar Conversa
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

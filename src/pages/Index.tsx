import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { SpringCard } from "@/components/SpringCard";
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

    // 2. GSAP SCROLLTRIGGER: High-Impact Video Parallax & Text Mask Reveals
    const ctx = gsap.context(() => {
      if (heroVideoRef.current && heroSectionRef.current) {
        gsap.to(heroVideoRef.current, {
          yPercent: 15,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Manifesto high-impact reveal
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
          { opacity: 0, y: 80 },
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

        <div className="relative z-20 container flex-1 flex flex-col justify-end pb-16 pt-32">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-9">
              <SectionLabel index="01" className="text-background/70 mb-6">
                Estruturas de Concreto Armado
              </SectionLabel>
              <h1
                ref={heroTitleRef}
                className="font-display font-extrabold text-[clamp(3rem,9vw,9rem)] leading-[0.88] tracking-tighter text-balance"
              >
                ESTRUTURAS<br />DE <span className="text-primary">RIGOR</span>.
              </h1>
            </div>
            <div className="hidden lg:block col-span-3 relative h-32">
              <div className="absolute right-0 top-0 w-px h-full bg-primary animate-line" />
              <div
                ref={heroListRef}
                className="pl-6 pt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-background/70 leading-loose"
              >
                <div>[01] Fundação</div>
                <div>[02] Superestrutura</div>
                <div>[03] Protendido</div>
                <div>[04] Consultoria</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-12 gap-6 items-end">
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
        </div>
      </section>

      {/* INTRO MANIFESTO */}
      <section className="container py-32">
        <div ref={manifestoRef} className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel index="02">Manifesto</SectionLabel>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              ref={manifestoTitleRef}
              className="font-display text-4xl md:text-6xl leading-[1] tracking-tighter text-balance"
            >
              Concreto não perdoa <span className="text-primary">erro de cálculo</span>. Por isso
              tratamos cada estrutura como obra única.
            </h2>
            <p className="mt-10 max-w-2xl text-concrete-500 text-lg text-pretty">
              A Percettore é especialista em projetar e executar estruturas de concreto armado
              de alta complexidade. Trabalhamos com construtoras, incorporadoras e indústrias que
              exigem rigor técnico, previsibilidade de prazo e durabilidade comprovada.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS (REACT SPRING INTERACTIVE 3D CARDS) */}
      <section className="container pb-32">
        <div className="flex items-end justify-between border-b border-foreground/15 pb-6 mb-16">
          <div>
            <SectionLabel index="03" className="mb-3">Selecionados</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter">
              Obras de Referência
            </h2>
          </div>
          <Link to="/projetos" className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors">
            Portfólio Completo <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div ref={featuredRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {featured.map((p) => (
            <SpringCard key={p.slug}>
              <Link to={`/projetos/${p.slug}`} className="group block">
                <div className="overflow-hidden bg-concrete-100 aspect-[4/5] relative rounded-sm">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest px-2 py-1 shadow-md">
                    {p.status}
                  </span>
                </div>
                <div className="mt-6 flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="mt-1 text-sm text-concrete-500 italic">
                      {p.type} · {p.area}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-primary font-bold">{p.index}</span>
                </div>
              </Link>
            </SpringCard>
          ))}
        </div>
      </section>

      {/* TECHNICAL STATS (GSAP SCROLLTRIGGER + REACT SPRING ANIMATED COUNTERS) */}
      <section className="bg-foreground text-background py-32">
        <div className="container grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-5">
            <SectionLabel index="04" className="text-background/60 mb-6">Excelência Normativa</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[1]">
              Engenharia que <span className="text-primary">resiste</span> ao tempo.
            </h2>
            <p className="mt-8 text-concrete-300 max-w-md text-pretty">
              Atuamos rigorosamente dentro das normas NBR 6118 e NBR 14931. Cada metro cúbico de
              concreto despejado pela Percettore carrega nossa garantia de durabilidade e segurança.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-px bg-background/15 border border-background/15">
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
      <section className="container py-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-4xl md:text-7xl tracking-tighter leading-[0.95] text-balance">
              Tem um projeto que exige <span className="text-primary">rigor estrutural</span>?
            </h2>
          </div>
          <Link
            to="/contato"
            className="col-span-12 md:col-span-4 group inline-flex items-center justify-between gap-4 bg-foreground text-background px-6 py-6 font-mono text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300 shadow-xl"
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

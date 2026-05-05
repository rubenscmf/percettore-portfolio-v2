import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/data/projects";
import hero from "@/assets/hero.jpg";

const Index = () => {
  const featured = projects.slice(0, 3);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative pt-20 min-h-[100vh] flex flex-col bg-concrete-900 text-background overflow-hidden">
        <img
          src={hero}
          alt="Estrutura de concreto armado em construção pela Percettore"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50 animate-fade"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-concrete-900 via-concrete-900/40 to-transparent" />

        <div className="relative container flex-1 flex flex-col justify-end pb-16 pt-32">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-9 animate-reveal">
              <SectionLabel index="01" className="text-background/70 mb-6">
                Estruturas de Concreto Armado
              </SectionLabel>
              <h1 className="font-display font-extrabold text-[clamp(3rem,9vw,9rem)] leading-[0.88] tracking-tighter text-balance">
                ESTRUTURAS<br />DE <span className="text-primary">RIGOR</span>.
              </h1>
            </div>
            <div className="hidden lg:block col-span-3 relative h-32">
              <div className="absolute right-0 top-0 w-px h-full bg-primary animate-line" />
              <div className="pl-6 pt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-background/70 leading-loose">
                [01] Fundação<br />
                [02] Superestrutura<br />
                [03] Protendido<br />
                [04] Consultoria
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-12 gap-6 items-end animate-reveal" style={{ animationDelay: "200ms" }}>
            <p className="col-span-12 md:col-span-6 lg:col-span-5 text-background/80 text-lg max-w-md text-pretty">
              Engenharia de precisão em concreto armado para projetos que desafiam a gravidade e
              definem o horizonte urbano.
            </p>
            <div className="hidden md:block col-span-2 lg:col-span-4 h-px bg-background/20" />
            <Link
              to="/projetos"
              className="col-span-12 md:col-span-4 lg:col-span-3 group inline-flex items-center justify-between gap-4 bg-primary text-primary-foreground px-6 py-5 font-mono text-xs uppercase tracking-[0.2em] hover:bg-foreground transition-colors"
            >
              Ver Portfólio
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel index="02">Manifesto</SectionLabel>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-tighter text-balance">
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

      {/* FEATURED PROJECTS */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {featured.map((p) => (
            <Link key={p.slug} to={`/projetos/${p.slug}`} className="group block">
              <div className="overflow-hidden bg-concrete-100 aspect-[4/5] relative">
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
              <div className="mt-6 flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-xl uppercase tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-concrete-500 italic">
                    {p.type} · {p.area}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-primary">{p.index}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TECHNICAL */}
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
              { k: "540k", l: "Metros quadrados projetados" },
              { k: "128", l: "Projetos entregues" },
              { k: "42", l: "Engenheiros especialistas" },
              { k: "99.8%", l: "Precisão de escopo" },
            ].map((s, i) => (
              <div key={i} className="bg-foreground p-8 md:p-10">
                <div className="font-mono text-primary text-[11px] uppercase tracking-widest mb-3">
                  [0{i + 1}]
                </div>
                <div className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter">
                  {s.k}
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-concrete-300">
                  {s.l}
                </div>
              </div>
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
            className="col-span-12 md:col-span-4 group inline-flex items-center justify-between gap-4 bg-foreground text-background px-6 py-6 font-mono text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors"
          >
            Iniciar Conversa
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

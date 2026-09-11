import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import about from "@/assets/about.jpg";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    num: "01",
    k: "Rigor Absoluto",
    d: "Cada cálculo estrutural, diagrama de momentos e detalhamento de armaduras é revisado por uma segunda equipe sênior antes da emissão executiva.",
  },
  {
    num: "02",
    k: "Transparência Técnica",
    d: "O incorporador e a construtora acompanham ensaios de rompimento de corpos de prova e evolução geométrica em ambiente BIM 4D colaborativo.",
  },
  {
    num: "03",
    k: "Durabilidade e Desempenho",
    d: "Dimensionamos estruturas de concreto armado com foco na classe de agressividade ambiental, máxima durabilidade e conformidade rigorosa com a NBR 6118 e 14931.",
  },
];

const teamMembers = [
  {
    role: "Diretoria de Engenharia Estrutural",
    name: "Engenharia de Cálculo",
    quote: "A precisão matemática no projeto elimina imprevistos, desperdícios de fôrma e adicionais de canteiro.",
  },
  {
    role: "Coordenação BIM & Compatibilização",
    name: "Modelagem Integrada",
    quote: "Integramos arquitetura, instalações e superestrutura em modelos digitais para tolerância zero de interferências.",
  },
  {
    role: "Supervisão e Controle Tecnológico",
    name: "Controle de Campo",
    quote: "Da análise do traço e slump test à desforma final, acompanhamos o concreto em cada etapa do cronograma.",
  },
];

const About = () => (
  <Layout>
    <div className="relative pt-36 md:pt-48 pb-32 space-y-28 md:space-y-36 overflow-hidden">
      {/* WATERMARK TYPOGRAPHY */}
      <div className="absolute top-24 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <span className="block font-display font-black text-[clamp(4.5rem,14vw,14rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
          engenharia de precisao desde 2009
        </span>
      </div>

      {/* HERO / INTRO */}
      <section className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="space-y-6 max-w-4xl">
          <SectionLabel index="01">Sobre a Percettore</SectionLabel>
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.92] uppercase text-balance">
            Engenheiros de <span className="text-primary">precisão</span>, antes de tudo.
          </h1>
          <p className="text-concrete-700 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-pretty">
            A Percettore nasceu em 2009 a partir da convicção de que estruturas de concreto armado
            merecem o mesmo rigor matemático e cuidado autoral que a grande arquitetura.
          </p>
        </div>
      </section>

      {/* STORY & PHOTO SECTION (BIMAT STYLE) */}
      <section className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-foreground/[0.08] shadow-lg">
              <img
                src={about}
                alt="Equipe técnica da Percettore em inspeção estrutural"
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-4 border border-foreground/10 flex items-center justify-between text-xs font-mono">
                <span>CANTEIRO & PROJETO</span>
                <span className="text-primary font-bold">DESDE 2009</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-concrete-700 leading-relaxed">
            <p>
              Projetamos e acompanhamos a execução de estruturas para os principais grupos da construção civil
              do Sul e Sudeste do Brasil — incluindo marcos de 40 a 63 pavimentos como Légacy Corporate,
              L'atelier Concept Homes e Iconi Tower.
            </p>
            <p>
              Nosso time reúne engenheiros estruturais, calculistas e técnicos de campo trabalhando de maneira
              integrada: do estudo de solo e fundações especiais até a última laje concretada. Essa proximidade
              viabiliza decisões rápidas, economia racional de aço e fôrmas, e segurança absoluta.
            </p>
            <p>
              Investimos continuamente em softwares avançados de elementos finitos, plataformas BIM e controle
              tecnológico do concreto FCK 50-60 MPa. O resultado é previsibilidade para o incorporador e solidez secular.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES / DNA SECTION (REFERÊNCIA TELA 5) */}
      <section className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="border-b border-foreground/[0.08] pb-6 mb-12">
          <SectionLabel index="02">Nossos Princípios Fundamentais</SectionLabel>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-foreground mt-2">
            Três Valores <span className="text-primary">Inegociáveis</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.k}
              className="p-8 bg-card border border-foreground/[0.08] rounded-sm space-y-4 hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-sm font-bold">
                {v.num}
              </div>
              <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground">
                {v.k}
              </h3>
              <p className="text-sm sm:text-base text-concrete-600 leading-relaxed">
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM / LEADERSHIP SECTION (REFERÊNCIA TELA 4) */}
      <section className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="border-b border-foreground/[0.08] pb-6 mb-12">
          <SectionLabel index="03">Corpo Técnico Especializado</SectionLabel>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-foreground mt-2">
            Equipe Integrada de Engenharia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((m) => (
            <div
              key={m.role}
              className="p-8 bg-card border border-foreground/[0.08] rounded-sm space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="font-sans text-xs uppercase tracking-wider text-primary font-bold mb-2">
                  {m.role}
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground">
                  {m.name}
                </h3>
              </div>
              <blockquote className="pt-4 border-t border-foreground/[0.06] text-sm text-concrete-600 italic leading-relaxed">
                "{m.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="p-10 md:p-14 bg-foreground text-background rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight">
              Pronto para planejar sua estrutura?
            </h3>
            <p className="text-concrete-300 text-sm sm:text-base">
              Apresente seu projeto de arquitetura para nossa equipe e receba um direcionamento estrutural completo.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 bg-primary hover:bg-white hover:text-foreground text-white px-7 py-4 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0"
          >
            Falar com a Percettore <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  </Layout>
);

export default About;

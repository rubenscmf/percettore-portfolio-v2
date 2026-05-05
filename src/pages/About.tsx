import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import about from "@/assets/about.jpg";

const values = [
  { k: "Rigor", d: "Cada cálculo é revisado por uma segunda equipe antes da emissão." },
  { k: "Transparência", d: "Cliente acompanha em tempo real o cronograma e os ensaios tecnológicos." },
  { k: "Durabilidade", d: "Especificamos concretos e detalhamentos pensando em 100 anos de vida útil." },
];

const About = () => (
  <Layout>
    <section className="container pt-40 pb-16">
      <SectionLabel index="01" className="mb-6">Sobre</SectionLabel>
      <h1 className="font-display text-5xl md:text-8xl tracking-tighter leading-[0.92] text-balance">
        Engenheiros de <span className="text-primary">precisão</span>, antes de tudo.
      </h1>
    </section>

    <section className="container pb-32 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-5">
        <div className="aspect-[4/5] overflow-hidden bg-concrete-100">
          <img src={about} alt="Equipe Percettore em obra" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 md:pl-8 space-y-8 text-lg text-concrete-700 text-pretty leading-relaxed">
        <p>
          A Percettore nasceu em 2009 a partir da convicção de que estruturas de concreto armado
          merecem o mesmo cuidado autoral que a arquitetura. Desde então, projetamos e executamos
          obras para os principais grupos de construção do Sul do Brasil.
        </p>
        <p>
          Nosso time reúne engenheiros estruturais, calculistas e técnicos de campo que trabalham
          de maneira integrada — do anteprojeto à última concretagem. Essa proximidade permite
          decisões mais rápidas e estruturas mais econômicas, sem abrir mão da segurança.
        </p>
        <p>
          Investimos continuamente em modelagem BIM, ensaios de durabilidade e formação técnica.
          O resultado é uma engenharia que entrega previsibilidade ao incorporador e tranquilidade
          ao usuário final.
        </p>
      </div>
    </section>

    <section className="bg-foreground text-background py-32">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <SectionLabel index="02" className="text-background/60 mb-6">Princípios</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[1]">
            Três valores <span className="text-primary">inegociáveis</span>.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-background/15 border border-background/15">
          {values.map((v, i) => (
            <div key={v.k} className="bg-foreground p-8 md:p-10">
              <div className="font-mono text-primary text-[11px] uppercase tracking-widest mb-4">
                [0{i + 1}]
              </div>
              <h3 className="font-display text-3xl mb-4">{v.k}</h3>
              <p className="text-sm text-concrete-300 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

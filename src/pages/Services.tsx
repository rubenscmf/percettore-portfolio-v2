import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";

const services = [
  {
    k: "Projeto Estrutural",
    d: "Cálculo e detalhamento completo de superestruturas em concreto armado, protendido e misto — com modelagem BIM integrada.",
    items: ["Anteprojeto e estudo de viabilidade", "Modelagem BIM (Revit / TQS)", "Detalhamento executivo", "Compatibilização multidisciplinar"],
  },
  {
    k: "Execução de Estruturas",
    d: "Construção da estrutura sob nossa responsabilidade técnica integral, com equipe própria e controle tecnológico.",
    items: ["Fôrmas, armação e concretagem", "Concreto aparente arquitetônico", "Estruturas pré-moldadas", "Controle tecnológico do concreto"],
  },
  {
    k: "Fundações Especiais",
    d: "Soluções para terrenos complexos, cargas elevadas e ambientes agressivos — do estudo geotécnico à execução.",
    items: ["Estacas escavadas e hélice contínua", "Tubulões e sapatas profundas", "Blocos de coroamento monolíticos", "Reforços de fundação"],
  },
  {
    k: "Consultoria & Perícia",
    d: "Análise técnica, recuperação estrutural e laudos para edificações existentes, históricas ou em risco.",
    items: ["Inspeção e diagnóstico estrutural", "Reforço com fibras e chapas", "Pareceres e laudos técnicos", "Acompanhamento de retrofit"],
  },
];

const Services = () => (
  <Layout>
    <section className="container pt-40 pb-16">
      <SectionLabel index="01" className="mb-6">Serviços</SectionLabel>
      <h1 className="font-display text-5xl md:text-8xl tracking-tighter leading-[0.92] text-balance">
        Quatro frentes, uma <span className="text-primary">disciplina</span>.
      </h1>
      <p className="mt-8 max-w-2xl text-concrete-500 text-lg text-pretty">
        Cobrimos todo o ciclo da estrutura — do estudo de viabilidade à última concretagem.
      </p>
    </section>

    <section className="container pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
        {services.map((s, i) => (
          <article key={s.k} className="bg-background p-10 md:p-14 group hover:bg-foreground hover:text-background transition-colors duration-500">
            <div className="font-mono text-primary text-[11px] uppercase tracking-widest mb-6">
              [0{i + 1}]
            </div>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4">{s.k}</h2>
            <p className="text-concrete-500 group-hover:text-concrete-300 text-pretty mb-8">
              {s.d}
            </p>
            <ul className="space-y-2 font-mono text-[11px] uppercase tracking-widest">
              {s.items.map((it) => (
                <li key={it} className="flex gap-3">
                  <span className="text-primary">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;

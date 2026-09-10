import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    k: "Projeto Estrutural",
    d: "Cálculo e detalhamento completo de superestruturas em concreto armado, protendido e misto — com modelagem BIM 4D integrada e ensaios virtuais.",
    items: [
      "Anteprojeto e estudo de viabilidade técnico-econômica",
      "Modelagem e compatibilização em BIM (Revit / TQS)",
      "Detalhamento executivo milimétrico de armaduras",
      "Análise de estabilidade global e ações de vento em túnel virtual",
    ],
  },
  {
    num: "02",
    k: "Execução de Estruturas",
    d: "Construção e acompanhamento de obra sob nossa responsabilidade técnica integral, com controle tecnológico rigoroso em cada concretagem.",
    items: [
      "Gerenciamento de fôrmas, escoramentos e armação",
      "Concreto aparente arquitetônico e desforma assistida",
      "Estruturas pré-moldadas e protendidas in loco",
      "Controle tecnológico do concreto FCK 50 a 60 MPa",
    ],
  },
  {
    num: "03",
    k: "Fundações Especiais",
    d: "Soluções geotécnicas para terrenos desafiadores, cargas monumentais e contenções urbanas — da sondagem à execução de estacas e blocos.",
    items: [
      "Estacas escavadas de grande diâmetro e hélice contínua",
      "Tubulões a céu aberto e sapatas profundas",
      "Blocos de coroamento monolíticos de alta rigidez",
      "Cortinas de contenção e tirantes protendidos",
    ],
  },
  {
    num: "04",
    k: "Consultoria & Perícia",
    d: "Diagnósticos minuciosos, laudos periciais de engenharia, ensaios não destrutivos e reforço estrutural para patrimônios e edificações de grande porte.",
    items: [
      "Inspeção técnica e esclerometria / ultrassom",
      "Reforço com fibra de carbono e perfis metálicos",
      "Pareceres técnicos para retrofit e ampliações",
      "Acompanhamento e perícia técnica judicial / extrajudicial",
    ],
  },
];

const Services = () => (
  <Layout>
    <div className="relative pt-36 md:pt-48 pb-32 space-y-24 md:space-y-32 overflow-hidden">
      {/* WATERMARK TYPOGRAPHY */}
      <div className="absolute top-24 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <span className="block font-display font-black text-[clamp(4.5rem,14vw,14rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
          quatro frentes uma disciplina
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="space-y-6 max-w-3xl mb-16">
          <SectionLabel index="01">Serviços & Soluções Técnicas</SectionLabel>
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.92] text-balance">
            Quatro frentes, uma <span className="text-primary">disciplina</span>.
          </h1>
          <p className="text-concrete-700 text-lg sm:text-xl leading-relaxed">
            Cobrimos o ciclo integral da estrutura de concreto armado: do estudo de viabilidade geotécnica
            ao cálculo milimétrico e acompanhamento no canteiro de obras.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((s) => (
            <article
              key={s.k}
              className="p-8 sm:p-12 bg-card border border-foreground/[0.08] hover:border-primary/40 rounded-sm flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-sm font-bold">
                    {s.num}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-concrete-500">
                    ABNT NBR 6118 / 14931
                  </span>
                </div>

                <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-foreground mb-4 group-hover:text-primary transition-colors">
                  {s.k}
                </h2>

                <p className="text-concrete-600 text-base leading-relaxed mb-8">
                  {s.d}
                </p>

                <div className="pt-6 border-t border-foreground/[0.06] space-y-3">
                  <div className="font-sans text-xs uppercase tracking-[0.2em] text-concrete-500 font-bold mb-3">
                    Escopo de Entrega:
                  </div>
                  <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-concrete-700">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-foreground/[0.06]">
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors"
                >
                  Consultar sobre este serviço <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 p-10 md:p-14 bg-foreground text-background rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight">
              Precisa de um cálculo ou parecer sob medida?
            </h3>
            <p className="text-concrete-300 text-sm sm:text-base">
              Nossos especialistas analisam as peculiaridades da sua obra com total sigilo e agilidade.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 bg-primary hover:bg-white hover:text-foreground text-white px-7 py-4 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0"
          >
            Falar com Engenheiro <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default Services;

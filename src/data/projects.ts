export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  status: "Executado" | "Em Curso";
  year: string;
  location: string;
  area: string;
  type: string;
  cover: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  scope: string[];
  testimonial?: { quote: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "legacy-corporate",
    index: "01",
    title: "Légacy Corporate",
    category: "Comercial e Corporativo",
    status: "Executado",
    year: "2025",
    location: "Chapecó, SC",
    area: "51.772,49 m²",
    type: "40 Pavimentos · Concreto Armado",
    cover: "/Obra Legacy/WhatsApp Image 2026-07-29 at 10.57.13.jpeg",
    gallery: [
      "/Obra Legacy/WhatsApp Image 2026-07-29 at 10.57.13.jpeg",
      "/Obra Legacy/WhatsApp Image 2026-07-29 at 10.57.14 (1).jpeg",
      "/Obra Legacy/WhatsApp Image 2026-07-29 at 10.57.15.jpeg",
    ],
    summary:
      "Empreendimento corporativo monumental com 51.772,49 m² de área construída e 40 pavimentos, assinado pela Construtora Santa Maria.",
    challenge:
      "Executar o cálculo estrutural de alta precisão para uma torre de 40 pavimentos com grande núcleo de rigidez e otimização de fôrmas em velocidade acelerada.",
    solution:
      "Desenvolvimento de modelo tridimensional computacional com concreto C50 e sistema de fôrmas otimizadas, garantindo rigidez lateral com consumo eficiente de armaduras de aço.",
    scope: [
      "Projeto Estrutural Completo",
      "Modelagem BIM 4D",
      "Compatibilização Multidisciplinar",
      "Controle Tecnológico do Concreto",
    ],
    testimonial: {
      quote:
        "A engenharia estrutural da Percettore foi decisiva para viabilizar a imponência e o cronograma do Légacy Corporate.",
      author: "Eng. Construtora Santa Maria",
      role: "Diretoria de Engenharia",
    },
  },
  {
    slug: "latelier-concept-homes",
    index: "02",
    title: "L'atelier Concept Homes",
    category: "Residencial Vertical",
    status: "Em Curso",
    year: "2026",
    location: "Itapema, SC",
    area: "37.850,68 m²",
    type: "63 Pavimentos · Concreto Armado High-Rise",
    cover: "/Obra Latelie/WhatsApp Image 2026-07-28 at 16.02.38 (2).jpeg",
    gallery: [
      "/Obra Latelie/WhatsApp Image 2026-07-28 at 16.02.38 (2).jpeg",
      "/Obra Latelie/WhatsApp Image 2026-07-28 at 16.02.39 (1).jpeg",
      "/Obra Latelie/WhatsApp Image 2026-07-28 at 16.02.39.jpeg",
    ],
    summary:
      "Arranha-céu residencial de altíssimo luxo com 63 pavimentos e 37.850,68 m² de área construída pela Construtora Embraed em Itapema, SC.",
    challenge:
      "Desafiar a gravidade e as ações dinâmicas de vento na orla catarinense em um edifício esbelto de 63 andares.",
    solution:
      "Dimensionamento de núcleo rígido central contínuo, lajes de alto desempenho e concreto de ultra alta resistência FCK 60 MPa com bombeamento vertical especializado.",
    scope: [
      "Cálculo Estrutural High-Rise",
      "Análise de Vento em Túnel de Vento",
      "Modelagem em Elementos Finitos",
      "Acompanhamento Técnico em Canteiro",
    ],
  },
  {
    slug: "obra-tay",
    index: "03",
    title: "Obra Tay",
    category: "Residencial Vertical",
    status: "Executado",
    year: "2025",
    location: "Campinas, SP",
    area: "29.906,16 m²",
    type: "29 Pavimentos · Concreto Armado",
    cover: "/Obra Tay/WhatsApp Image 2026-07-29 at 12.01.01.jpeg",
    gallery: [
      "/Obra Tay/WhatsApp Image 2026-07-29 at 12.01.01.jpeg",
      "/Obra Tay/WhatsApp Image 2026-07-29 at 12.01.02 (1).jpeg",
      "/Obra Tay/WhatsApp Image 2026-07-29 at 12.01.02.jpeg",
    ],
    summary:
      "Empreendimento residencial de alto padrão da Construtora Plaenge em Campinas, totalizando 29.906,16 m² e 29 pavimentos.",
    challenge:
      "Garantir plantas funcionais flexíveis com vãos livres amplos e eliminação de interferências de pilares em garagens e áreas comuns.",
    solution:
      "Projeto com lajes protendidas e pilares estrategicamente integrados à arquitetura, maximizando as vagas de garagem e o aproveitamento útil dos apartamentos.",
    scope: [
      "Projeto Estrutural em Concreto Armado",
      "Detalhamento de Lajes Protendidas",
      "Compatibilização BIM",
    ],
  },
  {
    slug: "obra-authentic",
    index: "04",
    title: "Obra Authentic",
    category: "Residencial Vertical",
    status: "Executado",
    year: "2024",
    location: "Campinas, SP",
    area: "12.000,00 m²",
    type: "28 Pavimentos · Concreto Armado",
    cover: "/Obra Authentic/WhatsApp Image 2026-07-29 at 11.53.52.jpeg",
    gallery: [
      "/Obra Authentic/WhatsApp Image 2026-07-29 at 11.53.52.jpeg",
      "/Obra Authentic/WhatsApp Image 2026-07-29 at 11.53.53 (1).jpeg",
      "/Obra Authentic/WhatsApp Image 2026-07-29 at 11.53.53 (2).jpeg",
    ],
    summary:
      "Torre residencial contemporânea desenvolvida pela Construtora Plaenge em Campinas, com 28 pavimentos e 12.000 m².",
    challenge:
      "Desenvolver estrutura esbelta com excelente resposta estrutural a esforços cortantes e de flexão.",
    solution:
      "Otimização de consumo de aço e fôrmas, resultando em precisão construtiva e previsibilidade de prazos.",
    scope: [
      "Projeto de Engenharia Estrutural",
      "Detalhamento Executivo de Armaduras",
      "Acompanhamento de Concretagem",
    ],
  },
  {
    slug: "21-urban-home",
    index: "05",
    title: "21 Urban Home",
    category: "Residencial e Comercial",
    status: "Executado",
    year: "2024",
    location: "Chapecó, SC",
    area: "9.377,98 m²",
    type: "Concreto Armado de Alta Resistência",
    cover: "/Obra 21/1.jpg",
    gallery: [
      "/Obra 21/1.jpg",
    ],
    summary:
      "Edifício de uso misto (residencial e comercial) com 9.377,98 m² assinado pela Construtora Santa Maria.",
    challenge:
      "Harmonizar a transição estrutural do embasamento comercial para o corpo residencial da torre sem perdas de espaço útil.",
    solution:
      "Vigas de transição de grande capacidade com concreto de alto desempenho e armações densas devidamente detalhadas.",
    scope: [
      "Projeto Estrutural",
      "Dimensionamento de Vigas de Transição",
      "Consultoria de Fôrmas",
    ],
  },
  {
    slug: "iconi-tower",
    index: "06",
    title: "Iconi Tower",
    category: "Residencial e Comercial",
    status: "Em Curso",
    year: "2026",
    location: "Balneário Camboriú, SC",
    area: "2.400,00 m²",
    type: "57 Pavimentos · Concreto Armado",
    cover: "/Obra Iconi/1.jpg",
    gallery: [
      "/Obra Iconi/1.jpg",
    ],
    summary:
      "Arranha-céu icônico de 57 pavimentos projetado para a FG Empreendimentos no litoral catarinense.",
    challenge:
      "Garantir rigidez e estabilidade global para torre esbelta de 57 andares em terreno urbano nobre.",
    solution:
      "Cálculo estrutural avançado com análise de segunda ordem e otimização geométrica de pilares.",
    scope: [
      "Projeto de Estrutura de Concreto Armado",
      "Análise Global de Estabilidade",
      "Compatibilização BIM 4D",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

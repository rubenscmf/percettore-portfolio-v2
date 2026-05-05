import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

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
    slug: "edificio-vertice",
    index: "01",
    title: "Edifício Vértice",
    category: "Residencial Vertical",
    status: "Executado",
    year: "2024",
    location: "Curitiba, PR",
    area: "14.500 m²",
    type: "Laje Nervurada Protendida",
    cover: p1,
    gallery: [p1, p3, p6],
    summary:
      "Torre residencial de 28 pavimentos com núcleo de rigidez central e lajes de grande vão livre.",
    challenge:
      "Projetar uma estrutura esbelta capaz de absorver cargas de vento significativas em terreno urbano restrito, garantindo apartamentos com plantas livres de pilares.",
    solution:
      "Adotamos lajes nervuradas protendidas com vãos de até 12m e núcleo central de rigidez em concreto C50, otimizando armaduras com modelagem em ETABS.",
    scope: [
      "Projeto estrutural completo",
      "Compatibilização BIM",
      "Acompanhamento técnico de obra",
      "Controle tecnológico do concreto",
    ],
    testimonial: {
      quote:
        "A precisão técnica da Percettore reduziu nosso prazo de execução em 18% sem comprometer a segurança.",
      author: "Eng. Roberto Saldanha",
      role: "Diretor de Obras — Construtora Lumen",
    },
  },
  {
    slug: "complexo-logistico-sul",
    index: "02",
    title: "Complexo Logístico Sul",
    category: "Industrial",
    status: "Em Curso",
    year: "2025",
    location: "Joinville, SC",
    area: "42.000 m²",
    type: "Pré-moldados in loco",
    cover: p2,
    gallery: [p2, p4, p1],
    summary:
      "Centro de distribuição com vãos livres de 32m e pé-direito de 14m para operação automatizada.",
    challenge:
      "Eliminar pilares intermediários em uma área de 42 mil metros quadrados, viabilizando a operação de empilhadeiras autônomas.",
    solution:
      "Sistema de pórticos pré-moldados in loco com vigas de seção variável e tirantes de aço protendido.",
    scope: [
      "Estrutura pré-moldada",
      "Fundações em estaca hélice contínua",
      "Pisos industriais de alta performance",
    ],
  },
  {
    slug: "sede-administrativa-x",
    index: "03",
    title: "Sede Administrativa X",
    category: "Corporativo",
    status: "Executado",
    year: "2023",
    location: "São Paulo, SP",
    area: "8.500 m²",
    type: "Concreto Aparente",
    cover: p3,
    gallery: [p3, p1, p6],
    summary:
      "Sede corporativa com fachada em concreto aparente e estrutura metálica integrada.",
    challenge:
      "Entregar acabamento arquitetônico de fachada-estrutura, sem revestimentos, exigindo controle dimensional milimétrico.",
    solution:
      "Formas metálicas calandradas e traço de concreto auto-adensável especialmente formulado em parceria com o fornecedor.",
    scope: ["Projeto estrutural", "Concreto arquitetônico", "Consultoria de fôrmas"],
  },
  {
    slug: "ponte-rio-claro",
    index: "04",
    title: "Ponte Rio Claro",
    category: "Infraestrutura",
    status: "Executado",
    year: "2022",
    location: "Florianópolis, SC",
    area: "320 m de extensão",
    type: "Vigas protendidas",
    cover: p5,
    gallery: [p5, p2],
    summary:
      "Travessia urbana com tabuleiro em vigas protendidas e pilares submersos em concreto de alta durabilidade.",
    challenge: "Construir em ambiente fluvial com restrições ambientais severas e janelas de execução curtas.",
    solution: "Pré-fabricação completa em canteiro avançado e içamento sincronizado de segmentos de 80 toneladas.",
    scope: ["Cálculo estrutural", "Pré-fabricação", "Montagem de segmentos"],
  },
  {
    slug: "garagem-helicoidal",
    index: "05",
    title: "Garagem Helicoidal Eixo",
    category: "Mobilidade",
    status: "Executado",
    year: "2024",
    location: "Porto Alegre, RS",
    area: "11.200 m²",
    type: "Rampa contínua em concreto armado",
    cover: p6,
    gallery: [p6, p3, p1],
    summary:
      "Edifício-garagem com rampa helicoidal contínua e laje em balanço progressivo.",
    challenge: "Compatibilizar geometria curva contínua com cargas dinâmicas de veículos pesados.",
    solution:
      "Modelagem paramétrica integrada ao detalhamento de armaduras, executada por braços robóticos.",
    scope: ["Projeto estrutural paramétrico", "Detalhamento robótico", "Acompanhamento de obra"],
  },
  {
    slug: "fundacoes-torre-marina",
    index: "06",
    title: "Fundações Torre Marina",
    category: "Fundações Especiais",
    status: "Em Curso",
    year: "2025",
    location: "Balneário Camboriú, SC",
    area: "Bloco 38 x 38 m",
    type: "Estacas escavadas Ø1,80m",
    cover: p4,
    gallery: [p4, p1],
    summary:
      "Fundações profundas para torre de 220m em terreno arenoso a 200m do mar.",
    challenge: "Garantir capacidade de carga em solo de baixa coesão sob ação cíclica de marés.",
    solution:
      "Estacas escavadas com fluido estabilizante e bloco de coroamento monolítico de 4,2m de altura.",
    scope: ["Projeto geotécnico", "Estacas escavadas", "Bloco monolítico protendido"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

import {
  Zap,
  Search,
  CheckCircle,
  ShieldCheck,
  HeartHandshake,
  BadgeDollarSign,
  Clock,
  Globe,
  Server,
} from "lucide-react";

export const features: Feature[] = [
  {
    iconPath: "/img/icons/check-cicle-icon.svg",
    alt: "Ícone de check",
    text: "Entrega rápida",
  },
  {
    iconPath: "/img/icons/graph-icon.svg",
    alt: "Ícone de gráfico",
    text: "Páginas otimizadas",
  },
  {
    iconPath: "/img/icons/check-shield-icon.svg",
    alt: "Ícone de escudo",
    text: "Você satisfeito ou seu dinheiro de volta",
  },
];

export const customerTestimonialsList: Testemonial[] = [
  {
    name: "Maria Costa",
    job: "Advogada",
    quote:
      "Em 2 semanas meu site estava no ar e já comecei a receber pedidos pelo WhatsApp. Valeu cada centavo!",
    stars: 5,
  },
  {
    name: "João Silva",
    job: "Restaurante",
    quote:
      "Em 2 semanas meu site estava no ar e já comecei a receber pedidos pelo WhatsApp. Valeu cada centavo!",
    stars: 5,
  },
  {
    name: "Ana Lima",
    job: "Consultoria",
    quote:
      "Em 2 semanas meu site estava no ar e já comecei a receber pedidos pelo WhatsApp. Valeu cada centavo!",
    stars: 5,
  },
  {
    name: "Carlos Costa",
    job: "Empresário",
    quote:
      "Em 2 semanas meu site estava no ar e já comecei a receber pedidos pelo WhatsApp. Valeu cada centavo!",
    stars: 5,
  },
];

export const companiesThatTrustedMeList: CompaniesThatTrustedMe[] = [
  {
    name: "Perreira e Zanatta Advogados",
    logoUrl: "https://projeto-pereira-e-zanatta-advogados.vercel.app/logo.webp",
  },
  {
    name: "Perreira e Zanatta Advogados",
    logoUrl: "https://projeto-pereira-e-zanatta-advogados.vercel.app/logo.webp",
  },
  {
    name: "Perreira e Zanatta Advogados",
    logoUrl: "https://projeto-pereira-e-zanatta-advogados.vercel.app/logo.webp",
  },
];

export const firstBenefits: BenefitCard[] = [
  {
    icon: CheckCircle,
    title: "Responsivo",
    description:
      "Perfeito em mobile, tablet e desktop. Seu site fica bom em qualquer tela.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Garantida",
    description:
      "Certificado SSL e proteção contra ameaças. Seu site seguro 24/7.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Técnico",
    description:
      "Estou aqui para ajudar. Suporte rápido para qualquer dúvida ou problema.",
  },
  {
    icon: Clock,
    title: "Entrega em 7 dias",
    description: "Protótipo em 48h, entrega final garantida em uma semana.",
  },
  {
    icon: Globe,
    title: "Domínio grátis",
    description: "Registre seu domínio sem custo adicional no primeiro ano.",
  },
  {
    icon: Server,
    title: "Hospedagem grátis",
    description: "Hospede seu site com desempenho otimizado sem custo inicial.",
  },
];

export const secondBenefits: BenefitCard[] = [
  {
    icon: Zap,
    title: "Site Rápido",
    description:
      "PageSpeed acima de 90. Seu site carrega tão rápido que os visitantes não saem antes de converter.",
  },
  {
    icon: BadgeDollarSign,
    title: "Copy Otimizada",
    description:
      "Cada palavra é pensada para vender. Textos que convertem visitantes em clientes.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Estrutura otimizada para buscadores. Apareça nos resultados onde seus clientes procuram.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Briefing",
    duration: "24 horas",
    description:
      "Entendo seu negócio, seu público e seus objetivos. Coletamos todas as informações necessárias para criar o site perfeito.",
    items: [
      "Chamada strategy de 30 min",
      "Levantamento de requisitos",
      "Análise de concorrentes",
      "Definição de personas",
    ],
  },
  {
    number: "02",
    title: "Prototipação",
    duration: "48 horas",
    description:
      "Crio wireframes e protótipos interativos. Você vê exatamente como o site vai ficar antes da codificação.",
    items: [
      "Design mockups",
      "Protótipo interativo",
      "Validação do layout",
      "Aprovação do design",
    ],
  },
  {
    number: "03",
    title: "Desenvolvimento",
    duration: "5 dias",
    description:
      "Codifico o site com as melhores práticas. Responsivo, otimizado e pronto para vender.",
    items: [
      "Código limpo e otimizado",
      "Integração de ferramentas",
      "Testes de funcionalidade",
      "Otimização de performance",
    ],
  },
  {
    number: "04",
    title: "Entrega",
    duration: "1 dia",
    description:
      "Site no ar e funcionando perfeitamente. Domínio configurado, hospedagem ativa, tudo pronto.",
    items: [
      "Deploy em produção",
      "Testes finais",
      "Configuração de domínio",
      "Documentação entregue",
    ],
  },
  {
    number: "05",
    title: "Ajustes & Suporte",
    duration: "30 dias",
    description:
      "Acompanhamento completo. Qualquer dúvida ou ajuste, estou à disposição por 30 dias.",
    items: [
      "Suporte via WhatsApp",
      "Monitoramento 24/7",
      "Ajustes ilimitados",
      "Otimizações extras",
    ],
  },
];

import {
  BadgeDollarSign,
  CheckCircle,
  Clock,
  Globe,
  HeartHandshake,
  Search,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react"

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
]

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
]

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
]

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
]

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
]

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
]

export const pricingPlans: PricingPlan[] = [
  {
    name: "Básico",
    price: "499",
    cents: ",90",
    features: [
      { text: "Site profissional publicado e funcionando", included: true },
      {
        text: "Até 3 seções estratégicas (Home, Sobre e Contato, por exemplo)",
        included: true,
      },
      { text: "Domínio gratuito por 1 ano", included: true },
      { text: "Hospedagem rápida e segura por 1 ano", included: true },
      { text: "Design responsivo (desktop e celular)", included: true },
      { text: "Suporte técnico por 7 dias após entrega", included: true },
      { text: "Integração com redes sociais", included: false },
      { text: "Email profissional personalizado", included: false },
      { text: "Formulários de captação de leads", included: false },
      { text: "Automação de emails", included: false },
      {
        text: "Otimização básica para mecanismos de busca (SEO)",
        included: false,
      },
    ],
    buttonText: "Contratar Agora",
    buttonVariant: "default",
  },
  {
    name: "Intermediário",
    price: "899",
    cents: ",90",
    isPopular: true,
    features: [
      { text: "Site profissional publicado e funcionando", included: true },
      { text: "Até 6 seções focadas em conversão", included: true },
      { text: "Domínio gratuito por 1 ano", included: true },
      { text: "Hospedagem rápida e segura por 1 ano", included: true },
      { text: "Design responsivo e otimizado para mobile", included: true },
      { text: "Suporte técnico por 30 dias após entrega", included: true },
      { text: "Integração com redes sociais", included: true },
      { text: "Email profissional personalizado", included: false },
      { text: "Formulários de captação de leads", included: false },
      { text: "Automação de emails", included: false },
      {
        text: "Otimização básica para mecanismos de busca (SEO)",
        included: false,
      },
    ],
    buttonText: "Contratar Agora",
    buttonVariant: "primary",
  },
  {
    name: "Avançado",
    price: "1.499",
    cents: ",90",
    features: [
      { text: "Site profissional publicado e funcionando", included: true },
      { text: "Até 10 seções personalizadas", included: true },
      { text: "Domínio gratuito por 1 ano", included: true },
      {
        text: "Hospedagem de alta performance gratuita por 1 ano",
        included: true,
      },
      {
        text: "Design responsivo, otimizado para mobile e focado em conversão",
        included: true,
      },
      { text: "Suporte por 2 meses", included: true },
      { text: "Integração com redes sociais", included: true },
      { text: "Email profissional personalizado", included: true },
      { text: "Formulários de captação de leads", included: true },
      { text: "Automação de emails", included: true },
      {
        text: "Otimização básica para mecanismos de busca (SEO)",
        included: true,
      },
    ],
    buttonText: "Contratar Agora",
    buttonVariant: "default",
  },
  {
    name: "Sob Consulta",
    price: "",
    cents: "",
    isCustom: true,
    features: [
      {
        text: "Precisa de algo maior? Vamos conversar!",
        included: true,
      },
      { text: "Projeto sob medida e personalizado", included: true },
      { text: "Funcionalidades definidas conforme o projeto", included: true },
      {
        text: "Integrações avançadas com APIs e serviços externos",
        included: true,
      },
      { text: "Suporte prioritário", included: true },
      { text: "Prazos e investimento personalizados", included: true },
    ],
    buttonText: "Falar Comigo Sobre Projeto Especial",
    buttonVariant: "custom",
  },
]

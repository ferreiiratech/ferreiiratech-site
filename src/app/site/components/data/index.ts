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
    name: "Juscogens",
    logoUrl: "/img/companies/juscogens.png",
  },
  {
    name: "Perreira e Zanatta Advogados",
    logoUrl: "/img/companies/pereira-e-zanatta-advogados.png",
  },
  {
    name: "PixPro IA",
    logoUrl: "/img/companies/pixpro-logo.png",
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
      "Entendo seu negócio, seu público e seus objetivos. Coleto todas as informações necessárias para criar o site perfeito para você.",
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
      "Design mockups no Figma",
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
      "Acompanhamento completo. Qualquer dúvida ou ajuste, estou à disposição por até 30 dias.",
    items: [
      "Suporte via WhatsApp",
      "Monitoramento 24/7",
      "Ajustes menores",
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
    price: "1.599",
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

export const faqData: FAQItem[] = [
  {
    question: "Quanto tempo leva para meu site ficar pronto?",
    answer:
      "O prazo médio é de 7 a 10 dias úteis do primeiro contato até o site estar 100% funcional e no ar. Sites mais simples podem ficar prontos em 5 dias, enquanto projetos mais complexos podem levar até 15 dias.",
  },
  {
    question: "O que está incluído no suporte?",
    answer:
      "O suporte inclui: correção de bugs, ajustes de texto e imagens, dúvidas sobre o uso do site, pequenas alterações de layout e suporte técnico via WhatsApp. NÃO inclui: adição de novas funcionalidades ou seções completas.",
  },
  {
    question: "E depois que o suporte acabar?",
    answer:
      "Após o período de suporte, você pode contratar manutenções avulsas (a partir de R$ 50) ou um plano de manutenção mensal (a partir de R$ 150/mês). Também posso te ensinar a fazer alterações básicas sozinho.",
  },
  {
    question: "Preciso pagar domínio e hospedagem todo ano?",
    answer:
      "O primeiro ano está incluso no seu plano. Após 12 meses, você paga apenas a renovação do domínio (cerca de R$ 40/ano) e hospedagem (cerca de R$ 15-30/mês dependendo do plano). Eu te ajudo com o processo.",
  },
  {
    question: "O site é meu ou fica com você?",
    answer:
      "O site é 100% seu! Transfiro todos os acessos (domínio, hospedagem, código-fonte) para você após o pagamento final. Você tem total controle e propriedade do seu site.",
  },
  {
    question: "Posso fazer alterações sozinho depois?",
    answer:
      "Sim! Ofereço um tutorial em vídeo mostrando como fazer alterações básicas.",
  },
  {
    question: "Oferece garantia ou política de reembolso?",
    answer:
      "Sim! Se após aprovar o protótipo você não ficar satisfeito com o resultado final (mesmo após ajustes), devolvo 50% do valor pago. Se desistir antes do protótipo, devolvo 100%. Sua satisfação é minha prioridade.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Pagamento dividido em 2x: 30% para iniciar (após aprovação do orçamento) e 70% na entrega final. Aceito apenas PIX. Caso não aprove a entrega final, você não precisar realizar o pagamento dos 70% faltantes.",
  },
  {
    question: "Quem mantém o site depois da entrega?",
    answer:
      "Você pode manter sozinho (te ensino), contratar um plano de manutenção comigo, ou chamar qualquer outro profissional. Como você terá todos os acessos, fica totalmente livre para escolher.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer:
      "Sim! Todos os sites são otimizados para SEO básico (títulos, descrições, URLs amigáveis, sitemap). Porém, ranquear bem no Google depende também de conteúdo de qualidade, tempo no ar e estratégias de marketing digital contínuas.",
  },
  {
    question: "O site funciona bem em celulares e tablets?",
    answer:
      "Sim! Todos os projetos são desenvolvidos com design responsivo, o que significa que o layout se adapta perfeitamente a qualquer tamanho de tela, seja smartphone, tablet ou computador.",
  },
  {
    question:
      "Meu site terá o certificado de segurança (o cadeado na barra de endereço)?",
    answer:
      "Com certeza. Eu realizo a configuração do certificado SSL gratuitamente na sua hospedagem. Isso garante que os dados dos seus visitantes estejam protegidos e melhora sua relevância no Google.",
  },
  {
    question: "Preciso enviar os textos e imagens ou você faz tudo?",
    answer:
      "Os textos e fotos específicos do seu negócio devem ser fornecidos por você. Caso não tenha, posso utilizar imagens de bancos de dados profissionais gratuitos e ajudar na revisão gramatical dos textos.",
  },
  {
    question: "O site terá integração com WhatsApp e Redes Sociais?",
    answer:
      "Isso irá depender do plano que você contratar. Nem todos os planos incluem essas integrações. Verifique os detalhes de cada plano para mais informações.",
  },
]

export const projetos: ProjectCardProps[] = [
  {
    id: 1,
    title: "Projeto Encodar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Java", "Spring Boot", "JPA"],
    repository: "#",
  },
  {
    id: 2,
    title: "Projeto Encodar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but.",
    technologies: ["Java", "Spring Boot", "JPA"],
    repository: "#",
  },
  {
    id: 3,
    title: "Projeto Encodar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but.",
    technologies: ["Java", "Spring Boot", "JPA"],
    repository: "#",
  },
  {
    id: 4,
    title: "Projeto Encodar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has survived not only five centuries, but. ",
    technologies: ["Java", "Spring Boot", "JPA"],
    repository: "#",
  },
]

export const socialCards = [
  {
    iconPath: "/img/icon-blog.svg",
    title: "Blog",
    description: "Eu compartilho tudo que aprendo. Bora ler?",
    altIcone: "Ícone do Blog",
    link: "https://ferreiiratech.medium.com/",
    linkText: "Acesse meu blog",
    className: "border-b lg:border-r xl:border-b-0",
  },
  {
    iconPath: "/img/icon-youtube.svg",
    title: "Youtube",
    description: "Compartilhando coisas incríveis. Assista!",
    altIcone: "Ícone do Youtube",
    link: "https://youtube.com/@ferreiiratech",
    linkText: "Acompanhe meu canal",
    className: "border-b lg:border-r-0 xl:border-b-0 xl:border-r",
  },
  {
    iconPath: "/img/icon-instagram.svg",
    title: "Instagram",
    description: "Curte tecnologia? Então bora pro meu Instagram.",
    altIcone: "Ícone do Instagram",
    link: "https://www.instagram.com/ferreiiratech/",
    linkText: "Siga-me no instagram",
    className: "border-b lg:border-r xl:border-b-0",
  },
  {
    iconPath: "/img/icon-linkedin.svg",
    title: "Linkedin",
    description: "Juntos, podemos evoluir na área de tecnologia.",
    altIcone: "Ícone do Linkedin",
    link: "https://www.linkedin.com/in/ferreiiratech/",
    linkText: "Conecte-se comigo",
  },
]

export const socialLinks = [
  {
    href: "https://instagram.com/ferreiiratech",
    src: "/img/icons/instagram-icon.svg",
    alt: "Instagram",
    label: "@ferreiratech",
  },
  {
    href: "https://linkedin.com/in/ferreiiratech",
    src: "/img/icons/linkedin-icon.svg",
    alt: "LinkedIn",
    label: "in/ferreiratech",
  },
  {
    href: "https://youtube.com/@ferreiiratech",
    src: "/img/icons/youtube-icon.svg",
    alt: "YouTube",
    label: "@ferreiratech",
  },
  {
    href: "mailto:ferreiratech@gmail.com",
    src: "/img/icons/email-icon.svg",
    alt: "Email",
    label: "ferreiratech@gmail.com",
  },
]

export const technologiesData: Record<string, Technology[]> = {
  backend: [
    {
      icon: "img/icons/java-icon.svg",
      name: "Java",
      description:
        "Linguagem de programação orientada a objetos, robusta e de alto desempenho. Utilizo Java principalmente para desenvolvimento de APIs e microsserviços.",
      alt: "Java Icon",
    },
    {
      icon: "img/icons/springboot-icon.svg",
      name: "Spring Boot",
      description:
        "Framework que simplifica o desenvolvimento de aplicações Java, oferecendo configuração automática e um ecossistema completo para criar APIs RESTful e aplicações web.",
      alt: "Spring Boot Icon",
    },
    {
      icon: "img/icons/quarkus-icon.svg",
      name: "Quarkus",
      description:
        "Framework Java nativo para Kubernetes, otimizado para baixo consumo de memória e tempo de inicialização rápido, ideal para ambientes de nuvem e containers.",
      alt: "Quarkus Icon",
    },
    {
      icon: "img/icons/node-icon.svg",
      name: "Node.js",
      description:
        "Ambiente de execução JavaScript server-side que permite criar aplicações de rede escaláveis. Uso Node.js para APIs e serviços em tempo real.",
      alt: "Node.js Icon",
    },
  ],
  frontend: [
    {
      icon: "img/icons/typescript-icon.svg",
      name: "TypeScript",
      description:
        "Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade do código e a experiência de desenvolvimento com detecção de erros em tempo de compilação.",
      alt: "TypeScript Icon",
    },
    {
      icon: "img/icons/react-icon.svg",
      name: "React.js",
      description:
        "Biblioteca JavaScript para construção de interfaces de usuário com componentes reutilizáveis e um fluxo de dados eficiente através do Virtual DOM.",
      alt: "React.js Icon",
    },
    {
      icon: "img/icons/nextjs-icon.svg",
      name: "Next.js",
      description:
        "Framework React que oferece renderização híbrida, geração estática, roteamento simplificado e otimizações de performance para criar aplicações web modernas.",
      alt: "Next.js Icon",
    },
  ],
  data: [
    {
      icon: "img/icons/postgresql-icon.svg",
      name: "PostgreSQL",
      description:
        "Sistema de gerenciamento de banco de dados relacional avançado, com forte conformidade com SQL e recursos como consultas complexas, chaves estrangeiras e integridade transacional.",
      alt: "PostgreSQL Icon",
    },
    {
      icon: "img/icons/mysql-icon.svg",
      name: "MySQL",
      description:
        "Banco de dados relacional popular, conhecido por sua confiabilidade e facilidade de uso. Utilizo para aplicações que necessitam de um SGBD robusto e bem estabelecido.",
      alt: "MySQL Icon",
    },
    {
      icon: "img/icons/mongodb-icon.svg",
      name: "MongoDB",
      description:
        "Banco de dados NoSQL orientado a documentos, que oferece alta escalabilidade, flexibilidade e performance para aplicações com estruturas de dados complexas e variáveis.",
      alt: "MongoDB Icon",
    },
  ],
  devops: [
    {
      icon: "img/icons/docker-icon.svg",
      name: "Docker",
      description:
        "Plataforma de containerização que permite empacotar aplicações e suas dependências em containers isolados, garantindo consistência entre ambientes de desenvolvimento e produção.",
      alt: "Docker Icon",
    },
    {
      icon: "img/icons/cicd-icon.svg",
      name: "CI/CD",
      description:
        "Práticas de integração contínua e entrega contínua que automatizam o processo de build, teste e deploy, aumentando a qualidade do software e a velocidade de entrega.",
      alt: "CI/CD Icon",
    },
  ],
}

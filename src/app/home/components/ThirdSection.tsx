"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

const technologiesData = {
  backend: [
    {
      icon: "img/icons/java-icon.svg",
      name: "Java",
      description:
        "Linguagem de programação orientada a objetos, robusta e de alto desempenho. Utilizo Java principalmente para desenvolvimento de APIs e microsserviços.",
    },
    {
      icon: "img/icons/springboot-icon.svg",
      name: "Spring Boot",
      description:
        "Framework que simplifica o desenvolvimento de aplicações Java, oferecendo configuração automática e um ecossistema completo para criar APIs RESTful e aplicações web.",
    },
    {
      icon: "img/icons/quarkus-icon.svg",
      name: "Quarkus",
      description:
        "Framework Java nativo para Kubernetes, otimizado para baixo consumo de memória e tempo de inicialização rápido, ideal para ambientes de nuvem e containers.",
    },
    {
      icon: "img/icons/node-icon.svg",
      name: "Node.js",
      description:
        "Ambiente de execução JavaScript server-side que permite criar aplicações de rede escaláveis. Uso Node.js para APIs e serviços em tempo real.",
    },
  ],
  frontend: [
    {
      icon: "img/icons/typescript-icon.svg",
      name: "TypeScript",
      description:
        "Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade do código e a experiência de desenvolvimento com detecção de erros em tempo de compilação.",
    },
    {
      icon: "img/icons/react-icon.svg",
      name: "React.js",
      description:
        "Biblioteca JavaScript para construção de interfaces de usuário com componentes reutilizáveis e um fluxo de dados eficiente através do Virtual DOM.",
    },
    {
      icon: "img/icons/nextjs-icon.svg",
      name: "Next.js",
      description:
        "Framework React que oferece renderização híbrida, geração estática, roteamento simplificado e otimizações de performance para criar aplicações web modernas.",
    },
  ],
  data: [
    {
      icon: "img/icons/postgresql-icon.svg",
      name: "PostgreSQL",
      description:
        "Sistema de gerenciamento de banco de dados relacional avançado, com forte conformidade com SQL e recursos como consultas complexas, chaves estrangeiras e integridade transacional.",
    },
    {
      icon: "img/icons/mysql-icon.svg",
      name: "MySQL",
      description:
        "Banco de dados relacional popular, conhecido por sua confiabilidade e facilidade de uso. Utilizo para aplicações que necessitam de um SGBD robusto e bem estabelecido.",
    },
    {
      icon: "img/icons/mongodb-icon.svg",
      name: "MongoDB",
      description:
        "Banco de dados NoSQL orientado a documentos, que oferece alta escalabilidade, flexibilidade e performance para aplicações com estruturas de dados complexas e variáveis.",
    },
  ],
  devops: [
    {
      icon: "img/icons/docker-icon.svg",
      name: "Docker",
      description:
        "Plataforma de containerização que permite empacotar aplicações e suas dependências em containers isolados, garantindo consistência entre ambientes de desenvolvimento e produção.",
    },
    {
      icon: "img/icons/cicd-icon.svg",
      name: "CI/CD",
      description:
        "Práticas de integração contínua e entrega contínua que automatizam o processo de build, teste e deploy, aumentando a qualidade do software e a velocidade de entrega.",
    },
  ],
}

export default function ThirdSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftSectionRef = useRef<HTMLDivElement>(null)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !leftSectionRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Quando a seção estiver visível na viewport
      if (sectionTop < viewportHeight && sectionTop > -sectionHeight + 100) {
        // Calcula a posição para o efeito de sticky
        const scrollProgress = Math.max(0, -sectionTop / (sectionHeight - viewportHeight))
        const translateY = Math.min(0, scrollProgress * 100)

        leftSectionRef.current.style.transform = `translateY(${translateY}px)`
        leftSectionRef.current.style.opacity = `${1 - scrollProgress * 0.5}`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section ref={sectionRef} className="bg-secondary text-primary py-44 2xl:pb-96">
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <div className="flex flex-col xl:flex-row gap-10">
          
          <div ref={leftSectionRef} className="text-gray-300 xl:w-1/2 xl:sticky xl:top-20 xl:self-start">
            <h2 className="font-spaceGrotesk text-2xl font-light mb-6 sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Algumas <span className="text-highlight font-bold">tecnologias</span> 
              <br /> que sempre uso no <br /> meu dia a dia
            </h2>
            <p className="text-primary text-[0.8rem] sm:text-base xl:text-lg max-w-[30rem]">
              Sempre fui uma pessoa curiosa, com uma vontade incessante de entender o funcionamento das coisas ao meu
              redor. Na infância, desmontava meus carrinhos e os transformava, aperfeiçoando-os com luzes de LED que
              serviam como faróis.
            </p>
          </div>

          <div className="text-primary font-spaceGrotesk xl:w-1/2 space-y-10">
            
            <div>
              <div className="bg-black-100 rounded-lg p-4 mb-4 border-gray-600 border-b border-r">
                <h3 className="text-xl">Tecnologias backend</h3>
              </div>
              <div className="space-y-2">
                {technologiesData.backend.map((tech, index) => (
                  <TechItem
                    key={`backend-${index}`}
                    id={`backend-${index}`}
                    tech={tech}
                    isExpanded={!!expandedItems[`backend-${index}`]}
                    onToggle={toggleItem}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="bg-black-100 rounded-lg p-4 mb-4 border-gray-600 border-b border-r">
                <h3 className="text-xl">Tecnologias frontend</h3>
              </div>
              <div className="space-y-2">
                {technologiesData.frontend.map((tech, index) => (
                  <TechItem
                    key={`frontend-${index}`}
                    id={`frontend-${index}`}
                    tech={tech}
                    isExpanded={!!expandedItems[`frontend-${index}`]}
                    onToggle={toggleItem}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="bg-black-100 rounded-lg p-4 mb-4 border-gray-600 border-b border-r">
                <h3 className="text-xl">Tecnologias de dados</h3>
              </div>
              <div className="space-y-2">
                {technologiesData.data.map((tech, index) => (
                  <TechItem
                    key={`data-${index}`}
                    id={`data-${index}`}
                    tech={tech}
                    isExpanded={!!expandedItems[`data-${index}`]}
                    onToggle={toggleItem}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="bg-black-100 rounded-lg p-4 mb-4 border-gray-600 border-b border-r">
                <h3 className="text-xl">Tecnologias devops</h3>
              </div>
              <div className="space-y-2">
                {technologiesData.devops.map((tech, index) => (
                  <TechItem
                    key={`devops-${index}`}
                    id={`devops-${index}`}
                    tech={tech}
                    isExpanded={!!expandedItems[`devops-${index}`]}
                    onToggle={toggleItem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TechItem({ id, tech, isExpanded, onToggle }: TechItemProps) {
  return (
    <div className="border-b border-gray-600 overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700/5 transition-colors rounded-lg"
        onClick={() => onToggle(id)}
      >
        <div className="flex items-center gap-3">
          <Image src={tech.icon} alt={tech.name} width={24} height={24}/>
          <span>{tech.name}</span>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-800 transition-colors">
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      <div
        className={`px-4 pb-4 text-gray-400 transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-48 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
        }`}
      >
        <p className="pl-8">{tech.description}</p>
      </div>
    </div>
  )
}

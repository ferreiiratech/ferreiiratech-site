"use client"

import { technologiesData } from "@/app/home/components/data"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function ThirdSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftSectionRef = useRef<HTMLDivElement>(null)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  )

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !leftSectionRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Quando a seção estiver visível na viewport
      if (sectionTop < viewportHeight && sectionTop > -sectionHeight + 100) {
        // Calcula a posição para o efeito de sticky
        const scrollProgress = Math.max(
          0,
          -sectionTop / (sectionHeight - viewportHeight)
        )
        const translateY = Math.min(0, scrollProgress * 100)

        leftSectionRef.current.style.transform = `translateY(${translateY}px)`
        leftSectionRef.current.style.opacity = `${1 - scrollProgress * 0.5}`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section
      ref={sectionRef}
      className="bg-secondary text-primary py-44 2xl:pb-96"
    >
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <div className="flex flex-col xl:flex-row gap-10">
          <div
            ref={leftSectionRef}
            className="text-gray-300 xl:w-1/2 xl:sticky xl:top-20 xl:self-start"
          >
            <h2 className="font-spaceGrotesk text-2xl font-light mb-6 sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Algumas{" "}
              <span className="text-highlight font-bold">tecnologias</span>
              <br /> que sempre uso no <br /> meu dia a dia
            </h2>
            <p className="text-primary text-[0.8rem] sm:text-base xl:text-lg max-w-[30rem]">
              No meu dia-a-dia como desenvolvedor, utilizo diversas tecnologias
              que me ajudam a criar, otimizar e manter as aplicações. Aqui estão
              algumas das tecnologias que utilizo com mais frequência:
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
                    key={tech.name}
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
                    key={tech.name}
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
                    key={tech.name}
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
                    key={tech.name}
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
      <button
        type="button"
        className="flex items-center justify-between w-full p-4 cursor-pointer hover:bg-gray-700/5 transition-colors rounded-lg"
        onClick={() => onToggle(id)}
        aria-expanded={isExpanded}
        aria-controls={`tech-desc-${id}`}
      >
        <span className="flex items-center gap-3">
          <Image
            src={tech.icon}
            alt={tech.alt}
            width={24}
            height={24}
            className="pointer-events-none select-none"
          />
          <span>{tech.name}</span>
        </span>
        <span
          className="p-1 rounded-full hover:bg-gray-800 transition-colors"
          aria-hidden="true"
        >
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      <div
        className={`px-4 pb-4 text-gray-400 transition-all duration-300 ease-in-out ${
          isExpanded
            ? "max-h-48 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
        }`}
      >
        <p className="pl-8">{tech.description}</p>
      </div>
    </div>
  )
}

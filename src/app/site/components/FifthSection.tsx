"use client"

import ProjectCard from "@/app/components/ui/ProjectCard"
import ProjectCardSkeleton from "@/app/components/ui/skeleton/card-skeleton"
import { useProjects } from "@/hooks/use-projects"
import Link from "next/link"

export default function FifthSection() {
  const { projects, isLoading, error } = useProjects()
  const projectsPerPage = 4

  if (error) {
    return <></>
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <div className="flex flex-col mb-10 lg:mb-16">
          <h2 className="font-spaceGrotesk font-bold text-2xl mb-2 uppercase sm:text-3xl lg:text-4xl">
            Portfólio de resultados
          </h2>
          <p className="text-gray-300 text-sm xxs:text-base lg:text-xl max-w-3xl font-inter">
            Projetos reais com resultados reais. Veja o que eu posso fazer pelo
            seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading
            ? Array.from({ length: projectsPerPage }).map((_, idx) => (
                <ProjectCardSkeleton key={idx} />
              ))
            : projects
                .slice(0, projectsPerPage)
                .map((item: ProjectCardProps) => (
                  <ProjectCard
                    key={item.id}
                    isBackgroundLight={true}
                    id={item.id}
                    status={item.status}
                    images={item.images}
                    title={item.title}
                    description={item.description}
                    technologiesTag={item.technologiesTag}
                    repository={item.repository}
                    type={item.type}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    linkRepo={item.linkRepo}
                  />
                ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="text-highlight border-b-2 border-highlight"
          >
            Veja mais projetos
          </Link>
        </div>
      </div>
    </section>
  )
}

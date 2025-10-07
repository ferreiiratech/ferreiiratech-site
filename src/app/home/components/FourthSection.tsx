"use client"

import ProjectCard from "@/app/components/ui/ProjectCard"
import ProjectCardSkeleton from "@/app/components/ui/skeleton/card-skeleton"
import { useProjects } from "@/lib/api"
import Link from "next/link"

export default function FourthSection() {
  const { projects, isLoading, error } = useProjects()
  const projectsPerPage = 4

  if (error) {
    return <></>
  }

  return (
    <section className="bg-secondary text-primary mt-[-2rem] 2xl:mt-[-10rem]">
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <h1
          id="get-to-know-my-projects"
          className="text-center font-spaceGrotesk font-medium text-gray-300 mb-16 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        >
          Conheça os{" "}
          <span className="text-highlight font-bold">meus projetos</span>
        </h1>

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
          <Link href="/projects" className="text-highlight hover:underline">
            Veja mais projetos
          </Link>
        </div>

        <div className="w-10 h-10 lg:h-20"> </div>
      </div>
    </section>
  )
}

"use client"

import ProjectCard from "@/app/components/ui/ProjectCard"
import ProjectCardSkeleton from "@/app/components/ui/card-skeleton"
import { publicEnv } from "@/app/env"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function FourthSection() {
  const [projetos, setProjetos] = useState<ProjectCardProps[]>([])
  const projectsPerPage = 4

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${publicEnv.NEXT_PUBLIC_SITE_URL}/api/projects`,
        {
          method: "GET",
          cache: "no-store",
          // next: { revalidate: 86400 },
        }
      )

      if (response.ok) {
        const data = await response.json()
        setProjetos(data)
      }
    }

    fetchData()
  }, [])

  const isLoading = projetos.length === 0

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
            : projetos
                .slice(0, projectsPerPage)
                .map((item: ProjectCardProps) => (
                  <ProjectCard
                    key={item.id}
                    id={item.id}
                    status={item.status}
                    images={item.images}
                    title={item.title}
                    description={item.description}
                    technologies={item.technologies}
                    repository={item.repository}
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

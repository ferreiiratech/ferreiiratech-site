"use client"

import ProjectCard from "@/app/components/ui/ProjectCard"
import ProjectCardSkeleton from "@/app/components/ui/card-skeleton"
import { publicEnv } from "@/app/env"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

export default function SecondSectionProjects() {
  const [projetos, setProjetos] = useState<ProjectCardProps[]>([])
  const [technologies, setTechnologies] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTech, setSearchTech] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const projectsPerPage = 8
  const maxTagToShow = 3

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `${publicEnv.NEXT_PUBLIC_SITE_URL}/api/projects`,
        { method: "GET", cache: "force-cache" }
      )

      if (response.ok) {
        setProjetos(await response.json())
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    const allTechnologies = projetos
      .flatMap(project => project.technologies ?? [])
      .filter(tech => typeof tech === "string")

    setTechnologies(
      Array.from(new Set(allTechnologies)).sort(() => Math.random() - 0.5)
    )
  }, [projetos])

  const filteredProjects = selectedTag
    ? projetos.filter(project =>
        (project.technologies ?? []).some(
          tech => tech.toLowerCase() === selectedTag.toLowerCase()
        )
      )
    : searchTech.trim()
      ? projetos.filter(project =>
          (project.technologies ?? []).some(tech =>
            tech.toLowerCase().includes(searchTech.toLowerCase())
          )
        )
      : projetos

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  )

  const getVisiblePages = () => {
    const pages: number[] = []

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else if (currentPage <= 2) {
      pages.push(1, 2, 3)
    } else if (currentPage >= totalPages - 1) {
      pages.push(totalPages - 2, totalPages - 1, totalPages)
    } else {
      pages.push(currentPage - 1, currentPage, currentPage + 1)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const isLoading = projetos.length === 0

  return (
    <section className="bg-secondary mt-40 text-primary">
      <div className="pt-24 pb-24 mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <div className="flex flex-col gap-2 mb-24">
          <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
            <div className="relative w-full 2xl:max-w-sm flex-shrink-0">
              <input
                id="search-tech"
                type="text"
                placeholder={
                  technologies.slice(0, 3).join(", ").concat("...") ||
                  "Buscar por tecnologia"
                }
                value={searchTech}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchTech(e.target.value)
                  setSelectedTag(null)
                  setCurrentPage(1)
                }}
                className="bg-transparent pl-4 pr-10 py-2 rounded-md border border-[#899099]/30 focus:outline-none transition w-full"
                aria-label="Buscar por tecnologia"
                autoComplete="off"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#899099]/60 pointer-events-none border-[#899099]/60 border-l pl-2">
                <Search size={20} aria-hidden="true" />
              </span>
            </div>

            {technologies.length > maxTagToShow && (
              <div className="hidden 2xl:flex flex-wrap gap-2 mb-2 md:mb-0 md:ml-4">
                <button
                  type="button"
                  className={`text-sm font-spaceGrotesk px-3 py-2 bg-secondary border border-[#899099]/30 rounded-lg transition focus:outline-none
                    ${selectedTag === null ? "bg-white/25" : ""}`}
                  onClick={() => {
                    setSelectedTag(null)
                    setCurrentPage(1)
                  }}
                  aria-pressed={selectedTag === null}
                >
                  Todas
                </button>

                {technologies.slice(0, 8).map(tech => (
                  <button
                    key={tech}
                    type="button"
                    className={`text-[0.6rem] lg:text-sm font-spaceGrotesk px-3 py-2 bg-secondary border border-[#899099]/30 rounded-lg text-sm transition
                      ${selectedTag === tech ? "bg-white/25" : ""}`}
                    onClick={() => {
                      setSelectedTag(tech)
                      setCurrentPage(1)
                    }}
                    aria-pressed={selectedTag === tech}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            Array.from({ length: projectsPerPage }).map((_, idx) => (
              <ProjectCardSkeleton key={idx} />
            ))
          ) : currentProjects.length > 0 ? (
            currentProjects.map(item => (
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
            ))
          ) : (
            <div className="col-span-full text-center text-lg py-10 opacity-70">
              Nenhum projeto encontrado para essa tecnologia.
            </div>
          )}
        </div>

        {!isLoading && totalPages > 1 && (
          <Pagination className="mt-10">
            <PaginationContent>

              <PaginationItem className="hidden xs:block">
                <PaginationPrevious
                  onClick={e => {
                    e.preventDefault()
                    handlePageChange(currentPage - 1)
                  }}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {currentPage > 2 && totalPages > 3 && (
                <>
                  <PaginationItem>
                    <PaginationLink
                      onClick={e => {
                        e.preventDefault()
                        handlePageChange(1)
                      }}
                      className="cursor-pointer"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                </>
              )}

              {visiblePages.map(page => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={e => {
                      e.preventDefault()
                      handlePageChange(page)
                    }}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {currentPage < totalPages - 1 && totalPages > 3 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink
                      onClick={e => {
                        e.preventDefault()
                        handlePageChange(totalPages)
                      }}
                      className="cursor-pointer"
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem className="hidden xs:block">
                <PaginationNext
                  onClick={e => {
                    e.preventDefault()
                    handlePageChange(currentPage + 1)
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  )
}

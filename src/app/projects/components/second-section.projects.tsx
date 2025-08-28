"use client"

import ProjectCard from "@/app/components/ui/ProjectCard"
import ProjectCardSkeleton from "@/app/components/ui/skeleton/card-skeleton"
import SearchInput from "@/app/components/ui/search-input"
import SearchInputSkeleton from "@/app/components/ui/skeleton/search-input-skeleton"
import TechFilter from "@/app/components/ui/tech-filter"
import TechFilterSkeleton from "@/app/components/ui/skeleton/tech-filter-skeleton"
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
import { useEffect, useState } from "react"

export default function SecondSectionProjects() {
  const [projetos, setProjetos] = useState<ProjectCardProps[]>([])
  const [technologies, setTechnologies] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTech, setSearchTech] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const projectsPerPage = 8
  const maxTagToShow = 3

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `${publicEnv.NEXT_PUBLIC_SITE_URL}/api/projects`,
        { method: "GET", next: { revalidate: 86400 } }
      )

      if (response.ok) {
        setProjetos(await response.json())
      }

      setIsLoading(false)
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    const allTechnologies = projetos
      .flatMap(project => project.technologiesTag ?? [])
      .filter(tech => typeof tech === "string")

    setTechnologies(
      Array.from(new Set(allTechnologies)).sort(() => Math.random() - 0.5)
    )
  }, [projetos])

  const filteredProjects = selectedTag
    ? projetos.filter(project =>
        (project.technologiesTag ?? []).some(
          tech => tech.toLowerCase() === selectedTag.toLowerCase()
        )
      )
    : searchTech.trim()
      ? projetos.filter(project =>
          (project.technologiesTag ?? []).some(tech =>
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

  return (
    <section className="bg-secondary mt-40 text-primary">
      <div className="pt-24 pb-24 mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <div className="flex flex-col gap-2 mb-24">
          <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
            {isLoading ? (
              <SearchInputSkeleton />
            ) : (
              <SearchInput
                technologies={technologies}
                searchTech={searchTech}
                setSearchTech={setSearchTech}
                setSelectedTag={setSelectedTag}
                setCurrentPage={setCurrentPage}
              />
            )}

            {isLoading ? (
              <TechFilterSkeleton />
            ) : (
              technologies.length > maxTagToShow && (
                <TechFilter
                  technologies={technologies}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                  setCurrentPage={setCurrentPage}
                />
              )
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
                technologiesTag={item.technologiesTag}
                repository={item.repository}
                type={item.type}
                startDate={item.startDate}
                endDate={item.endDate}
                linkRepo={item.linkRepo}
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

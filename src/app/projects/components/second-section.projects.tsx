"use client"

import { useEffect, useState } from "react"
import ProjectCard from "@/app/components/ui/ProjectCard"
import { publicEnv } from "@/app/env"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import { Skeleton } from "@/components/ui/skeleton"
import ProjectCardSkeleton from "@/app/components/ui/card-skeleton"

export default function SecondSectionProjects() {
  const [projetos, setProjetos] = useState<ProjectCardProps[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 8

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `${publicEnv.NEXT_PUBLIC_SITE_URL}/api/projects`,
        { method: "GET", cache: "no-store" }
      )

      if (response.ok) {
        setProjetos(await response.json())
      }
    }

    fetchProjects()
  }, [])

  const totalPages = Math.ceil(projetos.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = projetos.slice(
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
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading
            ? Array.from({ length: projectsPerPage }).map((_, idx) => (
                <ProjectCardSkeleton key={idx} />
              ))
            : currentProjects.map(item => (
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

        {!isLoading && totalPages > projectsPerPage && (
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#projetos-em-destaque"
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {currentPage > 2 && totalPages > 3 && (
                <>
                  <PaginationItem>
                    <PaginationLink
                      href="#projetos-em-destaque"
                      onClick={() => handlePageChange(1)}
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
                    href="#projetos-em-destaque"
                    isActive={currentPage === page}
                    onClick={() => handlePageChange(page)}
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
                      href="#projetos-em-destaque"
                      onClick={() => handlePageChange(totalPages)}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationNext
                  href="#projetos-em-destaque"
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
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

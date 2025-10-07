"use client"

import { publicEnv } from "@/app/env/client"
import { useEffect, useState } from "react"

export function useProjects() {
  const [projects, setProjects] = useState<ProjectCardProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `${publicEnv.NEXT_PUBLIC_SITE_URL}/projects`,
          {
            method: "GET",
          }
        )

        if (!response.ok) {
          throw new Error("Falha ao buscar os projetos.")
        }

        const data = await response.json()
        setProjects(data)
      } catch (err) {
        console.error("Erro ao carregar os projetos:", err)

        setError(err as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { projects, isLoading, error }
}

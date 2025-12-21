"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react"

interface Project {
  _id: string
  title: string
  description: string
  status: string
  type: string
  technologiesTag: string[]
  startDate: string
  endDate: string
  linkRepo: string
}

interface ProjectListProps {
  onCreateNew: () => void
}

export function ProjectList({ onCreateNew }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects")

      if (!response.ok) {
        throw new Error("Erro ao carregar projetos")
      }

      const data = await response.json()
      setProjects(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido")
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "finished":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "paused":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "finished":
        return "Finalizado"
      case "in-progress":
        return "Em Progresso"
      case "paused":
        return "Pausado"
      default:
        return status
    }
  }

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="text-lg text-white">Carregando projetos...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-400 mb-4">{error}</div>
        <Button
          onClick={fetchProjects}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Tentar Novamente
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Projetos</h2>
        <Button
          onClick={onCreateNew}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Adicionar Novo Projeto
        </Button>
      </div>

      {projects.length === 0 ? (
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="text-center py-8">
            <p className="text-gray-400 mb-4">Nenhum projeto encontrado</p>
            <Button
              onClick={onCreateNew}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Criar Primeiro Projeto
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <Card
              key={project._id}
              className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-white">
                    {project.title}
                  </CardTitle>
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusText(project.status)}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2 text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-200">
                      Tecnologias:
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologiesTag.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-gray-600 text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-200">
                      Período:
                    </p>
                    <p className="text-sm text-gray-400">
                      {new Date(project.startDate).toLocaleDateString()} -{" "}
                      {new Date(project.endDate).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

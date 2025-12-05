"use client"

import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FolderOpen,
  TrendingUp,
  Users,
  Activity,
  Plus,
  ArrowUpRight,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const [projects, setProjects] = useState<ProjectCardProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects")
      if (response.ok) {
        const data = await response.json()
        setProjects(data)
      }
    } catch (error) {
      console.error("Erro ao carregar projetos:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusColor = (status: StatusProject) => {
    switch (status) {
      case "Finalizado":
        return "bg-green-100 text-green-800"
      case "Em progresso":
        return "bg-blue-100 text-blue-800 "
      case "Pausado":
        return "bg-yellow-100 text-yellow-800 "
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-lg">Carregando...</div>
      </div>
    )
  }

  const finishedProjects = projects.filter(p => p.status === "Finalizado").length
  const inProgressProjects = projects.filter(
    p => p.status === "Em progresso"
  ).length
  const totalProjects = projects.length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral dos seus projetos e atividades
          </p>
        </div>
        <Button
          onClick={() => router.push("/admin/dashboard/create")}
          className="gap-2"
          variant="outline"
        >
          <Plus className="h-4 w-4" />
          Novo Projeto
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Projetos
            </CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjects}</div>
            <p className="text-xs text-muted-foreground">+2 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Projetos Finalizados
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{finishedProjects}</div>
            <p className="text-xs text-muted-foreground">
              +12% desde o último mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Progresso</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressProjects}</div>
            <p className="text-xs text-muted-foreground">Projetos ativos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Conclusão
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalProjects > 0
                ? Math.round((finishedProjects / totalProjects) * 100)
                : 0}
              %
            </div>
            <p className="text-xs text-muted-foreground">Meta: 85%</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Projetos Recentes</CardTitle>
            <CardDescription>
              Últimos projetos criados e atualizados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.slice(0, 5).map(project => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {project.title}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {project.description}
                    </p>
                    <div className="flex gap-1">
                      {project.technologiesTag
                        .slice(0, 3)
                        .map((tech, index) => (
                          <Badge
                            key={index}
                            variant="default"
                            className="text-xs bg-gray-50/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>
              Acesso rápido às principais funcionalidades
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => router.push("/admin/dashboard/create")}
            >
              <Plus className="h-4 w-4" />
              Criar Novo Projeto
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => router.push("/admin/projects")}
            >
              <FolderOpen className="h-4 w-4" />
              Ver Todos os Projetos
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Configurações
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

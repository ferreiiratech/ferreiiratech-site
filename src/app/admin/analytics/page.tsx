"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, Eye } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Visualize métricas e estatísticas do seu portfólio
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Visualizações Totais
            </CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <p className="text-xs text-muted-foreground">
              +20.1% desde o último mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Visitantes Únicos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% desde o último mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Engajamento
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% desde o último mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Projetos Visualizados
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+201 desde ontem</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Visualizações por Projeto</CardTitle>
            <CardDescription>
              Top 5 projetos mais visualizados este mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">E-commerce Platform</div>
                <div className="text-sm text-muted-foreground">1,234 views</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Mobile App Design</div>
                <div className="text-sm text-muted-foreground">987 views</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Portfolio Website</div>
                <div className="text-sm text-muted-foreground">756 views</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">API Gateway</div>
                <div className="text-sm text-muted-foreground">543 views</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Dashboard UI</div>
                <div className="text-sm text-muted-foreground">432 views</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tecnologias Mais Populares</CardTitle>
            <CardDescription>
              Tecnologias que mais atraem visitantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">React</div>
                <div className="text-sm text-muted-foreground">45%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Next.js</div>
                <div className="text-sm text-muted-foreground">32%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">TypeScript</div>
                <div className="text-sm text-muted-foreground">28%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Node.js</div>
                <div className="text-sm text-muted-foreground">22%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">PostgreSQL</div>
                <div className="text-sm text-muted-foreground">18%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

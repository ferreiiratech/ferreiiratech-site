"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreateProjectFormSchema, CreateProjectSchema } from "@/lib/validations"
import type { z } from "zod"

type ProjectFormData = z.infer<typeof CreateProjectFormSchema>

interface ProjectFormProps {
  onSuccess: () => void
}

export function ProjectForm({ onSuccess }: ProjectFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(CreateProjectFormSchema),
    defaultValues: {
      status: "finished",
      type: "web",
    },
  })

  const onSubmit = async (data: ProjectFormData) => {
    setIsLoading(true)
    setError("")

    try {
      // Converter dados do formulário para o formato da API
      const projectData = {
        status: data.status,
        type: data.type,
        title: data.title,
        description: data.description,
        context: data.context || null,
        technologiesTag: data.technologiesTagString
          .split(",")
          .map((tag: string) => tag.trim())
          .filter(Boolean),
        architecture: data.architecture || null,
        repository: data.repository,
        images: data.imagesString
          ? data.imagesString
              .split(",")
              .map((img: string) => img.trim())
              .filter(Boolean)
          : [],
        startDate: data.startDate,
        endDate: data.endDate,
        linkRepo: data.linkRepo || null,
        comments: data.comments || null,
      }

      // Validar com o schema da API
      const validatedData = CreateProjectSchema.parse(projectData)

      const response = await fetch("/api/admin/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(validatedData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Erro ao criar projeto")
      }

      reset()
      onSuccess()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="bg-destructive/15 border border-destructive text-destructive px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Status */}
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <select
            id="status"
            {...register("status")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isLoading}
          >
            <option value="finished">Finalizado</option>
            <option value="in-progress">Em Progresso</option>
            <option value="paused">Pausado</option>
          </select>
          {errors.status && (
            <p className="text-sm text-destructive">{errors.status.message}</p>
          )}
        </div>

        {/* Type */}
        <div className="space-y-2">
          <Label htmlFor="type">Tipo</Label>
          <select
            id="type"
            {...register("type")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isLoading}
          >
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
            <option value="desktop">Desktop</option>
            <option value="api">API</option>
          </select>
          {errors.type && (
            <p className="text-sm text-destructive">{errors.type.message}</p>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          {...register("title")}
          placeholder="Nome do projeto"
          disabled={isLoading}
        />
        {errors.title && (
          <p className="text-sm text-destructive">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <textarea
          id="description"
          {...register("description")}
          placeholder="Descrição do projeto"
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isLoading}
        />
        {errors.description && (
          <p className="text-sm text-destructive">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Context */}
      <div className="space-y-2">
        <Label htmlFor="context">Contexto (opcional)</Label>
        <textarea
          id="context"
          {...register("context")}
          placeholder="Contexto do projeto"
          className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isLoading}
        />
        {errors.context && (
          <p className="text-sm text-destructive">{errors.context.message}</p>
        )}
      </div>

      {/* Technologies */}
      <div className="space-y-2">
        <Label htmlFor="technologiesTagString">Tecnologias</Label>
        <Input
          id="technologiesTagString"
          {...register("technologiesTagString")}
          placeholder="React, Next.js, TypeScript (separadas por vírgula)"
          disabled={isLoading}
        />
        <p className="text-sm text-muted-foreground">
          Separe as tecnologias por vírgula
        </p>
        {errors.technologiesTagString && (
          <p className="text-sm text-destructive">
            {errors.technologiesTagString.message}
          </p>
        )}
      </div>

      {/* Architecture */}
      <div className="space-y-2">
        <Label htmlFor="architecture">Arquitetura (opcional)</Label>
        <Input
          id="architecture"
          {...register("architecture")}
          placeholder="Microservices, Monolith, etc."
          disabled={isLoading}
        />
      </div>

      {/* Repository */}
      <div className="space-y-2">
        <Label htmlFor="repository">Repositório</Label>
        <Input
          id="repository"
          {...register("repository")}
          placeholder="Nome do repositório"
          disabled={isLoading}
        />
        {errors.repository && (
          <p className="text-sm text-destructive">
            {errors.repository.message}
          </p>
        )}
      </div>

      {/* Images */}
      <div className="space-y-2">
        <Label htmlFor="imagesString">Imagens</Label>
        <Input
          id="imagesString"
          {...register("imagesString")}
          placeholder="URL das imagens (separadas por vírgula)"
          disabled={isLoading}
        />
        <p className="text-sm text-muted-foreground">
          URLs das imagens separadas por vírgula
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Start Date */}
        <div className="space-y-2">
          <Label htmlFor="startDate">Data de Início</Label>
          <Input
            id="startDate"
            type="date"
            {...register("startDate")}
            disabled={isLoading}
          />
          {errors.startDate && (
            <p className="text-sm text-destructive">
              {errors.startDate.message}
            </p>
          )}
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <Label htmlFor="endDate">Data de Fim</Label>
          <Input
            id="endDate"
            type="date"
            {...register("endDate")}
            disabled={isLoading}
          />
          {errors.endDate && (
            <p className="text-sm text-destructive">{errors.endDate.message}</p>
          )}
        </div>
      </div>

      {/* Link Repo */}
      <div className="space-y-2">
        <Label htmlFor="linkRepo">Link do Repositório (opcional)</Label>
        <Input
          id="linkRepo"
          type="url"
          {...register("linkRepo")}
          placeholder="https://github.com/usuario/repo"
          disabled={isLoading}
        />
      </div>

      {/* Comments */}
      <div className="space-y-2">
        <Label htmlFor="comments">Comentários (opcional)</Label>
        <textarea
          id="comments"
          {...register("comments")}
          placeholder="Comentários adicionais"
          className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isLoading}
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="submit" disabled={isLoading} className="flex-1">
          {isLoading ? "Criando..." : "Criar Projeto"}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={isLoading}
          onClick={() => window.history.back()}
        >
          Cancelar
        </Button>
      </div>
    </form>
  )
}

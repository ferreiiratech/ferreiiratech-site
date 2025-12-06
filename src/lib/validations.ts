import { z } from "zod"

// Schema para login
export const LoginSchema = z.object({
  email: z
    .string()
    .email("Email deve ser válido")
    .min(1, "Email é obrigatório"),
  password: z
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .min(1, "Senha é obrigatória"),
})

// Schema para criação de projeto
export const CreateProjectSchema = z
  .object({
    status: z.enum(["Finalizado", "Em Progresso", "Pausado"]),
    type: z.enum(["web", "mobile", "desktop", "api"]),
    title: z
      .string()
      .min(3, "Título deve ter pelo menos 3 caracteres")
      .max(200, "Título deve ter no máximo 200 caracteres")
      .trim(),
    description: z
      .string()
      .min(10, "Descrição deve ter pelo menos 10 caracteres")
      .max(2000, "Descrição deve ter no máximo 2000 caracteres")
      .trim(),
    context: z
      .string()
      .max(1000, "Contexto deve ter no máximo 1000 caracteres")
      .trim()
      .optional(),
    technologiesTag: z
      .array(z.string().trim().min(1))
      .min(1, "Deve ter pelo menos uma tecnologia")
      .max(20, "Máximo de 20 tecnologias"),
    architecture: z
      .string()
      .max(1000, "Arquitetura deve ter no máximo 1000 caracteres")
      .trim()
      .optional(),
    repository: z.string().min(1, "Repository é obrigatório"),
    images: z
      .array(z.string().url("Cada imagem deve ser uma URL válida"))
      .max(10, "Máximo de 10 imagens")
      .default([]),
    startDate: z
      .string()
      .refine(date => !Number.isNaN(Date.parse(date)), {
        message: "Data de início inválida",
      })
      .transform(date => new Date(date)),
    endDate: z
      .string()
      .refine(date => !Number.isNaN(Date.parse(date)), {
        message: "Data de fim inválida",
      })
      .transform(date => new Date(date)),
    linkRepo: z
      .string()
      .url("Link do repositório deve ser uma URL válida")
      .optional()
      .or(z.literal("")),
    comments: z
      .string()
      .max(1000, "Comentários devem ter no máximo 1000 caracteres")
      .trim()
      .optional(),
  })
  .refine(data => data.endDate >= data.startDate, {
    message: "Data de fim deve ser posterior à data de início",
    path: ["endDate"],
  })

// Schema para formulário (com campos de string para conversão)
export const CreateProjectFormSchema = z.object({
  status: z.enum(["Finalizado", "Em Progresso", "Pausado"]),
  type: z.enum(["web", "mobile", "desktop", "api"]),
  title: z
    .string()
    .min(3, "Título deve ter pelo menos 3 caracteres")
    .max(200, "Título deve ter no máximo 200 caracteres")
    .trim(),
  description: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres")
    .max(2000, "Descrição deve ter no máximo 2000 caracteres")
    .trim(),
  context: z
    .string()
    .max(1000, "Contexto deve ter no máximo 1000 caracteres")
    .trim()
    .optional(),
  technologiesTagString: z.string().min(1, "Tecnologias são obrigatórias"),
  architecture: z
    .string()
    .max(1000, "Arquitetura deve ter no máximo 1000 caracteres")
    .trim()
    .optional(),
  repository: z.string().min(1, "Repository é obrigatório"),
  imagesString: z.string().optional(),
  startDate: z.string().min(1, "Data de início é obrigatória"),
  endDate: z.string().min(1, "Data de fim é obrigatória"),
  linkRepo: z.string().optional(),
  comments: z
    .string()
    .max(1000, "Comentários devem ter no máximo 1000 caracteres")
    .trim()
    .optional(),
})

// Tipos derivados
export type LoginInput = z.infer<typeof LoginSchema>
export type CreateProjectInput = z.infer<typeof CreateProjectSchema>
export type CreateProjectFormInput = z.infer<typeof CreateProjectFormSchema>

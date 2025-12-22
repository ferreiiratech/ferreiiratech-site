import { z } from "zod"

const serverSchema = z.object({
  DATABASE_URL: z.string(),
  PHONE_NUMBER: z.string(),
})

const rawServerEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  PHONE_NUMBER: process.env.PHONE_NUMBER,
}

const parsedServer = serverSchema.safeParse(rawServerEnv)

if (!parsedServer.success) {
  const erro = parsedServer.error.issues
    .map(issue => `${issue.path.join(".")}: ${issue.message}`)
    .join(", ")

  console.error(`Erro nas variáveis do servidor: ${erro}`)
  throw new Error(`Erro nas variáveis do servidor: ${erro}`)
}

export const serverEnv = parsedServer.data

import { z } from "zod"

const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
})

const rawPublicEnv = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
}

const parsedPublic = publicSchema.safeParse(rawPublicEnv)

if (!parsedPublic.success) {
  throw new Error(
    `Erro nas variáveis públicas: ${JSON.stringify(parsedPublic.error, null, 2)}`
  )
}

export const publicEnv = parsedPublic.data

import { PrismaClient } from "../../prisma/generated/prisma"

declare global {
  var __prisma: PrismaClient | undefined
}

const prisma =
  globalThis.__prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  })

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = prisma
}

export async function validatePrismaConnection(): Promise<void> {
  try {
    await prisma.$connect()
  } catch (error) {
    console.error("❌ Erro ao conectar com MongoDB via Prisma:", error)
    console.error(
      "💥 A aplicação será encerrada devido à falha na conexão com o banco de dados"
    )

    process.exit(1)
  }
}

export async function disconnectPrisma(): Promise<void> {
  await prisma.$disconnect()
}

export { prisma }
export default prisma

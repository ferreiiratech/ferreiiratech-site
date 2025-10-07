import { validatePrismaConnection } from "@/lib/prisma"

export default async function DatabaseConnectionValidator() {
  await validatePrismaConnection()

  return null
}

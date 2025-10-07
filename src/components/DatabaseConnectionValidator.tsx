import { validateDatabaseConnection } from "@/lib/mongodb"

export default async function DatabaseConnectionValidator() {
  await validateDatabaseConnection()

  return null
}

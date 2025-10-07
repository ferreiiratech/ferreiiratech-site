import client, { validateDatabaseConnection, isConnected } from "./mongodb"

export async function getDb() {
  if (!client) throw new Error("MongoDB client não inicializado.")

  if (!isConnected) {
    await validateDatabaseConnection()
  }

  await client.connect()
  return client.db("mydatabase")
}

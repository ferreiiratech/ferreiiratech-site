import { MongoClient } from "mongodb"
import type { MongoClientOptions } from "mongodb"
import { attachDatabasePool } from "@vercel/functions"
import { serverEnv } from "@/app/env/server"

const uri = serverEnv.DATABASE_URL

console.log("Conectando ao MongoDB com a URI:", uri)

const options: MongoClientOptions = {}

let client: MongoClient
let isConnected = false

const globalWithMongo = global as typeof globalThis & {
  _mongoClient?: MongoClient
  _isConnected?: boolean
}

export async function validateDatabaseConnection(): Promise<void> {
  try {
    console.log("🔄 Validando conexão com o MongoDB...")

    await client.connect()

    await client.db("admin").command({ ping: 1 })

    isConnected = true
    globalWithMongo._isConnected = true

    console.log("✅ Conexão com MongoDB estabelecida com sucesso!")
  } catch (error) {
    console.error("❌ Erro ao conectar com o MongoDB:", error)
    console.error(
      "💥 A aplicação será encerrada devido à falha na conexão com o banco de dados"
    )

    process.exit(1)
  }
}

if (process.env.NODE_ENV === "development") {
  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options)
  }
  client = globalWithMongo._mongoClient
  isConnected = globalWithMongo._isConnected || false
} else {
  client = new MongoClient(uri, options)
  attachDatabasePool(client)
}

export { isConnected }
export default client

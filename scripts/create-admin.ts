import { PrismaClient } from "../prisma/generated/prisma"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

/**
 * Script para criar um usuário administrador inicial
 * Execute com: npx tsx scripts/create-admin.ts
 */
async function createAdmin() {
  console.log("🔐 Criando usuário administrador...")

  try {
    // Verifica se já existe um admin
    const existingAdmin = await prisma.user.findFirst({
      where: { role: "admin" },
    })

    if (existingAdmin) {
      console.log("⚠️  Usuário admin já existe:")
      console.log(`   Email: ${existingAdmin.email}`)
      console.log(`   Nome: ${existingAdmin.name}`)
      return
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash("admin123", 12)

    // Cria o usuário admin
    const admin = await prisma.user.create({
      data: {
        name: "Administrador",
        email: "admin@ferreiiratech.com",
        password: hashedPassword,
        role: "admin",
      },
    })

    console.log("✅ Usuário administrador criado com sucesso!")
    console.log(`   Email: ${admin.email}`)
    console.log("   Senha: admin123")
    console.log(`   Role: ${admin.role}`)
    console.log("")
    console.log("🔒 IMPORTANTE: Altere a senha após o primeiro login!")
  } catch (error) {
    console.error("❌ Erro ao criar usuário admin:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin().catch(error => {
  console.error("❌ Erro fatal:", error)
  process.exit(1)
})

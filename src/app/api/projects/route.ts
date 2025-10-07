import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    // Busca todos os projetos usando Prisma
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc", // Ordena por data de criação, mais recentes primeiro
      },
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Erro ao buscar projetos:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}

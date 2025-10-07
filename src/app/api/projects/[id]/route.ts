import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Busca projeto por ID usando Prisma
    const project = await prisma.project.findUnique({
      where: {
        id: id, // No MongoDB com Prisma, o ID é uma string ObjectId
      },
    })

    if (!project) {
      return NextResponse.json(
        { error: "Projeto não encontrado" },
        { status: 404 }
      )
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error("Erro ao buscar projeto:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}

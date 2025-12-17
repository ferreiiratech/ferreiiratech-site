import { verifyAuth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rota pública para obter detalhes de um projeto específico por ID
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Verificar autenticação
    const user = verifyAuth(request)

    if (!user) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
    }

    if (user.role !== "admin") {
      return NextResponse.json(
        {
          error:
            "Acesso negado. Apenas administradores podem excluir projetos.",
        },
        { status: 403 }
      )
    }

    const { id } = await params

    // Verificar se o projeto existe
    const existingProject = await prisma.project.findUnique({
      where: { id: id },
    })

    if (!existingProject) {
      return NextResponse.json(
        { error: "Projeto não encontrado" },
        { status: 404 }
      )
    }

    // Deletar o projeto
    await prisma.project.delete({
      where: { id: id },
    })

    return NextResponse.json(
      { message: "Projeto excluído com sucesso" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao excluir projeto:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}

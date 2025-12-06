import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { CreateProjectSchema } from "@/lib/validations"
import { verifyAuth } from "@/lib/auth"

// Rota pública para obter a lista de projetos
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(projects, {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=59",
      },
    })
  } catch (error) {
    console.error("Erro ao buscar projetos:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação
    const user = verifyAuth(request)

    if (!user) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
    }

    if (user.role !== "admin") {
      return NextResponse.json(
        {
          error: "Acesso negado. Apenas administradores podem criar projetos.",
        },
        { status: 403 }
      )
    }

    const body = await request.json()

    // Validar dados de entrada
    const validatedData = CreateProjectSchema.parse(body)

    // Criar projeto no banco
    const project = await prisma.project.create({
      data: {
        status: validatedData.status,
        type: validatedData.type,
        title: validatedData.title,
        description: validatedData.description,
        context: validatedData.context || null,
        functionality: [],
        technologiesTag: validatedData.technologiesTag,
        technologyUsed: {},
        architecture: validatedData.architecture || null,
        repository: validatedData.repository,
        images: validatedData.images,
        startDate: validatedData.startDate,
        endDate: validatedData.endDate,
        linkRepo: validatedData.linkRepo || null,
        comments: validatedData.comments || null,
      },
    })

    return NextResponse.json({
      success: true,
      project,
    })
  } catch (error) {
    console.error("Erro ao criar projeto:", error)

    if (error instanceof Error) {
      if (
        error.message === "Token não encontrado" ||
        error.message === "Token inválido"
      ) {
        return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
      }

      if (error.name === "ZodError") {
        return NextResponse.json(
          { error: "Dados inválidos", details: error.message },
          { status: 400 }
        )
      }
    }

    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
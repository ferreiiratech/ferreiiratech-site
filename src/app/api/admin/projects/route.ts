import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"
import { prisma } from "@/lib/prisma"
import { CreateProjectSchema } from "@/lib/validations"

interface JWTPayload {
  userId: string
  email: string
  role: string
}

// Função para verificar autenticação
function verifyAuth(request: NextRequest): JWTPayload {
  const token = request.cookies.get("auth-token")?.value

  if (!token) {
    throw new Error("Token não encontrado")
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback-secret"
    ) as JWTPayload
    return decoded
  } catch (error) {
    throw new Error("Token inválido")
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação
    const user = verifyAuth(request)

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

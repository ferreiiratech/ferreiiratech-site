import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

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

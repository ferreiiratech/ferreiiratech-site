import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { projects } from "../data"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const projectId = Number(id)

  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return NextResponse.json(
      { error: "Projeto não encontrado" },
      { status: 404 }
    )
  }

  return NextResponse.json(project)
}

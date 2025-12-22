import { verifyAuth } from "@/lib/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const user = verifyAuth(request)

    if (!user) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
    }

    if (user.role !== "admin") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 })
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        userId: user.userId,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 })
  }
}

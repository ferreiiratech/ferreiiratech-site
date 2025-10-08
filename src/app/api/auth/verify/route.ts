import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

interface JWTPayload {
  userId: string
  email: string
  role: string
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("auth-token")?.value

    if (!token) {
      return NextResponse.json(
        { error: "Token não encontrado" },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback-secret"
    ) as JWTPayload

    if (decoded.role !== "admin") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 })
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        userId: decoded.userId,
        email: decoded.email,
        role: decoded.role,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 })
  }
}

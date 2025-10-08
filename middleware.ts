import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

interface JWTPayload {
  userId: string
  email: string
  role: string
}

export function middleware(request: NextRequest) {
  // Verificar se é uma rota de admin (exceto login)
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login")
  ) {
    const token = request.cookies.get("auth-token")?.value

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "fallback-secret"
      ) as JWTPayload

      if (decoded.role !== "admin") {
        return NextResponse.redirect(new URL("/admin/login", request.url))
      }

      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

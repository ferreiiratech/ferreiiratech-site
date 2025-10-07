import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { validateDatabaseConnection } from "@/lib/mongodb"

let connectionValidated = false

export async function middleware(request: NextRequest) {
  if (!connectionValidated && process.env.NODE_ENV !== "development") {
    try {
      await validateDatabaseConnection()
      connectionValidated = true
    } catch (error) {
      console.error("❌ Middleware: Falha na validação da conexão com MongoDB")
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 503 }
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

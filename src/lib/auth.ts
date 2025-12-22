import jwt from "jsonwebtoken"
import type { NextRequest } from "next/server"

export const verifyAuth = (request: NextRequest) => {
  const token = request.cookies.get("auth-token")?.value

  if (!token) {
    return null
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback-secret"
    ) as JWTPayload

    return {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    }
  } catch (error) {
    return null
  }
}

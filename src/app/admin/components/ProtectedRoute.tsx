"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/verify", {
          credentials: "include",
        })

        if (response.ok) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
          router.push("/admin/login")
        }
      } catch (error) {
        setIsAuthenticated(false)
        router.push("/admin/login")
      }
    }

    checkAuth()
  }, [router])

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-foreground">Verificando autenticação...</div>
      </div>
    )
  }

  // Not authenticated
  if (!isAuthenticated) {
    return null
  }

  // Authenticated
  return <>{children}</>
}

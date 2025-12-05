"use client"

import { AdminSidebar } from "./components/AdminSidebar"
import { AdminHeader } from "./components/AdminHeader"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { usePathname } from "next/navigation"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/admin/login"

  // Se for página de login, não aplica proteção
  if (isLoginPage) {
    return (
      <div className="dark">
        <div className="flex h-screen bg-background">
          <main className="flex-1 overflow-y-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    )
  }

  // Para outras páginas admin, aplica proteção
  return (
    <div className="dark">
      <ProtectedRoute>
        <div className="flex h-screen bg-background overflow-hidden">
          <AdminSidebar />
          <div className="flex flex-col flex-1">
            <AdminHeader />
            <main className="flex-1 overflow-y-auto bg-muted/50 p-6">
              {children}
            </main>
          </div>
        </div>
      </ProtectedRoute>
    </div>
  )
}

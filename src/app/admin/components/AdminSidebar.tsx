"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LayoutDashboard,
  FolderOpen,
  BarChart3,
  Settings,
  HelpCircle,
  Building2,
  LogOut,
  User,
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { getCookie } from "@/lib/cookies"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projetos",
    href: "/admin/projects",
    icon: FolderOpen,
  },
  {
    title: "Configurações",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname()
  const router = useRouter()
  const [userInitials, setUserInitials] = useState("AD")
  const [userName, setUserName] = useState("Usuário")

  useEffect(() => {
    const name = getCookie("user-name")
    if (name) {
      setUserName(name)
      const names = name.split(" ")
      const initials = names
        .map((n) => n.charAt(0).toUpperCase())
        .slice(0, 2)
        .join("")
      setUserInitials(initials)
    }
  }, [])

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })

      if (response.ok) {
        router.push("/admin/login")
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  }

  return (
    <div className={cn("border-r bg-muted/40 w-full flex flex-col", !isMobile && "hidden md:block md:w-60", isMobile && "h-full")}>
      <div className="flex h-full flex-col gap-2">
        {/* Logo */}
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <Building2 className="h-6 w-6" />
            <span>Ferreiiratech</span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sidebarItems.map(item => {
              const isActive =
                pathname === item.href ||
                (item.href === "/admin/dashboard" &&
                  pathname.startsWith("/admin/dashboard")) ||
                (item.href === "/admin/projects" &&
                  pathname.startsWith("/admin/projects"))

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-gray-50/10",
                    isActive && "bg-highlight font-semibold hover:bg-highlight",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* User menu */}
        <div className="mt-auto border-t border-gray-50/30 p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 px-3"
              >
                <Avatar className="h-8 w-8 border text-white border-gray-50/30">
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-sm">
                  <span className="font-medium text-white">{userName}</span>
                  <span className="text-xs text-muted-foreground text-white">Admin</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-56 bg-secondary !border-[#44443f]"
            >
              <DropdownMenuLabel className="!text-[#efefef]">Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator className="!bg-[#44443f]" />
              <DropdownMenuItem className="!text-[#efefef] hover:bg-gray-50/10 cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="!text-[#efefef] hover:bg-gray-50/10 cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="!bg-[#44443f]" />
              <DropdownMenuItem 
                onClick={handleLogout} 
                className="!text-[#efefef] hover:bg-gray-50/10 cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

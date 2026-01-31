"use client"
import Lenis from "@studio-freight/lenis"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function SmoothScrollProvider({
  children,
}: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Verificar se é desktop (tela maior que 1024px)
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 1024px)").matches)
    }

    checkIsDesktop()

    const mediaQuery = window.matchMedia("(min-width: 1024px)")
    const handleChange = () => checkIsDesktop()

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    // Desabilitar Lenis nas rotas admin ou em dispositivos mobile/tablet
    if (pathname?.startsWith("/admin") || !isDesktop) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: t => 1 - (1 - t) ** 3,
      smoothWheel: true,
      syncTouch: true,
      touchInertiaMultiplier: 1.2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [pathname, isDesktop])

  return <>{children}</>
}

"use client"
import Lenis from "@studio-freight/lenis"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

export default function SmoothScrollProvider({
  children,
}: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Desabilitar Lenis nas rotas admin
    if (pathname?.startsWith("/admin")) {
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
  }, [pathname])

  return <>{children}</>
}

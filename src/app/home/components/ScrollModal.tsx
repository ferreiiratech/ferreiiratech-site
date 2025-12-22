"use client"

import { publicEnv } from "@/app/env/client"
import { X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ScrollModalProps {
  targetRef: React.RefObject<HTMLElement | null>
}

const ScrollModal = ({ targetRef }: ScrollModalProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        }
      },
      { threshold: 0.3 }
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [targetRef])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Preciso desenvolver um site. Podemos conversar?"
    )
    window.open(
      `https://wa.me/${publicEnv.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`,
      "_blank"
    )
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[280px] sm:w-[320px] animate-in slide-in-from-right duration-500">
      <div className="bg-primary border border-[#899099]/30 rounded-lg shadow-2xl p-4 relative">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar modal"
        >
          <X size={16} />
        </button>

        <div className="space-y-4 pr-6">
          <div className="space-y-1">
            <h3 className="text-base font-spaceGrotesk font-semibold">
              Precisa de um site?
            </h3>
            <p className="text-xs text-muted-foreground">
              Vamos conversar sobre seu projeto?
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-300 text-xs"
            >
              WhatsApp
            </button>
            <Link
              href="/site"
              onClick={handleClose}
              className="border border-highlight bg-highlight hover:bg-highlight/10 px-3 py-2 rounded-lg font-medium transition-colors duration-300 text-white text-center text-xs"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollModal

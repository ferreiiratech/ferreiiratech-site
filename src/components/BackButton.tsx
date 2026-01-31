"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push("/")
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="flex items-center gap-2 px-4 py-2 mb-6 bg-gray-800/5 backdrop-blur-sm border border-white/20 rounded-lg text-gray-600 hover:bg-gray-800/15 transition-all duration-300 group w-fit"
      aria-label="Voltar para página anterior"
    >
      <ArrowLeft
        size={20}
        className="transition-transform group-hover:-translate-x-1"
      />
      <span className="text-sm font-spaceGrotesk">Voltar</span>
    </button>
  )
}

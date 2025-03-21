"use client"

import { useState } from "react"
import * as motion from "motion/react-client"

export default function DonationCard(props: DonationCardProps) {
  const textToCopy = "texto para copiar"
  const [isCopied, setIsCopied] = useState<"idle" | "success" | "error">("idle")

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setIsCopied("success")
      setTimeout(() => setIsCopied("idle"), 2000)
    } catch (error) {
      setIsCopied("error")
      setTimeout(() => setIsCopied("idle"), 2000)
    }
  }

  return (
    <div className="fixed inset-0 bg-black-opacity-40 z-10">
      <motion.div
        key="donation-card"
        initial={{ y: "-50vh", opacity: 0 }}
        animate={{ y: -200, opacity: 1 }}
        exit={{ y: "-50vh", opacity: 0 }}
        transition={{ type: "keyframes", stiffness: 100 }}
        className="fixed inset-0 flex items-center justify-center"
        onClick={props.handleCloseDonationCard}
      >
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg w-64 xxs:w-80"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg text-center mb-4">Faça sua contribuição!</h1>
            <img
              src="/img/qrcode-image.svg"
              alt="QR Code"
              className="w-48 h-48 pointer-events-none select-none"
            />
            <button
              type="button"
              onClick={handleCopy}
              className="text-center text-sm mt-4 text-purple-500"
            >
              {isCopied === "success" && (
                <span className="text-green-600">Chave copiada!</span>
              )}
              {isCopied === "error" && (
                <span className="text-red-600">Erro ao copiar!</span>
              )}
              {isCopied === "idle" && (
                <span className="underline">Copiar chave pix</span>
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

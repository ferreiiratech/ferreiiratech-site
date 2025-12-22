"use client"

import Image from "next/image"

export default function Button({
  text,
  linkTitle,
  link,
  iconPath,
  isHiddenOnMobile = true,
  className = "",
}: {
  text: string
  linkTitle?: string
  link?: string
  iconPath?: string
  isHiddenOnMobile?: boolean
  className?: string
}) {
  const handleClick = () => {
    if (!linkTitle && !link) return

    if (linkTitle) {
      window.scrollTo({ top: 3650, behavior: "smooth" })
    } else if (link) {
      window.open(link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label={`Botão para navegar para ${linkTitle || link}`}
      className={`${isHiddenOnMobile ? "hidden lg:flex" : "flex"} gap-4 justify-center 
      items-center text-lg text-white py-2 px-6 h-20 
      w-fit rounded-2xl bg-purple-150 hover:bg-purple-100 
      transition-colors duration-300 ease-in-out ${className}`}
    >
      {text}
      <Image
        src={iconPath || "/img/arrow-button-projects.svg"}
        alt="Seta para baixo"
        className="w-12 h-12 pointer-events-none select-none"
        loading="lazy"
        width={12}
        height={12}
      />
    </button>
  )
}

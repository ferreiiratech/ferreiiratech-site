import React from "react"
import Image from "next/image"
import Link from "next/link"

const SocialCard = React.memo((props: SocialCardProps) => {
  return (
    <div
      className={`flex flex-col items-start p-6 ${props.className || ""} border-gray-300`}
    >
      <header className="flex items-center gap-2 mb-4">
      <Image
          src={props.iconPath}
          alt={`${props.title} ícone, usado para representar a plataforma`}
          className="pointer-events-none select-none"
          width={40}
          height={40}
        />
        <h2 className="font-spaceGrotesk text-2xl font-bold">{props.title}</h2>
      </header>
      <p className="text-xl text-gray-500 mb-6">{props.description}</p>
      <Link
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-lg text-purple-600 underline ${props.classNameButton || ""}`}
        title={props.titleLink || `Acesse o ${props.title}`}
      >
        {props.linkText}
      </Link>
    </div>
  )
})

export default SocialCard

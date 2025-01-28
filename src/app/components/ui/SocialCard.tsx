import React from "react"

const SocialCard = React.memo((props: SocialCardProps) => {
  return (
    <div
      className={`flex flex-col items-start p-6 border-gray-300 ${props.className || ""}`}
    >
      <header className="flex items-center gap-2 mb-4">
        <img
          src={props.iconPath}
          alt={`${props.title} ícone, usado para representar a plataforma`}
        />
        <h2 className="font-spaceGrotesk text-2xl font-bold">{props.title}</h2>
      </header>
      <p className="text-xl text-gray-500 mb-6">{props.description}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-lg text-purple-600 underline ${props.classNameButton || ""}`}
        title={props.titleLink || `Acesse o ${props.title}`}
      >
        {props.linkText}
      </a>
    </div>
  )
})

export default SocialCard

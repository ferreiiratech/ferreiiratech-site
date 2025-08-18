import { ExternalLink } from "lucide-react"
import Link from "next/link"
import React from "react"

const ProjectCard = React.memo((props: ProjectCardProps) => {
  return (
    <div
      key={props.id}
      className="border border-[#899099]/20 rounded-lg p-8 flex flex-col h-full hover:border-[#899099]/40 transition-colors duration-300 ease-in-out"
    >
      <h2 className="text-xl font-spaceGrotesk font-medium text-primary mb-4">
        {props.title}
      </h2>
      <p className="mb-6 flex-grow text-sm">
        {props.description.length > 100
          ? `${props.description.slice(0, 300)}...`
          : props.description}
      </p>

      <div className="mt-auto">
        <div className="flex gap-2 mb-6">
          {props.technologies.map(tech => (
            <span
              key={tech}
              className="text-[0.6rem] lg:text-sm font-spaceGrotesk px-3 py-1 bg-secondary border border-[#899099]/30 rounded-lg cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={props.repository}
          className="text-highlight hover:underline text-sm transition-colors duration-300"
        >
          Acesse o repositório
          <ExternalLink className="inline-block ml-1 mb-1" size={14} />
        </Link>
      </div>
    </div>
  )
})

export default ProjectCard

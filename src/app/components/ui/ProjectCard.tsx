"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Card from "./Card"

const ProjectCard = React.memo(
  ({
    isBackgroundLight = false,
    isShowLinkRepo = true,
    ...props
  }: ProjectCardProps) => {
    return (
      <Card className={isBackgroundLight ? "bg-[#dadcdead]" : ""}>
        <div className="mb-4 flex flex-row gap-2">
          <span className="text-[0.6rem] font-spaceGrotesk px-2 py-1 border border-[#899099]/30 rounded-lg cursor-default border-hover-highlight">
            {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
          </span>

          <span
            className={`text-[0.6rem] font-spaceGrotesk px-2 py-1 border border-[#899099]/30 rounded-lg cursor-default border-hover-highlight
            ${
              props.status === "Finalizado"
                ? "text-green-600"
                : props.status === "Em progresso"
                  ? "text-yellow-400"
                  : "text-gray-400"
            }
          `}
          >
            {props.status.charAt(0).toUpperCase() + props.status.slice(1)}
          </span>
        </div>

        <div className="flex flex-col gap-4 mb-5 xs:flex-row xs:mb-0">
          <div className="w-full xs:w-4/5">
            <h2 className="text-xl font-spaceGrotesk font-medium mb-4">
              {props.title.length > 30
                ? `${props.title.slice(0, 30)}...`
                : props.title}
            </h2>

            <p className="mb-6 flex-grow text-sm">
              {props.description.length > 100
                ? `${props.description.slice(0, 300)}...`
                : props.description}
            </p>
          </div>

          <div>
            {props.images ? (
              <div className="flex flex-row gap-2 xs:flex-col">
                {props.images.slice(0, 2).map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Imagem do projeto ${props.title} - ${index + 1}`}
                    className="object-contain pointer-events-none select-none rounded-lg"
                    width={120}
                    height={100}
                    loading="lazy"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
            {props.technologiesTag.slice(0, 4).map(tech => (
              <span
                key={tech}
                className="text-[0.6rem] sm:text-xs lg:text-sm font-spaceGrotesk px-2 sm:px-3 py-1 border border-[#899099]/30 rounded-lg cursor-default whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {isShowLinkRepo && props.linkRepo && (
              <Link
                href={props.linkRepo}
                className="text-highlight hover:underline text-xs sm:text-sm transition-colors duration-300 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Acesse o repositório</span>
                <ExternalLink className="inline-block ml-1" size={14} />
              </Link>
            )}

            {props.linkSite && (
              <Link
                href={props.linkSite}
                className="text-highlight hover:underline text-xs sm:text-sm transition-colors duration-300 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Acesse o site</span>
                <ExternalLink className="inline-block ml-1" size={14} />
              </Link>
            )}
          </div>
        </div>
      </Card>
    )
  }
)

export default ProjectCard

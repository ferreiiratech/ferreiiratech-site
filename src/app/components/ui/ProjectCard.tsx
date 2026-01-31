"use client"

import { ExternalLink, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import Card from "./Card"

const ProjectCard = React.memo(
  ({
    isBackgroundLight = false,
    isShowLinkRepo = true,
    ...props
  }: ProjectCardProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const scrollPosition = useRef(0)

    useEffect(() => {
      if (selectedImage) {
        scrollPosition.current = window.scrollY
        document.body.style.position = "fixed"
        document.body.style.top = `-${scrollPosition.current}px`
        document.body.style.width = "100%"
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.width = ""
        document.body.style.overflow = ""
        if (scrollPosition.current) {
          window.scrollTo(0, scrollPosition.current)
        }
      }

      return () => {
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.width = ""
        document.body.style.overflow = ""
      }
    }, [selectedImage])

    return (
      <>
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

          <div className="mb-5">
            <h2 className="text-xl font-spaceGrotesk font-medium mb-4">
              {props.title.length > 30
                ? `${props.title.slice(0, 30)}...`
                : props.title}
            </h2>

            <p className="mb-6 text-sm">
              {props.description.length > 100
                ? `${props.description.slice(0, 300)}...`
                : props.description}
            </p>
          </div>

          <div className="mt-auto">
            {props.images ? (
              <div className="flex flex-row flex-wrap gap-2 mb-6">
                {props.images.slice(0, 2).map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Imagem do projeto ${props.title} - ${index + 1}`}
                    className="object-contain select-none rounded-lg w-auto h-auto max-w-[48%] sm:max-w-[158px] cursor-zoom-in hover:opacity-80 transition-opacity"
                    width={158}
                    height={132}
                    loading="lazy"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            ) : null}

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

        {selectedImage && (
          <button
            type="button"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={e => {
              if (e.key === "Escape") {
                setSelectedImage(null)
              }
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Fechar imagem"
            >
              <X size={32} />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={`Imagem do projeto ${props.title}`}
                className="object-contain w-full h-full"
                width={1200}
                height={800}
                onClick={e => e.stopPropagation()}
              />
            </div>
          </button>
        )}
      </>
    )
  }
)

export default ProjectCard

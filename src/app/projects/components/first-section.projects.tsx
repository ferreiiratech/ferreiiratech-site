"use client"

import Button from "@/app/components/ui/button"
import Description from "@/app/components/ui/description"
import TitleH1 from "@/app/components/ui/title-h1"

export default function FirstSectionProjects() {
  return (
    <section
      className="grid grid-cols-1 gap-10 
    justify-center mt-14 mx-5 xs:mx-10 sm:mx-14 
    md:mx-24 md:gap-14 lg:grid-cols-[2fr_1fr] 
    lg:mx-44 lg:mt-28 2xl:mx-72"
    >
      <div className="space-y-5 lg:space-y-10">
        <TitleH1 title1="Minhas experiências" title2="Meus projetos" />
        <Description
          maxW="40rem"
          text="
          Esta é uma seleção dos meus principais projetos, onde aplico meus 
          conhecimentos em desenvolvimento de software e estudo de novas tecnologias. 
          Convido você a explorar o código-fonte completo no meu repositório.
          "
        />
        <Button
          text="Acesse meu repositório"
          link="https://github.com/ferreiiratech"
          iconPath="/img/arrow-button-link.svg"
        />
      </div>

      <div className="font-medium font-spaceGrotesk text-xl grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 border border-gray-300 rounded-xl">
        <div className="flex flex-col gap-4 items-center justify-center p-12 border-gray-300 xl:border-b border-r lg:border-r-0 xl:border-r aspect-square">
          Java
          <img
            src="/img/icons/java-icon.svg"
            alt="Java"
            className="w-20 h-20 filter invert-[0.9] pointer-events-none select-none"
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center p-12 border-gray-300 xl:border-b lg:border-t xl:border-t-0 aspect-square">
          React
          <img
            src="/img/icons/react-icon.svg"
            alt="React"
            className="w-20 h-20 filter invert-[0.9] pointer-events-none select-none"
          />
        </div>

        <div className="hidden xl:flex flex-col gap-4 items-center justify-center p-12 border-gray-300 border-r aspect-square">
          Next.js
          <img
            src="/img/icons/nextjs-icon.svg"
            alt="Next.js"
            className="w-20 h-20 filter invert-[0.9] pointer-events-none select-none"
          />
        </div>

        <div className="hidden xl:flex flex-col gap-4 items-center justify-center p-12 border-gray-300 aspect-square">
          Docker
          <img
            src="/img/icons/docker-icon.svg"
            alt="Docker"
            className="w-20 h-20 filter invert-[0.9] pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  )
}

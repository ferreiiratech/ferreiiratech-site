"use client"

import Button from "@/app/components/ui/button"
import Description from "@/app/components/ui/description"
import TitleH1 from "@/app/components/ui/title-h1"
import { socialCards } from "@/app/home/components/data"
import Image from "next/image"
import SocialCard from "../../components/ui/SocialCard"

export default function FirstSection() {
  return (
    <section className="grid grid-cols-1 gap-10 justify-center mt-14 mx-5 xs:mx-10 sm:mx-14 md:mx-24 md:gap-14 lg:grid-cols-[2fr_1fr] lg:mx-44 lg:mt-28 2xl:mx-72">
      <div className="space-y-5 lg:space-y-10">
        <TitleH1 title1="Olá, pessoa" title2="Sou o Leonardo Ferreira" />
        <Description
          maxW="32rem"
          text="Engenheiro de software com experiência em Frontend e Backend."
        />
        <Description
          maxW="32rem"
          text="Estou pronto para te ajudar a transformar ideias em soluções reais."
        />
        <Button
          text="Conheça meus projetos"
          linkTitle="/#get-to-know-my-projects"
        />
      </div>

      <div className="flex justify-center lg:justify-end relative">
        <Image
          src="/img/leonardo-photo-section-1.webp"
          alt="Foto do engenheiro de software Leonardo Ferreira, com fundo abstrato"
          className="object-contain pointer-events-none select-none max-w-full xs:w-10/12 lg:w-fit"
          width={500}
          height={500}
          priority={true}
        />
        <div className="absolute -top-20 -right-32">
          <Image
            src="/img/circle-leonardo-animation.svg"
            alt="Circle Leonardo Animation"
            className="animate-spin-slow pointer-events-none select-none hidden xl:block"
            loading="lazy"
            width={230}
            height={230}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 border border-gray-300 rounded-xl lg:w-[100%] lg:col-span-2">
        {socialCards.map(card => (
          <SocialCard
            key={card.title}
            iconPath={card.iconPath}
            title={card.title}
            description={card.description}
            altIcone={card.altIcone}
            link={card.link}
            linkText={card.linkText}
            className={card.className}
          />
        ))}
      </div>
    </section>
  )
}

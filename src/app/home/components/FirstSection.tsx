import SocialCard from "../../components/ui/SocialCard"
import { socialCards } from "@/app/home/components/data"
import Image from "next/image"

export default function FirstSection() {
  
  return (
    <section className="grid grid-cols-1 gap-10 justify-center mt-14 mx-5 xs:mx-10 sm:mx-14 md:mx-24 md:gap-14 lg:grid-cols-[2fr_1fr] lg:mx-44 lg:mt-28 2xl:mx-72">
      <div className="space-y-5 lg:space-y-10">
        <h1>
          <div className="font-spaceGrotesk font-bold text-gray-500 text-2xl xxs:text-3xl sm:text-[2.7rem] sm:mb-4 sm:w-fit lg:text-5xl lg:mb-7 2xl:text-6xl">
            Olá, pessoa.
          </div>
          <div className="font-spaceGrotesk font-bold text-2xl xxs:text-[1.83rem] xs:text-[1.5rem] sm:text-[2rem] sm:w-fit md:text-4xl lg:text-[2.8rem] 2xl:text-6xl">
            Sou o Leonardo Ferreira
          </div>
        </h1>

        <p className="text-[14.3px] xxs:text-base sm:text-2xl xl:max-w-[32rem]">
          Engenheiro de software com experiência em Frontend e Backend.
        </p>
        <p className="text-[14.3px] xxs:text-base sm:text-2xl xl:max-w-[32rem]">
          Estou pronto para te ajudar a transformar ideias em soluções reais.
        </p>

        <button
          type="button"
          aria-label="Botão para navegar para a seção de projetos"
          className="hidden lg:flex gap-4 justify-center items-center text-lg text-white py-2 px-6 h-20 w-80 rounded-2xl bg-purple-150 hover:bg-purple-100 transition-colors duration-300 ease-in-out"
        >
          Conheça meus projetos
          <img
            src="/img/arrow-button-projects.svg"
            alt="Seta para baixo"
            className="w-12 h-12"
            loading="lazy"
          />
        </button>
      </div>

      <div className="flex justify-center lg:justify-end relative">
        <Image
          src="/img/leonardo-photo-section-1.svg"
          alt="Foto do engenheiro de software Leonardo Ferreira, com fundo abstrato"
          className="pointer-events-none select-none max-w-full xs:w-10/12 lg:w-fit"
          width={500}
          height={500}
          priority
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
        {socialCards.map((card) => (
          <SocialCard
            key={card.title}
            iconPath={card.iconPath}
            title={card.title}
            description={card.description}
            altIcone={card.altIcone}
            link={card.link}
            linkText={card.linkText}
            className={card.className}
            classNameButton={card.classNameButton}
            titleLink={card.titleLink}
          />
        ))}
      </div>
    </section>
  )
}
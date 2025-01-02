import SocialCard from "../SocialCard"

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
          className="hidden lg:flex gap-4 justify-center items-center text-lg text-white py-2 px-6 h-20 w-80 rounded-2xl bg-purple-100 hover:bg-purple-200 transition-colors duration-300 ease-in-out"
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
        <img
          src="/img/leonardo-photo-section-1.svg"
          alt="Foto do engenheiro de software Leonardo Ferreira, com fundo abstrato"
          className="pointer-events-none select-none max-w-full xs:w-10/12 lg:w-fit"
        />
        <div className="absolute -top-20 -right-32">
          <img
            src="/img/circle-leonardo-animation.svg"
            alt="Circle Leonardo Animation"
            className="animate-spin-slow pointer-events-none select-none hidden xl:block"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 border border-gray-300 rounded-xl lg:w-[100%] lg:col-span-2">
        <SocialCard
          iconPath="/img/icon-blog.svg"
          title="Blog"
          description="Eu compartilho tudo que aprendo. Bora ler?"
          altIcone="Ícone do Blog"
          link="#"
          linkText="Acesse meu blog"
          className="border-b lg:border-r xl:border-b-0"
          classNameButton="cursor-not-allowed"
          titleLink="Estará disponível em breve"
        />

        <SocialCard
          iconPath="/img/icon-youtube.svg"
          title="Youtube"
          description="Compartilhando coisas incríveis. Assista!"
          altIcone="Ícone do Youtube"
          link="https://youtube.com/@ferreiiratech"
          linkText="Acompanhe meu canal"
          className="border-b lg:border-r-0 xl:border-b-0 xl:border-r"
        />

        <SocialCard
          iconPath="/img/icon-instagram.svg"
          title="Instagram"
          description="Curte tecnologia? Então bora pro meu Instagram."
          altIcone="Ícone do Instagram"
          link="https://www.instagram.com/ferreiiratech/"
          linkText="Siga-me no instagram"
          className="border-b lg:border-r xl:border-b-0"
        />

        <SocialCard
          iconPath="/img/icon-linkedin.svg"
          title="Linkedin"
          description="Juntos, podemos evoluir na área de tecnologia."
          altIcone="Ícone do Linkedin"
          link="https://www.linkedin.com/in/ferreiiratech/"
          linkText="Conecte-se comigo"
        />
      </div>
    </section>
  )
}

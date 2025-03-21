import Image from "next/image"

export default function SecondSection() {
  return (
    <section className="bg-secondary mt-40 text-primary">

      <div className="grid grid-cols-1 gap-10 pt-32 pb-20 mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 lg:pt-52 lg:pb-32 xs:gap-14 xl:grid-cols-[1fr_1fr] lg:gap-20 2xl:mx-72">

        <div>
          <div className="font-spaceGrotesk text-2xl mb-5 sm:text-3xl sm:mb-10 lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Um pouco{" "}
            <span className="font-bold text-highlight">sobre mim </span>
          </div>

          <p className="mb-5 text-[0.8rem] sm:text-base xl:text-lg">
            Sempre fui uma pessoa curiosa, com uma vontade incessante de
            entender o funcionamento das coisas ao meu redor. Na infância,
            desmontava meus carrinhos e os transformava, aperfeiçoando-os com
            luzes de LED que serviam como faróis.
          </p>

          <p className="text-[0.8rem] sm:text-base xl:text-lg">
            Essa curiosidade me levou a me apaixonar por tecnologia e
            programação. Tive a incrível oportunidade de conquistar uma bolsa
            integral oferecida pela Jala University, uma iniciativa voltada a
            jovens talentos da América Latina, me permitindo estudar
            Engenharia de Software remotamente nos Estados Unidos.
          </p>
        </div>

        <div className="flex justify-center mb-20 xl:mt-24">
          <Image
            src="/img/timeline-about-me.svg"
            alt="Timeline sobre minha carreira"
            className="pointer-events-none select-none max-w-full xs:w-70 lg:w-fit"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}
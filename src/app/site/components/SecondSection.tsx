import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getInitials } from "@/lib/utils"
import Image from "next/image"

const customerTestimonialsList: Testemonial[] = [
  {
    name: "Maria Costa",
    job: "Advogada",
    quote:
      "Em 2 semanas meu site estava no ar e já comecei a receber pedidos pelo WhatsApp. Valeu cada centavo!",
    stars: 5,
  },
  {
    name: "João Silva",
    job: "Restaurante",
    quote:
      "Em 2 semanas meu site estava no ar e já comecei a receber pedidos pelo WhatsApp. Valeu cada centavo!",
    stars: 5,
  },
  {
    name: "Ana Lima",
    job: "Consultoria",
    quote:
      "Em 2 semanas meu site estava no ar e já comecei a receber pedidos pelo WhatsApp. Valeu cada centavo!",
    stars: 5,
  },
  {
    name: "Carlos Costa",
    job: "Empresário",
    quote:
      "Em 2 semanas meu site estava no ar e já comecei a receber pedidos pelo WhatsApp. Valeu cada centavo!",
    stars: 5,
  },
]

const companiesThatTrustedMeList: CompaniesThatTrustedMe[] = [
  {
    name: "Perreira e Zanatta Advogados",
    logoUrl: "https://projeto-pereira-e-zanatta-advogados.vercel.app/logo.webp",
  },
  {
    name: "Perreira e Zanatta Advogados",
    logoUrl: "https://projeto-pereira-e-zanatta-advogados.vercel.app/logo.webp",
  },
  {
    name: "Perreira e Zanatta Advogados",
    logoUrl: "https://projeto-pereira-e-zanatta-advogados.vercel.app/logo.webp",
  },
]

export default function SecondSection() {
  return (
    <section className="bg-secondary mt-14 lg:mt-36 py-20 lg:py-32 text-primary">
      <div className="flex flex-col items-center justify-center text-center mb-10 lg:mb-16 mx-5">
        <h2 className="font-spaceGrotesk font-bold text-primary text-2xl mb-2 uppercase sm:text-3xl lg:text-4xl">
          O Que Meus Clientes Dizem
        </h2>
        <p className="text-gray-300 text-sm xxs:text-base lg:text-xl max-w-3xl font-inter">
          Resultados reais de empresários que transformaram sua presença online
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mx-5 xs:mx-10 sm:mx-14 md:mx-24 sm:grid-cols-2 lg:grid-cols-4 lg:mx-44 2xl:mx-72 lg:gap-6">
        {customerTestimonialsList.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-600/50 rounded-2xl p-4 flex flex-col gap-4 bg-secondary"
          >
            <div className="flex gap-2 items-start">
              <Avatar className="w-11 h-11 border border-gray-600/50">
                <AvatarFallback className="bg-gray-600/50 text-primary text-base font-inter">
                  {getInitials(testimonial.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-inter text-primary text-lg sm:text-xl leading-tight">
                  {testimonial.name}
                </p>
                <p className="font-inter text-gray-300 text-sm sm:text-base">
                  {testimonial.job}
                </p>
              </div>
            </div>
            <p className="font-inter font-extralight italic text-primary text-sm sm:text-base leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Image
                    key={i}
                    src="/img/icons/star-icon.svg"
                    alt="Star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <p className="font-inter text-primary text-base">
                {testimonial.stars}.0
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 lg:mt-24 flex flex-col items-center gap-6 lg:gap-10 mx-5">
        <p className="font-inter text-gray-300 text-base sm:text-lg lg:text-xl text-center">
          Empresas que confiaram em mim:
        </p>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 max-w-4xl">
          {companiesThatTrustedMeList.map((company, index) => (
            <div
              key={index}
              className="bg-gray-600/20 border border-gray-600/50 rounded-2xl h-[100px] w-[200px] flex items-center justify-center"
            >
              <Image
                src={company.logoUrl}
                alt={`${company.name} Logo`}
                width={70}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Card from "@/app/components/ui/Card"
import { firstBenefits, secondBenefits } from "./data"

export default function ThirdSection() {
  return (
    <section className="py-20 lg:py-32 mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
      <div className="mb-10 lg:mb-16">
        <div className="mb-10 lg:mb-16">
          <h2 className="font-spaceGrotesk font-bold text-2xl mb-2 uppercase sm:text-3xl lg:text-4xl">
            O que você recebe
          </h2>
          <p className="text-gray-300 text-sm xxs:text-base lg:text-xl max-w-3xl font-inter">
            Benefícios claros que transformam visitantes em clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {firstBenefits.map(benefit => {
            const Icon = benefit.icon
            return (
              <Card key={benefit.title} className="bg-[#dadcdead]">
                <div className="flex flex-row gap-4 items-center mb-4">
                  <div className="bg-highlight w-10 h-10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-spaceGrotesk font-bold text-lg">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm lg:text-base font-inter">
                  {benefit.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>

      <div>
        <div className="mb-10 lg:mb-16">
          <h2 className="font-spaceGrotesk font-bold text-2xl mb-2 uppercase sm:text-3xl lg:text-4xl">
            Por que meus sites convertem
          </h2>
          <p className="text-gray-300 text-sm xxs:text-base lg:text-xl max-w-3xl font-inter">
            Diferenciais técnicos que garantem resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {secondBenefits.map(benefit => {
            const Icon = benefit.icon
            return (
              <Card key={benefit.title} className="bg-[#dadcdead]">
                <div className="flex flex-row gap-4 items-center mb-4">
                  <div className="bg-highlight w-10 h-10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-spaceGrotesk font-bold text-lg">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm lg:text-base font-inter">
                  {benefit.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

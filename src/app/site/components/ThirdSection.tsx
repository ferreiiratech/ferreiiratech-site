import Card from "@/app/components/ui/Card"
import {
  Zap,
  Search,
  CheckCircle,
  ShieldCheck,
  HeartHandshake,
  BadgeDollarSign,
  Clock,
  Globe,
  Server,
} from "lucide-react"

const firstBenefits: BenefitCard[] = [
  {
    icon: CheckCircle,
    title: "Responsivo",
    description:
      "Perfeito em mobile, tablet e desktop. Seu site fica bom em qualquer tela.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Garantida",
    description:
      "Certificado SSL e proteção contra ameaças. Seu site seguro 24/7.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Técnico",
    description:
      "Estou aqui para ajudar. Suporte rápido para qualquer dúvida ou problema.",
  },
  {
    icon: Clock,
    title: "Entrega em 7 dias",
    description: "Protótipo em 48h, entrega final garantida em uma semana.",
  },
  {
    icon: Globe,
    title: "Domínio grátis",
    description: "Registre seu domínio sem custo adicional no primeiro ano.",
  },
  {
    icon: Server,
    title: "Hospedagem grátis",
    description: "Hospede seu site com desempenho otimizado sem custo inicial.",
  },
]

const secondBenefits: BenefitCard[] = [
  {
    icon: Zap,
    title: "Site Rápido",
    description:
      "PageSpeed acima de 90. Seu site carrega tão rápido que os visitantes não saem antes de converter.",
  },
  {
    icon: BadgeDollarSign,
    title: "Copy Otimizada",
    description:
      "Cada palavra é pensada para vender. Textos que convertem visitantes em clientes.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Estrutura otimizada para buscadores. Apareça nos resultados onde seus clientes procuram.",
  },
]

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

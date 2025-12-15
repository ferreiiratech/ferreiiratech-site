import Description from "@/app/components/ui/description"
import TitleH1 from "@/app/components/ui/title-h1"
import Button from "@/app/components/ui/button"
import YouTubePlayer from "@/app/components/YouTubePlayer"
import Image from "next/image"
import { serverEnv } from "@/app/env/server"

const getGreeting = (): string => {
  const currentHour = new Date().getHours()
  if (currentHour > 5 && currentHour <= 12) {
    return "bom dia"
  }
  if (currentHour > 12 && currentHour <= 18) {
    return "boa tarde"
  }
  return "boa noite"
}

const message = `Olá, ${getGreeting()}! Gostaria de solicitar um orçamento para criação do meu site.`
const phoneNumber = serverEnv.PHONE_NUMBER

export default function FirstSection() {
  return (
    <section className="grid grid-cols-1 gap-10 justify-center mt-14 mx-5 xs:mx-10 sm:mx-14 md:mx-24 md:gap-14 lg:grid-cols-[1fr_1fr] lg:mx-44 lg:mt-28 2xl:mx-72">
      <div className="space-y-5 lg:space-y-10">
        <TitleH1 title2="Pare de perder clientes por causa de um site fraco!" />
        <Description
          maxW="32rem"
          text="Seus concorrentes já estão vendendo online enquanto você ainda depende da sorte."
        />
        <div className="hidden lg:block">
          <Button
            text="Receber orçamento em 15 minutos!"
            link={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            iconPath="/img/icons/whatsapp-icon.svg"
            isHiddenOnMobile={false}
          />
        </div>
      </div>
      <div className="w-full h-[388px] lg:h-full flex flex-col gap-4">
        <YouTubePlayer videoId="TREjh6d5fLg" title="Vídeo de apresentação" />
        <div className="flex gap-6 sm:gap-12 items-center justify-center flex-wrap">
          <div className="flex gap-1.5 items-center">
            <Image
              src={"/img/icons/check-cicle-icon.svg"}
              alt="Seta para baixo"
              className="pointer-events-none select-none contrast-50"
              loading="lazy"
              width={15}
              height={15}
            />
            <p className="text-xs xxs:text-sm text-secondary font-inter">
              Entrega rápida
            </p>
          </div>
          <div className="flex gap-1.5 items-center">
            <Image
              src={"/img/icons/graph-icon.svg"}
              alt="Seta para baixo"
              className="pointer-events-none select-none contrast-200"
              loading="lazy"
              width={15}
              height={15}
            />
            <p className="text-xs xxs:text-sm text-secondary font-inter">
              Páginas otimizadas
            </p>
          </div>
          <div className="flex gap-1.5 items-center">
            <Image
              src={"/img/icons/check-shield-icon.svg"}
              alt="Seta para baixo"
              className="pointer-events-none select-none contrast-200"
              loading="lazy"
              width={15}
              height={15}
            />
            <p className="text-xs xxs:text-sm text-secondary font-inter">
              Você satisfeito ou seu dinheiro de volta
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Button
          text="Receber orçamento em 15 minutos!"
          link={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          iconPath="/img/icons/whatsapp-icon.svg"
          isHiddenOnMobile={false}
        />
      </div>
    </section>
  )
}

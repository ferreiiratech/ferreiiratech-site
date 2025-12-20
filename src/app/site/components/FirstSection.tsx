import YouTubePlayer from "@/app/components/YouTubePlayer"
import Button from "@/app/components/ui/button"
import Description from "@/app/components/ui/description"
import TitleH1 from "@/app/components/ui/title-h1"
import { serverEnv } from "@/app/env/server"
import { getGreeting } from "@/lib/site-utils"
import Image from "next/image"
import { features } from "./data"

const message = `Olá, ${getGreeting()}! Gostaria de solicitar um orçamento para criação do meu site.`
const phoneNumber = serverEnv.PHONE_NUMBER

export default function FirstSection() {
  return (
    <section className="grid grid-cols-1 gap-10 justify-center mt-14 mx-5 xs:mx-10 sm:mx-14 md:mx-24 md:gap-14 lg:grid-cols-[1fr_1fr] lg:mx-44 lg:mt-44 2xl:mx-72">
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
        <div className="flex gap-6 sm:gap-8 items-center justify-center flex-wrap">
          {features.map(feature => (
            <div key={feature.text} className="flex gap-1.5 items-center">
              <Image
                src={feature.iconPath}
                alt={feature.alt}
                className="pointer-events-none select-none contrast-200"
                loading="lazy"
                width={15}
                height={15}
              />
              <p className="text-xs xxs:text-sm text-secondary font-inter">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden flex justify-center">
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

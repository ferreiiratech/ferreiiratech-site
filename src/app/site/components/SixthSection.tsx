"use client"

import Card from "@/app/components/ui/Card"
import { publicEnv } from "@/app/env/client"
import { getGreeting } from "@/lib/site-utils"
import { Check, X } from "lucide-react"
import { motion } from "motion/react"
import { pricingPlans } from "./data"

const phoneNumber = publicEnv.NEXT_PUBLIC_PHONE_NUMBER

export default function SixthSection() {
  const handlePlanClick = (planName: string) => {
    const planMessage = `Olá, ${getGreeting()}! Venho através do seu site e tenho interesse no plano *${planName}* e gostaria de entender prazos, escopo e próximos passos para contratação.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(planMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="bg-secondary py-20 lg:py-32 text-primary">
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <div className="flex flex-col items-center justify-center text-center mb-10 lg:mb-16 mx-5">
          <h2 className="font-spaceGrotesk font-bold text-primary text-2xl mb-2 uppercase sm:text-3xl lg:text-4xl">
            Planos e preços
          </h2>
          <p className="text-gray-300 text-sm xxs:text-base lg:text-xl max-w-3xl font-inter">
            Escolha o plano ideal para seu projeto.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-highlight text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                      Mais Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full flex flex-col 
                    ${plan.isPopular ? "border-highlight border-2 hover:border-highlight transition-colors duration-300 ease-in-out" : ""} 
                    ${plan.isCustom ? "bg-highlight text-white" : ""}`}
                >
                  <div className="mb-6">
                    <h3
                      className={`font-spaceGrotesk font-bold text-2xl mb-4 
                        ${plan.isCustom ? "text-white" : "text-primary"}
                        `}
                    >
                      {plan.name}
                    </h3>
                    {!plan.isCustom && (
                      <div className="flex items-start">
                        <span
                          className={`font-spaceGrotesk font-bold text-5xl ${plan.isPopular ? "text-highlight" : "text-primary"}`}
                        >
                          R$ {plan.price}
                        </span>
                        <span
                          className={`font-spaceGrotesk text-xl mt-2 ${plan.isPopular ? "text-highlight" : "text-primary"}`}
                        >
                          {plan.cents}
                        </span>
                      </div>
                    )}
                    {plan.isCustom && (
                      <p className="text-white/90 text-sm mb-4">
                        Precisa de algo maior? E-commerce completo, plataforma
                        customizada ou sistema específico? Vamos conversar!
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => {
                      if (
                        plan.isCustom &&
                        featureIndex === 0 &&
                        feature.text.includes("Precisa de algo maior")
                      ) {
                        return null
                      }
                      return (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          {feature.included ? (
                            <Check
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isCustom ? "text-white" : "text-green-500"}`}
                            />
                          ) : (
                            <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                          )}
                          <span
                            className={`text-sm ${
                              plan.isCustom
                                ? "text-white"
                                : feature.included
                                  ? "text-gray-200"
                                  : "text-gray-400"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      )
                    })}
                  </ul>

                  <button
                    type="button"
                    onClick={() => handlePlanClick(plan.name)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.buttonVariant === "primary"
                        ? "bg-highlight text-white hover:bg-highlight/90 shimmer-effect"
                        : plan.buttonVariant === "custom"
                          ? "bg-white text-highlight hover:bg-white/90"
                          : "bg-secondary text-primary border border-primary/20 hover:bg-secondary/80"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

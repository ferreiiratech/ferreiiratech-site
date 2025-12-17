"use client"

import Card from "@/app/components/ui/Card"
import { motion } from "motion/react"
import { processSteps } from "./data"

export default function FourthSection() {
  return (
    <section className="bg-secondary py-20 lg:py-32 text-primary">
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <div className="flex flex-col mb-10 lg:mb-16">
          <h2 className="font-spaceGrotesk font-bold text-primary text-2xl mb-2 uppercase sm:text-3xl lg:text-4xl">
            Processo de trabalho
          </h2>
          <p className="text-gray-300 text-sm xxs:text-base lg:text-xl max-w-3xl font-inter">
            Entenda exatamente como trabalhamos, do briefing até o suporte
            pós-entrega.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className={
                index % 2 === 0
                  ? "lg:mr-24 xl:mr-32 2xl:mr-40"
                  : "lg:ml-24 xl:ml-32 2xl:ml-40"
              }
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <Card className="p-6 lg:p-10 text-gray-300">
                <div className="mb-6">
                  <span className="text-6xl lg:text-7xl font-bold text-gray-400 opacity-50">
                    {step.number}
                  </span>
                  <h3 className="font-spaceGrotesk font-bold text-2xl lg:text-3xl text-primary mt-2 mb-1">
                    {step.title}
                  </h3>
                  <span className="text-highlight text-sm lg:text-base font-semibold">
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm lg:text-base mb-6">{step.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.items.map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-highlight mt-1">→</span>
                      <span className="text-sm lg:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

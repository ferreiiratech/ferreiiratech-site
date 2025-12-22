"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { faqData } from "./data"

export default function SeventhSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-secondary py-20 lg:py-32 text-primary">
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72 ">
        <div className="flex flex-col items-center justify-center text-center mb-10 lg:mb-16 mx-5">
          <h2 className="font-spaceGrotesk font-bold text-primary text-2xl mb-2 uppercase sm:text-3xl lg:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="text-gray-300 text-sm xxs:text-base lg:text-xl max-w-3xl font-inter">
            Respostas diretas para suas principais dúvidas.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-highlight/40"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left hover:bg-gray-300/5 transition-colors"
              >
                <span className="font-spaceGrotesk font-semibold text-primary text-base lg:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-highlight flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

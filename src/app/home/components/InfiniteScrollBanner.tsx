"use client"

import { useEffect, useState } from "react"

export default function InfiniteScrollBanner() {
  const [duplicated, setDuplicated] = useState(3)

  useEffect(() => {
    setDuplicated(3)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-black-100 font-spaceGrotesk font-normal text-primary py-3 text-[2rem] md:text-[2.5rem] md:py-6 lg:py-10 lg:text-[3rem]">
      <div className="animate-scroll-left flex whitespace-nowrap">
        {Array.from({ length: duplicated }).map((_, index) => (
          <div key={`banner-${index}`} className="flex items-center lg:ml-10">
            <span>Backend</span>
            <span className="mx-4 lg:mx-10 text-highlight">-</span>
            <span>Programação</span>
            <span className="mx-4 lg:mx-10 text-highlight">-</span>
            <span>Frontend</span>
            <span className="mx-4 lg:mx-10 text-highlight">-</span>
            <span>Tecnologia</span>
            <span className="mx-4 lg:mx-10 text-highlight">-</span>
            <span>Devops</span>
            <span className="mx-4 lg:ml-10 text-highlight">-</span>
          </div>
        ))}
      </div>
    </div>
  )
}

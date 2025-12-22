"use client"

import FooterSection from "@/app/components/FooterSection"
import Header from "@/app/components/Header"
import FirstSection from "@/app/home/components/FirstSection"
import FourthSection from "@/app/home/components/FourthSection"
import InfiniteScrollBanner from "@/app/home/components/InfiniteScrollBanner"
import ScrollModal from "@/app/home/components/ScrollModal"
import SecondSection from "@/app/home/components/SecondSection"
import ThirdSection from "@/app/home/components/ThirdSection"
import { useRef } from "react"

const HomePage = () => {
  const secondSectionRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <Header />
      <FirstSection />
      <div ref={secondSectionRef}>
        <SecondSection />
      </div>
      <InfiniteScrollBanner />
      <ThirdSection />
      <FourthSection />
      <FooterSection />
      <ScrollModal targetRef={secondSectionRef} />
    </div>
  )
}

export default HomePage

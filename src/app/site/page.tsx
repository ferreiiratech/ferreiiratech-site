import Header from "@/app/components/Header"
import FifthSection from "@/app/site/components/FifthSection"
import FirstSection from "@/app/site/components/FirstSection"
import FourthSection from "@/app/site/components/FourthSection"
import SecondSection from "@/app/site/components/SecondSection"
import ThirdSection from "@/app/site/components/ThirdSection"
import FooterSection from "../components/FooterSection"
import SeventhSection from "./components/SeventhSection"
import SixthSection from "./components/SixthSection"

export default function SitePage() {
  return (
    <div className="overflow-x-hidden max-w-full">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <FooterSection />
    </div>
  )
}

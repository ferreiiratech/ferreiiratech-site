import Header from "@/app/components/Header"
import FirstSection from "@/app/home/components/FirstSection"
import SecondSection from "@/app/home/components/SecondSection"
import ThirdSection from "@/app/home/components/ThirdSection"
import InfiniteScrollBanner from "./components/InfiniteScrollBanner"
import FourthSection from "./components/FourthSection"
import FooterSection from "./components/FooterSection"

const HomePage = () => {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <InfiniteScrollBanner />
      <ThirdSection />
      <FourthSection />
      <FooterSection />
    </div>
  )
}

export default HomePage

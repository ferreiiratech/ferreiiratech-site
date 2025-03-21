import Header from "@/app/components/Header"
import FirstSection from "@/app/home/components/FirstSection"
import SecondSection from "@/app/home/components/SecondSection"
import ThirdSection from "@/app/home/components/ThirdSection"
import InfiniteScrollBanner from "./components/InfiniteScrollBanner"
import FourthSection from "./components/FourthSestion"

const HomePage = () => {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <InfiniteScrollBanner />
      <ThirdSection />
      <FourthSection />
    </div>
  )
}

export default HomePage

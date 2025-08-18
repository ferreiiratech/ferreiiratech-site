import FooterSection from "@/app/components/FooterSection"
import Header from "@/app/components/Header"
import FirstSection from "@/app/home/components/FirstSection"
import FourthSection from "@/app/home/components/FourthSection"
import InfiniteScrollBanner from "@/app/home/components/InfiniteScrollBanner"
import SecondSection from "@/app/home/components/SecondSection"
import ThirdSection from "@/app/home/components/ThirdSection"

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

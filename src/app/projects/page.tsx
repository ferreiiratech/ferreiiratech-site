import FooterSection from "../components/FooterSection"
import Header from "../components/Header"
import FirstSectionProjects from "./components/first-section.projects"
import SecondSectionProjects from "./components/second-section.projects"

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <FirstSectionProjects />
      <SecondSectionProjects />
      <FooterSection />
    </>
  )
}

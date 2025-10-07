import FooterSection from "../components/FooterSection"
import Header from "../components/Header"
import FirstSectionProjects from "./components/first-section.projects"
import SecondSectionProjects from "./components/second-section.projects"

const ProjectsPage = async () => {
  return (
    <>
      <Header />
      <FirstSectionProjects />
      <SecondSectionProjects />
      <FooterSection />
    </>
  )
}

export default ProjectsPage

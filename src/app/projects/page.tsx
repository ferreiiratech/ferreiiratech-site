import FooterSection from "../components/FooterSection"
import Header from "../components/Header"
import { publicEnv } from "../env"
import FirstSectionProjects from "./components/first-section.projects"
import SecondSectionProjects from "./components/second-section.projects"

const ProjectsPage = async () => {
  const response = await fetch(`${publicEnv.NEXT_PUBLIC_SITE_URL}/api/projects`, {
    method: "GET",
    cache: "no-store",
    // next: { revalidate: 86400 },
  })

  let projetos: ProjectCardProps[] = []

  if (response.ok) {
    projetos = await response.json()
  }

  return (
    <div>
      <Header />
      <FirstSectionProjects />
      <SecondSectionProjects />
      <FooterSection />
    </div>
  )
}

export default ProjectsPage

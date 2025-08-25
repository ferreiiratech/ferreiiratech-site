import ProjectCard from "@/app/components/ui/ProjectCard"
import { env } from "@/app/env"

export default async function SecondSectionProjects() {
  const response = await fetch(`${env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
    method: "GET",
    cache: "no-store",
  })

  let projetos: ProjectCardProps[] = []

  if (response.ok) {
    projetos = await response.json()
  }

  return (
    <section className="bg-secondary mt-40 text-primary">
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        
        <h2>Projetos em Destaque</h2>
        <p>Confira alguns dos meus projetos mais recentes.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projetos.map(item => (
            <ProjectCard
              key={item.id}
              id={item.id}
              status={item.status}
              images={item.images}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              repository={item.repository}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

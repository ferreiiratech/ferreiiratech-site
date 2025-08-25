import ProjectCard from "@/app/components/ui/ProjectCard"
import { env } from "@/app/env"
import Link from "next/link"

export default async function FourthSection() {
  const response = await fetch(`${env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
    method: "GET",
    cache: "no-store",
    // next: { revalidate: 86400 },
  })

  let projetos: ProjectCardProps[] = [];

  if (response.ok) {
    projetos = await response.json()
  }

  return (
    <section className="bg-secondary text-primary mt-[-2rem] 2xl:mt-[-10rem]">
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <h1 className="text-center font-spaceGrotesk font-medium text-gray-300 mb-16 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Conheça os{" "}
          <span className="text-highlight font-bold">meus projetos</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projetos.slice(0, 4).map((item: ProjectCardProps) => (
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

        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="text-highlight hover:underline"
          >
            Veja mais projetos
          </Link>
        </div>

        <div className="w-10 h-10 lg:h-20"> </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { projetos } from "@/app/home/components/data"
import ProjectCard from "@/app/components/ui/ProjectCard"

export default function FourthSection() {
  return (
    <section className="bg-secondary text-primary mt-[-2rem] 2xl:mt-[-10rem]">
      <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
        <h1 className="text-center font-spaceGrotesk font-medium text-gray-300 mb-16 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Conheça os{" "}
          <span className="text-highlight font-bold">meus projetos</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projetos.map(item => (
            <ProjectCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              repository={item.repository}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="https://github.com/ferreiiratech"
            target="_blank"
            rel="noopener noreferrer"
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

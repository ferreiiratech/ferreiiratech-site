import Link from "next/link";
import { projetos } from "@/app/home/components/data"
import { ExternalLink } from 'lucide-react';

export default function FourthSection() {
    return (
      <section className="bg-secondary text-primary mt-[-2rem] 2xl:mt-[-10rem]">
        <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
          <h1 className="text-center font-spaceGrotesk font-medium text-primary mb-16 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Conheça os <span className="text-highlight font-bold">meus projetos</span>
          </h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projetos.map((item) => (
              <div key={item.id} className="border border-[#899099]/20 rounded-lg p-8 flex flex-col h-full">
                <h2 className="text-xl font-spaceGrotesk font-medium text-primary mb-4">{item.titulo}</h2>
                <p className="mb-6 flex-grow text-sm">
                {item.descricao.length > 100 ? item.descricao.slice(0, 300) + '...' : item.descricao}
                </p>

                <div className="mt-auto">
                    <div className="flex gap-2 mb-6">
                        {item.tecnologias.map((tech, index) => (
                        <span key={index} className="text-[0.6rem] lg:text-sm font-spaceGrotesk px-3 py-1 bg-secondary border border-[#899099]/30 rounded-lg cursor-default">
                            {tech}
                        </span> 
                        ))}
                    </div>
                    <Link href={item.repositorio} className="text-highlight hover:underline text-sm transition-colors duration-300">
                        Acesse o repositório
                        <ExternalLink className="inline-block ml-1 mb-1" size={14} />
                    </Link>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-16">
            <Link href="https://github.com/ferreiiratech" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">
              Veja mais projetos
            </Link>
          </div>
          <div className="w-10 h-10 lg:h-20"></div>
        </div>
      </section>
    );
}

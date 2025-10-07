import { PrismaClient } from "./generated/prisma"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...")

  try {
    console.log("🗑️  Limpando dados existentes...")
    await prisma.project.deleteMany({})

    const projectsData = [
      {
        status: "Finalizado",
        type: "pessoal",
        title: "Projeto Portfolio Next.js",
        description:
          "Portfolio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS",
        technologiesTag: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        repository: "https://github.com/username/portfolio",
        images: [
          "https://i0.wp.com/blog.portaleducacao.com.br/wp-content/uploads/2022/02/365-O-que-e%CC%81-tecnologia_.jpg",
        ],
        startDate: new Date("2024-01-01"),
        endDate: new Date("2024-03-01"),
        linkRepo: "https://github.com/username/portfolio",
      },
      {
        status: "Em progresso",
        type: "acadêmico",
        title: "Sistema de Gerenciamento Escolar",
        description:
          "Sistema completo para gerenciamento de escola com Java e Spring Boot",
        technologiesTag: ["Java", "Spring Boot", "PostgreSQL", "React"],
        repository: "https://github.com/username/school-system",
        images: [
          "https://i0.wp.com/blog.portaleducacao.com.br/wp-content/uploads/2022/02/365-O-que-e%CC%81-tecnologia_.jpg",
        ],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-06-01"),
        linkRepo: "https://github.com/username/school-system",
      },
      {
        status: "Finalizado",
        type: "freelancer",
        title: "E-commerce com Node.js",
        description:
          "Plataforma de e-commerce completa com pagamentos integrados",
        technologiesTag: ["Node.js", "Express", "MongoDB", "Stripe"],
        repository: "https://github.com/username/ecommerce",
        images: [
          "https://i0.wp.com/blog.portaleducacao.com.br/wp-content/uploads/2022/02/365-O-que-e%CC%81-tecnologia_.jpg",
        ],
        startDate: new Date("2023-10-01"),
        endDate: new Date("2024-01-01"),
        linkRepo: "https://github.com/username/ecommerce",
      },
    ]

    console.log("📝 Inserindo projetos no banco de dados...")
    const createdProjects = await prisma.project.createMany({
      data: projectsData,
    })

    console.log(
      `✅ Seed concluído! ${createdProjects.count} projetos inseridos.`
    )
  } catch (error) {
    console.error("❌ Erro durante o seed:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

main().catch(error => {
  console.error("❌ Erro fatal no seed:", error)
  process.exit(1)
})

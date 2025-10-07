import { publicEnv } from "@/app/env/client"
import { notFound } from "next/navigation"

async function fetchProject(id: string): Promise<ProjectCardProps | null> {
  const res = await fetch(`${publicEnv.NEXT_PUBLIC_SITE_URL}/projects/${id}`, {
    method: "GET",
    cache: "force-cache",
  })

  if (!res.ok) return null

  return res.json()
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = await fetchProject(id)

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <p className="text-base text-gray-700">{project.description}</p>
    </main>
  )
}

interface SocialCardProps {
  iconPath: string
  title: string
  altIcone?: string
  description: string
  link: string
  linkText: string
  className?: string
  classNameButton?: string
  titleLink?: string
}

interface DonationCardProps {
  handleCloseDonationCard: () => void
}

interface Technology {
  icon: string
  name: string
  description: string
  alt: string
}

interface TechItemProps {
  id: string
  tech: Technology
  isExpanded: boolean
  onToggle: (id: string) => void
}

interface CardProps {
  children: ReactNode
}

type StatusProject = "Finalizado" | "Em progresso"

interface ProjectCardProps {
  id: number
  status: StatusProject
  title: string
  description: string
  technologies: string[]
  repository: string
  images?: string[]
}

interface SearchInputProps {
  technologies: string[]
  searchTech: string
  setSearchTech: (value: string) => void
  setSelectedTag: (value: string | null) => void
  setCurrentPage: (value: number) => void
}

interface TechFilterProps {
  technologies: string[]
  selectedTag: string | null
  setSelectedTag: (tag: string | null) => void
  setCurrentPage: (page: number) => void
}

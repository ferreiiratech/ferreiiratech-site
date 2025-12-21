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
  className?: string
  children: ReactNode
}

type StatusProject = "Finalizado" | "Em progresso" | "Pausado"
type TypeProject =
  | "pessoal"
  | "acadêmico"
  | "freelancer"
  | "desafio técnico"
  | "projeto open source"
type Functionality = {
  [key: string]: string
}
type TechnologyUsed = {
  [key: string]: string
}

interface ProjectCardProps {
  isBackgroundLight?: boolean
  id: string
  status: StatusProject
  type: TypeProject
  title: string
  description: string
  context?: string
  functionality?: Functionality[]
  technologiesTag: string[]
  technologyUsed?: TechnologyUsed
  architecture?: string
  images?: string[]
  startDate: Date
  endDate: Date
  linkRepo: string
  comments?: string
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

interface JWTPayload {
  userId: string
  email: string
  role: string
}

interface ProtectedRouteProps {
  children: React.ReactNode
}

type SocialCardProps = {
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
}

interface TechItemProps {
  id: string
  tech: Technology
  isExpanded: boolean
  onToggle: (id: string) => void
}
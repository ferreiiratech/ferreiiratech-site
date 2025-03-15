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

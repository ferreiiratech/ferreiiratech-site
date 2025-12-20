interface YouTubePlayerProps {
  videoId: string
  title?: string
  showControls?: boolean
}

interface Feature {
  iconPath: string
  alt: string
  text: string
}

interface Testemonial {
  name: string
  job: string
  quote: string
  stars: number
}

interface CompaniesThatTrustedMe {
  name: string
  logoUrl: string
}

interface BenefitCard {
  icon: LucideIcon
  title: string
  description: string
}

interface ProcessStep {
  number: string
  title: string
  duration: string
  description: string
  items: string[]
}

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  name: string
  price: string
  cents: string
  isPopular?: boolean
  isCustom?: boolean
  features: PricingFeature[]
  buttonText: string
  buttonVariant?: "default" | "primary" | "custom"
}

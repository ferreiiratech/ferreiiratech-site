interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  showControls?: boolean;
}

interface Testemonial {
  name: string;
  job: string;
  quote: string;
  stars: number;
}

interface CompaniesThatTrustedMe {
  name: string;
  logoUrl: string;
}

interface BenefitCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  items: string[];
}

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

type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  repositorio: string;
};

interface ProjetoCardProps {
  projeto: Projeto;
}
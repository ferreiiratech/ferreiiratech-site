import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Landing Page | FerreiiraTech",
    template: "%s | FerreiiraTech",
  },
  description:
    "Criação profissional de landing pages que maximizam conversões e geram leads qualificados. " +
    "Solicite sua página e aumente suas vendas.",
  applicationName: "FerreiiraTech",
  metadataBase: new URL("https://ferreiiratech.com"),
  authors: [{ name: "Leonardo Ferreira", url: "https://ferreiiratech.com" }],
  creator: "Leonardo Ferreira",
  alternates: {
    canonical: "/site",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "icon",
      url: "/favicon.ico",
    },
  },
  generator: "Next.js",
  keywords: [
    "Landing Page",
    "Landing Page",
    "Geração de Leads",
    "Conversão de Vendas",
    "Design Responsivo",
    "Otimização SEO",
    "Desenvolvimento Web",
  ],
  manifest: "/manifest.webmanifest",
  openGraph: {
    url: "/site",
    title: "Criação de Landing pages que convertem | FerreiiraTech",
    description:
      "Criação profissional de landing pages que maximizam conversões e geram leads qualificados. Solicite seu site, se posicione online e aumente suas vendas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leonardo Ferreira - Desenvolvedor Full Stack",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Ferreira | FerreiiraTech",
    description:
      "Desenvolvedor backend especializado em Java, Spring Boot e APIs REST. Portfólio profissional, artigos técnicos e vendas de serviços de desenvolvimento de software, sites e landing pages.",
    site: "@ferreiiratech",
    creator: "@ferreiiratech",
    images: ["/og-image.png"],
  },
  category: "technology",
}

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="no-copy overflow-x-hidden">
      <body className="overflow-x-hidden max-w-full">
        {children}
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  )
}

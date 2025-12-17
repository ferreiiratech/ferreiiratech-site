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
  openGraph: {
    url: "/site",
    title: "Criação de Landing pages que convertem | FerreiiraTech",
    description:
      "Criação profissional de landing pages focadas em conversão e geração de leads.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leonardo Ferreira - Desenvolvedor Full Stack",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true },
  },
}

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="no-copy">
      <body>
        {children}
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  )
}

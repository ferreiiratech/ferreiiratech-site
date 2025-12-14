import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import "./globals.css"
import DatabaseConnectionValidator from "@/components/DatabaseConnectionValidator"
import SmoothScrollProvider from "../hooks/useLenis"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: {
    default: "Leonardo Ferreira | Desenvolvedor Backend Java",
    template: "%s | Leonardo Ferreira",
  },
  description:  "Desenvolvedor backend especializado em Java, Spring Boot e APIs REST. Portfólio profissional, artigos técnicos e vendas de serviços de desenvolvimento de software, sites e landing pages.",
  applicationName: "FerreiiraTech",
  metadataBase: new URL("https://ferreiiratech.com"),
  authors: [{ name: "Leonardo Ferreira", url: "https://ferreiiratech.com" }],
  creator: "Leonardo Ferreira",
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
    "Desenvolvedor Backend Java",
    "Spring Boot",
    "APIs REST",
    "Engenharia de Software",
    "Portfólio Desenvolvedor",
    "Desenvolvimento de Software",
    "Landing Pages",
  ],
  manifest: "/manifest.json",
  openGraph: {
    title: "Leonardo Ferreira | FerreiiraTech",
    description: "Desenvolvedor backend especializado em Java, Spring Boot e APIs REST. Portfólio profissional, artigos técnicos e vendas de serviços de desenvolvimento de software, sites e landing pages.",
    url: "https://ferreiiratech.com",
    siteName: "FerreiiraTech",
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
    description: "Desenvolvedor backend especializado em Java, Spring Boot e APIs REST. Portfólio profissional, artigos técnicos e vendas de serviços de desenvolvimento de software, sites e landing pages.",
    site: "@ferreiiratech",
    creator: "@ferreiiratech",
    images: ["/og-image.png"],
  },
  category: "technology",
  //verification: {
  //  google: "google" // add your google site verification code here
  //}
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="no-copy">
      <body>
        <DatabaseConnectionValidator />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  )
}

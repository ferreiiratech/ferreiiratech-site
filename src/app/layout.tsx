import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import "./globals.css"
import DatabaseConnectionValidator from "@/components/DatabaseConnectionValidator"
import SmoothScrollProvider from "../hooks/useLenis"

export const metadata: Metadata = {
  title: "Leonardo Ferreira",
  description: "Leonardo Ferreira",
  applicationName: "FerreiiraTech",
  metadataBase: new URL("https://ferreiiratech.com"),
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
  authors: [{ name: "Leonardo Ferreira", url: "https://ferreiiratech.com" }],
  keywords: [
    "Leonardo Ferreira",
    "FerreiiraTech",
    "Blog",
    "Blog Ferreiiratech",
    "Portfolio",
    "Portfolio Leonardo Ferreira",
  ],
  creator: "Leonardo Ferreira",
  manifest: "/manifest.json",
  openGraph: {
    title: "FerreiiraTech",
    description: "Leonardo Ferreira",
    url: "https://ferreiiratech.com",
    siteName: "FerreiiraTech",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "FerreiiraTech Logo",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true },
  },
  twitter: {
    card: "summary_large_image",
    title: "FerreiiraTech",
    description: "Leonardo Ferreira",
    site: "@ferreiiratech",
    creator: "@ferreiiratech",
    images: ["/favicon.ico"],
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
        <Analytics />
      </body>
    </html>
  )
}

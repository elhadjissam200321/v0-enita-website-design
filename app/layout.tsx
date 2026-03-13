import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BATIMAG – La référence média & business de la construction en Afrique',
  description: 'BATIMAG est la plateforme média et business de référence pour le secteur de la construction, des infrastructures et de l\'immobilier en Afrique.',
  keywords: 'construction Afrique, BTP Afrique, infrastructure Afrique, immobilier Afrique, génie civil',
  openGraph: {
    title: 'BATIMAG – La référence BTP en Afrique',
    description: 'Plateforme média et business pour le secteur de la construction, des infrastructures et de l\'immobilier en Afrique.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

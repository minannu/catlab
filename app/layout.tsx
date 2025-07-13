import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cat Lab - Literature & Social Media Analysis Research',
  description: 'Cutting-edge research in literature text analysis and social media analysis. Exploring the intersection of computational linguistics and digital humanities.',
  keywords: 'literature analysis, social media analysis, computational linguistics, digital humanities, text mining, NLP',
  authors: [{ name: 'Cat Lab Research Team' }],
  openGraph: {
    title: 'Cat Lab - Literature & Social Media Analysis Research',
    description: 'Cutting-edge research in literature text analysis and social media analysis.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
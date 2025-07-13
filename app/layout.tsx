import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CatLab - Computational Literature & Social Media Research',
  description: 'CatLab is a research laboratory focused on computational literature text analysis, social media sentiment analysis, and digital humanities research.',
  keywords: 'computational literature, sentiment analysis, social media research, digital humanities, text analysis',
  authors: [{ name: 'CatLab Research Team' }],
  openGraph: {
    title: 'CatLab - Computational Literature & Social Media Research',
    description: 'Advancing research in computational literature and social media analysis',
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
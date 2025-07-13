import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ResearchAreas from '@/components/ResearchAreas'
import TeamSection from '@/components/TeamSection'
import PublicationsSection from '@/components/PublicationsSection'
import NewsSection from '@/components/NewsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ResearchAreas />
      <TeamSection />
      <PublicationsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 
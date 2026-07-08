import { siteContent } from '@/data/site-content'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProposalsSection from '@/components/sections/ProposalsSection'
import CandidatesSection from '@/components/sections/CandidatesSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-16 md:pt-20">
        <HeroSection content={siteContent} />
        <ProposalsSection />
        <CandidatesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

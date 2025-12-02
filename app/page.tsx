import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { ValueProposition } from '@/components/landing/value-proposition'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Features } from '@/components/landing/features'
import { SocialProof } from '@/components/landing/social-proof'
import { Pricing } from '@/components/landing/pricing'
import { FAQ } from '@/components/landing/faq'
import { FinalCTA } from '@/components/landing/final-cta'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <Features />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}


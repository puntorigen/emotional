'use client'

import { Brain, Zap, Target, Database, Palette, Lock } from 'lucide-react'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { DotPattern } from '@/components/ui/dot-pattern'

export function Features() {
  const features = [
    {
      icon: Brain,
      name: 'Multi-Domain Analysis',
      description: 'Code, UI, and creative text evaluated with domain-specific expertise. Your standards maintained across everything you build.',
      featured: true,
    },
    {
      icon: Zap,
      name: 'Sub-150ms Latency',
      description: 'Fast enough for real-time workflows. You\'ll barely notice the check but you\'ll definitely notice fewer bugs in review.',
    },
    {
      icon: Target,
      name: 'Clear Verdicts',
      description: 'Go, revise, or abort. No ambiguity. Know exactly what needs attention and why.',
    },
    {
      icon: Database,
      name: 'Session Memory',
      description: 'Context-aware across iterations. Remembers your decisions and prevents regression to rejected patterns.',
    },
    {
      icon: Palette,
      name: 'Your Style Preferences',
      description: 'Customize for GAAL, KISS, minimalism, tone. Quality evaluation aligned with your development philosophy.',
    },
    {
      icon: Lock,
      name: 'Privacy-First',
      description: 'No raw content stored. Evaluated and discarded immediately. Only anonymized patterns (opt-out available).',
    },
  ]
  
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-neutral-900">
            Built For Real-World AI Development
          </h2>
          <p className="text-lg lg:text-xl leading-normal text-neutral-600 max-w-2xl mx-auto">
            Everything you need to maintain code quality with AI assistance
          </p>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <BentoCard
                key={index}
                name={feature.name}
                className={feature.featured ? 'col-span-3' : 'col-span-3 md:col-span-1'}
                Icon={Icon}
                description={feature.description}
                href="#"
                cta="Learn more"
                background={
                  <DotPattern
                    className="absolute inset-0 opacity-30"
                    width={16}
                    height={16}
                    cx={1}
                    cy={1}
                    cr={1}
                  />
                }
              />
            )
          })}
        </BentoGrid>
      </div>
    </section>
  )
}



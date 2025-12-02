'use client'

import { Brain, Zap, Target, Database, Palette, Lock } from 'lucide-react'

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`rounded-xl border-2 border-neutral-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 ${
                  feature.featured ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-primary/5 to-transparent' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="bg-primary/10 w-fit p-3 rounded-lg">
                    <Icon className="h-8 w-8 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug mb-2">{feature.name}</h3>
                    <p className="text-base leading-normal text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


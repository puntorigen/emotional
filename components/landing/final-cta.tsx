'use client'

import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Ripple effect placeholder - will be enhanced with MagicUI */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Your Team Moved Fast With AI.{' '}
            <span className="text-accent">Now Move Fast AND Clean.</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Automated quality evaluation for every AI suggestion. Maintain standards without slowing down.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 min-h-[56px] px-10 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Stop AI Regression Loops
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 min-h-[56px] px-8 font-semibold"
            >
              Watch How It Works
            </Button>
          </div>
          
          <div className="pt-8">
            <p className="text-white/80 text-sm">
              Used by 200+ AI-first dev teams • 5-min setup • No credit card
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


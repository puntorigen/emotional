'use client'

import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background to-accent-light/20">
      {/* Background pattern - simplified for initial implementation */}
      <div className="absolute inset-0 bg-grid-neutral-200/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900">
                AI Makes You Fast.{' '}
                <span className="text-primary">
                  We Make Sure It Doesn't Make You Sloppy.
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl leading-normal text-neutral-600 max-w-2xl">
                Automatic quality evaluation for Copilot, Cursor, and any AI coding assistant. 
                Catch inconsistencies, regressions, and style drift before code review.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ShimmerButton
                shimmerColor="#F0C49B"
                background="#7A4E9E"
                className="min-h-[48px] px-8 text-base font-semibold"
              >
                Try It Free
              </ShimmerButton>
              
              <Button 
                variant="outline" 
                size="lg"
                className="min-h-[48px] px-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                Watch Demo (2 min)
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">"Reduced AI-related PR comments by 70%.</span> My reviews actually focus on architecture now."
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                — Lead Engineer, Series B Startup
              </p>
            </div>
          </div>
          
          {/* Right: Visual (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border-2 border-neutral-200 bg-white p-6 shadow-2xl">
              <div className="space-y-4">
                {/* Mock code comparison - will be enhanced with MagicUI component */}
                <div>
                  <div className="text-xs font-semibold text-neutral-500 mb-2">BEFORE (AI Suggestion)</div>
                  <pre className="bg-neutral-900 text-neutral-50 p-4 rounded-lg overflow-x-auto font-mono text-sm">
                    <code>{`// AI re-introduced rejected pattern
function fetchData(endpoint: string) {
  return fetch(endpoint).then(r => r.json())
  // No error handling, no types
}`}</code>
                  </pre>
                </div>
                
                <div className="text-center text-xs font-semibold text-primary">
                  ↓ Emotional.tools Evaluation ↓
                </div>
                
                <div>
                  <div className="text-xs font-semibold text-success mb-2">AFTER (Improved)</div>
                  <pre className="bg-neutral-900 text-neutral-50 p-4 rounded-lg overflow-x-auto font-mono text-sm">
                    <code>{`// Maintains project patterns
async function fetchData<T>(
  endpoint: string
): Promise<T> {
  const response = await fetch(endpoint)
  if (!response.ok) throw new Error()
  return response.json()
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


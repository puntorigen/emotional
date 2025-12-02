'use client'

import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Button } from '@/components/ui/button'
import { Particles } from '@/components/ui/particles'
import { DotPattern } from '@/components/ui/dot-pattern'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated particles background */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#7A4E9E"
        refresh
      />
      
      {/* Dot pattern overlay */}
      <DotPattern
        className="absolute inset-0 opacity-20"
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy (5 cols) */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                AI Makes You Fast.{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  We Make Sure It Doesn&apos;t Make You Sloppy.
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg lg:text-xl leading-normal text-neutral-600 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Automatic quality evaluation for Copilot, Cursor, and any AI coding assistant. 
                Catch inconsistencies, regressions, and style drift before code review.
              </motion.p>
            </div>
            
            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
            </motion.div>
            
            {/* Social Proof */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">&ldquo;Reduced AI-related PR comments by 70%.</span> My reviews actually focus on architecture now.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                — Lead Engineer, Series B Startup
              </p>
            </div>
          </motion.div>
          
          {/* Right: Visual (7 cols) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-xl border-2 border-neutral-200 bg-white/90 backdrop-blur-sm p-6 shadow-2xl hover:shadow-[0_20px_70px_-10px_rgba(122,78,158,0.3)] transition-all duration-500">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}



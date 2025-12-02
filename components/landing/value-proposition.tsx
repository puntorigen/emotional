'use client'

import { useRef } from 'react'
import { MagicCard } from '@/components/ui/magic-card'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { motion } from 'framer-motion'

export function ValueProposition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const problemRef = useRef<HTMLDivElement>(null)
  const benefitRef = useRef<HTMLDivElement>(null)
  const payoffRef = useRef<HTMLDivElement>(null)
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent-light/20">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Problem Card */}
          <motion.div
            ref={problemRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MagicCard
              gradientColor="#262626"
              gradientFrom="#EF4444"
              gradientTo="#7A4E9E"
              gradientOpacity={0.2}
              className="p-8 h-full"
            >
            <div className="space-y-4">
              <div className="text-danger text-sm font-semibold tracking-wide">PROBLEM</div>
              <h3 className="text-xl font-bold leading-snug">AI Regression Loops</h3>
              <p className="text-muted-foreground leading-relaxed">
                GitHub Copilot suggested a pattern you explicitly rejected yesterday. 
                Your AI assistant oscillates between three different approaches to the same problem.
              </p>
            </div>
            </MagicCard>
          </motion.div>
          
          {/* Animated Beam */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={problemRef}
            toRef={benefitRef}
            gradientStartColor="#7A4E9E"
            gradientStopColor="#F0C49B"
            curvature={0}
            duration={3}
          />
          
          {/* Benefit Card */}
          <motion.div
            ref={benefitRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MagicCard
              gradientColor="#262626"
              gradientFrom="#7A4E9E"
              gradientTo="#B47EC8"
              gradientOpacity={0.3}
              className="p-8 h-full"
            >
            <div className="space-y-4">
              <div className="text-primary text-sm font-semibold tracking-wide">BENEFIT</div>
              <h3 className="text-xl font-bold leading-snug">Automatic Evaluation</h3>
              <p className="text-muted-foreground leading-relaxed">
                External quality evaluation catches when AI reintroduces old patterns, 
                violates your style guide, or contradicts previous decisions.
              </p>
            </div>
            </MagicCard>
          </motion.div>
          
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={benefitRef}
            toRef={payoffRef}
            gradientStartColor="#B47EC8"
            gradientStopColor="#F0C49B"
            curvature={0}
            duration={3}
            delay={0.5}
          />
          
          {/* Emotional Payoff Card */}
          <motion.div
            ref={payoffRef}
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MagicCard
              gradientColor="#262626"
              gradientFrom="#F0C49B"
              gradientTo="#F8E1C2"
              gradientOpacity={0.4}
              className="p-8 h-full"
            >
            <div className="space-y-4 max-w-2xl mx-auto text-center">
              <div className="text-accent text-sm font-semibold tracking-wide">OUTCOME</div>
              <h3 className="text-2xl font-bold leading-snug">Ship With Confidence</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Trust your AI assistant again. Ship faster without constant vigilance. 
                Stop feeling like you&apos;re fighting your tools.
              </p>
            </div>
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



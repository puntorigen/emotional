'use client'

import { Card } from '@/components/ui/card'
import { NumberTicker } from '@/components/ui/number-ticker'
import { motion } from 'framer-motion'

export function SocialProof() {
  const metrics = [
    {
      value: '15+',
      label: 'hours saved',
      sublabel: 'per team weekly',
    },
    {
      value: '60%',
      label: 'reduction',
      sublabel: 'in review cycle time',
    },
    {
      value: '85%',
      label: 'of issues',
      sublabel: 'caught automatically',
    },
  ]
  
  const testimonials = [
    {
      quote: 'Clear ROI within first sprint. This is how you do AI adoption right.',
      author: 'Director of Engineering',
      company: '50-person engineering org',
    },
    {
      quote: 'Finally have data to show leadership about AI quality impact.',
      author: 'Engineering Manager',
      company: 'Series B startup',
    },
  ]
  
  return (
    <section className="py-20 bg-gradient-to-b from-accent-light/20 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 leading-tight tracking-tight">
          Trusted By Teams That Ship Fast Without Breaking Things
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Metrics */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">By The Numbers</h3>
            
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-6xl font-bold text-primary flex items-baseline">
                  <NumberTicker value={15} />
                  <span>+</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">hours saved</div>
                  <div className="text-sm text-muted-foreground">per team weekly</div>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-6xl font-bold text-primary flex items-baseline">
                  <NumberTicker value={60} />
                  <span>%</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">reduction</div>
                  <div className="text-sm text-muted-foreground">in review cycle time</div>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-6xl font-bold text-primary flex items-baseline">
                  <NumberTicker value={85} />
                  <span>%</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">of issues</div>
                  <div className="text-sm text-muted-foreground">caught automatically</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-2xl font-bold text-neutral-800">
                  $30-50K
                </div>
                <div className="text-sm text-muted-foreground">
                  annual savings per 10-person team
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Right: Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">What Managers Say</h3>
            
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-200 hover:border-primary/30">
                  <blockquote className="text-lg leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary shrink-0" />
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



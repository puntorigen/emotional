'use client'

import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Code, Zap, Target, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function HowItWorks() {
  const steps = [
    {
      icon: Code,
      title: 'AI Suggests Code',
      description: 'Copilot, Cursor, or any MCP-compatible assistant generates code suggestions.',
    },
    {
      icon: Zap,
      title: 'Emotional Analysis',
      description: 'Our endpoint evaluates coherence, complexity, regression risk, and alignment with your preferences.',
    },
    {
      icon: Target,
      title: 'Clear Verdict',
      description: 'Receive go/revise/abort verdict with specific reasoning and actionable suggestions.',
    },
    {
      icon: CheckCircle,
      title: 'You Decide',
      description: 'Full control. Accept, reject, or refine based on emotional reasoning feedback.',
    },
  ]
  
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-neutral-900">
              How It Works
            </h2>
            <p className="text-lg lg:text-xl leading-normal text-neutral-600 max-w-2xl mx-auto">
              MCP-native integration in 2 minutes
            </p>
          </div>
          
          {/* Code Example */}
          <motion.div 
            className="rounded-xl border-2 border-neutral-200 bg-neutral-900 p-6 shadow-2xl overflow-hidden hover:shadow-[0_20px_70px_-10px_rgba(122,78,158,0.5)] transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-neutral-400 text-xs font-mono">cursor-mcp-config.json</div>
            </div>
            <pre className="text-sm text-neutral-50 font-mono overflow-x-auto">
              <code>{`{
  "mcpServers": {
    "emotional": {
      "command": "npx",
      "args": ["-y", "@emotional/mcp-server"],
      "env": {
        "EMOTIONAL_API_KEY": "emo-sk-xxxxxxxxxxxx"
      }
    }
  }
}`}</code>
            </pre>
          </motion.div>
          
          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div 
                  key={index} 
                  className="space-y-4 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-200 hover:border-primary/50 hover:bg-white/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="bg-primary/10 p-3 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                    </motion.div>
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-snug mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* CTA */}
          <div className="text-center pt-8">
            <ShimmerButton
              shimmerColor="#F0C49B"
              background="#7A4E9E"
              className="min-h-[48px] px-8 text-base font-semibold"
            >
              Add to Your MCP Config →
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  )
}



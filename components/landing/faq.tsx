'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Zap, Cpu, Shield, Lock } from 'lucide-react'

export function FAQ() {
  const faqs = [
    {
      icon: Zap,
      question: 'Does this slow down AI suggestions?',
      answer: 'No. Evaluation happens in less than 150ms. You\'ll barely notice the check but you\'ll definitely notice fewer bugs in review.',
    },
    {
      icon: Cpu,
      question: 'Does it work with my AI tool?',
      answer: 'Works with Cursor, Copilot, Continue, and any MCP-compatible assistant. If your tool uses MCP, we integrate seamlessly.',
    },
    {
      icon: Shield,
      question: 'What if it conflicts with AI suggestions?',
      answer: 'You\'re always in control. We evaluate and suggest; you decide. Most users find we catch issues they would have fixed in review anyway.',
    },
    {
      icon: Lock,
      question: 'Will my AI-generated code be stored?',
      answer: 'Never. We analyze and discard immediately. No code storage, only anonymized patterns for improvement (opt-out available on Pro).',
    },
  ]
  
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-neutral-900">
              Common Questions
            </h2>
            <p className="text-lg leading-normal text-muted-foreground">
              Everything you need to know about using Emotional.tools with AI coding assistants
            </p>
          </div>
          
          <div className="rounded-xl border-2 border-neutral-200 bg-white p-6 shadow-lg">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => {
                const Icon = faq.icon
                return (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary shrink-0" strokeWidth={2} />
                        <span className="font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" strokeWidth={2} />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" strokeWidth={2} />
              <span>No code storage</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" strokeWidth={2} />
              <span>99.9% uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


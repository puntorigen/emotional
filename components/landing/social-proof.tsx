'use client'

import { Card } from '@/components/ui/card'

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
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="text-6xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{metric.label}</div>
                    <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <div className="text-2xl font-bold text-neutral-800">
                  $30-50K
                </div>
                <div className="text-sm text-muted-foreground">
                  annual savings per 10-person team
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">What Managers Say</h3>
            
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <blockquote className="text-lg leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="h-12 w-12 rounded-full bg-primary/20 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


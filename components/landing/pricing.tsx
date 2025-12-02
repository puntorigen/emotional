'use client'

import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-accent-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-neutral-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg lg:text-xl leading-normal text-neutral-600 max-w-2xl mx-auto">
            If your team saves just 1 hour per week on reviews, this pays for itself 10x over.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="rounded-xl border-2 border-neutral-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Free</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold">$0</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Perfect for evaluation
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-sm">100 AI evaluations/day</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-sm">MCP-compatible</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-sm">Core quality evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-sm">Community support</span>
                </li>
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full min-h-[44px] border-2"
              >
                Start Free
              </Button>
            </div>
          </div>
          
          {/* Pro Tier (Recommended) */}
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <Badge className="bg-primary px-4 py-1 text-white">
                Best for AI-heavy workflows
              </Badge>
            </div>
            
            <div className="rounded-xl border-2 border-primary bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-5xl font-bold">$19</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    For professionals who ship daily
                  </p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-sm">Unlimited evaluations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-sm">Extended session memory (30 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-sm">Team preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-sm">Analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-sm">Opt-out of data contribution</span>
                  </li>
                </ul>
                
                <ShimmerButton
                  shimmerColor="#F0C49B"
                  background="#7A4E9E"
                  className="w-full min-h-[48px] text-base font-semibold"
                >
                  Try Pro 14 Days Free
                </ShimmerButton>
                
                <p className="text-xs text-center text-muted-foreground">
                  No credit card required • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* ROI Calculator Link */}
        <div className="text-center mt-12">
          <Button variant="link" className="text-lg text-primary hover:text-primary-hover">
            Calculate Your Team's ROI →
          </Button>
        </div>
      </div>
    </section>
  )
}


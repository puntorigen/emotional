'use client'

export function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent-light/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Problem Card */}
          <div className="rounded-xl border-2 border-neutral-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-4">
              <div className="text-danger text-sm font-semibold tracking-wide">PROBLEM</div>
              <h3 className="text-xl font-bold leading-snug">AI Regression Loops</h3>
              <p className="text-muted-foreground leading-relaxed">
                GitHub Copilot suggested a pattern you explicitly rejected yesterday. 
                Your AI assistant oscillates between three different approaches to the same problem.
              </p>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <div className="text-primary text-4xl font-bold">→</div>
          </div>
          
          {/* Benefit Card */}
          <div className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-4">
              <div className="text-primary text-sm font-semibold tracking-wide">BENEFIT</div>
              <h3 className="text-xl font-bold leading-snug">Automatic Evaluation</h3>
              <p className="text-muted-foreground leading-relaxed">
                External quality evaluation catches when AI reintroduces old patterns, 
                violates your style guide, or contradicts previous decisions.
              </p>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center md:col-span-3 -my-8">
            <div className="text-primary text-4xl font-bold">↓</div>
          </div>
          
          {/* Emotional Payoff Card */}
          <div className="md:col-span-3 rounded-xl border-2 border-accent/40 bg-gradient-to-br from-accent-light/50 to-transparent p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-4 max-w-2xl mx-auto text-center">
              <div className="text-accent text-sm font-semibold tracking-wide">OUTCOME</div>
              <h3 className="text-2xl font-bold leading-snug">Ship With Confidence</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Trust your AI assistant again. Ship faster without constant vigilance. 
                Stop feeling like you're fighting your tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


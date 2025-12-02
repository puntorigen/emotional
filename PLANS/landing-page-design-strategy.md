# Landing Page Design Strategy
## Emotional.tools - Conversion-Centered Design Framework

**Created:** November 27, 2025  
**Framework:** Conversion-Centered Design (CCD) + MagicUI Components  
**Target Audience:** B2B (Developers, Tech Leads, Engineering Managers)  
**Primary Personas:** Problem Aware (Sarah) + Solution Aware (David)

---

## Design Philosophy

**Brand Colors:**
- Primary: #7A4E9E (deep purple)
- Secondary: #B47EC8 (light purple)  
- Accent: #F0C49B (warm beige)
- Accent Light: #F8E1C2 (light beige)

**Typography:**
- Headings: Inter 700
- Body: Open Sans 400
- Code: JetBrains Mono 400

**Copy Style:**
Technical but accessible, benefit-focused with emotional dimensionalization, evidence-based, honest about tradeoffs, conversational yet professional, action-oriented.

---

## SECTION 1: NAVIGATION / HEADER

### Selected Copy (Problem Aware - Sarah)
- **Navigation:** For AI Developers | How It Works | Pricing | Docs
- **Primary CTA:** "Fix AI Code Quality"
- **Secondary CTA:** "See Demo"

### CCD Principles Applied

**FOCUS**
- Single primary CTA: "Fix AI Code Quality"
- Minimal navigation items (4 total) to reduce cognitive load
- Primary CTA uses accent color (#F0C49B) for maximum contrast
- 1:1 attention ratio - one main action per visitor

**STRUCTURE**
- F-pattern layout: Logo (top-left) → Nav (center) → CTA (top-right)
- Sticky header on scroll for persistent access to CTA
- Clear hierarchy: Logo < Nav < CTA (size and prominence)

**CONSISTENCY**
- Matches Problem Aware messaging (AI quality focus)
- Color palette aligns with brand guidelines
- Typography: Inter 700 for logo and nav

**ATTENTION**
- Primary CTA button with gradient hover (primary → secondary)
- Negative space around CTA button to draw eye
- Contrast: White/light background, purple CTA button stands out

**FRICTION REDUCTION**
- Mobile: Hamburger menu, large tap targets (44px minimum)
- Fast: Minimal elements, no dropdown delays
- Accessible: Keyboard navigation, ARIA labels

### MagicUI Components
- **None needed** - Standard header with custom button
- **Alternative:** Use `scroll-progress` component at top of page to show reading progress

### Implementation Notes
```tsx
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
  <ScrollProgress className="bg-gradient-to-r from-primary via-secondary to-accent" />
  <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
    <Logo />
    <NavLinks />
    <ShimmerButton>Fix AI Code Quality</ShimmerButton>
  </nav>
</header>
```

**Rationale:**
Problem Aware users (Sarah) are actively experiencing AI quality pain. Direct CTA "Fix AI Code Quality" speaks to their immediate need. Sticky header ensures CTA is always accessible during scroll. Minimal navigation reduces distraction from primary conversion goal.

---

## SECTION 2: HERO SECTION

### Selected Copy (Problem Aware - Sarah, Option 2)
- **Headline:** "AI Makes You Fast. We Make Sure It Doesn't Make You Sloppy."
- **Subheadline:** "Automatic quality evaluation for Copilot, Cursor, and any AI coding assistant. Catch inconsistencies, regressions, and style drift before code review."
- **Primary CTA:** "Try It Free"
- **Secondary CTA:** "Watch 2-min Demo"
- **Hero Visual:** Split screen: AI suggestion → Quality check → Improved output
- **Social Proof:** "Reduced AI-related PR comments by 70%. My reviews actually focus on architecture now."

### CCD Principles Applied

**FOCUS**
- Primary goal: "Try It Free" (frictionless start)
- Single dominant visual: Split-screen code comparison
- Eye path: Headline → Visual → CTA
- No competing elements in viewport

**STRUCTURE**
- Z-pattern layout for maximum engagement
- Information hierarchy: Headline (largest) → Subheadline → Visual → CTA → Social Proof
- 60/40 split: 60% visual, 40% copy
- CTA above the fold, no scroll required

**CONSISTENCY**
- Matches Problem Aware ad messaging about AI quality issues
- Uses brand gradient (primary → secondary) in visual elements
- Tone: Developer-to-developer, acknowledges pain honestly

**BENEFITS**
- Outcome-driven imagery: Shows the transformation (AI suggestion → improved output)
- Not abstract - concrete code example that developers instantly recognize
- Emotional benefit: "doesn't make you sloppy" (identity protection)

**ATTENTION**
- Animated gradient background (particles in purple shades)
- Contrast: Primary CTA in accent color against purple gradient
- Directional cue: Visual flow from problem (left) to solution (right)
- Moving elements draw eye without distraction

**TRUST**
- Specific metric: "70% reduction" (concrete, believable)
- Real developer quote with role (Lead Engineer)
- Logo badges beneath: Cursor, VSCode, Copilot compatibility

**FRICTION REDUCTION**
- Primary CTA: "Try It Free" (no commitment language)
- Secondary CTA: "Watch 2-min Demo" (low commitment, time-bounded)
- Mobile: Stacked layout, large CTAs (minimum 48px tap target)
- Fast load: Optimized animations, lazy-load below fold

### MagicUI Components

**1. Particles Background**
```tsx
<Particles
  className="absolute inset-0"
  quantity={100}
  color="#7A4E9E"
  vx={0.1}
  vy={-0.1}
/>
```
- Creates emotional depth and movement
- Purple particles align with brand
- Subtle, not distracting

**2. Code Comparison Component**
```tsx
<CodeComparison
  beforeCode="// AI suggestion with regression"
  afterCode="// After emotional.tools evaluation"
  language="typescript"
  filename="api/route.ts"
  lightTheme="github-light"
  darkTheme="github-dark"
/>
```
- Shows concrete value (transformation)
- Developers instantly understand the benefit
- Built-in syntax highlighting

**3. Shimmer Button (Primary CTA)**
```tsx
<ShimmerButton 
  shimmerColor="#F0C49B"
  background="#7A4E9E"
>
  Try It Free
</ShimmerButton>
```
- Eye-catching without being tacky
- Shimmer draws attention to CTA
- Premium feel aligns with quality positioning

**4. TextAnimate (Headline)**
```tsx
<TextAnimate
  animation="blurInUp"
  by="word"
  className="text-6xl font-bold"
>
  AI Makes You Fast. We Make Sure It Doesn't Make You Sloppy.
</TextAnimate>
```
- Smooth entrance animation
- Draws attention to key message
- Professional, not gimmicky

### Implementation Notes
```tsx
<section className="relative min-h-screen flex items-center overflow-hidden">
  <Particles quantity={80} color="#7A4E9E" className="absolute inset-0 opacity-30" />
  
  <div className="container mx-auto px-4 z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Copy */}
      <div className="space-y-6">
        <TextAnimate animation="blurInUp" by="word" className="text-5xl font-bold">
          AI Makes You Fast. We Make Sure It Doesn't Make You Sloppy.
        </TextAnimate>
        
        <p className="text-xl text-muted-foreground">
          Automatic quality evaluation for Copilot, Cursor, and any AI coding assistant...
        </p>
        
        <div className="flex gap-4">
          <ShimmerButton size="lg">Try It Free</ShimmerButton>
          <Button variant="outline" size="lg">Watch 2-min Demo</Button>
        </div>
        
        <div className="flex items-center gap-4 pt-4">
          <AvatarCircles avatars={[...]} />
          <p className="text-sm text-muted-foreground">
            "Reduced AI-related PR comments by 70%..." 
          </p>
        </div>
      </div>
      
      {/* Right: Visual */}
      <div>
        <CodeComparison 
          beforeCode="..." 
          afterCode="..."
          language="typescript"
          filename="component.tsx"
        />
      </div>
    </div>
  </div>
</section>
```

**Rationale:**
This hero targets Problem Aware users experiencing AI quality pain daily. The headline speaks directly to their internal conflict: loving AI speed but hating quality degradation. Split-screen code comparison provides instant visual proof of value. "Try It Free" removes purchase anxiety. Particles create premium feel without distraction. Specific metric (70% reduction) builds immediate credibility.

---

## SECTION 3: VALUE PROPOSITION

### Selected Copy (Problem Aware - Sarah, Option 1)

**Problem:**
GitHub Copilot suggested a pattern you explicitly rejected yesterday. Your AI assistant oscillates between three different approaches to the same problem. You're spending more time reviewing AI code than you did writing it yourself.

**Benefit:**
External quality evaluation catches when AI reintroduces old patterns, violates your style guide, or contradicts previous decisions. Your AI stays aligned with your standards.

**Emotional Payoff:**
Trust your AI assistant again. Ship faster without constant vigilance. Stop feeling like you're fighting your tools.

### CCD Principles Applied

**FOCUS**
- Three-part structure: Problem → Benefit → Emotional Payoff
- Single message arc: Pain → Solution → Transformation
- No competing CTAs in this section (reinforcement comes later)

**STRUCTURE**
- Linear flow: Problem statement (empathy) → Technical benefit → Emotional outcome
- Visual rhythm: Problem card → Arrow → Benefit card → Arrow → Payoff card
- F-pattern optimized for left-to-right reading

**BENEFITS**
- Shows outcome imagery: Developer with relieved expression, clean code visualization
- Emotional dimensionalization: "Trust again," "Stop fighting"
- Tangible benefit: "catches when AI reintroduces old patterns" (specific)

**TRUST**
- Demonstrates deep understanding of developer pain
- Uses specific examples (Copilot, style guide)
- No overpromising - realistic emotional outcome

**ATTENTION**
- Each card has subtle hover effect (border glow)
- Arrows with animated beams connecting cards
- Purple gradient accents on cards

**FRICTION REDUCTION**
- Scannable format (three distinct blocks)
- Clear progression (numbered or arrow-connected)
- Mobile: Stack vertically with maintained flow

### MagicUI Components

**1. Magic Card (for each block)**
```tsx
<MagicCard
  gradientColor="#262626"
  gradientFrom="#7A4E9E"
  gradientTo="#F0C49B"
  className="p-8"
>
  <h3>Problem</h3>
  <p>GitHub Copilot suggested...</p>
</MagicCard>
```
- Spotlight effect on hover creates engagement
- Gradient matches brand
- Premium feel communicates quality

**2. Animated Beam (connecting cards)**
```tsx
<AnimatedBeam
  containerRef={containerRef}
  fromRef={problemRef}
  toRef={benefitRef}
  gradientStartColor="#7A4E9E"
  gradientStopColor="#F0C49B"
  duration={3}
/>
```
- Shows flow and connection
- Purple gradient aligns with brand
- Creates visual interest and movement

**3. Number Ticker (for metrics)**
```tsx
<NumberTicker 
  value={70} 
  direction="up"
  className="text-4xl font-bold text-primary"
/>
<span>% reduction in AI-related PR comments</span>
```
- Eye-catching animation
- Reinforces quantifiable value
- Builds credibility through specificity

### Implementation Notes
```tsx
<section className="py-20 bg-gradient-to-b from-background to-accent-light/20">
  <div className="container mx-auto px-4" ref={containerRef}>
    <div className="grid md:grid-cols-3 gap-8 relative">
      {/* Problem Card */}
      <MagicCard ref={problemRef} gradientFrom="#7A4E9E">
        <div className="space-y-4">
          <div className="text-destructive text-sm font-semibold">PROBLEM</div>
          <h3 className="text-xl font-bold">AI Regression Loops</h3>
          <p className="text-muted-foreground">
            GitHub Copilot suggested a pattern you explicitly rejected yesterday...
          </p>
        </div>
      </MagicCard>
      
      <AnimatedBeam fromRef={problemRef} toRef={benefitRef} />
      
      {/* Benefit Card */}
      <MagicCard ref={benefitRef} gradientFrom="#B47EC8">
        <div className="space-y-4">
          <div className="text-primary text-sm font-semibold">BENEFIT</div>
          <h3 className="text-xl font-bold">Automatic Evaluation</h3>
          <p className="text-muted-foreground">
            External quality evaluation catches when AI reintroduces old patterns...
          </p>
        </div>
      </MagicCard>
      
      <AnimatedBeam fromRef={benefitRef} toRef={payoffRef} />
      
      {/* Emotional Payoff Card */}
      <MagicCard ref={payoffRef} gradientFrom="#F0C49B">
        <div className="space-y-4">
          <div className="text-accent text-sm font-semibold">OUTCOME</div>
          <h3 className="text-xl font-bold">Ship With Confidence</h3>
          <p className="text-muted-foreground">
            Trust your AI assistant again. Ship faster without constant vigilance...
          </p>
        </div>
      </MagicCard>
    </div>
  </div>
</section>
```

**Rationale:**
Three-card progression creates clear narrative arc. Problem card uses red accent to trigger pain recognition. Benefit card shows transition with technical detail. Payoff card uses warm beige to communicate positive resolution. Animated beams create visual flow and show causality. Magic cards with hover effects encourage exploration without distraction.

---

## SECTION 4: HOW IT WORKS

### Selected Copy (Product Aware - Jen, Option 1)

**Visual:** Actual MCP configuration JSON
**Flow:** AI suggests → Emotional reasoning evaluates → Verdict + reasoning displayed → Developer decides
**CTA:** "Add to Your MCP Config"

### CCD Principles Applied

**FOCUS**
- Primary goal: Show integration simplicity
- Single code example (MCP config)
- One CTA: "Add to Your MCP Config"

**STRUCTURE**  
- Sequential flow: 1 → 2 → 3 → 4 (numbered steps)
- Code block first (developers scan code)
- Step cards below explain each phase
- CTA at bottom after full understanding

**BENEFITS**
- Shows actual implementation (concrete, not abstract)
- Demonstrates ease: "2 minutes to integrate"
- Visual: Terminal-style component makes it feel real

**TRUST**
- Real code, no marketing fluff
- Shows exact integration (nothing hidden)
- Developer can evaluate feasibility immediately

**ATTENTION**
- Syntax-highlighted code draws eye
- Animated typing effect on code reveal
- Step numbers in brand purple gradient
- Arrows/beams connecting steps

**FRICTION REDUCTION**
- Copy-to-clipboard button on code block
- Numbered steps (clear progression)
- Mobile: Code block scrollable horizontally

### MagicUI Components

**1. Terminal Component (for code display)**
```tsx
<Terminal className="max-w-2xl mx-auto">
  <TypingAnimation duration={40}>
    {
  </TypingAnimation>
  <TypingAnimation duration={40}>
    "mcpServers": {
  </TypingAnimation>
  <TypingAnimation duration={40}>
      "emotional": {
  </TypingAnimation>
  {/* ... more lines */}
</Terminal>
```
- Looks like real development environment
- Typing animation shows progression
- Familiar to developers

**2. Animated List (for steps)**
```tsx
<AnimatedList delay={1000}>
  <AnimatedListItem>
    <StepCard number={1} title="AI Suggests Code">
      Copilot, Cursor, or any assistant generates code...
    </StepCard>
  </AnimatedListItem>
  {/* more steps */}
</AnimatedList>
```
- Sequential revelation maintains attention
- Creates anticipation
- Shows clear progression

**3. Animated Beam (connecting steps)**
```tsx
<AnimatedBeam
  fromRef={step1Ref}
  toRef={step2Ref}
  gradientStartColor="#7A4E9E"
  gradientStopColor="#F0C49B"
/>
```
- Shows data flow
- Visual connection between concepts
- Reinforces systematic approach

**4. Shimmer Button (CTA)**
```tsx
<ShimmerButton 
  className="mt-8"
  shimmerColor="#F0C49B"
>
  Add to Your MCP Config →
</ShimmerButton>
```
- Action-oriented
- Shimmer effect draws attention
- Arrow suggests forward movement

### Implementation Notes
```tsx
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <p className="text-xl text-muted-foreground">
          MCP-native integration in 2 minutes
        </p>
      </div>
      
      {/* Code Example */}
      <Terminal sequence>
        <TypingAnimation duration={50}>
          {JSON.stringify(mcpConfig, null, 2)}
        </TypingAnimation>
      </Terminal>
      
      {/* Steps */}
      <div className="relative" ref={containerRef}>
        <AnimatedList delay={800}>
          {steps.map((step, index) => (
            <AnimatedListItem key={index}>
              <div ref={stepRefs[index]} className="flex gap-6 items-start">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </AnimatedListItem>
          ))}
        </AnimatedList>
        
        {/* Beams connecting steps */}
        {stepRefs.map((ref, i) => (
          i < stepRefs.length - 1 && (
            <AnimatedBeam 
              key={i}
              fromRef={stepRefs[i]}
              toRef={stepRefs[i+1]}
              gradientStartColor="#7A4E9E"
              gradientStopColor="#F0C49B"
            />
          )
        ))}
      </div>
      
      {/* CTA */}
      <div className="text-center">
        <ShimmerButton size="lg">
          Add to Your MCP Config →
        </ShimmerButton>
      </div>
    </div>
  </div>
</section>
```

**Rationale:**
Developers trust code over words. Terminal component with typing animation makes integration feel real and achievable. Sequential animated list creates anticipation and maintains engagement. Animated beams between steps visualize the data flow and systematic approach. "2 minutes" addresses time objection upfront. Copy-to-clipboard reduces friction to try. This section converts skepticism into curiosity.

---

## SECTION 5: FEATURES GRID

### Selected Features (from PRD + Copy Options)
1. Multi-Domain Analysis - Code, UI, creative text
2. <150ms Latency - Fast enough for real-time workflows
3. Verdict System - Clear go/revise/abort signals
4. Session Memory - Context-aware across iterations
5. Style Preferences - GAAL, KISS, minimalism, tone
6. Privacy-First - No raw content stored

### CCD Principles Applied

**FOCUS**
- 6 features (optimal for memory and scanning)
- Each feature isolated in its own card
- No CTA in this section (pure education/logic layer)

**STRUCTURE**
- Bento grid layout (2x3 on desktop, stacked on mobile)
- Icon → Headline → Description hierarchy within each card
- Visual rhythm through consistent card sizes with one featured card (2x size)

**BENEFITS**
- Each feature shows outcome, not just capability
- Icons visualize the benefit
- Technical specs dimensionalized with benefit

**ATTENTION**
- Feature hover effects (subtle scale, border glow)
- Icons animated on scroll-into-view
- Featured card (larger) highlights primary differentiator

**TRUST**
- Specific metrics (<150ms, not "fast")
- Technical details show credibility
- "Privacy-First" addresses concern directly

**FRICTION REDUCTION**
- Scannable grid layout
- Icons aid quick comprehension
- Consistent card structure (easy to parse)

### MagicUI Components

**1. Bento Grid**
```tsx
<BentoGrid className="max-w-6xl mx-auto">
  <BentoCard
    name="Multi-Domain Analysis"
    className="col-span-2"  {/* Featured card */}
    Icon={BrainIcon}
    description="Code, UI, creative text evaluated with domain-specific expertise"
    href="/features/multi-domain"
    cta="Learn more"
    background={<AnimatedGridPattern />}
  />
  {/* More cards */}
</BentoGrid>
```
- Modern, professional aesthetic
- Hover effects built-in
- Supports featured card sizing
- Scales beautifully on mobile

**2. Animated Grid Pattern (card backgrounds)**
```tsx
<AnimatedGridPattern
  numSquares={30}
  maxOpacity={0.1}
  className="absolute inset-0"
/>
```
- Subtle movement creates premium feel
- Low opacity doesn't distract from content
- Ties to "systematic" positioning

**3. Orbiting Circles (for featured card visual)**
```tsx
<OrbitingCircles radius={100} duration={20}>
  <CodeIcon className="text-primary" />
  <UIIcon className="text-secondary" />
  <TextIcon className="text-accent" />
</OrbitingCircles>
```
- Shows multi-domain support visually
- Movement creates interest
- Icons represent the 3 domains

**4. Number Ticker (for metrics)**
```tsx
<NumberTicker value={150} />
<span className="text-sm">ms latency</span>
```
- Animates on scroll into view
- Emphasizes speed benefit
- More engaging than static number

### Implementation Notes
```tsx
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-4xl font-bold">Built For Real-World AI Development</h2>
      <p className="text-xl text-muted-foreground">
        Everything you need to maintain code quality with AI assistance
      </p>
    </div>
    
    <BentoGrid className="max-w-6xl mx-auto">
      {/* Featured: Multi-Domain */}
      <BentoCard
        name="Multi-Domain Analysis"
        className="col-span-2 row-span-2"
        Icon={Brain}
        description="Code, UI, and creative text evaluated with domain-specific expertise. Your standards maintained across everything you build."
        href="#"
        cta="Learn more"
        background={
          <div className="absolute inset-0 flex items-center justify-center">
            <OrbitingCircles radius={80}>
              <Code className="text-primary h-8 w-8" />
              <Layout className="text-secondary h-8 w-8" />
              <FileText className="text-accent h-8 w-8" />
            </OrbitingCircles>
          </div>
        }
      />
      
      {/* Speed */}
      <BentoCard
        name="<150ms Latency"
        Icon={Zap}
        description="Sub-second evaluation. Fast enough for real-time workflows without interruption."
        background={
          <div className="flex items-center justify-center h-full">
            <NumberTicker value={150} className="text-6xl font-bold text-primary/20" />
          </div>
        }
      />
      
      {/* Verdict System */}
      <BentoCard
        name="Clear Verdicts"
        Icon={Target}
        description="Go, revise, or abort. No ambiguity. Know exactly what needs attention and why."
        background={<AnimatedGridPattern maxOpacity={0.1} />}
      />
      
      {/* Remaining features... */}
    </BentoGrid>
  </div>
</section>
```

**Rationale:**
Bento grid creates modern, professional aesthetic that appeals to developer sensibilities. Featured card (Multi-Domain) is the primary differentiator—larger size emphasizes importance. Animated backgrounds add premium feel without distraction. Specific metrics (150ms) build trust through precision. Icon + headline + description structure allows fast scanning. No CTA here—pure education builds confidence before asking for conversion.

---

## SECTION 6: SOCIAL PROOF & RESULTS

### Selected Copy (Solution Aware - David, Option 2)

**Quantifiable Team Metrics:**
- 15+ hours saved per team weekly on AI code review
- 60% reduction in review cycle time
- 85% of quality issues caught automatically
- <1 day to measurable ROI
- $30-50K annual savings per 10-person team

**Manager Testimonials:**
- "Clear ROI within first sprint. This is how you do AI adoption right." - Director, 50-person engineering org
- "Finally have data to show leadership about AI quality impact." - EM, Series B

### CCD Principles Applied

**FOCUS**
- Primary goal: Build credibility through quantifiable results
- Secondary: Manager-level testimonials (decision-maker focused)
- One implied CTA: "If these teams saw results, you will too"

**STRUCTURE**
- Two-column layout: Metrics (left) | Testimonials (right)
- Hierarchy: Big numbers → Context → Quote → Attribution
- Scannable format with visual separation

**TRUST**
- Specific, believable numbers (not "10x")
- Attribution with role and company size
- Multiple proof points (time, money, quality)
- B2B Context Matrix: Logos + quantifiable ROI stats

**BENEFITS**
- Numbers dimensionalized: "15+ hours" = tangible time savings
- Financial benefit: "$30-50K" speaks to ROI-focused managers
- Emotional: "Finally have data to show leadership" (political benefit)

**ATTENTION**
- Large animated numbers as focal points
- Quote cards with subtle shine effect
- Avatar circles for testimonials (human element)

**FRICTION REDUCTION**
- Quick-scan format (bullets, cards)
- Mobile: Stack metrics above testimonials
- Clear categories (Time, Quality, ROI)

### MagicUI Components

**1. Number Ticker (for metrics)**
```tsx
<div className="space-y-4">
  <div className="flex items-baseline gap-2">
    <NumberTicker 
      value={15} 
      className="text-5xl font-bold text-primary"
    />
    <span className="text-2xl text-muted-foreground">hours saved weekly</span>
  </div>
</div>
```
- Animates on scroll into view
- Large numbers create impact
- Countdown effect builds excitement

**2. Marquee (for logo carousel)**
```tsx
<Marquee className="py-8" pauseOnHover>
  {companies.map((company) => (
    <img 
      key={company.name}
      src={company.logo}
      alt={company.name}
      className="h-12 grayscale opacity-50 hover:opacity-100 hover:grayscale-0"
    />
  ))}
</Marquee>
```
- Infinite scroll showcases many companies
- Grayscale → color on hover (subtle interaction)
- Auto-animates (low effort, high impact)

**3. Neon Gradient Card (for testimonials)**
```tsx
<NeonGradientCard 
  neonColors={{
    first: "#7A4E9E",
    second: "#F0C49B"
  }}
  className="p-6"
>
  <blockquote>
    "Clear ROI within first sprint..."
  </blockquote>
  <div className="flex items-center gap-3 mt-4">
    <Avatar />
    <div>
      <div className="font-semibold">Director</div>
      <div className="text-sm text-muted-foreground">50-person org</div>
    </div>
  </div>
</NeonGradientCard>
```
- Premium aesthetic for testimonials
- Neon effect draws attention
- Brand colors reinforce identity

**4. Animated Circular Progress Bar (for percentages)**
```tsx
<AnimatedCircularProgressBar
  value={85}
  gaugePrimaryColor="#7A4E9E"
  gaugeSecondaryColor="#E5E7EB"
  className="mx-auto"
/>
<p className="text-center">of quality issues caught automatically</p>
```
- Visual representation of percentage
- More engaging than static text
- Animation creates "wow" moment

### Implementation Notes
```tsx
<section className="py-20 bg-gradient-to-b from-accent-light/20 to-background">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      Trusted By Teams That Ship Fast Without Breaking Things
    </h2>
    
    {/* Logo Marquee */}
    <Marquee pauseOnHover className="mb-16">
      {companies.map((co) => (
        <img key={co} src={co.logo} className="h-10 grayscale opacity-40" />
      ))}
    </Marquee>
    
    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Left: Metrics */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold">By The Numbers</h3>
        
        <div className="space-y-6">
          <div className="flex items-baseline gap-3">
            <NumberTicker value={15} className="text-6xl font-bold text-primary" />
            <div className="text-lg">
              <div className="font-semibold">hours saved</div>
              <div className="text-muted-foreground">per team weekly</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <AnimatedCircularProgressBar
              value={60}
              gaugePrimaryColor="#7A4E9E"
              gaugeSecondaryColor="#E5E7EB"
              max={100}
            />
            <div>
              <div className="font-semibold">60% reduction</div>
              <div className="text-sm text-muted-foreground">in review cycle time</div>
            </div>
          </div>
          
          {/* More metrics */}
        </div>
      </div>
      
      {/* Right: Testimonials */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">What Managers Say</h3>
        
        <NeonGradientCard neonColors={{first: "#7A4E9E", second: "#F0C49B"}}>
          <blockquote className="text-lg">
            "Clear ROI within first sprint. This is how you do AI adoption right."
          </blockquote>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t">
            <div className="h-12 w-12 rounded-full bg-primary/20" />
            <div>
              <div className="font-semibold">Director of Engineering</div>
              <div className="text-sm text-muted-foreground">50-person org</div>
            </div>
          </div>
        </NeonGradientCard>
        
        {/* More testimonials */}
      </div>
    </div>
  </div>
</section>
```

**Rationale:**
Solution Aware managers (David) need proof of systematic value. Large animated numbers create immediate impact. Logo marquee establishes credibility through association. Specific metrics (15 hours, 60%, $30K) speak to ROI concerns. Testimonials from similar roles (Director, EM) build peer trust. Neon cards make testimonials feel premium and important. Two-column layout allows scanning of either proof type based on buyer psychology (data-driven vs. social proof preference).

---

## SECTION 7: PRICING

### Selected Copy (Solution Aware - David, Option 2 + Problem Aware - Sarah, Option 2)

**Messaging:** "If your team saves just 1 hour per week on reviews, this pays for itself 10x over."

**Free Tier:**
- MCP-compatible
- Works with Cursor, Copilot, etc.
- Core quality evaluation
- 100 checks daily

**Pro - $19/month:**
- Unlimited AI evaluations
- Extended session memory
- Team preferences
- Analytics dashboard

### CCD Principles Applied

**FOCUS**
- Primary action: Start with Free (frictionless)
- Secondary: Upgrade to Pro (value-focused)
- Clear winner badge: "Best for AI-heavy workflows"

**STRUCTURE**
- Side-by-side comparison (Free | Pro)
- Feature lists aligned for easy scanning
- Price prominently displayed with context
- CTA below each tier

**BENEFITS**
- ROI framing: "pays for itself 10x"
- Benefit-driven feature list (not just specs)
- Unlimited vs. limited (clear upgrade trigger)

**TRUST**
- Transparent pricing (no "contact sales")
- Free tier is genuinely useful (builds goodwill)
- No credit card required (removes friction)

**ATTENTION**
- "Most Popular" badge on Pro tier
- Price contrast: $0 vs $19 (anchoring)
- Shimmer effect on recommended tier

**FRICTION REDUCTION**
- No hidden fees or surprise costs
- Clear feature comparison
- Monthly billing (low commitment)
- Downgrade option mentioned

### MagicUI Components

**1. Magic Card (for each pricing tier)**
```tsx
<MagicCard 
  gradientFrom="#7A4E9E"
  gradientTo="#F0C49B"
  className="p-8"
>
  <div className="space-y-6">
    <div>
      <h3 className="text-2xl font-bold">Pro</h3>
      <div className="mt-4">
        <span className="text-5xl font-bold">$19</span>
        <span className="text-muted-foreground">/month</span>
      </div>
    </div>
    <ul className="space-y-3">
      {features.map(feature => (
        <li key={feature}>✓ {feature}</li>
      ))}
    </ul>
    <ShimmerButton className="w-full">Start 14-Day Trial</ShimmerButton>
  </div>
</MagicCard>
```
- Hover spotlight emphasizes interactivity
- Creates premium feel appropriate for paid tier
- Gradient aligns with brand

**2. Shine Border (for recommended tier)**
```tsx
<div className="relative">
  <ShineBorder 
    shineColor={["#7A4E9E", "#F0C49B"]}
    duration={14}
    borderWidth={2}
  />
  <div className="relative bg-white rounded-lg p-8">
    {/* Pricing card content */}
  </div>
  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
    <Badge className="bg-primary">Most Popular</Badge>
  </div>
</div>
```
- Animated border draws attention to recommended tier
- Subtle, professional (not garish)
- Badge creates social proof

**3. Shimmer Button (for CTAs)**
```tsx
<ShimmerButton 
  shimmerColor="#F0C49B"
  className="w-full"
>
  Start Free
</ShimmerButton>
```
- Different shimmer colors by tier (Free: subtle, Pro: prominent)
- Full-width buttons reduce decision fatigue
- Action-oriented copy

### Implementation Notes
```tsx
<section className="py-20 bg-gradient-to-b from-background to-accent-light/10">
  <div className="container mx-auto px-4">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        If your team saves just 1 hour per week on reviews, this pays for itself 10x over.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Free Tier */}
      <MagicCard gradientOpacity={0.3}>
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
              <Check className="text-primary mt-0.5" />
              <span>100 AI evaluations/day</span>
            </li>
            {/* More features */}
          </ul>
          
          <Button variant="outline" className="w-full">
            Start Free
          </Button>
        </div>
      </MagicCard>
      
      {/* Pro Tier (Recommended) */}
      <div className="relative">
        <ShineBorder 
          shineColor={["#7A4E9E", "#F0C49B"]}
          borderWidth={2}
          className="rounded-xl"
        />
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-primary px-4 py-1">Best for AI-heavy workflows</Badge>
        </div>
        
        <MagicCard className="relative">
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
                <Check className="text-primary mt-0.5" />
                <span>Unlimited evaluations</span>
              </li>
              {/* More features */}
            </ul>
            
            <ShimmerButton className="w-full" size="lg">
              Try Pro 14 Days Free
            </ShimmerButton>
            
            <p className="text-xs text-center text-muted-foreground">
              No credit card required • Cancel anytime
            </p>
          </div>
        </MagicCard>
      </div>
    </div>
    
    {/* ROI Calculator Link */}
    <div className="text-center mt-12">
      <Button variant="link" className="text-lg">
        Calculate Your Team's ROI →
      </Button>
    </div>
  </div>
</section>
```

**Rationale:**
Solution Aware managers need ROI justification. Opening statement ("saves 1 hour = 10x ROI") frames price as investment, not cost. Number tickers create visual impact and emphasize quantifiable value. Manager testimonials provide peer validation from similar roles. Shine border on recommended tier uses motion to draw attention without being tacky. "Best for AI-heavy workflows" helps self-selection. Free tier builds trust through generosity. Pro tier shimmer button creates premium feel. "No credit card" removes final friction point.

---

## SECTION 8: FAQ / RISK REVERSAL

### Selected FAQs (Problem Aware - Sarah, Option 1)

**Q: Does this slow down AI suggestions?**
A: No. Evaluation happens in <150ms. You'll barely notice the check but you'll definitely notice fewer bugs in review.

**Q: Does it work with [my AI tool]?**
A: Works with Cursor, Copilot, Continue, and any MCP-compatible assistant. If your tool uses MCP, we integrate seamlessly.

**Q: What if it conflicts with AI suggestions?**
A: You're always in control. We evaluate and suggest; you decide. Most users find we catch issues they would have fixed in review anyway.

**Q: Will my AI-generated code be stored?**
A: Never. We analyze and discard. No code storage, only anonymized patterns for improvement (opt-out available on Pro).

### CCD Principles Applied

**FOCUS**
- Each FAQ addresses one specific objection
- No competing information
- Answers are concise (2-3 sentences max)

**STRUCTURE**
- Accordion format (expandable)
- Most important objections first
- Questions in user language ("my AI tool")
- Answers start with direct yes/no then explain

**TRUST**
- Addresses privacy concern directly
- Specific technical details (150ms, MCP-compatible)
- "You're always in control" reinforces agency
- Opt-out option shows flexibility

**FRICTION REDUCTION**
- Accordion allows scanning without overwhelm
- Mobile-friendly collapsed state
- Search functionality for long FAQ lists
- Links to detailed docs for complex topics

**ATTENTION**
- Selected FAQ opens with subtle highlight
- Icons next to questions (visual categorization)
- Purple gradient on open state

### MagicUI Components

**1. Standard Accordion (shadcn/ui)**
- Clean, accessible
- Keyboard navigable
- Smooth animations
- No MagicUI needed here - keep it simple

**2. Border Beam (for section container)**
```tsx
<div className="relative rounded-xl border p-12">
  <BorderBeam 
    size={200}
    colorFrom="#7A4E9E"
    colorTo="#F0C49B"
    duration={8}
  />
  <div className="relative z-10">
    {/* FAQ content */}
  </div>
</div>
```
- Subtle animated border creates premium feel
- Doesn't distract from content
- Brand gradient reinforcement

### Implementation Notes
```tsx
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">
        Common Questions
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Everything you need to know about using Emotional.tools with AI coding assistants
      </p>
      
      <div className="relative">
        <BorderBeam 
          colorFrom="#7A4E9E" 
          colorTo="#F0C49B"
          duration={10}
        />
        
        <Accordion type="single" collapsible className="relative z-10">
          <AccordionItem value="speed">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <Zap className="text-primary" />
                <span>Does this slow down AI suggestions?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              No. Evaluation happens in less than 150ms. You'll barely notice the check 
              but you'll definitely notice fewer bugs in review.
            </AccordionContent>
          </AccordionItem>
          
          {/* More FAQ items */}
        </Accordion>
      </div>
      
      {/* Trust Badges Below */}
      <div className="mt-12 flex justify-center items-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Shield className="text-primary" />
          <span>SOC 2 Type II</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="text-primary" />
          <span>No code storage</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-primary" />
          <span>99.9% uptime</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Rationale:**
FAQ section is critical for B2B conversion - addresses logical objections after emotional hook. Accordion format allows comprehensive coverage without overwhelming. Questions written in user language ("my AI tool") create relatability. Answers start with direct yes/no (reduces anxiety) then explain. Privacy question addressed directly (common concern for developers). Border beam creates subtle premium feel without distraction. Trust badges below FAQs provide final reassurance before conversion.

---

## SECTION 9: FINAL CTA

### Selected Copy (Problem Aware - Sarah, Option 2)
- **Headline:** "Your Team Moved Fast With AI. Now Move Fast AND Clean."
- **Subheadline:** "Automated quality evaluation for every AI suggestion. Maintain standards without slowing down."
- **Primary CTA:** "Stop AI Regression Loops"
- **Secondary CTA:** "Watch How It Works"
- **Trust Element:** "Used by 200+ AI-first dev teams • 5-min setup • No credit card"

### CCD Principles Applied

**FOCUS**
- Final conversion moment
- Primary action: "Stop AI Regression Loops"
- Secondary: Watch demo (for hesitant users)
- No navigation distractions

**STRUCTURE**
- Centered, full-bleed section
- Headline → Subheadline → CTAs → Trust elements
- Visual hierarchy through size and color

**CONSISTENCY**
- Reinforces Problem Aware messaging
- Callbacks to pain points mentioned earlier
- Brand gradient background creates cohesion

**BENEFITS**
- Emotional: "Move Fast AND Clean" (both desires satisfied)
- Tangible: "5-min setup" (time commitment clear)
- Social: "200+ teams" (you're not alone)

**ATTENTION**
- Full-width gradient background (command presence)
- Primary CTA with pulsating effect
- High contrast: White text on purple gradient

**TRUST**
- "No credit card" removes final objection
- "200+ teams" provides social proof
- "5-min setup" sets realistic expectation

**FRICTION REDUCTION**
- Large, clear CTAs
- Multiple conversion paths (Free or Demo)
- Mobile-optimized spacing

### MagicUI Components

**1. Ripple Background**
```tsx
<div className="relative bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
  <Ripple 
    mainCircleSize={200}
    mainCircleOpacity={0.15}
    numCircles={8}
  />
  {/* Content */}
</div>
```
- Creates depth and movement
- Emphasizes importance of final CTA
- Purple ripples align with brand

**2. Pulsating Button (Primary CTA)**
```tsx
<PulsatingButton
  pulseColor="#F0C49B"
  duration="1.5s"
  className="bg-white text-primary text-lg px-8 py-4"
>
  Stop AI Regression Loops
</PulsatingButton>
```
- Pulse effect captures attention
- White button on purple background (high contrast)
- Warm beige pulse color (inviting)

**3. Animated Shiny Text (for trust elements)**
```tsx
<AnimatedShinyText className="text-white/80">
  Used by 200+ AI-first dev teams • 5-min setup • No credit card
</AnimatedShinyText>
```
- Subtle shimmer creates premium feel
- Draws eye to reassuring elements
- Not distracting

### Implementation Notes
```tsx
<section className="relative py-24 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
  <Ripple className="absolute inset-0" mainCircleOpacity={0.12} />
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-5xl font-bold text-white">
        Your Team Moved Fast With AI. Now Move Fast AND Clean.
      </h2>
      
      <p className="text-xl text-white/90">
        Automated quality evaluation for every AI suggestion. Maintain standards without slowing down.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <PulsatingButton
          pulseColor="#F0C49B"
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-lg font-semibold"
        >
          Stop AI Regression Loops
        </PulsatingButton>
        
        <Button 
          variant="outline" 
          size="lg"
          className="border-white text-white hover:bg-white/10"
        >
          Watch How It Works
        </Button>
      </div>
      
      <div className="pt-8">
        <AnimatedShinyText className="text-white/80">
          Used by 200+ AI-first dev teams • 5-min setup • No credit card
        </AnimatedShinyText>
      </div>
    </div>
  </div>
</section>
```

**Rationale:**
Final CTA is the last conversion opportunity. Full-width gradient background with ripple effect creates sense of importance and finality. Headline "Move Fast AND Clean" resolves the core tension (speed vs. quality) that has been building throughout the page. Pulsating CTA captures attention without being aggressive. White button on purple background creates maximum contrast. Secondary demo CTA provides low-commitment path for hesitant users. Trust elements (200+ teams, 5-min setup, no credit card) remove final objections. This section assumes visitor has consumed earlier content and is ready to decide.

---

## IMPLEMENTATION SUMMARY

### Component Library Dependencies
```bash
# Install MagicUI components
npx shadcn@latest add "https://magicui.design/r/particles.json"
npx shadcn@latest add "https://magicui.design/r/shimmer-button.json"
npx shadcn@latest add "https://magicui.design/r/code-comparison.json"
npx shadcn@latest add "https://magicui.design/r/text-animate.json"
npx shadcn@latest add "https://magicui.design/r/bento-grid.json"
npx shadcn@latest add "https://magicui.design/r/animated-beam.json"
npx shadcn@latest add "https://magicui.design/r/magic-card.json"
npx shadcn@latest add "https://magicui.design/r/number-ticker.json"
npx shadcn@latest add "https://magicui.design/r/orbiting-circles.json"
npx shadcn@latest add "https://magicui.design/r/marquee.json"
npx shadcn@latest add "https://magicui.design/r/neon-gradient-card.json"
npx shadcn@latest add "https://magicui.design/r/animated-circular-progress-bar.json"
npx shadcn@latest add "https://magicui.design/r/shine-border.json"
npx shadcn@latest add "https://magicui.design/r/ripple.json"
npx shadcn@latest add "https://magicui.design/r/pulsating-button.json"
npx shadcn@latest add "https://magicui.design/r/animated-shiny-text.json"
npx shadcn@latest add "https://magicui.design/r/scroll-progress.json"
npx shadcn@latest add "https://magicui.design/r/terminal.json"
npx shadcn@latest add "https://magicui.design/r/animated-list.json"
```

### Performance Considerations

**Animation Budget:**
- Limit simultaneous animations to 3-4 on viewport
- Use `will-change` sparingly
- Prefer transform/opacity animations (GPU-accelerated)
- Reduce motion for accessibility (prefers-reduced-motion)

**Loading Strategy:**
- Hero components: Eager load
- Below-fold: Lazy load with Intersection Observer
- Code syntax highlighting: Load on demand
- Particles: Reduced count on mobile (50 vs 100)

**Mobile Optimization:**
- Reduce particle count by 50%
- Simplify animations on small screens
- Larger tap targets (minimum 48px)
- Stack all grid layouts vertically

### A/B Testing Recommendations

**Test 1: Hero Headline**
- A: "AI Makes You Fast. We Make Sure It Doesn't Make You Sloppy."
- B: "Stop Being The Quality Police For AI-Generated Code"
- Hypothesis: Version B's role-based pain may resonate more with lead engineers

**Test 2: Primary CTA Copy**
- A: "Try It Free"
- B: "Fix AI Code Quality"
- C: "Stop AI Regression Loops"
- Hypothesis: Specific pain point (C) may convert better than generic (A)

**Test 3: Social Proof Format**
- A: Metrics-focused (15 hours saved, 60% reduction)
- B: Testimonial-focused (quote from Engineering Manager)
- Hypothesis: B2B buyers need both; test which should be more prominent

**Test 4: Pricing Framing**
- A: ROI framing ("pays for itself 10x")
- B: Comparison framing ("Less than 1 hour of debugging per month")
- Hypothesis: ROI framing stronger for managers, time-saving for individual contributors

---

## CONVERSION OPTIMIZATION CHECKLIST

### Above The Fold (Hero)
- [ ] Value proposition clear in <5 seconds
- [ ] Primary CTA visible without scrolling
- [ ] Social proof visible (testimonial or metric)
- [ ] Hero visual shows transformation/benefit
- [ ] Mobile: All key elements visible in first viewport

### Page Flow
- [ ] Scroll progress indicator at top
- [ ] Smooth scroll to anchor sections
- [ ] Animations trigger on scroll into view (not all at once)
- [ ] Clear section transitions (visual breaks)
- [ ] CTAs at regular intervals (every 2-3 sections)

### Trust Building
- [ ] Specific metrics (not vague "faster")
- [ ] Attributed testimonials (role + company context)
- [ ] Logo social proof (if available)
- [ ] Privacy/security addressed explicitly
- [ ] "No credit card" mentioned multiple times

### Friction Reduction
- [ ] Free tier prominently featured
- [ ] Setup time mentioned ("2 minutes", "5 minutes")
- [ ] Multiple conversion paths (Free, Demo, Pro trial)
- [ ] Mobile-optimized forms and CTAs
- [ ] Fast page load (<2s LCP)

### Technical Excellence
- [ ] Accessibility: WCAG 2.1 AA compliant
- [ ] Performance: 90+ Lighthouse score
- [ ] SEO: Proper meta tags, schema.org markup
- [ ] Analytics: Conversion funnel tracking
- [ ] Error handling: Graceful degradation

---

## MESSAGING ADAPTATION MATRIX

### When Visitor Is Problem Aware (Sarah)
**Focus:** Pain recognition and solution promise
- Hero: "Your AI Coding Assistant Keeps Reintroducing Bugs"
- Value Prop: Heavy on problem description (they need to feel understood)
- Features: Benefits over specs
- Social Proof: Time saved, frustration reduced
- CTA: "Fix AI Code Quality", "Stop Regression Loops"

### When Visitor Is Solution Aware (David)
**Focus:** Systematic approach and ROI
- Hero: "Systematic AI Quality Evaluation. Finally."
- Value Prop: Framework benefits, scalability
- Features: Technical depth, team benefits
- Social Proof: ROI metrics, manager testimonials
- CTA: "Start Team Pilot", "Calculate ROI"

### When Visitor Is Product Aware (Jen)
**Focus:** Technical details and integration
- Hero: "MCP-Native Emotional Reasoning For AI Code"
- Value Prop: Integration ease, technical elegance
- Features: API details, customization options
- Social Proof: Technical community validation
- CTA: "Add to MCP Config", "View Docs"

### Dynamic Content Strategy
Use URL parameters or A/B testing to serve appropriate variant:
- `?ref=problem` → Problem Aware version
- `?ref=solution` → Solution Aware version
- `?ref=product` → Product Aware version
- Default: Blend of Problem + Solution Aware (broadest appeal)

---

## NEXT STEPS

### Phase 1: Design Mockups (Week 1)
1. Create high-fidelity mockups in Figma
2. Design hero section variations for A/B test
3. Create component library (buttons, cards, etc.)
4. Mobile designs for all sections
5. Dark mode variants

### Phase 2: Implementation (Week 2-3)
1. Initialize Next.js 15 with Tailwind
2. Install shadcn/ui and MagicUI components
3. Build components section by section
4. Implement animations and interactions
5. Mobile responsiveness
6. Accessibility audit

### Phase 3: Optimization (Week 4)
1. Performance optimization (lazy loading, code splitting)
2. A/B testing setup (hero variants)
3. Analytics implementation (conversion funnel)
4. SEO optimization
5. Cross-browser testing
6. Deploy to Vercel

---

**End of Design Strategy**

This document provides the conversion framework for implementing the Emotional.tools landing page. Each section applies CCD principles with specific MagicUI components to maximize conversion while maintaining professional, developer-appropriate aesthetics.


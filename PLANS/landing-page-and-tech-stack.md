# Landing Page Plan
## Emotional.tools - Public Website

**Created:** November 27, 2025  
**Status:** Planning Phase  
**Target:** Landing Page Launch

---

## 1. Executive Summary

This plan outlines the design, structure, and implementation strategy for the **Emotional.tools landing page**. The landing page will serve as the primary marketing and onboarding entry point for developers interested in adding emotional reasoning capabilities to their LLM workflows.

### Key Decisions
- **Framework:** Next.js 15+ (App Router with Turbopack)
- **Hosting:** Vercel (serverless deployment)
- **Styling:** Tailwind CSS + shadcn/ui components
- **Brand Identity:** Purple-warm gradient aesthetic with modern, clean UI
- **Target Audience:** Developers using LLM coding assistants (Cursor, VSCode MCP clients)

---

## 2. Landing Page Tech Stack

### Core Framework
- **Next.js 15.0+** with App Router
  - React Server Components for optimal performance
  - Turbopack for fast development
  - Static generation for marketing pages
  - Built-in image optimization

### UI & Styling
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Beautiful, consistent icon set
- **react-syntax-highlighter** - Code snippet highlighting

### Development Tools
- **TypeScript 5.3+** - Type safety and better DX
- **ESLint** - Code quality
- **Prettier** - Code formatting

### Hosting
- **Vercel** - Deployment platform
  - Automatic deployments from Git
  - Global CDN
  - Built-in analytics
  - Preview deployments for every PR

---

## 3. Landing Page Structure

### Page Sections (Single Page)

```
/                           → Landing page (home)
├── Hero Section
├── Problem Statement  
├── Solution Overview
├── How It Works
├── Features Grid
├── Code Example (MCP Config)
├── Use Cases
├── Pricing
├── FAQ
└── CTA / Sign Up Footer
```

### Navigation Structure
- **Header:** Logo | Features | Pricing | Docs | Sign In | Get Started (CTA)
- **Footer:** Product links | Resources | Legal | Social

---

## 4. Landing Page Sections (Detailed)

#### Hero Section
**Goal:** Immediately communicate value proposition

**Content:**
- **Headline:** "Give Your LLM an Emotional IQ"
- **Subheadline:** "A synthetic limbic system for Large Language Models. Stop regression loops. Maintain coherence. Build better AI experiences."
- **Visual:** Animated emotional vector visualization (purple gradient particles)
- **CTA:** "Start Free" + "View Docs"
- **Trust Badge:** "MCP-compatible • <150ms response • Privacy-first"

**Technical:**
- Framer Motion hero animation
- Gradient background with subtle animation
- Responsive design (mobile-first)

#### Problem Statement
**Goal:** Resonate with developer pain points

**Content:**
- "LLMs oscillate. They regress. They forget."
- Visual: Before/after comparison (chaotic vs. stable responses)
- Statistics: "67% of developers report LLM regression frustration"

#### Solution Overview
**Goal:** Explain the core concept simply

**Content:**
- "An external emotional processor that evaluates LLM outputs before they reach users"
- 3-step visual: Generate → Evaluate → Refine
- Domain support badges: Code • UI • Creative Text

#### How It Works
**Goal:** Technical overview for developers

**Content:**
```json
{
  "emotional": {
    "url": "https://api.emotional.tools/mcp",
    "headers": {
      "EMOTIONAL_API_KEY": "emo-sk-xxxxxxxxxxxx"
    }
  }
}
```

**Flow Diagram:**
1. LLM generates candidate output
2. Calls Emotional Tools MCP endpoint
3. Receives emotional verdict + suggestion
4. Refines response based on feedback
5. Delivers improved output to user

#### Features Grid
**Goal:** Highlight key capabilities

**Features:**
- 🧠 **Multi-Domain Analysis** - Code, UI, creative text
- ⚡ **<150ms Latency** - Fast enough for real-time workflows
- 🎯 **Verdict System** - Clear go/revise/abort signals
- 🧩 **Session Memory** - Context-aware across iterations
- 🎨 **Style Preferences** - GAAL, KISS, minimalism, tone
- 🔒 **Privacy-First** - No raw content stored

#### Use Cases
**Goal:** Show practical applications

**Tabs:**
1. **For Developers**
   - Code review assistance
   - Regression detection
   - Style consistency

2. **For Designers**
   - UI coherence checks
   - Brand consistency
   - Component iteration

3. **For Creators**
   - Tone maintenance
   - Emotional flow
   - Content refinement

#### Pricing
**Goal:** Clear value tiers

**Tiers:**
- **Free:** Daily limits, contribute anonymized embeddings
- **Pro ($19/mo):** Higher limits, disable contributions, priority inference

#### FAQ
**Goal:** Address common questions

**Questions:**
- What is MCP?
- How is this different from prompt engineering?
- What data do you collect?
- Can I use this with Cursor/VSCode?

---

## 5. Design System & Visual Identity

#### Color Usage (from brand-info.txt)
```css
--primary: #7A4E9E      /* Deep purple - CTAs, headers */
--secondary: #B47EC8    /* Light purple - accents, hover states */
--accent: #F0C49B       /* Warm beige - highlights, badges */
--accent-light: #F8E1C2 /* Light beige - backgrounds, cards */

--background: #FFFFFF
--foreground: #1A1A1A
--muted: #F5F5F5
```

#### Typography
- **Headings:** Inter 700 (bold)
- **Body:** Open Sans 400 (regular)
- **Code:** JetBrains Mono 400

#### Component Style
- **Cards:** Soft shadows, subtle gradients
- **Buttons:** Gradient hover effects (primary → secondary)
- **Code blocks:** Dark theme with syntax highlighting
- **Animations:** Smooth, purposeful (not distracting)

#### Spacing & Layout
- **Container:** max-w-7xl (1280px)
- **Section padding:** py-20 (desktop), py-12 (mobile)
- **Grid:** 12-column responsive grid

---

## 6. Interactive Elements & Animations

#### Animated Emotional Vector Visualization
- Real-time particle system
- Responds to scroll/hover
- Purple gradient particles
- Smooth transitions

#### Live Code Example
- Syntax-highlighted MCP config
- Copy-to-clipboard button
- Animated typing effect on load

#### Demo Console
- Mock LLM evaluation flow
- Shows request → response
- Verdict visualization (go/revise/abort with colors)


---

## 7. Project Structure (Landing Page Only)

```
emotional/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   └── landing/                 # Landing page sections
│       ├── hero.tsx
│       ├── problem.tsx
│       ├── solution.tsx
│       ├── how-it-works.tsx
│       ├── features.tsx
│       ├── use-cases.tsx
│       ├── pricing.tsx
│       ├── faq.tsx
│       ├── header.tsx
│       └── footer.tsx
├── lib/
│   └── utils.ts                 # Utility functions
├── public/
│   ├── images/
│   └── icons/
├── styles/
│   └── animations.css           # Custom animations
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 8. Landing Page Deliverables

### Core Features
- ✅ Hero section with animated emotional vector visualization
- ✅ Problem/solution narrative with visual comparisons
- ✅ "How it works" section with code example
- ✅ Features grid (6 key features)
- ✅ Use cases tabs (Developers, Designers, Creators)
- ✅ Pricing table (Free vs Pro)
- ✅ FAQ accordion
- ✅ Header with navigation
- ✅ Footer with links
- ✅ Sign up CTA buttons
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Copy-to-clipboard for code examples
- ✅ SEO optimization (meta tags, Open Graph, schema.org)

---

## 9. Development Roadmap

### Week 1: Setup & Structure
**Goal:** Project foundation and core structure

**Tasks:**
1. Initialize Next.js 15 project with TypeScript
2. Setup Tailwind CSS + shadcn/ui
3. Install dependencies (Framer Motion, Lucide React, etc.)
4. Configure design system (colors, typography, spacing)
5. Create component structure
6. Build header and footer components
7. Setup Vercel project

**Deliverable:** Running Next.js app with basic layout

### Week 2: Static Content
**Goal:** Build all page sections (static)

**Tasks:**
1. Hero section (static layout, copy)
2. Problem statement section
3. Solution overview section
4. How it works section (with code block)
5. Features grid
6. Use cases tabs
7. Pricing table
8. FAQ accordion
9. Mobile responsiveness for all sections

**Deliverable:** Complete static landing page

### Week 3: Animations & Interactions
**Goal:** Add polish and interactivity

**Tasks:**
1. Hero animated background (particle system)
2. Scroll-triggered animations (Framer Motion)
3. Interactive code example (syntax highlighting)
4. Copy-to-clipboard functionality
5. Smooth scroll navigation
6. Hover effects on buttons/cards
7. Tab interactions for use cases
8. FAQ accordion animations

**Deliverable:** Fully interactive landing page

### Week 4: Polish & Launch
**Goal:** Production-ready landing page

**Tasks:**
1. Performance optimization
   - Image optimization
   - Code splitting
   - Lazy loading
2. SEO optimization
   - Meta tags
   - Open Graph tags
   - Schema.org markup
   - Sitemap
3. Analytics setup (Vercel Analytics)
4. Cross-browser testing
5. Accessibility audit (WCAG 2.1 AA)
6. Final QA and bug fixes
7. Deploy to Vercel production

**Deliverable:** Live landing page at emotional.tools

---

## 10. Performance Targets

### Core Web Vitals
- **First Contentful Paint (FCP):** <1.2s
- **Largest Contentful Paint (LCP):** <2.5s
- **Cumulative Layout Shift (CLS):** <0.1
- **First Input Delay (FID):** <100ms
- **Time to Interactive (TTI):** <3.5s

### Optimization Strategies
1. **Images:**
   - Next.js Image component for automatic optimization
   - WebP format with PNG/JPG fallbacks
   - Lazy loading for below-fold images
   - Responsive images with srcset

2. **Code Splitting:**
   - Dynamic imports for heavy components
   - Route-based code splitting (automatic with App Router)
   - Defer non-critical JavaScript

3. **Caching:**
   - Static generation for entire landing page
   - CDN caching via Vercel Edge Network
   - Browser caching headers

4. **Animations:**
   - GPU-accelerated transforms (translate3d, scale)
   - Debounced scroll listeners
   - Reduced motion preference support

### Accessibility
- **WCAG 2.1 AA compliance**
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast ratio >4.5:1
- Screen reader testing

---

## 11. Open Questions & Decisions

### Content & Design
- [ ] **Live demo:** Include an interactive playground on the landing page where visitors can test the API?
- [ ] **Video explainer:** Create a video walkthrough or stick to text + animations?
- [ ] **Testimonials:** Reserve space for future user testimonials?
- [ ] **Trust indicators:** Display Cursor/VSCode/MCP logos to show compatibility?
- [ ] **Social proof:** "X developers already using Emotional Tools" counter?

### Visual Elements
- [ ] **Emotional vector visualization:** What should it look like? (particle system, wave form, neural network?)
- [ ] **Code theme:** Dark theme only or both light/dark?
- [ ] **Illustration style:** Custom illustrations or rely on gradients/minimal design?
- [ ] **Background effects:** Gradient mesh, animated particles, or solid colors?

### Copy & Messaging
- [ ] **Primary headline:** "Give Your LLM an Emotional IQ" vs alternatives?
- [ ] **CTA text:** "Start Free" vs "Get Started" vs "Try Now"?
- [ ] **Tone:** Technical/developer-focused vs more accessible?

---

## 12. Next Steps

### Immediate Actions
1. **Review & approve** this plan
2. **Decide on open questions** (especially visual style and copy)
3. **Create wireframes/mockups** (optional but recommended)
   - Use Figma, Excalidraw, or even hand sketches
   - Focus on hero section and overall layout
4. **Gather assets:**
   - Logo (if not using text logo)
   - Any custom icons
   - Stock images (if needed)

### Week 1 Kickoff
1. Initialize Next.js 15 project
2. Install core dependencies
3. Setup design system (Tailwind config with brand colors)
4. Create basic component structure
5. First Vercel deployment

---

## 13. Dependencies & Setup

### Required Accounts/Services
- **Vercel Account** - Free tier is fine for landing page
- **GitHub** - For version control and Vercel deployment
- **Domain** - emotional.tools (assuming already owned)

### Initial package.json Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.300.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5.3",
    "tailwindcss": "^4.0.0",
    "eslint": "^8",
    "eslint-config-next": "15.0.0",
    "prettier": "^3.1.0",
    "autoprefixer": "^10.4.16"
  }
}
```

### Environment Variables (Landing Page Only)

```bash
# Vercel will auto-populate these
NEXT_PUBLIC_SITE_URL="https://emotional.tools"

# Analytics (optional for launch)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID="..."
```

---

## 14. Content Outline

### Copy Points to Develop

**Hero Section:**
- Headline: "Give Your LLM an Emotional IQ"
- Subheadline: "Stop regression loops. Maintain coherence. Build better AI experiences."
- Description: "A synthetic limbic system for Large Language Models. Emotional.tools provides an MCP-compatible endpoint that evaluates LLM responses before they reach users."

**Problem Section:**
- "LLMs oscillate between inconsistent styles"
- "They reintroduce previously fixed errors"  
- "They forget emotional and stylistic context"
- "Result: Frustration, inefficiency, and mistrust"

**Solution Section:**
- "An external emotional processor that acts as quality control"
- "Evaluates coherence, complexity, and alignment"
- "Provides clear verdicts: go, revise, or abort"
- "Maintains session memory across iterations"

**Features (6 key points):**
1. 🧠 Multi-Domain - Code, UI, creative text
2. ⚡ Ultra-Fast - <150ms evaluation latency
3. 🎯 Clear Verdicts - Go/revise/abort signals
4. 🧩 Session Memory - Context-aware across iterations
5. 🎨 Customizable - Your style preferences (GAAL, KISS, tone)
6. 🔒 Privacy-First - No raw content stored

**Use Cases:**
- **Developers:** Detect regressions, maintain code style, reduce review loops
- **Designers:** Ensure UI consistency, brand alignment, coherent iterations
- **Creators:** Maintain tone, emotional flow, narrative coherence

**Pricing:**
- **Free:** Perfect for trying out, daily limits, contribute to learning
- **Pro ($19/mo):** Higher limits, disable contributions, priority support

**FAQ Topics:**
- What is MCP?
- How does it integrate with Cursor/VSCode?
- What data do you collect?
- How is this different from prompt engineering?
- Do I need to change my LLM prompts?
- Can I customize the evaluation criteria?

---

**End of Plan**

This document serves as the single source of truth for landing page development. Update this plan as decisions are made and requirements evolve.


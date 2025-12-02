# Emotional.tools Landing Page

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📐 Design System

Based on comprehensive planning in `/PLANS` folder:
- **Visual Polish Guide**: Complete design token system
- **Design Strategy**: CCD principles + MagicUI components
- **Copy Options**: Persona-driven messaging
- **Customer Personas**: 5 awareness stages

### Brand Colors
- **Primary**: #7A4E9E (deep purple)
- **Secondary**: #B47EC8 (light purple)
- **Accent**: #F0C49B (warm beige)
- **Accent Light**: #F8E1C2 (light beige)

### Typography
- **Headings**: Inter 700
- **Body**: Inter 400 (note: Open Sans replaced with Inter for consistency)
- **Code**: JetBrains Mono 400

## 🎨 Component Structure

```
components/
├── ui/                    # shadcn/ui base components
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── accordion.tsx
│   ├── avatar.tsx
│   └── shimmer-button.tsx  # MagicUI
└── landing/               # Landing page sections
    ├── header.tsx
    ├── hero.tsx
    ├── value-proposition.tsx
    ├── how-it-works.tsx
    ├── features.tsx
    ├── pricing.tsx
    ├── faq.tsx
    ├── final-cta.tsx
    └── footer.tsx
```

## 📋 Implemented Features

### ✅ Core Structure
- [x] Next.js 15 with App Router
- [x] TypeScript configuration
- [x] Tailwind CSS with custom design tokens
- [x] Complete color system (12 tokens)
- [x] Modular type scale (1.2 ratio)
- [x] 4/8 spacing system
- [x] Accessibility features (skip-to-content, ARIA labels)

### ✅ Landing Page Sections
- [x] Sticky header with ShimmerButton CTA
- [x] Hero section with headline and code comparison
- [x] Value Proposition (Problem → Benefit → Outcome)
- [x] How It Works with MCP config example
- [x] Features grid (6 features)
- [x] Pricing (Free + Pro tiers)
- [x] FAQ accordion
- [x] Final CTA with gradient background
- [x] Footer with links

### ✅ Design Standards
- [x] WCAG AA contrast ratios verified
- [x] Semantic HTML structure
- [x] Button states (hover, active, focus)
- [x] Touch targets ≥44px
- [x] Responsive design (mobile-first)
- [x] Reduced motion support

## 🔧 Next Steps (Enhancement Phase)

### Additional MagicUI Components to Install
```bash
# For enhanced visuals (optional)
npx shadcn@latest add "https://magicui.design/r/particles.json"
npx shadcn@latest add "https://magicui.design/r/code-comparison.json"
npx shadcn@latest add "https://magicui.design/r/number-ticker.json"
npx shadcn@latest add "https://magicui.design/r/magic-card.json"
npx shadcn@latest add "https://magicui.design/r/animated-beam.json"
npx shadcn@latest add "https://magicui.design/r/bento-grid.json"
npx shadcn@latest add "https://magicui.design/r/marquee.json"
npx shadcn@latest add "https://magicui.design/r/ripple.json"
npx shadcn@latest add "https://magicui.design/r/pulsating-button.json"
```

### Visual Enhancements
1. Add Particles background to hero
2. Replace code comparison with CodeComparison component
3. Add NumberTicker for social proof metrics
4. Use MagicCard for value proposition cards
5. Add AnimatedBeam between value prop cards
6. Use BentoGrid for features layout
7. Add Marquee for logo carousel
8. Add Ripple effect to final CTA background
9. Use PulsatingButton for final CTA

### Performance Optimizations
1. Add image optimization (next/image)
2. Implement code splitting for below-fold components
3. Add loading states
4. Optimize fonts (subset to Latin only)
5. Run Lighthouse audit

## 📊 Current Status

**Working Features:**
- ✅ Fully responsive landing page
- ✅ All sections implemented
- ✅ Brand colors and typography applied
- ✅ Professional visual polish
- ✅ Accessibility foundations

**To Enhance:**
- 🔄 Advanced MagicUI animations (particles, beams, tickers)
- 🔄 Code syntax highlighting
- 🔄 Interactive demos
- 🔄 Performance optimization
- 🔄 SEO enhancements

## 🎯 Design Principles Applied

Based on `/PLANS/landing-page-visual-polish.md`:

1. **Color System**: 12-token palette with WCAG AA contrast
2. **Typography**: Modular 1.2 scale with proper line-heights
3. **Spacing**: 4/8 system, no ad-hoc values
4. **Hierarchy**: 90/9/1 emphasis rule
5. **CTAs**: Action + outcome formula, complete states
6. **Motion**: Budget of 3-4 animations per viewport
7. **Icons**: Single family (Lucide) with consistent stroke
8. **Content**: Promise → Proof → Path structure
9. **Responsive**: Mobile-first, 5 breakpoints
10. **Performance**: <400KB first load target

## 📝 Notes

- Current implementation uses simplified visuals (CSS gradients, borders)
- Shimmer Button is the only MagicUI component currently active
- Hero uses CSS grid pattern instead of Particles (for initial speed)
- Code blocks use basic `<pre>` tags (CodeComparison can be added)
- All foundations are in place for progressive enhancement
- Design tokens in Tailwind config ready for full MagicUI integration

## 🚢 Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (when ready)
vercel deploy
```

---

**Status**: MVP landing page complete and running. Ready for visual enhancement phase with additional MagicUI components.


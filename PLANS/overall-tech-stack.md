# Overall Tech Stack Overview
## Emotional.tools - Full Application

**Created:** November 27, 2025  
**Status:** Reference Document  
**Purpose:** High-level architecture for the complete platform (future phases)

---

## Tech Stack Summary

This document outlines the complete technology stack for Emotional.tools, including the landing page, dashboard, and API infrastructure. This is a **reference document** for future development phases.

---

## Frontend

### Framework
- **Next.js 15+** with App Router and Turbopack
- **React 19** with Server Components
- **TypeScript 5.3+**

### UI Libraries
- **Tailwind CSS 4.0** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **TanStack Query** - Server state management

---

## Backend

### API & Routing
- **Next.js API Routes** (App Router route handlers)
- **Zod** - Schema validation

### AI/ML Services
- **Groq** - Fast LLM inference (<150ms)
  - Model: llama-3.1-70b-versatile or mixtral-8x7b
  - Purpose: Emotional evaluation engine

### Database & Storage
- **Vercel Postgres** (Neon)
  - User accounts, API keys, preferences
  - **pgvector extension** for embeddings
- **Upstash Redis**
  - Session memory (hot state)
  - Rate limiting
  - Caching

### Authentication
- **NextAuth.js v5** (Auth.js)
  - Email/password
  - OAuth (GitHub, Google)
  - API key generation and management

---

## Infrastructure

### Hosting
- **Vercel** - Serverless deployment
  - Auto-scaling
  - Edge Network (CDN)
  - Preview deployments

### Monitoring & Analytics
- **Vercel Analytics** - Web vitals
- **Sentry** - Error tracking
- **Posthog** - Product analytics (optional)

---

## Key Architectural Decisions

### Monorepo Structure
Everything in one Next.js app:
- Landing page: `app/(marketing)/page.tsx`
- Dashboard: `app/(dashboard)/...`
- API: `app/api/mcp/route.ts`

### MCP Endpoint
- **Endpoint:** `POST /api/mcp`
- **Auth:** API key via `EMOTIONAL_API_KEY` header
- **Latency target:** <150ms (P95)
- **Rate limiting:** Redis-based, per-tier limits

### Session Memory
- Stored in Redis (Upstash)
- TTL: 24 hours
- Tracks last 10 emotional vectors per session
- Session mood: stable/looping/scattered/aligned

### Privacy Model
- No raw code/content stored in DB
- Embeddings from abstracted summaries only
- Free tier contributes anonymized data
- Paid tier can opt out

---

## Development Phases

### Phase 1: Landing Page
- Static marketing site
- Brand implementation
- SEO optimization
- **Timeline:** 4 weeks

### Phase 2: Backend & API
- MCP endpoint
- Groq integration
- Database setup
- API key system
- **Timeline:** 4 weeks

### Phase 3: Dashboard
- User authentication
- API key management
- Preferences UI
- Usage analytics
- **Timeline:** 4 weeks

### Phase 4: Launch & Iterate
- Beta testing
- Performance optimization
- Documentation
- Public launch
- **Timeline:** 2 weeks

---

## API Schema Reference

### Request Schema
```typescript
{
  context: string
  artifactKind: 'code' | 'ui' | 'lyrics' | 'text'
  artifact: string
  sessionId: string
  devPreferences?: {
    global?: Record<string, any>
    code?: Record<string, any>
    ui?: Record<string, any>
    lyrics?: Record<string, any>
  }
  signals?: {
    numAttempts: number
    numRegressions: number
  }
}
```

### Response Schema
```typescript
{
  emotionalVector: {
    coherence: number        // 0-1
    complexity: number       // 0-1
    alignment: number        // 0-1
    regression_risk: number  // 0-1
    emotional_tone: number   // -1 to 1
  }
  verdict: 'go' | 'revise' | 'abort'
  suggestion: string
}
```

---

## Environment Variables (Full Stack)

```bash
# Database
DATABASE_URL="postgres://..."
DIRECT_URL="postgres://..."

# Redis
UPSTASH_REDIS_URL="redis://..."
UPSTASH_REDIS_TOKEN="..."

# Groq
GROQ_API_KEY="gsk_..."

# Auth
NEXTAUTH_URL="https://emotional.tools"
NEXTAUTH_SECRET="..."

# Monitoring
SENTRY_DSN="..."
NEXT_PUBLIC_SENTRY_DSN="..."

# Analytics (optional)
POSTHOG_API_KEY="..."
```

---

**Note:** This is a planning document. Implementation details will be refined in dedicated PRDs for each phase.



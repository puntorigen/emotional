# Product Requirements Document (PRD)

## Project: Emotional Tools

### A Cross-Domain Emotional Reasoning Engine for LLMs (MCP + HTTP)

---

## 1. Overview

**Emotional Tools** is a lightweight emotional reasoning service for Large Language Models. It exposes an **MCP-compatible HTTP endpoint** that any LLM client can call to evaluate its own responses before sending them to a user.

This system acts as an external **emotional processor**—a synthetic limbic system—for improving decision‑making, coherence, and alignment with user preferences. It works across domains:

* Code and diffs
* UI layouts (ASCII, JSX, components)
* Creative text (lyrics, stories, marketing copy)

Users integrate Emotional Tools by adding a block to their MCP configuration:

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

Users obtain their `EMOTIONAL_API_KEY` from their emotional.tools account.

---

## 2. Problem Statement

LLMs often struggle with multi-step tasks:

* They reintroduce previously fixed errors.
* They oscillate between inconsistent styles or tones.
* They apply unnecessary complexity (violating GAAL or KISS).
* They forget emotional or stylistic context.
* They fail to detect loops or decision regressions.

This produces frustration, inefficiency, and mistrust.

Emotional Tools reduces these problems by providing an external emotional evaluator that can guide LLMs toward stable, consistent, aligned behavior.

---

## 3. Solution Summary

Emotional Tools provides a single endpoint that evaluates the emotional, stylistic, and logical quality of a candidate LLM output.

The evaluation includes:

1. **Emotional Vector** (core emotional metrics)
2. **Verdict** (`go`, `revise`, `abort`)
3. **Suggestion** (a concise improvement hint)
4. **Session-based emotional memory**
5. **User-defined development preferences** (GAAL, KISS, tone, minimalism, etc.)

The LLM uses this emotional feedback to revise its answer before presenting it to the user.

---

## 4. Target Users

### Primary

* Developers using LLM-based coding assistants (Cursor, VSCode MCP clients).
* Builders of multi-agent systems.
* Teams using LLMs for code review or iterative development.

### Secondary

* Creatives using LLMs for UI design or writing.
* Researchers experimenting with reflective LLM architectures.

---

## 5. Use Cases

### Code

* Detect regression risk in diffs.
* Penalize unnecessary complexity (GAAL, KISS).
* Maintain style and structure across attempts.

### UI

* Ensure consistency across UI iterations.
* Maintain user-preferred style (minimalistic, playful, corporate).

### Creative text

* Maintain tone across sections.
* Detect emotional inconsistencies.
* Suggest improvements to flow and emotionality.

---

## 6. Functional Requirements

### 6.1 MCP/HTTP Endpoint

Endpoint: `POST https://api.emotional.tools/mcp`

**Input Schema:**

```json
{
  "context": "string",
  "artifactKind": "code | ui | lyrics | text",
  "artifact": "string",
  "sessionId": "string",
  "devPreferences": {
    "global": {},
    "code": {},
    "ui": {},
    "lyrics": {}
  },
  "signals": {
    "numAttempts": 0,
    "numRegressions": 0
  }
}
```

**Output Schema:**

```json
{
  "emotionalVector": {},
  "verdict": "go | revise | abort",
  "suggestion": "string"
}
```

Requests must include:

```
EMOTIONAL_API_KEY: emo-sk-xxxx
```

### 6.2 Emotional Evaluation Logic

* Multi-domain emotional evaluator.
* Mode changes based on `artifactKind`.
* GAAL/KISS preferences influence code reviews.
* Tone/minimalism preferences influence UI/text reviews.
* Emotional scoring system consistent across domains.

### 6.3 Session Emotional Memory

Stored per `sessionId`:

* Recent emotional vectors
* Cumulative attempts and regressions
* Session “mood”: stable, looping, scattered, aligned

### 6.4 User Preferences System

Users can define:

* Simplicity
* Abstraction
* Minimalism (UI)
* Tone (creative)
* GAAL (“simplest solution achieving business value”)
* KISS

Preferences stored in DB and merged per session.

### 6.5 Free Tier Embedding Contribution

* Free users contribute anonymized embeddings from **abstracted summaries**.
* No raw text or code collected.
* Stored in pgvector to improve future evaluations.

Paid users may disable contributions.

---

## 7. Non-Functional Requirements

### Performance

* <150ms evaluation (Groq inference).
* Vercel serverless functions.

### Scalability

* Stateless HTTP handling.
* Redis (Upstash) for session state.
* Postgres + pgvector for analytics/patterns.

### Privacy

* No raw user content stored.
* Hash-stored API keys.
* Paid users may opt out of embeddings.

### Reliability

* API key validation.
* Rate limiting.
* Graceful fallback.

---

## 8. Architecture

### Components

* **Next.js app on Vercel** (dashboard + API)
* **Groq** for emotional reasoning
* **Redis** for session hot state
* **Postgres + pgvector** for persistent history and pattern embeddings

### Flow

1. LLM generates candidate output.
2. LLM calls Emotional Tools MCP using API key.
3. Backend loads preferences + session memory.
4. Backend calls Groq emotional critic.
5. Emotional result returned.
6. LLM revises answer accordingly.
7. System updates session + patterns.

---

## 9. Pricing Model

### Free

* Daily limits
* Mandatory anonymized embedding contribution

### Pro

* Higher limits
* Disable contributions
* Priority inference
* Extended memory per project

---

## 10. Success Metrics

* Reduction in LLM correction loops
* Greater coherence across steps
* Higher developer satisfaction
* Adoption across Cursor/VSCode agent ecosystems
* Paid conversions

---

## 11. Roadmap

### Phase 1 (MVP)

* MCP endpoint
* Code/UI/Text evaluator
* Preferences engine
* Dashboard + API keys

### Phase 2

* Pattern recognition using embeddings
* Mood visualizer
* Project-level profiles

### Phase 3

* Emotional gating for CI/CD
* Multi-agent emotional arbitration
* Native plugins for editors

---

This PRD defines the core functionality of emotional.tools as an MCP-first emotional reasoning layer for LLMs.

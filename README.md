# Emotional Tools

> A cross-domain emotional reasoning engine for Large Language Models

## Overview

**Emotional Tools** is a lightweight service that acts as an external emotional processor for LLMs—a synthetic limbic system that helps improve decision-making, coherence, and alignment with user preferences.

It evaluates LLM outputs before they're sent to users, providing emotional feedback that helps reduce common issues like:
- Reintroducing previously fixed errors
- Inconsistent styles or tones
- Unnecessary complexity
- Decision loops and regressions

## How It Works

Emotional Tools exposes an MCP-compatible HTTP endpoint that LLM clients can call to evaluate their responses. The service returns:

- **Emotional Vector** - Core emotional metrics
- **Verdict** - `go`, `revise`, or `abort`
- **Suggestion** - Concise improvement hints
- **Session Memory** - Context-aware emotional tracking

## Quick Integration

Add to your MCP configuration:

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

## Supported Domains

- **Code** - Detect regressions, enforce GAAL/KISS principles
- **UI** - Maintain consistency across iterations
- **Creative Text** - Preserve tone and emotional coherence

## Documentation

See [PRD.md](./docs/PRD.md) for complete product requirements and technical specifications.

## License

TBD


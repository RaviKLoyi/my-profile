# AGENTS.md

Agent-neutral guidance for AI coding agents (GitHub Copilot cloud agent, CLI, and other
harnesses). Mirrors `.github/copilot-instructions.md`.

## Project

Single-page **React + Vite + TypeScript** application. Target the latest stable React.
Read `package.json` for exact versions before using version-specific APIs.

## Rules

- Function components + hooks only; named exports; one component per file.
- TypeScript strict; no `any`.
- Colocate tests (`Foo.tsx` → `Foo.test.tsx`).
- Every async view has loading, error, and empty states.
- Accessibility (WCAG 2.2 AA) is mandatory; semantic HTML first.
- No secrets in client code; only `VITE_`-prefixed env vars reach the browser.
- Prefer direct imports and route-level code splitting to keep the bundle small.

## Verify before finishing

```
tsc --noEmit && eslint . && vitest run && vite build
```

## Customization layout

- `.github/copilot-instructions.md` — always-on project rules (VS Code / Copilot).
- `.github/instructions/*.instructions.md` — file-scoped rules (`applyTo` globs).
- `.github/skills/*/SKILL.md` — on-demand workflows and knowledge.
- `.github/agents/*.agent.md` — role agents with tool scoping and handoffs.
- `.github/hooks/*.json` — deterministic lifecycle hooks (guardrails, formatting).
- `.github/prompts/*.prompt.md` — reusable slash commands.

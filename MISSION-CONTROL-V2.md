# Mission Control V2 — Company OS

## Philosophy
This is not a monitoring dashboard. It's the **operating system for an autonomous AI company**.
Every agent is an employee. Every task is trackable. Every decision is auditable.
The company runs 24/7/365 with Virgil as CEO.

## Org Chart
```
🏢 Virgil Reinhard — CEO
  └── 🧠 Cleo (Opus 4.6 / Anthropic) — Chief of Staff
        ├── 🎯 Hunter (Sonnet 4.6 / Anthropic) — Direct Assistant
        └── Operations:
              ├── ⚙️ Echo (ChatGPT 5.2 + Codex / OpenAI) — Engineering Manager
              ├── 🔧 Omega (Gemini Pro 3.1 / Google API) — Operations
              └── 🧡 Flash (Gemini Flash / Google) — Andrea's Ops Bot
```

All agents are fallbacks when Cleo fails, but **only Cleo makes critical decisions**.
Cleo has direct contact with CEO. Others report through the chain.

## Layout
- **Left Sidebar** (collapsible): Navigation menu with icons
- **Top Bar**: Search, notifications, user avatar
- **Main Content**: Dynamic based on selected section

## Left Sidebar Sections
1. **Tasks** — Active tasks, assignments, status tracking
2. **Agents** — Live agent status, model info, current work
3. **Consent** — Pending approvals requiring CEO sign-off
4. **Approvals** — Approved/rejected decision log
5. **Council** — Strategic decisions, deliberation records
6. **Calendar** — Scheduled events, cron jobs, deadlines
7. **Projects** — All projects with categories and progress
8. **Memory** — Institutional memory, daily logs, long-term memory
9. **Docs** — All documentation, memories, agent-created content (reviewable by CEO)
10. **People** — Team directory (agents as people with names, avatars, roles)
11. **Office** — System status, health, infrastructure
12. **Team** — Org chart visualization
13. **Factory** — Production pipeline (books, apps, services)
14. **Pipeline** — Sales/deals pipeline (Amazon, ComeUp, freelance)
15. **Feedback** — Retrospectives, lessons learned, improvements

## Key Screen: Docs
The CEO needs to see:
- All documentation and memories created by agents
- What each agent is thinking, doing, and storing
- Filter by agent, date, type
- Real-time view into agent work products
- Searchable across all files

## Key Screen: People/Team
Agents treated like real people:
- Profile card with avatar, name, position, role
- Model/subscription info
- Current task and status
- Performance metrics
- Communication log

## Future Modules (Architecture Only)
- **Treasury** — Crypto wallet, spending governance, audit trail

## Design System (inherited from V1)
- Background: #0D1117
- Card surfaces: #161B22
- Accent: #58A6FF (electric blue)
- Success: #3FB950 (green)
- Warning: #D29922 (amber)
- Error: #F85149 (red)
- Font: Inter
- Dark theme, glassmorphism cards
- Responsive: desktop-first with sidebar, mobile collapses to hamburger

## Tech
- Next.js 14 (App Router)
- Tailwind CSS
- Backend: OpenClaw API (localhost:3948)
- Deploy: Vercel (later)

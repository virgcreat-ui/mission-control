# Mission Control — Full Build Spec

## Overview
A Next.js 14 web app that serves as the operational cockpit for Cleo's AI agent network.
Mobile-first, dark theme, deployed on Vercel.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom glassmorphism components
- **State:** React Context + SWR for API polling
- **Deploy:** Vercel
- **Backend API:** OpenClaw local API (http://localhost:3948)
- **Auth:** Simple token-based (environment variable)

## Design System
- Background: #0D1117
- Card surfaces: #161B22
- Accent: #58A6FF (electric blue)
- Success: #3FB950 (green)
- Warning: #D29922 (amber)
- Error: #F85149 (red)
- Idle: #8B949E (grey)
- Font: Inter
- Corners: 12px
- Cards: backdrop-blur glassmorphism effect

## 5 Screens

### 1. HOME DASHBOARD (/)
- Top bar: MISSION CONTROL 🚀 + notification bell (count) + user avatar
- Agent circles row: 5 circular avatars with colored glow rings
  - Cleo (green glow) - Leader/Strategist
  - Flash (orange glow) - Andrea's Assistant  
  - Echo (green glow) - Research/Tech
  - Omega (amber glow) - Builder/Heavy
  - Hunter (red glow) - Smart Delegatee
- 4 KPI cards in row: Budget €702, Revenue €0, Books Published 2, Active Tasks 12
- 6 category folder cards in 2x3 grid:
  - Amazon (shopping bag, 3 projects)
  - Books (book, 5 projects)
  - Games (controller, 2 projects)
  - Freelance (briefcase, 2 projects)
  - Apps (code, 9 projects)
  - System (gear, 3 projects)
- Bottom nav: Home | Projects | Agents | Chat | System

### 2. PROJECTS (/projects)
- Tab filters: AMAZON | BOOKS | GAMES | FREELANCE | APPS | SYSTEM
- Each project card:
  - Icon, name, status badge, progress ring, description, last updated
  - Status types: Active (green), Blocked (orange), Planned (grey), Stable (blue), Idea (purple)
- 26 projects total (see data below)

### 3. AGENTS (/agents)
- 5 large profile cards:
  - Circular photo avatar, name, role, status badge, current task, model name
  - "Command Agent" / "Assign Task" buttons
- Current Focus section at bottom

### 4. CHAT (/chat)
- Agent selector row at top (tap to switch conversations)
- Chat bubbles: user (blue, right), agent (dark grey, left)
- Agent avatar next to their messages
- Input: text field + file attach + voice + send
- Real-time via polling OpenClaw API

### 5. SYSTEM (/system)
- OpenClaw version + update status badge
- Cron jobs list with toggle switches
- Heartbeat status indicator
- API key health: Keepa, Grok, ElevenLabs, SP-API
- Memory files browser (read-only)
- Mac mini stats (uptime, disk)

## Project Data (hardcoded initially, then API-driven)
See the 26 projects with categories, status, and progress percentages.

## Agent Avatars
Static images in /public/avatars/:
- cleo.png (Caucasian woman, curly hair, glasses, cyberpunk blazer)
- flash.png (Pixar robot, orange/white)
- echo.png (male, headphones, green streak)
- omega.png (female, afro, utility vest)
- hunter.png (male, red contact lens, leather jacket)

## API Integration (Phase 2)
- GET /api/sessions — list active sessions
- POST /api/sessions/send — send message to Cleo
- GET /api/cron/list — list cron jobs
- POST /api/cron/run — trigger cron job
- OpenClaw runs on localhost:3948

## Phase 1: Static UI (this build)
Build all 5 screens with hardcoded data. Make it look beautiful.
Responsive mobile-first design.

## Phase 2: Wire to OpenClaw API
Connect chat, crons, agents to live data.

## Phase 3: Deploy to Vercel
Add Tailscale tunnel or API proxy for Mac mini connection.

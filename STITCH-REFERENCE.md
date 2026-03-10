# Stitch V2 Design Reference (captured from Stitch canvas)

## Screen 1: CEO Cockpit (Home)
- Left sidebar with: MISSION CONTROL heading, CEO Cockpit subtitle, navigation links (Dashboard, Tasks, Projects, Team, Settings) using material icons
- User profile in sidebar: avatar image, name, role
- Main area:
  - "System Overview" heading with search bar + notification bell
  - 3 KPI cards: €798 (invested), €420 (projected profit), €702 (available)
  - Revenue Streams section with "VIEW ANALYTICS" button
  - "Needs Your Attention" section with items: Pipeline Blockage (3 approvals pending 48h+), Inventory Refill, New Memory Log

## Screen 2: Pipeline Revenue Tracking
- Left sidebar: Mission Control / Operations Hub, nav links (Dashboard, Pipeline, Inventory, Analytics, Settings)
- Main "Pipeline Control" heading with search "Track shipment ID..." and Export Data button
- Heading: "Revenue Pipeline - Global logistics tracking and platform revenue distribution"
- Tab buttons: ALL PLATFORMS | AMAZON FBA | Comeup Services | PUBLISHED BOOKS
- Amazon Order Manifest table with columns: Order ID, Product, Revenue, Status, Date
- Live Tracking section with fulfillment steps (Fulfillment Center → In Transit → Delivered)
- ComeUp Service Performance carousel: UI Design Kit, SaaS Starter, Growth Audit, Motion Video, SEO Copy

## Screen 3: Tasks Kanban Board
- Left sidebar: MISSION CONTROL / Agent Command Center
- Nav: Dashboard, Tasks, Projects, Team, Settings + "New Mission" button
- Main: "Active Operations" heading with search + notifications + profile
- View toggles: Kanban Board | List View | Timeline
- 3 columns: Awaiting Briefing | Active Field Ops | Debriefed & Closed
- Cards with titles, descriptions, avatars, dates

## Design System
- Background: #0D1117
- Card surfaces: #161B22 with glassmorphism (backdrop-filter: blur(16px))
- Border: rgba(48, 54, 61, 0.6)
- Accent: #58A6FF
- Success: #3FB950
- Warning: #D29922
- Error: #F85149
- Font: Inter
- Material icons for navigation
- Rounded corners 12px
- Hover: translateY(-2px) + blue border glow

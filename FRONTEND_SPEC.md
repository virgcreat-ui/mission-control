# Mission Control UI Overhaul

## Goal
We need to update the V2 Next.js dashboard to match the premium, glassmorphic design created in Google Stitch. The current implementation is functionally correct but visually basic.

## Target Aesthetic
- **Colors:** Deep dark theme (#0D1117 background, #161B22 card surfaces). Accent is #58A6FF.
- **Glassmorphism:** Cards should use the existing `.glass-card` CSS class (translucent, blurred background).
- **Icons:** We are switching from `lucide-react` to Google Material Symbols Outlined (add the CDN link to layout).
- **Typography:** Large, bold data points (text-4xl or 5xl for KPIs). Clean, high-contrast hierarchy using `Inter`.

## Tasks for the Engineering Sub-Agent

### 1. `src/app/layout.tsx`
- Inject the Material Symbols CDN link in the `<head>`: 
  `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />`
- Ensure the overall layout maintains the left sidebar and main content area structure.

### 2. `src/components/Sidebar.tsx`
- Replace Lucide icons with `<span className="material-symbols-outlined">icon_name</span>`.
- Add a top header: "MISSION CONTROL" with subtitle "CEO Cockpit".
- Add a bottom user profile section: Virgil Reinhard's avatar, name, and "CEO" role.
- Style active nav links with a subtle blue left-border highlight (`border-l-2 border-accent bg-accent/10`).

### 3. `src/app/page.tsx` (Home / CEO Cockpit)
- Restyle the 3 top KPI cards: INVESTED (€798, amber), PROJECTED PROFIT (€420, green), AVAILABLE (€702, blue). Use large text (`text-5xl font-black`).
- "Revenue Streams" section: Replace basic text with visual progress bars.
- "Needs Your Attention" section: Style as a tight, alert-focused list with red/amber/green status dots.

### 4. `src/app/pipeline/page.tsx`
- Build a structured data table for "Amazon Order Manifest" (Columns: Order ID, Product, Revenue, Status, Date).
- Build a vertical timeline/stepper for "Live Tracking".

### Constraints
- DO NOT rewrite files from scratch. Modify the existing React components.
- Rely on Tailwind CSS and the variables defined in `globals.css`.

Please execute these frontend changes and verify the build succeeds (`npm run build`).
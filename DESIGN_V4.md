# Mission Control - Design Language V4

## The "Wow" Factor: "Neon Noir & Glass"
The design should feel like a futuristic tactical interface, but elegant and premium.

### 1. Global Styles (globals.css)
- **Background:** Pure black `#000000` for high contrast on OLED phone screens.
- **Surface:** `#0D1117` (cards) with `backdrop-filter: blur(20px)` and a `1px` border of `white/0.1`.
- **Glows:** Every primary card gets a `:hover` glow and a subtle static bottom shadow in its accent color.
- **Typography:** `Inter` with extreme tracking on headings (`tracking-[0.2em]`).

### 2. The Team Homepage (src/app/page.tsx)
- Large "Agent Status" header.
- Cards are vertical on mobile, but more refined.
- Add an "Active Mission" tag to agents who are currently running something.
- Soft-pulse online indicator.

### 3. Technical Fix: The "Stagnant" Rule
- NO `100vw` or `vw` units anywhere except the root.
- The `body` must have `position: fixed; inset: 0; overflow: hidden;` to lock it in place on iOS.
- The scrollable content must be inside a single `overflow-y-auto` div that is correctly sized.
- Use `box-sizing: border-box` everywhere (default in Tailwind, but be careful with custom CSS).
- Remove all `min-w` from flex containers on mobile.

### 4. Layout
- Desktop: Left sidebar.
- Mobile: Elegant Bottom Dock (frosted glass, icons only, active indicator is a line above the icon).

# FlowDesk Design System

## 1. Vision & Principles
FlowDesk is designed to be an executive-level helpdesk and project management platform. The "Elegant Dark" theme prioritizes high-contrast readability, technical precision, and a luxurious professional aesthetic.

### Core Principles:
- **Minimalism**: Remove unnecessary clutter to focus on critical data.
- **Precision**: Use monospaced fonts for IDs and timestamps to emphasize technical accuracy.
- **Hierarchy**: Use typography and subtle borders rather than heavy shadows to define structure.
- **Intentionality**: Every color and spacing choice reinforces a sense of premium quality.

---

## 2. Visual Identity

### Color Palette
| Token | Value | Usage |
| :--- | :--- | :--- |
| **Background** | `#0a0a0a` | Primary application background |
| **Card / Surface** | `#141414` | Component containers and headers |
| **Accent (Gold)** | `#c5a059` | Primary actions, active states, highlights |
| **Foreground** | `#ffffff` | Primary text |
| **Muted** | `#9a9a9a` | Secondary text, labels, inactive states |
| **Border** | `rgba(255, 255, 255, 0.08)` | Subtle structural separation |
| **Positive** | `#4caf50` | Success states, upward trends |
| **Negative** | `#f44336` | Errors, critical priority, downward trends |

### Typography
- **Primary Font**: `Helvetica Neue`, Helvetica, Arial, sans-serif
  - Used for all UI elements, headings, and body text.
- **Monospace Font**: `JetBrains Mono`, ui-monospace, SFMono-Regular, monospace
  - Used for Ticket IDs, timestamps, and code-like data.

#### Typographic Scale:
- **H1 (Page Titles)**: `3xl (30px)`, Light weight, Uppercase, `tracking-tight`.
- **H2 (Section Titles)**: `xl (20px)`, Light weight, Uppercase, `tracking-tight`.
- **Navigation**: `11px`, Semibold, Uppercase, `tracking-[1.5px]`.
- **Labels**: `10px`, Bold, Uppercase, `tracking-[1.5px]`.
- **Body**: `sm (14px)`, Normal weight.

---

## 3. Layout & Spacing
- **Grid System**: 12-column responsive grid.
- **Container**: Max-width of `7xl (1280px)` for main content.
- **Header Height**: `70px`.
- **Spacing Scale**:
  - `p-6 / p-8`: Standard container padding.
  - `gap-6 / gap-8`: Standard spacing between major components.
  - `space-y-10`: Vertical rhythm between page sections.

---

## 4. Components

### Cards
- **Style**: `rounded-none`, `border-border`, `bg-card`, `shadow-none`.
- **Rationale**: Sharp corners convey a precise, technical "instrument" feel.

### Buttons
- **Primary**: Gold background, black text, `rounded-none`, uppercase.
- **Outline**: Gold border, gold text, transparent background.
- **Ghost**: Transparent background, gold text on hover.

### Badges
- **Style**: `rounded-none`, uppercase, `text-[9px]`, `font-bold`.
- **Variants**:
  - `Priority`: Color-coded dots (Critical: Rose, High: Orange, Low: Blue).
  - `Status`: Muted background with high-contrast text.

---

## 5. Motion & Interaction
- **Tab Transitions**: Slide-in animation (`y: 10` to `0`) with opacity fade.
- **Active Tab Indicator**: Horizontal gold bar with `layoutId` for smooth sliding transitions.
- **Hover States**: Subtle background shifts (`bg-accent/10`) and gold text color transitions.

---

## 6. Iconography
- **Library**: `lucide-react`.
- **Stroke Width**: `2px` (standard).
- **Sizing**: `w-4 h-4` for inline elements, `w-5 h-5` for primary navigation.

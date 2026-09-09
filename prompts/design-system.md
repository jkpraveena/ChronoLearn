# Implementation Prompt: ChronoLearn (Vertex) Design System

## 1. Goal
Implement the comprehensive **Vertex / ChronoLearn Design System** based on the provided specification image (`design/vertex-designsystem.png`). This includes foundational tokens (colors, typography with Playfair Display & Inter, spacing, border radii, shadows), Tailwind CSS v4 theme integration, reusable UI components (Buttons, Badges, Inputs, Status Indicators, Progress Bar, Cards, Navigation, Breadcrumbs, Pagination), and an interactive design system showcase page for visual verification.

---

## 2. Skills & References Read
- `AGENTS.md` (Design guidelines, strict reproduction of reference image, separate web and studio workspaces, component reusability)
- `sanity-best-practices`
- `design/vertex-designsystem.png`

---

## 3. Code & Config Inspected
- `app/layout.tsx`: Currently configures Geist and Geist Mono. Needs to configure `Playfair_Display` and `Inter` Google fonts with CSS variables (`--font-playfair`, `--font-inter`).
- `app/globals.css`: Currently minimal Tailwind v4 setup. Needs custom `@theme` tokens for Vertex color palette (`primary-100` through `primary-500`, `neutral-50` through `neutral-900`), custom shadow definitions, border radii, and typography utility classes.
- `package.json`: Next.js 16.3.4, React 19, Tailwind CSS v4. Needs `lucide-react` for optical matching of the 24px icon set (Bell, Search, Play, FileText, Bookmark, BarChart2, Clock, User, ChevronRight, CheckCircle2, Lock, Eye, LayoutGrid, Target, Accessibility).

---

## 4. Decisions & Assumptions
- **Tailwind CSS v4 Configuration**: Declare all design tokens in `app/globals.css` using the `@theme` directive, exposing CSS variables and utility classes that map 1:1 to the design system board.
- **Typography**:
  - `Playfair Display` for Display 1 (48px/56px Bold) and Display 2 (36px/44px Bold).
  - `Inter` for Heading 1 (28px/36px SemiBold), Heading 2 (22px/30px SemiBold), Heading 3 (18px/26px Medium), Body Large (16px/24px Regular), Body (14px/20px Regular), and Small (12px/16px Regular).
- **Color Tokens**:
  - Primary: `500` (`#F97316`), `400` (`#FB923C`), `300` (`#FDBA74`), `200` (`#FED7AA`), `100` (`#FFEEE5`)
  - Neutral: `900` (`#0F172A`), `700` (`#334155`), `500` (`#64748B`), `300` (`#CBD5E1`), `200` (`#E2E8F0`), `100` (`#F1F5F9`), `50` (`#FAF8F6`), `White` (`#FFFFFF`)
- **Shadows**:
  - `sm`: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`
  - `md`: `0 4px 12px -2px rgba(15, 23, 42, 0.08)`
  - `lg`: `0 12px 24px -4px rgba(15, 23, 42, 0.10)`
  - `xl`: `0 20px 40px -8px rgba(15, 23, 42, 0.12)`
- **Radius**: `xs` (4px), `sm` (8px), `md` (12px), `lg` (16px), `xl` (24px), `full` (9999px).
- **Component Architecture**: Create clean, modular, typed components in `components/ui/` and `components/cards/` to serve both the design system showcase and future production pages:
  - `Button` (`Primary`, `Secondary`, `Tertiary`, `Text` variants; `default`, `hover`, `disabled` states; 44px height; 12px radius)
  - `Badge` (`video`, `lesson`, `popular` variants)
  - `Input` & `SearchInput` (with icon and `⌘K` shortcut badge)
  - `Select` (dropdown with custom chevron)
  - `StatusIndicator` (`in-progress`, `completed`, `now-playing`, `locked`)
  - `ProgressBar` (orange fill with percentage label)
  - `CourseCard` (with icon, title, description, level, duration, modules)
  - `LessonVideoCard` (video badge, duration/lesson meta, "Watch from" action)
  - `LessonCard` (lesson badge, module label, "View lesson ↗" action)
  - `ResourceCard` (PDF icon, title, size/format meta, external link action)
  - `HeaderNav` & `VertexLogo` (branded logo + navigation items)
  - `Breadcrumbs` & `Pagination`
- **Showcase Page**: Render the full design system dashboard at `app/page.tsx` (and `app/design-system/page.tsx`) replicating the visual layout of `vertex-designsystem.png` section by section (01 Colors, 02 Typography, 03 Type Scale, 04 Spacing, 05 Radius & Shadows, 06 Icons, 07 Buttons, 08 Inputs, 09 Badges, 10 Status, 11 Progress Bar, 12 Cards, 13 Navigation & Pagination, 14 Principles).

---

## 5. Files to Touch / Create
- `package.json`: Add `lucide-react` dependency
- `app/layout.tsx`: Import `Playfair_Display` and `Inter` from `next/font/google`, apply font variables
- `app/globals.css`: Define Tailwind `@theme` variables (colors, fonts, shadows, radii) and typography styles
- `components/ui/button.tsx`: Button component with variants and states
- `components/ui/badge.tsx`: Badge / Tag component
- `components/ui/input.tsx`: Text input and Search input with `⌘K` badge
- `components/ui/select.tsx`: Select dropdown component
- `components/ui/status-indicator.tsx`: Status badges (In Progress, Completed, Now Playing, Locked)
- `components/ui/progress-bar.tsx`: Progress bar component
- `components/ui/breadcrumbs.tsx`: Breadcrumbs component
- `components/ui/pagination.tsx`: Pagination component
- `components/ui/logo.tsx`: Vertex brand logo (SVG icon + text)
- `components/cards/course-card.tsx`: Course card component
- `components/cards/lesson-video-card.tsx`: Video lesson search/card component
- `components/cards/lesson-card.tsx`: Topic lesson card component
- `components/cards/resource-card.tsx`: Resource downloadable card component
- `components/cards/principle-card.tsx`: Platform principles card
- `app/page.tsx`: Interactive, pixel-accurate design system board matching `design/vertex-designsystem.png`

---

## 6. Security Considerations
- Purely presentation and component system work; no secrets or tokens exposed to client code.
- Dependencies installed: `lucide-react` (standard icon library).

---

## 7. Acceptance Criteria
- [x] Font tokens `Playfair Display` and `Inter` accurately applied to headings and body text.
- [x] All color tokens (`primary-100` to `500`, `neutral-50` to `900`) available in Tailwind and CSS.
- [x] All 4 button variants (Primary, Secondary, Tertiary, Text) implement default, hover, and disabled states.
- [x] All badge types (Video, Lesson, Popular) styled accurately with exact color tokens.
- [x] Status indicators and Progress bar rendered according to spec.
- [x] Course Card, Lesson Video Card, Lesson Card, and Resource Card faithfully rendered.
- [x] Navigation bar, Breadcrumbs, Pagination, and Principles components matching spec.
- [x] Responsive layout adapting cleanly from desktop to mobile screens.
- [x] TypeScript compilation (`npm run build` or `npx tsc --noEmit`) passes without errors.
- [x] ESLint (`npm run lint`) passes without errors.

---

## 8. Checks to Run
- `npm run lint` in web workspace
- `npm run build` in web workspace

---

## 9. Manual Test Steps
1. Run `npm run dev` and open `http://localhost:3000`.
2. Compare the live rendered page side-by-side with `design/vertex-designsystem.png`.
3. Verify every numbered section:
   - 01 Colors (Primary and Neutral swatches with hex codes)
   - 02 Typography & 03 Type Scale (Playfair Display for Display 1/2, Inter for Headings/Body/Small)
   - 04 Spacing & 05 Radius & Shadows
   - 06 Icons (Outline and filled)
   - 07 Buttons (Default, Hover, Disabled for Primary, Secondary, Tertiary, Text)
   - 08 Inputs (Search input with `⌘K`, Select dropdown)
   - 09 Badges & 10 Status Indicators & 11 Progress Bar
   - 12 Cards (Course Card, Lesson Video Card, Lesson Card, Resource Card)
   - 13 Navigation, Breadcrumbs & Pagination
   - 14 Platform Principles
4. Test responsiveness by resizing browser window to tablet and mobile widths.
